import nullthrows from 'nullthrows';
import type { FbtTableKey } from '../../fbt/src/FbtTable';
import type {
  ObjectWithJSFBT,
  TableJSFBTTree,
  TableJSFBTTreeLeaf,
} from './index';

export function coerceToTableJSFBTTreeLeaf(
  value: Partial<TableJSFBTTreeLeaf>
): TableJSFBTTreeLeaf | null | undefined {
  return value &&
    typeof value === 'object' &&
    typeof value.desc === 'string' &&
    typeof value.text === 'string' &&
    (typeof value.tokenAliases === 'object' || value.tokenAliases == null)
    ? (value as TableJSFBTTreeLeaf)
    : null;
}

function _runOnNormalizedJSFBTLeaves(
  value: Readonly<TableJSFBTTree>,
  callback: (leaf: TableJSFBTTreeLeaf) => void
): void {
  const leaflet = coerceToTableJSFBTTreeLeaf(value);
  if (leaflet) {
    return callback(leaflet);
  }

  for (const k in value) {
    _runOnNormalizedJSFBTLeaves(nullthrows(value[k]), callback);
  }
}

export function onEachLeaf(
  phrase: ObjectWithJSFBT,
  callback: (leaf: TableJSFBTTreeLeaf) => void
): void {
  _runOnNormalizedJSFBTLeaves(phrase.jsfbt.t, callback);
}

/**
 * Clone `tree` and replace each leaf in the cloned tree with the result of
 * calling `convertLeaf`.
 */
export function mapLeaves<NewLeaf>(
  tree: Readonly<TableJSFBTTree>,
  convertLeaf: (leaf: Readonly<TableJSFBTTreeLeaf>) => NewLeaf
): NewLeaf {
  const leaflet = coerceToTableJSFBTTreeLeaf(tree);
  if (leaflet != null) {
    return convertLeaf(leaflet);
  }

  const newFbtTree: Record<FbtTableKey, NewLeaf> = {};
  for (const tableKey in tree) {
    newFbtTree[tableKey] = mapLeaves(tree[tableKey], convertLeaf);
  }
  return newFbtTree as NewLeaf;
}
