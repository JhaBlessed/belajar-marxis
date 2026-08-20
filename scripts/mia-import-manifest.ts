export interface ManifestEntry {
  slug: string;
  type: 'single' | 'index';
  miaUrl: string;
  rightsStatus: 'public-domain' | 'cc-by-sa' | 'copyrighted' | 'permission-required' | 'unknown';
  fullTextEnabled: boolean;
  rightsNote?: string;
  chapterLinks?: string[];
}

export const miaManifest: ManifestEntry[] = [
  {
    slug: "aksi-massa",
    type: "index",
    miaUrl: "https://www.marxists.org/indonesia/archive/malaka/AksiMassa/",
    rightsStatus: "public-domain",
    rightsNote: "MIA Blanket Public Domain",
    fullTextEnabled: true
  },
  {
    slug: "madilog",
    type: "index",
    miaUrl: "https://www.marxists.org/indonesia/archive/malaka/Madilog/",
    rightsStatus: "public-domain",
    rightsNote: "MIA Blanket Public Domain",
    chapterLinks: ['Sejarah.htm', 'Pendahuluan.htm', 'Bab1.htm', 'Bab2.htm', 'Bab3.htm', 'Bab4.htm', 'Bab5.htm', 'Bab6.htm', 'Bab7.htm'],
    fullTextEnabled: true
  },
  {
    slug: "manifesto-komunis",
    type: "index",
    miaUrl: "https://www.marxists.org/indonesia/archive/marx-engels/18480221-manifestokomunis/",
    rightsStatus: "public-domain",
    chapterLinks: ['katapengantar2023.html', '150tahunmanifestokomunis.html', 'katapengantar.html', 'manifestokomunis.html'],
    fullTextEnabled: true
  },
  {
    slug: "negara-dan-revolusi",
    type: "index",
    miaUrl: "https://www.marxists.org/indonesia/archive/lenin/19170901-lenin-negaradanrevolusi/",
    rightsStatus: "public-domain",
    chapterLinks: ['katapengantarindonesia.html', 'katapengantar.html', 'bab1.html', 'bab2.html', 'bab3.html', 'bab4.html', 'bab5.html', 'bab6.html', 'catatantambahan.html'],
    fullTextEnabled: true
  },
  {
    slug: "tesis-tentang-feuerbach",
    type: "single",
    miaUrl: "https://www.marxists.org/indonesia/archive/marx-engels/18450401-tesisfeuerbachversiasli.html",
    rightsStatus: "public-domain",
    fullTextEnabled: true
  },
  {
    slug: "upah-harga-dan-laba",
    type: "single",
    miaUrl: "https://www.marxists.org/indonesia/archive/marx-engels/1865/upah-harga-laba.htm",
    rightsStatus: "public-domain",
    fullTextEnabled: true
  },
  {
    slug: "tesis-april",
    type: "single",
    miaUrl: "https://www.marxists.org/indonesia/archive/lenin/19170407-lenin-tesisapril.html",
    rightsStatus: "public-domain",
    fullTextEnabled: true
  },
  {
    slug: "reformasi-atau-revolusi",
    type: "single",
    miaUrl: "https://www.marxists.org/indonesia/archive/luxemburg/reformasi-atau-revolusi.htm",
    rightsStatus: "public-domain",
    fullTextEnabled: true
  },
  {
    slug: "pemogokan-massa",
    type: "single",
    miaUrl: "https://www.marxists.org/indonesia/archive/luxemburg/pemogokan-massa.htm",
    rightsStatus: "public-domain",
    fullTextEnabled: true
  },
  {
    slug: "komunisme-dan-pan-islamisme",
    type: "single",
    miaUrl: "https://www.marxists.org/indonesia/archive/malaka/1922-PanIslamisme.htm",
    rightsStatus: "public-domain",
    fullTextEnabled: true
  }
];
