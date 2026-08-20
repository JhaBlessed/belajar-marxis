import * as fs from 'fs';

let code = fs.readFileSync('src/pages/WorkDetail.tsx', 'utf8');

const regex = /\{\/\* ACTION BUTTONS \(READ \/ MIA\) \*\/\}[\s\S]*?(?=\{\/\* STATUS TEKS PRIMER)/;

const replacement = `{/* ACTION BUTTONS (READ / MIA) */}
          <div className="flex flex-col gap-4 mb-8">
            {work.sourceFormat ? (
              <div className="flex flex-col gap-3">
                <h3 className="font-bold text-gray-900 dark:text-white mb-2 uppercase tracking-wide text-sm opacity-80">SUMBER TEKS PRIMER</h3>
                
                {work.sourceFormat === 'pdf' && work.localSourcePath && (
                  <a href={work.localSourcePath} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-6 rounded-lg transition-colors shadow-sm">
                    <BookOpen className="w-5 h-5" /> BUKA PDF SUMBER
                  </a>
                )}
                
                {work.sourceFormat === 'html' && work.localSourcePath && (
                  <a href={work.localSourcePath} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-6 rounded-lg transition-colors shadow-sm">
                    <BookOpen className="w-5 h-5" /> BUKA SUMBER
                  </a>
                )}
                
                {work.sourceFormat === 'multi-pdf' && work.localSourceParts && (
                  <div className="flex flex-col gap-3">
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Bagian tersedia:</p>
                    {work.localSourceParts.map((part, idx) => (
                      <a key={idx} href={part.path} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between bg-red-50 hover:bg-red-100 dark:bg-red-900/20 dark:hover:bg-red-900/40 text-red-700 dark:text-red-300 font-bold py-3 px-6 rounded-lg transition-colors border border-red-200 dark:border-red-800/50">
                        <div className="flex items-center gap-2">
                          <BookOpen className="w-5 h-5" /> {part.title.toUpperCase()}
                        </div>
                        <span className="bg-red-200 dark:bg-red-900/60 text-red-800 dark:text-red-200 text-xs px-2 py-0.5 rounded-full">PDF</span>
                      </a>
                    ))}
                  </div>
                )}
                
                {work.sourceFormat === 'external' && source.type !== 'missing' && (
                  <a href={source.url!} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 hover:bg-gray-200 text-gray-800 dark:text-gray-100 font-bold py-4 px-6 rounded-lg transition-colors">
                    LIHAT SUMBER MIA <ExternalLink className="w-4 h-4" />
                  </a>
                )}
                
                {(!work.localSourcePath && !work.localSourceParts && work.sourceFormat !== 'external') && (
                  <button disabled className="flex items-center justify-center gap-2 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-400 font-bold py-4 px-6 rounded-lg cursor-not-allowed">
                    SUMBER BELUM TERSEDIA
                  </button>
                )}
              </div>
            ) : (
              <div className="flex flex-col gap-4">
                {availability === 'available' && work.format !== 'multi-pdf' && (
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link 
                      to={\`/baca/\${work.slug}\`}
                      className="flex-1 flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-colors shadow-sm">
                      <BookOpen className="w-5 h-5" /> BACA TULISAN
                      <span className="bg-red-800 text-xs px-2 py-0.5 rounded-full ml-2">TEKS LENGKAP</span>
                    </Link>
                    {source.type === 'local' && (
                      <a href={source.url!} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-100 font-bold py-3 px-6 rounded-lg transition-colors">
                        BACA ARSIP LOKAL <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                    {source.type === 'external' && (
                      <a href={source.url!} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 font-bold py-3 px-6 rounded-lg transition-colors">
                        LIHAT SUMBER MIA <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                    {source.type === 'missing' && (
                      <button disabled className="flex-1 flex items-center justify-center gap-2 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-400 font-bold py-3 px-6 rounded-lg cursor-not-allowed">
                        SUMBER BELUM TERSEDIA
                      </button>
                    )}
                  </div>
                )}
                
                {availability === 'available' && work.format === 'multi-pdf' && (
                  <div className="flex flex-col gap-3">
                    <h3 className="font-bold text-gray-900 dark:text-white mb-2">Bagian Tersedia:</h3>
                    {work.parts?.map(part => (
                      <Link 
                        key={part.number}
                        to={\`/baca/\${work.slug}/bagian-\${part.number}\`}
                        className="flex items-center justify-between bg-red-50 hover:bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-300 font-bold py-3 px-6 rounded-lg transition-colors border border-red-200 dark:border-red-800/50">
                        <div className="flex items-center gap-2">
                          <BookOpen className="w-5 h-5" /> BACA {part.title.toUpperCase()}
                        </div>
                        <span className="bg-red-200 dark:bg-red-900/60 text-red-800 text-xs px-2 py-0.5 rounded-full">PDF</span>
                      </Link>
                    ))}
                  </div>
                )}
                
                {availability === 'partial' && (
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link to={\`/baca/\${work.slug}\`} className="flex-1 flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-6 rounded-lg transition-colors shadow-sm">
                      <BookOpen className="w-5 h-5" /> BACA TULISAN
                      <span className="bg-amber-800 text-xs px-2 py-0.5 rounded-full ml-2">SEBAGIAN</span>
                    </Link>
                    {source.type === 'local' && (
                      <a href={source.url!} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 hover:bg-gray-200 text-gray-800 dark:text-gray-100 font-bold py-3 px-6 rounded-lg transition-colors">
                        BACA ARSIP LOKAL <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                    {source.type === 'external' && (
                      <a href={source.url!} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 text-gray-700 dark:text-gray-200 font-bold py-3 px-6 rounded-lg transition-colors">
                        LIHAT SUMBER MIA <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                )}
                
                {availability === 'external-only' && source.type !== 'missing' && (
                  <a href={source.url!} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 hover:bg-gray-200 text-gray-800 dark:text-gray-100 font-bold py-4 px-6 rounded-lg transition-colors">
                    LIHAT SUMBER MIA <ExternalLink className="w-4 h-4" />
                  </a>
                )}
                
                {(availability === 'not-imported' || availability === 'rights-unverified' || source.type === 'missing') && !work.sourceFormat && (
                  <button disabled className="flex items-center justify-center gap-2 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-400 font-bold py-4 px-6 rounded-lg cursor-not-allowed">
                    SUMBER BELUM TERSEDIA
                  </button>
                )}
              </div>
            )}
          </div>

            `;
code = code.replace(regex, replacement);
fs.writeFileSync('src/pages/WorkDetail.tsx', code);
console.log('WorkDetail actions updated');
