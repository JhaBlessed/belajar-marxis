import * as fs from 'fs';
import * as path from 'path';
import { works as existingWorks } from '../src/data/works';
import { miaLocalManifest } from '../src/generated/miaLocalManifest';

const WORKS_TS = path.join(process.cwd(), 'src', 'data', 'works.ts');

const newWorks = existingWorks.map(w => {
  let hasLocalMirror = false;
  let localMirrorPath: string | undefined = undefined;
  
  if (w.miaUrl && miaLocalManifest[w.miaUrl]) {
    hasLocalMirror = true;
    localMirrorPath = miaLocalManifest[w.miaUrl].localPath;
  }
  
  let sourceAvailability = 'missing';
  if (hasLocalMirror && w.miaUrl) sourceAvailability = 'local-and-online';
  else if (hasLocalMirror && !w.miaUrl) sourceAvailability = 'local-only';
  else if (!hasLocalMirror && w.miaUrl) sourceAvailability = 'online-only';

  return {
    ...w,
    hasLocalMirror,
    localMirrorPath,
    sourceAvailability
  };
});

const worksTsContent = `import type { Work } from '../types';

export const works: Work[] = ${JSON.stringify(newWorks, null, 2)};
`;

fs.writeFileSync(WORKS_TS, worksTsContent);
console.log('src/data/works.ts berhasil diperbarui dengan data mirror lokal!');
