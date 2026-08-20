import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
              Belajar Marxis
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4 max-w-md">
              Proyek pendidikan independen untuk membantu masyarakat Indonesia mempelajari karya-karya Marxis secara lebih terstruktur dan kritis.
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-500">
              <strong>Disclaimer:</strong> Belajar Marxis adalah proyek pendidikan independen dan bukan bagian resmi Marxists Internet Archive.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-4">Navigasi</h4>
            <ul className="space-y-2">
              <li><Link to="/tentang" className="text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors">Tentang</Link></li>
              <li><Link to="/glosarium" className="text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors">Glosarium</Link></li>
              <li><Link to="/tersimpan" className="text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors">Tersimpan</Link></li>
              <li><Link to="/progres" className="text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors">Progress Belajar</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-4">Tautan Luar</h4>
            <ul className="space-y-2">
              <li><a href="https://www.marxists.org/indonesia/" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors">Marxists Internet Archive</a></li>
              <li><a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors">GitHub Repository</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Belajar Marxis. Dibuat untuk tujuan pendidikan.</p>
        </div>
      </div>
    </footer>
  );
}
