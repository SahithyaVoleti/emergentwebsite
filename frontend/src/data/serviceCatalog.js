/**
 * Canonical service catalog — four main disciplines with four to six subservices each.
 */
import { getSubserviceCardImage } from "./serviceSubserviceImages";
export const SERVICE_CATALOG = [
  {
    id: "generative-ai",
    label: "Enterprise Generative AI",
    cardImage: "/media/service-ai-product-transformation.png",
    tagline: "Copilots and agents built into enterprise workflows.",
    shortDesc:
      "Embed copilots, agents, and generative capabilities in enterprise workflows with retrieval, safety controls, and operational governance.",
    subservices: [
      {
        id: "enterprise-copilots",
        title: "Enterprise AI Copilots",
        desc: "Role-scoped assistants embedded in CRM, ERP, and internal tools with citation policies, tool permissions, and audit logging.",
        items: ["Knowledge copilots", "Workflow assistants", "Role-based access", "Conversation audit trails"],
      },
      {
        id: "retrieval-augmented-generation",
        title: "Enterprise Knowledge Intelligence",
        desc: "Permission-aware document retrieval, hybrid search, and grounded responses measured against fixed evaluation sets.",
        items: ["Document ingestion", "Vector search", "Source attribution", "Index lifecycle management"],
      },
      {
        id: "intelligent-document-processing",
        title: "Intelligent Document Processing",
        desc: "Layout-aware extraction, confidence routing, and human review queues for regulated document workflows.",
        items: ["OCR and layout parsing", "Field validation", "Review queues", "ECM integration"],
      },
      {
        id: "agent-orchestration",
        title: "Agentic Workflow Automation",
        desc: "Multi-step agents with scoped tools, durable execution, escalation paths, and operational kill switches.",
        items: ["Tool integration", "Workflow automation", "Human handoff", "Run records and tracing"],
      },
      {
        id: "prompt-engineering",
        title: "AI Prompt Systems Engineering",
        desc: "Versioned prompts, regression suites, and controlled rollout when model or policy changes affect production quality.",
        items: ["Prompt libraries", "Evaluation harnesses", "Canary releases", "Failure-mode testing"],
      },
      {
        id: "generative-ai-governance",
        title: "Generative AI Assurance",
        desc: "Policy filters, access reviews, model documentation, and incident procedures for enterprise AI programs.",
        items: ["Content filtering", "Bias and safety testing", "Model cards", "Compliance alignment"],
      },
    ],
  },
  {
    id: "machine-learning",
    label: "Machine Intelligence",
    cardImage: "/media/service-model-fine-tuning-ml.png",
    tagline: "Production machine learning, from models to live monitoring.",
    shortDesc:
      "Deliver production machine learning programs—from model development and fine-tuning through MLOps, monitoring, and enterprise integration.",
    subservices: [
      {
        id: "predictive-analytics",
        title: "Predictive Intelligence",
        desc: "Forecasting and classification models with calibrated scoring, backtesting, and integration into operational systems.",
        items: ["Demand forecasting", "Risk scoring", "Churn prediction", "Batch and online inference"],
      },
      {
        id: "natural-language-processing",
        title: "Language Intelligence",
        desc: "Text classification, entity extraction, and summarization with regression testing and domain-specific evaluation.",
        items: ["Entity recognition", "Intent classification", "Summarization", "Multilingual support"],
      },
      {
        id: "computer-vision",
        title: "Visual Intelligence",
        desc: "Detection, classification, and inspection models with label governance, drift monitoring, and edge deployment options.",
        items: ["Object detection", "Quality inspection", "Video analytics", "Edge inference"],
      },
      {
        id: "model-fine-tuning",
        title: "Domain Model Adaptation",
        desc: "Domain adaptation with supervised training, preference alignment, and rollback when held-out metrics regress.",
        items: ["Supervised fine-tuning", "LoRA and QLoRA", "Evaluation benchmarks", "Version control"],
      },
      {
        id: "mlops",
        title: "Production ML Operations",
        desc: "Reproducible training pipelines, staged promotions, drift alerts, and retraining runbooks for production ML.",
        items: ["Model registry", "CI/CD for models", "Drift monitoring", "Canary deployments"],
      },
      {
        id: "llm-engineering",
        title: "LLM Production Engineering",
        desc: "Secure inference endpoints, multi-model routing, cost controls, and integration layers for language-model workloads.",
        items: ["Inference APIs", "Model routing", "Token budgeting", "Latency optimization"],
      },
    ],
  },
  {
    id: "data-engineering",
    label: "Data Platform Engineering",
    cardImage: "/media/service-data-engineering.png",
    tagline: "Governed data platforms for analytics and AI features.",
    shortDesc:
      "Engineer governed data platforms that supply reliable features, retrieval corpora, and analytics for AI and enterprise applications.",
    subservices: [
      {
        id: "data-pipeline-engineering",
        title: "Data Pipeline Engineering",
        desc: "Orchestrated ETL and ELT workflows with data contracts, quality checks, and lineage for downstream consumers.",
        items: ["Batch pipelines", "Incremental loads", "Error handling", "Pipeline observability"],
      },
      {
        id: "data-warehouse-lakehouse",
        title: "Analytics Platform Engineering",
        desc: "Dimensional modeling, workload isolation, and cost-managed storage for analytics and AI feature generation.",
        items: ["Schema design", "Materialized views", "Access controls", "Query optimization"],
      },
      {
        id: "real-time-streaming",
        title: "Real-Time Intelligence Pipelines",
        desc: "Event-driven architectures with schema governance, lag monitoring, and recovery procedures for stream consumers.",
        items: ["Kafka and Flink", "Stream processing", "Schema registry", "Consumer lag alerts"],
      },
      {
        id: "data-governance",
        title: "Data Trust & Governance",
        desc: "Cataloging, stewardship workflows, PII classification, and automated quality tests across critical datasets.",
        items: ["Data catalog", "Lineage tracking", "Quality SLAs", "Retention policies"],
      },
    ],
  },
  {
    id: "cloud-infrastructure",
    label: "Cloud Platform Engineering",
    cardImage: "/media/service-cloud-infrastructure.png",
    tagline: "Cloud platforms and delivery pipelines for AI workloads.",
    shortDesc:
      "Establish CI/CD, cloud platforms, and application delivery capabilities that support AI workloads and mission-critical software at scale.",
    subservices: [
      {
        id: "cloud-platform-engineering",
        title: "AI Cloud Platform Engineering",
        desc: "Landing zones, self-service environments, and guardrails for teams deploying AI and enterprise applications.",
        items: ["Multi-account setup", "Identity integration", "Network design", "Cost allocation"],
      },
      {
        id: "cicd-release-automation",
        title: "Continuous Delivery Automation",
        desc: "Pipeline-as-code with signed artifacts, environment promotion, and rollback procedures tied to release policy.",
        items: ["Build pipelines", "Automated testing", "Deployment gates", "Rollback automation"],
      },
      {
        id: "kubernetes-operations",
        title: "Container Platform Operations",
        desc: "Cluster hardening, autoscaling, GitOps workflows, and upgrade cadences for containerized production workloads.",
        items: ["Cluster setup", "Helm releases", "Autoscaling", "Network policies"],
      },
      {
        id: "infrastructure-as-code",
        title: "Programmable Infrastructure",
        desc: "Versioned modules, policy checks, and drift detection for repeatable cloud and platform provisioning.",
        items: ["Terraform modules", "State management", "Policy as code", "Environment parity"],
      },
      {
        id: "observability-sre",
        title: "Operational Intelligence Engineering",
        desc: "Metrics, traces, and SLO-based alerting with runbooks linked to on-call response for critical services.",
        items: ["Distributed tracing", "SLO tracking", "Incident runbooks", "Capacity planning"],
      },
      {
        id: "application-modernization",
        title: "AI-Ready Application Engineering",
        desc: "Phased migration of legacy systems to cloud-native architectures with API layers ready for AI integration.",
        items: ["Legacy assessment", "API modernization", "Incremental migration", "Parallel run validation"],
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
    href: `/services/${pillar.id}#${sub.id}`,
    testId: `subservice-card-${sub.id}`,
    cardImage: sub.cardImage ?? getSubserviceCardImage(sub.id),
  }));
}
