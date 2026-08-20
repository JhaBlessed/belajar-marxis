import { ExternalLink, Database, BookOpen, Clock, ShieldCheck } from 'lucide-react';
import { sources } from '../data/sources';
import { SEO } from '../components/ui/SEO';
import { resolveArchiveUrl } from '../lib/archiveUrl';

export function Sources() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <SEO title="Sumber dan Metodologi" description="Registry sumber rujukan kanonikal yang digunakan dalam Ensiklopedia Belajar Marxis." />
      
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Sumber dan Metodologi</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Proyek ini secara tegas membatasi diri hanya menggunakan referensi dari sumber arsip utama untuk menjaga integritas sejarah. 
          Berikut adalah Canonical Source Registry yang mendasari seluruh metadata, teks primer, dan kronologi di website ini.
        </p>
      </div>

      <div className="space-y-12">
        {sources.map((source) => (
          <div key={source.id} className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg flex items-center gap-1">
              <ShieldCheck className="w-3 h-3" />
              PRIORITAS {source.priority}
            </div>
            
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-red-100 dark:bg-red-900/30 flex items-center justify-center flex-shrink-0 text-red-600 dark:text-red-400">
                {source.type === 'portal' ? <Database className="w-6 h-6" /> :
                 source.type === 'archive-index' ? <BookOpen className="w-6 h-6" /> :
                 <Clock className="w-6 h-6" />}
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{source.name}</h2>
                <a href={resolveArchiveUrl(source.url)} target="_blank" rel="noopener noreferrer" className="text-red-600 dark:text-red-400 hover:underline flex items-center gap-1 font-medium">
                  {source.url} <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
            
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-300 text-lg mb-6 leading-relaxed">
                {source.description}
              </p>
              
              <div className="bg-gray-50 dark:bg-gray-900/50 rounded-xl p-6 border border-gray-100 dark:border-gray-700">
                <h3 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-green-500" /> Penggunaan dalam Proyek
                </h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  {source.id === 'mia-indonesia' && (
                    <>
                      <li>• Berfungsi sebagai portal sumber identitas arsip.</li>
                      <li>• Navigasi umum dan pengenalan sekilas tentang platform MIA.</li>
                      <li>• Level prioritas 5.</li>
                    </>
                  )}
                  {source.id === 'mia-karya-marxis' && (
                    <>
                      <li>• Digunakan untuk daftar kelompok utama tokoh Marxis.</li>
                      <li>• Validasi bahwa penulis masuk dalam arsip resmi MIA Indonesia.</li>
                      <li>• Sumber utama navigasi katalog dan pengelompokan (Level Prioritas 3).</li>
                    </>
                  )}
                  {source.id === 'mia-sejarah-marxisme-indonesia' && (
                    <>
                      <li>• Sumber mutlak untuk kronologi dan kejadian sejarah Marxisme di Indonesia.</li>
                      <li>• Referensi untuk profil Organisasi (Sarekat Islam, PKI, ISDV, dll).</li>
                      <li>• Referensi peristiwa politik dan pergerakan (Level Prioritas 4).</li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          </div>
        ))}

        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-2xl p-8">
          <h2 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-4">Metodologi Metadata Confidence</h2>
          <p className="text-blue-800 dark:text-blue-200 mb-4">Setiap entitas data dalam ensiklopedia ini ditandai dengan tingkat kepercayaan metadata (Metadata Confidence):</p>
          <ul className="space-y-3 text-blue-800 dark:text-blue-200">
            <li className="flex gap-3">
              <span className="font-bold min-w-[80px]">HIGH:</span>
              <span>Metadata dikonfirmasi langsung dari halaman teks primer atau halaman arsip spesifik penulis. Data dijamin akurat sesuai MIA.</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold min-w-[80px]">MEDIUM:</span>
              <span>Berasal dari indeks umum (Karya-karya Marxis) atau kronologi Sejarah Marxisme Indonesia.</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold min-w-[80px]">LOW:</span>
              <span>Sumber belum ditemukan/dipetakan, atau metadata berasal dari legacy data yang masih memerlukan pemeriksaan manual.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
