import { useState, useEffect } from 'react';

type ProgressStatus = 'Belum Dibaca' | 'Sedang Dibaca' | 'Selesai';

interface ProgressData {
  works: Record<string, ProgressStatus>;
  bookmarkedWorks: string[];
  bookmarkedAuthors: string[];
  bookmarkedConcepts: string[];
}

const defaultProgress: ProgressData = {
  works: {},
  bookmarkedWorks: [],
  bookmarkedAuthors: [],
  bookmarkedConcepts: []
};

export function useProgress() {
  const [progress, setProgress] = useState<ProgressData>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('mia_progress');
      if (saved) {
        try {
          return JSON.parse(saved);
        } catch (e) {
          return defaultProgress;
        }
      }
    }
    return defaultProgress;
  });

  useEffect(() => {
    localStorage.setItem('mia_progress', JSON.stringify(progress));
  }, [progress]);

  const setWorkStatus = (workId: string, status: ProgressStatus) => {
    setProgress(prev => ({
      ...prev,
      works: {
        ...prev.works,
        [workId]: status
      }
    }));
  };

  const toggleBookmark = (type: 'Works' | 'Authors' | 'Concepts', id: string) => {
    setProgress(prev => {
      const key = `bookmarked${type}` as keyof ProgressData;
      const list = prev[key] as string[];
      if (list.includes(id)) {
        return { ...prev, [key]: list.filter(item => item !== id) };
      } else {
        return { ...prev, [key]: [...list, id] };
      }
    });
  };

  const isBookmarked = (type: 'Works' | 'Authors' | 'Concepts', id: string) => {
    const key = `bookmarked${type}` as keyof ProgressData;
    const list = progress[key] as string[];
    return list.includes(id);
  };

  return { progress, setWorkStatus, toggleBookmark, isBookmarked };
}
