/* eslint-disable max-len */
export type SummaryStatus = 'complete' | 'unavailable' | 'missing';

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
      "/mia/indonesia/archive/lenin/1902/ApaYang/KataPengantar.html",
      "/mia/indonesia/archive/lenin/1902/ApaYang/Bab1.html",
      "/mia/indonesia/archive/lenin/1902/ApaYang/Bab2.html",
      "/mia/indonesia/archive/lenin/1902/ApaYang/Bab3.html",
      "/mia/indonesia/archive/lenin/1902/ApaYang/Bab4.html",
      "/mia/indonesia/archive/lenin/1902/ApaYang/Bab5.html",
      "/mia/indonesia/archive/lenin/1902/ApaYang/Kesimpulan.html",
      "/mia/indonesia/archive/lenin/1902/ApaYang/Tambahan.html",
      "/mia/indonesia/archive/lenin/1902/ApaYang/Koreksi.html"
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
      "/mia/indonesia/archive/lenin/19170901-lenin-negaradanrevolusi/katapengantarindonesia.html",
      "/mia/indonesia/archive/lenin/19170901-lenin-negaradanrevolusi/katapengantar.html",
      "/mia/indonesia/archive/lenin/19170901-lenin-negaradanrevolusi/bab1.html",
      "/mia/indonesia/archive/lenin/19170901-lenin-negaradanrevolusi/bab2.html",
      "/mia/indonesia/archive/lenin/19170901-lenin-negaradanrevolusi/bab3.html",
      "/mia/indonesia/archive/lenin/19170901-lenin-negaradanrevolusi/bab4.html",
      "/mia/indonesia/archive/lenin/19170901-lenin-negaradanrevolusi/bab5.html",
      "/mia/indonesia/archive/lenin/19170901-lenin-negaradanrevolusi/bab6.html",
      "/mia/indonesia/archive/lenin/19170901-lenin-negaradanrevolusi/catatantambahan.html"
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
    "summaryStatus": "missing"
  },
  "pendahuluan-sumbangan-untuk-kritik-terhadap-filsafat-hak-hegel": {
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
    "significance": "Garis besar paling jernih dan mendasar mengenai prinsip-prinsip utama Marxisme. Sangat cocok bagi pembaca pemula yang baru ingin memahami terminologi dan konsep sejarah gerakan komunis.",
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
    "significance": "Karya politik paling berpengaruh di abad ke-19 dan ke-20. Manifesto ini meletakkan landasan politik praktis dan teoritis pertama yang sistematis bagi gerakan komunis internasional.",
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
      "/mia/indonesia/archive/marx-engels/1850/PerangTani/Pasal.html",
      "/mia/indonesia/archive/marx-engels/1850/PerangTani/Komentar.html"
    ],
    "contextBasis": [],
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
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/marx-engels/1869/PenghapusanHak.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
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
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/marx-engels/1872/surat24jan1872.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
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
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/marx-engels/1873/1873-MengenaiOtoritas.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
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
  "anti-duhring": {
    "historicalContext": "Ditulis oleh Engels antara 1876 dan 1878 untuk melawan pengaruh teoretis Eugen Dühring yang sedang naik daun di Partai Sosial Demokrat Jerman (SPD). Marx dan Engels merasa perlu menjaga kejernihan ideologi partai.",
    "mainProblem": "Bagaimana mengcounter pandangan positivis borjuis kecil Dühring yang mengancam akan membingungkan program politik dan fondasi teoritis gerakan pekerja Jerman?",
    "mainThesis": "Marxisme adalah konsepsi dunia yang menyeluruh dan koheren (Materialisme Dialektis) yang membedah dan memberi jawaban yang lebih saintifik terhadap persoalan filsafat, ekonomi politik, maupun sosialisme dibandingkan dengan eklektisisme superfisial milik Dühring.",
    "contentSummary": "Karena Dühring menciptakan seluruh 'sistem' ilmu yang baru, Engels terpaksa mengikutinya melintasi berbagai subjek—mulai dari ruang dan waktu, mekanika kuantum zaman itu, kimia, moral, hukum, hingga ekonomi dan sejarah. Secara tidak langsung, ini mendorong Engels untuk pertama kalinya memaparkan 'pandangan dunia' (worldview) Marxisme secara komprehensif. Pada bagian Filsafat, ia menjelaskan bahwa dialektika berlaku di alam semesta. Pada bagian Ekonomi Politik, ia (dengan bantuan bab yang ditulis Marx) membela Teori Nilai-Kerja. Dan pada bagian Sosialisme, ia menjelaskan transisi dari utopia ke sains.",
    "argumentStructure": [
      "Pendahuluan: Sejarah pembentukan sosialisme dan metode materialis.",
      "Bagian I: Filsafat. Membahas ontologi, apriori, waktu, ruang, moral, hukum, dan hukum dialektika.",
      "Bagian II: Ekonomi Politik. Menjelaskan nilai, kapital, bunga, nilai-lebih, dan mengoreksi pembacaan Dühring terhadap Marx.",
      "Bagian III: Sosialisme. Menganalisis sejarah produksi, kapitalisme, dan tugas negara yang akan 'melenyap' (withering away)."
    ],
    "significance": "Ensiklopedia awal dari Marxisme itu sendiri. Hampir seluruh kepemimpinan sosialis generasi Kedua (Lenin, Kautsky, Plekhanov, Bebel) mempelajari Marxisme secara utuh untuk pertama kalinya melalui buku ini.",
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
    "significance": "Pamflet Marxis yang paling banyak dibaca dan diterjemahkan pada akhir abad ke-19 setelah Manifesto. Karya ini adalah pengantar standar mengenai bagaimana Marxisme memandang sejarah dan ekonomi secara rasional dan ilmiah.",
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
  "klas-klas-masyarakat-diperlukan-dan-berlebihan": {
    "historicalContext": "",
    "mainProblem": "",
    "mainThesis": "",
    "contentSummary": "",
    "argumentStructure": [],
    "significance": "",
    "sourceBasis": [
      "/mia/indonesia/archive/marx-engels/1881/klas.html"
    ],
    "contextBasis": [],
    "summaryStatus": "missing"
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
      "/mia/indonesia/archive/malaka/AksiMassa/KataPengantar.html",
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
    "summaryStatus": "missing"
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
    "significance": "Pamflet Marxis yang paling banyak dibaca dan diterjemahkan pada akhir abad ke-19 setelah Manifesto. Karya ini adalah pengantar standar mengenai bagaimana Marxisme memandang sejarah dan ekonomi secara rasional dan ilmiah.",
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
    "summaryStatus": "missing"
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
    "summaryStatus": "missing"
  }
};

export const summaryAliases: Record<string, string> = {
  'kapital-jilid-1': 'kapital-i',
  'sosialisme-utopis-dan-ilmiah': 'sosialisme-utopis-dan-sosialisme-ilmiah',
  'tesis-tentang-feuerbach': 'tesis-tentang-feuerbach-versi-asli'
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
