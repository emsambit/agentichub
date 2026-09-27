# Folder Structure — AgenticHub

```
agentichub/
├── .github/
│   └── workflows/
│       └── deploy.yml              # GitHub Actions deploy to GitHub Pages
├── docs/                           # Architecture, prompts & resume sources
│   ├── architecture.md
│   ├── requirements.md
│   ├── implementation-plan.md
│   ├── folder-structure.md
│   ├── data-model.md
│   ├── content-model.md
│   ├── design-system.md
│   ├── content.md
│   └── promps.md
├── public/                         # Static assets (avatar, resume pdf, icons)
│   ├── avatar.jpg
│   └── resume.pdf
├── src/
│   ├── assets/                     # Graphic resources
│   ├── components/                 # Reusable UI widgets
│   │   ├── common/                 # Header, Sidebar, Navigation, Footer
│   │   ├── search/                 # CommandPalette (Ctrl+K modal)
│   │   ├── learning/               # LessonViewer, QuizModal, CodeBlock, Diagram
│   │   └── widgets/                # StreakWidget, DailyPlanCard, MetricCard
│   ├── content/                    # Structured learning & profile data
│   │   ├── profile/                # Sambit's career, education, skills, projects
│   │   ├── tracks/                 # AI/ML, LLMs, RAG, Agents, Coding, SysDesign
│   │   ├── coding/                 # DSA problems with Python solutions
│   │   ├── system-design/          # System design architectures & case studies
│   │   ├── papers/                 # Landmark research papers
│   │   ├── jargon/                 # Tech dictionary terms
│   │   └── news/                   # Curated AI developments & trends
│   ├── hooks/                      # Custom React hooks (useStorage, useSearch)
│   ├── pages/                      # Primary page views
│   │   ├── DashboardPage.tsx       # Morning study dashboard & progress
│   │   ├── ProfilePage.tsx         # Executive About Me & Career Timeline
│   │   ├── CurriculumPage.tsx      # Tracks, Modules & Lessons
│   │   ├── LessonDetailPage.tsx    # Lesson theory, architecture, code & quiz
│   │   ├── LabProjectsPage.tsx     # Featured Engineering Work & Case Studies
│   │   ├── CodingPracticePage.tsx  # Interactive DSA practice system
│   │   ├── SystemDesignPage.tsx    # System design cases & blueprints
│   │   ├── ResearchLibraryPage.tsx # Curated AI research paper library
│   │   ├── JargonDictionaryPage.tsx# Tech terms dictionary
│   │   ├── NotesBookmarksPage.tsx  # Personal notes & saved resources
│   │   └── SettingsPage.tsx        # Preferences, time goals, data export/import
│   ├── stores/                     # Progress & user state management
│   ├── types/                      # TypeScript interfaces & models
│   ├── utils/                      # Helper algorithms & formatters
│   ├── App.tsx                     # Routing & layout wrapper
│   ├── main.tsx                    # React DOM root entry
│   └── index.css                   # Tailwind styles, glassmorphism & typography
├── index.html                      # Entry HTML with SEO & font imports
├── package.json                    # Dependencies & build scripts
├── postcss.config.js
├── tailwind.config.js              # Custom dark theme colors & shadows
├── tsconfig.json                   # Strict TypeScript compiler options
└── vite.config.ts                  # Vite config with relative base path
```
