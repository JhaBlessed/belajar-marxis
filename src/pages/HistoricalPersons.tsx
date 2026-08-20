import { Link } from 'react-router-dom';
import { historicalPersons } from '../data/historicalPersons';
import { SEO } from '../components/ui/SEO';

export function HistoricalPersons() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <SEO title="Tokoh Sejarah Marxisme Indonesia" description="Daftar tokoh sejarah dalam pergerakan Marxisme di Indonesia." />
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Tokoh Sejarah</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {historicalPersons.map(p => (
          <Link key={p.id} to={`/tokoh-sejarah/${p.slug}`} className="block bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-purple-500 transition-colors">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{p.name}</h2>
            {p.aliases.length > 1 && <p className="text-sm text-gray-500 mb-2">Alias: {p.aliases.slice(1).join(', ')}</p>}
          </Link>
        ))}
      </div>
    </div>
  );
}
