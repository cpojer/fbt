/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @generated SignedSource<<81c668e0f6410e50d678e84b958df734>>
 *
 * @flow strict
 */

'use strict';

import IntlVariations from '../IntlVariations';

export default {
  getVariation(n: number): $Values<typeof IntlVariations> {
    if (n === 1 || n === 11) {
      return IntlVariations.NUMBER_ONE;
    } else if (n === 2 || n === 12) {
      return IntlVariations.NUMBER_TWO;
    } else if ((n >= 3 && n <= 10) || (n >= 13 && n <= 19)) {
      return IntlVariations.NUMBER_FEW;
    } else {
      return IntlVariations.NUMBER_OTHER;
    }
  },
};
