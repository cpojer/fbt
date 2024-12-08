import invariant from 'invariant';
import { FbtTableArgs } from './FbtHooks';
import FbtTable from './FbtTable';
import { MaybeReactComponent, Substitutions } from './substituteTokens';

export default function getAllSubstitutions(args: FbtTableArgs) {
  const allSubstitutions: Substitutions = {};
  for (const arg of args) {
    const substitution = arg[FbtTable.ARG.SUBSTITUTION];
    if (!substitution) {
      continue;
    }
    for (const tokenName of Object.keys(substitution)) {
      invariant(
        allSubstitutions[tokenName] == null,
        'Cannot register a substitution with token=`%s` more than once',
        tokenName
      );
      allSubstitutions[tokenName] = substitution[
        tokenName
      ] as MaybeReactComponent;
    }
  }
  return allSubstitutions;
}
