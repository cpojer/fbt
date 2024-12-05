import { CallExpression, isStringLiteral } from '@babel/types';
import invariant from 'invariant';
import { errorAt } from '../FbtUtil';
import type { StringVariationArgsMap } from './FbtArguments';
import FbtNode from './FbtNode';
import { FbtNodeType } from './FbtNodeType';
import type { FromBabelNodeFunctionArgs } from './FbtNodeUtil';
import {
  createInstanceFromFbtConstructCallsite,
  tokenNameToTextPattern,
} from './FbtNodeUtil';

type Options = {
  name: string; // Name of the string token
};

/**
 * Represents an <fbt:sameParam> or fbt.sameParam() construct.
 * @see docs/params.md
 */
export default class FbtSameParamNode extends FbtNode<
  never,
  CallExpression,
  null,
  Options
> {
  static readonly type: FbtNodeType = FbtNodeType.SameParam;

  /**
   * Create a new class instance given a BabelNode root node.
   * If that node is incompatible, we'll just return `null`.
   */
  static fromBabelNode({
    moduleName,
    node,
  }: FromBabelNodeFunctionArgs): FbtSameParamNode | null | undefined {
    return createInstanceFromFbtConstructCallsite(moduleName, node, this);
  }

  override getOptions(): Options {
    try {
      const [name] = this.getCallNodeArguments() || [];
      invariant(
        isStringLiteral(name),
        'Expected first argument of %s.sameParam to be a string literal, but got `%s`',
        this.moduleName,
        (name && name.type) || 'unknown'
      );
      return { name: name.value };
    } catch (error: any) {
      throw errorAt(this.node, error);
    }
  }

  override getTokenName(_argsMap: StringVariationArgsMap): string {
    return this.options.name;
  }

  override getText(_argsList: StringVariationArgsMap): string {
    try {
      return tokenNameToTextPattern(this.getTokenName(_argsList));
    } catch (error: any) {
      throw errorAt(this.node, error);
    }
  }

  override getArgsForStringVariationCalc(): ReadonlyArray<never> {
    return [];
  }

  override getFbtRuntimeArg(): null {
    return null;
  }
}
