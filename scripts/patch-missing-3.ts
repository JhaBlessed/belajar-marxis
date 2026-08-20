import * as fs from 'fs';
import * as path from 'path';
import { works } from '../src/data/works';

const updates: Record<string, string> = {
  'imperialisme': 'https://www.marxists.org/indonesia/archive/lenin/1916/1916-tahapankhusus.html',
  'gerpolek': 'https://www.marxists.org/indonesia/archive/malaka/1948-Gerpolek.html',
};

for (const work of works) {
  if (updates[work.slug]) {
    work.miaUrl = updates[work.slug];
    work.hasLocalMirror = true;
  }
}

const worksTsContent = `import type { Work } from '../types';\n\nexport const works: Work[] = ${JSON.stringify(works, null, 2)};\n`;
fs.writeFileSync(path.join(process.cwd(), 'src', 'data', 'works.ts'), worksTsContent);
console.log('Patched final 2 URLs');
