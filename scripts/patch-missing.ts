import * as fs from 'fs';
import * as path from 'path';
import { works } from '../src/data/works';
import { miaLocalManifest } from '../src/generated/miaLocalManifest';

const updates: Record<string, string> = {
  'manifesto-komunis': 'https://www.marxists.org/indonesia/archive/marx-engels/18480221-manifestokomunis/index.html',
  'tesis-tentang-feuerbach': 'https://www.marxists.org/indonesia/archive/marx-engels/1845/tesis-feuerbach.htm', // check if exists
  'brumaire-xviii': 'https://www.marxists.org/indonesia/archive/marx-engels/1852/brumaire/index.htm', // probably marx-engels
  'sosialisme-utopis-dan-ilmiah': 'https://www.marxists.org/indonesia/archive/marx-engels/18800420-sosialismeutopis/index.html',
  'imperialisme': 'https://www.marxists.org/indonesia/archive/lenin/1916/imperialisme/index.html', // maybe .html instead of .htm
  'tesis-april': 'https://www.marxists.org/indonesia/archive/lenin/1917/tesis-april/index.html',
  'naar-de-republiek-indonesia': 'https://www.marxists.org/indonesia/archive/malaka/1925-Menuju.html',
  'gerpolek': 'https://www.marxists.org/indonesia/archive/malaka/1948-Gerpolek/index.html',
  'dari-penjara-ke-penjara': 'https://www.marxists.org/indonesia/archive/malaka/1948-Penjara/index.html',
};

// Also search for some keywords in the manifest to find the rest
const manifestUrls = Object.keys(miaLocalManifest);

function fuzzyFind(keyword: string) {
  return manifestUrls.find(u => u.toLowerCase().includes(keyword.toLowerCase()));
}

for (const work of works) {
  if (updates[work.slug]) {
    work.miaUrl = updates[work.slug];
  } else if (!work.hasLocalMirror && work.miaUrl) {
    // try to fix .htm vs .html
    const asHtml = work.miaUrl.replace(/\.htm$/, '.html');
    if (miaLocalManifest[asHtml]) {
      work.miaUrl = asHtml;
    } else {
      // try replacing /marx/ with /marx-engels/
      const asMarxEngels = work.miaUrl.replace('/marx/', '/marx-engels/');
      if (miaLocalManifest[asMarxEngels]) {
        work.miaUrl = asMarxEngels;
      }
    }
  }
}

const worksTsContent = `import type { Work } from '../types';\n\nexport const works: Work[] = ${JSON.stringify(works, null, 2)};\n`;
fs.writeFileSync(path.join(process.cwd(), 'src', 'data', 'works.ts'), worksTsContent);
console.log('Patched some missing works urls.');
