import Hooks, {
  FbtRuntimeCallInput,
  FbtRuntimeInput,
  FbtTranslatedInput,
} from './Hooks.tsx';

export type TranslationDict = {
  [locale: string]: {
    [hashKey: string]: FbtRuntimeInput;
  };
};

let currentTranslations: TranslationDict = {};

const defaultLocale = 'en_US';

export default {
  getRegisteredTranslations(): TranslationDict {
    return currentTranslations;
  },

  getTranslatedInput({
    args,
    options,
  }: FbtRuntimeCallInput): FbtTranslatedInput | null {
    const hashKey = options?.hk;
    const { locale } = Hooks.getViewerContext();
    const table = currentTranslations[locale];
    if (process.env.NODE_ENV === 'development') {
      if (!table && locale !== defaultLocale) {
        // eslint-disable-next-line no-console
        console.warn('Translations have not been provided.');
      }
    }

    return hashKey == null || table?.[hashKey] == null
      ? null
      : {
          args,
          table: table[hashKey],
        };
  },

  mergeTranslations(newTranslations: TranslationDict) {
    Object.keys(newTranslations).forEach((locale) => {
      currentTranslations[locale] = Object.assign(
        currentTranslations[locale] ?? {},
        newTranslations[locale],
      );
    });
  },

  registerTranslations(translations: TranslationDict) {
    currentTranslations = translations;
  },
};