import { useParams, Link } from 'react-router-dom';
import { Bookmark, BookmarkCheck, BookOpen } from 'lucide-react';
import { authors } from '../data/authors';
import { getCanonicalWorks } from '../lib/canonicalWorks';
import { useProgress } from '../hooks/useProgress';
import { SEO } from '../components/ui/SEO';

export function AuthorDetail() {
  const { slug } = useParams();
  const author = authors.find(a => a.slug === slug);
  const { toggleBookmark, isBookmarked } = useProgress();

  if (!author) {
    return <div className="text-center py-20 dark:text-white">Tokoh tidak ditemukan</div>;
  }

  const authorWorks = getCanonicalWorks().filter(w => w.authorId === author.id || w.authorIds?.includes(author.id));
  const bookmarked = isBookmarked('Authors', author.id);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <SEO title={author.name} description={author.shortBio} type="profile" />
      <nav className="flex text-sm text-gray-500 dark:text-gray-400 mb-8" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li className="inline-flex items-center">
            <Link to="/" className="hover:text-red-600 dark:hover:text-red-400 transition-colors">Beranda</Link>
          </li>
          <li>
            <div className="flex items-center">
              <span className="mx-2">/</span>
              <Link to="/tokoh" className="hover:text-red-600 dark:hover:text-red-400 transition-colors">Tokoh</Link>
            </div>
          </li>
          <li aria-current="page">
            <div className="flex items-center">
              <span className="mx-2">/</span>
              <span className="text-gray-900 dark:text-gray-200 font-medium">{author.name}</span>
            </div>
          </li>
        </ol>
      </nav>

      <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-10 border border-gray-200 dark:border-gray-700 shadow-sm mb-12 relative overflow-hidden">
        <div className="flex flex-col md:flex-row gap-8 relative z-10">
          <div className="w-full md:w-1/3 flex-shrink-0">
            <div className="aspect-[3/4] rounded-xl overflow-hidden bg-gray-200 dark:bg-gray-700">
                {author.image ? (
                  <img 
                    src={author.image} 
                    alt={author.name} 
                    loading="lazy"
                    className="w-full h-full object-cover grayscale"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      const fallbackDiv = e.currentTarget.nextElementSibling as HTMLElement;
                      if (fallbackDiv) fallbackDiv.style.display = 'flex';
                    }}
                  />
                ) : null}
                <div 
                  className="w-full h-full flex items-center justify-center text-6xl text-gray-400"
                  style={{ display: author.image ? 'none' : 'flex' }}
                >
                  {author.name.charAt(0)}
                </div>
              </div>
            </div>
          <div className="flex-1 space-y-6">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2">{author.name}</h1>
                <p className="text-lg text-gray-500 dark:text-gray-400 font-medium">
                  {author.fullName} ({author.birthYear} - {author.deathYear})
                </p>
                <p className="text-gray-500 dark:text-gray-400">{author.nationality}</p>
              </div>
              <button 
                onClick={() => toggleBookmark('Authors', author.id)}
                className="p-2 text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors bg-gray-100 dark:bg-gray-700 rounded-full"
                title={bookmarked ? "Hapus Bookmark" : "Bookmark Tokoh"}
              >
                {bookmarked ? <BookmarkCheck className="w-6 h-6 text-red-600 dark:text-red-400" /> : <Bookmark className="w-6 h-6" />}
              </button>
            </div>

            <div className="prose prose-lg dark:prose-invert max-w-[800px]">
              <p className="text-xl font-medium leading-relaxed">{author.shortBio}</p>
              <p>{author.biography}</p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-3">Tema Utama</h3>
              <div className="flex flex-wrap gap-2">
                {author.themes.map(theme => (
                  <span key={theme} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm rounded-full">
                    {theme}
                  </span>
                ))}
              </div>
            </div>
            
            {author.sources.length > 0 && (
              <div>
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-2">Sumber MIA</h3>
                <div className="flex flex-wrap gap-2">
                  {author.sources.map(src => (
                     <a key={src} href={src} target="_blank" rel="noopener noreferrer" className="text-red-600 dark:text-red-400 hover:underline text-sm break-all">
                       {src}
                     </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <BookOpen className="w-6 h-6 text-red-600 dark:text-red-500" /> Daftar Karya ({authorWorks.length})
        </h2>
        
        {authorWorks.length > 0 ? (
          <div className="space-y-4">
            {authorWorks.map(work => (
              <Link key={work.id} to={`/karya/${work.slug}`} className="block bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-red-300 dark:hover:border-red-800 hover:shadow-md transition-all group">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                      {work.title}
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">{work.year} • {work.category}</p>
                  </div>
                  <div className="flex items-center gap-2">
                     <span className={`px-2 py-1 text-xs font-medium rounded-md ${
                        work.difficulty === 'Pemula' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' :
                        work.difficulty === 'Menengah' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400' :
                        'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
                     }`}>
                       {work.difficulty}
                     </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-dashed border-gray-300 dark:border-gray-700 text-gray-500 dark:text-gray-400">
            Belum ada karya yang dimasukkan ke dalam ensiklopedia ini.
          </div>
        )}
      </div>
    </div>
  );
}
