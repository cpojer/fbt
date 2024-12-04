/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict-local
 */

import FbtHooks, { type FbtHookRegistrations } from './FbtHooks';
import FbtResult from './FbtResult';
import FbtTranslations, { type TranslationDict } from './FbtTranslations';
import getFbsResult from './getFbsResult';
import IntlViewerContext from './IntlViewerContext';

export type FbtInitInput = {
  hooks?: ?FbtHookRegistrations,
  translations: TranslationDict,
};

// Using "auto-bind" to avoid Flow "method-unbinding" issue
const getFbtResult = FbtResult.get.bind(FbtResult);

export default function fbtInit(input: FbtInitInput): void {
  FbtTranslations.registerTranslations(input.translations);

  // Hookup default implementations
  const hooks = input.hooks ?? {};
  if (hooks.getFbtResult == null) {
    // $FlowFixMe[prop-missing]
    hooks.getFbtResult = getFbtResult;
  }
  if (hooks.getFbsResult == null) {
    // $FlowFixMe[prop-missing]
    hooks.getFbsResult = getFbsResult;
  }
  if (hooks.getTranslatedInput == null) {
    // $FlowFixMe[prop-missing]
    hooks.getTranslatedInput = FbtTranslations.getTranslatedInput;
  }
  if (hooks.getViewerContext == null) {
    // $FlowFixMe[prop-missing]
    hooks.getViewerContext = () => IntlViewerContext;
  }

  FbtHooks.register(hooks);
}
