import type { NodePath } from '@babel/core';
import BabelTypes, {
  CallExpression,
  ImportDeclaration,
  JSXElement,
  Node,
} from '@babel/types';
import { parse as parseDocblock } from 'jest-docblock';
import type {
  FbtTableKey,
  PatternHash,
  PatternString,
} from '../../fbt/src/FbtTable';
import FbtCommonFunctionCallProcessor from './babel-processors/FbtCommonFunctionCallProcessor';
import type { MetaPhrase } from './babel-processors/FbtFunctionCallProcessor';
import FbtFunctionCallProcessor from './babel-processors/FbtFunctionCallProcessor';
import JSXFbtProcessor from './babel-processors/JSXFbtProcessor';
import FbtElementNode from './fbt-nodes/FbtElementNode';
import type { AnyFbtNode, PlainFbtNode } from './fbt-nodes/FbtNode';
import { toPlainFbtNodeTree } from './fbt-nodes/FbtNodeUtil';
import type { FbtCommonMap } from './FbtCommon';
import { init } from './FbtCommon';
import type { FbtCallSiteOptions, FbtOptionConfig } from './FbtConstants';
import { JSModuleName, ValidFbtOptions } from './FbtConstants';
import type { EnumManifest, EnumModule } from './FbtEnumRegistrar';
import FbtEnumRegistrar from './FbtEnumRegistrar';
import FbtNodeChecker from './FbtNodeChecker';
import { checkOption, errorAt, objMap } from './FbtUtil';
import { FbtVariationType } from './translate/IntlVariations';

const { FBT } = JSModuleName;

const isRequireCall = (node: CallExpression) =>
  node.type === 'CallExpression' &&
  node.callee.type === 'Identifier' &&
  node.callee.name === 'require' &&
  node.arguments.length === 1 &&
  node.arguments[0].type === 'StringLiteral';

const isRequireAlias = (path: NodePath<Node>) => {
  const grandParent = path.parentPath?.parent;
  const parent = path.parent;
  const node = path.node;

  return (
    grandParent?.type === 'Program' &&
    parent.type === 'VariableDeclaration' &&
    node.type === 'VariableDeclarator' &&
    node.id.type === 'Identifier' &&
    node.init &&
    node.init.type === 'CallExpression' &&
    isRequireCall(node.init)
  );
};

type FbtEnumLoader = (enumFilePath: string) => EnumModule;
export type PluginOptions = {
  collectFbt?: boolean;
  // Map of extra fbt options (or JSX attributes) to accept on fbt callsites.
  // We will only accept them at the parsing phase and output them when rendering fbt._() callsites,
  // without doing any further processing on them.
  // We only accept plain string literals as option values at the moment.
  extraOptions: FbtOptionConfig;
  fbtBase64?: boolean;
  fbtCommon?: FbtCommonMap;
  fbtCommonPath?: string | null | undefined;
  // Path to a JS module that must export a function that is responsible for
  // loading an fbt enum (by file path) and return its object.
  // I.e. fbt enum loading function signature: `FbtEnumLoader`
  fbtEnumLoader?: string | null | undefined;
  // Function that would return an fbt manifest object
  fbtEnumManifest?: EnumManifest | null | undefined;
  // Fbt enum file path
  fbtEnumPath?: string | null | undefined;
  // Object map of file paths keyed by fbt enum module names
  fbtEnumToPath?:
    | {
        [enumName: string]: string;
      }
    | null
    | undefined;
  fbtSentinel?: string | null | undefined;
  filename?: string | null | undefined;
  // If true, generate the `outerTokenName` property on the JSFbt tree leaves.
  generateOuterTokenName?: boolean;
};
/**
 * Token alias (aka mangled token name)
 */
type TokenAlias = string;
/**
 * Dictionary of clear token names to aliases (aka mangled token names)
 */
export type TokenAliases = {
  [clearTokenName: string]: TokenAlias;
};
/**
 * This is the main payload collected from the fbt callsite.
 *
 * - For simple fbt calls without interpolation (fbt.param) or multiplexing (fbt.plural,
 *   fbt.enum, viewer context variation, etc), this is a simple TableJSFBTTreeLeaf object.
 * - Otherwise this is a tree structure whose keys correspond to the associated string variation
 *   parameters passed to the various fbt constructs (param, plural, pronoun) of this callsite;
 *   and tree leaves are TableJSFBTTreeLeaf objects.
 */
export type TableJSFBTTreeLeaf = {
  desc: string;
  hash?: PatternHash;
  text: PatternString;
  tokenAliases?: TokenAliases;
  // The token name (at the outer string level) referring to this inner string
  //
  // E.g. For the fbt string `<fbt>Hello <i>World</i></fbt>`,
  // the outer string is "Hello {=World}", and the inner string is: "World".
  // So the outer token name of the inner string will be "=World"
  outerTokenName?: string;
};
export type TableJSFBTTree = TableJSFBTTreeLeaf | TableJSFBTTreeBranch;
export type TableJSFBTTreeBranch = Partial<Record<FbtTableKey, TableJSFBTTree>>;

// Describes the usage of one level of the JSFBT table tree
export type JSFBTMetaEntry = Readonly<
  | {
      type: (typeof FbtVariationType)['NUMBER'];
      singular?: true; // TODO(T29504932) deprecate this,
      token?: string;
      range?: undefined;
    }
  | {
      type: (typeof FbtVariationType)['GENDER'];
      token: string;
      range?: undefined;
    }
  | {
      type: (typeof FbtVariationType)['PRONOUN'];
      range?: undefined;
      token?: undefined;
    }
  | {
      type?: undefined;
      token?: undefined;
      range: ReadonlyArray<string>;
    }
>;
export type TableJSFBT = Readonly<{
  t: Readonly<TableJSFBTTree>;
  m: ReadonlyArray<JSFBTMetaEntry | null | undefined>;
}>;
export type ObjectWithJSFBT = {
  jsfbt: TableJSFBT;
};
export type Phrase = FbtCallSiteOptions & {
  col_beg: number;
  col_end: number;
  filepath: string | null | undefined;
  line_beg: number;
  line_end: number;
  project: string;
} & ObjectWithJSFBT;
type ChildToParentMap = {
  [childIndex: number]: number;
};

/**
 * Default options passed from a docblock.
 */
let defaultOptions: FbtCallSiteOptions;

/**
 * Non-native fbt options that we accept and pass to fbt._() calls
 */
let validFbtExtraOptions: Readonly<FbtOptionConfig>;

/**
 * An array containing all collected phrases.
 */
let allMetaPhrases: Array<
  MetaPhrase & {
    phrase: Phrase;
  }
>;

/**
 * An array containing the child to parent relationships for implicit nodes.
 */
let childToParent: ChildToParentMap;

type Visitor = {
  opts: PluginOptions;
  file: { code: string; ast: { comments: ReadonlyArray<{ value: string }> } };
};

const toVisitor = (visitor: unknown): visitor is Visitor => true;

export default function Transform({ types: t }: { types: typeof BabelTypes }) {
  return {
    pre() {
      const visitor = toVisitor(this) ? this : null;
      if (!visitor) {
        return;
      }

      const pluginOptions: PluginOptions | undefined = visitor.opts;
      pluginOptions.fbtBase64 = pluginOptions.fbtBase64;

      init(pluginOptions);
      FbtEnumRegistrar.setEnumManifest(getEnumManifest(pluginOptions));
      validFbtExtraOptions = pluginOptions.extraOptions || {};
      initDefaultOptions(visitor);
      allMetaPhrases = [];
      childToParent = {};
    },

    name: FBT,
    visitor: {
      /**
       * Transform jsx-style <fbt> to fbt() calls.
       */
      JSXElement(path: NodePath<JSXElement>) {
        const root = JSXFbtProcessor.create({
          babelTypes: t,
          path,
          validFbtExtraOptions,
        });

        if (!root) {
          return;
        }
        root.convertToFbtFunctionCallNode(allMetaPhrases.length);
      },

      /**
       * Register enum imports
       */
      ImportDeclaration(path: NodePath<ImportDeclaration>) {
        FbtEnumRegistrar.registerImportIfApplicable(path);
      },

      /**
       * Transform fbt("text", "desc", {project: "project"}) to semantically:
       *
       * fbt._(
       *   fbtSentinel +
       *   JSON.stringify({
       *     jsfbt: {
       *      text: "text",
       *      desc: "desc",
       *     },
       *     project: "project",
       *   }) +
       *   fbtSentinel
       * );
       */
      CallExpression(path: NodePath<CallExpression>) {
        const visitor = toVisitor(this) ? this : null;
        if (!visitor) {
          return null;
        }

        const fileSource = visitor.file.code;
        const pluginOptions: PluginOptions = visitor.opts;

        const root = FbtCommonFunctionCallProcessor.create({
          babelTypes: t,
          path,
        });

        if (root) {
          path.replaceWith(root.convertToNormalCall());
          return;
        }

        if (isRequireAlias(path.parentPath)) {
          FbtEnumRegistrar.registerRequireIfApplicable(path);
          return;
        }

        const processor = FbtFunctionCallProcessor.create({
          babelTypes: t,
          defaultFbtOptions: defaultOptions,
          fileSource,
          validFbtExtraOptions,
          path,
          pluginOptions,
        });

        if (!processor) {
          return;
        }

        processor.throwIfExistsNestedFbtConstruct();

        const { callNode, metaPhrases } = processor.convertToFbtRuntimeCall();
        path.replaceWith(callNode);

        if (pluginOptions.collectFbt) {
          const initialPhraseCount = allMetaPhrases.length;
          metaPhrases.forEach((metaPhrase, index) => {
            if (metaPhrase.phrase.doNotExtract) {
              return;
            }
            addMetaPhrase(metaPhrase, pluginOptions);

            if (metaPhrase.parentIndex != null) {
              addEnclosingString(
                index + initialPhraseCount,
                metaPhrase.parentIndex + initialPhraseCount
              );
            }
          });
        }
      },

      Program: {
        exit(path: NodePath<Node>) {
          path.traverse({
            CallExpression(path: NodePath<CallExpression>) {
              if (
                FbtNodeChecker.getFbtConstructNameFromFunctionCall(path.node) !=
                null
              ) {
                throw errorAt(
                  path.node,
                  `Fbt constructs can only be used within the scope of an fbt` +
                    ` string. I.e. It should be used directly inside an ` +
                    `‹fbt› / ‹fbs› callsite`
                );
              }
            },
          });
        },
      },
    },
  };
}

Transform.getExtractedStrings = (): Array<Phrase> =>
  allMetaPhrases.map((metaPhrase) => metaPhrase.phrase);

Transform.getChildToParentRelationships = (): ChildToParentMap =>
  childToParent || {};

Transform.getFbtElementNodes = (): Array<PlainFbtNode> => {
  const phraseToIndexMap = new Map<AnyFbtNode, number>(
    allMetaPhrases.map((metaPhrase, index) => [metaPhrase.fbtNode, index])
  );

  return allMetaPhrases
    .map(({ fbtNode }) =>
      fbtNode instanceof FbtElementNode
        ? toPlainFbtNodeTree(fbtNode, phraseToIndexMap)
        : null
    )
    .filter((node): node is PlainFbtNode => node != null);
};

function initDefaultOptions(state: {
  file: { ast: { comments: ReadonlyArray<{ value: string }> } };
}) {
  defaultOptions = {};
  const comment = state.file.ast.comments[0];
  const docblock = (comment && comment.value) || '';
  const fbtDocblockOptions = parseDocblock(docblock).fbt;
  if (fbtDocblockOptions && typeof fbtDocblockOptions === 'string') {
    defaultOptions = JSON.parse(fbtDocblockOptions);
    Object.keys(defaultOptions).forEach((o) => checkOption(o, ValidFbtOptions));
  }
  if (!defaultOptions.project) {
    defaultOptions.project = '';
  }
}

function addMetaPhrase(metaPhrase: MetaPhrase, pluginOptions: PluginOptions) {
  const { fbtNode } = metaPhrase;
  allMetaPhrases.push({
    ...metaPhrase,
    phrase: {
      project: metaPhrase.phrase.project || '',
      filepath: pluginOptions.filename,
      line_beg: fbtNode.node.loc?.start.line || 0,
      col_beg: fbtNode.node.loc?.start.column || 0,
      line_end: fbtNode.node.loc?.end.line || 0,
      col_end: fbtNode.node.loc?.end.column || 0,
      ...metaPhrase.phrase,
    },
  });
}

function addEnclosingString(childIdx: number, parentIdx: number) {
  childToParent[childIdx] = parentIdx;
}

function getEnumManifest(opts: PluginOptions): EnumManifest | null | undefined {
  const { fbtEnumManifest, fbtEnumPath, fbtEnumToPath } = opts;
  if (fbtEnumManifest != null) {
    return fbtEnumManifest;
  } else if (fbtEnumPath != null) {
    return require(fbtEnumPath);
  } else if (fbtEnumToPath != null) {
    const loadEnum: FbtEnumLoader = opts.fbtEnumLoader
      ? require(opts.fbtEnumLoader)
      : require;
    return objMap(fbtEnumToPath, loadEnum);
  }
  return null;
}
