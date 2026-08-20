import { Link } from 'react-router-dom';
import { Users } from 'lucide-react';
import { organizations } from '../data/organizations';
import { SEO } from '../components/ui/SEO';

export function Organizations() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <SEO title="Organisasi Marxis" description="Organisasi politik, serikat buruh, dan partai yang terkait dengan sejarah Marxisme." />
      
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Organisasi</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Jelajahi sejarah partai, serikat buruh, dan perkumpulan revolusioner yang mempraktikkan Marxisme dalam sejarah.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {organizations.map(org => (
          <Link key={org.id} to={`/organisasi/${org.slug}`} className="flex flex-col bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:border-red-500 dark:hover:border-red-500 hover:shadow-md transition-all group">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-red-100 dark:bg-red-900/30 flex items-center justify-center text-red-600 dark:text-red-400">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <h2 className="font-bold text-gray-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400">{org.abbreviation || org.name}</h2>
                <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                  {org.foundedYear} - {org.dissolvedYear || 'Sekarang'}
                </p>
              </div>
            </div>
            
            <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">{org.name}</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-3">
              {org.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
