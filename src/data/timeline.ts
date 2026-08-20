import type { TimelineEvent } from '../types';

export const timelineEvents: TimelineEvent[] = [
  {
    id: '1848-manifesto',
    year: 1848,
    date: '21 Februari 1848',
    title: 'Penerbitan Manifesto Komunis',
    description: 'Karl Marx dan Friedrich Engels menerbitkan Manifesto Partai Komunis di London pada malam menjelang gelombang revolusi yang melanda Eropa.',
    type: 'publication',
    authorIds: ['karl-marx', 'friedrich-engels'],
    workIds: ['manifesto-komunis'],
    country: 'Inggris',
    themes: ['Revolusi', 'Program Partai'], slug: '', metadataConfidence: 'high', relatedAuthorIds: [], relatedWorkIds: [], relatedOrganizationIds: [], sourceIds: []
  },
  {
    id: '1867-kapital',
    year: 1867,
    date: '14 September 1867',
    title: 'Das Kapital Jilid 1 Terbit',
    description: 'Buku pertama dari adikarya Marx tentang kritik ekonomi politik diterbitkan di Hamburg.',
    type: 'publication',
    authorIds: ['karl-marx'],
    workIds: ['kapital-jilid-1'],
    country: 'Jerman',
    themes: ['Ekonomi Politik'], slug: '', metadataConfidence: 'high', relatedAuthorIds: [], relatedWorkIds: [], relatedOrganizationIds: [], sourceIds: []
  },
  {
    id: '1871-komune-paris',
    year: 1871,
    date: '18 Maret 1871',
    title: 'Komune Paris',
    description: 'Pemerintahan kelas pekerja pertama dalam sejarah terbentuk di Paris dan bertahan selama dua bulan sebelum dihancurkan oleh tentara.',
    type: 'event',
    authorIds: ['karl-marx'],
    workIds: [],
    country: 'Prancis',
    themes: ['Revolusi', 'Negara'], slug: '', metadataConfidence: 'high', relatedAuthorIds: [], relatedWorkIds: [], relatedOrganizationIds: [], sourceIds: []
  },
  {
    id: '1905-revolusi-rusia',
    year: 1905,
    date: '22 Januari 1905',
    title: 'Revolusi Rusia 1905',
    description: 'Gelombang pergolakan politik massa di seluruh Kekaisaran Rusia, yang melahirkan bentuk organisasi baru yang disebut "Soviet" (dewan buruh).',
    type: 'event',
    authorIds: ['v-i-lenin', 'leon-trotsky', 'rosa-luxemburg'],
    workIds: ['hasil-dan-prospek', 'pemogokan-massa'],
    country: 'Rusia',
    themes: ['Aksi Massa', 'Soviet'], slug: '', metadataConfidence: 'high', relatedAuthorIds: [], relatedWorkIds: [], relatedOrganizationIds: [], sourceIds: []
  },
  {
    id: '1917-revolusi-oktober',
    year: 1917,
    date: '7 November 1917',
    title: 'Revolusi Oktober',
    description: 'Partai Bolshevik di bawah pimpinan Lenin dan Trotsky mengambil alih kekuasaan melalui pemberontakan bersenjata yang disandarkan pada Soviet di Petrograd.',
    type: 'event',
    authorIds: ['v-i-lenin', 'leon-trotsky'],
    workIds: ['negara-dan-revolusi'],
    country: 'Rusia',
    themes: ['Revolusi Sosialis', 'Negara'], slug: '', metadataConfidence: 'high', relatedAuthorIds: [], relatedWorkIds: [], relatedOrganizationIds: [], sourceIds: []
  },
  {
    id: '1926-aksi-massa',
    year: 1926,
    date: 'Mei 1926',
    title: 'Penulisan Aksi Massa',
    description: 'Tan Malaka menulis buku "Aksi Massa" di Singapura untuk mengkritik rencana pemberontakan elit PKI dan mendesak pentingnya mobilisasi massa rakyat.',
    type: 'publication',
    authorIds: ['tan-malaka'],
    workIds: ['aksi-massa'],
    country: 'Singapura / Indonesia',
    themes: ['Strategi', 'Kemerdekaan'], slug: '', metadataConfidence: 'high', relatedAuthorIds: [], relatedWorkIds: [], relatedOrganizationIds: [], sourceIds: []
  },
  {
    id: '1943-madilog',
    year: 1943,
    date: 'Juli 1943',
    title: 'Penulisan Madilog',
    description: 'Tan Malaka menyelesaikan draf Madilog selama masa persembunyiannya di Cililitan, Jakarta, saat pendudukan Jepang.',
    type: 'publication',
    authorIds: ['tan-malaka'],
    workIds: ['madilog'],
    country: 'Indonesia',
    themes: ['Filsafat'], slug: '', metadataConfidence: 'high', relatedAuthorIds: [], relatedWorkIds: [], relatedOrganizationIds: [], sourceIds: []
  }
];
