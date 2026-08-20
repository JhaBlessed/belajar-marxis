import { Link } from 'react-router-dom';
import { ArrowRight, Compass } from 'lucide-react';
import { authors } from '../data/authors';
import { works } from '../data/works';
import { SEO } from '../components/ui/SEO';

export function Home() {
  const featuredAuthors = authors.slice(0, 4);
  const featuredWorks = works.filter(w => ['manifesto-komunis', 'kapital-jilid-1', 'madilog', 'negara-dan-revolusi'].includes(w.id));

  return (
    <div className="flex flex-col min-h-screen">
      <SEO />
      {/* Hero Section */}
      <section className="px-4 py-24 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white tracking-tight">
            BELAJAR <br className="hidden md:block" />
            <span className="text-red-600 dark:text-red-500">MARXIS</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-medium">
            Peta Belajar Karya-Karya Marxis dalam Bahasa Indonesia
          </p>
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Website pembelajaran publik untuk menjelajahi tokoh, karya, konsep, sejarah, dan perdebatan dalam tradisi Marxis secara terstruktur dan kritis.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-8">
            <Link to="/belajar" className="flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-colors">
              Mulai Belajar <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/karya" className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 hover:border-red-500 dark:hover:border-red-400 rounded-lg font-medium transition-colors">
              Jelajahi Karya
            </Link>
            <Link to="/perpustakaan" className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 hover:border-red-500 dark:hover:border-red-400 rounded-lg font-medium transition-colors">
              Buka Perpustakaan
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24 w-full">
        
        {/* Jalur Belajar */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Mulai dari mana?</h2>
            <Link to="/belajar" className="text-red-600 dark:text-red-400 hover:underline font-medium">Lihat semua jalur</Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {['Pemula', 'Menengah', 'Mahir'].map((level) => (
              <div key={level} className="p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow">
                <div className="inline-flex items-center justify-center p-3 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-lg mb-4">
                  <Compass className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Tingkat {level}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {level === 'Pemula' ? 'Panduan awal memahami konsep dasar dan teori utama.' : 
                   level === 'Menengah' ? 'Pendalaman strategi, teori negara, dan imperialisme.' : 
                   'Eksplorasi mendalam atas karya ekonomi politik dan filsafat.'}
                </p>
                <Link to={`/belajar#${level.toLowerCase()}`} className="text-red-600 dark:text-red-400 font-medium hover:underline inline-flex items-center gap-1">
                  Mulai jalur ini <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Tokoh Utama */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Jelajahi Berdasarkan Tokoh</h2>
            <Link to="/tokoh" className="text-red-600 dark:text-red-400 hover:underline font-medium">Lihat semua tokoh</Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {featuredAuthors.map(author => (
              <Link key={author.id} to={`/tokoh/${author.slug}`} className="group block text-center">
                <div className="aspect-square w-32 md:w-48 mx-auto rounded-full overflow-hidden mb-4 bg-gray-200 dark:bg-gray-700 border-4 border-white dark:border-gray-800 shadow-lg group-hover:border-red-500 transition-colors">
                  {author.image ? (
                    <img src={author.image} alt={author.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-4xl text-gray-400">
                      {author.name.charAt(0)}
                    </div>
                  )}
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-red-600 transition-colors">{author.name}</h3>
              </Link>
            ))}
          </div>
        </section>

        {/* Karya Penting */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Karya Penting</h2>
            <Link to="/karya" className="text-red-600 dark:text-red-400 hover:underline font-medium">Lihat semua karya</Link>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {featuredWorks.map(work => (
              <Link key={work.id} to={`/karya/${work.slug}`} className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-red-500 transition-all group">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-red-600 transition-colors">{work.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{work.year}</p>
                <p className="text-gray-600 dark:text-gray-300 line-clamp-2">{work.summary.contentSummary}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Konsep Utama */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Konsep Utama</h2>
            <Link to="/konsep" className="text-red-600 dark:text-red-400 hover:underline font-medium">Lihat kamus konsep</Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Materialisme Historis', 'Nilai Lebih', 'Perjuangan Kelas', 'Revolusi Permanen'].map(c => (
              <Link key={c} to={`/konsep/${c.toLowerCase().replace(' ', '-')}`} className="p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-red-500 hover:shadow-sm transition-all text-center font-semibold text-gray-800 dark:text-gray-200 hover:text-red-600 dark:hover:text-red-400">
                {c}
              </Link>
            ))}
          </div>
        </section>

        {/* Timeline Pemikiran */}
        <section className="bg-white dark:bg-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-700 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Timeline Pemikiran</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">Telusuri sejarah penulisan karya dan peristiwa penting yang membentuk alur pemikiran Marxis dari masa ke masa.</p>
          <Link to="/timeline" className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-white rounded-lg font-medium transition-colors">
            Lihat Timeline Lengkap <ArrowRight className="w-5 h-5" />
          </Link>
        </section>

        {/* Fokus Indonesia */}
        <section className="bg-red-50 dark:bg-gray-800 p-8 rounded-2xl border border-red-100 dark:border-gray-700">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 space-y-4">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Fokus Indonesia: Tan Malaka</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Eksplorasi karya-karya pemikir Marxis terbesar Indonesia. Dari analisis revolusioner dalam "Aksi Massa" hingga magnum opus filsafat "Madilog" yang mencoba membumikan metode ilmiah ke alam pikiran Nusantara.
              </p>
              <div className="pt-4">
                <Link to="/indonesia" className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-colors">
                  Pelajari Marxisme di Indonesia <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
            <div className="w-48 h-48 rounded-full overflow-hidden shadow-xl flex-shrink-0 bg-gray-200">
               <img src="https://www.marxists.org/indonesia/archive/malaka/tan-malaka.jpg" alt="Tan Malaka" className="w-full h-full object-cover grayscale" />
            </div>
          </div>
        </section>

      </div>

      {/* Tentang Belajar Marxis */}
      <section className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-16 text-center px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Tentang Belajar Marxis</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Website pembelajaran publik untuk menjelajahi tokoh, karya, konsep, sejarah, dan perdebatan dalam tradisi Marxis secara terstruktur dan kritis.
          </p>
          <Link to="/tentang" className="text-red-600 dark:text-red-400 font-bold hover:underline">Pelajari lebih lanjut tentang proyek ini &rarr;</Link>
        </div>
      </section>
    </div>
  );
}
