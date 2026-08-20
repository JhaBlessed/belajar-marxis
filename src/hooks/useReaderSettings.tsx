import { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';

export type FontSize = 'sm' | 'base' | 'lg';
export type ContentWidth = 'narrow' | 'normal' | 'wide';
export type Theme = 'light' | 'dark' | 'sepia';
export type LineHeight = 'normal' | 'comfortable' | 'loose';

interface ReaderContextType {
  fontSize: FontSize;
  setFontSize: (s: FontSize) => void;
  width: ContentWidth;
  setWidth: (w: ContentWidth) => void;
  theme: Theme;
  setTheme: (t: Theme) => void;
  lineHeight: LineHeight;
  setLineHeight: (lh: LineHeight) => void;
}

const ReaderContext = createContext<ReaderContextType | undefined>(undefined);

export function ReaderProvider({ children }: { children: ReactNode }) {
  const [fontSize, setFontSize] = useState<FontSize>(() => localStorage.getItem('reader_fontSize') as FontSize || 'base');
  const [width, setWidth] = useState<ContentWidth>(() => localStorage.getItem('reader_width') as ContentWidth || 'normal');
  const [theme, setTheme] = useState<Theme>(() => localStorage.getItem('reader_theme') as Theme || 'light');
  const [lineHeight, setLineHeight] = useState<LineHeight>(() => localStorage.getItem('reader_lineHeight') as LineHeight || 'comfortable');

  useEffect(() => { localStorage.setItem('reader_fontSize', fontSize); }, [fontSize]);
  useEffect(() => { localStorage.setItem('reader_width', width); }, [width]);
  useEffect(() => { localStorage.setItem('reader_theme', theme); }, [theme]);
  useEffect(() => { localStorage.setItem('reader_lineHeight', lineHeight); }, [lineHeight]);

  return (
    <ReaderContext.Provider value={{ fontSize, setFontSize, width, setWidth, theme, setTheme, lineHeight, setLineHeight }}>
      {children}
    </ReaderContext.Provider>
  );
}

export function useReaderSettings() {
  const context = useContext(ReaderContext);
  if (!context) throw new Error('useReaderSettings must be used within ReaderProvider');
  return context;
}
