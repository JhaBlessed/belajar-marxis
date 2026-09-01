import { useParams, Link } from 'react-router-dom';
import { Bookmark, BookmarkCheck, BookOpen, Users } from 'lucide-react';
import { concepts } from '../data/concepts';
import { authors } from '../data/authors';
import { getCanonicalWorks } from '../lib/canonicalWorks';
import { useProgress } from '../hooks/useProgress';
import { SEO } from '../components/ui/SEO';

export function ConceptDetail() {
  const { slug } = useParams();
  const concept = concepts.find(c => c.slug === slug);
  const { toggleBookmark, isBookmarked } = useProgress();

  if (!concept) {
    return <div className="text-center py-20 dark:text-white">Konsep tidak ditemukan</div>;
  }

  const bookmarked = isBookmarked('Concepts', concept.id);
  const relatedAuthors = authors.filter(a => concept.authors.includes(a.id));
  const relatedWorks = getCanonicalWorks().filter(w => concept.works.includes(w.id));
  const otherConcepts = concepts.filter(c => concept.relatedConcepts.includes(c.id));

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <SEO title={concept.name} description={concept.shortDefinition} type="article" />
      <nav className="flex text-sm text-gray-500 dark:text-gray-400 mb-8" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li className="inline-flex items-center">
            <Link to="/" className="hover:text-red-600 dark:hover:text-red-400 transition-colors">Beranda</Link>
          </li>
          <li>
            <div className="flex items-center">
              <span className="mx-2">/</span>
              <Link to="/konsep" className="hover:text-red-600 dark:hover:text-red-400 transition-colors">Konsep</Link>
            </div>
          </li>
          <li aria-current="page">
            <div className="flex items-center">
              <span className="mx-2">/</span>
              <span className="text-gray-900 dark:text-gray-200 font-medium">{concept.name}</span>
            </div>
          </li>
        </ol>
      </nav>

      <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 md:p-12 border border-gray-200 dark:border-gray-700 shadow-sm mb-12 relative">
        <div className="flex justify-between items-start mb-6">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white">{concept.name}</h1>
          <button 
            onClick={() => toggleBookmark('Concepts', concept.id)}
            className="p-2 text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors bg-gray-100 dark:bg-gray-700 rounded-full"
            title={bookmarked ? "Hapus Bookmark" : "Bookmark Konsep"}
          >
            {bookmarked ? <BookmarkCheck className="w-6 h-6 text-red-600 dark:text-red-400" /> : <Bookmark className="w-6 h-6" />}
          </button>
        </div>

        <p className="text-xl text-gray-600 dark:text-gray-300 font-medium mb-10 border-l-4 border-red-500 pl-4">
          {concept.shortDefinition}
        </p>

        <div className="prose prose-lg dark:prose-invert max-w-[800px] space-y-8">
          <div>
            <h2 className="text-2xl font-bold border-b pb-2 mb-4">Definisi Mendalam</h2>
            <p>{concept.definition}</p>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold border-b pb-2 mb-4">Sejarah Konsep</h2>
            <p>{concept.history}</p>
          </div>

          {concept.debates && (
            <div>
              <h2 className="text-2xl font-bold border-b pb-2 mb-4">Perdebatan Terkait</h2>
              <p>{concept.debates}</p>
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <Users className="w-5 h-5 text-red-600" /> Tokoh Terkait
          </h3>
          <div className="space-y-3">
            {relatedAuthors.map(a => (
              <Link key={a.id} to={`/tokoh/${a.slug}`} className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-red-400 transition-colors">
                <span className="font-semibold text-gray-900 dark:text-white">{a.name}</span>
              </Link>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-red-600" /> Karya Terkait
          </h3>
          <div className="space-y-3">
            {relatedWorks.map(w => (
              <Link key={w.id} to={`/karya/${w.slug}`} className="block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-red-400 transition-colors">
                <span className="font-semibold text-gray-900 dark:text-white block mb-1">{w.title}</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">{w.year}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {otherConcepts.length > 0 && (
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Konsep Serupa</h3>
          <div className="flex flex-wrap gap-2">
            {otherConcepts.map(c => (
              <Link key={c.id} to={`/konsep/${c.slug}`} className="px-4 py-2 bg-gray-100 dark:bg-gray-800 hover:bg-red-50 dark:hover:bg-red-900/30 text-gray-800 dark:text-gray-200 hover:text-red-600 dark:hover:text-red-400 rounded-lg transition-colors">
                {c.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
