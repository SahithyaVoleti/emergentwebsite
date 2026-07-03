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
  "machine-learning": {
    idealFor:
      "Product and data teams moving from experimentation to a monitored ML baseline with clear acceptance tests.",
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
  "cloud-infrastructure": {
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
};

export function getServicePilotMeta(slug) {
  return SERVICE_PILOT_META[slug] ?? DEFAULT_PILOT_META;
}

export default SERVICE_PILOT_META;
