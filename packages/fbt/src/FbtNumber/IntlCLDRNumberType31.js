/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @generated SignedSource<<2483f69b45febc9b46f86a5bdbc4d0af>>
 *
 * @flow strict
 */

'use strict';

import IntlVariations from '../IntlVariations';

export default {
  getVariation(n: number): $Values<typeof IntlVariations> {
    if (n % 10 === 1 && n % 100 !== 11 && n % 100 !== 71 && n % 100 !== 91) {
      return IntlVariations.NUMBER_ONE;
    } else if (
      n % 10 === 2 &&
      n % 100 !== 12 &&
      n % 100 !== 72 &&
      n % 100 !== 92
    ) {
      return IntlVariations.NUMBER_TWO;
    } else if (
      ((n % 10 >= 3 && n % 10 <= 4) || n % 10 === 9) &&
      (n % 100 < 10 || n % 100 > 19) &&
      (n % 100 < 70 || n % 100 > 79) &&
      (n % 100 < 90 || n % 100 > 99)
    ) {
      return IntlVariations.NUMBER_FEW;
    } else if (n !== 0 && n % 1000000 === 0) {
      return IntlVariations.NUMBER_MANY;
    } else {
      return IntlVariations.NUMBER_OTHER;
    }
  },
};
