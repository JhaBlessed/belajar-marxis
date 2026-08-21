import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, Moon, Sun, BookOpen, ChevronDown } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';
import { cn } from '../../lib/utils';

const mainLinks = [
  { name: 'Beranda', path: '/' },
  { name: 'Mulai Belajar', path: '/belajar' },
  { name: 'Tokoh', path: '/tokoh' },
  { name: 'Karya', path: '/karya' },
  { name: 'Perpustakaan', path: '/perpustakaan' },
  { name: 'Sejarah Indonesia', path: '/sejarah-indonesia' },
];

const exploreLinks = [
  { name: 'Konsep', path: '/konsep' },
  { name: 'Timeline', path: '/timeline' },
  { name: 'Tokoh Sejarah', path: '/tokoh-sejarah' },
  { name: 'Peta Gagasan', path: '/peta-gagasan' },
  { name: 'Organisasi', path: '/organisasi' },
  { name: 'Indonesia', path: '/indonesia' },
  { name: 'Glosarium', path: '/glosarium' },
  { name: 'Sumber', path: '/sumber' },
  { name: 'Tentang', path: '/tentang' },
];

export function Navbar({ onOpenSearch }: { onOpenSearch?: () => void }) {
  const { isDark, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isExploreOpen, setIsExploreOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsExploreOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsExploreOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="sticky top-0 z-40 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur border-b border-gray-200 dark:border-gray-800 print:hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-red-600 dark:text-red-500" />
            <span className="font-bold text-lg tracking-tight hidden sm:block">
              Belajar Marxis
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-4">
            {mainLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "px-3 py-2 rounded-md text-sm font-medium transition-colors hover:text-red-600 dark:hover:text-red-400",
                  (link.path === '/' ? location.pathname === '/' : location.pathname.startsWith(link.path))
                    ? "text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20"
                    : "text-gray-600 dark:text-gray-300"
                )}
              >
                {link.name}
              </Link>
            ))}
            
            {/* Jelajahi Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button 
                onClick={() => setIsExploreOpen(!isExploreOpen)}
                className="flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium transition-colors text-gray-600 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400"
              >
                Jelajahi <ChevronDown className="w-4 h-4" />
              </button>
              
              {isExploreOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg border border-gray-100 dark:border-gray-700 py-1 z-50">
                  {exploreLinks.map(link => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onOpenSearch}
              className="p-2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white rounded-md transition-colors"
              title="Search (Ctrl+K)"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={toggleTheme}
              className="p-2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white rounded-md transition-colors"
              title="Toggle Dark Mode"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white rounded-md"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 max-h-[80vh] overflow-y-auto">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {mainLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "block px-3 py-2 rounded-md text-base font-medium",
                  (link.path === '/' ? location.pathname === '/' : location.pathname.startsWith(link.path))
                    ? "text-red-600 bg-red-50 dark:text-red-400 dark:bg-red-900/20"
                    : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                )}
              >
                {link.name}
              </Link>
            ))}
            
            <div className="border-t border-gray-200 dark:border-gray-700 my-2 pt-2">
              <p className="px-3 py-1 text-xs font-semibold text-gray-400 uppercase tracking-wider">Jelajahi</p>
              {exploreLinks.map(link => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
