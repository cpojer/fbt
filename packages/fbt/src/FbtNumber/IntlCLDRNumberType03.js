/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @generated SignedSource<<4a1dbed08f88e291aa8c1fd76f1e43cc>>
 *
 * @flow strict
 */

'use strict';

const IntlVariations = require('../IntlVariations');

const IntlCLDRNumberType03 = {
  getVariation(n: number): $Values<typeof IntlVariations> {
    if (n === 0 || n === 1) {
      return IntlVariations.NUMBER_ONE;
    } else {
      return IntlVariations.NUMBER_OTHER;
    }
  },
};

module.exports = IntlCLDRNumberType03;
