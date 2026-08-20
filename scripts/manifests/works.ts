export interface ImportManifest {
  slug: string;
  sourceUrl: string;
  rightsStatus: 'public-domain' | 'cc-by-sa' | 'unknown' | 'copyrighted';
  approvedForImport: boolean;
  authorFolder: string;
  workFolder: string;
  chapters: {
    title: string;
    slug: string;
    url: string;
  }[];
}

export const worksManifest: ImportManifest[] = [
  {
    slug: 'aksi-massa',
    sourceUrl: 'https://www.marxists.org/indonesia/archive/malaka/AksiMassa/index.htm',
    rightsStatus: 'public-domain',
    approvedForImport: true,
    authorFolder: 'tan-malaka',
    workFolder: 'aksi-massa',
    chapters: [
      { title: 'Pengantar', slug: 'pengantar', url: 'https://www.marxists.org/indonesia/archive/malaka/AksiMassa/AksiMassa0.htm' },
      { title: 'I. Revolusi', slug: 'revolusi', url: 'https://www.marxists.org/indonesia/archive/malaka/AksiMassa/AksiMassa1.htm' },
      { title: 'II. Ikhtisar tentang Riwayat Indonesia', slug: 'riwayat-indonesia', url: 'https://www.marxists.org/indonesia/archive/malaka/AksiMassa/AksiMassa2.htm' },
      { title: 'III. Beberapa Macam Imperialisme', slug: 'imperialisme', url: 'https://www.marxists.org/indonesia/archive/malaka/AksiMassa/AksiMassa3.htm' },
      { title: 'IV. Kapitalisme Indonesia', slug: 'kapitalisme-indonesia', url: 'https://www.marxists.org/indonesia/archive/malaka/AksiMassa/AksiMassa4.htm' },
      { title: 'V. Keadaan Rakyat Indonesia', slug: 'keadaan-rakyat', url: 'https://www.marxists.org/indonesia/archive/malaka/AksiMassa/AksiMassa5.htm' },
      { title: 'VI. Keadaan Sosial', slug: 'keadaan-sosial', url: 'https://www.marxists.org/indonesia/archive/malaka/AksiMassa/AksiMassa6.htm' },
      { title: 'VII. Keadaan Politik', slug: 'keadaan-politik', url: 'https://www.marxists.org/indonesia/archive/malaka/AksiMassa/AksiMassa7.htm' },
      { title: 'VIII. Revolusi di Indonesia', slug: 'revolusi-di-indonesia', url: 'https://www.marxists.org/indonesia/archive/malaka/AksiMassa/AksiMassa8.htm' },
      { title: 'IX. Perkakas Revolusi Kita', slug: 'perkakas-revolusi', url: 'https://www.marxists.org/indonesia/archive/malaka/AksiMassa/AksiMassa9.htm' },
      { title: 'X. Sekilas tentang Gerakan Kemerdekaan di Indonesia', slug: 'gerakan-kemerdekaan', url: 'https://www.marxists.org/indonesia/archive/malaka/AksiMassa/AksiMassa10.htm' },
      { title: 'XI. Federasi Republik Indonesia', slug: 'federasi-republik-indonesia', url: 'https://www.marxists.org/indonesia/archive/malaka/AksiMassa/AksiMassa11.htm' },
      { title: 'XII. Khayalan Seorang Revolusioner', slug: 'khayalan', url: 'https://www.marxists.org/indonesia/archive/malaka/AksiMassa/AksiMassa12.htm' },
      { title: 'Lampiran: Rancangan untuk Program Proletar di Indonesia', slug: 'lampiran-program', url: 'https://www.marxists.org/indonesia/archive/malaka/AksiMassa/AksiMassa13.htm' }
    ]
  },
  {
    slug: 'manifestokomunis',
    sourceUrl: 'https://www.marxists.org/indonesia/archive/marx-engels/1848/manifesto/index.htm',
    rightsStatus: 'public-domain',
    approvedForImport: true,
    authorFolder: 'marx',
    workFolder: 'manifestokomunis',
    chapters: [
      { title: 'Kata Pengantar Edisi Indonesia 2024', slug: 'pengantar-2024', url: 'https://www.marxists.org/indonesia/archive/marx-engels/1848/manifesto/00_pengantar2024.htm' },
      { title: 'Pendahuluan', slug: 'pendahuluan', url: 'https://www.marxists.org/indonesia/archive/marx-engels/1848/manifesto/01_pendahuluan.htm' },
      { title: 'I. Kaum Borjuis dan Kaum Proletar', slug: 'kaum-borjuis-proletar', url: 'https://www.marxists.org/indonesia/archive/marx-engels/1848/manifesto/02_borjuis_proletar.htm' },
      { title: 'II. Kaum Proletar dan Kaum Komunis', slug: 'proletar-komunis', url: 'https://www.marxists.org/indonesia/archive/marx-engels/1848/manifesto/03_proletar_komunis.htm' },
      { title: 'III. Literatur Sosialis dan Komunis', slug: 'literatur-sosialis-komunis', url: 'https://www.marxists.org/indonesia/archive/marx-engels/1848/manifesto/04_literatur.htm' },
      { title: 'IV. Pendirian Kaum Komunis Terhadap Berbagai Partai Oposisi', slug: 'pendirian-komunis', url: 'https://www.marxists.org/indonesia/archive/marx-engels/1848/manifesto/05_pendirian.htm' }
    ]
  }
];
