import path from 'path';
import invariant from 'invariant';
import type { FbtOptionConfig } from '../FbtConstants';
import type { CollectFbtOutput } from './collectFbt';
import packagerTypes from './collectFbtConstants';
import type {
  CollectorConfig,
  IFbtCollector,
  PackagerPhrase,
} from './FbtCollector';
import FbtCollector from './FbtCollector';
import PhrasePackager from './PhrasePackager';
import type { HashFunction } from './TextPackager';
import TextPackager from './TextPackager';

export function buildCollectFbtOutput(
  fbtCollector: IFbtCollector,
  packagers: ReadonlyArray<
    | {
        pack: (phrases: Array<PackagerPhrase>) => Array<PackagerPhrase>;
      }
    | PhrasePackager
    | TextPackager
  >,
  options: {
    genFbtNodes: boolean;
    terse: boolean;
  }
): CollectFbtOutput {
  return {
    phrases: packagers
      .reduce(
        (phrases, packager) => packager.pack(phrases),
        fbtCollector.getPhrases()
      )
      .map((phrase) => ({
        ...phrase,
        // using `undefined` so that the field is not outputted by JSON.stringify
        jsfbt: options.terse ? undefined : phrase.jsfbt,
      })),
    childParentMappings: fbtCollector.getChildParentMappings(),
    fbtElementNodes: options.genFbtNodes
      ? fbtCollector.getFbtElementNodes()
      : // using `undefined` so that the field is not outputted by JSON.stringify
        undefined,
  };
}

function getTextPackager(hashModulePath: string): TextPackager {
  const hashingModule = require(hashModulePath) as
    | HashFunction
    | {
        getFbtHash: HashFunction;
      };

  invariant(
    typeof hashingModule === 'function' ||
      (typeof hashingModule === 'object' &&
        typeof hashingModule.getFbtHash === 'function'),
    'Expected hashing module to expose a default value that is a function, ' +
      'or an object with a getFbtHash() function property. Hashing module location: `%s`',
    hashModulePath
  );
  return new TextPackager(
    typeof hashingModule === 'function'
      ? hashingModule
      : hashingModule.getFbtHash
  );
}

export function getPackagers(
  packager: string,
  hashModulePath: string
): ReadonlyArray<
  | {
      pack: (phrases: Array<PackagerPhrase>) => Array<PackagerPhrase>;
    }
  | PhrasePackager
  | TextPackager
> {
  switch (packager) {
    case packagerTypes.TEXT:
      return [getTextPackager(hashModulePath)];
    case packagerTypes.PHRASE:
      return [new PhrasePackager()];
    case packagerTypes.BOTH:
      return [getTextPackager(hashModulePath), new PhrasePackager()];
    case packagerTypes.NONE:
      return [{ pack: (phrases) => phrases }];
    default:
      throw new Error('Unrecognized packager option');
  }
}

export function getFbtCollector(
  collectorConfig: CollectorConfig,
  extraOptions: FbtOptionConfig,
  customCollectorPath?: string | null
): IFbtCollector {
  if (customCollectorPath == null) {
    return new FbtCollector(collectorConfig, extraOptions);
  }
  const absPath = path.isAbsolute(customCollectorPath)
    ? customCollectorPath
    : path.resolve(process.cwd(), customCollectorPath);

  const CustomCollector = require(absPath);
  return new CustomCollector(collectorConfig, extraOptions);
}
