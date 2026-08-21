import { indonesiaTimeline } from '../generated/indonesiaTimeline';
import { SEO } from '../components/ui/SEO';
import { resolveArchiveUrl } from '../lib/archiveUrl';

export function SejarahIndonesia() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <SEO
        title="Sejarah Marxisme di Indonesia"
        description="Kronologi perkembangan Marxisme, organisasi, tokoh, dan peristiwa penting di Indonesia."
      />

      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Sejarah Marxisme di Indonesia
        </h1>

        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl">
          Jelajahi perkembangan gerakan Marxis di Indonesia melalui kronologi,
          tokoh, organisasi, peristiwa politik, dan sumber arsip sejarah.
        </p>

        <p className="text-sm text-gray-500 dark:text-gray-500 mt-4">
          {indonesiaTimeline.length} peristiwa sejarah tersedia.
        </p>
      </div>

      <div className="space-y-6">
        {indonesiaTimeline.map((event) => (
          <article
            key={event.id}
            className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-sm"
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
              <div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                  {event.title}
                </h2>

                {event.date && (
                  <p className="text-sm text-red-600 dark:text-red-400 font-medium mt-1">
                    {event.date}
                  </p>
                )}
              </div>
            </div>

            {event.description && (
              <p className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                {event.description}
              </p>
            )}

            {event.localSourcePath && (
              <div className="mt-5 pt-4 border-t border-gray-100 dark:border-gray-700">
                <a
                  href={resolveArchiveUrl(event.localSourcePath)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-lg transition-colors"
                >
                  Buka Sumber Arsip
                </a>
              </div>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}