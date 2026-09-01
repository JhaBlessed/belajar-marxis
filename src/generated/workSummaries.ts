/* eslint-disable max-len */
export type SummaryStatus = 'complete' | 'partial' | 'unavailable' | 'missing';

export interface WorkSummary {
  historicalContext: string;
  mainProblem: string;
  mainThesis: string;
  contentSummary: string;
  argumentStructure: string[];
  significance: string;
  sourceBasis: string[];
  contextBasis?: string[];
  summaryStatus: SummaryStatus;
  unavailableReason?: string;
}

export const workSummaries: Record<string, WorkSummary> = {
  "komunisme-dan-keluarga": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/kollontai/19200101-kollontai-komunismedankeluarga.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "pejuang-wanita-pada-hari-hari-revolusi-oktober-besar": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/kollontai/oktober.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "apa-yang-harus-kita-pelajari-dan-apa-yang-harus-kita-kerjakan": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/guevara/1958-Apa.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "esensi-perang-gerilya": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/guevara/1960-Esensi.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "tanggung-jawab-kelas-buruh-dalam-revolusi-kita": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/guevara/1960-TanggungJawab.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "kader-tulang-punggung-revolusi": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/guevara/1962-Kader.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "sosialisme-dan-manusia-di-kuba": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/guevara/1965-Sosialisme.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "surat-che-kepada-anak-anaknya": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/guevara/1965-SuratAnak.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "surat-che-kepada-orang-tuanya": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/guevara/1965-SuratOrangTua.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "surat-selamat-tinggal-che-kepada-fidel-castro": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/guevara/1965-SuratFidelCastro.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "surat-che-kepada-hildita": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/guevara/1966-SuratHildita.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "seruan-untuk-semua-kamerad-partai-komunis-tiongkok": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/chenduxiu/1929-seruan.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "tesis-mengenai-persoalan-kebangsaan-dan-kolonial": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/komintern/1920-tesiskebangsaan.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "agitasi-dan-propaganda": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/hallas/agitasi.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "karl-marx-beberapa-catatan-ringan": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/marx-eleanor/001.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "pengenalan-kepada-teori-ekonomi-marxis": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/mandel/002.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "gerakan-mahasiswa-revolusioner-teori-dan-praktek": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/mandel/001.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "sejarah-internasional-i-dan-internasional-ii": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/novack/001.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "pengantar-logika-marxisme": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/novack/002.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "peran-individu-dalam-sejarah": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/plekhanov/18980101-plekhanov-peranindividudalamsejarah.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "masalah-masalah-dasar-marxisme": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/plekhanov/problems.pdf"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "seni-dan-kehidupan-sosial": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/plekhanov/seni.pdf"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "sosialisme-utopian-abad-xix": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/plekhanov/utopian.pdf"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "siapa-sahabat-rakyat-dan-bagaimana-mereka-memusuhi-kaum-sosial-demokrat": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/lenin/1894/SahabatRakyat/Bab1.html",
      "/mia/indonesia/archive/lenin/1894/SahabatRakyat/Catatan1.html",
      "/mia/indonesia/archive/lenin/1894/SahabatRakyat/Catatan2.html",
      "/mia/indonesia/archive/lenin/1894/SahabatRakyat/Bab3Bag1.html",
      "/mia/indonesia/archive/lenin/1894/SahabatRakyat/Bab3Bag2.html",
      "/mia/indonesia/archive/lenin/1894/SahabatRakyat/Bab3Bag3.html",
      "/mia/indonesia/archive/lenin/1894/SahabatRakyat/Lampiran1.html",
      "/mia/indonesia/archive/lenin/1894/SahabatRakyat/Lampiran2.html",
      "/mia/indonesia/archive/lenin/1894/SahabatRakyat/Lampiran3.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "selebaran-may-day-lenin-hari-libur-buruh-satu-mei": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/lenin/1896/MayDay.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "program-kita": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/lenin/1899/ProgramKita.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "deklarasi-dewan-editorial-iskra": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/lenin/1900/Deklarasi.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "tugas-tugas-mendesak-gerakan-kita": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/lenin/1900/Tugas.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "dari-mana-kita-mulai": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/lenin/1901/Dimana.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "apa-yang-harus-dikerjakan": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/lenin/1902/ApaYang/Bab1.html",
      "/mia/indonesia/archive/lenin/1902/ApaYang/Bab2.html",
      "/mia/indonesia/archive/lenin/1902/ApaYang/Bab3.html",
      "/mia/indonesia/archive/lenin/1902/ApaYang/Bab4.html",
      "/mia/indonesia/archive/lenin/1902/ApaYang/Bab5.html",
      "/mia/indonesia/archive/lenin/1902/ApaYang/Kesimpulan.html",
      "/mia/indonesia/archive/lenin/1902/ApaYang/Tambahan.html",
      "/mia/indonesia/archive/lenin/1902/ApaYang/Koreksi.html"
    ],
    "contextBasis": [
      "/mia/indonesia/archive/lenin/1902/ApaYang/KataPengantar.html"
    ],
    "summaryStatus": "missing"
  },
  "agitasi-politik-dan-sudut-pandang-kelas": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/lenin/1902/AgitasiPolitik.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "sebuah-surat-untuk-seorang-kamerad-mengenai-tugas-tugas-organisasional-kita": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/lenin/1902/1902-TugasOrganisasional.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "kepada-kaum-miskin-desa": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/lenin/1903/KepadaKaumMiskin/Bab1.html",
      "/mia/indonesia/archive/lenin/1903/KepadaKaumMiskin/Bab2.html",
      "/mia/indonesia/archive/lenin/1903/KepadaKaumMiskin/Bab3.html",
      "/mia/indonesia/archive/lenin/1903/KepadaKaumMiskin/Bab4.html",
      "/mia/indonesia/archive/lenin/1903/KepadaKaumMiskin/Bab5.html",
      "/mia/indonesia/archive/lenin/1903/KepadaKaumMiskin/Bab6.html",
      "/mia/indonesia/archive/lenin/1903/KepadaKaumMiskin/Bab7.html",
      "/mia/indonesia/archive/lenin/1903/KepadaKaumMiskin/Program.html",
      "/mia/indonesia/archive/lenin/1903/KepadaKaumMiskin/Keterangan.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "tugas-tugas-demokratik-kaum-proletariat-revolusioner": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/lenin/1905/TugasDemokratik.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "sosialisme-borjuis-kecil-dan-sosialisme-proletar": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/lenin/1905/Sosialisme.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "sosialisme-dan-kaum-tani": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/lenin/1905/SosialismeDanKaumTani.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "sosialisme-dan-agama": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/lenin/1905/SosialismeDanAgama.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "kebebasan-mengkritik-dan-kesatuan-tindakan": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/lenin/1906/Kebebasan.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "pelajaran-dari-pemberontakan-moskow": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/lenin/1906/Pelajaran.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "perang-gerilya": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/lenin/1906/Perang.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "viii-kongres-telah-menyimpulkan": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/lenin/1906/Kongres.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "kekuatan-dan-kelemahan-revolusi-rusia": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/lenin/1907/Kekuatan.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "marxisme-dan-revisionisme": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/lenin/1908/marx-rev.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "tentang-penilaian-revolusi-rusia": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/lenin/1908/Penilaian.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "sikap-partai-buruh-terhadap-agama": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/lenin/19090513-lenin-sikappartaiburuhterhadapagama.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "pelajaran-dari-revolusi": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/lenin/1910/Pelajaran.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "kampanye-pemilihan-untuk-duma-keempat-dan-tugas-tugas-kaum-sosial-demokrat-revolusioner": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/lenin/1912/Kampanye.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "kenaikan-revolusioner": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/lenin/1912/Kenaikan.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "situasi-di-dalam-pbsdr-dan-tugas-tugas-segera-partai": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/lenin/1912/Situasi.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "tiga-sumber-dan-tiga-komponen-marxisme": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/lenin/1913/tigasumb.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "takdir-historis-bagi-doktrin-karl-marx": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/lenin/1913/Takdir.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "hari-jadi-pravda": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/lenin/1913/1913-HariJadiPravda.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "di-ambang-batas": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/lenin/19151120-lenin-diambangbatas.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "revolusi-sosialis-dan-hak-sebuah-bangsa-untuk-menentukan-nasib-sendiri": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/lenin/1916/1916-hakpenentuannasibsendiri.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "imperialisme-sebagai-tahapan-khusus-kapitalisme": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/lenin/1916/1916-tahapankhusus.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "tugas-kaum-proletar-dalam-revolusi-sekarang-ini-tesis-april": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/lenin/19170407-lenin-tesisapril.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "kekuasaan-rangkap": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/lenin/1917/KekuasaanRangkap.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "suatu-pemerintah-revolusioner-yang-kuat": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/lenin/1917/SuatuPemerintah.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "apakah-kekuasaan-rangkap-telah-lenyap": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/lenin/1917/ApakahKekuasaan.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "sifat-merugikan-omong-kosong": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/lenin/1917/Sifat.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "bolshevisme-dan-demoralisasi-tentara": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/lenin/1917/Demoralisasi.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "keruntuhan-ekonomi-dan-perjuangan-proletariat-melawannya": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/lenin/1917/Keruntuhan.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "titik-balik": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/lenin/1917/TitikBalik.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "sumber-kelas-para-cavaignac-masa-ini-dan-masa-yang-akan-datang": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/lenin/1917/SumberKelas.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "awal-bonapartisme": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/lenin/19170729-lenin-awalbonapartisme.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "negara-dan-revolusi": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/lenin/19170901-lenin-negaradanrevolusi/bab1.html",
      "/mia/indonesia/archive/lenin/19170901-lenin-negaradanrevolusi/bab2.html",
      "/mia/indonesia/archive/lenin/19170901-lenin-negaradanrevolusi/bab3.html",
      "/mia/indonesia/archive/lenin/19170901-lenin-negaradanrevolusi/bab4.html",
      "/mia/indonesia/archive/lenin/19170901-lenin-negaradanrevolusi/bab5.html",
      "/mia/indonesia/archive/lenin/19170901-lenin-negaradanrevolusi/bab6.html",
      "/mia/indonesia/archive/lenin/19170901-lenin-negaradanrevolusi/catatantambahan.html"
    ],
    "contextBasis": [
      "/mia/indonesia/archive/lenin/19170901-lenin-negaradanrevolusi/katapengantarindonesia.html",
      "/mia/indonesia/archive/lenin/19170901-lenin-negaradanrevolusi/katapengantar.html"
    ],
    "summaryStatus": "missing"
  },
  "surat-lenin-untuk-komite-pusat-pbsdr": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/lenin/19170830-lenin-kepadakppbsdr.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "tentang-kompromi": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/lenin/1917/Kompromi.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "marxisme-dan-pemberontakan": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/lenin/1917/Marxisme.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "draft-regulasi-atas-kontrol-buruh": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/lenin/1917/DraftKontrol.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "aliansi-antara-kelas-buruh-dan-petani-terhisap": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/lenin/1917/Aliansi.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "tesis-mengenai-majelis-konstituante": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/lenin/19171211-lenin-tesismk.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "revolusi-proletariat-dan-kautsky-si-pengkhianat": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/lenin/19181101-lenin-kautskypengkhianat/Bab1.html",
      "/mia/indonesia/archive/lenin/19181101-lenin-kautskypengkhianat/Bab2.html",
      "/mia/indonesia/archive/lenin/19181101-lenin-kautskypengkhianat/Bab3.html",
      "/mia/indonesia/archive/lenin/19181101-lenin-kautskypengkhianat/Bab4.html",
      "/mia/indonesia/archive/lenin/19181101-lenin-kautskypengkhianat/Bab5.html",
      "/mia/indonesia/archive/lenin/19181101-lenin-kautskypengkhianat/Bab6.html",
      "/mia/indonesia/archive/lenin/19181101-lenin-kautskypengkhianat/Bab7.html",
      "/mia/indonesia/archive/lenin/19181101-lenin-kautskypengkhianat/Bab8.html",
      "/mia/indonesia/archive/lenin/19181101-lenin-kautskypengkhianat/Bab9.html",
      "/mia/indonesia/archive/lenin/19181101-lenin-kautskypengkhianat/Bab10.html",
      "/mia/indonesia/archive/lenin/19181101-lenin-kautskypengkhianat/Bab11.html",
      "/mia/indonesia/archive/lenin/19181101-lenin-kautskypengkhianat/Bab12.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "pemilihan-majelis-konstituante-dan-kediktatoran-proletariat": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/lenin/19191216-lenin-pemilihanmk.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "kepada-para-pekerja-perempuan": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/lenin/1920/20-kpp.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "komunisme-sayap-kiri-penyakit-kekanak-kanakan": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/lenin/19200401-lenin-komunismesayapkiri/bab1.html",
      "/mia/indonesia/archive/lenin/19200401-lenin-komunismesayapkiri/bab2.html",
      "/mia/indonesia/archive/lenin/19200401-lenin-komunismesayapkiri/bab3.html",
      "/mia/indonesia/archive/lenin/19200401-lenin-komunismesayapkiri/bab4.html",
      "/mia/indonesia/archive/lenin/19200401-lenin-komunismesayapkiri/bab5.html",
      "/mia/indonesia/archive/lenin/19200401-lenin-komunismesayapkiri/bab6.html",
      "/mia/indonesia/archive/lenin/19200401-lenin-komunismesayapkiri/bab7.html",
      "/mia/indonesia/archive/lenin/19200401-lenin-komunismesayapkiri/bab8.html",
      "/mia/indonesia/archive/lenin/19200401-lenin-komunismesayapkiri/bab9.html",
      "/mia/indonesia/archive/lenin/19200401-lenin-komunismesayapkiri/bab10.html",
      "/mia/indonesia/archive/lenin/19200401-lenin-komunismesayapkiri/Lampiran.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "laporan-komisi-tentang-permasalahan-nasional-dan-kolonial": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/lenin/1920/Laporan.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "tugas-tugas-liga-pemuda": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/lenin/1920/TugasLigaPemuda.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "pendahuluan-sumbangan-untuk-kritik-terhadap-filsafat-hak-hegel": {
    "historicalContext": "Ditulis oleh Karl Marx pada awal 1844 dan diterbitkan dalam Deutsch-Französische Jahrbücher. Pada masa ini, Marx berada dalam transisi radikal menuju perumusan materialisme historis dan mulai melihat peran historis kelas pekerja.",
    "mainProblem": "Apa hubungan antara kritik terhadap agama dengan kebutuhan akan emansipasi radikal dan kritik terhadap situasi politik Jerman yang terbelakang?",
    "mainThesis": "Agama adalah kesadaran-dunia yang terbalik (candu rakyat) yang lahir dari penderitaan dan kondisi duniawi yang terbalik. Menghapuskan agama berarti menuntut perubahan pada kondisi-kondisi riil yang menyebabkan ilusi agama itu diperlukan; sehingga, kritik teologi harus bermutasi menjadi kritik politik yang bertujuan menghancurkan status quo secara praktis.",
    "contentSummary": "Tulisan ini secara kuat menegaskan bahwa manusia menciptakan agama, bukan sebaliknya. Agama bertindak sebagai pelipur lara ('jantung-hati sebuah dunia tanpa hati') atas penindasan yang riil. Marx berargumen bahwa mencopot topeng teologis hanyalah langkah awal; tugas utamanya adalah mencopot 'topeng keterasingan dalam bentuk-bentuk yang tak suci', yaitu politik dan hukum. Ia meluncurkan pengutukan keras terhadap situasi Jerman pada 1843 yang dinilainya berada di bawah level sejarah (sebuah anakronisme) karena tidak mengalami kemajuan revolusioner seperti negara modern lainnya. Oleh karena itu, kritik tidak boleh sekadar menjadi argumen akademis, melainkan sebuah 'senjata' (pisau bedah) yang gairahnya adalah kemarahan untuk menghancurkan kekejian rezim saat itu. (Catatan: Teks primer dalam arsip lokal terpotong secara prematur dan tidak memuat bab mengenai emansipasi proletar secara penuh).",
    "argumentStructure": [
      "Dimulai dengan premis bahwa manusialah yang menciptakan agama karena masyarakat yang memproduksinya adalah dunia yang terbalik.",
      "Kemudian menjabarkan peran fungsional agama sebagai protes terhadap kesengsaraan sekaligus sebagai candu rakyat yang mengilusionerkan realitas.",
      "Argumen beralih bahwa kritik surga harus menjelma menjadi kritik politik dan hukum (dunia nyata).",
      "Teks ditutup (dalam versi ekstraksi yang tersedia) dengan seruan perang/pengutukan tajam terhadap situasi Jerman yang terbelakang dan ketinggalan zaman dibanding sejarah negara-negara modern Eropa, di mana kritik kini harus berfungsi sebagai senjata fisik penghancur lawan."
    ],
    "significance": "Karya ini sangat terkenal karena penggalan kalimat 'Agama adalah candu rakyat'. Teks ini juga menandai pergeseran penting Marx dari sekadar filosof pemikir-kiri-Hegelian ke ranah praksis revolusioner, mengaitkan penderitaan spiritual langsung dengan struktur penindasan politik.",
    "sourceBasis": [
      "/mia/indonesia/archive/marx-engels/1844/PendahuluanSumbangan.html"
    ],
    "contextBasis": [],
    "summaryStatus": "partial"
  },
  "keluarga-suci": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/marx-engels/1845/keluarga/Prakata.html",
      "/mia/indonesia/archive/marx-engels/1845/keluarga/Bab1.html",
      "/mia/indonesia/archive/marx-engels/1845/keluarga/Bab2.html",
      "/mia/indonesia/archive/marx-engels/1845/keluarga/Bab3.html",
      "/mia/indonesia/archive/marx-engels/1845/keluarga/Bab4.html",
      "/mia/indonesia/archive/marx-engels/1845/keluarga/Bab5.html",
      "/mia/indonesia/archive/marx-engels/1845/keluarga/Bab6.html",
      "/mia/indonesia/archive/marx-engels/1845/keluarga/Bab7.html",
      "/mia/indonesia/archive/marx-engels/1845/keluarga/Bab8.html",
      "/mia/indonesia/archive/marx-engels/1845/keluarga/Bab9.html",
      "/mia/indonesia/archive/marx-engels/1845/keluarga/Catatan.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "tesis-tentang-feuerbach-versi-asli": {
    "historicalContext": "Ditulis oleh Karl Marx di Brussels pada musim semi (kemungkinan April) 1845. Ini merupakan catatan awal di mana Marx mulai melepaskan diri dari materialisme pasif Feuerbach dan merumuskan konsepsi materialisme barunya yang berfokus pada aktivitas praktis manusia.",
    "mainProblem": "Apa kelemahan mendasar dari materialisme sebelumnya (termasuk Feuerbach) dan idealisme dalam memahami hubungan manusia dengan dunia objektif?",
    "mainThesis": "Filsuf selama ini hanya menafsirkan dunia dengan berbagai cara; yang penting sekarang adalah mengubahnya (Tesis ke-11). Pemahaman yang benar tentang kenyataan harus berasal dari 'praksis' atau kegiatan revolusioner.",
    "contentSummary": "Karya ini terdiri dari 11 tesis pendek. Marx mengkritik materialisme lama (seperti milik Feuerbach) karena memandang dunia secara objektif tetapi mengabaikan aktivitas manusia (subjektif/praktis) di dalamnya. Sebaliknya, idealisme mengembangkan sisi aktif manusia tetapi hanya dalam alam pikiran, terlepas dari kenyataan material. Marx berargumen bahwa kebenaran pemikiran tidak bisa diputuskan oleh teori semata, melainkan harus dibuktikan melalui praktek. Ia menolak pandangan bahwa manusia murni produk dari lingkungannya, karena manusia itu sendirilah yang mengubah lingkungannya. Agama dan keterasingan ideologis lainnya hanya dapat diselesaikan dengan merevolusionerkan basis material masyarakat tersebut di dunia nyata.",
    "argumentStructure": [
      "Tesis 1-3: Kritik terhadap kebuntuan materialisme lama dan idealisme; penegasan pentingnya aktivitas manusia-inderawi (praksis) dalam mengubah lingkungan.",
      "Tesis 4-7: Kritik spesifik terhadap keterasingan agama Feuerbach. Agama tidak cukup dikritik secara teoritis, dasar material/sosial yang melahirkannya harus dihancurkan.",
      "Tesis 8-10: Penegasan bahwa kehidupan sosial pada dasarnya bersifat praktis. Materialisme lama hanya mengarah pada masyarakat borjuis.",
      "Tesis 11: Kesimpulan agitatif bahwa tugas filsafat bukan lagi sekadar interpretasi, melainkan transformasi revolusioner atas dunia."
    ],
    "significance": "Merupakan salah satu draf paling awal dari pendekatan Materialisme Historis. Teks ini menandai perpisahan Marx secara epistemologis dengan filsafat hegelaian Kiri dan materialisme feuerbachian klasik.",
    "sourceBasis": [
      "/mia/indonesia/archive/marx-engels/18450401-tesisfeuerbachversiasli.html"
    ],
    "contextBasis": [],
    "summaryStatus": "complete"
  },
  "tesis-tentang-feuerbach-versi-suntingan-engels": {
    "historicalContext": "Tesis ini ditulis oleh Karl Marx pada musim semi tahun 1845 di Brussels. Karena Marx tidak pernah mempublikasikannya semasa hidupnya, Friedrich Engels menyunting dan menerbitkannya pada tahun 1888 sebagai lampiran dalam 'Ludwig Feuerbach dan Akhir Filsafat Jerman Klasik'. Engels melakukan perubahan editorial agar catatan-catatan kasar Marx lebih dapat dipahami oleh pembaca umum.",
    "mainProblem": "Di mana letak kelemahan utama dari materialisme lama (termasuk materialisme Feuerbach) dalam memahami realitas, dan bagaimana filsafat baru harus mengatasi kelemahan tersebut?",
    "mainThesis": "Kelemahan materialisme sebelumnya adalah memahami realitas hanya sebagai objek kontemplasi, bukan sebagai aktivitas indrawi manusia (praktik). Maka, kebenaran pemikiran manusia harus dibuktikan melalui praktik yang merevolusionerkan dunia.",
    "contentSummary": "Marx mengkritik materialisme kontemplatif yang memisahkan manusia dari dunia sekitarnya dan menganggap esensi agama sekadar terlepas ke dalam 'esensi manusia' abstrak. Marx menegaskan bahwa esensi manusia sejatinya adalah himpunan relasi-relasi sosial, dan bahwa keadaan historis serta masyarakat adalah produk dari aktivitas manusia itu sendiri. Pembebasan sosial karenanya memerlukan revolusi praktis, di mana filsafat tidak lagi hanya bertugas menafsirkan dunia, melainkan mengubahnya.",
    "argumentStructure": [
      "Tesis 1: Mengkritik materialisme sebelumnya karena mengabaikan sisi aktif/subjektif dari keindrawian yang justru dikembangkan secara abstrak oleh idealisme.",
      "Tesis 2: Menegaskan bahwa perdebatan tentang kebenaran pemikiran adalah perkara praktik, bukan sekadar teori.",
      "Tesis 3-5: Menolak pandangan bahwa manusia murni produk keadaan pasif; mengkritik cara Feuerbach menyelesaikan keterasingan religius tanpa merevolusionerkan landasan sekulernya.",
      "Tesis 6-7: Mendefinisikan ulang esensi manusia bukan sebagai individu abstrak spesies, melainkan sebagai keseluruhan relasi sosial yang terbentuk secara historis.",
      "Tesis 8-10: Membedakan materialisme lama yang sudut pandangnya adalah 'masyarakat sipil' dengan materialisme baru yang sudut pandangnya adalah kemanusiaan yang bermasyarakat.",
      "Tesis 11: Menyatakan bahwa tugas utama filsuf bukan lagi sekadar menafsirkan, tetapi mengubah dunia."
    ],
    "significance": "Merupakan salah satu dokumen filosofis awal terpenting yang memformulasikan fondasi materialisme historis dengan meletakkan 'praktik' (praxis) sebagai kriteria kebenaran dan agen perubahan sejarah.",
    "sourceBasis": [
      "/mia/indonesia/archive/marx-engels/18450401-tesisfeuerbachversisuntinganengels.html"
    ],
    "contextBasis": [],
    "summaryStatus": "complete"
  },
  "surat-marx-pada-p-v-annenkov": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/marx-engels/1847/kemiskinan/Lampiran1.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "kemiskinan-filsafat": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/marx-engels/1847/kemiskinan/Prakata1.html",
      "/mia/indonesia/archive/marx-engels/1847/kemiskinan/Prakata2.html",
      "/mia/indonesia/archive/marx-engels/1847/kemiskinan/Prakata3.html",
      "/mia/indonesia/archive/marx-engels/1847/kemiskinan/Bab1Sub1.html",
      "/mia/indonesia/archive/marx-engels/1847/kemiskinan/Bab1Sub2.html",
      "/mia/indonesia/archive/marx-engels/1847/kemiskinan/Bab1Sub3.html",
      "/mia/indonesia/archive/marx-engels/1847/kemiskinan/Bab2Sub1.html",
      "/mia/indonesia/archive/marx-engels/1847/kemiskinan/Bab2Sub2.html",
      "/mia/indonesia/archive/marx-engels/1847/kemiskinan/Bab2Sub3.html",
      "/mia/indonesia/archive/marx-engels/1847/kemiskinan/Bab2Sub4.html",
      "/mia/indonesia/archive/marx-engels/1847/kemiskinan/Bab2Sub5.html",
      "/mia/indonesia/archive/marx-engels/1847/kemiskinan/Lampiran1.html",
      "/mia/indonesia/archive/marx-engels/1847/kemiskinan/Lampiran2.html",
      "/mia/indonesia/archive/marx-engels/1847/kemiskinan/Lampiran3.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "anggaran-dasar-liga-komunis": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/marx-engels/1847/anggaran-dasar-liga-komunis.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "kerja-upahan-dan-kapital": {
    "historicalContext": "Asalnya adalah rangkaian kuliah yang diberikan Marx kepada Asosiasi Pekerja Jerman di Brussels pada tahun 1847. Kemudian diterbitkan sebagai artikel berseri di Neue Rheinische Zeitung pada April 1849.",
    "mainProblem": "Bagaimana menjelaskan dasar ekonomi eksploitasi kapitalis dengan cara yang dapat dimengerti oleh pekerja harian yang tak terdidik secara akademis?",
    "mainThesis": "Kerja dan kapital adalah dua kekuatan yang saling bertentangan; kemakmuran kelas kapitalis selalu didasarkan pada dan diiringi oleh pemiskinan (secara relatif) kelas pekerja.",
    "contentSummary": "Teks ini menjelaskan mekanisme ekonomi paling dasar: apa itu upah dan bagaimana upah ditentukan. Marx memperlihatkan bahwa upah bukanlah 'bagian pekerja atas komoditas yang diproduksinya', melainkan biaya untuk mempertahankan keberadaan pekerja itu sendiri (reproduksi tenaga kerja). Kapital baru bisa menjadi kapital apabila ia memerintahkan kerja upahan. Oleh karenanya, kepentingan kapital dan kerja upahan secara diametral bertolak belakang. Meskipun terkadang peningkatan modal produktif meningkatkan upah buruh, pertumbuhan upah ini selalu tertinggal dibandingkan pertumbuhan profit kapitalis, sehingga mempelebar jurang ketimpangan sosial.",
    "argumentStructure": [
      "I: Pendahuluan dan Apa itu Upah? Bagaimana ia dihitung.",
      "II: Apa yang menentukan harga komoditas (termasuk tenaga kerja)?",
      "III: Bagaimana relasi sosial penciptaan modal beroperasi.",
      "IV-V: Pertentangan absolut antara kepentingan kapitalis dengan buruh, dan hukum penurunan harga akibat persaingan serta mesin."
    ],
    "significance": "Sebuah bacaan awal klasik yang ideal bagi kelas buruh untuk mengerti letak penindasan bukan pada mandor yang jahat, melainkan pada struktur hubungan ekonomi itu sendiri.",
    "sourceBasis": [
      "/mia/indonesia/archive/marx-engels/1847/kerja/Pengantar.html",
      "/mia/indonesia/archive/marx-engels/1847/kerja/Bab1.html",
      "/mia/indonesia/archive/marx-engels/1847/kerja/Bab2.html",
      "/mia/indonesia/archive/marx-engels/1847/kerja/Bab3.html",
      "/mia/indonesia/archive/marx-engels/1847/kerja/Bab4.html"
    ],
    "contextBasis": [],
    "summaryStatus": "complete"
  },
  "prinsip-prinsip-komunisme": {
    "historicalContext": "Ditulis oleh Friedrich Engels pada akhir 1847 sebagai rancangan program untuk Liga Komunis dalam bentuk katekismus (Tanya-Jawab). Teks ini kemudian menjadi fondasi draft awal sebelum Marx dan Engels menyusun Manifesto Partai Komunis.",
    "mainProblem": "Apa itu paham komunisme, bagaimana proletariat lahir secara historis, dan apa konsekuensi dari Revolusi Industri?",
    "mainThesis": "Komunisme adalah doktrin mengenai syarat-syarat pembebasan proletariat. Pembebasan ini hanya bisa dicapai melalui revolusi yang menghapus kepemilikan pribadi dan menggantinya dengan kontrol masyarakat atas kekuatan-kekuatan produksi.",
    "contentSummary": "Melalui format tanya-jawab yang sederhana, Engels mendefinisikan proletariat sebagai kelas yang hidup murni dari penjualan tenaga kerjanya dan tidak mengambil untung dari kapital apa pun. Ia melacak lahirnya proletariat melalui Revolusi Industri (mesin uap, mesin tenun) yang menghancurkan manufaktur kecil dan memusatkan properti di tangan kapitalis besar. Sistem ini, karena produksi massalnya yang tak terkendali, secara periodik menghasilkan krisis komersial yang menghancurkan masyarakat. Untuk keluar dari krisis ini, masyarakat harus dijalankan sesuai dengan rencana yang rasional, bebas dari kepemilikan swasta. Teks tersebut juga memuat draf tindakan transisional pasca-revolusi, pandangan tentang keluarga, bangsa, dan perbandingan komunis dengan faksi sosialis lainnya.",
    "argumentStructure": [
      "Pertanyaan 1-6: Definisi proletariat dan kondisi historis kemunculannya.",
      "Pertanyaan 7-10: Perbedaan proletar dengan budak, hamba sahaya (serf), dan pekerja gilda.",
      "Pertanyaan 11-13: Revolusi Industri dan kemunculan krisis kapitalis akibat overproduksi.",
      "Pertanyaan 14-24: Kebutuhan akan tatanan masyarakat baru, program revolusi, dampaknya terhadap negara, keluarga, dan kelas-kelas sosial lainnya."
    ],
    "significance": "Garis besar yang jernih dan mendasar mengenai prinsip-prinsip utama Marxisme. Sangat cocok bagi pembaca pemula yang baru ingin memahami terminologi dan konsep sejarah gerakan komunis.",
    "sourceBasis": [
      "/mia/indonesia/archive/marx-engels/1847/1847-PrinsipKomunisme.html"
    ],
    "contextBasis": [],
    "summaryStatus": "complete"
  },
  "mengenai-masalah-perdagangan-bebas": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/marx-engels/1848/free-trade.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "manifesto-partai-komunis": {
    "historicalContext": "Ditulis antara Desember 1847 dan Januari 1848, manifesto ini ditugaskan oleh Liga Komunis di London. Teks ini diterbitkan pertama kali pada Februari 1848, tepat sebelum pecahnya revolusi tahun 1848 di berbagai penjuru Eropa.",
    "mainProblem": "Bagaimana kelas pekerja (proletariat) dapat memahami sejarah penindasan kelas dan mengorganisir diri untuk menggulingkan kapitalisme?",
    "mainThesis": "Sejarah dari semua masyarakat yang ada hingga saat ini adalah sejarah perjuangan kelas, dan proletariat memiliki misi historis untuk merebut kekuasaan dan menghapus masyarakat berkelas.",
    "contentSummary": "Manifesto Komunis menyajikan sintesis kuat antara analisis sejarah, kritik ekonomi, dan program politik aksi. Bab pertama menelusuri bagaimana kaum borjuis secara historis progresif dalam menumbangkan feodalisme tetapi pada akhirnya menciptakan 'penggali kuburnya sendiri' yakni kelas proletar. Bab kedua membeberkan hubungan antara komunis dan kaum proletar secara umum, mempertahankan gagasan penghapusan hak milik pribadi borjuis. Bab ketiga adalah kritik tajam terhadap berbagai bentuk sosialisme reaksioner, konservatif, dan utopis yang ada pada masanya. Teks ditutup dengan deklarasi terbuka tentang dukungan komunis terhadap setiap gerakan revolusioner yang melawan tatanan sosial dan politik yang ada.",
    "argumentStructure": [
      "I. Borjuis dan Proletar: Analisis sejarah perkembangan kapitalisme dan penyederhanaan antagonisme kelas.",
      "II. Proletar dan Komunis: Penjelasan tentang tujuan komunis, penghapusan kepemilikan pribadi, dan program radikal (10 tuntutan).",
      "III. Literatur Sosialis dan Komunis: Kritik terhadap aliran sosialisme borjuis, reaksioner, dan utopis.",
      "IV. Pendirian Komunis: Taktik aliansi dengan oposisi dan seruan revolusi 'Kaum buruh sedunia, bersatulah!'"
    ],
    "significance": "Karya politik yang sangat berpengaruh dalam sejarah modern. Manifesto ini meletakkan landasan politik praktis dan teoritis pertama yang sistematis bagi gerakan komunis internasional.",
    "sourceBasis": [
      "/mia/indonesia/archive/marx-engels/18480221-manifestokomunis/manifestokomunis.html"
    ],
    "contextBasis": [
      "/mia/indonesia/archive/marx-engels/18480221-manifestokomunis/katapengantar2023.html",
      "/mia/indonesia/archive/marx-engels/18480221-manifestokomunis/150tahunmanifestokomunis.html",
      "/mia/indonesia/archive/marx-engels/18480221-manifestokomunis/katapengantar.html"
    ],
    "summaryStatus": "complete"
  },
  "perang-tani-di-jerman": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/marx-engels/1850/PerangTani/Pengantar1.html",
      "/mia/indonesia/archive/marx-engels/1850/PerangTani/Pengantar2.html",
      "/mia/indonesia/archive/marx-engels/1850/PerangTani/Bab1.html",
      "/mia/indonesia/archive/marx-engels/1850/PerangTani/Bab2.html",
      "/mia/indonesia/archive/marx-engels/1850/PerangTani/Bab3.html",
      "/mia/indonesia/archive/marx-engels/1850/PerangTani/Bab4.html",
      "/mia/indonesia/archive/marx-engels/1850/PerangTani/Bab5.html",
      "/mia/indonesia/archive/marx-engels/1850/PerangTani/Bab6.html",
      "/mia/indonesia/archive/marx-engels/1850/PerangTani/Bab7.html",
      "/mia/indonesia/archive/marx-engels/1850/PerangTani/Pasal.html"
    ],
    "contextBasis": [
      "/mia/indonesia/archive/marx-engels/1850/PerangTani/Komentar.html"
    ],
    "summaryStatus": "missing"
  },
  "brumaire-xviii-louis-bonaparte": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/marx-engels/1852/brumaire/PengantarMarx.html",
      "/mia/indonesia/archive/marx-engels/1852/brumaire/PengantarEngels.html",
      "/mia/indonesia/archive/marx-engels/1852/brumaire/Bab1.html",
      "/mia/indonesia/archive/marx-engels/1852/brumaire/Bab2.html",
      "/mia/indonesia/archive/marx-engels/1852/brumaire/Bab3.html",
      "/mia/indonesia/archive/marx-engels/1852/brumaire/Bab4.html",
      "/mia/indonesia/archive/marx-engels/1852/brumaire/Bab5.html",
      "/mia/indonesia/archive/marx-engels/1852/brumaire/Bab6.html",
      "/mia/indonesia/archive/marx-engels/1852/brumaire/Bab7.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "kata-pengantar-pada-sebuah-sumbangan-untuk-kritik-terhadap-ekonomi-politik": {
    "historicalContext": "Ditulis oleh Karl Marx pada Januari 1859 di London sebagai pendahuluan untuk karyanya yang menganalisis kapitalisme. Periode ini ditandai oleh studi intensif Marx terhadap ekonomi politik pasca-revolusi 1848 yang gagal.",
    "mainProblem": "Bagaimana cara kerja dasar (anatomi) masyarakat dan apa motor penggerak yang menyebabkan terjadinya revolusi sosial dan sejarah peralihan zaman?",
    "mainThesis": "Keseluruhan hubungan-hubungan produksi material (struktur ekonomi) adalah dasar nyata (fondasi) dari masyarakat, di mana hukum, politik, dan kesadaran sosial dibangun di atasnya (struktur atas). Eksistensi sosial manusialah yang menentukan kesadaran mereka, bukan sebaliknya.",
    "contentSummary": "Marx menjelaskan perjalanan intelektualnya dari kritik terhadap filsafat hukum Hegel menuju ekonomi politik. Ia memformulasikan dalil intinya: tahap perkembangan kekuatan-kekuatan produksi material niscaya akan bertentangan dengan hubungan-hubungan produksi yang ada (sistem hak milik). Ketika hubungan tersebut berubah menjadi belenggu-belenggu bagi kekuatan produktif, sampailah masa revolusi sosial yang pada akhirnya mengubah keseluruhan struktur atas. Marx menegaskan bahwa tidak ada tata sosial pernah lenyap sebelum seluruh kekuatan produktifnya habis berkembang, dan formasi borjuis adalah bentuk antagonistis terakhir dari tahap prehistoris masyarakat manusia.",
    "argumentStructure": [
      "Membuka dengan jejak rekam sejarah intelektualnya sendiri dari studi filsafat hukum di Paris hingga kajian ekonomi politik intensif di London.",
      "Kemudian merumuskan prinsip fondasional: hubungan-hubungan produksi membentuk struktur ekonomi riil (basis), dan dari situlah struktur atas lahir.",
      "Argumen beralih kepada teori revolusi sosial yang terpicu saat kekuatan-kekuatan produksi material berkontradiksi dengan hubungan hak milik yang mengekangnya.",
      "Teks ditutup dengan menyebutkan bahwa metode studi ilmiah ini membutuhkan penelitian tekun dan keberanian, dengan mengutip penyair Dante: 'Di sini semua sifat pengecut harus mati'."
    ],
    "significance": "Dokumen ini sering dianggap sebagai perumusan paling padat dan klasik dari konsepsi utama Marxis (Materialisme Historis), khususnya dalam menggunakan rumusan Struktur Ekonomi (basis) dan Struktur Atas (superstruktur).",
    "sourceBasis": [
      "/mia/indonesia/archive/marx-engels/1859/pengantar-kritik.html"
    ],
    "contextBasis": [],
    "summaryStatus": "complete"
  },
  "sebuah-sumbangan-pada-kritik-atas-ekonomi-politik-hal-61-64": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/marx-engels/1847/kemiskinan/Lampiran3.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "tentang-proudhon": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/marx-engels/1865/tentang-proudhon.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "upah-harga-dan-laba": {
    "historicalContext": "Berawal dari naskah pidato Marx di Dewan Umum Asosiasi Pekerja Internasional (Internasional Pertama) pada 20 dan 27 Juni 1865. Ditujukan untuk merespons pendapat John Weston yang berargumen bahwa serikat pekerja dan pemogokan tidak ada gunanya karena kenaikan upah hanya akan memicu kenaikan harga.",
    "mainProblem": "Apakah tuntutan kenaikan upah oleh serikat buruh berguna, dan bagaimana hubungan antara upah, harga barang, dan profit kapitalis?",
    "mainThesis": "Kenaikan umum tingkat upah tidak akan menaikkan harga-harga komoditas secara permanen, melainkan hanya akan menyebabkan penurunan tingkat profit secara umum. Oleh karena itu, perjuangan serikat buruh sangat valid dan perlu.",
    "contentSummary": "Marx dengan sabar membedah kesalahan logika Weston (dan ekonomi borjuis klasik pada umumnya). Ia menjelaskan dasar-dasar teori nilai-kerja: bahwa nilai sebuah komoditas ditentukan oleh waktu kerja rata-rata yang dibutuhkan masyarakat untuk memproduksinya. Harga hanyalah ekspresi moneter dari nilai. Kapitalis membeli 'tenaga kerja', bukan 'kerja'. Nilai dari tenaga kerja ini dibayar dalam bentuk upah, tetapi buruh memproduksi nilai jauh lebih banyak dari upahnya. Surplus inilah yang menjadi profit kapitalis. Jika buruh menuntut upah yang lebih tinggi, yang terjadi bukanlah barang menjadi lebih mahal (karena nilai komoditas tidak berubah), melainkan margin profit kapitalis yang terpangkas. Karenanya, buruh harus melawan penindasan upah, meski di sisi lain perjuangan akhir mereka haruslah penghapusan sistem kerja upahan itu sendiri.",
    "argumentStructure": [
      "I-V: Bantahan terhadap klaim Weston bahwa jumlah produksi nasional dan upah riil adalah tetap.",
      "VI-VII: Pengantar mengenai Nilai dan Kerja; menjelaskan bahwa nilai komoditas didasarkan pada waktu kerja.",
      "VIII-XI: Penjelasan tentang Tenaga Kerja, Produksi Nilai-Lebih, dan bagaimana Laba dihitung.",
      "XII-XIV: Hubungan terbalik antara Upah dan Laba, serta kesimpulan pentingnya perjuangan kelas melalui serikat buruh (Trade Unions)."
    ],
    "significance": "Teks pengantar yang sangat baik dan mudah dicerna sebelum membaca Kapital Jilid I. Menyajikan fondasi dasar bagaimana eksploitasi ekonomi beroperasi secara mekanis di tempat kerja.",
    "sourceBasis": [
      "/mia/indonesia/archive/marx-engels/1865/upah-harga-laba.html"
    ],
    "contextBasis": [],
    "summaryStatus": "complete"
  },
  "pdf-format": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/marx-engels/1865/UpahHargaLaba.pdf"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "surat-marx-pada-j-b-schweitzer": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/marx-engels/1847/kemiskinan/Lampiran2.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "kapital-i": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/marx-engels/1867/capital01.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "tentang-das-kapital-marx": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/marx-engels/1868/On-DKapital.pdf"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "penghapusan-hak-milik-tanah": {
    "historicalContext": "Ditulis oleh Karl Marx sebagai sebuah memorandum untuk Robert Applegarth pada 3 Desember 1869, yang dipersiapkan dalam rangka mendiskusikan persoalan hak milik tanah dalam gerakan buruh internasional (Internasional Pertama).",
    "mainProblem": "Mengapa hak pemilikan pribadi atas tanah harus dihapuskan, dan bagaimana pertanian harus diorganisir setelah nasionalisasi tanah?",
    "mainThesis": "Hak kepemilikan pribadi atas tanah pada dasarnya adalah hasil dari penaklukan dan kekerasan. Perkembangan ekonomi, pertumbuhan populasi, dan keharusan penerapan ilmu pengetahuan alam dalam pertanian menjadikan nasionalisasi tanah sebagai suatu keharusan sosial demi meningkatkan produksi dan menghapus eksploitasi kelas.",
    "contentSummary": "Marx menolak argumen yang menggunakan 'hak alamiah' untuk membela kepemilikan tanah partikelir, karena sejarah membuktikan hak itu direbut dengan kekerasan. Ia membedakan kasus Perancis, di mana tanah dipecah-pecah ke petani kecil yang akhirnya menjadi musuh kemajuan sosial dan terhisap utang, dengan kebutuhan produksi massal modern. Marx berpendapat bahwa tanah tidak boleh sekadar dibagikan ke petani kecil atau asosiasi pedesaan, karena itu akan menciptakan sentralisasi keuntungan pada satu kelas. Tanah harus dinasionalisasi demi kepentingan seluruh bangsa (masyarakat terpusat), sehingga produksi pertanian dapat diselenggarakan secara rasional oleh asosiasi kaum 'produser' yang bebas dan sederajat.",
    "argumentStructure": [
      "Membuka dengan sanggahan bahwa kepemilikan privat adalah hak alamiah, melainkan hasil perebutan (penaklukan) paksa dalam sejarah.",
      "Kemudian membahas mengapa pertanian masa kini membutuhkan sentralisasi dan permesinan secara skala besar yang mustahil dipenuhi oleh petani-petani berbidang kecil.",
      "Mengambil contoh Perancis di mana pembagian bidang tanah ke kaum tani justru menciptakan kebodohan, beban pajak, dan memusuhi gerakan pekerja industrial.",
      "Teks ditutup dengan kesimpulan polemis terhadap usulan Kongres Brussel 1868: tanah harus dinasionalisasi secara penuh untuk melenyapkan perbedaan kelas, bukan sekadar dipindahtangankan ke asosiasi pekerja pedesaan."
    ],
    "significance": "Memperjelas sikap ekonomi-politik Marx yang menentang redistribusi tanah ke kepemilikan kecil-kecilan (petani gurem) sebagai solusi sosialis, dan sebaliknya menuntut sentralisasi dan budidaya pertanian secara besar-besaran oleh negara atau masyarakat.",
    "sourceBasis": [
      "/mia/indonesia/archive/marx-engels/1869/PenghapusanHak.html"
    ],
    "contextBasis": [],
    "summaryStatus": "complete"
  },
  "masalah-perumahan": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/marx-engels/1872/MasalahPerumahan.pdf"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "surat-kepada-cuno-theodor-24-januari-1872": {
    "historicalContext": "Surat polemis ini dikirimkan Engels kepada Theodor Cuno, seorang insinyur dan sosialis Jerman di Milan, Italia, pasca kekalahan Komune Paris. Surat ini merespon intrik dan pengorganisasian faksi anarkis yang dipimpin Mikhail Bakunin di dalam Asosiasi Pekerja Internasional (Internasionale Pertama).",
    "mainProblem": "Bagaimana cara membongkar dan melawan konsepsi teoritis serta model organisasi anarkis Bakunin, yang menganggap negara sebagai akar segala kejahatan dan menolak segala bentuk aksi politik atau otoritas?",
    "mainThesis": "Engels mengkritik Bakunin dengan membalikkan premis utamanya: bukan negara yang menciptakan kapitalisme, melainkan kapitalisme dan pembagian kelaslah yang memerlukan negara. Oleh karena itu, kaum pekerja mutlak harus melakukan aksi politik untuk merebut kekuasaan, menggunakan otoritas untuk menghapuskan kapital, yang mana setelahnya negara akan memudar dengan sendirinya.",
    "contentSummary": "Engels mengkarakterisasi teori Bakunin sebagai campuran antara anarkisme Proudhon dan komunisme, menuduh Bakunin melihat negara—bukan kapital dan eksploitasi kerja-upahan—sebagai kejahatan utama. Engels membantah gagasan abstensionisme politik (menolak pemilihan umum dan politik praktis), dengan menyatakan bahwa massa pekerja pada dasarnya berwatak politis dan meminta mereka menjauhi politik sama saja dengan menyerahkan mereka ke pelukan partai borjuis. Lebih jauh, Engels menyerang konsep kebebasan tanpa otoritas milik Bakunin, dengan menekankan bahwa masyarakat (seperti pabrik, kapal laut, atau rel kereta) secara material memerlukan otoritas dan keputusan mayoritas untuk beroperasi. Ia menutup dengan menyindir bahwa seruan penghapusan organisasi otoritatif di dalam Internasionale justru akan menghancurkan gerakan pekerja itu sendiri.",
    "argumentStructure": [
      "Menyajikan gambaran doktrin Bakunin, khususnya premis bahwa negara adalah akar eksploitasi yang harus dilikuidasi tanpa repot-repot terlibat dalam politik.",
      "Menyajikan posisi materialis historis (Marxis): penghapusan kapital adalah prasyarat, dan revolusi sosial membutuhkan aksi politik. Negara baru akan musnah setelah penghapusan relasi modal.",
      "Mengkritik abstensionisme politik Bakunin dengan memperingatkan bahwa hal tersebut akan mengalienasi massa buruh.",
      "Mendemonstrasikan kontradiksi praktis di balik penolakan mutlak terhadap otoritas, dengan menggunakan contoh kerja dalam industri modern (pabrik dan kapal laut) yang niscaya membutuhkan kepemimpinan."
    ],
    "significance": "Surat ini merangkum inti perpecahan sejarah antara faksi Marxis dan anarkis (Bakunis) di dalam Internasionale Pertama mengenai peran negara, aksi politik, sentralisasi, dan otoritas.",
    "sourceBasis": [
      "/mia/indonesia/archive/marx-engels/1872/surat24jan1872.html"
    ],
    "contextBasis": [],
    "summaryStatus": "complete"
  },
  "tentang-kongres-den-haag": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/marx-engels/1872/KongresDenHaag.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "mengenai-otoritas": {
    "historicalContext": "Ditulis oleh Friedrich Engels pada tahun 1873 sebagai tanggapan polemik terhadap kaum anti-otoritas (anarkis) di dalam gerakan kelas pekerja Eropa pada saat itu.",
    "mainProblem": "Apakah otoritas dapat dan harus dihapuskan sepenuhnya dalam produksi industri modern dan dalam revolusi sosial kelas pekerja?",
    "mainThesis": "Otoritas adalah suatu keniscayaan yang lahir dari kondisi material produksi industri skala besar dan kerja kolektif. Menghapuskan otoritas secara mutlak tidak mungkin dilakukan tanpa menghancurkan industri itu sendiri, dan sebuah revolusi adalah tindakan yang paling otoriter secara inheren.",
    "contentSummary": "Engels membantah gagasan anti-otoritas dengan menggunakan contoh pabrik pemintal kapas, rel kereta api, dan kapal laut. Ia menjelaskan bahwa produksi massal modern membutuhkan aksi gabungan dan ketundukan individual pada keputusan atau jadwal yang dipusatkan (despotisme mesin). Selanjutnya, ia mengkritik tuntutan anarkis untuk menghapuskan negara politik dalam satu malam. Engels menegaskan bahwa revolusi itu sendiri adalah proses pemaksaan kehendak (dengan senjata) oleh satu bagian populasi atas bagian lainnya, sehingga kelas pekerja membutuhkan otoritas untuk menundukkan perlawanan kaum reaksioner.",
    "argumentStructure": [
      "Engels membuka dengan mendefinisikan otoritas sebagai subordinasi pada kehendak pihak lain, lalu menyoroti bagaimana industri dan pertanian modern mensyaratkan aksi gabungan massal.",
      "Kemudian membahas contoh operasional pabrik, rel kereta, dan kapal layar laut yang mutlak mensyaratkan sebuah otoritas agar tidak terjadi kekacauan dan kecelakaan.",
      "Argumen beralih kepada kritik atas permainan kata anarkis yang mengganti istilah 'otoritas' menjadi sekadar 'tugas delegasi'.",
      "Teks ditutup dengan pernyataan bahwa revolusi bersenjata (seperti Komune Paris) secara alamiah bersifat otoriter, dan menuntut penghapusan otoritas seketika adalah sebuah pengkhianatan atau kebingungan terhadap gerakan proletariat."
    ],
    "significance": "Karya polemik ini menjadi teks rujukan utama dalam membedakan teori Marxis tentang pentingnya kepemimpinan politik dan alat negara pasca-revolusi dengan teori anarkisme yang menolak segala bentuk otoritas.",
    "sourceBasis": [
      "/mia/indonesia/archive/marx-engels/1873/1873-MengenaiOtoritas.html"
    ],
    "contextBasis": [],
    "summaryStatus": "complete"
  },
  "ketidakacuhan-politik": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/marx-engels/18730101-marx-ketidakacuhanpolitik.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "peranan-yang-dimainkan-kerja-dalam-peralihan-dari-kera-ke-manusia": {
    "historicalContext": "Ditulis oleh Friedrich Engels pada tahun 1876 sebagai bagian dari karya yang direncanakan lebih besar, naskah ini tidak pernah diselesaikan dan baru diterbitkan pada tahun 1896 (setelah kematian Engels). Naskah ini merupakan penerapan awal dari materialisme dialektis pada pertanyaan-pertanyaan antropologi evolusioner dan biologi manusia pasca-Darwin. Local source ini merupakan keseluruhan naskah yang sempat ditulis (berakhir mid-sentence).",
    "mainProblem": "Bagaimana Engels menjelaskan peralihan dari nenek moyang mirip kera menuju manusia, dan apa peran kerja dalam proses peralihan tersebut?",
    "mainThesis": "Engels menempatkan kerja sebagai faktor utama pembentukan manusia—berawal dari sikap berjalan tegak yang membebaskan tangan, kemudian memicu perkembangan alat, laring (bahasa), kapasitas otak, dan kerja sama sosial, sehingga mengubah sekadar pemanfaatan alam menjadi dominasi aktif manusia atas alam.",
    "contentSummary": "Engels mengajukan tesis bahwa 'kerja itu sendiri yang menciptakan manusia.' Meninjau dari teori Darwin, Engels mendalilkan bahwa ketika leluhur kera turun dari pohon, mereka mulai berjalan tegak, membebaskan tangan dari fungsi penggerak tubuh. Evolusi biomekanik pada tangan memungkinkan nenek moyang manusia merakit alat. Pembuatan alat menuntut interaksi kolektif dan kerja sama sosial tingkat tinggi, yang melahirkan kebutuhan untuk berkomunikasi, sehingga memicu perkembangan organ laring (bahasa) dan otak (pemikiran abstrak). Tidak seperti hewan yang hanya memanfaatkan alam sekitarnya, manusia menguasai alam melalui kerja dan produksi. Namun, naskah yang belum rampung ini mengingatkan bahwa upaya manusia menguasai alam dan mengejar laba seketika dapat membawa akibat-akibat alamiah maupun sosial tak langsung yang lebih jauh dan bertolak belakang dengan tujuannya (seperti contoh deforestasi yang menyapu bersih lapisan atas tanah). Naskah ini terputus di tengah kalimat saat Engels tengah merangkum kontradiksi kepemilikan privat atas hasil kerja.",
    "argumentStructure": [
      "Menggagas bahwa kerja bukan sekadar aktivitas, melainkan pencipta eksistensi manusia.",
      "Menelusuri postur tegak sebagai langkah evolusioner pertama yang membebaskan tangan.",
      "Menjelaskan kaitan evolusioner antara pergerakan tangan, produksi alat, nutrisi hewani, serta membesarnya kapasitas otak dan artikulasi ujaran.",
      "Membedakan antara hewan (yang memanfaatkan lingkungan sekitarnya) dan manusia (yang mengubah lingkungan dan menguasai alam melalui kerja produktif).",
      "Membahas akibat-akibat alamiah dan sosial yang tak langsung dari tindakan manusia terhadap alam dan produksi ekonomi, sebelum manuskrip berakhir menggantung secara tiba-tiba di tengah kalimat."
    ],
    "significance": "Esai ini penting sebagai upaya Engels menghubungkan kerja, pembuatan alat, bahasa, kehidupan sosial, dan perubahan hubungan manusia dengan alam dalam suatu penjelasan material mengenai perkembangan manusia. Klaim biologisnya tetap perlu dibaca dalam konteks ilmu pengetahuan abad ke-19.",
    "sourceBasis": [
      "/mia/indonesia/archive/marx-engels/1876/apetoman.html"
    ],
    "contextBasis": [],
    "summaryStatus": "complete"
  },
  "anti-duhring": {
    "historicalContext": "Ditulis oleh Engels antara 1876 dan 1878 untuk melawan pengaruh teoretis Eugen Dühring yang sedang naik daun di Partai Sosial Demokrat Jerman (SPD). Marx dan Engels merasa perlu menjaga kejernihan ideologi partai.",
    "mainProblem": "Bagaimana mengcounter pandangan positivis borjuis kecil Dühring yang mengancam akan membingungkan program politik dan fondasi teoritis gerakan pekerja Jerman?",
    "mainThesis": "Marxisme adalah konsepsi dunia yang menyeluruh dan koheren (Materialisme Dialektis) yang membedah dan memberi jawaban yang lebih saintifik terhadap persoalan filsafat, ekonomi politik, maupun sosialisme dibandingkan dengan eklektisisme superfisial milik Dühring.",
    "contentSummary": "Karena Dühring menciptakan seluruh 'sistem' ilmu yang baru, Engels terpaksa mengikutinya melintasi berbagai subjek—mulai dari ruang dan waktu, mekanika, ilmu fisika, kimia, moral, hukum, hingga ekonomi dan sejarah. Secara tidak langsung, ini mendorong Engels untuk pertama kalinya memaparkan 'pandangan dunia' (worldview) Marxisme secara komprehensif. Pada bagian Filsafat, ia menjelaskan bahwa dialektika berlaku di alam semesta. Pada bagian Ekonomi Politik, ia (dengan bantuan bab yang ditulis Marx) membela Teori Nilai-Kerja. Dan pada bagian Sosialisme, ia menjelaskan transisi dari utopia ke sains.",
    "argumentStructure": [
      "Pendahuluan: Sejarah pembentukan sosialisme dan metode materialis.",
      "Bagian I: Filsafat. Membahas ontologi, apriori, waktu, ruang, moral, hukum, dan hukum dialektika.",
      "Bagian II: Ekonomi Politik. Menjelaskan nilai, kapital, bunga, nilai-lebih, dan mengoreksi pembacaan Dühring terhadap Marx.",
      "Bagian III: Sosialisme. Menganalisis sejarah produksi, kapitalisme, dan tugas negara yang akan 'melenyap' (withering away)."
    ],
    "significance": "Buku ini sering dianggap sebagai paparan komprehensif pertama dari Marxisme.",
    "sourceBasis": [
      "/mia/indonesia/archive/marx-engels/1877/anti-duhring.pdf"
    ],
    "contextBasis": [],
    "summaryStatus": "complete"
  },
  "kata-pengantar-lama-pada-anti-d-hring-tentang-dialektika": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/marx-engels/1878/tentang-dialektika.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "surat-marx-dan-engels-kepada-bebel-liebknecht-bracke-dan-lainnya-surat-edaran": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/marx-engels/1879/79_09_18.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "sosialisme-utopis-dan-sosialisme-ilmiah": {
    "historicalContext": "Teks ini aslinya adalah gabungan dari tiga bab dari buku besar Engels, 'Anti-Dühring' (1878), yang diadaptasi pada tahun 1880 atas permintaan Paul Lafargue agar menjadi pamflet pengenalan bagi buruh di Prancis.",
    "mainProblem": "Apa letak perbedaan mendasar antara gagasan sosialis awal yang bersifat moralistis dan idealis, dengan pandangan sosialis baru yang dirumuskan oleh Marx?",
    "mainThesis": "Sosialisme bukan sekadar ide brilian tentang keadilan moral, melainkan hasil niscaya dari kontradiksi material antara kekuatan produksi yang membesar (sosial) dengan hubungan apropriasi kapitalis yang bersifat privat.",
    "contentSummary": "Engels menguraikan bahwa para sosialis awal (Saint-Simon, Fourier, Owen) gagal karena mereka hanya membangun sistem rasional di dalam pikiran mereka tanpa basis empiris sejarah ekonomi yang matang; mereka merancang utopia di saat kapitalisme belum berkembang penuh. Selanjutnya, Engels membahas dialektika (meminjam dan menjungkirbalikkan Hegel) yang memandang dunia sebagai proses dinamis, bukan hal-hal statis. Terakhir, Engels mensintesis pandangan ini ke dalam Materialisme Historis. Ia menunjukkan bahwa kapitalisme mengubah produksi menjadi kegiatan sosial secara massal, tetapi hasil produksinya dirampas oleh pemilik modal privat. Kontradiksi ini menciptakan krisis periodik dan kelas proletar, yang mana tugas historisnya adalah merebut mesin negara dan mengubah properti alat produksi menjadi properti publik.",
    "argumentStructure": [
      "Bagian 1 (Sosialisme Utopis): Analisis sejarah mengenai keterbatasan teori-teori rasional dan utopis abad pencerahan hingga sosialis Prancis/Inggris awal.",
      "Bagian 2 (Dialektika): Kritik terhadap metafisika yang kaku, serta penjelasan mengenai dialektika materialis sebagai pisau analisis revolusioner.",
      "Bagian 3 (Materialisme Historis): Aplikasi metode dialektik untuk membedah kontradiksi kapitalisme dan peran historis proletariat untuk mengakhiri masyarakat kelas."
    ],
    "significance": "Pamflet Marxis yang secara luas dibaca dan diterjemahkan pada akhir abad ke-19. Karya ini adalah pengantar standar mengenai bagaimana Marxisme memandang sejarah dan ekonomi secara rasional dan ilmiah.",
    "sourceBasis": [
      "/mia/indonesia/archive/marx-engels/18800420-sosialismeutopis/bagian1.html",
      "/mia/indonesia/archive/marx-engels/18800420-sosialismeutopis/bagian2.html",
      "/mia/indonesia/archive/marx-engels/18800420-sosialismeutopis/bagian3.html"
    ],
    "contextBasis": [
      "/mia/indonesia/archive/marx-engels/18800420-sosialismeutopis/18910512-pengantaredisikeempat.html",
      "/mia/indonesia/archive/marx-engels/18800420-sosialismeutopis/18920420-pengantaredisiinggris.html"
    ],
    "summaryStatus": "complete"
  },
  "upah-sehari-yang-layak-bagi-kerja-sehari-yang-layak": {
    "historicalContext": "Artikel ini aslinya diterbitkan oleh Engels di surat kabar pekerja The Labour Standard di London pada tahun 1881. Engels menulis artikel-artikel ini untuk mendidik gerakan Serikat Buruh Inggris mengenai batasan-batasan tuntutan ekonomi mereka di bawah sistem upah.",
    "mainProblem": "Apakah semboyan serikat buruh tradisional Inggris 'Upah sehari yang layak bagi kerja sehari yang layak' masih relevan dan memadai sebagai tujuan akhir pergerakan kaum pekerja?",
    "mainThesis": "Slogan mengenai upah 'layak' telah kedaluwarsa secara ekonomi karena kelayakan dalam masyarakat kapitalis memihak pada kapital, di mana hasil kerja dari yang melakukan pekerjaan berakumulasi di tangan mereka yang tidak bekerja. Slogan tersebut harus digantikan dengan tuntutan baru: pemilikan atas alat-alat kerja oleh rakyat pekerja sendiri.",
    "contentSummary": "Engels menelaah makna kata 'layak' menurut hukum ekonomi politik kapitalis, bukan melalui sentimen moral. Ia menunjukkan bahwa upah yang layak bagi pekerja secara ekonomi hanyalah jumlah subsistensi minimum untuk mempertahankan hidup dan bereproduksi, yang ditukar dengan batas maksimal tenaga yang bisa diperas kapitalis dalam sehari tanpa membunuh si pekerja. Engels membuktikan bahwa pertukaran ini secara inheren tidak adil karena pekerja, di bawah ancaman kelaparan dan kompetisi dari pengangguran (barisan cadangan industri), dipaksa menjual tenaga kerjanya. Kapitalis membayar upah bukan dari sakunya sendiri, melainkan dari produk yang diciptakan oleh kerja itu sendiri. Karenanya, upah yang layak di bawah sistem upah selalu berujung pada akumulasi kekayaan pada kelas non-pekerja, dan karenanya kaum buruh harus menuntut pembubaran sistem upah itu sendiri.",
    "argumentStructure": [
      "Mempertanyakan definisi obyektif dari 'layak' di dalam semboyan 'Upah sehari yang layak'.",
      "Mendefinisikan nilai upah dan batas hari kerja berdasarkan hukum ekonomi politik klasik.",
      "Menunjukkan asimetri tawar-menawar antara kapitalis (yang punya modal) dan pekerja (yang ditekan ketakutan akan kelaparan dan pasukan cadangan pengangguran).",
      "Membongkar ilusi bahwa modal yang mempekerjakan buruh: buruhlah yang menghasilkan kekayaan, dan mereka dibayar dari hasil kerja mereka sendiri yang telah disita.",
      "Mengusulkan semboyan baru: Pemilikan atas alat-alat kerja (bahan mentah, pabrik, mesin) oleh rakyat pekerja sendiri."
    ],
    "significance": "Esai pendek ini merupakan upaya edukatif Engels untuk membongkar kelemahan semboyan serikat buruh tradisional Inggris, guna mengarahkan gerakan kelas pekerja menuju tuntutan pemilikan atas alat-alat kerja.",
    "sourceBasis": [
      "/mia/indonesia/archive/marx-engels/1881/kerja.html"
    ],
    "contextBasis": [],
    "summaryStatus": "complete"
  },
  "klas-klas-masyarakat-diperlukan-dan-berlebihan": {
    "historicalContext": "Esai ini merupakan kontribusi lain dari Friedrich Engels untuk majalah The Labour Standard pada tahun 1881, melanjutkan analisisnya tentang struktur masyarakat Inggris dan peran ekonomi dari kelas-kelas yang berkuasa.",
    "mainProblem": "Apakah kelas-kelas sosial, khususnya aristokrasi tanah dan kelas kapitalis, merupakan suatu kebutuhan yang mutlak diperlukan secara ekonomi untuk kelangsungan produksi modern?",
    "mainThesis": "Fungsi historis kelas-kelas berubah. Sementara kelas kapitalis menengah pernah sangat diperlukan untuk membangun dan mengatur industri besar, perkembangan perusahaan perseroan (saham) membuat para pemilik kapital tidak lagi terjun dalam manajemen, melainkan mendelegasikannya kepada pegawai-pegawai bayaran. Kaum kapitalis kini tereduksi menjadi penerima dividen dan penjudi bursa saham, menjadikannya gangguan yang berlebihan secara ekonomi.",
    "contentSummary": "Engels meneliti tiga kelas utama di Inggris abad ke-19: Aristokrasi Bertanah, Kapitalis (Menengah), dan Pekerja. Aristokrasi tanah digambarkan sebagai suatu gangguan nasional murni. Selanjutnya, ia menganalisis kapitalis yang pada masa lalu dibutuhkan untuk memimpin sistem manufaktur bertenaga uap. Namun, dengan munculnya perusahaan perseroan dan perkeretaapian raksasa, para pemilik kapital telah 'pensiun' dari manajemen dan mengalihdayakan fungsi pengelolaan bisnis kepada 'pegawai-pegawai bayaran'. Para kapitalis kini hanya mengantongi dividen dan berjudi di pasar bursa. Karena tidak lagi menjalankan fungsi 'pengawasan', mereka kehilangan dasar atas klaim 'upah supervisi'. Engels menyimpulkan bahwa klas kapitalis ini telah menjadi tidak mampu dan sekadar menjadi suatu gangguan tak terhingga bagi produksi.",
    "argumentStructure": [
      "Menilai fungsionalitas Aristokrasi Tanah, dan menyimpulkannya sebagai gangguan nasional.",
      "Mengakui bahwa kelas Kapitalis dahulunya diperlukan untuk menumbuhkan revolusi industri.",
      "Menganalisis pergeseran struktural: pembentukan perusahaan perseroan dan perluasan komunikasi bertenaga uap mendelegasikan kerja administratif ke pegawai bayaran (manajer).",
      "Mendeskripsikan transformasi kapitalis dari produsen menjadi rentenir dan penjudi pasar bursa yang berlebihan.",
      "Menyimpulkan bahwa kapitalisme kini menjadi penghalang, dan produksi raksasa dapat dipertahankan secara mandiri tanpa campur tangan kelas pemilik."
    ],
    "significance": "Esai ini memberikan pengamatan historis awal tentang pergeseran struktural kapitalisme dari pengelolaan pribadi menjadi kepemilikan perseroan saham, serta membedakan secara tajam antara kepemilikan kapitalis yang berdiam diri dan pekerjaan manajemen yang dijalankan oleh pegawai upahan.",
    "sourceBasis": [
      "/mia/indonesia/archive/marx-engels/1881/klas.html"
    ],
    "contextBasis": [],
    "summaryStatus": "complete"
  },
  "dialektika": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/marx-engels/1883/dialektika.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "marx-dan-neue-rheinische-zeitung-1848-49": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/marx-engels/1884/1884-MarxDanNeue.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "bag-1": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/marx-engels/1885/kapital2-bag1.pdf"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "bag-2": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/marx-engels/1885/kapital2-bag2.pdf"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "bag-3": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/marx-engels/1885/kapital2-bag3.pdf"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "feuerbach-dan-akhir-filsafat-klasik-jerman": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/marx-engels/1886/ludwig-feuerbach/pengantar.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "surat-engels-untuk-gerson-trier-di-copenhagen-18-desember-1889": {
    "historicalContext": "Surat (draft) dari Engels kepada Gerson Trier ini ditulis pada Desember 1889 di tengah perselisihan taktis dalam Partai Sosialis Denmark. Trier dan rekan-rekannya di sayap radikal baru saja dikeluarkan karena menolak pembentukan blok politik dengan partai radikal borjuis-kecil, Venstre. Engels memberikan pandangannya tentang kebijakan kolaborasi elektoral dan batas-batas kerjasama antar kelas.",
    "mainProblem": "Sejauh mana partai proletariat (sosialis) dapat berkolaborasi atau memberikan dukungan kepada partai-partai borjuis-kecil tanpa mengorbankan independensi dan karakter kelas dari pergerakannya?",
    "mainThesis": "Partai proletariat dapat dalam keadaan tertentu menggunakan atau mendukung partai-partai lain secara taktis untuk tujuan tertentu (seperti penghapusan sisa feodalisme atau kebebasan politik), selama keuntungan tersebut berdampak langsung bagi kaum pekerja dan tidak mengancam karakter kelas independen dari partai.",
    "contentSummary": "Engels menolak prinsip Gerson Trier yang antokolaborasi mutlak (menentang segala bentuk kerja sama dengan partai lain bagaimanapun sementaranya). Engels menjelaskan bahwa demi kemenangan akhir revolusi, partai pekerja kadang perlu memberikan dukungan sementara kepada partai borjuis kecil atau radikal untuk mencapai kemajuan historis atau kebebasan politik. Namun, ia memberikan peringatan keras: kolaborasi hanya diperbolehkan jika tidak mengancam kemandirian dan watak kelas proletariat dari partai pekerja, yang merupakan batas mutlak yang tidak boleh dilanggar. Jika sebuah partai radikal (seperti Venstre) bersikap pengecut dan mundur ketika ditekan (seperti oleh rezim Bismarck atau Estrup), maka kolaborasi dengan mereka menjadi tidak berguna dan patut ditentang.",
    "argumentStructure": [
      "Menolak pandangan apriori bahwa kolaborasi politik antar-partai selalu dilarang dalam segala kondisi.",
      "Menegaskan kembali tujuan akhir partai kelas pekerja, yaitu perebutan kekuasaan politik melalui revolusi yang mengharuskan eksistensi sebuah partai yang tegas berkesadaran kelas.",
      "Menjelaskan pengecualian taktis: partai pekerja dapat mendukung partai lain untuk target spesifik (seperti melawan sisa-sisa feodal atau UU Anti Sosialis).",
      "Menetapkan batas mutlak kolaborasi: karakter independen proletariat partai tidak boleh dikompromikan, dan taktik tersebut harus membuahkan hasil historis/keuntungan nyata, tidak sekadar bersekutu dengan politisi borjuis yang pengecut."
    ],
    "significance": "Surat ini memberikan penegasan penting mengenai taktik politik kelas pekerja yang membedakan antara dukungan taktis yang fleksibel demi kemajuan sosial dan kebebasan politik, dengan pentingnya menjaga kemandirian serta watak kelas dari partai proletariat.",
    "sourceBasis": [
      "/mia/indonesia/archive/marx-engels/1889/18-trier.html"
    ],
    "contextBasis": [],
    "summaryStatus": "complete"
  },
  "bab-1-20": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/marx-engels/1894/kapital3-bab1-20.pdf"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "bab-21-36": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/marx-engels/1894/kapital3-bab21-36.pdf"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "bab-37-43": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/marx-engels/1894/kapital3-bab37-43.pdf"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "bab-44-52": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/marx-engels/1894/kapital3-bab44-52.pdf"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "dengan-trotsky-hingga-akhir": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/trotsky/1940-DenganTrotsky.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "bagaimana-itu-terjadi": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/trotsky/1940-BagaimanaItuTerjadi.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "tentang-optimisme-dan-pesimisme": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/trotsky/19010101-trotsky-optimismedanpesimisme.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "kaum-proletar-dan-revolusi": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/trotsky/1904-KaumProletar.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "hasil-dan-prospek": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/trotsky/Hasil/Pengantar1.html",
      "/mia/indonesia/archive/trotsky/Hasil/Pengantar2.html",
      "/mia/indonesia/archive/trotsky/Hasil/Pengantar2a.html",
      "/mia/indonesia/archive/trotsky/Hasil/Pengantar3.html",
      "/mia/indonesia/archive/trotsky/Hasil/Pengantar4.html",
      "/mia/indonesia/archive/trotsky/Hasil/Bab1.html",
      "/mia/indonesia/archive/trotsky/Hasil/Bab2.html",
      "/mia/indonesia/archive/trotsky/Hasil/Bab3.html",
      "/mia/indonesia/archive/trotsky/Hasil/Bab4.html",
      "/mia/indonesia/archive/trotsky/Hasil/Bab5.html",
      "/mia/indonesia/archive/trotsky/Hasil/Bab6.html",
      "/mia/indonesia/archive/trotsky/Hasil/Bab7.html",
      "/mia/indonesia/archive/trotsky/Hasil/Bab8.html",
      "/mia/indonesia/archive/trotsky/Hasil/Bab9.html",
      "/mia/indonesia/archive/trotsky/Hasil/Bab10.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "kebangkrutan-terorisme-individual": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/trotsky/19090501-trotsky-kebangkrutanterorisme.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "kaum-intelektual-dan-sosialisme": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/trotsky/1910-Intelektual.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "mengapa-kaum-marxis-menentang-terorisme-individual": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/trotsky/19111101-trotsky-mengapamarxismenentangterorisme.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "pasifisme-sebagai-pelayan-imperialisme": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/trotsky/1917-Pasifisme.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "sandiwara-kekuasaan-ganda": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/trotsky/1917-SandiwaraKekuasaanGanda.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "dengan-darah-dan-besi": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/trotsky/1917-DenganDarahdanBesi.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "pernyataan-trotsky-mengenai-publikasi-perjanjian-perjanjian-rahasia": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/trotsky/1917-PerjanjianRahasia.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "nasionalisme-dalam-lenin": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/trotsky/1920-NasionalismeDalamLenin.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "pelajaran-komune-paris": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/trotsky/19210204-trotsky-pelajarankomuneparis.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "tugas-tugas-pendidikan-komunis": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/trotsky/1922-TugasPendidikanKomunis1.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "apakah-budaya-proletar-itu-dan-mungkinkah-ada": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/trotsky/1923-Apakah.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "akar-dan-fungsi-sosial-dunia-sastra": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/trotsky/1923-Akar.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "manusia-tidak-hidup-dari-politik-saja": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/trotsky/1923-TidakHidupDariPolitik.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "birokratisme-dan-kelompok-faksi": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/trotsky/1923-Birokratismedanfaksi.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "kebijakan-kaum-komunis-terhadap-seni": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/trotsky/1924-Kebijakan.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "pelajaran-revolusi-oktober": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/trotsky/19241001-trotsky-pelajaranoktober.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "kebudayaan-dan-sosialisme": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/trotsky/19260203-trotsky-kebudayaandansosialisme.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "revolusi-permanen": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/trotsky/Permanen/Pengantar1.html",
      "/mia/indonesia/archive/trotsky/Permanen/Pengantar2.html",
      "/mia/indonesia/archive/trotsky/Permanen/Bab1.html",
      "/mia/indonesia/archive/trotsky/Permanen/Bab2.html",
      "/mia/indonesia/archive/trotsky/Permanen/Bab3.html",
      "/mia/indonesia/archive/trotsky/Permanen/Bab4.html",
      "/mia/indonesia/archive/trotsky/Permanen/Bab5.html",
      "/mia/indonesia/archive/trotsky/Permanen/Bab6.html",
      "/mia/indonesia/archive/trotsky/Permanen/Bab7.html",
      "/mia/indonesia/archive/trotsky/Permanen/Bab8.html",
      "/mia/indonesia/archive/trotsky/Permanen/Bab9.html",
      "/mia/indonesia/archive/trotsky/Permanen/Bab10.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "sepucuk-surat-untuk-kaum-trotskis-amerika": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/trotsky/19290301-trotsky-sepucuksurattrotkisamerika.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "kehidupanku": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/trotsky/19300101-trotsky-kehidupanku/pengantar.html",
      "/mia/indonesia/archive/trotsky/19300101-trotsky-kehidupanku/bab1.html",
      "/mia/indonesia/archive/trotsky/19300101-trotsky-kehidupanku/bab2.html",
      "/mia/indonesia/archive/trotsky/19300101-trotsky-kehidupanku/bab3.html",
      "/mia/indonesia/archive/trotsky/19300101-trotsky-kehidupanku/bab4.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "problem-problem-revolusi-italia": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/trotsky/1930-Surat300514.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "masalah-persatuan-serikat-buruh": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/trotsky/1931-MasalahPersatuan.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "kontrol-buruh-dalam-produksi": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/trotsky/1931-KontrolBuruh.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "membela-revolusi-oktober": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/trotsky/19321127-trotsky-membelaoktober.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "oposisi-kiri-internasional-tugas-tugas-dan-metode-metodenya": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/trotsky/1932-TugasOposisi.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "kpd-atau-partai-baru-i": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/trotsky/1933-KPDPartaiBaruI.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "kpd-atau-partai-baru-ii": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/trotsky/1933-KPDPartaiBaruII.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "kpd-atau-partai-baru-iii": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/trotsky/1933-KPDPartaiBaruIII.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "kita-perlu-membangun-partai-partai-komunis-dan-internasional-baru": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/trotsky/1933-PartaiKomunisBaru.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "bonapartisme-dan-fasisme": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/trotsky/19340715-trotsky-bonapartismefasisme.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "beberapa-catatan-tentang-koran-revolution": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/trotsky/1934-BeberapaCatatanRevolusi.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "jika-amerika-menjalankan-komunisme": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/trotsky/1935-Jika.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "tentang-problem-problem-organisasional": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/trotsky/1935-TentangProblemOrganisasional.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "apakah-koran-massa-itu": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/trotsky/1935-ApakahKoranMassa.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "revolusi-yang-dikhianati": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/trotsky/khianat/Pengantar1.html",
      "/mia/indonesia/archive/trotsky/khianat/Biografi.html",
      "/mia/indonesia/archive/trotsky/khianat/Pengantar2.html",
      "/mia/indonesia/archive/trotsky/khianat/Pendahuluan.html",
      "/mia/indonesia/archive/trotsky/khianat/Bab1.html",
      "/mia/indonesia/archive/trotsky/khianat/Bab2.html",
      "/mia/indonesia/archive/trotsky/khianat/Bab3.html",
      "/mia/indonesia/archive/trotsky/khianat/Bab4.html",
      "/mia/indonesia/archive/trotsky/khianat/Bab5.html",
      "/mia/indonesia/archive/trotsky/khianat/Bab6.html",
      "/mia/indonesia/archive/trotsky/khianat/Bab7.html",
      "/mia/indonesia/archive/trotsky/khianat/Bab8.html",
      "/mia/indonesia/archive/trotsky/khianat/Bab9.html",
      "/mia/indonesia/archive/trotsky/khianat/Bab10.html",
      "/mia/indonesia/archive/trotsky/khianat/Bab11.html",
      "/mia/indonesia/archive/trotsky/khianat/Lampiran.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "stalinisme-dan-bolshevisme": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/trotsky/19370828-trotsky-stalinismedanbolshevisme.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "90-tahun-manifesto-komunis": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/trotsky/19371030-trotsky-90tahunmanifestokomunis.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "beberapa-patah-kata-tentang-lutte-ouvriere": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/trotsky/1937-LutteOuvriere.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "mengenai-sentralisme-demokratis": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/trotsky/19371208-trotsky-sentralismedemokratis.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "koran-pabrik-dan-jurnal-teoretis": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/trotsky/1938-KoranPabrik.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "hingar-bingar-kronstadt": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/trotsky/1938-Kronstadt.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "nasionalisasi-industri-dan-kontrol-buruh": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/trotsky/1938-Nasionalisasi.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "program-transisional": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/trotsky/19380501-trotsky-programtransisional.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "diskusi-dengan-trotsky-mengenai-program-transisional": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/trotsky/1938-Diskusi.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "sekali-lagi-mengenai-pemberontakan-kronstadt": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/trotsky/1938-Kronstadt2.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "semangat-pengorbanan-mengenai-keuangan": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/trotsky/1938-Surat380723.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "problem-problem-socialist-appeal": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/trotsky/1939-ProblemSocialistAppeal.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "abc-dialektika-materialis": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/trotsky/19391215-trotsky-ABCDialektikaMaterialis.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "mengenai-masalah-yahudi-saduran-dari-1937-1940": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/trotsky/1940-Yahudi.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "partai-kelas-dan-kepemimpinan": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/trotsky/19400101-trotsky-partaikelaskepemimpinan.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "fasisme-apa-itu-dan-bagaimana-melawannya": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/trotsky/1944-Fasisme.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "reformasi-atau-revolusi": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/luxemburg/reformasi-atau-revolusi.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "stagnasi-dan-kemajuan-marxisme": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/luxemburg/1903-Stagnasi.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "pemogokan-massa": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/luxemburg/pemogokan-massa.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "gagasan-may-day-bergerak-maju": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/luxemburg/1913-MayDay.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "parlemen-atau-soviet": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/malaka/Soviet/Pengantar.html",
      "/mia/indonesia/archive/malaka/Soviet/Pendahuluan.html",
      "/mia/indonesia/archive/malaka/Soviet/Bab1.html",
      "/mia/indonesia/archive/malaka/Soviet/Bab2.html",
      "/mia/indonesia/archive/malaka/Soviet/Bab3.html",
      "/mia/indonesia/archive/malaka/Soviet/Bab4.html",
      "/mia/indonesia/archive/malaka/Soviet/Bab5.html",
      "/mia/indonesia/archive/malaka/Soviet/Bab6.html",
      "/mia/indonesia/archive/malaka/Soviet/Bab7.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "si-semarang-dan-onderwijs": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/malaka/1921-SISemarang.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "komunisme-dan-pan-islamisme": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/malaka/1922-PanIslamisme.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "menuju-republik-indonesia-naar-de-republiek-indonesia": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/malaka/1925-Menuju.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "semangat-muda": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/malaka/1926-SemangatMuda.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "aksi-massa": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/malaka/AksiMassa/Bab1.html",
      "/mia/indonesia/archive/malaka/AksiMassa/Bab2.html",
      "/mia/indonesia/archive/malaka/AksiMassa/Bab3.html",
      "/mia/indonesia/archive/malaka/AksiMassa/Bab4.html",
      "/mia/indonesia/archive/malaka/AksiMassa/Bab5.html",
      "/mia/indonesia/archive/malaka/AksiMassa/Bab6.html",
      "/mia/indonesia/archive/malaka/AksiMassa/Bab7.html",
      "/mia/indonesia/archive/malaka/AksiMassa/Bab8.html",
      "/mia/indonesia/archive/malaka/AksiMassa/Bab9.html",
      "/mia/indonesia/archive/malaka/AksiMassa/Bab10.html",
      "/mia/indonesia/archive/malaka/AksiMassa/Bab11.html",
      "/mia/indonesia/archive/malaka/AksiMassa/Bab12.html",
      "/mia/indonesia/archive/malaka/AksiMassa/Program.html"
    ],
    "contextBasis": [
      "/mia/indonesia/archive/malaka/AksiMassa/KataPengantar.html"
    ],
    "summaryStatus": "missing"
  },
  "madilog": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/malaka/Madilog/Sejarah.html",
      "/mia/indonesia/archive/malaka/Madilog/Pendahuluan.html",
      "/mia/indonesia/archive/malaka/Madilog/Bab1.html",
      "/mia/indonesia/archive/malaka/Madilog/Bab2.html",
      "/mia/indonesia/archive/malaka/Madilog/Bab3.html",
      "/mia/indonesia/archive/malaka/Madilog/Bab4.html",
      "/mia/indonesia/archive/malaka/Madilog/Bab5.html",
      "/mia/indonesia/archive/malaka/Madilog/Bab6.html",
      "/mia/indonesia/archive/malaka/Madilog/Bab7.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "politik": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/malaka/1945-Politik.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "rencana-ekonomi-berjuang": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/malaka/1945-Rencana.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "muslihat": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/malaka/1945-Muslihat.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "manifesto-jakarta": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/malaka/1945-ManifestoJakarta.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "situasi-politik-luar-dan-dalam-negeri": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/malaka/1946-Situasi.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "thesis": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/malaka/1946-Thesis.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "kuhandel-di-kaliurang": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/malaka/1948-Kuhandel.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "getrennt-marschieren-vereint-schlagen-berpisah-kita-berjuang-bersama-kita-memukul": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/malaka/1948-Berjuang.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "gerpolek-gerilya-politik-ekonomi": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/malaka/1948-Gerpolek.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "pandangan-dan-langkah-partai-rakyat": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/malaka/1948-PandanganPartaiRakyat.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "uraian-mendadak": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/malaka/1948-Uraian.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "proklamasi-17-8-1945-isi-dan-pelaksanaannya": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/malaka/1948-Proklamasi.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "pandangan-hidup": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/malaka/1948-Pandangan.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "islam-dalam-tinjauan-madilog": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/malaka/1948-Islam.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "sambutan-murba": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/malaka/1948-SambutanMurba.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "hukum-revolusi": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/malaka/1948-HukumRevolusi.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "dari-ir-soekarno-sampai-ke-presiden-soekarno": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/malaka/1948-DariIrSoekarno.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "keterangan-ringkas-tentang-program-maksimum": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/malaka/1948-Keterangan.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "nasrani-yahudi-dalam-tinjauan-madilog": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/malaka/1948-Nasrani.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "arsip-tan-malaka-bahasa-inggris": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [],
    "contextBasis": [],
    "summaryStatus": "unavailable",
    "unavailableReason": "No extractable local primary source is available"
  },
  "manifesto-komunis": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/marx-engels/18480221-manifestokomunis/manifestokomunis.html"
    ],
    "contextBasis": [
      "/mia/indonesia/archive/marx-engels/18480221-manifestokomunis/katapengantar2023.html",
      "/mia/indonesia/archive/marx-engels/18480221-manifestokomunis/150tahunmanifestokomunis.html",
      "/mia/indonesia/archive/marx-engels/18480221-manifestokomunis/katapengantar.html"
    ],
    "summaryStatus": "missing"
  },
  "tesis-tentang-feuerbach": {
    "historicalContext": "Ditulis oleh Karl Marx di Brussels pada musim semi (kemungkinan April) 1845. Ini merupakan catatan awal di mana Marx mulai melepaskan diri dari materialisme pasif Feuerbach dan merumuskan konsepsi materialisme barunya yang berfokus pada aktivitas praktis manusia.",
    "mainProblem": "Apa kelemahan mendasar dari materialisme sebelumnya (termasuk Feuerbach) dan idealisme dalam memahami hubungan manusia dengan dunia objektif?",
    "mainThesis": "Filsuf selama ini hanya menafsirkan dunia dengan berbagai cara; yang penting sekarang adalah mengubahnya (Tesis ke-11). Pemahaman yang benar tentang kenyataan harus berasal dari 'praksis' atau kegiatan revolusioner.",
    "contentSummary": "Karya ini terdiri dari 11 tesis pendek. Marx mengkritik materialisme lama (seperti milik Feuerbach) karena memandang dunia secara objektif tetapi mengabaikan aktivitas manusia (subjektif/praktis) di dalamnya. Sebaliknya, idealisme mengembangkan sisi aktif manusia tetapi hanya dalam alam pikiran, terlepas dari kenyataan material. Marx berargumen bahwa kebenaran pemikiran tidak bisa diputuskan oleh teori semata, melainkan harus dibuktikan melalui praktek. Ia menolak pandangan bahwa manusia murni produk dari lingkungannya, karena manusia itu sendirilah yang mengubah lingkungannya. Agama dan keterasingan ideologis lainnya hanya dapat diselesaikan dengan merevolusionerkan basis material masyarakat tersebut di dunia nyata.",
    "argumentStructure": [
      "Tesis 1-3: Kritik terhadap kebuntuan materialisme lama dan idealisme; penegasan pentingnya aktivitas manusia-inderawi (praksis) dalam mengubah lingkungan.",
      "Tesis 4-7: Kritik spesifik terhadap keterasingan agama Feuerbach. Agama tidak cukup dikritik secara teoritis, dasar material/sosial yang melahirkannya harus dihancurkan.",
      "Tesis 8-10: Penegasan bahwa kehidupan sosial pada dasarnya bersifat praktis. Materialisme lama hanya mengarah pada masyarakat borjuis.",
      "Tesis 11: Kesimpulan agitatif bahwa tugas filsafat bukan lagi sekadar interpretasi, melainkan transformasi revolusioner atas dunia."
    ],
    "significance": "Merupakan salah satu draf paling awal dari pendekatan Materialisme Historis. Teks ini menandai perpisahan Marx secara epistemologis dengan filsafat hegelaian Kiri dan materialisme feuerbachian klasik.",
    "sourceBasis": [
      "/mia/indonesia/archive/marx-engels/18450401-tesisfeuerbachversiasli.html"
    ],
    "contextBasis": [],
    "summaryStatus": "complete"
  },
  "brumaire-xviii": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/marx-engels/1852/brumaire/PengantarMarx.html",
      "/mia/indonesia/archive/marx-engels/1852/brumaire/PengantarEngels.html",
      "/mia/indonesia/archive/marx-engels/1852/brumaire/Bab1.html",
      "/mia/indonesia/archive/marx-engels/1852/brumaire/Bab2.html",
      "/mia/indonesia/archive/marx-engels/1852/brumaire/Bab3.html",
      "/mia/indonesia/archive/marx-engels/1852/brumaire/Bab4.html",
      "/mia/indonesia/archive/marx-engels/1852/brumaire/Bab5.html",
      "/mia/indonesia/archive/marx-engels/1852/brumaire/Bab6.html",
      "/mia/indonesia/archive/marx-engels/1852/brumaire/Bab7.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "kapital-jilid-1": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/marx-engels/1867/capital01.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "kapital-jilid-2": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/marx-engels/1885/kapital2-bag1.pdf",
      "/mia/indonesia/archive/marx-engels/1885/kapital2-bag2.pdf",
      "/mia/indonesia/archive/marx-engels/1885/kapital2-bag3.pdf"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "kapital-jilid-3": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/marx-engels/1894/kapital3-bab1-20.pdf",
      "/mia/indonesia/archive/marx-engels/1894/kapital3-bab21-36.pdf",
      "/mia/indonesia/archive/marx-engels/1894/kapital3-bab37-43.pdf",
      "/mia/indonesia/archive/marx-engels/1894/kapital3-bab44-52.pdf"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "sosialisme-utopis-dan-ilmiah": {
    "historicalContext": "Teks ini aslinya adalah gabungan dari tiga bab dari buku besar Engels, 'Anti-Dühring' (1878), yang diadaptasi pada tahun 1880 atas permintaan Paul Lafargue agar menjadi pamflet pengenalan bagi buruh di Prancis.",
    "mainProblem": "Apa letak perbedaan mendasar antara gagasan sosialis awal yang bersifat moralistis dan idealis, dengan pandangan sosialis baru yang dirumuskan oleh Marx?",
    "mainThesis": "Sosialisme bukan sekadar ide brilian tentang keadilan moral, melainkan hasil niscaya dari kontradiksi material antara kekuatan produksi yang membesar (sosial) dengan hubungan apropriasi kapitalis yang bersifat privat.",
    "contentSummary": "Engels menguraikan bahwa para sosialis awal (Saint-Simon, Fourier, Owen) gagal karena mereka hanya membangun sistem rasional di dalam pikiran mereka tanpa basis empiris sejarah ekonomi yang matang; mereka merancang utopia di saat kapitalisme belum berkembang penuh. Selanjutnya, Engels membahas dialektika (meminjam dan menjungkirbalikkan Hegel) yang memandang dunia sebagai proses dinamis, bukan hal-hal statis. Terakhir, Engels mensintesis pandangan ini ke dalam Materialisme Historis. Ia menunjukkan bahwa kapitalisme mengubah produksi menjadi kegiatan sosial secara massal, tetapi hasil produksinya dirampas oleh pemilik modal privat. Kontradiksi ini menciptakan krisis periodik dan kelas proletar, yang mana tugas historisnya adalah merebut mesin negara dan mengubah properti alat produksi menjadi properti publik.",
    "argumentStructure": [
      "Bagian 1 (Sosialisme Utopis): Analisis sejarah mengenai keterbatasan teori-teori rasional dan utopis abad pencerahan hingga sosialis Prancis/Inggris awal.",
      "Bagian 2 (Dialektika): Kritik terhadap metafisika yang kaku, serta penjelasan mengenai dialektika materialis sebagai pisau analisis revolusioner.",
      "Bagian 3 (Materialisme Historis): Aplikasi metode dialektik untuk membedah kontradiksi kapitalisme dan peran historis proletariat untuk mengakhiri masyarakat kelas."
    ],
    "significance": "Pamflet Marxis yang secara luas dibaca dan diterjemahkan pada akhir abad ke-19. Karya ini adalah pengantar standar mengenai bagaimana Marxisme memandang sejarah dan ekonomi secara rasional dan ilmiah.",
    "sourceBasis": [
      "/mia/indonesia/archive/marx-engels/18800420-sosialismeutopis/bagian1.html",
      "/mia/indonesia/archive/marx-engels/18800420-sosialismeutopis/bagian2.html",
      "/mia/indonesia/archive/marx-engels/18800420-sosialismeutopis/bagian3.html"
    ],
    "contextBasis": [
      "/mia/indonesia/archive/marx-engels/18800420-sosialismeutopis/18910512-pengantaredisikeempat.html",
      "/mia/indonesia/archive/marx-engels/18800420-sosialismeutopis/18920420-pengantaredisiinggris.html"
    ],
    "summaryStatus": "complete"
  },
  "imperialisme": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/lenin/1916/1916-tahapankhusus.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "tesis-april": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/lenin/19170407-lenin-tesisapril.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "naar-de-republiek-indonesia": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/malaka/1925-Menuju.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "gerpolek": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/malaka/1948-Gerpolek.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "dari-penjara-ke-penjara": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [],
    "contextBasis": [],
    "summaryStatus": "unavailable",
    "unavailableReason": "No extractable local primary source is available"
  },
  "pendahuluan-sumbangan-untuk-kritik-terhadap-filsaf": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/marx-engels/1844/PendahuluanSumbangan.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "kata-pengantar-pada-sebuah-sumbangan-untuk-kritik-": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/marx-engels/1859/pengantar-kritik.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "sebuah-sumbangan-pada-kritik-atas-ekonomi-politik-": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/marx-engels/1847/kemiskinan/Lampiran3.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "peranan-yang-dimainkan-kerja-dalam-peralihan-dari-": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/marx-engels/1876/apetoman.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "kata-pengantar-lama-pada-anti-d-hring-tentang-dial": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/marx-engels/1878/tentang-dialektika.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "surat-marx-dan-engels-kepada-bebel-liebknecht-brac": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/marx-engels/1879/79_09_18.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "upah-sehari-yang-layak-bagi-kerja-sehari-yang-laya": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/marx-engels/1881/kerja.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "surat-engels-untuk-gerson-trier-di-copenhagen-18-d": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/marx-engels/1889/18-trier.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "sebuah-surat-untuk-seorang-kamerad-mengenai-tugas-": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/lenin/1902/1902-TugasOrganisasional.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "tugas-tugas-demokratik-kaum-proletariat-revolusion": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/lenin/1905/TugasDemokratik.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "kampanye-pemilihan-untuk-duma-keempat-dan-tugas-tu": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/lenin/1912/Kampanye.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "situasi-di-dalam-pbsdr-dan-tugas-tugas-segera-part": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/lenin/1912/Situasi.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "revolusi-sosialis-dan-hak-sebuah-bangsa-untuk-mene": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/lenin/1916/1916-hakpenentuannasibsendiri.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "tugas-kaum-proletar-dalam-revolusi-sekarang-ini-te": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/lenin/19170407-lenin-tesisapril.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "keruntuhan-ekonomi-dan-perjuangan-proletariat-mela": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/lenin/1917/Keruntuhan.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "sumber-kelas-para-cavaignac-masa-ini-dan-masa-yang": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/lenin/1917/SumberKelas.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "pemilihan-majelis-konstituante-dan-kediktatoran-pr": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/lenin/19191216-lenin-pemilihanmk.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "laporan-komisi-tentang-permasalahan-nasional-dan-k": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/lenin/1920/Laporan.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "pernyataan-trotsky-mengenai-publikasi-perjanjian-p": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/trotsky/1917-PerjanjianRahasia.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "oposisi-kiri-internasional-tugas-tugas-dan-metode-": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/trotsky/1932-TugasOposisi.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "kita-perlu-membangun-partai-partai-komunis-dan-int": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/trotsky/1933-PartaiKomunisBaru.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "tahun-manifesto-komunis": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/trotsky/19371030-trotsky-90tahunmanifestokomunis.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "diskusi-dengan-trotsky-mengenai-program-transision": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/trotsky/1938-Diskusi.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "apa-yang-harus-kita-pelajari-dan-apa-yang-harus-ki": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/guevara/1958-Apa.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "menuju-republik-indonesia-naar-de-republiek-indone": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/malaka/1925-Menuju.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "getrennt-marschieren-vereint-schlagen-berpisah-kit": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/malaka/1948-Berjuang.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  },
  "pejuang-wanita-pada-hari-hari-revolusi-oktober-bes": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/kollontai/oktober.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
  }
};

export const summaryAliases: Record<string, string> = {
  'sosialisme-utopis-dan-ilmiah': 'sosialisme-utopis-dan-sosialisme-ilmiah',
  'tesis-tentang-feuerbach': 'tesis-tentang-feuerbach-versi-asli',
  'pendahuluan-sumbangan-untuk-kritik-terhadap-filsaf': 'pendahuluan-sumbangan-untuk-kritik-terhadap-filsafat-hak-hegel',
  'kata-pengantar-pada-sebuah-sumbangan-untuk-kritik-': 'kata-pengantar-pada-sebuah-sumbangan-untuk-kritik-terhadap-ekonomi-politik'
};

export function getWorkSummary(slug: string): WorkSummary | undefined {
  if (workSummaries[slug] && workSummaries[slug].summaryStatus !== 'missing') {
    return workSummaries[slug];
  }
  const aliasTarget = summaryAliases[slug];
  if (aliasTarget && workSummaries[aliasTarget] && workSummaries[aliasTarget].summaryStatus !== 'missing') {
    return workSummaries[aliasTarget];
  }
  if (workSummaries[slug]) return workSummaries[slug];
  return undefined;
}
