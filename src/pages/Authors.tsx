import { Link } from 'react-router-dom';
import { authors } from '../data/authors';
import { SEO } from '../components/ui/SEO';

export function Authors() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <SEO title="Tokoh Marxis" description="Jelajahi kehidupan, pemikiran, dan kontribusi para tokoh utama dalam tradisi Marxis." />
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Tokoh Marxis</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Jelajahi kehidupan, pemikiran, dan kontribusi para tokoh utama dalam tradisi Marxis yang karyanya tersedia dalam bahasa Indonesia.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {authors.map(author => (
          <Link key={author.id} to={`/tokoh/${author.slug}`} className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm hover:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 hover:shadow-lg transition-all flex flex-col">
            <div className="aspect-video w-full bg-gray-200 dark:bg-gray-700 overflow-hidden relative">
              {author.image ? (
                <img src={author.image} alt={author.name} className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500" />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-4xl text-gray-400 font-bold">
                  {author.name.charAt(0)}
                </div>
              )}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white">
                <h2 className="text-xl font-bold">{author.name}</h2>
                <p className="text-sm opacity-90">{author.birthYear} - {author.deathYear}</p>
              </div>
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                {author.shortBio}
              </p>
              <div className="mt-auto">
                <div className="flex flex-wrap gap-2">
                  {author.themes.slice(0, 3).map(theme => (
                    <span key={theme} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-md">
                      {theme}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
