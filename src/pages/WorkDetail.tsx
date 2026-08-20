import { resolveArchiveUrl } from '../lib/archiveUrl';
import { useParams, Link } from 'react-router-dom';
import { works } from '../data/works';
import { authors } from '../data/authors';
import { useProgress } from '../hooks/useProgress';
import { 
  ArrowLeft, BookOpen, Clock, AlertCircle, 
  ShieldCheck, ShieldAlert, CheckCircle, HelpCircle,
  ExternalLink, 
} from 'lucide-react';

const metaModules = import.meta.glob('../content/works/**/metadata.ts', { import: 'metadata', eager: true });

function getLocalWorks() {
  const localWorks = new Set<string>();
  for (const path in metaModules) {
    const parts = path.split('/');
    if (parts.length >= 4) {
      localWorks.add(parts[3]);
    }
  }
  return localWorks;
}

export function WorkDetail() {
  const { slug } = useParams();
  const work = works.find(w => w.slug === slug);
  const workAuthors = work?.authorIds 
    ? work.authorIds.map(id => authors.find(a => a.id === id)).filter(Boolean) as typeof authors
    : authors.filter(a => a.id === work?.authorId);

  const { progress, setWorkStatus } = useProgress();

  if (!work || workAuthors.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center dark:bg-gray-900">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Karya tidak ditemukan</h2>
          <Link to="/karya" className="text-red-600 hover:text-red-700">Kembali ke Daftar Karya</Link>
        </div>
      </div>
    );
  }

  const status = progress.works[work.id] || 'Belum Dibaca';
  const hasLocalContent = getLocalWorks().has(work.slug);

  const getReadingAvailability = () => {
    if (work.contentStatus === 'external-only') return 'external-only';
    if (work.rightsStatus === 'unknown') return 'rights-unverified';
    if (work.fullTextEnabled && hasLocalContent) {
      return work.contentStatus === 'partial' ? 'partial' : 'available';
    }
    return 'not-imported';
  };

  const availability = getReadingAvailability();
  

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pb-20">
      {/* HEADER HERO */}
      <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-800 pt-8 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/karya" className="inline-flex items-center gap-2 text-gray-500 hover:text-red-600 mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Kembali ke Daftar Karya
          </Link>
          
          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 rounded-full text-sm font-bold tracking-wide">
              {work.category}
            </span>
            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full text-sm font-medium">
              Tingkat: {work.difficulty}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight mb-4 font-serif">
            {work.title}
          </h1>
          {work.originalTitle && (
            <p className="text-xl text-gray-500 dark:text-gray-400 italic mb-6">
              {work.originalTitle}
            </p>
          )}

          <div className="flex flex-wrap items-center gap-x-6 gap-y-4 text-lg text-gray-700 dark:text-gray-300">
            <div className="flex items-center gap-2">
              {workAuthors.map((author, idx) => (
                <span key={author.id} className="flex items-center gap-2">
                  <Link to={`/penulis/${author.slug}`} className="font-bold hover:text-red-600 transition-colors flex items-center gap-2">
                    <span className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-sm">
                      {author.name.charAt(0)}
                    </span>
                    {author.name}
                  </Link>
                  {idx < workAuthors.length - 1 && <span className="text-gray-400">&amp;</span>}
                </span>
              ))}
            </div>
            <span className="flex items-center gap-1.5 opacity-75">
              <Clock className="w-5 h-5" />
              {work.year || 'Tahun tidak diketahui'}
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 sm:p-10 border border-gray-100 dark:border-gray-700">
          
          {/* ACTION BUTTONS (READ / MIA) */}
          <div className="flex flex-col gap-4 mb-8">
            {(availability === 'available' || availability === 'partial') && work.format !== 'multi-pdf' && (
              <Link 
                to={`/baca/${work.slug}`}
                className={`flex items-center justify-center gap-2 text-white font-bold py-4 px-6 rounded-lg transition-colors shadow-sm ${availability === 'partial' ? 'bg-amber-600 hover:bg-amber-700' : 'bg-red-600 hover:bg-red-700'}`}
              >
                <BookOpen className="w-5 h-5" /> BACA TULISAN
                <span className={`text-xs px-2 py-0.5 rounded-full ml-2 ${availability === 'partial' ? 'bg-amber-800' : 'bg-red-800'}`}>
                  {availability === 'partial' ? 'SEBAGIAN' : 'TEKS LENGKAP'}
                </span>
              </Link>
            )}
            
            {work.sourceFormat ? (
              <div className="flex flex-col gap-3">
                <h3 className="font-bold text-gray-900 dark:text-white mb-2 uppercase tracking-wide text-sm opacity-80 mt-2">SUMBER ARSIP</h3>
                
                {(work.sourceFormat === 'pdf' || work.sourceFormat === 'html') && work.localSourcePath && (
                  <a href={resolveArchiveUrl(work.localSourcePath)} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-100 font-bold py-3 px-6 rounded-lg transition-colors">
                    {work.sourceFormat === 'pdf' ? <><BookOpen className="w-4 h-4" /> BUKA PDF</> : <><ExternalLink className="w-4 h-4" /> BUKA ARSIP</>}
                  </a>
                )}
                
                {(work.sourceFormat === 'multi-pdf' || work.sourceFormat === 'multi-html') && work.localSourceParts && (
                  <div className="flex flex-col gap-3">
                    {work.localSourceParts.map((part, idx) => (
                      <a key={idx} href={resolveArchiveUrl(part.path)} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-100 font-bold py-3 px-6 rounded-lg transition-colors border border-gray-300 dark:border-gray-600">
                        <div className="flex items-center gap-2">
                          <BookOpen className="w-5 h-5" /> {part.title.toUpperCase()}
                        </div>
                        <span className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs px-2 py-0.5 rounded-full">
                          {work.sourceFormat === 'multi-pdf' ? 'PDF' : 'HTML'}
                        </span>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ) : null}

            {(!work.localSourcePath && !work.localSourceParts) && (
              <div className="flex flex-col gap-3">
                <button disabled className="flex items-center justify-center gap-2 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-400 font-bold py-4 px-6 rounded-lg cursor-not-allowed">
                  Sumber lokal belum tersedia.
                </button>
                {work.miaUrl && (
                  <a href={work.miaUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200 font-bold py-3 px-6 rounded-lg transition-colors mt-2">
                    Lihat Sumber Online <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            )}
          </div>

            {/* STATUS TEKS PRIMER (PROVENANCE & RIGHTS) */}
          <div className="mb-10 bg-gray-50 dark:bg-gray-900/40 border border-gray-200 dark:border-gray-700 rounded-xl p-5 sm:p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-sm">
            <div>
              <p className="text-gray-500 dark:text-gray-400 font-medium mb-1">Status Teks Primer</p>
              <div className="flex items-center gap-2 font-bold text-gray-900 dark:text-white">
                {availability === 'available' && <><CheckCircle className="w-4 h-4 text-green-500"/> Tersedia Lokal</>}
                {availability === 'partial' && <><AlertCircle className="w-4 h-4 text-amber-500"/> Sebagian</>}
                {availability === 'not-imported' && <><Clock className="w-4 h-4 text-gray-500"/> Belum Diimpor</>}
                {availability === 'rights-unverified' && <><HelpCircle className="w-4 h-4 text-amber-500"/> Arsip Lokal Tersedia</>}
                {availability === 'external-only' && <><ExternalLink className="w-4 h-4 text-blue-500"/> Eksternal</>}
              </div>
            </div>
            <div>
              <p className="text-gray-500 dark:text-gray-400 font-medium mb-1">Status Hak</p>
              <div className="flex items-center gap-2 font-bold text-gray-900 dark:text-white">
                {work.rightsStatus === 'public-domain' ? (
                  <><ShieldCheck className="w-4 h-4 text-green-500"/> Public Domain</>
                ) : work.rightsStatus === 'cc-by-sa' ? (
                  <><ShieldCheck className="w-4 h-4 text-green-500"/> CC-BY-SA</>
                ) : (
                  <><ShieldAlert className="w-4 h-4 text-red-500"/> {work.rightsStatus === 'unknown' ? 'Hak Belum Diverifikasi' : work.rightsStatus.toUpperCase()}</>
                )}
              </div>
            </div>
            <div>
              <p className="text-gray-500 dark:text-gray-400 font-medium mb-1">Sumber</p>
              <p className="font-bold text-gray-900 dark:text-white truncate" title="Marxists Internet Archive">
                {work.sourceType === 'MIA_LOCAL_ARCHIVE' ? 'sumber.zip (MIA)' : work.sourceCredit || 'Berbagai Sumber'}
              </p>
            </div>
            <div>
              <p className="text-gray-500 dark:text-gray-400 font-medium mb-1">Terakhir Diverifikasi</p>
              <p className="font-bold text-gray-900 dark:text-white">
                {work.sourceCheckedAt ? new Date(work.sourceCheckedAt).toLocaleDateString('id-ID') : (work.sourceType === 'MIA_LOCAL_ARCHIVE' ? '20 Agustus 2026' : 'Belum Pernah')}
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between gap-4 text-sm mb-10 pb-8 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-1.5 text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 px-3 py-1.5 rounded-md font-medium">
              <Clock className="w-4 h-4" />
              {work.readingTime} menit ringkasan
            </div>

            <div className="flex items-center gap-2">
              <span className="text-gray-500 dark:text-gray-400 hidden sm:inline">Status Pembelajaran:</span>
              <select
                value={status}
                onChange={(e) => setWorkStatus(work.id, e.target.value as any)}
                className="text-sm bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 rounded-md px-3 py-1.5 focus:ring-2 focus:ring-red-500 focus:outline-none"
              >
                <option value="Belum Dibaca">Belum Dibaca</option>
                <option value="Sedang Dibaca">Sedang Dibaca</option>
                <option value="Selesai">Selesai</option>
              </select>
            </div>
          </div>

          <div className="space-y-12">
            <section>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Konteks Sejarah</h3>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">{work.summary.historicalContext}</p>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <section className="bg-gray-50 dark:bg-gray-900/50 p-6 rounded-xl border border-gray-100 dark:border-gray-700">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">Masalah Utama</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{work.summary.mainProblem}</p>
              </section>

              <section className="bg-gray-50 dark:bg-gray-900/50 p-6 rounded-xl border border-gray-100 dark:border-gray-700">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">Tesis Utama</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{work.summary.mainThesis}</p>
              </section>
            </div>

            <section>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Ringkasan Konten</h3>
              <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-300">
                <p>{work.summary.contentSummary}</p>
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Struktur Argumen</h3>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">{work.summary.structure}</p>
            </section>

            <section className="bg-red-50 dark:bg-red-900/10 p-8 rounded-2xl border border-red-100 dark:border-red-900/30">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Pentingnya Karya Ini</h3>
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">{work.importance}</p>
            </section>
            
            {work.debates && (
              <section>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Perdebatan</h3>
                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">{work.debates}</p>
              </section>
            )}

            {work.studyQuestions.length > 0 && (
              <section>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Pertanyaan Panduan Belajar</h3>
                <div className="space-y-4">
                  {work.studyQuestions.map((q, idx) => (
                    <div key={idx} className="flex gap-4 items-start bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm">
                      <div className="w-8 h-8 rounded-full bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 flex items-center justify-center font-bold shrink-0">
                        {idx + 1}
                      </div>
                      <p className="text-gray-700 dark:text-gray-300 mt-1 font-medium">{q}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}
            
            {(work.themes.length > 0 || work.concepts.length > 0) && (
              <section className="border-t border-gray-200 dark:border-gray-700 pt-8 mt-12">
                <div className="flex flex-wrap gap-6">
                  {work.themes.length > 0 && (
                    <div>
                      <h4 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-3">Tema</h4>
                      <div className="flex flex-wrap gap-2">
                        {work.themes.map(t => (
                          <span key={t} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-full text-sm font-medium">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  {work.concepts.length > 0 && (
                    <div>
                      <h4 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-3">Konsep</h4>
                      <div className="flex flex-wrap gap-2">
                        {work.concepts.map(c => (
                          <Link key={c} to={`/konsep/${c}`} className="px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-colors">
                            {c}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </section>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
