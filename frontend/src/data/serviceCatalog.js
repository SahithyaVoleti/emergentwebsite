/**
 * Canonical service catalog — five main disciplines with subservices aligned to
 * applied AI, data, generative AI, DevOps, and product engineering offerings.
 */
import { getSubserviceCardImage } from "./serviceSubserviceImages";
import { getPillarCardImage } from "./serviceImages";

export const SERVICE_CATALOG = [
  {
    id: "artificial-intelligence",
    label: "Applied AI Engineering",
    cardImage: getPillarCardImage("artificial-intelligence"),
    tagline: "Strategy, models, and intelligent software integrated into enterprise systems.",
    shortDesc:
      "Applied AI programs spanning advisory, retrieval systems, language-model engineering, intelligent applications, and enterprise integration—with measurable delivery gates.",
    subservices: [
      {
        id: "applied-ai-advisory",
        title: "AI Strategy & Advisory",
        desc: "Use-case prioritization, feasibility assessment, and roadmap design tied to integration constraints and governance requirements.",
        items: ["Opportunity mapping", "ROI modeling", "Risk assessment", "Phased rollout planning"],
      },
      {
        id: "context-retrieval-systems",
        title: "Retrieval-Augmented System Engineering",
        desc: "Permission-aware retrieval pipelines, hybrid search, and grounded response layers for enterprise knowledge workloads.",
        items: ["Corpus design", "Vector indexing", "Source attribution", "Evaluation harnesses"],
      },
      {
        id: "language-model-engineering",
        title: "Large Language Model Engineering",
        desc: "Design, build, and operate language-model capabilities with secure inference paths, routing, and product interfaces.",
        items: ["Model selection", "Inference APIs", "Latency tuning", "Cost controls"],
      },
      {
        id: "intelligent-application-delivery",
        title: "Intelligent Application Development",
        desc: "Applications with embedded scoring, classification, and decision support designed for production monitoring and rollback.",
        items: ["Feature design", "Model serving", "UI integration", "Quality monitoring"],
      },
      {
        id: "ai-enabled-software-delivery",
        title: "AI-Enabled Software Engineering",
        desc: "Software delivery that combines conventional engineering with AI components under shared release and test discipline.",
        items: ["Solution architecture", "Component integration", "Regression testing", "Release governance"],
      },
      {
        id: "enterprise-ai-integration",
        title: "Enterprise AI Integration",
        desc: "Connect AI services to CRM, ERP, data platforms, and internal tools with identity, audit, and policy boundaries.",
        items: ["API orchestration", "Event-driven hooks", "Access controls", "Audit logging"],
      },
    ],
  },
  {
    id: "data-engineering",
    label: "Enterprise Data Engineering",
    cardImage: getPillarCardImage("data-engineering"),
    tagline: "Analytics platforms, repositories, and training data pipelines.",
    shortDesc:
      "Engineer governed data platforms for analytics, warehousing, and labeling workflows that AI and decision systems depend on.",
    subservices: [
      {
        id: "decision-analytics-engineering",
        title: "Decision Analytics Engineering",
        desc: "Metric definitions, semantic layers, and dashboards that connect operational data to business decisions with documented ownership.",
        items: ["Metric modeling", "BI integration", "Self-service views", "Performance tuning"],
      },
      {
        id: "enterprise-data-repository-design",
        title: "Enterprise Data Warehouse Design",
        desc: "Warehouse and lakehouse architectures with workload isolation, cost management, and access patterns for analytics and AI features.",
        items: ["Schema design", "Storage tiers", "Query optimization", "Access policies"],
      },
      {
        id: "training-data-preparation",
        title: "Training Data Preparation & Labeling",
        desc: "Labeling workflows, quality sampling, and dataset versioning for supervised learning and evaluation programs.",
        items: ["Annotation pipelines", "Inter-annotator review", "Dataset versioning", "Bias sampling checks"],
      },
    ],
  },
  {
    id: "generative-ai",
    label: "Generative AI Solutions",
    cardImage: getPillarCardImage("generative-ai"),
    tagline: "Agents, copilots, and generative capabilities for enterprise workflows.",
    shortDesc:
      "Deliver generative AI capabilities—autonomous agents, conversational experiences, model adaptation, foundation-model integration, adaptive systems, and copilots—with enterprise controls.",
    subservices: [
      {
        id: "autonomous-agent-engineering",
        title: "Autonomous Agent Engineering",
        desc: "Multi-step agents with scoped tools, durable execution, escalation paths, and operational kill switches.",
        items: ["Tool integration", "Workflow automation", "Human handoff", "Run records and tracing"],
      },
      {
        id: "conversational-experience-engineering",
        title: "Conversational Interface Engineering",
        desc: "Channel-aware assistants with policy filters, session memory, and reviewer workflows for regulated interactions.",
        items: ["Dialog design", "Channel adapters", "Content filtering", "Escalation routing"],
      },
      {
        id: "model-adaptation-alignment",
        title: "Domain Model Fine-Tuning",
        desc: "Domain tuning with supervised training, preference alignment, and rollback when held-out metrics regress.",
        items: ["Supervised fine-tuning", "LoRA and QLoRA", "Evaluation benchmarks", "Version control"],
      },
      {
        id: "foundation-model-integration",
        title: "Commercial LLM Integration",
        desc: "Connect commercial foundation models to enterprise applications with routing, residency, and cost policies.",
        items: ["Provider selection", "Private networking", "Multi-model routing", "Usage metering"],
      },
      {
        id: "generative-capability-integration",
        title: "Generative Feature Integration",
        desc: "Embed text, image, and structured generation into existing products with schema-constrained outputs and audit trails.",
        items: ["Output schemas", "Template libraries", "Safety filters", "Change management"],
      },
      {
        id: "adaptive-intelligence-systems",
        title: "Adaptive Intelligence Systems",
        desc: "Systems that adjust prompts, retrieval, or routing based on feedback signals while preserving governance boundaries.",
        items: ["Feedback loops", "Policy guardrails", "Canary releases", "Regression monitoring"],
      },
      {
        id: "role-based-copilot-engineering",
        title: "Enterprise Copilot Engineering",
        desc: "Assistants scoped to job functions inside CRM, ERP, and internal tools with citation policies and tool permissions.",
        items: ["Role scoping", "Knowledge copilots", "Tool permissions", "Conversation audit trails"],
      },
    ],
  },
  {
    id: "devops",
    label: "Platform Reliability & DevOps",
    cardImage: getPillarCardImage("devops"),
    tagline: "Delivery automation, reliability engineering, and model observability.",
    shortDesc:
      "Establish CI/CD, platform automation, reliability engineering, and observability—including model performance monitoring—for AI and enterprise workloads.",
    subservices: [
      {
        id: "intelligent-operations-automation",
        title: "Intelligent Operations (AIOps)",
        desc: "Automated remediation, anomaly correlation, and AI-assisted incident triage integrated with existing on-call workflows.",
        items: ["Event correlation", "Runbook automation", "Alert tuning", "Capacity signals"],
      },
      {
        id: "delivery-pipeline-advisory",
        title: "DevOps Strategy & Advisory",
        desc: "Assess release maturity, toil, and operational risk; define a prioritized roadmap for pipeline and platform improvements.",
        items: ["Maturity assessment", "Risk prioritization", "Standards definition", "Team enablement plans"],
      },
      {
        id: "continuous-delivery-engineering",
        title: "Pipeline Automation Engineering",
        desc: "Pipeline-as-code with signed artifacts, environment promotion, and rollback procedures tied to release policy.",
        items: ["Build pipelines", "Automated testing", "Deployment gates", "Rollback automation"],
      },
      {
        id: "reliability-resilience-engineering",
        title: "Site Reliability Engineering",
        desc: "SLO design, error budgets, chaos testing, and incident runbooks for mission-critical services and model endpoints.",
        items: ["SLO tracking", "Incident runbooks", "Chaos exercises", "Capacity planning"],
      },
      {
        id: "model-performance-observability",
        title: "LLM & Model Observability",
        desc: "Monitor latency, drift, quality regressions, and cost for language-model and ML endpoints in production.",
        items: ["Drift alerts", "Quality dashboards", "Token budgeting", "Trace correlation"],
      },
    ],
  },
  {
    id: "development-services",
    label: "Software Product Engineering",
    cardImage: getPillarCardImage("development-services"),
    tagline: "Mobile, software, product, and API engineering for enterprise delivery.",
    shortDesc:
      "Engineering services for mobile applications, custom software, embedded teams, product development, and API platforms—with defined acceptance criteria and handover.",
    subservices: [
      {
        id: "mobile-engineering",
        title: "Mobile Application Engineering",
        desc: "iOS, Android, and cross-platform mobile applications with offline resilience, secure sync, and store-ready release paths.",
        items: ["React Native and Flutter", "Offline sync", "Push notifications", "Store deployment"],
      },
      {
        id: "custom-software-engineering",
        title: "Custom Software Engineering",
        desc: "Web and backend systems built to enterprise standards with test coverage, documentation, and operational handover.",
        items: ["Full-stack delivery", "Code review gates", "Automated testing", "Technical documentation"],
      },
      {
        id: "embedded-engineering-teams",
        title: "Embedded Engineering Teams",
        desc: "Senior practitioners embedded with your product organization under NeuralTrix delivery standards and reporting cadence.",
        items: ["Team composition", "Sprint alignment", "Knowledge transfer", "Quality checkpoints"],
      },
      {
        id: "end-to-end-product-development",
        title: "End-to-End Product Engineering",
        desc: "Discovery through launch for a defined product slice—architecture, build, test, and release with stakeholder sign-off.",
        items: ["Product discovery", "UX and engineering", "Launch checklist", "Post-launch support window"],
      },
      {
        id: "api-platform-engineering",
        title: "API Platform Engineering",
        desc: "REST, GraphQL, and event APIs with versioning, developer portals, and integration patterns for partners and internal systems.",
        items: ["API design", "Authentication layers", "Rate limiting", "Developer documentation"],
      },
    ],
  },
];

export const SERVICE_CATALOG_BY_ID = Object.fromEntries(
  SERVICE_CATALOG.map((entry) => [entry.id, entry])
);

export function getSubserviceCards(pillarId) {
  const pillar = SERVICE_CATALOG_BY_ID[pillarId];
  if (!pillar) return [];

  return pillar.subservices.map((sub) => ({
    key: sub.id,
    id: sub.id,
    title: sub.title,
    href: `/services/${sub.id}`,
    testId: `subservice-card-${sub.id}`,
    cardImage: sub.cardImage ?? getSubserviceCardImage(sub.id),
  }));
}

/** Resolve a subservice slug to its pillar and catalog entry. */
export function findSubserviceById(subserviceId) {
  if (!subserviceId) return null;

  for (const pillar of SERVICE_CATALOG) {
    const subservice = pillar.subservices.find((sub) => sub.id === subserviceId);
    if (subservice) {
      return { pillar, subservice };
    }
  }

  return null;
}

export function isSubserviceSlug(slug) {
  return Boolean(findSubserviceById(slug));
}
