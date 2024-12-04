/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @generated SignedSource<<4e44a4a75aa7e05f1ab544f7e1250939>>
 *
 * @flow strict
 */

'use strict';

const IntlVariations = require('../IntlVariations');

const IntlCLDRNumberType34 = {
  getVariation(n: number): $Values<typeof IntlVariations> {
    if (n === 0) {
      return IntlVariations.NUMBER_ZERO;
    } else if (n === 1) {
      return IntlVariations.NUMBER_ONE;
    } else if (n === 2) {
      return IntlVariations.NUMBER_TWO;
    } else if (n % 100 >= 3 && n % 100 <= 10) {
      return IntlVariations.NUMBER_FEW;
    } else if (n % 100 >= 11 && n % 100 <= 99) {
      return IntlVariations.NUMBER_MANY;
    } else {
      return IntlVariations.NUMBER_OTHER;
    }
  },
};

module.exports = IntlCLDRNumberType34;
