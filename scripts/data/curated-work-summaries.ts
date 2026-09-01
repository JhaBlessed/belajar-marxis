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
};
