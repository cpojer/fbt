/**
 * (c) Meta Platforms, Inc. and affiliates. Confidential and proprietary.
 *
 * @flow
 * @format
 * @oncall i18n_fbt_js
 */
import type { Node } from 'react';

const intlList: JestMockFn<
  $ReadOnlyArray<
    ?$Keys<
      $ReadOnly<{|
        COMMA: string,
        SEMICOLON: string,
      |}>
    > &
      any &
      $ReadOnlyArray<Node> &
      ?$Keys<$ReadOnly<{| AND: string, NONE: string, OR: string |}>>
  >,
  string
> = jest.fn<
  $ReadOnlyArray<
    ?$Keys<{ COMMA: string, SEMICOLON: string }> &
      any &
      $ReadOnlyArray<Node> &
      ?$Keys<{ AND: string, NONE: string, OR: string }>
  >,
  string
>(
  (
    items: $ReadOnlyArray<Node>,
    conjunction: ?$Keys<typeof CONJUNCTIONS>,
    delimiter: ?$Keys<typeof DELIMITERS>
  ) => items.join(conjunction || ',')
);

// $FlowFixMe[prop-missing]
const CONJUNCTIONS = (intlList.CONJUNCTIONS = {
  AND: '&',
  OR: '|',
  NONE: '',
});

// $FlowFixMe[prop-missing]
const DELIMITERS = (intlList.DELIMITERS = {
  COMMA: 'COMMA',
  SEMICOLON: 'SEMICOLON',
});

module.exports = intlList;
