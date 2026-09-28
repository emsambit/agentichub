# Sambit's AI Engineering Academy & Learning OS (`agentichub` / `llmlarge`)

> **Personal continuous-learning operating system & Staff/Principal Data & AI Engineering platform.**  
> Crafted with React, TypeScript, Vite, and Tailwind CSS. Built for Firebase Hosting deployment.

[![Deploy to Firebase Hosting](https://github.com/emsambit/llmlarge/actions/workflows/deploy.yml/badge.svg)](https://github.com/emsambit/llmlarge/actions/workflows/deploy.yml)
[![Live Site](https://img.shields.io/badge/Live%20Site-llmlarge.com-10B981?style=flat&logo=firebase)](https://llmlarge.com)
[![Firebase Default URL](https://img.shields.io/badge/Firebase-magicmirror--205517.web.app-FFA000?style=flat&logo=firebase)](https://magicmirror-205517.web.app)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

## 🎯 The Three Identities Architecture

`agentichub` unifies three dimensions of senior technical craft:

1. **About Me / Executive Profile**:
   - 17+ years of engineering leadership: Staff Engineer at **Walmart Global Tech**, Principal Engineer at **Twilio**, **British Telecom**, **Honeywell**, **Tecnotree**, **ZTE**.
   - Education: **BITS Pilani** (M.Tech Data Science & ML), **IIM Visakhapatnam** (Leadership with AI), **BPUT** (B.Tech E&TC).
   - Patented innovation, Copilot Champion, distributed big data and AI platform architecture.
2. **Learning OS (Continuous Learning Engine)**:
   - Deep curricula across **AI/ML**, **LLMs**, **RAG University**, **Agentic AI**, **Coding (DSA)**, **System Design**, **Data Engineering**, and **Cloud**.
   - Interactive features: daily learning engine, spaced repetition scheduler, quiz engine, personal markdown notes, and instant `Ctrl+K` global search.
3. **Lab / Build (Production Artifacts)**:
   - Deep-dives into real systems: **SparkPlug** (Upgrade/Optimizer/RCA agents), **Messaging NLP Classification**, **Petabyte-Scale Streaming Platforms**, and **Enterprise RAG & LangGraph Platforms**.

---

## 🚀 Quick Start

### Prerequisites
- Node.js `>= 18.0.0`
- npm `>= 9.0.0`

### Local Development
```bash
# Clone the repository
git clone https://github.com/emsambit/agentichub.git
cd agentichub

# Install dependencies
npm install

# Start local development server
npm run dev
```

### Production Build & Preview
```bash
# Type check and build for production
npm run build

# Preview production build locally
npm run preview
```

---

## 📂 Architecture & Documentation

- [docs/architecture.md](file:///c:/Personal/Documents/GitHub/agentichub/docs/architecture.md) — Comprehensive technical architecture, state management, and offline-first design.
- [docs/data-model.md](file:///c:/Personal/Documents/GitHub/agentichub/docs/data-model.md) — Complete TypeScript data models for Courses, Quizzes, Projects, Notes, and User Progress.
- [docs/content-model.md](file:///c:/Personal/Documents/GitHub/agentichub/docs/content-model.md) — Content structuring guidelines and schema.
- [docs/design-system.md](file:///c:/Personal/Documents/GitHub/agentichub/docs/design-system.md) — Color tokens, typography, component patterns, and micro-interactions.

---

## 🌐 Firebase Hosting & Custom Domain Deployment

The repository is configured for automated CI/CD via GitHub Actions and Firebase Hosting:
- On push to `main`, `.github/workflows/deploy.yml` runs tests, refreshes research feeds, compiles the production bundle, and deploys to Firebase Hosting site `magicmirror-205517`.
- Live at:
  - Custom domain: [https://llmlarge.com](https://llmlarge.com)
  - Firebase app URL: [https://magicmirror-205517.web.app](https://magicmirror-205517.web.app)
- Client-side routing is handled with HashRouter and SPA rewrites for zero server dependency.

---

## 🛡️ Privacy & Security
- Public profile data is strictly separated from private learning notes and metrics.
- No confidential company data, salaries, or API keys are bundled or exposed.

---

© Sambit Baliarsingh. Built with ⚡ for high technical depth and lifelong learning.
# AI Learning Pulse and new learning tracks

JAX and Jev lessons appear in the curriculum, global lesson search, and dashboard learning resources. Each includes official links, a practical exercise and a quiz.

The dashboard and AI Trends page load `public/ai-feed.json`. Run `npm run feed:update` to collect RSS/Atom headlines from Hugging Face, Google Research, Google DeepMind and Microsoft Research. Only titles, source links and dates are stored; article bodies are not republished. Entries are deduplicated and sorted by publication time, not by popularity.

The Pages workflow refreshes feeds before deployment and is scheduled hourly at minute 17. This schedule becomes active after merging to the default branch. GitHub may delay scheduled runs or disable schedules in inactive public repositories. The UI checks for a new snapshot every five minutes and offers a manual refresh; this reloads the published snapshot, not the upstream feeds.

Failed sources retain their last cached entries and show an unavailable status. GitHub Actions caches the previous snapshot between runs; the committed snapshot is the fallback if no cache exists. The UI reports delayed snapshots after three hours. No provider credentials or browser CORS proxies are required.

Validation: `npm test` covers RSS/Atom parsing, URL safety, malformed responses, deduplication and ordering. `npm run build` checks TypeScript and produces the static Pages site. Pull requests run both checks without deploying.
