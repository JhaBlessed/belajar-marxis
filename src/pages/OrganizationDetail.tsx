import { useParams, Link, Navigate } from 'react-router-dom';
import { Users, Calendar, ArrowLeft } from 'lucide-react';
import { organizations } from '../data/organizations';
import { authors } from '../data/authors';
import { sources } from '../data/sources';
import { SourceReferences } from '../components/ui/SourceReferences';
import { SEO } from '../components/ui/SEO';

export function OrganizationDetail() {
  const { slug } = useParams();
  const org = organizations.find(o => o.slug === slug);

  if (!org) {
    return <Navigate to="/organisasi" replace />;
  }

  const orgAuthors = (org.relatedAuthorIds || []).map(authorId => authors.find(a => a.id === authorId)).filter(Boolean);
  
  // Resolve source references
  const orgSources = (org.sourceIds || []).map(id => sources.find(s => s.id === id)).filter(Boolean).map(s => ({
    name: s!.name,
    url: s!.url,
    type: s!.type
  }));

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <SEO title={org.name} description={org.description} />
      
      <Link to="/organisasi" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-red-600 mb-8 transition-colors">
        <ArrowLeft className="w-4 h-4 mr-1" /> Kembali ke Organisasi
      </Link>

      <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 md:p-12 border border-gray-200 dark:border-gray-700 shadow-sm mb-12">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 rounded-2xl bg-red-100 dark:bg-red-900/30 flex items-center justify-center text-red-600 dark:text-red-400">
            <Users className="w-8 h-8" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{org.name}</h1>
            <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-gray-500 dark:text-gray-400">
              {org.abbreviation && (
                <span className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-md">{org.abbreviation}</span>
              )}
              <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {org.foundedYear} - {org.dissolvedYear || 'Sekarang'}</span>
            </div>
          </div>
        </div>

        <div className="prose dark:prose-invert max-w-none text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
          <p>{org.description}</p>
        </div>
        
        <SourceReferences sources={orgSources} confidence={org.metadataConfidence} />
      </div>

      {orgAuthors.length > 0 && (
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Tokoh Terkait</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {orgAuthors.map(author => (
              <Link key={author!.id} to={`/tokoh/${author!.slug}`} className="flex items-center gap-3 bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-red-500 transition-colors group">
                <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden shrink-0">
                  {author!.image ? (
                    <img src={author!.image} alt={author!.name} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center font-bold text-gray-400">{author!.name.charAt(0)}</div>
                  )}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white group-hover:text-red-600">{author!.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
