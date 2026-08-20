import * as fs from 'fs';

let content = fs.readFileSync('src/data/sources.ts', 'utf8');

if (!content.includes('mia-sejarah-marxisme-indonesia-local')) {
  content = content.replace('export const sources: SourceRegistryItem[] = [', 
  `export const sources: SourceRegistryItem[] = [
  {
    id: "mia-sejarah-marxisme-indonesia-local",
    name: "Sejarah Marxisme Indonesia",
    shortName: "Sejarah MIA",
    url: "https://www.marxists.org/indonesia/indones/index.htm",
    type: "history-local-archive",
    description: "Sumber sejarah, kronologi, dan teks seputar Marxisme di Indonesia dari arsip lokal.",
    priority: 1,
    trusted: true,
    localRoot: "sumberSejarahMarxismeIndonesia"
  },`);
  fs.writeFileSync('src/data/sources.ts', content);
  console.log('Sources updated');
}
