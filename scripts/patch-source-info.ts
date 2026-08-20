import * as fs from 'fs';

let code = fs.readFileSync('src/pages/WorkDetail.tsx', 'utf8');

const sourceInfoBlock = `{work.sourceType === 'MIA_LOCAL_ARCHIVE' && (
              <div className="mb-10 bg-gray-50 dark:bg-gray-900/40 border border-gray-200 dark:border-gray-700 rounded-xl p-5 sm:p-6 text-sm text-gray-700 dark:text-gray-300">
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">Informasi Sumber</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <span className="font-medium block opacity-75">Sumber Arsip:</span>
                    Marxists Internet Archive - Seksi Bahasa Indonesia
                  </div>
                  <div>
                    <span className="font-medium block opacity-75">Sumber Lokal:</span>
                    sumber.zip
                  </div>
                  {work.format === 'multi-pdf' && (
                    <div className="sm:col-span-2">
                      <span className="font-medium block opacity-75">File Lokal:</span>
                      <ul className="list-disc list-inside opacity-90 mt-1">
                        {work.parts?.map(p => (
                          <li key={p.number}>{p.localPath.split('/').pop()}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            )}`;

const regex = /\{\/\* STATUS TEKS PRIMER/;
code = code.replace(regex, sourceInfoBlock + '\n\n            {/* STATUS TEKS PRIMER');
fs.writeFileSync('src/pages/WorkDetail.tsx', code);
