Use the prompt below as the **master build prompt** for your coding agent. It is designed for a GitHub Pages–hosted personal learning platform, not just a static portfolio.

```text
You are a Principal Product Engineer, AI/ML Architect, UX Designer, and Senior Full-Stack Developer.

Build a production-quality personal website called:

# "Sambit's AI Engineering Academy"

This is NOT primarily a portfolio website.

It is my personal continuous-learning operating system for becoming stronger in:

- Artificial Intelligence
- Machine Learning
- Generative AI
- LLMs
- RAG
- Agentic AI
- Coding and algorithms
- System design
- Distributed systems
- Data engineering
- MLOps / LLMOps
- Cloud architecture
- Technical jargon
- New AI frameworks and tools
- AI research
- AI industry news
- Latest technology trends
- Interview preparation
- Technical leadership
- Career progression
- Motivation and consistency
- Leisure / mental reset activities

The application must be deployable on GitHub Pages.

The site should feel like a combination of:

- personal AI university
- engineering knowledge base
- interview preparation platform
- daily learning dashboard
- AI news dashboard
- coding practice system
- RAG/LLM laboratory
- career learning tracker

The application should be extremely polished, fast, modular, maintainable and responsive.

--------------------------------------------------
1. TECHNOLOGY STACK
--------------------------------------------------

Build with:

Frontend:
- React
- TypeScript
- Vite
- Tailwind CSS
- React Router
- Lucide icons

Content:
- Markdown / MDX whenever practical
- JSON/YAML metadata for courses, lessons, questions and resources

Data visualization:
- Recharts

Code rendering:
- Shiki or Prism
- syntax highlighting
- copy-code button

State:
- React Context or Zustand

Persistence:
Because the application will initially run on GitHub Pages:
- localStorage for learning progress
- IndexedDB if larger browser-side storage is required

Architecture must make it easy later to connect:
- Firebase
- Supabase
- PostgreSQL
- MongoDB
- vector databases
- external APIs
- LLM APIs

Do NOT introduce a backend dependency for the first version unless absolutely necessary.

--------------------------------------------------
2. GITHUB PAGES REQUIREMENTS
--------------------------------------------------

The application MUST work correctly when deployed using GitHub Pages.

Handle:
- Vite base path
- client-side routing
- GitHub Pages 404 fallback if required
- static asset paths
- GitHub Actions deployment

Create:

.github/workflows/deploy.yml

The workflow should:
1. checkout code
2. install dependencies
3. run lint
4. run tests
5. build
6. deploy dist to GitHub Pages

Also create a detailed README containing:
- local development instructions
- build instructions
- deployment instructions
- content creation instructions
- architecture explanation

--------------------------------------------------
3. MAIN NAVIGATION
--------------------------------------------------

Desktop:
left sidebar.

Mobile:
bottom navigation / collapsible menu.

Primary navigation:

Dashboard
My Learning
AI & ML
LLMs
RAG
Agents
Coding
System Design
Data Engineering
Cloud
Tech Stack
Jargon
AI News
Research
Interview Prep
Career
Motivation
Leisure
Bookmarks
Notes
Progress
Settings

Include global search.

--------------------------------------------------
4. HOME DASHBOARD
--------------------------------------------------

Create a beautiful dashboard.

Top section:

"Good morning, Sambit"

Subtitle:
"Build depth. Build systems. Build intelligence."

Show:

Today's Learning Plan
---------------------
Example:

30 min — ML fundamentals
30 min — LLM/RAG
30 min — Coding
20 min — System Design
15 min — AI News
15 min — Research paper
10 min — Technical jargon

Cards:

Learning streak
Hours this week
Lessons completed
Coding problems solved
Papers studied
AI concepts learned
Interview questions completed

Add:

Continue Learning

Today's AI Topic

Today's Coding Problem

Today's System Design Challenge

Today's AI Jargon

Today's Research Paper

Today's AI News

Today's Motivation

Recommended Next Topic

--------------------------------------------------
5. COURSE SYSTEM
--------------------------------------------------

The most important part of the website is the course system.

Create structured learning tracks.

Each track should contain:

Track
→ Module
→ Chapter
→ Lesson
→ Quiz
→ Practice
→ Project

Each lesson should support:

title
description
difficulty
estimated duration
prerequisites
learning objectives
theory
architecture
example
code
tradeoffs
common mistakes
interview questions
quiz
references
notes
completion status

Progress must be saved locally.

--------------------------------------------------
6. AI / ML COURSE
--------------------------------------------------

Create a comprehensive learning path.

Modules:

Mathematics for ML
- Linear algebra
- Probability
- Statistics
- Calculus
- Optimization

Machine Learning Fundamentals
- supervised learning
- unsupervised learning
- semi-supervised learning
- reinforcement learning

Algorithms:
- Linear Regression
- Logistic Regression
- Decision Trees
- Random Forest
- XGBoost
- Gradient Boosting
- SVM
- KNN
- Naive Bayes
- clustering
- PCA

Deep Learning:
- neural networks
- backpropagation
- optimizers
- CNN
- RNN
- LSTM
- GRU
- Transformers

NLP:
- tokenization
- embeddings
- attention
- transformers
- BERT
- DistilBERT
- T5

Computer Vision

Recommendation Systems

Ranking systems

Feature engineering

Model evaluation

Explain:
precision
recall
F1
ROC-AUC
PR-AUC
RMSE
MAPE
NDCG

Add practical ML system design examples.

--------------------------------------------------
7. LLM COURSE
--------------------------------------------------

Create a complete LLM curriculum.

Topics:

Transformer architecture
Self attention
Multi-head attention
Positional encoding
Tokenization
Embedding
Context windows
KV cache
Inference
Sampling

Temperature
Top-K
Top-P

Prompt engineering

Few-shot prompting

Chain-of-thought concepts

Structured output

Function calling

Tool calling

Fine tuning

LoRA
QLoRA
PEFT

Quantization

Distillation

Mixture of Experts

Model serving

GPU inference

Tensor parallelism

Model parallelism

Batching

Speculative decoding

LLM evaluation

Hallucination

Guardrails

Safety

Cost optimization

Latency optimization

--------------------------------------------------
8. RAG UNIVERSITY
--------------------------------------------------

This should be one of the strongest sections.

Cover:

Naive RAG
Advanced RAG
Modular RAG
Hybrid RAG
Graph RAG
Agentic RAG
Corrective RAG
Self-RAG
Adaptive RAG

Full pipeline:

Documents
→ parsing
→ cleaning
→ chunking
→ metadata
→ embeddings
→ vector database
→ retrieval
→ reranking
→ prompt augmentation
→ LLM
→ citations
→ evaluation

Teach chunking strategies:

fixed-size
recursive
semantic
document structure
sentence-based
parent-child
late chunking

Teach retrieval:

dense retrieval
sparse retrieval
BM25
hybrid search
metadata filtering

Reranking:

cross encoders
LLM reranking
reciprocal rank fusion

Vector databases:

FAISS
Milvus
Pinecone
Weaviate
Qdrant
pgvector
Elasticsearch / OpenSearch

For every architecture show:

diagram
request flow
data flow
code
tradeoffs
failure modes
scaling considerations
interview questions

--------------------------------------------------
9. AGENTIC AI
--------------------------------------------------

Create an Agent Engineering track.

Concepts:

AI agent
workflow vs agent
planning
reasoning
tools
memory
state
checkpoints
human-in-the-loop

Frameworks:

LangGraph
LangChain
LlamaIndex
CrewAI
AutoGen

Protocols:

MCP
A2A

Agent patterns:

ReAct
Planner-Executor
Reflection
Supervisor-worker
Hierarchical agents
Parallel agents
Multi-agent collaboration

Topics:

tool selection
retry
timeouts
idempotency
authentication
authorization
sandboxing
observability
evaluation

Include architecture diagrams.

--------------------------------------------------
10. AI SYSTEM DESIGN
--------------------------------------------------

Create real interview-style architecture cases:

Enterprise RAG platform
AI search engine
AI assistant
Customer support agent
Coding agent
Document intelligence
AI recommendation engine
Fraud detection
Content moderation
AI ad generation
AI shopping assistant
Multi-agent platform

Every case should cover:

Requirements
Functional requirements
NFRs
Scale estimation
API
Architecture
Storage
Model selection
RAG
Caching
Queues
Security
Observability
Evaluation
Failure handling
Cost
Latency
Trade-offs

--------------------------------------------------
11. CODING ACADEMY
--------------------------------------------------

Create a coding section.

Categories:

Arrays
Strings
Linked Lists
Stack
Queue
Deque
HashMap
Heap
Trees
BST
Graphs
Trie
Union Find
Binary Search
Sliding Window
Two Pointers
Dynamic Programming
Greedy
Backtracking
Intervals
Topological Sort

Each problem should contain:

Problem statement
Examples
Constraints
Naive solution
Optimal solution
Algorithm explanation
Python implementation
Complexity
Edge cases
Tests
Follow-up questions

Allow user to mark:

Not started
Attempted
Need revision
Mastered

Add filters:
difficulty
topic
status

--------------------------------------------------
12. SYSTEM DESIGN UNIVERSITY
--------------------------------------------------

Topics:

Load balancing
API gateway
Reverse proxy
Caching
CDN
Database
SQL
NoSQL
Replication
Sharding
Partitioning
Consistent hashing
Message queues
Kafka
Event sourcing
CQRS
Distributed locks
Rate limiting
Idempotency
CAP theorem
Consensus
Leader election
Service discovery
Circuit breaker
Retry
Backpressure
Observability

System design cases:

URL shortener
Chat system
Search engine
Uber
YouTube
Netflix
Shopping cart
Checkout
Payment system
Notification system
Distributed scheduler
Ad platform
Recommendation engine

--------------------------------------------------
13. DATA ENGINEERING
--------------------------------------------------

Create tracks covering:

Spark
Kafka
Airflow
Flink
Dataflow
Databricks
Snowflake
Iceberg
Delta Lake
Hudi

Data modeling:
Star schema
Snowflake schema
Data Vault
Medallion architecture

Streaming:

event time
processing time
watermark
windowing
exactly once
at least once
idempotency

Include Spark performance:

shuffle
partitioning
AQE
skew
broadcast joins
caching
executor sizing
GC

--------------------------------------------------
14. CLOUD ENGINEERING
--------------------------------------------------

Sections:

AWS
GCP
Azure

GCP:

Compute Engine
GKE
Cloud Run
Cloud Functions
Pub/Sub
Dataflow
BigQuery
Cloud Storage
Vertex AI
IAM
VPC
Load Balancing
Cloud Monitoring

AWS:

EC2
EKS
Lambda
S3
Kafka/MSK
EMR
Glue
Athena
DynamoDB
SageMaker
IAM
CloudWatch

Include architecture comparisons.

--------------------------------------------------
15. TECH STACK EXPLORER
--------------------------------------------------

Create searchable cards for technologies.

Examples:

Python
Scala
Java
TypeScript
React
Node.js
FastAPI
Spring Boot
Spark
Kafka
Redis
Postgres
MongoDB
DynamoDB
Cassandra
ElasticSearch
OpenSearch
Milvus
Kubernetes
Docker
Terraform

Each technology page:

What it is
Why it exists
When to use
When NOT to use
Architecture
Typical use cases
Strengths
Weaknesses
Alternatives
Interview questions

--------------------------------------------------
16. TECH JARGON
--------------------------------------------------

Build a searchable dictionary.

Examples:

Embedding
Token
Context Window
Inference
Fine tuning
Reranking
Vector Search
Semantic Search
Idempotency
Backpressure
Fan-out
Write amplification
Hot partition
Data skew
Cardinality
Partition tolerance

Each definition:

Simple definition
Technical definition
Example
Why it matters
Related concepts

Add:

"Jargon of the Day"

--------------------------------------------------
17. AI NEWS
--------------------------------------------------

Create an AI News section designed for future API integration.

Categories:

LLMs
Agents
Open source AI
Google
OpenAI
Anthropic
Meta
NVIDIA
AI research
AI infrastructure
AI startups

Cards:

headline
source
published time
summary
why it matters
technical impact

Initially use mock data.

Place data access behind an interface so later APIs/RSS feeds can replace mock data.

--------------------------------------------------
18. LATEST AI TRENDS
--------------------------------------------------

Create a trend tracker.

Examples:

Agentic AI
Reasoning models
Small Language Models
Multimodal AI
Inference optimization
MCP
A2A
AI coding agents
Synthetic data
AI evaluation
AI observability
Graph RAG
Long context
World models

Each trend:

What
Why now
Maturity
Use cases
Limitations
Companies
Technologies
What should I learn

--------------------------------------------------
19. RESEARCH PAPER LIBRARY
--------------------------------------------------

Create paper cards.

Fields:

title
authors
year
topic
difficulty
summary
key contribution
architecture
important concepts
why it matters
implementation links
reading status

Initial papers:

Attention Is All You Need
BERT
GPT-3
InstructGPT
LoRA
QLoRA
RAG
RETRO
ReAct
Chain-of-Thought
Self-RAG

--------------------------------------------------
20. INTERVIEW PREPARATION
--------------------------------------------------

Create categories:

Coding
System Design
AI/ML
LLM
RAG
Agents
MLOps
Data Engineering
Behavioral
Leadership

Question interface:

Question

Reveal Answer button

Follow-up questions

Difficulty

Company-style tag

Notes

Confidence:

1
2
3
4
5

Allow questions to be bookmarked.

--------------------------------------------------
21. CAREER DEVELOPMENT
--------------------------------------------------

Create a technical career section.

Tracks:

Staff Engineer
Principal Engineer
Engineering Manager
Distinguished Engineer
AI Architect

Cover:

Technical strategy
Architecture
Influence
Stakeholder management
Mentoring
Decision making
Communication
Conflict resolution
Execution
Business impact

Include:

Weekly leadership exercise.

--------------------------------------------------
22. DAILY MOTIVATION
--------------------------------------------------

This should NOT be generic motivational quotes.

Create engineering-focused prompts:

"What difficult concept will you understand today?"

"Depth compounds."

"Build something instead of watching another tutorial."

"Can you explain yesterday's topic without notes?"

Add reflection:

What did I learn?
What confused me?
What will I revisit?
What did I build?

--------------------------------------------------
23. LEISURE
--------------------------------------------------

Create a simple recovery section.

Categories:

Reading
Travel
Exercise
Music
Movies
Family
Walking
Photography
Mindfulness

Show:

"Take a break"

Allow adding leisure activities.

Do NOT gamify this excessively.

--------------------------------------------------
24. NOTES
--------------------------------------------------

Create notes system.

Notes should support:

Markdown
tags
categories
search
edit
delete
favorite

Example categories:

AI
ML
RAG
Coding
Architecture
Research
Interview

Persist locally.

--------------------------------------------------
25. BOOKMARKS
--------------------------------------------------

Allow bookmarking:

lessons
questions
articles
papers
coding problems
technologies

Provide a central bookmark page.

--------------------------------------------------
26. GLOBAL SEARCH
--------------------------------------------------

Create Cmd/Ctrl + K search.

Search:

courses
lessons
jargon
coding problems
system design
research papers
technologies
notes

Provide keyboard navigation.

--------------------------------------------------
27. PROGRESS DASHBOARD
--------------------------------------------------

Charts:

Learning time
Course completion
Topic mastery
Coding problems
Weekly learning
Monthly learning

Show skill matrix:

AI
ML
LLMs
RAG
Agents
Coding
System Design
Data Engineering
Cloud
Leadership

Do NOT invent scores automatically.

Scores must come from:
- lesson completion
- quizzes
- user confidence
- practice

--------------------------------------------------
28. DAILY LEARNING ENGINE
--------------------------------------------------

Create a basic recommendation engine.

Inputs:

available time
unfinished lessons
weak areas
recent learning
revision due
difficulty

Output example:

Today — 2 hours

25 min — Transformer Attention
25 min — Advanced RAG
30 min — Graph coding
25 min — Distributed caching
15 min — AI News

Implement deterministic rules initially.

Create an interface so an AI recommendation service can replace this later.

--------------------------------------------------
29. SPACED REPETITION
--------------------------------------------------

Implement revision scheduling.

Statuses:

New
Learning
Review
Mastered

Track:

last reviewed
next review
confidence

Simple algorithm:

Low confidence:
review soon

Medium confidence:
review within a few days

High confidence:
review later

Do not implement a complex algorithm unnecessarily.

--------------------------------------------------
30. QUIZ ENGINE
--------------------------------------------------

Support:

MCQ
true/false
multiple choice
short answer

Track:

score
attempt count
incorrect answers
topics needing revision

--------------------------------------------------
31. VISUAL DESIGN
--------------------------------------------------

Visual direction:

premium engineering dashboard

Dark mode default.

Style inspired by:
- Linear
- Vercel
- GitHub
- modern developer tools

Avoid:
- excessive gradients
- childish gamification
- giant rounded cards everywhere
- meaningless animations

Use:
clean typography
strong spacing
subtle borders
compact dashboards
excellent hierarchy

Mobile responsive.

--------------------------------------------------
32. COURSE PAGE UX
--------------------------------------------------

Course page layout:

LEFT
course navigation

CENTER
lesson

RIGHT
table of contents / progress

Lesson example:

Transformer Attention

Overview
Learning objectives
Prerequisites

Theory

Diagram

Example

Implementation

Architecture

Trade-offs

Common mistakes

Interview questions

Quiz

Further reading

Previous Lesson | Complete | Next Lesson

--------------------------------------------------
33. ARCHITECTURE DIAGRAMS
--------------------------------------------------

Use Mermaid diagrams where useful.

Example:

flowchart LR
    User --> API
    API --> Retriever
    Retriever --> VectorDB
    Retriever --> Reranker
    Reranker --> LLM
    LLM --> Response

Provide diagrams for:

RAG
Agent systems
Streaming
ML inference
Distributed architecture
System design

--------------------------------------------------
34. CONTENT ARCHITECTURE
--------------------------------------------------

Do NOT hard-code hundreds of lessons directly inside React components.

Use structured content.

Suggested structure:

src/
  components/
  pages/
  layouts/
  hooks/
  stores/
  services/
  models/
  utils/

content/
  ai/
  ml/
  llm/
  rag/
  agents/
  coding/
  system-design/
  data-engineering/
  cloud/
  jargon/
  research/
  interview/

Each lesson should have metadata.

Example:

---
id: transformer-attention
title: Self Attention
category: LLM
difficulty: Intermediate
duration: 30
tags:
  - transformer
  - attention
---

--------------------------------------------------
35. DATA MODEL
--------------------------------------------------

Create TypeScript models.

Course
Module
Lesson
Quiz
Question
CodingProblem
ResearchPaper
Technology
JargonTerm
NewsArticle
Note
Bookmark
Progress
LearningSession

Use strict TypeScript.

Avoid `any`.

--------------------------------------------------
36. SOFTWARE ENGINEERING QUALITY
--------------------------------------------------

Use:

ESLint
Prettier
TypeScript strict mode

Testing:

Vitest
React Testing Library

Test:

progress storage
search
course navigation
quiz scoring
bookmarks
notes
daily planner

--------------------------------------------------
37. ACCESSIBILITY
--------------------------------------------------

Implement:

semantic HTML
keyboard navigation
ARIA where necessary
sufficient contrast
visible focus states

--------------------------------------------------
38. PERFORMANCE
--------------------------------------------------

Use:

lazy loading
route splitting
tree shaking
optimized images

Target Lighthouse:

Performance > 90
Accessibility > 90
Best Practices > 90

--------------------------------------------------
39. SECURITY
--------------------------------------------------

Never expose API secrets in frontend code.

Create:

.env.example

Document how future backend/API keys should work.

Never commit secrets.

--------------------------------------------------
40. FUTURE AI ASSISTANT
--------------------------------------------------

Design the architecture so a future "AI Tutor" can be added.

Possible experience:

User:
"Explain self-attention like I am preparing for a Principal Engineer interview."

Tutor:
- explains concept
- asks follow-ups
- generates questions
- evaluates responses
- recommends next lesson

Create an interface:

AIProvider

Methods:

ask()
explain()
generateQuiz()
evaluateAnswer()
recommendLearning()

Initially implement mock provider.

--------------------------------------------------
41. FUTURE RAG TUTOR
--------------------------------------------------

Prepare architecture for:

my notes
my lessons
my interview notes
research papers

→ chunk
→ embed
→ vector database
→ retrieve
→ LLM

Do not implement paid APIs yet.

Provide architecture documentation explaining how this will be added.

--------------------------------------------------
42. SAMPLE CONTENT
--------------------------------------------------

Do NOT create empty screens.

Populate at least:

10 AI/ML lessons
10 LLM lessons
10 RAG lessons
8 Agent lessons
15 coding problems
10 system design concepts
10 data engineering lessons
10 jargon terms
5 papers
15 interview questions
10 technology cards
10 AI news mock articles

Content should be technically meaningful rather than lorem ipsum.

--------------------------------------------------
43. PERSONAL PROFILE AREA
--------------------------------------------------

Add a small About section.

Professional focus:

Senior Data / AI Engineering
Distributed Systems
AI/ML Platforms
Generative AI
Agentic Systems
Data Engineering

Skills can include:

Python
Scala
Java
Spark
Kafka
Airflow
AWS
GCP
Kubernetes
RAG
LLMs
LangGraph
MCP
MLOps

Do not make the entire application a resume.

This section should be secondary to the learning system.

--------------------------------------------------
44. SETTINGS
--------------------------------------------------

Settings:

Dark / light mode
Daily available learning time
Preferred difficulty
Preferred learning categories
Reset progress
Export progress
Import progress

Allow export to JSON.

--------------------------------------------------
45. PWA SUPPORT
--------------------------------------------------

If straightforward, make it installable as a PWA.

Support offline access to already loaded/static learning material.

--------------------------------------------------
46. DEVELOPMENT APPROACH
--------------------------------------------------

Do NOT attempt to generate an unmaintainable giant application in one file.

Build iteratively.

Phase 1:
Architecture + design system

Phase 2:
Navigation + dashboard

Phase 3:
Course engine

Phase 4:
Core learning content

Phase 5:
Coding + system design

Phase 6:
Progress + quizzes

Phase 7:
Search + notes + bookmarks

Phase 8:
News + research

Phase 9:
Testing

Phase 10:
GitHub Pages deployment

At every phase ensure the application still builds.

--------------------------------------------------
47. FIRST TASK
--------------------------------------------------

Before writing all implementation code:

1. Analyse these requirements.
2. Generate architecture.md.
3. Generate requirements.md.
4. Generate implementation-plan.md.
5. Generate folder-structure.md.
6. Generate data-model.md.
7. Generate content-model.md.
8. Generate design-system.md.
9. Generate README.md.
10. Create the initial project skeleton.

Then implement Phase 1.

Do NOT create hundreds of random files before establishing the architecture.

--------------------------------------------------
48. IMPORTANT ENGINEERING RULES
--------------------------------------------------

Follow these rules strictly:

- No giant components.
- No duplicated logic.
- No fake APIs pretending to be production systems.
- No hardcoded secrets.
- No unnecessary backend.
- No unnecessary microservices.
- No unnecessary libraries.
- No meaningless abstractions.
- No broken links.
- No placeholder lorem ipsum.
- No TypeScript compilation errors.
- No console errors.
- No inaccessible buttons.
- No nonfunctional UI controls.

Every visible button should work.

Every page should have meaningful content.

Run:

npm install
npm run lint
npm run test
npm run build

Fix all failures before considering the task complete.

--------------------------------------------------
49. UX GOAL
--------------------------------------------------

When I open this application every morning I should immediately know:

1. What should I learn today?
2. What did I learn recently?
3. What should I revise?
4. What technology should I explore?
5. What AI development should I know about?
6. What coding problem should I practice?
7. What system design topic should I study?
8. Am I progressing?

The application should push me toward consistent technical depth rather than passive content consumption.

--------------------------------------------------
50. FINAL DELIVERABLE
--------------------------------------------------

Deliver:

working source code
working responsive UI
sample learning content
tests
documentation
GitHub Actions deployment
GitHub Pages compatible build

At completion show:

1. final directory tree
2. architecture summary
3. commands to run locally
4. commands to test
5. GitHub Pages deployment steps
6. where new learning content should be added
7. future AI/RAG integration architecture
```

One structural change I strongly recommend: **do not make “AI News” the center of the product.** News consumption feels productive but produces little durable skill. Your core loop should instead be:

**Learn → Implement → Test yourself → Revise → Build → Explain.**

So your homepage should prioritize something like:

```text
TODAY
────────────────────────────────

Continue Learning
Advanced RAG — Hybrid Retrieval
██████████████░░ 72%

Practice
Graph problem: Course Schedule II

Build
Implement semantic + BM25 hybrid search

Explain
Why does a cross-encoder reranker improve retrieval?

Revise
Transformer KV Cache
Due today

Research
Self-RAG

────────────────────────────────
AI News
3 relevant developments
```

And the longer-term architecture I would aim for is:

```text
                 SAMBIT'S AI LEARNING OS

                         ┌──────────┐
                         │Dashboard │
                         └────┬─────┘
                              │
        ┌─────────────────────┼─────────────────────┐
        │                     │                     │
        ▼                     ▼                     ▼
   LEARN ENGINE          PRACTICE ENGINE        KNOWLEDGE
        │                     │                     │
   AI / ML                 Coding                Notes
   LLM                     Design                Papers
   RAG                     Quizzes               Jargon
   Agents                  Projects              Bookmarks
   Cloud
        │                     │                     │
        └─────────────────────┼─────────────────────┘
                              ▼
                       PROGRESS ENGINE
                              │
                    ┌─────────┴─────────┐
                    │                   │
                    ▼                   ▼
             Revision Engine      Recommendation
                                      Engine
                                          │
                                          ▼
                                     AI TUTOR
                                   future phase
                                          │
                          ┌───────────────┼─────────────┐
                          ▼               ▼             ▼
                         RAG           LLM API       My Notes
                          │
                    Vector Store
```

Given your background, I would also add one dedicated **“Principal AI Engineer” learning track** connecting AI/ML depth with architecture, distributed systems, technical strategy, and leadership rather than treating those subjects as unrelated courses.