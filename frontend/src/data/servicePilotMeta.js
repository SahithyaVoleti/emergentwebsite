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
      "Product and data teams moving from experimentation to monitored AI capabilities with clear acceptance tests.",
    inScope: [
      "Problem framing and dataset readiness review",
      "Baseline model or feature delivery",
      "Inference path behind an API or application",
    ],
    outOfScope: ["Enterprise-wide model catalog rollout", "Unbounded data labeling programs"],
    pilotDuration: "6–8 weeks",
    deliverables: [
      "Evaluation report with slice metrics",
      "Versioned model artifact and registry entry",
      "Monitoring hooks for drift or performance",
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
  "generative-ai": {
    idealFor:
      "Teams piloting copilots or retrieval assistants that require guardrails, citations, and reviewer workflows.",
    inScope: [
      "Use-case decomposition and prompt or RAG design",
      "Retrieval corpus setup with access controls",
      "Human review loop for high-risk outputs",
    ],
    outOfScope: ["Company-wide chatbot rollout", "Unreviewed autonomous agents"],
    pilotDuration: "4–8 weeks",
    deliverables: [
      "Prompt and retrieval configuration",
      "Evaluation set with regression checks",
      "Operator guide for content updates",
    ],
  },
  devops: {
    idealFor:
      "Engineering organizations stabilizing delivery pipelines, observability, and environment parity for AI workloads.",
    inScope: [
      "CI/CD path for application and model artifacts",
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
  "development-services": {
    idealFor:
      "Product teams delivering a scoped web, mobile, or API increment with defined acceptance criteria and launch readiness.",
    inScope: [
      "Discovery and architecture for one product slice",
      "Build and test of agreed user journeys",
      "Launch checklist and operator handover",
    ],
    outOfScope: ["Full product rewrites without phased milestones", "Indefinite staff augmentation"],
    pilotDuration: "6–10 weeks",
    deliverables: [
      "Working increment in staging or production",
      "API or integration documentation",
      "Release and rollback runbook",
    ],
  },
};

export function getServicePilotMeta(slug) {
  return SERVICE_PILOT_META[slug] ?? DEFAULT_PILOT_META;
}

export default SERVICE_PILOT_META;
