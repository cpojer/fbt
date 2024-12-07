import {
  arrayExpression,
  CallExpression,
  Expression,
  isExpression,
  isStringLiteral,
  numericLiteral,
  stringLiteral,
} from '@babel/types';
import invariant from 'invariant';
import nullthrows from 'nullthrows';
import type { ParamVariationType } from '../../../fbt/src/FbtRuntimeTypes';
import { ValidParamOptions } from '../FbtConstants';
import type {
  BabelNodeCallExpressionArgument,
  CallExpressionArg,
} from '../FbtUtil';
import {
  collectOptionsFromFbtConstruct,
  createFbtRuntimeArgCallExpression,
  enforceBabelNodeExpression,
  errorAt,
  varDump,
} from '../FbtUtil';
import { GENDER_ANY, NUMBER_ANY } from '../translate/IntlVariations';
import type { StringVariationArgsMap } from './FbtArguments';
import {
  GenderStringVariationArg,
  NumberStringVariationArg,
} from './FbtArguments';
import FbtNode from './FbtNode';
import { FbtNodeType } from './FbtNodeType';
import type { FromBabelNodeFunctionArgs } from './FbtNodeUtil';
import {
  createInstanceFromFbtConstructCallsite,
  tokenNameToTextPattern,
} from './FbtNodeUtil';

type Options = {
  gender?: Expression | null | undefined; // Represents the `gender`,
  name: string; // Name of the string token,
  // If `true`, the string that uses this fbt:param will have number variations.
  // The `number` value will be inferred from the value of fbt:param
  // If `number` is a `BabelNode`, then we'll use it internally as the value to determine
  // the number variation, and the fbt:param value will represent the UI text to render.
  number?: true | null | undefined | Expression;
  value: BabelNodeCallExpressionArgument;
};

/**
 * Variations.
 */
const ParamVariation: ParamVariationType = {
  number: 0,
  gender: 1,
};

/**
 * Represents an <fbt:param> or fbt.param() construct.
 * @see docs/params.md
 */
export default class FbtParamNode extends FbtNode<
  GenderStringVariationArg | NumberStringVariationArg,
  CallExpression,
  null,
  Options
> {
  static readonly type: FbtNodeType = FbtNodeType.Param;

  override getOptions(): Options {
    try {
      const rawOptions = collectOptionsFromFbtConstruct(
        this.moduleName,
        this.node,
        ValidParamOptions
      );
      const [arg0, arg1] = this.getCallNodeArguments() || [];
      const gender = enforceBabelNodeExpression.orNull(rawOptions.gender);
      const number =
        typeof rawOptions.number === 'boolean'
          ? rawOptions.number
          : enforceBabelNodeExpression.orNull(rawOptions.number);

      invariant(
        number !== false,
        '`number` option must be an expression or `true`'
      );
      invariant(
        !gender || !number,
        'Gender and number options must not be set at the same time'
      );

      let name = typeof rawOptions.name === 'string' ? rawOptions.name : null;
      if (name == null || name === '') {
        invariant(
          isStringLiteral(arg0),
          'First function argument must be a string literal'
        );
        name = arg0.value;
      }
      invariant(name.length, 'Token name string must not be empty');

      const value = nullthrows(
        arg1,
        'The second function argument must not be null'
      );

      return {
        gender,
        name,
        number,
        value,
      };
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
  }: FromBabelNodeFunctionArgs): FbtParamNode | null | undefined {
    return createInstanceFromFbtConstructCallsite(moduleName, node, this);
  }

  override getArgsForStringVariationCalc(): ReadonlyArray<
    GenderStringVariationArg | NumberStringVariationArg
  > {
    const { gender, number } = this.options;
    const ret = [];
    invariant(
      !gender || !number,
      'Gender and number options must not be set at the same time'
    );
    if (gender) {
      ret.push(new GenderStringVariationArg(this, gender, [GENDER_ANY]));
    } else if (number) {
      ret.push(
        new NumberStringVariationArg(this, number === true ? null : number, [
          NUMBER_ANY,
        ])
      );
    }
    return ret;
  }

  override getTokenName(_argsMap: StringVariationArgsMap): string {
    return this.options.name;
  }

  override getText(argsMap: StringVariationArgsMap): string {
    try {
      this.getArgsForStringVariationCalc().forEach((expectedArg) => {
        const svArg = argsMap.get(this);
        invariant(
          svArg.constructor === expectedArg.constructor,
          'Expected SVArgument instance of %s but got %s instead: %s',
          expectedArg.constructor.name || 'unknown',
          svArg.constructor.name || 'unknown',
          varDump(svArg)
        );
      });
      return tokenNameToTextPattern(this.getTokenName(argsMap));
    } catch (error: any) {
      throw errorAt(this.node, error);
    }
  }

  override getFbtRuntimeArg(): CallExpression {
    const { gender, name, number, value } = this.options;
    let variationValues: Array<Expression> | null = null;

    if (number != null) {
      variationValues = [
        numericLiteral(ParamVariation.number),
      ] as Array<Expression>;
      if (number !== true) {
        // For number="true" we don't pass additional value.
        variationValues.push(number);
      }
    } else if (gender != null) {
      variationValues = [numericLiteral(ParamVariation.gender), gender];
    }
    return createFbtRuntimeArgCallExpression(
      this,
      [
        stringLiteral(name),
        value,
        variationValues ? arrayExpression(variationValues) : null,
      ].filter((node): node is Expression => node != null)
    );
  }

  override getArgsThatShouldNotContainFunctionCallOrClassInstantiation(): Readonly<{
    [argName: string]: CallExpressionArg;
  }> {
    const { gender, number } = this.options;
    if (gender != null) {
      return { gender };
    }
    return isExpression(number) ? { number } : {};
  }
}
