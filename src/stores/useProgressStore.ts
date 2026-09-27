import { useState, useEffect } from 'react';
import { UserProgressState, Bookmark, UserNote } from '../types';

const STORAGE_KEY = 'agentichub_user_progress_v1';

const defaultState: UserProgressState = {
  completedLessons: ['intro-agentic-arch', 'attention-mechanisms'],
  lessonConfidence: {
    'intro-agentic-arch': 5,
    'attention-mechanisms': 4,
  },
  problemStatus: {
    'two-sum': 'mastered',
    'lru-cache': 'attempted',
  },
  quizScores: {
    'intro-agentic-arch': { score: 3, total: 3, date: new Date().toISOString() },
  },
  bookmarks: [
    {
      id: 'rag-reranking',
      type: 'lesson',
      title: 'Advanced RAG & Cross-Encoder Reranking',
      path: '/curriculum/rag/reranking',
      category: 'RAG',
    },
    {
      id: 'spark-aqe',
      type: 'lesson',
      title: 'Spark AQE & Shuffle Skew Optimization',
      path: '/curriculum/data-eng/spark-aqe',
      category: 'Data Engineering',
    },
  ],
  notes: [
    {
      id: 'note-1',
      title: 'Cross-Encoders vs Bi-Encoders in RAG',
      category: 'RAG',
      content: 'Bi-encoders embed query and docs independently (fast, good for initial top-k). Cross-encoders compute joint attention over query+doc pairs (slower, but orders of magnitude more accurate for reranking top 20-50).',
      updatedAt: new Date().toISOString(),
    },
  ],
  dailyMinutesGoal: 60,
  learningStreak: 14,
  lastActiveDate: new Date().toISOString().split('T')[0],
  theme: 'dark',
};

export function applyTheme(theme: 'dark' | 'light') {
  if (typeof document === 'undefined') return;
  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
    document.documentElement.classList.remove('light');
    document.documentElement.style.colorScheme = 'dark';
  } else {
    document.documentElement.classList.remove('dark');
    document.documentElement.classList.add('light');
    document.documentElement.style.colorScheme = 'light';
  }
}

export function getStoredProgress(): UserProgressState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultState;
    return { ...defaultState, ...JSON.parse(raw) };
  } catch (e) {
    console.error('Failed reading user progress from localStorage', e);
    return defaultState;
  }
}

export function saveStoredProgress(state: UserProgressState) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    window.dispatchEvent(new Event('agentichub_progress_updated'));
  } catch (e) {
    console.error('Failed saving user progress to localStorage', e);
  }
}

export function useProgress() {
  const [progress, setProgress] = useState<UserProgressState>(getStoredProgress);

  useEffect(() => {
    applyTheme(progress.theme || 'dark');
  }, [progress.theme]);

  useEffect(() => {
    const handleUpdate = () => {
      const current = getStoredProgress();
      setProgress(current);
      applyTheme(current.theme || 'dark');
    };
    window.addEventListener('agentichub_progress_updated', handleUpdate);
    return () => window.removeEventListener('agentichub_progress_updated', handleUpdate);
  }, []);

  const toggleTheme = () => {
    const newTheme: 'dark' | 'light' = progress.theme === 'dark' ? 'light' : 'dark';
    const updated = {
      ...progress,
      theme: newTheme,
    };
    saveStoredProgress(updated);
    applyTheme(newTheme);
  };

  const toggleLessonCompleted = (lessonId: string) => {
    const isCompleted = progress.completedLessons.includes(lessonId);
    const updated = {
      ...progress,
      completedLessons: isCompleted
        ? progress.completedLessons.filter((id) => id !== lessonId)
        : [...progress.completedLessons, lessonId],
    };
    saveStoredProgress(updated);
  };

  const setLessonConfidence = (lessonId: string, rating: number) => {
    const updated = {
      ...progress,
      lessonConfidence: {
        ...progress.lessonConfidence,
        [lessonId]: rating,
      },
    };
    saveStoredProgress(updated);
  };

  const updateProblemStatus = (problemId: string, status: 'not_started' | 'attempted' | 'mastered') => {
    const updated = {
      ...progress,
      problemStatus: {
        ...progress.problemStatus,
        [problemId]: status,
      },
    };
    saveStoredProgress(updated);
  };

  const recordQuizScore = (lessonId: string, score: number, total: number) => {
    const updated = {
      ...progress,
      quizScores: {
        ...progress.quizScores,
        [lessonId]: { score, total, date: new Date().toISOString() },
      },
    };
    saveStoredProgress(updated);
  };

  const toggleBookmark = (item: Bookmark) => {
    const exists = progress.bookmarks.some((b) => b.id === item.id);
    const updated = {
      ...progress,
      bookmarks: exists
        ? progress.bookmarks.filter((b) => b.id !== item.id)
        : [...progress.bookmarks, item],
    };
    saveStoredProgress(updated);
  };

  const isBookmarked = (id: string) => {
    return progress.bookmarks.some((b) => b.id === id);
  };

  const addNote = (note: Omit<UserNote, 'id' | 'updatedAt'>) => {
    const newNote: UserNote = {
      ...note,
      id: 'note_' + Date.now(),
      updatedAt: new Date().toISOString(),
    };
    const updated = {
      ...progress,
      notes: [newNote, ...progress.notes],
    };
    saveStoredProgress(updated);
  };

  const deleteNote = (id: string) => {
    const updated = {
      ...progress,
      notes: progress.notes.filter((n) => n.id !== id),
    };
    saveStoredProgress(updated);
  };

  const exportData = () => {
    const jsonStr = JSON.stringify(progress, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `agentichub_backup_${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const importData = (jsonStr: string): boolean => {
    try {
      const parsed = JSON.parse(jsonStr);
      if (typeof parsed === 'object' && parsed !== null) {
        saveStoredProgress({ ...defaultState, ...parsed });
        return true;
      }
      return false;
    } catch {
      return false;
    }
  };

  const resetAllProgress = () => {
    saveStoredProgress(defaultState);
  };

  return {
    progress,
    toggleLessonCompleted,
    setLessonConfidence,
    updateProblemStatus,
    recordQuizScore,
    toggleBookmark,
    isBookmarked,
    addNote,
    deleteNote,
    exportData,
    importData,
    resetAllProgress,
    toggleTheme,
  };
}
