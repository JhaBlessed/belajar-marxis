export function IdeaMap() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Peta Gagasan</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Aliran transmisi ide dan perkembangan teori Marxis dari generasi ke generasi.
        </p>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 overflow-x-auto">
        <div className="min-w-[800px] flex flex-col items-center space-y-8 py-8">
          
          {/* Node: Hegel / Klasik */}
          <div className="flex gap-16 justify-center w-full">
            <div className="px-6 py-3 bg-gray-100 dark:bg-gray-700 rounded-lg text-center shadow">
              <span className="font-bold text-gray-800 dark:text-gray-200 block">Filsafat Hegel</span>
            </div>
            <div className="px-6 py-3 bg-gray-100 dark:bg-gray-700 rounded-lg text-center shadow">
              <span className="font-bold text-gray-800 dark:text-gray-200 block">Ekonomi Politik Inggris</span>
            </div>
            <div className="px-6 py-3 bg-gray-100 dark:bg-gray-700 rounded-lg text-center shadow">
              <span className="font-bold text-gray-800 dark:text-gray-200 block">Sosialisme Prancis</span>
            </div>
          </div>

          <div className="h-8 border-l-2 border-dashed border-gray-400"></div>

          {/* Node: Marx & Engels */}
          <div className="px-8 py-4 bg-red-600 text-white rounded-xl text-center shadow-lg transform scale-110">
            <span className="font-extrabold text-xl block">Karl Marx & Friedrich Engels</span>
            <span className="text-sm opacity-90">Sintesis Marxisme Klasik</span>
          </div>

          <div className="h-8 border-l-2 border-gray-400"></div>
          
          <div className="w-full max-w-3xl border-t-2 border-gray-400 h-8 flex justify-between">
            <div className="border-l-2 border-gray-400 h-8"></div>
            <div className="border-l-2 border-gray-400 h-8"></div>
            <div className="border-l-2 border-gray-400 h-8"></div>
          </div>

          {/* Node: Generasi ke-2 */}
          <div className="flex justify-between w-full max-w-4xl gap-4">
            <div className="px-6 py-3 bg-blue-500 text-white rounded-lg text-center w-48 shadow">
              <span className="font-bold block">Plekhanov</span>
              <span className="text-xs opacity-90">Marxisme Rusia</span>
            </div>
            <div className="px-6 py-3 bg-orange-500 text-white rounded-lg text-center w-48 shadow">
              <span className="font-bold block">Rosa Luxemburg</span>
              <span className="text-xs opacity-90">Spontanitas & Anti-reformisme</span>
            </div>
            <div className="px-6 py-3 bg-green-600 text-white rounded-lg text-center w-48 shadow">
              <span className="font-bold block">Kautsky</span>
              <span className="text-xs opacity-90">Ortodoksi Internasional ke-2</span>
            </div>
          </div>

          <div className="h-8 flex justify-start w-full max-w-4xl pl-24">
             <div className="border-l-2 border-gray-400 h-8"></div>
          </div>

          {/* Node: Lenin & Trotsky */}
          <div className="flex justify-start w-full max-w-4xl gap-8 pl-8">
            <div className="px-8 py-4 bg-red-700 text-white rounded-xl text-center shadow-lg">
              <span className="font-extrabold text-lg block">V. I. Lenin</span>
              <span className="text-sm opacity-90">Bolshevisme & Komintern</span>
            </div>
            <div className="px-8 py-4 bg-red-800 text-white rounded-xl text-center shadow-lg">
              <span className="font-extrabold text-lg block">Leon Trotsky</span>
              <span className="text-sm opacity-90">Revolusi Permanen</span>
            </div>
          </div>

          <div className="h-8 flex justify-start w-full max-w-4xl pl-28">
             <div className="border-l-2 border-gray-400 h-8"></div>
          </div>

          {/* Node: Ekstensi Global */}
          <div className="w-full max-w-3xl border-t-2 border-gray-400 h-8 flex justify-between ml-12">
            <div className="border-l-2 border-gray-400 h-8"></div>
            <div className="border-l-2 border-gray-400 h-8"></div>
            <div className="border-l-2 border-gray-400 h-8"></div>
          </div>

          <div className="flex justify-between w-full max-w-4xl gap-4 ml-12">
            <div className="px-6 py-3 bg-teal-600 text-white rounded-lg text-center w-48 shadow">
              <span className="font-bold block">Tan Malaka</span>
              <span className="text-xs opacity-90">Indonesia / Madilog</span>
            </div>
            <div className="px-6 py-3 bg-yellow-600 text-white rounded-lg text-center w-48 shadow">
              <span className="font-bold block">Chen Duxiu</span>
              <span className="text-xs opacity-90">Tiongkok</span>
            </div>
            <div className="px-6 py-3 bg-purple-600 text-white rounded-lg text-center w-48 shadow">
              <span className="font-bold block">Che Guevara</span>
              <span className="text-xs opacity-90">Kuba / Amerika Latin</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
