import { CallExpression, isStringLiteral, stringLiteral } from '@babel/types';
import invariant from 'invariant';
import type { CallExpressionArg } from '../FbtUtil';
import {
  createFbtRuntimeArgCallExpression,
  enforceBabelNodeCallExpressionArg,
  errorAt,
} from '../FbtUtil';
import { GENDER_ANY } from '../translate/IntlVariations';
import type { StringVariationArgsMap } from './FbtArguments';
import { GenderStringVariationArg } from './FbtArguments';
import FbtNode from './FbtNode';
import { FbtNodeType } from './FbtNodeType';
import type { FromBabelNodeFunctionArgs } from './FbtNodeUtil';
import {
  createInstanceFromFbtConstructCallsite,
  tokenNameToTextPattern,
} from './FbtNodeUtil';

type Options = {
  // `BabelNode` representing the `gender` of the fbt:name's value
  gender: CallExpressionArg;
  name: string; // Name of the string token,
  // `BabelNode` representing the `value` of the fbt:name to render on the UI
  value: CallExpressionArg;
};

/**
 * Represents an <fbt:name> or fbt.name() construct.
 * @see docs/params.md
 */
export default class FbtNameNode extends FbtNode<
  GenderStringVariationArg,
  CallExpression,
  null,
  Options
> {
  static readonly type: FbtNodeType = FbtNodeType.Name;

  override getOptions(): Options {
    try {
      const { moduleName } = this;
      let [name, value, gender] = this.getCallNodeArguments() || [];

      invariant(
        isStringLiteral(name),
        'Expected first argument of %s.name to be a string literal, but got %s',
        moduleName,
        name && name.type
      );
      name = name.value;

      value = enforceBabelNodeCallExpressionArg(
        value,
        `Second argument of ${moduleName}.name`
      );
      gender = enforceBabelNodeCallExpressionArg(
        gender,
        `Third argument of ${moduleName}.name`
      );

      return { name, value, gender };
    } catch (error: any) {
      throw errorAt(this.node, error);
    }
  }

  /**
   * Create a new class instance given a BabelNode root node.
   * If that node is incompatible, we'll just return `null`.
   */
  static fromBabelNode({
    moduleName,
    node,
  }: FromBabelNodeFunctionArgs): FbtNameNode | null | undefined {
    return createInstanceFromFbtConstructCallsite(moduleName, node, this);
  }

  override getArgsForStringVariationCalc(): ReadonlyArray<GenderStringVariationArg> {
    return [
      new GenderStringVariationArg(this, this.options.gender, [GENDER_ANY]),
    ];
  }

  override getTokenName(_argsMap: StringVariationArgsMap): string {
    return this.options.name;
  }

  override getText(argsMap: StringVariationArgsMap): string {
    try {
      argsMap.mustHave(this);
      return tokenNameToTextPattern(this.options.name);
    } catch (error: any) {
      throw errorAt(this.node, error);
    }
  }

  override getFbtRuntimeArg(): CallExpression {
    const { gender, name, value } = this.options;
    return createFbtRuntimeArgCallExpression(
      this,
      [stringLiteral(name), value, gender].filter(Boolean)
    );
  }

  override getArgsThatShouldNotContainFunctionCallOrClassInstantiation(): Readonly<{
    [argName: string]: CallExpressionArg;
  }> {
    return { gender: this.options.gender };
  }
}
