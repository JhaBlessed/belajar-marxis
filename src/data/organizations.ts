import type { Organization } from '../types';

export const organizations: Organization[] = [
  {
    id: 'sarekat-islam',
    slug: 'sarekat-islam',
    name: 'Sarekat Islam',
    abbreviation: 'SI',
    foundedYear: 1912,
    description: 'Organisasi pergerakan nasional pertama di Indonesia yang berskala massa. Awalnya didirikan sebagai Sarekat Dagang Islam (SDI) pada 1905, SI menjadi tempat bersemainya berbagai ideologi pergerakan, termasuk Marxisme melalui sayap kirinya (SI Merah) yang kelak menjadi PKI.',
    relatedAuthorIds: ['tan-malaka'],
    relatedEventIds: [],
    sourceIds: ['mia-sejarah-marxisme-indonesia'],
    metadataConfidence: 'medium'
  },
  {
    id: 'isdv',
    slug: 'isdv',
    name: 'Indische Sociaal-Democratische Vereeniging',
    abbreviation: 'ISDV',
    foundedYear: 1914,
    dissolvedYear: 1920,
    description: 'Perkumpulan Sosial Demokrat Hindia, didirikan oleh Henk Sneevliet dan tokoh sosialis Belanda lainnya di Hindia Belanda. ISDV adalah organisasi Marxis pertama di Asia Tenggara dan cikal bakal Partai Komunis Indonesia (PKI).',
    relatedAuthorIds: [],
    relatedEventIds: [],
    sourceIds: ['mia-sejarah-marxisme-indonesia'],
    metadataConfidence: 'medium'
  },
  {
    id: 'pki',
    slug: 'pki',
    name: 'Partai Komunis Indonesia',
    abbreviation: 'PKI',
    foundedYear: 1920,
    dissolvedYear: 1966,
    description: 'Partai komunis non-penguasa terbesar di dunia pada masa puncaknya. Berdiri dari perubahan nama ISDV pada 1920. Terlibat dalam pemberontakan melawan kolonial Belanda pada 1926-1927, peristiwa Madiun 1948, dan dihancurkan secara paksa pada 1965-1966.',
    relatedAuthorIds: ['tan-malaka'],
    relatedEventIds: [],
    sourceIds: ['mia-sejarah-marxisme-indonesia'],
    metadataConfidence: 'medium'
  },
  {
    id: 'komintern',
    slug: 'komintern',
    name: 'Komunis Internasional (Internasional Ketiga)',
    abbreviation: 'Komintern',
    foundedYear: 1919,
    dissolvedYear: 1943,
    description: 'Organisasi komunis internasional yang didirikan di Moskow untuk memimpin pergerakan komunis di seluruh dunia. Memainkan peran besar dalam memberikan arahan revolusioner kepada partai-partai di berbagai negara, termasuk PKI.',
    relatedAuthorIds: ['v-i-lenin', 'leon-trotsky', 'tan-malaka', 'komintern'],
    relatedEventIds: [],
    sourceIds: ['mia-karya-marxis'],
    metadataConfidence: 'medium'
  },
  {
    id: 'pari',
    slug: 'pari',
    name: 'Partai Republik Indonesia',
    abbreviation: 'PARI',
    foundedYear: 1927,
    description: 'Partai bawah tanah yang didirikan oleh Tan Malaka dan kawan-kawan di Bangkok setelah berpisahnya Tan Malaka dari kebijakan Komintern dan pimpinan PKI terkait Pemberontakan 1926. Bertujuan memperjuangkan kemerdekaan penuh.',
    relatedAuthorIds: ['tan-malaka'],
    relatedEventIds: [],
    sourceIds: ['mia-sejarah-marxisme-indonesia'],
    metadataConfidence: 'medium'
  },
  {
    id: 'persatuan-perjuangan',
    slug: 'persatuan-perjuangan',
    name: 'Persatuan Perjuangan',
    abbreviation: 'PP',
    foundedYear: 1946,
    description: 'Koalisi lebih dari 140 organisasi politik dan laskar bersenjata yang dipimpin oleh Tan Malaka pada masa Revolusi Nasional Indonesia. Menuntut "Merdeka 100%" tanpa perundingan dan kompromi dengan pihak Belanda.',
    relatedAuthorIds: ['tan-malaka'],
    relatedEventIds: [],
    sourceIds: ['mia-sejarah-marxisme-indonesia'],
    metadataConfidence: 'medium'
  }
];
