export type SkillLevel = 'Core' | 'Strong' | 'Working Knowledge' | 'Exploring';

export interface SkillItem {
  name: string;
  level: SkillLevel;
}

export interface SkillCategory {
  category: string;
  skills: SkillItem[];
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  duration: string;
  location: string;
  period: string;
  technologies: string[];
  responsibilities: string[];
  keyProjects: string[];
  impact: string;
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  period: string;
  field: string;
  honors?: string;
}

export interface PatentItem {
  title: string;
  description: string;
  year: string;
  status: string;
  organization: string;
}

export interface FeaturedProject {
  id: string;
  title: string;
  tagline: string;
  category: 'Agentic AI' | 'LLM & NLP' | 'Streaming & Data' | 'Distributed Systems';
  scale: string;
  problem: string;
  architectureDescription: string;
  myRole: string;
  technologies: string[];
  keyDecisions: string[];
  impact: string;
  lessonsLearned: string[];
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface Lesson {
  id: string;
  moduleId: string;
  trackId: string;
  title: string;
  durationMinutes: number;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced' | 'Principal';
  prerequisites: string[];
  learningObjectives: string[];
  overview: string;
  theory: string;
  architectureDiagram?: string;
  codeSnippet?: {
    title: string;
    language: string;
    code: string;
  };
  tradeoffs: string[];
  commonMistakes: string[];
  interviewQuestions: {
    question: string;
    answer: string;
  }[];
  quiz: QuizQuestion[];
}

export interface Module {
  id: string;
  trackId: string;
  title: string;
  description: string;
  lessons: Lesson[];
}

export interface Track {
  id: string;
  title: string;
  slug: string;
  description: string;
  iconName: string;
  level: string;
  accentColor: string;
  modules: Module[];
}

export interface CodingProblem {
  id: string;
  title: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  category: string;
  description: string;
  examples: {
    input: string;
    output: string;
    explanation?: string;
  }[];
  constraints: string[];
  pythonSolution: string;
  timeComplexity: string;
  spaceComplexity: string;
}

export interface SystemDesignCase {
  id: string;
  title: string;
  category: string;
  scale: string;
  requirements: {
    functional: string[];
    nonFunctional: string[];
  };
  architectureSummary: string;
  keyComponents: string[];
  storageAndDataFlow: string;
  tradeoffs: string[];
}

export interface ResearchPaper {
  id: string;
  title: string;
  authors: string;
  year: number;
  category: string;
  summary: string;
  keyContributions: string[];
  whyItMatters: string;
  arxivUrl?: string;
}

export interface JargonTerm {
  id: string;
  term: string;
  category: string;
  plainEnglish: string;
  deepDive: string;
  realWorldExample: string;
}

export interface UserNote {
  id: string;
  title: string;
  category: string;
  content: string;
  updatedAt: string;
}

export interface Bookmark {
  id: string;
  type: 'lesson' | 'problem' | 'case' | 'paper';
  title: string;
  path: string;
  category: string;
}

export interface UserProgressState {
  completedLessons: string[];
  lessonConfidence: Record<string, number>;
  problemStatus: Record<string, 'not_started' | 'attempted' | 'mastered'>;
  quizScores: Record<string, { score: number; total: number; date: string }>;
  bookmarks: Bookmark[];
  notes: UserNote[];
  dailyMinutesGoal: number;
  learningStreak: number;
  lastActiveDate: string;
  theme: 'dark' | 'light';
}
