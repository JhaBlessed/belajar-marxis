import * as fs from 'fs';

let code = fs.readFileSync('src/pages/WorkDetail.tsx', 'utf8');

const regex = /\{\/\* ACTION BUTTONS \(READ \/ MIA\) \*\/\}[\s\S]*?(?=\{\/\* STATUS TEKS PRIMER)/;

const replacement = `{/* ACTION BUTTONS (READ / MIA) */}
          <div className="flex flex-col gap-4 mb-8">
            {(availability === 'available' || availability === 'partial') && work.format !== 'multi-pdf' && (
              <Link 
                to={\`/baca/\${work.slug}\`}
                className={\`flex items-center justify-center gap-2 text-white font-bold py-4 px-6 rounded-lg transition-colors shadow-sm \${availability === 'partial' ? 'bg-amber-600 hover:bg-amber-700' : 'bg-red-600 hover:bg-red-700'}\`}
              >
                <BookOpen className="w-5 h-5" /> BACA TULISAN
                <span className={\`text-xs px-2 py-0.5 rounded-full ml-2 \${availability === 'partial' ? 'bg-amber-800' : 'bg-red-800'}\`}>
                  {availability === 'partial' ? 'SEBAGIAN' : 'TEKS LENGKAP'}
                </span>
              </Link>
            )}
            
            {work.sourceFormat ? (
              <div className="flex flex-col gap-3">
                <h3 className="font-bold text-gray-900 dark:text-white mb-2 uppercase tracking-wide text-sm opacity-80 mt-2">SUMBER ARSIP</h3>
                
                {(work.sourceFormat === 'pdf' || work.sourceFormat === 'html') && work.localSourcePath && (
                  <a href={work.localSourcePath} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-100 font-bold py-3 px-6 rounded-lg transition-colors">
                    {work.sourceFormat === 'pdf' ? <><BookOpen className="w-4 h-4" /> BUKA PDF SUMBER</> : <><ExternalLink className="w-4 h-4" /> BUKA ARSIP LOKAL</>}
                  </a>
                )}
                
                {(work.sourceFormat === 'multi-pdf' || work.sourceFormat === 'multi-html') && work.localSourceParts && (
                  <div className="flex flex-col gap-3">
                    {work.localSourceParts.map((part, idx) => (
                      <a key={idx} href={part.path} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-100 font-bold py-3 px-6 rounded-lg transition-colors border border-gray-300 dark:border-gray-600">
                        <div className="flex items-center gap-2">
                          <BookOpen className="w-5 h-5" /> {part.title.toUpperCase()}
                        </div>
                        <span className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs px-2 py-0.5 rounded-full">
                          {work.sourceFormat === 'multi-pdf' ? 'PDF' : 'HTML'}
                        </span>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ) : null}

            {(!work.localSourcePath && !work.localSourceParts) && (
              <div className="flex flex-col gap-3">
                <button disabled className="flex items-center justify-center gap-2 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-400 font-bold py-4 px-6 rounded-lg cursor-not-allowed">
                  Sumber lokal belum tersedia.
                </button>
                {work.miaUrl && (
                  <a href={work.miaUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200 font-bold py-3 px-6 rounded-lg transition-colors mt-2">
                    Lihat Sumber Online <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            )}
          </div>

            `;
code = code.replace(regex, replacement);
fs.writeFileSync('src/pages/WorkDetail.tsx', code);
console.log('WorkDetail actions patched');
