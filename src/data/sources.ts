import type { SourceRegistryItem } from '../types';

export const sources: SourceRegistryItem[] = [
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
  },
  {
    id: 'mia-indonesia',
    name: 'Marxists Internet Archive - Seksi Bahasa Indonesia',
    shortName: 'MIA Indonesia',
    url: 'https://www.marxists.org/indonesia/',
    type: 'portal',
    description: 'Portal utama arsip teks-teks Marxis terjemahan bahasa Indonesia.',
    priority: 5,
    trusted: true
  },
  {
    id: 'mia-karya-marxis',
    name: 'Karya-karya Marxis',
    shortName: 'Katalog Karya MIA',
    url: 'https://www.marxists.org/indonesia/archive/index.htm',
    type: 'archive-index',
    description: 'Indeks pengelompokan tokoh dan karya Marxis di Indonesia.',
    priority: 3,
    trusted: true
  },
  {
    id: 'mia-sejarah-marxisme-indonesia',
    name: 'Sejarah Marxisme Indonesia',
    shortName: 'Sejarah Marxisme',
    url: 'https://www.marxists.org/indonesia/indones/index.htm',
    type: 'history-index',
    description: 'Kumpulan dokumen, kronologi, dan teks seputar sejarah Marxisme di Indonesia.',
    priority: 4,
    trusted: true
  }
];
