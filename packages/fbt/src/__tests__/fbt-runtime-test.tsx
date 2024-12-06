/**
 * (c) Meta Platforms, Inc. and affiliates. Confidential and proprietary.
 *
 * @flow
 */

import fbtRuntime from '../fbt';
import FbtHooks from '../FbtHooks';
import FbtResult from '../FbtResult';
import { FbtTableArg } from '../FbtTableAccessor';
import intlNumUtils from '../intlNumUtils';
// Warning: importing JS modules outside of beforeEach blocks is generally bad practice
// in jest tests. We might need to move these modules inside beforeEach().
// These ones can stay here for now since they have a consistent behavior across this test suite.
import IntlVariations from '../IntlVariations';
import IntlViewerContext from '../IntlViewerContext';

const ONE = String(IntlVariations.NUMBER_ONE);
const FEW = String(IntlVariations.NUMBER_FEW);
const MALE = String(IntlVariations.GENDER_MALE);
const FEMALE = String(IntlVariations.GENDER_FEMALE);

FbtHooks.register({
  getFbtResult: FbtResult.get,
});

describe('fbt', () => {
  it('should handle variated numbers', function () {
    FbtHooks.register({
      // IntlCLDRNumberType31
      getViewerContext: () => ({ ...IntlViewerContext, locale: 'br_FR' }),
    });
    const numToType = {
      21: IntlVariations.NUMBER_ONE,
      22: IntlVariations.NUMBER_TWO,
      103: IntlVariations.NUMBER_FEW,
      1000000: IntlVariations.NUMBER_MANY,
      15: IntlVariations.NUMBER_OTHER,
    } as const;
    for (const n of Object.keys(numToType)) {
      const type = numToType[n as unknown as keyof typeof numToType];
      const displayNumber = intlNumUtils.formatNumberWithThousandDelimiters(
        parseFloat(n)
      );
      expect(fbtRuntime._param('num', parseInt(n, 10), [0])).toEqual([
        [type, '*'],
        { num: displayNumber },
      ]);
    }
  });

  it('should access table with fallback logic', function () {
    let genderMock: IntlVariations;
    FbtHooks.register({
      getViewerContext: jest.fn(() => ({
        GENDER: genderMock,
        locale: 'ro_RO', // IntlCLDRNumberType19
      })),
    });

    const table: any = {
      __vcg: 1, // viewer-context gender
      '*': {},
    };
    table['*']['A'] = { '*': 'A,UNKNOWN,OTHER {name} has {num}' };
    table['*']['A'][ONE] = 'A,UNKNOWN,ONE {name} has {num}';
    table['*']['A'][FEW] = 'A,UNKNOWN,FEW {name} has {num}';
    table['*']['B'] = { '*': 'B,UNKNOWN,OTHER {name} has {num}' };
    table['*']['B'][ONE] = 'B,UNKNOWN,ONE {name} has {num}';
    table['*']['B'][FEW] = 'B,UNKNOWN,FEW {name} has {num}';
    table[MALE] = { A: { '*': 'A,MALE,OTHER {name} has {num}' } };
    table[MALE]['A'][ONE] = 'A,MALE,ONE {name} has {num}';
    // table['*'][male]['A'][FEW] = fallback to other ^^^
    // table['*'][male]['B'] = fallback to unknown gender ^^^
    table[FEMALE] = {
      B: { '*': 'B,FEMALE,OTHER {name} has {num}' },
    };
    table[FEMALE]['B'][FEW] = 'B,FEMALE,FEW {name} has {num}';
    // table[female]['B'][ONE] = fallback to other ^^^
    // table[female]['A'] = fallback to unknown gender ^^^

    const few = fbtRuntime._param('num', 10, [0] /*Variations.NUMBER*/);
    const other = fbtRuntime._param('num', 20, [0]);
    const one = fbtRuntime._param('num', 1, [0]);
    const A = fbtRuntime._enum('A', { A: 'A', B: 'B' });
    const B = fbtRuntime._enum('B', { A: 'A', B: 'B' });
    const name = fbtRuntime._param('name', 'Bob');

    // GENDER UNKNOWN
    genderMock = IntlVariations.GENDER_UNKNOWN;
    let tests = [
      { arg: [A, few, name], expected: 'A,UNKNOWN,FEW Bob has 10' },
      { arg: [A, one, name], expected: 'A,UNKNOWN,ONE Bob has 1' },
      { arg: [A, other, name], expected: 'A,UNKNOWN,OTHER Bob has 20' },
      { arg: [B, few, name], expected: 'B,UNKNOWN,FEW Bob has 10' },
      { arg: [B, one, name], expected: 'B,UNKNOWN,ONE Bob has 1' },
      { arg: [B, other, name], expected: 'B,UNKNOWN,OTHER Bob has 20' },
    ];
    const runTest = function (test: {
      arg: Array<FbtTableArg>;
      expected: string;
    }) {
      try {
        expect(fbtRuntime._(table, test.arg).toString()).toBe(test.expected);
      } catch (error: any) {
        error.message += `\ntest.expected="${test.expected}"`;
        throw error;
      }
    };
    tests.forEach(runTest);

    genderMock = IntlVariations.GENDER_MALE;
    tests = [
      { arg: [A, few, name], expected: 'A,MALE,OTHER Bob has 10' },
      { arg: [A, one, name], expected: 'A,MALE,ONE Bob has 1' },
      { arg: [A, other, name], expected: 'A,MALE,OTHER Bob has 20' },
      { arg: [B, few, name], expected: 'B,UNKNOWN,FEW Bob has 10' },
      { arg: [B, one, name], expected: 'B,UNKNOWN,ONE Bob has 1' },
      { arg: [B, other, name], expected: 'B,UNKNOWN,OTHER Bob has 20' },
    ];
    tests.forEach(runTest);

    genderMock = IntlVariations.GENDER_FEMALE;
    tests = [
      { arg: [A, few, name], expected: 'A,UNKNOWN,FEW Bob has 10' },
      { arg: [A, one, name], expected: 'A,UNKNOWN,ONE Bob has 1' },
      { arg: [A, other, name], expected: 'A,UNKNOWN,OTHER Bob has 20' },
      { arg: [B, few, name], expected: 'B,FEMALE,FEW Bob has 10' },
      { arg: [B, one, name], expected: 'B,FEMALE,OTHER Bob has 1' },
      { arg: [B, other, name], expected: 'B,FEMALE,OTHER Bob has 20' },
    ];
    tests.forEach(runTest);
  });
});
