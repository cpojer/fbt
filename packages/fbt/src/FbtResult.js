/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This file is shared between www and fbsource and www is the source of truth.
 * When you make change to this file on www, please make sure you test it on
 * fbsource and send a diff to update the files too so that the 2 versions are
 * kept in sync.
 *
 * Run the following command to sync the change from www to fbsource.
 *   js1 upgrade www-shared -p fbt --local ~/www
 *
 * @flow strict-local
 */

// flowlint ambiguous-object-type:error
import type { RefSetter } from 'react';
import type { FbtResolvedPayload } from './FbtHooks';
import FbtReactUtil from './FbtReactUtil';
import FbtResultBase from './FbtResultBase';

const FbtResultComponent = (props: Props): mixed => props.content;

type Props = $ReadOnly<{ content: $NestedFbtContentItems, ... }>;

export default class FbtResult extends FbtResultBase {
  $$typeof: symbol | number = FbtReactUtil.REACT_ELEMENT_TYPE;
  key: ?string = null;
  props: Props;
  ref: ?RefSetter<mixed> = null;
  type: (props: Props) => mixed = FbtResultComponent;

  constructor(
    contents: $NestedFbtContentItems,
    errorListener: ?IFbtErrorListener
  ) {
    super(contents, errorListener);
    this.props = {
      content: contents,
    };

    if (process.env.NODE_ENV === 'development') {
      FbtReactUtil.injectReactShim(this);
    }
  }

  static get(input: FbtResolvedPayload): FbtResult {
    return new FbtResult(input.contents, input.errorListener);
  }
}
