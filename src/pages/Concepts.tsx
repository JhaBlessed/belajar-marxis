import { Link } from 'react-router-dom';
import { concepts } from '../data/concepts';
import { SEO } from '../components/ui/SEO';

export function Concepts() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <SEO title="Konsep Kunci" description="Kamus ensiklopedis istilah dan konsep utama dalam teori Marxis." />
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Konsep Kunci</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Kamus ensiklopedis istilah dan konsep utama dalam teori Marxis.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {concepts.sort((a,b) => a.name.localeCompare(b.name)).map(concept => (
          <Link key={concept.id} to={`/konsep/${concept.slug}`} className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-red-500 dark:hover:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 hover:shadow-md transition-all group flex flex-col">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-red-600 transition-colors mb-3">
              {concept.name}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm flex-1">
              {concept.shortDefinition}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
