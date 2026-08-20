import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Book } from 'lucide-react';
import { works } from '../data/works';
import { resolveMiaSource } from '../lib/sourceResolver';
import { authors } from '../data/authors';
import { SEO } from '../components/ui/SEO';

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

export function Library() {
  const [filterAuthor, setFilterAuthor] = useState('');
  const [filterStatus, setFilterStatus] = useState('');

  const libraryWorks = useMemo(() => {
    return works
      .filter(w => {
        const matchAuthor = filterAuthor 
          ? (w.authorIds ? w.authorIds.includes(filterAuthor) : w.authorId === filterAuthor)
          : true;
        const matchStatus = filterStatus ? w.contentStatus === filterStatus : true;
        return matchAuthor && matchStatus;
      })
      .sort((a, b) => a.title.localeCompare(b.title));
  }, [filterAuthor, filterStatus]);

  const getRightsStatus = (status: string) => {
    switch (status) {
      case 'unknown': return 'Hak Belum Diverifikasi';
      case 'public-domain': return 'Public Domain';
      case 'cc-by-sa': return 'CC BY-SA';
      case 'copyrighted': return 'Hak Cipta';
      case 'permission-required': return 'Memerlukan Izin';
      default: return status.toUpperCase();
    }
  };

  // Group works by author
  const groupedWorks = useMemo(() => {
    const groups: Record<string, typeof libraryWorks> = {};
    libraryWorks.forEach(work => {
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
      return aName.localeCompare(bName, 'id');
    });
  }, [libraryWorks]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pb-20">
      <SEO 
        title="Perpustakaan - Teks Asli Marxisme"
        description="Akses teks primer dan naskah asli dari tokoh-tokoh Marxis dunia."
      />
      
      <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-800 pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">Perpustakaan Teks Primer</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl">
            Akses langsung ke dokumen sumber, buku, dan pamflet karya tokoh Marxis klasik dan Indonesia.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-200 dark:border-gray-700 mb-8 flex flex-wrap gap-4 items-center shadow-sm">
          <select 
            value={filterAuthor} 
            onChange={e => setFilterAuthor(e.target.value)}
            className="flex-1 min-w-[200px] px-4 py-2 border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 dark:text-white"
          >
            <option value="">Semua Penulis</option>
            {[...authors].sort((a,b) => a.name.localeCompare(b.name, 'id')).map(a => <option key={a.id} value={a.id}>{a.name}</option>)}
          </select>

          <select 
            value={filterStatus} 
            onChange={e => setFilterStatus(e.target.value)}
            className="w-full md:w-auto px-4 py-2 border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 dark:text-white"
          >
            <option value="">Semua Status Tersedia</option>
            <option value="complete">Teks Lengkap Tersedia</option>
            <option value="partial">Teks Sebagian Tersedia</option>
            <option value="external-only">MIA Saja</option>
            <option value="not-started">Belum Diimpor</option>
          </select>
        </div>

        <div className="space-y-12">
          {groupedWorks.map(([authorId, authorWorks]) => {
            const author = authors.find(a => a.id === authorId);
            return (
              <div key={authorId} className="scroll-mt-24" id={`author-${authorId}`}>
                <div className="flex items-center gap-4 mb-6 border-b border-gray-200 dark:border-gray-700 pb-2">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {author?.name || 'Penulis Tidak Diketahui'}
                  </h2>
                  <span className="text-sm font-medium text-gray-500 bg-gray-100 dark:bg-gray-700 dark:text-gray-300 px-3 py-1 rounded-full">
                    {authorWorks.length} karya
                  </span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {authorWorks.map(work => {
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
                    const isAvailable = availability === 'available' || availability === 'partial';
                    const linkTarget = isAvailable ? `/baca/${work.slug}` : `/karya/${work.slug}`;
                    
                    return (
                      <Link key={work.id} to={linkTarget} className="flex flex-col bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:border-red-500 dark:hover:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 hover:shadow-md transition-all group">
                        <div className="flex items-center justify-between mb-4">
                          <Book className="w-6 h-6 text-red-600 dark:text-red-400" />
                          <span className={`text-xs font-bold px-2 py-1 rounded ${
                            availability === 'available' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' : 
                            availability === 'partial' ? 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400' :
                            availability === 'not-imported' ? 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300' :
                            availability === 'rights-unverified' ? 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400' :
                            'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400' // external
                          }`}>
                            {availability === 'available' && 'TEKS LENGKAP'}
                            {availability === 'partial' && 'TEKS SEBAGIAN'}
                            {availability === 'not-imported' && 'BELUM DIIMPOR'}
                            {availability === 'rights-unverified' && 'HAK BELUM DIVERIFIKASI'}
                            {availability === 'external-only' && 'MIA SAJA'}
                          </span>
                          {work.sourceFormat === 'pdf' && (
                            <span className="text-xs font-bold px-2 py-1 rounded bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400 flex items-center gap-1">
                              PDF
                            </span>
                          )}
                          {work.sourceFormat === 'multi-pdf' && (
                            <span className="text-xs font-bold px-2 py-1 rounded bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400 flex items-center gap-1">
                              PDF Beberapa Bagian
                            </span>
                          )}
                          {work.sourceFormat === 'html' && (
                            <span className="text-xs font-bold px-2 py-1 rounded bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400 flex items-center gap-1">
                              Arsip HTML
                            </span>
                          )}
                          {work.sourceFormat === 'multi-html' && (
                            <span className="text-xs font-bold px-2 py-1 rounded bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400 flex items-center gap-1">
                              Arsip Multi-Bab
                            </span>
                          )}
                          {(!work.sourceFormat && resolveMiaSource(work.miaUrl).type === 'missing') && (
                            <span className="text-xs font-bold px-2 py-1 rounded bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-400 flex items-center gap-1">
                              Sumber Lokal Belum Tersedia
                            </span>
                          )}
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-red-600 transition-colors mb-2 line-clamp-3" title={work.title}>{work.title}</h3>
                        <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">{work.year || 'Tahun tidak diketahui'}</p>
                        
                        <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-700 flex flex-col gap-2">
                          <span className="text-gray-500 text-xs mb-1 truncate" title={`Lisensi: ${getRightsStatus(work.rightsStatus)}`}>
                            LISENSI: {getRightsStatus(work.rightsStatus).toUpperCase()}
                          </span>
                          
                          <div className="flex flex-wrap gap-2">
                            {isAvailable ? (
                              <span className="flex-1 text-center bg-red-600 hover:bg-red-700 text-white font-medium py-1.5 px-3 rounded text-sm transition-colors">
                                {work.fullTextEnabled ? 'Baca Tulisan' : (work.sourceFormat === 'pdf' || work.sourceFormat === 'multi-pdf' ? 'Buka PDF' : 'Buka Arsip')}
                              </span>
                            ) : (
                              <span className="flex-1 text-center bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 font-medium py-1.5 px-3 rounded text-sm transition-colors">
                                Lihat Detail Karya
                              </span>
                            )}
                            
                            {work.miaUrl && (
                              <a 
                                href={work.miaUrl} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                onClick={e => e.stopPropagation()}
                                className="flex-1 text-center bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 font-medium py-1.5 px-3 rounded border border-gray-200 dark:border-gray-600 text-sm transition-colors"
                              >
                                MIA ↗
                              </a>
                            )}
                          </div>
                        </div>
                      </Link>
                    )
                  })}
                </div>
              </div>
            );
          })}
          
          {libraryWorks.length === 0 && (
            <div className="py-20 text-center text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
              Belum ada karya yang sesuai dengan filter.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
