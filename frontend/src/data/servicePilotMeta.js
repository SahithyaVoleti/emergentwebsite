const DEFAULT_PILOT_META = {
  idealFor:
    "Teams validating a scoped AI or software pilot with senior-led delivery and documented handover artifacts.",
  inScope: [
    "Discovery workshops and success criteria",
    "One production-quality vertical slice",
    "Evaluation or monitoring baseline",
  ],
  outOfScope: [
    "Open-ended staff augmentation",
    "Full platform rewrites without phased milestones",
  ],
  pilotDuration: "4–8 weeks",
  deliverables: [
    "Architecture and scope decision log",
    "Working increment in your environment",
    "Runbook and acceptance checklist",
  ],
};

const SERVICE_PILOT_META = {
  "artificial-intelligence": {
    idealFor:
      "Product and data teams ready to move from notebooks to a monitored ML baseline with clear acceptance tests.",
    inScope: [
      "Problem framing and dataset readiness review",
      "Baseline model training and offline evaluation",
      "Inference path behind an API or batch job",
    ],
    outOfScope: ["Enterprise-wide model catalog rollout", "Unbounded data labeling programs"],
    pilotDuration: "6–8 weeks",
    deliverables: [
      "Evaluation report with slice metrics",
      "Versioned model artifact and registry entry",
      "Monitoring hooks for drift or performance",
    ],
  },
  "generative-ai": {
    idealFor:
      "Teams piloting copilots or RAG assistants that need guardrails, citations, and reviewer workflows.",
    inScope: [
      "Use-case decomposition and prompt/RAG design",
      "Retrieval corpus setup with access controls",
      "Human review loop for high-risk answers",
    ],
    outOfScope: ["Company-wide chatbot rollout", "Unreviewed autonomous agents"],
    pilotDuration: "4–8 weeks",
    deliverables: [
      "Prompt and retrieval configuration",
      "Evaluation set with regression checks",
      "Operator guide for content updates",
    ],
  },
  "custom-software": {
    idealFor:
      "Organizations shipping a net-new product slice or modernizing a critical workflow with accountable engineering.",
    inScope: [
      "Architecture spike and delivery plan",
      "Core user journeys implemented end-to-end",
      "CI pipeline and environment promotion path",
    ],
    outOfScope: ["Full legacy replacement in one phase", "Undefined scope change requests"],
    pilotDuration: "6–10 weeks",
    deliverables: [
      "Deployable application increment",
      "Technical design record",
      "Test and release checklist",
    ],
  },
  "mobile-apps": {
    idealFor:
      "Teams validating a mobile experience with analytics, release mechanics, and backend integration in place.",
    inScope: [
      "Primary user flows on target platforms",
      "Auth and API integration",
      "Crash and usage telemetry baseline",
    ],
    outOfScope: ["Full app store launch campaign", "Large offline-first rebuilds"],
    pilotDuration: "6–8 weeks",
    deliverables: [
      "Testable build for stakeholder review",
      "Release and configuration notes",
      "Backlog for post-pilot hardening",
    ],
  },
  "ai-agents": {
    idealFor:
      "Operations teams automating repeatable workflows with human takeover, audit logs, and bounded tool access.",
    inScope: [
      "Agent workflow design with tool boundaries",
      "Sandbox execution with logging",
      "Escalation path to human operators",
    ],
    outOfScope: ["Unsupervised autonomous production agents", "Broad enterprise orchestration"],
    pilotDuration: "4–6 weeks",
    deliverables: [
      "Agent runbook and tool manifest",
      "Execution traces and failure taxonomy",
      "Security review notes for tool access",
    ],
  },
  "llm-development": {
    idealFor:
      "Teams maturing LLM features with fine-tuning, evaluation harnesses, and lifecycle promotion criteria.",
    inScope: [
      "Dataset curation and eval harness",
      "Fine-tune or adapter experiment",
      "Promotion criteria and rollback plan",
    ],
    outOfScope: ["Foundation model training from scratch", "Unbounded experimentation without metrics"],
    pilotDuration: "6–8 weeks",
    deliverables: [
      "Model card and evaluation summary",
      "Serving configuration",
      "Regression test suite for prompts or adapters",
    ],
  },
  devops: {
    idealFor:
      "Engineering orgs stabilizing delivery pipelines, observability, and environment parity for AI workloads.",
    inScope: [
      "CI/CD path for app and model artifacts",
      "Observability baseline for one service",
      "Infrastructure-as-code for pilot environments",
    ],
    outOfScope: ["Full multi-cloud migration", "24/7 managed operations takeover"],
    pilotDuration: "4–6 weeks",
    deliverables: [
      "Pipeline definitions and runbooks",
      "Dashboards and alert thresholds",
      "Environment diagram and access model",
    ],
  },
  "data-engineering": {
    idealFor:
      "Data teams building reliable ingestion, transformation, and feature paths that downstream AI products can trust.",
    inScope: [
      "Source-to-curated pipeline for one domain",
      "Data quality checks and lineage notes",
      "Feature or metric store integration point",
    ],
    outOfScope: ["Enterprise-wide lakehouse replatforming", "Multi-year master data programs"],
    pilotDuration: "6–8 weeks",
    deliverables: [
      "Scheduled pipelines with monitoring",
      "Schema and contract documentation",
      "Handover guide for platform operators",
    ],
  },
};

export function getServicePilotMeta(slug) {
  return SERVICE_PILOT_META[slug] ?? DEFAULT_PILOT_META;
}

export default SERVICE_PILOT_META;
