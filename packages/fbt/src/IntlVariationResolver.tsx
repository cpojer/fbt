import invariant from 'invariant';
import Hooks from './Hooks.tsx';
import IntlNumberType from './IntlNumberType.tsx';
import IntlVariations from './IntlVariations.tsx';

export const EXACTLY_ONE = '_1';

export function getNumberVariations(
  number: number
): Array<string | number | string> {
  const numType = IntlNumberType.get(
    Hooks.getViewerContext().locale
  ).getVariation(number);
  invariant(
    numType & IntlVariations.BITMASK_NUMBER,
    'Invalid number provided: %s (%s)',
    numType,
    typeof numType
  );
  return number === 1 ? [EXACTLY_ONE, numType, '*'] : [numType, '*'];
}

export function getGenderVariations(gender: number): Array<string | number> {
  invariant(
    gender & IntlVariations.GENDER_UNKNOWN,
    'Invalid gender provided: %s (%s)',
    gender,
    typeof gender
  );
  return [gender, '*'];
}
