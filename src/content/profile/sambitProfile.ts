import { ExperienceItem, EducationItem, SkillCategory, PatentItem, FeaturedProject } from '../../types';

export const profileMeta = {
  name: "Sambit Baliarsingh",
  title: "Staff Engineer | AI Platforms & Distributed Systems",
  tagline: "I architect large-scale data and AI platforms at petabyte scale, while continuously mastering GenAI, distributed systems, and agentic workflows.",
  location: "Bengaluru, Karnataka, India",
  yearsOfExperience: "17+",
  email: "emsambit@gmail.com",
  linkedin: "https://www.linkedin.com/in/sambit-baliarsingh-8322bbb1",
  github: "https://github.com/emsambit",
  resumeUrl: "./resume.pdf",
  avatarUrl: "./avatar.jpg",
  summary: "Staff Engineer working at the intersection of Agentic AI, LLM systems, ML platforms, and large-scale distributed data infrastructure. Extensive hands-on experience designing production capabilities across RAG, LLM evaluation, observability, workflow orchestration (LangGraph, MCP), and AI-assisted engineering automation. Proven track record scaling petabyte-class data ecosystems and mission-critical streaming pipelines at Walmart and Twilio.",
  philosophy: [
    "Understand fundamentals deeply before adopting frameworks.",
    "Design systems for graceful failure and self-healing.",
    "Measure and profile rigorously before optimizing.",
    "AI systems are software and distributed systems first.",
    "Reliability, security, and observability are first-class architectural concerns.",
    "Learn by building, testing, and deconstructing real systems."
  ]
};

export const experiences: ExperienceItem[] = [
  {
    id: "walmart-staff",
    company: "Walmart Global Tech India",
    role: "Staff Engineer",
    period: "Feb 2025 – Present",
    duration: "1 yr 8 mos",
    location: "Bengaluru, India",
    technologies: ["Agentic AI", "LangGraph", "MCP", "RAG", "Spark", "Kafka", "Python", "Vector Search"],
    responsibilities: [
      "Led the architecture and delivery of enterprise Agentic AI platforms for governance, metadata intelligence, lineage, and engineering automation across Walmart-scale petabyte data ecosystems.",
      "Defined and implemented production-grade LLM platform capabilities spanning RAG, LangGraph, Model Context Protocol (MCP), OAuth, fine-tuning, evaluation, and observability for secure enterprise AI adoption.",
      "Drove AI-powered Spark reliability, optimization, and upgrade initiatives for mission-critical workloads operating on petabyte-scale data and high-volume distributed clusters.",
      "Provided technical leadership across enterprise AI/ML and big data platforms, mentoring engineers and shaping multi-year technical roadmaps."
    ],
    keyProjects: [
      "SparkPlug: Autonomous Spark Upgrade & RCA Optimization Agent",
      "Enterprise Agentic Governance & Metadata Platform",
      "Secure Multi-Tenant LLM Platform with MCP Tools"
    ],
    impact: "Automated root-cause analysis and migration planning across thousands of petabyte-scale Spark jobs, reducing migration cycles and cluster operational overhead by over 30%."
  },
  {
    id: "twilio-principal",
    company: "Twilio",
    role: "Principal Engineer",
    period: "Nov 2022 – Jan 2025",
    duration: "2 yrs 3 mos",
    location: "Bengaluru, India",
    technologies: ["NLP", "Transformers", "BERT", "Spark", "Kafka", "EMR Serverless", "Apache Iceberg", "MWAA"],
    responsibilities: [
      "Led architecture and engineering for production ML and data systems supporting messaging intelligence, compliance, fraud/risk detection, and growth use cases.",
      "Built and productionized NLP classification systems using transformer models and traditional ML, covering model evaluation, inference, latency optimization, and production monitoring.",
      "Designed large-scale streaming and batch ML pipelines using Spark, Kafka, AWS EMR Serverless, Apache Iceberg, and Airflow (MWAA) for high-volume production messaging workloads.",
      "Improved performance, reliability, and cloud costs of ML and data workloads through architecture redesign and pipeline optimization."
    ],
    keyProjects: [
      "Real-Time Messaging Compliance & NLP Classification Engine",
      "Apache Iceberg Lakehouse on AWS EMR Serverless",
      "Low-Latency Model Serving with Transformer Distillation"
    ],
    impact: "Processed billions of messages daily with sub-50ms inference latency while driving massive infrastructure cost efficiencies."
  },
  {
    id: "walmart-senior",
    company: "Walmart Global Tech India",
    role: "Senior Engineer",
    period: "Jul 2019 – Nov 2022",
    duration: "3 yrs 5 mos",
    location: "Bengaluru, India",
    technologies: ["Spark", "Kafka", "Airflow", "Cloud Native", "ML Data Pipelines", "Cassandra"],
    responsibilities: [
      "Architected and scaled petabyte-scale data and ML platforms supporting Sam's Club Advertising and Sponsored Products across real-time analytics, decisioning, and streaming workloads.",
      "Built production ML data pipelines covering feature engineering, model training workflows, inference integration, evaluation, and monitoring.",
      "Optimized large-scale Spark jobs, resilient orchestration, and multi-tenant data pipelines."
    ],
    keyProjects: [
      "Sam's Club Sponsored Products ML Feature & Serving Pipeline",
      "Real-Time Click & Conversion Streaming Engine"
    ],
    impact: "Scaled ad-tech data platform to handle peak holiday traffic surges with zero downtime and strict sub-second SLAs."
  },
  {
    id: "bt-consultant",
    company: "British Telecom (BT)",
    role: "Consultant / Senior Professional, S&IT",
    period: "Mar 2016 – Jul 2019",
    duration: "3 yrs 5 mos",
    location: "Ipswich, UK & Bengaluru, India",
    technologies: ["Cloudera", "Hadoop", "Spark", "Scala", "Python", "Data Lake"],
    responsibilities: [
      "Modernized large-scale telecom data platforms using Cloudera, Spark, Scala, and data lake architectures, boosting analytical throughput.",
      "Led Hadoop-as-a-Service migration initiatives transitioning legacy RDBMS workloads to distributed big-data platforms.",
      "Built BT's Net Promoter Score (NPS) analytics platform, designing scalable pipelines to support customer-experience decisions."
    ],
    keyProjects: ["Hadoop-as-a-Service Migration", "Enterprise NPS Analytics Engine"],
    impact: "Migrated 100+ legacy reporting workloads into unified Spark lakehouse, saving millions in licensing."
  },
  {
    id: "honeywell-senior",
    company: "Honeywell Technology Solutions",
    role: "Senior Engineer",
    period: "Oct 2012 – Mar 2016",
    duration: "3 yrs 6 mos",
    location: "Bengaluru, India",
    technologies: ["Hive", "Python", "ETL/ELT", "Distributed Systems", "SQL"],
    responsibilities: [
      "Built and optimized large-scale data integration and ETL pipelines across distributed systems.",
      "Developed Hive and Python workflows transforming data from heterogeneous aerospace and industrial systems."
    ],
    keyProjects: ["Aerospace Telemetry Data Ingestion Platform"],
    impact: "Boosted batch ETL pipeline throughput by 4x across mission-critical aerospace monitoring data."
  },
  {
    id: "tecnotree",
    company: "Tecnotree Corporation",
    role: "Software Engineer",
    period: "Jun 2012 – Oct 2012",
    duration: "5 mos",
    location: "Bengaluru, India",
    technologies: ["Oracle", "Linux", "Data Ingestion Pipelines"],
    responsibilities: ["Developed data ingestion solutions using Oracle and Linux."],
    keyProjects: ["Telecom Mediation Ingestion"],
    impact: "Delivered carrier-grade billing ingestion workflows."
  },
  {
    id: "zte",
    company: "ZTE Corporation",
    role: "Project Engineer",
    period: "Jun 2009 – Mar 2011",
    duration: "1 yr 10 mos",
    location: "Mumbai, India",
    technologies: ["SQL", "Relational Databases", "Shell Scripting", "ETL"],
    responsibilities: [
      "Designed and developed enterprise ETL solutions translating business requirements into scalable workflows.",
      "Built Unix shell automations for ingestion, validation, and batch processing."
    ],
    keyProjects: ["Telecom Core Network Batch Processing Automation"],
    impact: "Automated manual daily reconciliation, eliminating operational errors."
  }
];

export const skillCategories: SkillCategory[] = [
  {
    category: "AI & Machine Learning",
    skills: [
      { name: "Agentic AI & Multi-Agent Systems", level: "Core" },
      { name: "LangGraph & LangChain", level: "Core" },
      { name: "Model Context Protocol (MCP)", level: "Core" },
      { name: "Advanced RAG & Vector Search", level: "Core" },
      { name: "LLM Fine-Tuning (LoRA/QLoRA)", level: "Strong" },
      { name: "NLP (BERT, Transformers)", level: "Core" },
      { name: "LLM Evaluation & Guardrails", level: "Strong" },
      { name: "PyTorch & XGBoost", level: "Strong" }
    ]
  },
  {
    category: "Big Data & Distributed Systems",
    skills: [
      { name: "Apache Spark & PySpark", level: "Core" },
      { name: "Apache Kafka", level: "Core" },
      { name: "Apache Iceberg & Delta Lake", level: "Core" },
      { name: "Apache Airflow (MWAA)", level: "Core" },
      { name: "Distributed System Design", level: "Core" },
      { name: "Event-Driven Architecture", level: "Core" },
      { name: "Data Modeling & Medallion Arch", level: "Core" },
      { name: "Apache Flink", level: "Working Knowledge" }
    ]
  },
  {
    category: "Programming & Foundations",
    skills: [
      { name: "Python", level: "Core" },
      { name: "Scala", level: "Strong" },
      { name: "Java", level: "Strong" },
      { name: "SQL (Advanced)", level: "Core" },
      { name: "TypeScript / JavaScript", level: "Strong" },
      { name: "Data Structures & Algorithms", level: "Strong" }
    ]
  },
  {
    category: "Databases & Storage",
    skills: [
      { name: "PostgreSQL & pgvector", level: "Core" },
      { name: "Milvus / Qdrant Vector DBs", level: "Core" },
      { name: "Elasticsearch & OpenSearch", level: "Strong" },
      { name: "Redis Caching", level: "Core" },
      { name: "AWS DynamoDB", level: "Strong" },
      { name: "Apache Cassandra", level: "Strong" }
    ]
  },
  {
    category: "Cloud & Infrastructure",
    skills: [
      { name: "Amazon Web Services (AWS)", level: "Core" },
      { name: "Google Cloud Platform (GCP)", level: "Strong" },
      { name: "Docker & Containerization", level: "Core" },
      { name: "Kubernetes (EKS/GKE)", level: "Strong" },
      { name: "Terraform", level: "Working Knowledge" },
      { name: "CI/CD & Observability (Datadog)", level: "Strong" }
    ]
  }
];

export const educationList: EducationItem[] = [
  {
    id: "iim-vizag",
    institution: "Indian Institute of Management (IIM) Visakhapatnam",
    degree: "Executive Master of Business Administration",
    field: "Leadership with AI & Artificial Intelligence",
    period: "2026 – 2027",
    honors: "Executive Leadership Program"
  },
  {
    id: "bits-pilani",
    institution: "Birla Institute of Technology and Science (BITS), Pilani",
    degree: "Master of Technology (M.Tech)",
    field: "Data Science and Machine Learning",
    period: "2021 – 2023",
    honors: "First Class with Distinction"
  },
  {
    id: "bput",
    institution: "Biju Patnaik University of Technology (BPUT)",
    degree: "Bachelor of Technology (B.Tech)",
    field: "Electronics & Telecommunication Engineering",
    period: "2004 – 2008"
  }
];

export const patents: PatentItem[] = [
  {
    title: "A System and Business Model for Initiating Strategic Product Improvement Programs in Aerospace Industries",
    description: "Architected a predictive analytical system for anomaly detection and lifecycle telemetry tracking across aerospace hardware modules.",
    year: "Patent Grant",
    status: "Published / Granted",
    organization: "Honeywell / Aerospace"
  }
];

export const featuredProjects: FeaturedProject[] = [
  {
    id: "sparkplug",
    title: "SparkPlug: Autonomous Spark Optimization & RCA Platform",
    tagline: "Agentic AI platform automating Spark workload migrations, runtime tuning, and root cause failure analysis.",
    category: "Agentic AI",
    scale: "Petabyte-scale, 5,000+ daily production Spark pipelines",
    problem: "Upgrading distributed Spark jobs across thousands of pipelines required hundreds of engineering hours, manual log combing, and trial-and-error memory/skew tuning.",
    architectureDescription: "Designed an autonomous multi-agent system utilizing LangGraph and custom Spark log parsers. Comprises three specialized agents: (1) Upgrade Diagnostic Agent, (2) Skew & Spill Optimizer Agent, and (3) RCA Log Analyzer Agent.",
    myRole: "Staff Architect & Lead Engineer",
    technologies: ["LangGraph", "Python", "Apache Spark 3.x", "MCP", "FastAPI", "Vector Store"],
    keyDecisions: [
      "Separated deterministic plan analysis (EventLog parsing) from LLM reasoning to ensure zero hallucination on metrics.",
      "Used Model Context Protocol (MCP) to securely query cluster metrics without direct shell access.",
      "Implemented verification loops where proposed Spark config changes are simulated before PR creation."
    ],
    impact: "Reduced average Spark incident triage from 3 hours to 4 minutes; drove 28% compute cost reduction on skewed batch pipelines.",
    lessonsLearned: [
      "Agents need high-fidelity deterministic tools; asking an LLM to read raw 500MB logs fails context limits and inflates cost.",
      "Domain-specific abstractions beat generic prompts every time."
    ]
  },
  {
    id: "messaging-nlp",
    title: "Real-Time NLP Messaging Intelligence & Compliance Platform",
    tagline: "Low-latency transformer classification pipeline analyzing billions of carrier messages daily.",
    category: "LLM & NLP",
    scale: "Billions of events/day, <45ms p99 latency",
    problem: "Real-time carrier compliance required classifying unsolicited, fraudulent, or high-risk SMS traffic across dozens of languages without degrading throughput.",
    architectureDescription: "Dual-tier architecture: A high-throughput feature extraction pipeline fed into a tiered classification cascade. Lightweight DistilBERT & XGBoost ensembles filtered 92% of traffic in 8ms, routing ambiguous cases to specialized fine-tuned transformer models.",
    myRole: "Principal Engineer & Platform Lead",
    technologies: ["PyTorch", "DistilBERT", "BERT", "XGBoost", "Apache Kafka", "AWS EMR Serverless", "Docker"],
    keyDecisions: [
      "Quantized models via ONNX Runtime to achieve sub-10ms CPU inference, eliminating GPU cluster provisioning costs.",
      "Implemented shadow deployment testing to benchmark F1-score against live traffic without risking false-positive blocks."
    ],
    impact: "Achieved 99.4% precision on spam/fraud categorization while sustaining 100k+ TPS peak messaging traffic.",
    lessonsLearned: [
      "In high-throughput systems, cascading lightweight models before heavy transformers saves millions in compute.",
      "Continuous data drift monitoring is non-negotiable for messaging compliance."
    ]
  },
  {
    id: "streaming-lakehouse",
    title: "Petabyte-Scale Streaming Lakehouse on Apache Iceberg",
    tagline: "Ultra-resilient real-time analytical foundation unifying streaming telemetry with ACID lakehouse storage.",
    category: "Streaming & Data",
    scale: "10+ PB active storage, millions of events/sec",
    problem: "Legacy Hive data lakes suffered from file listing bottlenecks, slow partition updates, and inconsistent reads during high-frequency micro-batch writes.",
    architectureDescription: "Implemented Apache Iceberg on AWS EMR Serverless and S3, fed by distributed Kafka topics with Spark Structured Streaming. Orchestrated by Apache Airflow with automated compaction and snapshot expiration jobs.",
    myRole: "Principal Data Architect",
    technologies: ["Apache Iceberg", "Apache Spark", "Kafka", "AWS EMR Serverless", "AWS S3", "Apache Airflow"],
    keyDecisions: [
      "Adopted hidden partitioning and sorted writes in Iceberg to eliminate query scan overhead on high-cardinality timestamp filters.",
      "Decoupled streaming ingestion from compaction into an asynchronous serverless maintenance cycle."
    ],
    impact: "Reduced query times by 65% for downstream analytics teams while slashing storage footprint by 35% through Z-ordering.",
    lessonsLearned: [
      "ACID lakehouse formats solve read consistency, but compaction topology must be actively tuned to prevent small file explosion."
    ]
  },
  {
    id: "agentic-rag-platform",
    title: "Enterprise Multi-Agent RAG & Tool Orchestration Platform",
    tagline: "Secure, observable AI assistant platform integrating internal codebases, docs, and telemetry.",
    category: "Distributed Systems",
    scale: "Enterprise-wide internal engineering adoption",
    problem: "Engineers faced fragmented knowledge across Jira, Confluence, GitHub repositories, and Datadog dashboards.",
    architectureDescription: "Built an Agentic RAG system with LangGraph state machines, hybrid dense/sparse search (Milvus + BM25), Cross-Encoder reranking, and MCP tool servers communicating over encrypted transports.",
    myRole: "Staff AI Platform Lead",
    technologies: ["LangGraph", "Model Context Protocol", "Milvus", "Python", "FastAPI", "OpenTelemetry", "Docker"],
    keyDecisions: [
      "Used parent-child chunking to return full functional code context while indexing precise semantic fragments.",
      "Integrated OpenTelemetry traces into every agent step, recording latency, prompt token counts, and tool invocation status."
    ],
    impact: "Standardized secure LLM application patterns across 40+ engineering squads with turnkey observability and evaluation.",
    lessonsLearned: [
      "Agent safety depends on deterministic schema validation on tool outputs before returning state to the planner."
    ]
  }
];
