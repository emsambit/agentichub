# Sambit's AI Engineering Academy & Learning OS (`agentichub`)

> **Personal continuous-learning operating system & Staff/Principal Data & AI Engineering platform.**  
> Crafted with React, TypeScript, Vite, and Tailwind CSS. Built for GitHub Pages deployment.

[![Deploy to GitHub Pages](https://github.com/emsambit/agentichub/actions/workflows/deploy.yml/badge.svg)](https://github.com/emsambit/agentichub/actions/workflows/deploy.yml)
[![Live Demo](https://img.shields.io/badge/Live-Demo-6366F1?style=flat&logo=github)](https://emsambit.github.io/agentichub/)
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

## 🌐 GitHub Pages Deployment

The repository is configured for zero-friction continuous deployment via GitHub Actions:
- On push to `main` or `master`, `.github/workflows/deploy.yml` builds the Vite bundle and deploys the static `dist/` directory to GitHub Pages.
- Client-side routing is handled seamlessly with zero server dependency.

---

## 🛡️ Privacy & Security
- Public profile data is strictly separated from private learning notes and metrics.
- No confidential company data, salaries, or API keys are bundled or exposed.

---

© Sambit Baliarsingh. Built with ⚡ for high technical depth and lifelong learning.
