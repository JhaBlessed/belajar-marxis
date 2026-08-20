import { ExternalLink, Database, ShieldCheck, AlertCircle, FileText, Library, History } from 'lucide-react';
import { type MetadataConfidence } from '../../types';
import { resolveArchiveUrl } from '../../lib/archiveUrl';

interface Source {
  name: string;
  url?: string;
  type?: 'primary-text' | 'archive-index' | 'history-index' | 'author-archive' | 'portal' | 'history-local-archive';
  checkedAt?: string;
}

interface SourceReferencesProps {
  sources: Source[];
  confidence?: MetadataConfidence;
}

export function SourceReferences({ sources, confidence }: SourceReferencesProps) {
  if (!sources || sources.length === 0) return null;

  return (
    <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-4 border border-gray-100 dark:border-gray-700/50 mt-6">
      <div className="flex items-center gap-2 mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
        <Database className="w-4 h-4 text-gray-500" />
        <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300">Sumber Metadata & Provenance</h4>
        
        {confidence && (
          <div className="ml-auto flex items-center gap-1 text-xs font-medium">
            {confidence === 'high' ? (
              <span className="flex items-center gap-1 text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/30 px-2 py-0.5 rounded-full">
                <ShieldCheck className="w-3 h-3" /> Terverifikasi Utama
              </span>
            ) : confidence === 'medium' ? (
              <span className="flex items-center gap-1 text-yellow-600 dark:text-yellow-400 bg-yellow-50 dark:bg-yellow-900/30 px-2 py-0.5 rounded-full">
                <Library className="w-3 h-3" /> Bersumber dari Arsip
              </span>
            ) : (
              <span className="flex items-center gap-1 text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/30 px-2 py-0.5 rounded-full">
                <AlertCircle className="w-3 h-3" /> Belum Diverifikasi
              </span>
            )}
          </div>
        )}
      </div>
      
      <ul className="space-y-3">
        {sources.map((source, idx) => (
          <li key={idx} className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-3 text-sm">
            <span className="flex items-center gap-1.5 font-medium text-gray-700 dark:text-gray-300 min-w-[140px]">
              {source.type === 'primary-text' ? <FileText className="w-3.5 h-3.5 text-blue-500" /> :
               source.type === 'archive-index' ? <Library className="w-3.5 h-3.5 text-purple-500" /> :
               source.type === 'history-index' || source.type === 'history-local-archive' ? <History className="w-3.5 h-3.5 text-orange-500" /> :
               <Database className="w-3.5 h-3.5 text-gray-400" />}
              {source.type === 'primary-text' ? 'Sumber Primer' :
               source.type === 'archive-index' ? 'Katalog / Indeks' :
               source.type === 'history-index' || source.type === 'history-local-archive' ? 'Konteks Sejarah (Lokal)' : 'Portal Utama'}:
            </span>
            <div className="flex-1">
              {source.url ? (
                <a href={resolveArchiveUrl(source.url)} target="_blank" rel="noopener noreferrer" className="text-red-600 dark:text-red-400 hover:underline flex items-center gap-1">
                  {source.name} <ExternalLink className="w-3 h-3" />
                </a>
              ) : (
                <span className="text-gray-600 dark:text-gray-400">{source.name}</span>
              )}
              {source.checkedAt && (
                <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">Diperiksa: {source.checkedAt}</p>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
