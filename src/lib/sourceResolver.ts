import { miaLocalManifest } from '../generated/miaLocalManifest';

export type SourceResolution = {
  type: 'local' | 'external' | 'missing';
  url: string | null;
};

export function resolveMiaSource(miaUrl: string | null | undefined): SourceResolution {
  if (!miaUrl) {
    return { type: 'missing', url: null };
  }

  const manifestEntry = miaLocalManifest[miaUrl];
  
  if (manifestEntry && manifestEntry.exists) {
    return {
      type: 'local',
      url: manifestEntry.localPath
    };
  }
  
  return {
    type: 'external',
    url: miaUrl
  };
}
