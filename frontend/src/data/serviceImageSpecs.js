/**
 * Title-driven image specifications for service pillars and subservices.
 * Titles mirror service card and section labels in `serviceCatalog.js`.
 * Each entry maps to a unique, verified Unsplash theme via `photoId`.
 */

export const SERVICE_IMAGE_SPECS = [
  // ── Main service pillars (card + hero + intro) ──────────────────────────
  {
    id: "artificial-intelligence",
    kind: "pillar",
    title: "Applied AI Engineering",
    photoId: "photo-1677442136019-21780ecad995",
    alt: "Applied AI Engineering — model integration and intelligent software delivery",
  },
  {
    id: "data-engineering",
    kind: "pillar",
    title: "Enterprise Data Engineering",
    photoId: "photo-1551288049-bebda4e38f71",
    alt: "Enterprise Data Engineering — analytics dashboards and governed data pipelines",
  },
  {
    id: "generative-ai",
    kind: "pillar",
    title: "Generative AI Solutions",
    photoId: "photo-1620712943543-bcc4688e7485",
    alt: "Generative AI Solutions — agents, copilots, and enterprise workflow automation",
  },
  {
    id: "devops",
    kind: "pillar",
    title: "Platform Reliability & DevOps",
    photoId: "photo-1558494949-ef010cbdcc31",
    alt: "Platform Reliability & DevOps — CI/CD infrastructure and production observability",
  },
  {
    id: "development-services",
    kind: "pillar",
    title: "Software Product Engineering",
    photoId: "photo-1461749280684-dccba630e2f6",
    alt: "Software Product Engineering — full-stack, mobile, and API platform delivery",
  },

  // ── Applied AI Engineering subservices ──────────────────────────────────
  {
    id: "applied-ai-advisory",
    kind: "subservice",
    title: "AI Strategy & Advisory",
    photoId: "photo-1600880292203-757bb62b4baf",
    alt: "AI Strategy & Advisory — use-case prioritization and pilot roadmap planning",
  },
  {
    id: "context-retrieval-systems",
    kind: "subservice",
    title: "Retrieval-Augmented System Engineering",
    photoId: "photo-1460925895917-afdab827c52f",
    alt: "Retrieval-Augmented System Engineering — hybrid search and knowledge indexing",
  },
  {
    id: "language-model-engineering",
    kind: "subservice",
    title: "Large Language Model Engineering",
    photoId: "photo-1517694712202-14dd9538aa97",
    alt: "Large Language Model Engineering — inference APIs, routing, and model operations",
  },
  {
    id: "intelligent-application-delivery",
    kind: "subservice",
    title: "Intelligent Application Development",
    photoId: "photo-1487058792275-0ad4aaf24ca7",
    alt: "Intelligent Application Development — embedded scoring and decision support features",
  },
  {
    id: "ai-enabled-software-delivery",
    kind: "subservice",
    title: "AI-Enabled Software Engineering",
    photoId: "photo-1551434678-e076c223a692",
    alt: "AI-Enabled Software Engineering — integrated AI components under release discipline",
  },
  {
    id: "enterprise-ai-integration",
    kind: "subservice",
    title: "Enterprise AI Integration",
    photoId: "photo-1563013544-824ae1b704d3",
    alt: "Enterprise AI Integration — CRM, ERP, and platform API orchestration",
  },

  // ── Enterprise Data Engineering subservices ─────────────────────────────
  {
    id: "decision-analytics-engineering",
    kind: "subservice",
    title: "Decision Analytics Engineering",
    photoId: "photo-1554224155-6726b3ff858f",
    alt: "Decision Analytics Engineering — semantic metrics and executive dashboards",
  },
  {
    id: "enterprise-data-repository-design",
    kind: "subservice",
    title: "Enterprise Data Warehouse Design",
    photoId: "photo-1581091226825-a6a2a5aee158",
    alt: "Enterprise Data Warehouse Design — lakehouse architecture and storage tiers",
  },
  {
    id: "training-data-preparation",
    kind: "subservice",
    title: "Training Data Preparation & Labeling",
    photoId: "photo-1451187580459-43490279c0fa",
    alt: "Training Data Preparation & Labeling — annotation pipelines and dataset versioning",
  },

  // ── Generative AI Solutions subservices ─────────────────────────────────
  {
    id: "autonomous-agent-engineering",
    kind: "subservice",
    title: "Autonomous Agent Engineering",
    photoId: "photo-1556742049-0cfed4f6a45d",
    alt: "Autonomous Agent Engineering — multi-step agents with tool orchestration",
  },
  {
    id: "conversational-experience-engineering",
    kind: "subservice",
    title: "Conversational Interface Engineering",
    photoId: "photo-1577563908411-5077b6dc7624",
    alt: "Conversational Interface Engineering — channel-aware assistants and escalation routing",
  },
  {
    id: "model-adaptation-alignment",
    kind: "subservice",
    title: "Domain Model Fine-Tuning",
    photoId: "photo-1516321318423-f06f85e504b3",
    alt: "Domain Model Fine-Tuning — supervised training and evaluation benchmarks",
  },
  {
    id: "foundation-model-integration",
    kind: "subservice",
    title: "Commercial LLM Integration",
    photoId: "photo-1526374965328-7f61d4dc18c5",
    alt: "Commercial LLM Integration — provider routing, residency, and cost controls",
  },
  {
    id: "generative-capability-integration",
    kind: "subservice",
    title: "Generative Feature Integration",
    photoId: "photo-1450101499163-c8848c66ca85",
    alt: "Generative Feature Integration — schema-constrained outputs in product workflows",
  },
  {
    id: "adaptive-intelligence-systems",
    kind: "subservice",
    title: "Adaptive Intelligence Systems",
    photoId: "photo-1531403009284-440f080d1e12",
    alt: "Adaptive Intelligence Systems — feedback loops with policy guardrails",
  },
  {
    id: "role-based-copilot-engineering",
    kind: "subservice",
    title: "Enterprise Copilot Engineering",
    photoId: "photo-1521737711867-e3b97375f902",
    alt: "Enterprise Copilot Engineering — role-scoped assistants in CRM and internal tools",
  },

  // ── Platform Reliability & DevOps subservices ───────────────────────────
  {
    id: "intelligent-operations-automation",
    kind: "subservice",
    title: "Intelligent Operations (AIOps)",
    photoId: "photo-1504639725590-34d0984388bd",
    alt: "Intelligent Operations (AIOps) — automated remediation and incident correlation",
  },
  {
    id: "delivery-pipeline-advisory",
    kind: "subservice",
    title: "DevOps Strategy & Advisory",
    photoId: "photo-1542744173-8e7e53415bb0",
    alt: "DevOps Strategy & Advisory — release maturity assessment and roadmap planning",
  },
  {
    id: "continuous-delivery-engineering",
    kind: "subservice",
    title: "Pipeline Automation Engineering",
    photoId: "photo-1518980120692-3cfe64c152d0",
    alt: "Pipeline Automation Engineering — CI/CD pipelines with deployment gates",
  },
  {
    id: "reliability-resilience-engineering",
    kind: "subservice",
    title: "Site Reliability Engineering",
    photoId: "photo-1553877522-43269d4ea984",
    alt: "Site Reliability Engineering — SLO design, runbooks, and resilience testing",
  },
  {
    id: "model-performance-observability",
    kind: "subservice",
    title: "LLM & Model Observability",
    photoId: "photo-1441986300917-64674bd600d8",
    alt: "LLM & Model Observability — latency, drift, and quality monitoring dashboards",
  },

  // ── Software Product Engineering subservices ────────────────────────────
  {
    id: "mobile-engineering",
    kind: "subservice",
    title: "Mobile Application Engineering",
    photoId: "photo-1511707171634-5f897ff02aa9",
    alt: "Mobile Application Engineering — iOS, Android, and cross-platform delivery",
  },
  {
    id: "custom-software-engineering",
    kind: "subservice",
    title: "Custom Software Engineering",
    photoId: "photo-1633356122544-f134324a6cee",
    alt: "Custom Software Engineering — full-stack systems with test automation",
  },
  {
    id: "embedded-engineering-teams",
    kind: "subservice",
    title: "Embedded Engineering Teams",
    photoId: "photo-1522071820081-009f0129c71c",
    alt: "Embedded Engineering Teams — senior practitioners aligned to client delivery cadence",
  },
  {
    id: "end-to-end-product-development",
    kind: "subservice",
    title: "End-to-End Product Engineering",
    photoId: "photo-1552664730-d307ca884978",
    alt: "End-to-End Product Engineering — discovery through launch with defined acceptance criteria",
  },
  {
    id: "api-platform-engineering",
    kind: "subservice",
    title: "API Platform Engineering",
    photoId: "photo-1555949963-aa79dcee981c",
    alt: "API Platform Engineering — REST, GraphQL, and event API design with developer portals",
  },
];

export const SERVICE_IMAGE_SPECS_BY_ID = Object.fromEntries(
  SERVICE_IMAGE_SPECS.map((spec) => [spec.id, spec])
);

/** Capability-section images keyed by pillar id (Methodology / Foundations sections). */
export const PILLAR_CAPABILITY_IMAGE_SPECS = {
  "artificial-intelligence": {
    subserviceId: "language-model-engineering",
    alt: "Large Language Model Engineering — foundations for Applied AI Engineering delivery",
  },
  "data-engineering": {
    subserviceId: "enterprise-data-repository-design",
    alt: "Enterprise Data Warehouse Design — foundations for data platform delivery",
  },
  "generative-ai": {
    subserviceId: "autonomous-agent-engineering",
    alt: "Autonomous Agent Engineering — foundations for generative AI delivery",
  },
  devops: {
    subserviceId: "continuous-delivery-engineering",
    alt: "Pipeline Automation Engineering — foundations for platform reliability delivery",
  },
  "development-services": {
    subserviceId: "custom-software-engineering",
    alt: "Custom Software Engineering — foundations for product engineering delivery",
  },
};
