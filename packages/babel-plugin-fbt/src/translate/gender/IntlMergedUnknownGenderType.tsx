import { Gender } from '../IntlVariations';

export function getFallback(): typeof Gender.MALE {
  return Gender.MALE;
}

export function getGenderVariations(): ReadonlyArray<
  (typeof Gender)[keyof typeof Gender]
> {
  return [Gender.MALE, Gender.FEMALE];
}
