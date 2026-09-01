import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { getCanonicalWorks } from '../lib/canonicalWorks';
import { authors } from '../data/authors';
import { getPrimarySourceUrl } from '../lib/archiveUrl';
import { Search } from 'lucide-react';
import { SEO } from '../components/ui/SEO';

export function Works() {
  const [filterAuthor, setFilterAuthor] = useState('');
  const [filterDifficulty, setFilterDifficulty] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('year-asc');

  const filteredWorks = useMemo(() => {
    return getCanonicalWorks()
      .filter(w => {
        const matchAuthor = filterAuthor
          ? (w.authorId === filterAuthor || w.authorIds?.includes(filterAuthor))
          : true;
        const matchDifficulty = filterDifficulty ? w.difficulty === filterDifficulty : true;
        const matchSearch = w.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            w.themes.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
        return matchAuthor && matchDifficulty && matchSearch;
      })
      .sort((a, b) => {
        const yearA = a.year || 9999;
        const yearB = b.year || 9999;
        if (sortBy === 'year-asc') return yearA - yearB;
        if (sortBy === 'year-desc') return (b.year || 0) - (a.year || 0);
        if (sortBy === 'title-asc') return a.title.localeCompare(b.title);
        return 0;
      });
  }, [filterAuthor, filterDifficulty, searchQuery, sortBy]);

  const groupedWorks = useMemo(() => {
    const groups: Record<string, typeof filteredWorks> = {};
    filteredWorks.forEach(work => {
      const mainAuthorId = work.authorIds ? work.authorIds[0] : work.authorId || 'unknown';
      if (!groups[mainAuthorId]) {
        groups[mainAuthorId] = [];
      }
      groups[mainAuthorId].push(work);
    });
    // Sort groups by author name
    return Object.entries(groups).sort(([aId], [bId]) => {
      const aName = authors.find(a => a.id === aId)?.name || '';
      const bName = authors.find(a => a.id === bId)?.name || '';
      return aName.localeCompare(bName);
    });
  }, [filteredWorks]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <SEO title="Katalog Karya" description="Jelajahi dan cari rangkuman karya-karya penting Marxis dalam bahasa Indonesia." />
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Katalog Karya</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">Jelajahi dan cari rangkuman karya-karya penting.</p>
      </div>

      <div className="bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-200 dark:border-gray-700 mb-8 flex flex-col md:flex-row gap-4 items-center shadow-sm">
        <div className="relative flex-1 w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Cari judul atau tema..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 dark:text-white"
          />
        </div>

        <select
          value={filterAuthor}
          onChange={e => setFilterAuthor(e.target.value)}
          className="w-full md:w-auto px-4 py-2 border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 dark:text-white"
        >
          <option value="">Semua Penulis</option>
          {[...authors].sort((a,b) => a.name.localeCompare(b.name, 'id')).map(a => <option key={a.id} value={a.id}>{a.name}</option>)}
        </select>

        <select
          value={filterDifficulty}
          onChange={e => setFilterDifficulty(e.target.value)}
          className="w-full md:w-auto px-4 py-2 border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 dark:text-white"
        >
          <option value="">Semua Kesulitan</option>
          <option value="Pemula">Pemula</option>
          <option value="Menengah">Menengah</option>
          <option value="Mahir">Mahir</option>
        </select>

        <select
          value={sortBy}
          onChange={e => setSortBy(e.target.value)}
          className="w-full md:w-auto px-4 py-2 border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 dark:text-white"
        >
          <option value="year-asc">Tahun Terlama</option>
          <option value="year-desc">Tahun Terbaru</option>
          <option value="title-asc">A-Z</option>
        </select>
      </div>

      <div className="space-y-12">
        {groupedWorks.map(([authorId, authorWorks]) => {
          const author = authors.find(a => a.id === authorId);
          return (
            <div key={authorId} className="scroll-mt-24" id={`karya-author-${authorId}`}>
              <div className="flex items-center gap-4 mb-6 border-b border-gray-200 dark:border-gray-700 pb-2">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {author?.name || 'Penulis Tidak Diketahui'}
                </h2>
                <span className="text-sm font-medium text-gray-500 bg-gray-100 dark:bg-gray-700 dark:text-gray-300 px-3 py-1 rounded-full">
                  {authorWorks.length} karya
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {authorWorks.map(work => (
                  <Link key={work.id} to={`/karya/${work.slug}`} className="flex flex-col bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:border-red-500 dark:hover:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 hover:shadow-md transition-all group">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-red-600 transition-colors mb-1 line-clamp-2" title={work.title}>{work.title}</h3>
                        <p className="text-gray-500 dark:text-gray-400 text-sm">{work.year || 'Tahun tidak diketahui'}</p>
                      </div>
                      <span className={`px-2 py-1 text-xs font-medium rounded-md whitespace-nowrap ml-2 ${
                        work.difficulty === 'Pemula' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' :
                        work.difficulty === 'Menengah' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400' :
                        'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
                      }`}>
                        {work.difficulty}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2 flex-1">
                      {work.summary.contentSummary || 'Ringkasan belum tersedia.'}
                    </p>
                    <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-700">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {work.themes.slice(0,3).map(theme => (
                          <span key={theme} className="px-2 py-1 bg-gray-50 dark:bg-gray-700 text-gray-500 dark:text-gray-400 text-xs rounded-md">
                            {theme}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-2">
                        <span className="flex-1 text-center bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 font-medium py-1.5 px-3 rounded text-sm transition-colors">
                          Baca Ringkasan
                        </span>
                        {work.fullTextEnabled && (
                          <a
                            href={getPrimarySourceUrl(work) || `/karya/${work.slug}`}
                            target={getPrimarySourceUrl(work) ? "_blank" : undefined}
                            rel={getPrimarySourceUrl(work) ? "noopener noreferrer" : undefined}
                            onClick={(e) => e.stopPropagation()}
                            className="flex-1 text-center bg-red-600 hover:bg-red-700 text-white font-medium py-1.5 px-3 rounded text-sm transition-colors"
                          >
                            Baca Tulisan
                          </a>
                        )}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}

        {filteredWorks.length === 0 && (
          <div className="py-20 text-center text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
            Karya tidak ditemukan berdasarkan pencarian atau filter yang dipilih.
          </div>
        )}
      </div>
    </div>
  );
}
