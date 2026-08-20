import type { LearningPath } from '../types';

export const learningPaths: LearningPath[] = [
  {
    id: 'pemula',
    slug: 'pemula',
    title: 'Dasar-Dasar Marxisme',
    level: 'Pemula',
    description: 'Jalur ini dirancang untuk mereka yang baru mengenal Marxisme. Membahas konsep dasar materialisme, sejarah, dan ekonomi politik.',
    durationWeeks: 12,
    weeks: [
      {
        weekNumber: 1,
        title: 'Pengantar Teori Kelas',
        description: 'Membaca fondasi awal yang meletakkan konsepsi sejarah Marxis.',
        workIds: ['manifesto-komunis']
      },
      {
        weekNumber: 2,
        title: 'Dasar Ekonomi Marxis',
        description: 'Memahami bagaimana nilai lebih diciptakan dan asal mula eksploitasi kapitalis.',
        workIds: ['kerja-upahan-dan-kapital']
      },
      {
        weekNumber: 3,
        title: 'Posisi Perempuan dalam Marxisme',
        description: 'Menganalisis institusi keluarga dari sudut pandang kelas.',
        workIds: ['komunisme-dan-keluarga']
      },
      {
        weekNumber: 4,
        title: 'Taktik dan Aksi Massa',
        description: 'Penerapan konsep pergerakan massa dalam konteks penjajahan di Indonesia.',
        workIds: ['aksi-massa']
      }
    ]
  },
  {
    id: 'menengah',
    slug: 'menengah',
    title: 'Negara, Imperialisme & Revolusi',
    level: 'Menengah',
    description: 'Mempelajari kontribusi Lenin dan Luxemburg mengenai perkembangan kapitalisme monopoli dan strategi partai revolusioner.',
    durationWeeks: 20,
    weeks: [
      {
        weekNumber: 1,
        title: 'Partai dan Organisasi',
        description: 'Pentingnya partai pelopor dan debat tentang kesadaran sosialis.',
        workIds: ['apa-yang-harus-dikerjakan']
      },
      {
        weekNumber: 2,
        title: 'Kapitalisme Tahap Akhir',
        description: 'Transformasi kapitalisme kompetitif menjadi kapitalisme monopoli/imperialis.',
        workIds: ['imperialisme']
      },
      {
        weekNumber: 3,
        title: 'Penghancuran Negara',
        description: 'Mengapa kelas pekerja tidak bisa sekadar menggunakan aparat negara borjuis.',
        workIds: ['negara-dan-revolusi']
      },
      {
        weekNumber: 4,
        title: 'Polemik Melawan Reformisme',
        description: 'Sanggahan Rosa Luxemburg terhadap para perevisi Marxisme.',
        workIds: ['reformasi-atau-revolusi']
      }
    ]
  },
  {
    id: 'mahir',
    slug: 'mahir',
    title: 'Filsafat & Ekonomi Politik Lanjut',
    level: 'Mahir',
    description: 'Menyelami kedalaman Kapital Marx, strategi internasional Trotsky, dan sintesis filsafat Nusantara oleh Tan Malaka.',
    durationWeeks: 24,
    weeks: [
      {
        weekNumber: 1,
        title: 'Anatomi Kapitalisme',
        description: 'Membedah sel dasar kapitalisme: komoditas dan teori nilai kerja.',
        workIds: ['kapital-jilid-1']
      },
      {
        weekNumber: 2,
        title: 'Teori Revolusi Permanen',
        description: 'Dinamika revolusi di negara terbelakang dan keniscayaan revolusi dunia.',
        workIds: ['hasil-dan-prospek', 'revolusi-permanen']
      },
      {
        weekNumber: 3,
        title: 'Filsafat Dialektika Materialis',
        description: 'Transisi dari materialisme lama ke dialektika.',
        workIds: ['tesis-tentang-feuerbach']
      },
      {
        weekNumber: 4,
        title: 'Filsafat Revolusioner Indonesia',
        description: 'Upaya Tan Malaka membumikan metode ilmiah bagi rakyat Indonesia.',
        workIds: ['madilog']
      }
    ]
  }
];
