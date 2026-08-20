import * as fs from 'fs';
import * as path from 'path';
import { works } from '../src/data/works';

const updates: Record<string, string> = {
  'tesis-tentang-feuerbach': 'https://www.marxists.org/indonesia/archive/marx-engels/18450401-tesisfeuerbachversiasli.html',
  'brumaire-xviii': 'https://www.marxists.org/indonesia/archive/marx-engels/1852/brumaire/index.html',
  'tesis-april': 'https://www.marxists.org/indonesia/archive/lenin/19170407-lenin-tesisapril.html',
};

for (const work of works) {
  if (updates[work.slug]) {
    work.miaUrl = updates[work.slug];
  }
}

const worksTsContent = `import type { Work } from '../types';\n\nexport const works: Work[] = ${JSON.stringify(works, null, 2)};\n`;
fs.writeFileSync(path.join(process.cwd(), 'src', 'data', 'works.ts'), worksTsContent);
console.log('Patched final 3 URLs');
