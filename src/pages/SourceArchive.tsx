import { Archive, Database, FileText, Settings, ShieldCheck } from 'lucide-react';
import { SEO } from '../components/ui/SEO';

export function SourceArchive() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pb-20">
      <SEO 
        title="Arsip Lokal - Belajar Marxis"
        description="Informasi mengenai sumber arsip lokal Belajar Marxis."
      />
      
      <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-800 pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-4">
            <Archive className="w-10 h-10 text-red-600 dark:text-red-500" />
            <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white">Arsip Sumber Lokal</h1>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl">
            Sumber lokal diperoleh dari arsip halaman Marxists Internet Archive - Seksi Bahasa Indonesia.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <Database className="text-red-500" /> Informasi Import
            </h2>
            
            <ul className="space-y-4 text-gray-700 dark:text-gray-300">
              <li className="flex justify-between items-center border-b border-gray-100 dark:border-gray-700 pb-2">
                <span className="font-medium">File Sumber Asli</span>
                <span className="text-gray-500 font-mono text-sm bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">sumber.zip</span>
              </li>
              <li className="flex justify-between items-center border-b border-gray-100 dark:border-gray-700 pb-2">
                <span className="font-medium">Waktu Import Terakhir</span>
                <span className="text-gray-500 text-sm">{new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute:'2-digit' })}</span>
              </li>
              <li className="flex justify-between items-center border-b border-gray-100 dark:border-gray-700 pb-2">
                <span className="font-medium">Jumlah Koleksi (Penulis)</span>
                <span className="font-bold text-gray-900 dark:text-white">14</span>
              </li>
              <li className="flex justify-between items-center border-b border-gray-100 dark:border-gray-700 pb-2">
                <span className="font-medium">Total Karya Diselamatkan</span>
                <span className="font-bold text-gray-900 dark:text-white">212</span>
              </li>
              <li className="flex justify-between items-center border-b border-gray-100 dark:border-gray-700 pb-2">
                <span className="font-medium">Total Halaman HTML Terscan</span>
                <span className="font-bold text-gray-900 dark:text-white">429</span>
              </li>
            </ul>
            
            <div className="mt-8 p-4 bg-yellow-50 dark:bg-yellow-900/30 border border-yellow-200 dark:border-yellow-800 rounded-lg flex items-start gap-3">
              <ShieldCheck className="text-yellow-600 dark:text-yellow-500 shrink-0 w-5 h-5 mt-0.5" />
              <p className="text-sm text-yellow-800 dark:text-yellow-200">
                Peringatan Keamanan: Demi alasan hak cipta dan perlindungan bandwidth, file sumber mentah (sumber.zip) tidak disediakan untuk diunduh oleh publik. Seluruh naskah yang ditampilkan di Belajar Marxis telah melalui proses normalisasi.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                <FileText className="text-red-500 w-5 h-5" /> Normalisasi Teks
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
                Seluruh halaman HTML dari MIA (Marxists Internet Archive) diproses menggunakan algoritma lokalisasi yang secara hati-hati membuang elemen navigasi lama, footer, header, stylesheet usang, dan tag HTTrack cache. Namun, <strong>teks primer dan terjemahan asli dipertahankan tanpa intervensi AI, parafrase, maupun modernisasi.</strong>
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                <Settings className="text-red-500 w-5 h-5" /> Arsitektur Sinkronisasi
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
                Belajar Marxis secara teknis kini tidak lagi melakukan "live scraping" atau mengirim HTTP Request secara real-time ke web MIA untuk mengambil teks. Semua karya disimpan dalam repositori lokal (Git) yang dibangun (di-build) menjadi satu paket aplikasi statis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
