import { WorkSummary } from '../../src/generated/workSummaries';

export interface AuditEvidence {
  mainProblem?: { source: string; heading?: string }[];
  mainThesis?: { source: string; heading?: string }[];
  contentSummary?: { source: string; heading?: string }[];
  argumentStructure?: { source: string; heading?: string }[];
}

export interface CuratedWorkSummary extends Partial<WorkSummary> {
  contextOrigin?: string;
  auditEvidence?: AuditEvidence;
}

export const curatedWorkSummaries: Record<string, CuratedWorkSummary> = {

  'surat-engels-untuk-gerson-trier-di-copenhagen-18-desember-1889': {
    historicalContext: "Surat (draft) dari Engels kepada Gerson Trier ini ditulis pada Desember 1889 di tengah perselisihan taktis dalam Partai Sosialis Denmark. Trier dan rekan-rekannya di sayap radikal baru saja dikeluarkan karena menolak pembentukan blok politik dengan partai radikal borjuis-kecil, Venstre. Engels memberikan pandangannya tentang kebijakan kolaborasi elektoral dan batas-batas kerjasama antar kelas.",
    mainProblem: "Sejauh mana partai proletariat (sosialis) dapat berkolaborasi atau memberikan dukungan kepada partai-partai borjuis-kecil tanpa mengorbankan independensi dan karakter kelas dari pergerakannya?",
    mainThesis: "Partai proletariat dapat dan bahkan harus menggunakan atau mendukung partai-partai lain secara taktis untuk tujuan tertentu (seperti penghapusan sisa feodalisme atau kebebasan politik), selama keuntungan tersebut berdampak langsung bagi kaum pekerja dan tidak mengancam karakter kelas independen dari partai.",
    contentSummary: "Engels menolak prinsip Gerson Trier yang antokolaborasi mutlak (menentang segala bentuk kerja sama dengan partai lain bagaimanapun sementaranya). Engels menjelaskan bahwa demi kemenangan akhir revolusi, partai pekerja kadang perlu memberikan dukungan sementara kepada partai borjuis kecil atau radikal untuk mencapai kemajuan historis atau kebebasan politik. Namun, ia memberikan peringatan keras: kolaborasi hanya diperbolehkan jika tidak mengancam kemandirian dan watak kelas proletariat dari partai pekerja, yang merupakan batas mutlak yang tidak boleh dilanggar. Jika sebuah partai radikal (seperti Venstre) bersikap pengecut dan mundur ketika ditekan (seperti oleh rezim Bismarck atau Estrup), maka kolaborasi dengan mereka menjadi tidak berguna dan patut ditentang.",
    argumentStructure: [
      "Menolak pandangan apriori bahwa kolaborasi politik antar-partai selalu dilarang dalam segala kondisi.",
      "Menegaskan kembali tujuan akhir partai kelas pekerja, yaitu perebutan kekuasaan politik melalui revolusi yang mengharuskan eksistensi sebuah partai yang tegas berkesadaran kelas.",
      "Menjelaskan pengecualian taktis: partai pekerja dapat mendukung partai lain untuk target spesifik (seperti melawan sisa-sisa feodal atau UU Anti Sosialis).",
      "Menetapkan batas mutlak kolaborasi: karakter independen proletariat partai tidak boleh dikompromikan, dan taktik tersebut harus membuahkan hasil historis/keuntungan nyata, tidak sekadar bersekutu dengan politisi borjuis yang pengecut."
    ],
    significance: "Surat ini memberikan artikulasi kunci mengenai metode taktis Marxis tentang 'Front Persatuan' (United Front) dan kebijakan aliansi dalam pemilihan parlementer, membedakan antara kolaborasi prinsipil (kompromi kelas yang dilarang) dengan dukungan taktis yang fleksibel demi kemajuan sosial.",
    contextOrigin: "curated",
    auditEvidence: {
      mainProblem: [{ source: "/mia/indonesia/archive/marx-engels/1889/18-trier.html" }],
      mainThesis: [{ source: "/mia/indonesia/archive/marx-engels/1889/18-trier.html", heading: "Surat Engels untuk Gerson Trier di Copenhagen (Draft)" }],
      contentSummary: [{ source: "/mia/indonesia/archive/marx-engels/1889/18-trier.html", heading: "Surat Engels untuk Gerson Trier di Copenhagen (Draft)" }],
      argumentStructure: [{ source: "/mia/indonesia/archive/marx-engels/1889/18-trier.html" }]
    },
    summaryStatus: 'complete'
  },

  'surat-kepada-cuno-theodor-24-januari-1872': {
    historicalContext: "Surat polemis ini dikirimkan Engels kepada Theodor Cuno, seorang insinyur dan sosialis Jerman di Milan, Italia, pasca kekalahan Komune Paris. Surat ini merespon intrik dan pengorganisasian faksi anarkis yang dipimpin Mikhail Bakunin di dalam Asosiasi Pekerja Internasional (Internasionale Pertama).",
    mainProblem: "Bagaimana cara membongkar dan melawan konsepsi teoritis serta model organisasi anarkis Bakunin, yang menganggap negara sebagai akar segala kejahatan dan menolak segala bentuk aksi politik atau otoritas?",
    mainThesis: "Engels mengkritik Bakunin dengan membalikkan premis utamanya: bukan negara yang menciptakan kapitalisme, melainkan kapitalisme dan pembagian kelaslah yang memerlukan negara. Oleh karena itu, kaum pekerja mutlak harus melakukan aksi politik untuk merebut kekuasaan, menggunakan otoritas untuk menghapuskan kapital, yang mana setelahnya negara akan memudar dengan sendirinya.",
    contentSummary: "Engels mengkarakterisasi teori Bakunin sebagai campuran antara anarkisme Proudhon dan komunisme, menuduh Bakunin melihat negara—bukan kapital dan eksploitasi kerja-upahan—sebagai kejahatan utama. Engels membantah gagasan abstensionisme politik (menolak pemilihan umum dan politik praktis), dengan menyatakan bahwa massa pekerja pada dasarnya berwatak politis dan meminta mereka menjauhi politik sama saja dengan menyerahkan mereka ke pelukan partai borjuis. Lebih jauh, Engels menyerang konsep kebebasan tanpa otoritas milik Bakunin, dengan menekankan bahwa masyarakat (seperti pabrik, kapal laut, atau rel kereta) secara material memerlukan otoritas dan keputusan mayoritas untuk beroperasi. Ia menutup dengan menyindir bahwa seruan penghapusan organisasi otoritatif di dalam Internasionale justru akan menghancurkan gerakan pekerja itu sendiri.",
    argumentStructure: [
      "Menyajikan gambaran doktrin Bakunin, khususnya premis bahwa negara adalah akar eksploitasi yang harus dilikuidasi tanpa repot-repot terlibat dalam politik.",
      "Menyajikan posisi materialis historis (Marxis): penghapusan kapital adalah prasyarat, dan revolusi sosial membutuhkan aksi politik. Negara baru akan musnah setelah penghapusan relasi modal.",
      "Mengkritik abstensionisme politik Bakunin dengan memperingatkan bahwa hal tersebut akan mengalienasi massa buruh.",
      "Mendemonstrasikan kontradiksi praktis di balik penolakan mutlak terhadap otoritas, dengan menggunakan contoh kerja dalam industri modern (pabrik dan kapal laut) yang niscaya membutuhkan kepemimpinan."
    ],
    significance: "Surat ini merangkum inti perpecahan sejarah antara faksi Marxis dan anarkis (Bakunis) di dalam Internasionale Pertama mengenai peran negara, aksi politik, sentralisasi, dan otoritas.",
    contextOrigin: "curated",
    auditEvidence: {
      mainProblem: [{ source: "/mia/indonesia/archive/marx-engels/1872/surat24jan1872.html", heading: "Surat Kepada Cuno Theodor" }],
      mainThesis: [{ source: "/mia/indonesia/archive/marx-engels/1872/surat24jan1872.html", heading: "Surat Kepada Cuno Theodor" }],
      contentSummary: [{ source: "/mia/indonesia/archive/marx-engels/1872/surat24jan1872.html", heading: "Surat Kepada Cuno Theodor" }],
      argumentStructure: [{ source: "/mia/indonesia/archive/marx-engels/1872/surat24jan1872.html" }]
    },
    summaryStatus: 'complete'
  },

  'upah-sehari-yang-layak-bagi-kerja-sehari-yang-layak': {
    historicalContext: "Artikel ini aslinya diterbitkan oleh Engels di surat kabar pekerja The Labour Standard di London pada tahun 1881. Engels menulis artikel-artikel ini untuk mendidik gerakan Serikat Buruh Inggris mengenai batasan-batasan tuntutan ekonomi mereka di bawah sistem upah.",
    mainProblem: "Apakah semboyan serikat buruh tradisional Inggris 'Upah sehari yang layak bagi kerja sehari yang layak' masih relevan dan memadai sebagai tujuan akhir pergerakan kaum pekerja?",
    mainThesis: "Slogan mengenai upah 'layak' adalah usang dan menyesatkan secara ekonomi karena di bawah kapitalisme, kelayakan pertukaran secara objektif selalu berarti kelas pekerja hanya dibayar sebatas biaya reproduksi tenaga kerjanya, sementara seluruh nilai lebih dihisap oleh kapitalis. Slogan tersebut harus digantikan dengan tuntutan kepemilikan sosial atas alat-alat produksi.",
    contentSummary: "Engels menelaah makna kata 'layak' menurut hukum ekonomi politik kapitalis, bukan melalui sentimen moral. Ia menunjukkan bahwa upah yang layak bagi pekerja secara ekonomi hanyalah jumlah subsistensi minimum untuk mempertahankan hidup dan bereproduksi, yang ditukar dengan batas maksimal tenaga yang bisa diperas kapitalis dalam sehari tanpa membunuh si pekerja. Engels membuktikan bahwa pertukaran ini secara inheren tidak adil karena pekerja, di bawah ancaman kelaparan dan kompetisi dari pengangguran (barisan cadangan industri), dipaksa menjual tenaga kerjanya. Kapitalis membayar upah bukan dari sakunya sendiri, melainkan dari produk yang diciptakan oleh kerja itu sendiri. Karenanya, upah yang layak di bawah sistem upah selalu berujung pada akumulasi kekayaan pada kelas non-pekerja, dan karenanya kaum buruh harus menuntut pembubaran sistem upah itu sendiri.",
    argumentStructure: [
      "Mempertanyakan definisi obyektif dari 'layak' di dalam semboyan 'Upah sehari yang layak'.",
      "Mendefinisikan nilai upah dan batas hari kerja berdasarkan hukum ekonomi politik klasik.",
      "Menunjukkan asimetri tawar-menawar antara kapitalis (yang punya modal) dan pekerja (yang ditekan ketakutan akan kelaparan dan pasukan cadangan pengangguran).",
      "Membongkar ilusi bahwa modal yang mempekerjakan buruh: buruhlah yang menghasilkan kekayaan, dan mereka dibayar dari hasil kerja mereka sendiri yang telah disita.",
      "Mengusulkan semboyan baru: Pemilikan atas alat-alat kerja oleh rakyat pekerja sendiri."
    ],
    significance: "Esai pendek ini merupakan upaya populer dari Engels untuk menerapkan teori nilai lebih Marx secara ringkas, guna mentransformasikan tuntutan reformis serikat buruh (upah adil) menjadi kesadaran revolusioner (penghapusan sistem kerja upahan).",
    contextOrigin: "curated",
    auditEvidence: {
      mainProblem: [{ source: "/mia/indonesia/archive/marx-engels/1881/kerja.html", heading: "Upah Sehari Yang Layak Bagi Kerja Sehari Yang Layak!" }],
      mainThesis: [{ source: "/mia/indonesia/archive/marx-engels/1881/kerja.html", heading: "Upah Sehari Yang Layak Bagi Kerja Sehari Yang Layak!" }],
      contentSummary: [{ source: "/mia/indonesia/archive/marx-engels/1881/kerja.html", heading: "Upah Sehari Yang Layak Bagi Kerja Sehari Yang Layak!" }],
      argumentStructure: [{ source: "/mia/indonesia/archive/marx-engels/1881/kerja.html" }]
    },
    summaryStatus: 'complete'
  },

  'klas-klas-masyarakat-diperlukan-dan-berlebihan': {
    historicalContext: "Esai ini merupakan kontribusi lain dari Friedrich Engels untuk majalah The Labour Standard pada tahun 1881, melanjutkan analisisnya tentang struktur masyarakat Inggris dan peran ekonomi dari kelas-kelas yang berkuasa.",
    mainProblem: "Apakah kelas-kelas sosial, khususnya aristokrasi tanah dan kelas kapitalis, merupakan suatu kebutuhan yang mutlak diperlukan secara ekonomi untuk kelangsungan produksi modern?",
    mainThesis: "Fungsi historis kelas-kelas berubah. Sementara kelas borjuasi (kapitalis menengah) pernah sangat diperlukan untuk membangun dan mengatur industri besar, perkembangan kapitalisme monopoli (saham, direksi) membuat mereka menjadi parasitik dan tidak lagi dibutuhkan secara ekonomi (berlebihan/superfluous) karena manajer upahan telah mengambil alih seluruh fungsi administratif produksi.",
    contentSummary: "Engels meneliti tiga kelas utama di Inggris abad ke-19: Aristokrasi Bertanah, Kapitalis (Borjuasi), dan Pekerja. Ia menegaskan aristokrasi tanah telah lama menjadi parasit ekonomi murni. Selanjutnya, ia menganalisis kapitalis menengah yang pada masa lalu sangat dibutuhkan untuk merintis dan memimpin revolusi manufaktur bertenaga uap. Namun, Engels mendemonstrasikan bahwa dengan munculnya perusahaan perseroan (saham gabungan), perkeretaapian, dan monopoli raksasa, para pemilik kapital tidak lagi bekerja mengelola produksi; mereka telah pensiun dan mengalihdayakan fungsi manajerial kepada 'pekerja atasan' (pegawai bayaran). Para kapitalis itu hanya mengambil dividen atau berjudi di pasar saham. Karena kapitalis tidak lagi melakukan fungsi 'pengawasan', klaim bahwa mereka berhak atas laba ('upah supervisi') gugur. Engels menyimpulkan bahwa kaum kapitalis kini telah menjadi gangguan tak terhingga, dan bahwa industri raksasa sepenuhnya dapat berjalan di bawah pengelolaan kelas pekerja tanpa mereka.",
    argumentStructure: [
      "Menilai fungsionalitas Aristokrasi Tanah, dan menyimpulkannya sebagai gangguan nasional.",
      "Mengakui bahwa kelas Kapitalis dahulunya diperlukan untuk menumbuhkan revolusi industri.",
      "Menganalisis pergeseran struktural: pembentukan perusahaan perseroan dan perluasan komunikasi bertenaga uap mendelegasikan kerja administratif ke pegawai bayaran (manajer).",
      "Mendeskripsikan transformasi kapitalis dari produsen menjadi rentenir dan penjudi pasar bursa yang berlebihan.",
      "Menyimpulkan bahwa kapitalisme kini menjadi penghalang, dan produksi raksasa dapat dipertahankan secara mandiri tanpa campur tangan kelas pemilik."
    ],
    significance: "Analisis ini memprediksi apa yang kelak disebut sebagai 'revolusi manajerial' dan pemisahan antara kepemilikan (ownership) dan kontrol dalam kapitalisme lanjut, membantah klaim ideologis liberal bahwa laba adalah imbalan atas 'kerja keras manajemen'.",
    contextOrigin: "curated",
    auditEvidence: {
      mainProblem: [{ source: "/mia/indonesia/archive/marx-engels/1881/klas.html", heading: "Klas-Klas Masyarakat Diperlukan Dan Berlebihan" }],
      mainThesis: [{ source: "/mia/indonesia/archive/marx-engels/1881/klas.html", heading: "Klas-Klas Masyarakat Diperlukan Dan Berlebihan" }],
      contentSummary: [{ source: "/mia/indonesia/archive/marx-engels/1881/klas.html", heading: "Klas-Klas Masyarakat Diperlukan Dan Berlebihan" }],
      argumentStructure: [{ source: "/mia/indonesia/archive/marx-engels/1881/klas.html" }]
    },
    summaryStatus: 'complete'
  },

  'peranan-yang-dimainkan-kerja-dalam-peralihan-dari-kera-ke-manusia': {
    historicalContext: "Ditulis oleh Friedrich Engels pada tahun 1876 sebagai bagian dari karya yang direncanakan lebih besar, naskah ini tidak pernah diselesaikan dan baru diterbitkan pada tahun 1896 (setelah kematian Engels). Naskah ini merepresentasikan salah satu penerapan pertama dari materialisme dialektis pada pertanyaan-pertanyaan antropologi evolusioner dan biologi manusia pasca-Darwin. Local source ini merupakan keseluruhan naskah yang sempat ditulis (berakhir mid-sentence).",
    mainProblem: "Bagaimana proses evolutif dari kera primata secara kualitatif bertransisi menjadi manusia, dan faktor material apa yang menjadi penggerak utama spesiasi tersebut?",
    mainThesis: "Kerja (labour)—secara spesifik, postur tubuh tegak yang membebaskan tangan untuk pembuatan alat (tool-making)—adalah pendorong utama yang memaksa evolusi manusia, yang pada gilirannya mendorong perkembangan bahasa, otak, dan aktivitas sosial, hingga mengubah keterikatan pasif kera terhadap alam menjadi penguasaan manusia yang aktif terhadap alam.",
    contentSummary: "Engels mengajukan tesis bahwa 'kerja itu sendiri yang menciptakan manusia.' Meninjau dari teori Darwin, Engels mendalilkan bahwa ketika leluhur kera turun dari pohon, mereka mulai berjalan tegak, membebaskan tangan dari fungsi penggerak tubuh. Evolusi biomekanik pada tangan memungkinkan nenek moyang manusia merakit alat. Pembuatan alat menuntut interaksi kolektif dan kerja sama sosial tingkat tinggi, yang melahirkan kebutuhan untuk berkomunikasi, sehingga memicu perkembangan organ laring (bahasa) dan otak (pemikiran abstrak). Tidak seperti hewan yang hanya menggunakan apa yang disediakan alam secara pasif, manusia mengendalikan alam melalui produksi terencana. Namun, naskah yang belum rampung ini ditutup dengan pengingat dialektis: upaya manusia menguasai alam secara eksploitatif atau demi sekadar laba instan dalam masyarakat kelas kapitalis selalu membawa konsekuensi sosial dan ekologis jarak jauh yang merusak (seperti contoh deforestasi). Naskah ini terputus di tengah kalimat saat Engels tengah merangkum kontradiksi kepemilikan privat atas hasil kerja.",
    argumentStructure: [
      "Menggagas bahwa kerja bukan sekadar aktivitas, melainkan pencipta eksistensi manusia.",
      "Menelusuri postur tegak sebagai langkah evolusioner pertama yang membebaskan tangan.",
      "Menjelaskan kaitan evolusioner antara pergerakan tangan, produksi alat, nutrisi hewani, serta membesarnya kapasitas otak dan artikulasi ujaran.",
      "Membedakan antara hewan (yang memanfaatkan lingkungan sekitarnya) dan manusia (yang mengubah lingkungan dan menguasai alam melalui kerja produktif).",
      "Menganalisis hukum akibat yang tak dikehendaki (unintended consequences) dari cara produksi kelas eksploitatif terhadap alam dan masyarakat, sebelum manuskrip berakhir menggantung secara tiba-tiba."
    ],
    significance: "Esai ini memelopori pendekatan antropologi materialis. Meskipun beberapa biologi evolusionernya merefleksikan sains abad ke-19, penekanan Engels bahwa pembuatan alat dan kerja sosial (bukan semata-mata pertumbuhan kecerdasan otak abstrak) adalah pendorong awal evolusi manusia ('kerja menciptakan manusia') kelak dikonfirmasi oleh temuan-temuan paleoantropologi modern.",
    contextOrigin: "curated",
    auditEvidence: {
      mainProblem: [{ source: "/mia/indonesia/archive/marx-engels/1876/apetoman.html", heading: "Peranan Yang Dimainkan Kerja Dalam Peralihan Dari Kera Ke Manusia" }],
      mainThesis: [{ source: "/mia/indonesia/archive/marx-engels/1876/apetoman.html", heading: "Peranan Yang Dimainkan Kerja Dalam Peralihan Dari Kera Ke Manusia" }],
      contentSummary: [{ source: "/mia/indonesia/archive/marx-engels/1876/apetoman.html", heading: "Peranan Yang Dimainkan Kerja Dalam Peralihan Dari Kera Ke Manusia" }],
      argumentStructure: [{ source: "/mia/indonesia/archive/marx-engels/1876/apetoman.html" }]
    },
    summaryStatus: 'complete'
  }
,
  'manifesto-partai-komunis': {
    historicalContext: "Ditulis antara Desember 1847 dan Januari 1848, manifesto ini ditugaskan oleh Liga Komunis di London. Teks ini diterbitkan pertama kali pada Februari 1848, tepat sebelum pecahnya revolusi tahun 1848 di berbagai penjuru Eropa.",
    contextOrigin: "curated",
    auditEvidence: { contentSummary: [{ source: "/mia/indonesia/archive/marx-engels/1848/manifesto/index.htm" }] },
    mainProblem: "Bagaimana kelas pekerja (proletariat) dapat memahami sejarah penindasan kelas dan mengorganisir diri untuk menggulingkan kapitalisme?",
    mainThesis: "Sejarah dari semua masyarakat yang ada hingga saat ini adalah sejarah perjuangan kelas, dan proletariat memiliki misi historis untuk merebut kekuasaan dan menghapus masyarakat berkelas.",
    contentSummary: "Manifesto Komunis menyajikan sintesis kuat antara analisis sejarah, kritik ekonomi, dan program politik aksi. Bab pertama menelusuri bagaimana kaum borjuis secara historis progresif dalam menumbangkan feodalisme tetapi pada akhirnya menciptakan 'penggali kuburnya sendiri' yakni kelas proletar. Bab kedua membeberkan hubungan antara komunis dan kaum proletar secara umum, mempertahankan gagasan penghapusan hak milik pribadi borjuis. Bab ketiga adalah kritik tajam terhadap berbagai bentuk sosialisme reaksioner, konservatif, dan utopis yang ada pada masanya. Teks ditutup dengan deklarasi terbuka tentang dukungan komunis terhadap setiap gerakan revolusioner yang melawan tatanan sosial dan politik yang ada.",
    argumentStructure: [
      "I. Borjuis dan Proletar: Analisis sejarah perkembangan kapitalisme dan penyederhanaan antagonisme kelas.",
      "II. Proletar dan Komunis: Penjelasan tentang tujuan komunis, penghapusan kepemilikan pribadi, dan program radikal (10 tuntutan).",
      "III. Literatur Sosialis dan Komunis: Kritik terhadap aliran sosialisme borjuis, reaksioner, dan utopis.",
      "IV. Pendirian Komunis: Taktik aliansi dengan oposisi dan seruan revolusi 'Kaum buruh sedunia, bersatulah!'"
    ],
    significance: "Karya politik yang sangat berpengaruh dalam sejarah modern. Manifesto ini meletakkan landasan politik praktis dan teoritis pertama yang sistematis bagi gerakan komunis internasional.",
    summaryStatus: 'complete'
  },
  'tesis-tentang-feuerbach-versi-asli': {
    historicalContext: "Ditulis oleh Karl Marx di Brussels pada musim semi (kemungkinan April) 1845. Ini merupakan catatan awal di mana Marx mulai melepaskan diri dari materialisme pasif Feuerbach dan merumuskan konsepsi materialisme barunya yang berfokus pada aktivitas praktis manusia.",
    contextOrigin: "curated",
    auditEvidence: { contentSummary: [{ source: "/mia/indonesia/archive/marx-engels/1845/tesis.htm" }] },
    mainProblem: "Apa kelemahan mendasar dari materialisme sebelumnya (termasuk Feuerbach) dan idealisme dalam memahami hubungan manusia dengan dunia objektif?",
    mainThesis: "Filsuf selama ini hanya menafsirkan dunia dengan berbagai cara; yang penting sekarang adalah mengubahnya (Tesis ke-11). Pemahaman yang benar tentang kenyataan harus berasal dari 'praksis' atau kegiatan revolusioner.",
    contentSummary: "Karya ini terdiri dari 11 tesis pendek. Marx mengkritik materialisme lama (seperti milik Feuerbach) karena memandang dunia secara objektif tetapi mengabaikan aktivitas manusia (subjektif/praktis) di dalamnya. Sebaliknya, idealisme mengembangkan sisi aktif manusia tetapi hanya dalam alam pikiran, terlepas dari kenyataan material. Marx berargumen bahwa kebenaran pemikiran tidak bisa diputuskan oleh teori semata, melainkan harus dibuktikan melalui praktek. Ia menolak pandangan bahwa manusia murni produk dari lingkungannya, karena manusia itu sendirilah yang mengubah lingkungannya. Agama dan keterasingan ideologis lainnya hanya dapat diselesaikan dengan merevolusionerkan basis material masyarakat tersebut di dunia nyata.",
    argumentStructure: [
      "Tesis 1-3: Kritik terhadap kebuntuan materialisme lama dan idealisme; penegasan pentingnya aktivitas manusia-inderawi (praksis) dalam mengubah lingkungan.",
      "Tesis 4-7: Kritik spesifik terhadap keterasingan agama Feuerbach. Agama tidak cukup dikritik secara teoritis, dasar material/sosial yang melahirkannya harus dihancurkan.",
      "Tesis 8-10: Penegasan bahwa kehidupan sosial pada dasarnya bersifat praktis. Materialisme lama hanya mengarah pada masyarakat borjuis.",
      "Tesis 11: Kesimpulan agitatif bahwa tugas filsafat bukan lagi sekadar interpretasi, melainkan transformasi revolusioner atas dunia."
    ],
    significance: "Merupakan salah satu draf paling awal dari pendekatan Materialisme Historis. Teks ini menandai perpisahan Marx secara epistemologis dengan filsafat hegelaian Kiri dan materialisme feuerbachian klasik.",
    summaryStatus: 'complete'
  },
  'tesis-tentang-feuerbach': {
    summaryStatus: 'complete',
    $ref: 'tesis-tentang-feuerbach-versi-asli'
  },
  'upah-harga-dan-laba': {
    historicalContext: "Berawal dari naskah pidato Marx di Dewan Umum Asosiasi Pekerja Internasional (Internasional Pertama) pada 20 dan 27 Juni 1865. Ditujukan untuk merespons pendapat John Weston yang berargumen bahwa serikat pekerja dan pemogokan tidak ada gunanya karena kenaikan upah hanya akan memicu kenaikan harga.",
    mainProblem: "Apakah tuntutan kenaikan upah oleh serikat buruh berguna, dan bagaimana hubungan antara upah, harga barang, dan profit kapitalis?",
    mainThesis: "Kenaikan umum tingkat upah tidak akan menaikkan harga-harga komoditas secara permanen, melainkan hanya akan menyebabkan penurunan tingkat profit secara umum. Oleh karena itu, perjuangan serikat buruh sangat valid dan perlu.",
    contentSummary: "Marx dengan sabar membedah kesalahan logika Weston (dan ekonomi borjuis klasik pada umumnya). Ia menjelaskan dasar-dasar teori nilai-kerja: bahwa nilai sebuah komoditas ditentukan oleh waktu kerja rata-rata yang dibutuhkan masyarakat untuk memproduksinya. Harga hanyalah ekspresi moneter dari nilai. Kapitalis membeli 'tenaga kerja', bukan 'kerja'. Nilai dari tenaga kerja ini dibayar dalam bentuk upah, tetapi buruh memproduksi nilai jauh lebih banyak dari upahnya. Surplus inilah yang menjadi profit kapitalis. Jika buruh menuntut upah yang lebih tinggi, yang terjadi bukanlah barang menjadi lebih mahal (karena nilai komoditas tidak berubah), melainkan margin profit kapitalis yang terpangkas. Karenanya, buruh harus melawan penindasan upah, meski di sisi lain perjuangan akhir mereka haruslah penghapusan sistem kerja upahan itu sendiri.",
    argumentStructure: [
      "I-V: Bantahan terhadap klaim Weston bahwa jumlah produksi nasional dan upah riil adalah tetap.",
      "VI-VII: Pengantar mengenai Nilai dan Kerja; menjelaskan bahwa nilai komoditas didasarkan pada waktu kerja.",
      "VIII-XI: Penjelasan tentang Tenaga Kerja, Produksi Nilai-Lebih, dan bagaimana Laba dihitung.",
      "XII-XIV: Hubungan terbalik antara Upah dan Laba, serta kesimpulan pentingnya perjuangan kelas melalui serikat buruh (Trade Unions)."
    ],
    significance: "Teks pengantar yang sangat baik dan mudah dicerna sebelum membaca Kapital Jilid I. Menyajikan fondasi dasar bagaimana eksploitasi ekonomi beroperasi secara mekanis di tempat kerja.",
    summaryStatus: 'complete'
  },
  'prinsip-prinsip-komunisme': {
    historicalContext: "Ditulis oleh Friedrich Engels pada akhir 1847 sebagai rancangan program untuk Liga Komunis dalam bentuk katekismus (Tanya-Jawab). Teks ini kemudian menjadi fondasi draft awal sebelum Marx dan Engels menyusun Manifesto Partai Komunis.",
    mainProblem: "Apa itu paham komunisme, bagaimana proletariat lahir secara historis, dan apa konsekuensi dari Revolusi Industri?",
    mainThesis: "Komunisme adalah doktrin mengenai syarat-syarat pembebasan proletariat. Pembebasan ini hanya bisa dicapai melalui revolusi yang menghapus kepemilikan pribadi dan menggantinya dengan kontrol masyarakat atas kekuatan-kekuatan produksi.",
    contentSummary: "Melalui format tanya-jawab yang sederhana, Engels mendefinisikan proletariat sebagai kelas yang hidup murni dari penjualan tenaga kerjanya dan tidak mengambil untung dari kapital apa pun. Ia melacak lahirnya proletariat melalui Revolusi Industri (mesin uap, mesin tenun) yang menghancurkan manufaktur kecil dan memusatkan properti di tangan kapitalis besar. Sistem ini, karena produksi massalnya yang tak terkendali, secara periodik menghasilkan krisis komersial yang menghancurkan masyarakat. Untuk keluar dari krisis ini, masyarakat harus dijalankan sesuai dengan rencana yang rasional, bebas dari kepemilikan swasta. Teks tersebut juga memuat draf tindakan transisional pasca-revolusi, pandangan tentang keluarga, bangsa, dan perbandingan komunis dengan faksi sosialis lainnya.",
    argumentStructure: [
      "Pertanyaan 1-6: Definisi proletariat dan kondisi historis kemunculannya.",
      "Pertanyaan 7-10: Perbedaan proletar dengan budak, hamba sahaya (serf), dan pekerja gilda.",
      "Pertanyaan 11-13: Revolusi Industri dan kemunculan krisis kapitalis akibat overproduksi.",
      "Pertanyaan 14-24: Kebutuhan akan tatanan masyarakat baru, program revolusi, dampaknya terhadap negara, keluarga, dan kelas-kelas sosial lainnya."
    ],
    significance: "Garis besar yang jernih dan mendasar mengenai prinsip-prinsip utama Marxisme. Sangat cocok bagi pembaca pemula yang baru ingin memahami terminologi dan konsep sejarah gerakan komunis.",
    summaryStatus: 'complete'
  },
  'sosialisme-utopis-dan-sosialisme-ilmiah': {
    historicalContext: "Teks ini aslinya adalah gabungan dari tiga bab dari buku besar Engels, 'Anti-Dühring' (1878), yang diadaptasi pada tahun 1880 atas permintaan Paul Lafargue agar menjadi pamflet pengenalan bagi buruh di Prancis.",
    contextOrigin: "curated",
    auditEvidence: { contentSummary: [{ source: "/mia/indonesia/archive/marx-engels/1880/sosialisme/index.htm" }] },
    mainProblem: "Apa letak perbedaan mendasar antara gagasan sosialis awal yang bersifat moralistis dan idealis, dengan pandangan sosialis baru yang dirumuskan oleh Marx?",
    mainThesis: "Sosialisme bukan sekadar ide brilian tentang keadilan moral, melainkan hasil niscaya dari kontradiksi material antara kekuatan produksi yang membesar (sosial) dengan hubungan apropriasi kapitalis yang bersifat privat.",
    contentSummary: "Engels menguraikan bahwa para sosialis awal (Saint-Simon, Fourier, Owen) gagal karena mereka hanya membangun sistem rasional di dalam pikiran mereka tanpa basis empiris sejarah ekonomi yang matang; mereka merancang utopia di saat kapitalisme belum berkembang penuh. Selanjutnya, Engels membahas dialektika (meminjam dan menjungkirbalikkan Hegel) yang memandang dunia sebagai proses dinamis, bukan hal-hal statis. Terakhir, Engels mensintesis pandangan ini ke dalam Materialisme Historis. Ia menunjukkan bahwa kapitalisme mengubah produksi menjadi kegiatan sosial secara massal, tetapi hasil produksinya dirampas oleh pemilik modal privat. Kontradiksi ini menciptakan krisis periodik dan kelas proletar, yang mana tugas historisnya adalah merebut mesin negara dan mengubah properti alat produksi menjadi properti publik.",
    argumentStructure: [
      "Bagian 1 (Sosialisme Utopis): Analisis sejarah mengenai keterbatasan teori-teori rasional dan utopis abad pencerahan hingga sosialis Prancis/Inggris awal.",
      "Bagian 2 (Dialektika): Kritik terhadap metafisika yang kaku, serta penjelasan mengenai dialektika materialis sebagai pisau analisis revolusioner.",
      "Bagian 3 (Materialisme Historis): Aplikasi metode dialektik untuk membedah kontradiksi kapitalisme dan peran historis proletariat untuk mengakhiri masyarakat kelas."
    ],
    significance: "Pamflet Marxis yang secara luas dibaca dan diterjemahkan pada akhir abad ke-19. Karya ini adalah pengantar standar mengenai bagaimana Marxisme memandang sejarah dan ekonomi secara rasional dan ilmiah.",
    summaryStatus: 'complete'
  },
  'sosialisme-utopis-dan-ilmiah': {
    summaryStatus: 'complete',
    $ref: 'sosialisme-utopis-dan-sosialisme-ilmiah'
  },
  'anti-duhring': {
    historicalContext: "Ditulis oleh Engels antara 1876 dan 1878 untuk melawan pengaruh teoretis Eugen Dühring yang sedang naik daun di Partai Sosial Demokrat Jerman (SPD). Marx dan Engels merasa perlu menjaga kejernihan ideologi partai.",
    contextOrigin: "curated",
    auditEvidence: { contentSummary: [{ source: "/mia/indonesia/archive/marx-engels/1878/anti-duhring/index.htm" }] },
    mainProblem: "Bagaimana mengcounter pandangan positivis borjuis kecil Dühring yang mengancam akan membingungkan program politik dan fondasi teoritis gerakan pekerja Jerman?",
    mainThesis: "Marxisme adalah konsepsi dunia yang menyeluruh dan koheren (Materialisme Dialektis) yang membedah dan memberi jawaban yang lebih saintifik terhadap persoalan filsafat, ekonomi politik, maupun sosialisme dibandingkan dengan eklektisisme superfisial milik Dühring.",
    contentSummary: "Karena Dühring menciptakan seluruh 'sistem' ilmu yang baru, Engels terpaksa mengikutinya melintasi berbagai subjek—mulai dari ruang dan waktu, mekanika, ilmu fisika, kimia, moral, hukum, hingga ekonomi dan sejarah. Secara tidak langsung, ini mendorong Engels untuk pertama kalinya memaparkan 'pandangan dunia' (worldview) Marxisme secara komprehensif. Pada bagian Filsafat, ia menjelaskan bahwa dialektika berlaku di alam semesta. Pada bagian Ekonomi Politik, ia (dengan bantuan bab yang ditulis Marx) membela Teori Nilai-Kerja. Dan pada bagian Sosialisme, ia menjelaskan transisi dari utopia ke sains.",
    argumentStructure: [
      "Pendahuluan: Sejarah pembentukan sosialisme dan metode materialis.",
      "Bagian I: Filsafat. Membahas ontologi, apriori, waktu, ruang, moral, hukum, dan hukum dialektika.",
      "Bagian II: Ekonomi Politik. Menjelaskan nilai, kapital, bunga, nilai-lebih, dan mengoreksi pembacaan Dühring terhadap Marx.",
      "Bagian III: Sosialisme. Menganalisis sejarah produksi, kapitalisme, dan tugas negara yang akan 'melenyap' (withering away)."
    ],
    significance: "Buku ini sering dianggap sebagai paparan komprehensif pertama dari Marxisme.",
    summaryStatus: 'complete'
  },
  'kerja-upahan-dan-kapital': {
    historicalContext: "Asalnya adalah rangkaian kuliah yang diberikan Marx kepada Asosiasi Pekerja Jerman di Brussels pada tahun 1847. Kemudian diterbitkan sebagai artikel berseri di Neue Rheinische Zeitung pada April 1849.",
    contextOrigin: "curated",
    auditEvidence: { contentSummary: [{ source: "/mia/indonesia/archive/marx-engels/1847/kerja-upahan/index.htm" }] },
    mainProblem: "Bagaimana menjelaskan dasar ekonomi eksploitasi kapitalis dengan cara yang dapat dimengerti oleh pekerja harian yang tak terdidik secara akademis?",
    mainThesis: "Kerja dan kapital adalah dua kekuatan yang saling bertentangan; kemakmuran kelas kapitalis selalu didasarkan pada dan diiringi oleh pemiskinan (secara relatif) kelas pekerja.",
    contentSummary: "Teks ini menjelaskan mekanisme ekonomi paling dasar: apa itu upah dan bagaimana upah ditentukan. Marx memperlihatkan bahwa upah bukanlah 'bagian pekerja atas komoditas yang diproduksinya', melainkan biaya untuk mempertahankan keberadaan pekerja itu sendiri (reproduksi tenaga kerja). Kapital baru bisa menjadi kapital apabila ia memerintahkan kerja upahan. Oleh karenanya, kepentingan kapital dan kerja upahan secara diametral bertolak belakang. Meskipun terkadang peningkatan modal produktif meningkatkan upah buruh, pertumbuhan upah ini selalu tertinggal dibandingkan pertumbuhan profit kapitalis, sehingga mempelebar jurang ketimpangan sosial.",
    argumentStructure: [
      "I: Pendahuluan dan Apa itu Upah? Bagaimana ia dihitung.",
      "II: Apa yang menentukan harga komoditas (termasuk tenaga kerja)?",
      "III: Bagaimana relasi sosial penciptaan modal beroperasi.",
      "IV-V: Pertentangan absolut antara kepentingan kapitalis dengan buruh, dan hukum penurunan harga akibat persaingan serta mesin."
    ],
    significance: "Sebuah bacaan awal klasik yang ideal bagi kelas buruh untuk mengerti letak penindasan bukan pada mandor yang jahat, melainkan pada struktur hubungan ekonomi itu sendiri.",
    summaryStatus: 'complete'
  }
,
  'tesis-tentang-feuerbach-versi-suntingan-engels': {
    historicalContext: "Tesis ini ditulis oleh Karl Marx pada musim semi tahun 1845 di Brussels. Karena Marx tidak pernah mempublikasikannya semasa hidupnya, Friedrich Engels menyunting dan menerbitkannya pada tahun 1888 sebagai lampiran dalam 'Ludwig Feuerbach dan Akhir Filsafat Jerman Klasik'. Engels melakukan perubahan editorial agar catatan-catatan kasar Marx lebih dapat dipahami oleh pembaca umum.",
    contextOrigin: "curated",
    auditEvidence: {
      contentSummary: [{ source: "/mia/indonesia/archive/marx-engels/18450401-tesisfeuerbachversisuntinganengels.html" }],
      mainProblem: [{ source: "/mia/indonesia/archive/marx-engels/18450401-tesisfeuerbachversisuntinganengels.html" }],
      mainThesis: [{ source: "/mia/indonesia/archive/marx-engels/18450401-tesisfeuerbachversisuntinganengels.html" }],
      argumentStructure: [{ source: "/mia/indonesia/archive/marx-engels/18450401-tesisfeuerbachversisuntinganengels.html" }]
    },
    mainProblem: "Di mana letak kelemahan utama dari materialisme lama (termasuk materialisme Feuerbach) dalam memahami realitas, dan bagaimana filsafat baru harus mengatasi kelemahan tersebut?",
    mainThesis: "Kelemahan materialisme sebelumnya adalah memahami realitas hanya sebagai objek kontemplasi, bukan sebagai aktivitas indrawi manusia (praktik). Maka, kebenaran pemikiran manusia harus dibuktikan melalui praktik yang merevolusionerkan dunia.",
    contentSummary: "Marx mengkritik materialisme kontemplatif yang memisahkan manusia dari dunia sekitarnya dan menganggap esensi agama sekadar terlepas ke dalam 'esensi manusia' abstrak. Marx menegaskan bahwa esensi manusia sejatinya adalah himpunan relasi-relasi sosial, dan bahwa keadaan historis serta masyarakat adalah produk dari aktivitas manusia itu sendiri. Pembebasan sosial karenanya memerlukan revolusi praktis, di mana filsafat tidak lagi hanya bertugas menafsirkan dunia, melainkan mengubahnya.",
    argumentStructure: [
      "Tesis 1: Mengkritik materialisme sebelumnya karena mengabaikan sisi aktif/subjektif dari keindrawian yang justru dikembangkan secara abstrak oleh idealisme.",
      "Tesis 2: Menegaskan bahwa perdebatan tentang kebenaran pemikiran adalah perkara praktik, bukan sekadar teori.",
      "Tesis 3-5: Menolak pandangan bahwa manusia murni produk keadaan pasif; mengkritik cara Feuerbach menyelesaikan keterasingan religius tanpa merevolusionerkan landasan sekulernya.",
      "Tesis 6-7: Mendefinisikan ulang esensi manusia bukan sebagai individu abstrak spesies, melainkan sebagai keseluruhan relasi sosial yang terbentuk secara historis.",
      "Tesis 8-10: Membedakan materialisme lama yang sudut pandangnya adalah 'masyarakat sipil' dengan materialisme baru yang sudut pandangnya adalah kemanusiaan yang bermasyarakat.",
      "Tesis 11: Menyatakan bahwa tugas utama filsuf bukan lagi sekadar menafsirkan, tetapi mengubah dunia."
    ],
    significance: "Merupakan salah satu dokumen filosofis awal terpenting yang memformulasikan fondasi materialisme historis dengan meletakkan 'praktik' (praxis) sebagai kriteria kebenaran dan agen perubahan sejarah."
  },

  'mengenai-otoritas': {
    historicalContext: "Ditulis oleh Friedrich Engels pada tahun 1873 sebagai tanggapan polemik terhadap kaum anti-otoritas (anarkis) di dalam gerakan kelas pekerja Eropa pada saat itu.",
    contextOrigin: "curated",
    auditEvidence: {
      contentSummary: [{ source: "/mia/indonesia/archive/marx-engels/1873/1873-MengenaiOtoritas.html" }],
      mainProblem: [{ source: "/mia/indonesia/archive/marx-engels/1873/1873-MengenaiOtoritas.html" }],
      mainThesis: [{ source: "/mia/indonesia/archive/marx-engels/1873/1873-MengenaiOtoritas.html" }],
      argumentStructure: [{ source: "/mia/indonesia/archive/marx-engels/1873/1873-MengenaiOtoritas.html" }]
    },
    mainProblem: "Apakah otoritas dapat dan harus dihapuskan sepenuhnya dalam produksi industri modern dan dalam revolusi sosial kelas pekerja?",
    mainThesis: "Otoritas adalah suatu keniscayaan yang lahir dari kondisi material produksi industri skala besar dan kerja kolektif. Menghapuskan otoritas secara mutlak tidak mungkin dilakukan tanpa menghancurkan industri itu sendiri, dan sebuah revolusi adalah tindakan yang paling otoriter secara inheren.",
    contentSummary: "Engels membantah gagasan anti-otoritas dengan menggunakan contoh pabrik pemintal kapas, rel kereta api, dan kapal laut. Ia menjelaskan bahwa produksi massal modern membutuhkan aksi gabungan dan ketundukan individual pada keputusan atau jadwal yang dipusatkan (despotisme mesin). Selanjutnya, ia mengkritik tuntutan anarkis untuk menghapuskan negara politik dalam satu malam. Engels menegaskan bahwa revolusi itu sendiri adalah proses pemaksaan kehendak (dengan senjata) oleh satu bagian populasi atas bagian lainnya, sehingga kelas pekerja membutuhkan otoritas untuk menundukkan perlawanan kaum reaksioner.",
    argumentStructure: [
      "Engels membuka dengan mendefinisikan otoritas sebagai subordinasi pada kehendak pihak lain, lalu menyoroti bagaimana industri dan pertanian modern mensyaratkan aksi gabungan massal.",
      "Kemudian membahas contoh operasional pabrik, rel kereta, dan kapal layar laut yang mutlak mensyaratkan sebuah otoritas agar tidak terjadi kekacauan dan kecelakaan.",
      "Argumen beralih kepada kritik atas permainan kata anarkis yang mengganti istilah 'otoritas' menjadi sekadar 'tugas delegasi'.",
      "Teks ditutup dengan pernyataan bahwa revolusi bersenjata (seperti Komune Paris) secara alamiah bersifat otoriter, dan menuntut penghapusan otoritas seketika adalah sebuah pengkhianatan atau kebingungan terhadap gerakan proletariat."
    ],
    significance: "Karya polemik ini menjadi teks rujukan utama dalam membedakan teori Marxis tentang pentingnya kepemimpinan politik dan alat negara pasca-revolusi dengan teori anarkisme yang menolak segala bentuk otoritas."
  },

  'penghapusan-hak-milik-tanah': {
    historicalContext: "Ditulis oleh Karl Marx sebagai sebuah memorandum untuk Robert Applegarth pada 3 Desember 1869, yang dipersiapkan dalam rangka mendiskusikan persoalan hak milik tanah dalam gerakan buruh internasional (Internasional Pertama).",
    contextOrigin: "curated",
    auditEvidence: {
      contentSummary: [{ source: "/mia/indonesia/archive/marx-engels/1869/PenghapusanHak.html" }],
      mainProblem: [{ source: "/mia/indonesia/archive/marx-engels/1869/PenghapusanHak.html" }],
      mainThesis: [{ source: "/mia/indonesia/archive/marx-engels/1869/PenghapusanHak.html" }],
      argumentStructure: [{ source: "/mia/indonesia/archive/marx-engels/1869/PenghapusanHak.html" }]
    },
    mainProblem: "Mengapa hak pemilikan pribadi atas tanah harus dihapuskan, dan bagaimana pertanian harus diorganisir setelah nasionalisasi tanah?",
    mainThesis: "Hak kepemilikan pribadi atas tanah pada dasarnya adalah hasil dari penaklukan dan kekerasan. Perkembangan ekonomi, pertumbuhan populasi, dan keharusan penerapan ilmu pengetahuan alam dalam pertanian menjadikan nasionalisasi tanah sebagai suatu keharusan sosial demi meningkatkan produksi dan menghapus eksploitasi kelas.",
    contentSummary: "Marx menolak argumen yang menggunakan 'hak alamiah' untuk membela kepemilikan tanah partikelir, karena sejarah membuktikan hak itu direbut dengan kekerasan. Ia membedakan kasus Perancis, di mana tanah dipecah-pecah ke petani kecil yang akhirnya menjadi musuh kemajuan sosial dan terhisap utang, dengan kebutuhan produksi massal modern. Marx berpendapat bahwa tanah tidak boleh sekadar dibagikan ke petani kecil atau asosiasi pedesaan, karena itu akan menciptakan sentralisasi keuntungan pada satu kelas. Tanah harus dinasionalisasi demi kepentingan seluruh bangsa (masyarakat terpusat), sehingga produksi pertanian dapat diselenggarakan secara rasional oleh asosiasi kaum 'produser' yang bebas dan sederajat.",
    argumentStructure: [
      "Membuka dengan sanggahan bahwa kepemilikan privat adalah hak alamiah, melainkan hasil perebutan (penaklukan) paksa dalam sejarah.",
      "Kemudian membahas mengapa pertanian masa kini membutuhkan sentralisasi dan permesinan secara skala besar yang mustahil dipenuhi oleh petani-petani berbidang kecil.",
      "Mengambil contoh Perancis di mana pembagian bidang tanah ke kaum tani justru menciptakan kebodohan, beban pajak, dan memusuhi gerakan pekerja industrial.",
      "Teks ditutup dengan kesimpulan polemis terhadap usulan Kongres Brussel 1868: tanah harus dinasionalisasi secara penuh untuk melenyapkan perbedaan kelas, bukan sekadar dipindahtangankan ke asosiasi pekerja pedesaan."
    ],
    significance: "Memperjelas sikap ekonomi-politik Marx yang menentang redistribusi tanah ke kepemilikan kecil-kecilan (petani gurem) sebagai solusi sosialis, dan sebaliknya menuntut sentralisasi dan budidaya pertanian secara besar-besaran oleh negara atau masyarakat."
  },

  'pendahuluan-sumbangan-untuk-kritik-terhadap-filsafat-hak-hegel': {
    historicalContext: "Ditulis oleh Karl Marx pada awal 1844 dan diterbitkan dalam Deutsch-Französische Jahrbücher. Pada masa ini, Marx berada dalam transisi radikal menuju perumusan materialisme historis dan mulai melihat peran historis kelas pekerja.",
    contextOrigin: "curated",
    auditEvidence: {
      contentSummary: [{ source: "/mia/indonesia/archive/marx-engels/1844/PendahuluanSumbangan.html" }],
      mainProblem: [{ source: "/mia/indonesia/archive/marx-engels/1844/PendahuluanSumbangan.html" }],
      mainThesis: [{ source: "/mia/indonesia/archive/marx-engels/1844/PendahuluanSumbangan.html" }],
      argumentStructure: [{ source: "/mia/indonesia/archive/marx-engels/1844/PendahuluanSumbangan.html" }]
    },
    mainProblem: "Apa hubungan antara kritik terhadap agama dengan kebutuhan akan emansipasi radikal dan kritik terhadap situasi politik Jerman yang terbelakang?",
    mainThesis: "Agama adalah kesadaran-dunia yang terbalik (candu rakyat) yang lahir dari penderitaan dan kondisi duniawi yang terbalik. Menghapuskan agama berarti menuntut perubahan pada kondisi-kondisi riil yang menyebabkan ilusi agama itu diperlukan; sehingga, kritik teologi harus bermutasi menjadi kritik politik yang bertujuan menghancurkan status quo secara praktis.",
    contentSummary: "Tulisan ini secara kuat menegaskan bahwa manusia menciptakan agama, bukan sebaliknya. Agama bertindak sebagai pelipur lara ('jantung-hati sebuah dunia tanpa hati') atas penindasan yang riil. Marx berargumen bahwa mencopot topeng teologis hanyalah langkah awal; tugas utamanya adalah mencopot 'topeng keterasingan dalam bentuk-bentuk yang tak suci', yaitu politik dan hukum. Ia meluncurkan pengutukan keras terhadap situasi Jerman pada 1843 yang dinilainya berada di bawah level sejarah (sebuah anakronisme) karena tidak mengalami kemajuan revolusioner seperti negara modern lainnya. Oleh karena itu, kritik tidak boleh sekadar menjadi argumen akademis, melainkan sebuah 'senjata' (pisau bedah) yang gairahnya adalah kemarahan untuk menghancurkan kekejian rezim saat itu. (Catatan: Teks primer dalam arsip lokal terpotong secara prematur dan tidak memuat bab mengenai emansipasi proletar secara penuh).",
    argumentStructure: [
      "Dimulai dengan premis bahwa manusialah yang menciptakan agama karena masyarakat yang memproduksinya adalah dunia yang terbalik.",
      "Kemudian menjabarkan peran fungsional agama sebagai protes terhadap kesengsaraan sekaligus sebagai candu rakyat yang mengilusionerkan realitas.",
      "Argumen beralih bahwa kritik surga harus menjelma menjadi kritik politik dan hukum (dunia nyata).",
      "Teks ditutup (dalam versi ekstraksi yang tersedia) dengan seruan perang/pengutukan tajam terhadap situasi Jerman yang terbelakang dan ketinggalan zaman dibanding sejarah negara-negara modern Eropa, di mana kritik kini harus berfungsi sebagai senjata fisik penghancur lawan."
    ],
    significance: "Karya ini sangat terkenal karena penggalan kalimat 'Agama adalah candu rakyat'. Teks ini juga menandai pergeseran penting Marx dari sekadar filosof pemikir-kiri-Hegelian ke ranah praksis revolusioner, mengaitkan penderitaan spiritual langsung dengan struktur penindasan politik."
  },

  'kata-pengantar-pada-sebuah-sumbangan-untuk-kritik-terhadap-ekonomi-politik': {
    historicalContext: "Ditulis oleh Karl Marx pada Januari 1859 di London sebagai pendahuluan untuk karyanya yang menganalisis kapitalisme. Periode ini ditandai oleh studi intensif Marx terhadap ekonomi politik pasca-revolusi 1848 yang gagal.",
    contextOrigin: "curated",
    auditEvidence: {
      contentSummary: [{ source: "/mia/indonesia/archive/marx-engels/1859/pengantar-kritik.html" }],
      mainProblem: [{ source: "/mia/indonesia/archive/marx-engels/1859/pengantar-kritik.html" }],
      mainThesis: [{ source: "/mia/indonesia/archive/marx-engels/1859/pengantar-kritik.html" }],
      argumentStructure: [{ source: "/mia/indonesia/archive/marx-engels/1859/pengantar-kritik.html" }]
    },
    mainProblem: "Bagaimana cara kerja dasar (anatomi) masyarakat dan apa motor penggerak yang menyebabkan terjadinya revolusi sosial dan sejarah peralihan zaman?",
    mainThesis: "Keseluruhan hubungan-hubungan produksi material (struktur ekonomi) adalah dasar nyata (fondasi) dari masyarakat, di mana hukum, politik, dan kesadaran sosial dibangun di atasnya (struktur atas). Eksistensi sosial manusialah yang menentukan kesadaran mereka, bukan sebaliknya.",
    contentSummary: "Marx menjelaskan perjalanan intelektualnya dari kritik terhadap filsafat hukum Hegel menuju ekonomi politik. Ia memformulasikan dalil intinya: tahap perkembangan kekuatan-kekuatan produksi material niscaya akan bertentangan dengan hubungan-hubungan produksi yang ada (sistem hak milik). Ketika hubungan tersebut berubah menjadi belenggu-belenggu bagi kekuatan produktif, sampailah masa revolusi sosial yang pada akhirnya mengubah keseluruhan struktur atas. Marx menegaskan bahwa tidak ada tata sosial pernah lenyap sebelum seluruh kekuatan produktifnya habis berkembang, dan formasi borjuis adalah bentuk antagonistis terakhir dari tahap prehistoris masyarakat manusia.",
    argumentStructure: [
      "Membuka dengan jejak rekam sejarah intelektualnya sendiri dari studi filsafat hukum di Paris hingga kajian ekonomi politik intensif di London.",
      "Kemudian merumuskan prinsip fondasional: hubungan-hubungan produksi membentuk struktur ekonomi riil (basis), dan dari situlah struktur atas lahir.",
      "Argumen beralih kepada teori revolusi sosial yang terpicu saat kekuatan-kekuatan produksi material berkontradiksi dengan hubungan hak milik yang mengekangnya.",
      "Teks ditutup dengan menyebutkan bahwa metode studi ilmiah ini membutuhkan penelitian tekun dan keberanian, dengan mengutip penyair Dante: 'Di sini semua sifat pengecut harus mati'."
    ],
    significance: "Dokumen ini sering dianggap sebagai perumusan paling padat dan klasik dari konsepsi utama Marxis (Materialisme Historis), khususnya dalam menggunakan rumusan Struktur Ekonomi (basis) dan Struktur Atas (superstruktur)."
  }

};
