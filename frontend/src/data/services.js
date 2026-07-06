import { Brain, BarChart3, Cloud, Code, Sparkles } from "lucide-react";
import { SERVICES_HERO_IMAGES as heroImages } from "../lib/heroImageThemes";
import { SERVICE_CATALOG } from "./serviceCatalog";

const SERVICE_META = {
  "artificial-intelligence": {
    icon: Brain,
    heroImage: heroImages[0],
    heroTitle: "Applied AI Engineering",
    heroDesc:
      "Retrieval systems, language-model capabilities, and intelligent application features integrated into products already in market—scoped for governed pilots with measurable acceptance criteria.",
    overview:
      "Applied AI delivery from advisory through production integration—models and intelligent features your product and operations teams can measure, govern, and maintain.",
    techStack: [
      { category: "Frameworks", techs: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "XGBoost"] },
      { category: "Language Models", techs: ["GPT-4o", "Claude", "Gemini", "Llama 3", "Mistral"] },
      { category: "Retrieval", techs: ["LangChain", "LlamaIndex", "Pinecone", "Weaviate", "Milvus"] },
      { category: "MLOps", techs: ["MLflow", "Kubeflow", "Prometheus", "Grafana", "CI/CD Pipelines"] },
    ],
    process: [
      { step: "Discovery", desc: "Assess use cases, data readiness, integration paths, and success metrics before build." },
      { step: "Architecture", desc: "Select model routes, retrieval strategy, and application integration points." },
      { step: "Implementation", desc: "Deliver pipelines, APIs, and application features with staged validation gates." },
      { step: "Evaluation", desc: "Run regression, red-team, and acceptance tests before widening production access." },
      { step: "Integration", desc: "Connect AI services to enterprise systems with identity, audit, and policy controls." },
      { step: "Operations", desc: "Track performance, drift, and cost with defined review cadences." },
    ],
    whyChooseUs: [
      { title: "Production focus", desc: "Capabilities integrated into live products—not isolated experiments without operational ownership." },
      { title: "Governed delivery", desc: "Evaluation gates, audit trails, and rollback paths sized for regulated environments." },
    ],
    faqs: [
      { q: "Which foundation models do you support?", a: "OpenAI, Anthropic, Google, Meta, Mistral, and open-weights models where licensing and residency requirements allow." },
      { q: "How do you reduce unreliable outputs?", a: "Retrieval grounding, schema-constrained outputs, refusal rules, and continuous evaluation on held-out question sets." },
      { q: "Can data remain in our environment?", a: "Yes. Private networking, per-tenant indexes, and deployment options that keep inference inside your cloud account." },
    ],
  },
  "data-engineering": {
    icon: BarChart3,
    heroImage: heroImages[7],
    heroTitle: "Enterprise Data Engineering",
    heroDesc:
      "Analytics platforms, enterprise repositories, labeling workflows, and streaming pipelines that keep AI and decision systems supplied with trusted data.",
    overview:
      "Data engineering for analytics, warehousing, training-data preparation, streaming intelligence, and governance—the foundation for AI and enterprise reporting at scale.",
    techStack: [
      { category: "Pipelines", techs: ["Apache Airflow", "dbt", "Spark", "Kafka", "Fivetran"] },
      { category: "Warehouses", techs: ["Snowflake", "BigQuery", "Redshift", "Databricks", "Delta Lake"] },
      { category: "Streaming", techs: ["Apache Kafka", "Flink", "Spark Streaming", "Kinesis"] },
      { category: "Governance", techs: ["DataHub", "Great Expectations", "Collibra", "AWS Glue"] },
    ],
    process: [
      { step: "Data Assessment", desc: "Catalog sources, freshness, quality gaps, and compliance requirements." },
      { step: "Architecture", desc: "Design ingestion, storage, and access patterns aligned to workload profiles." },
      { step: "Pipeline Build", desc: "Implement orchestration, validation, and failure handling with observable stages." },
      { step: "Modeling", desc: "Define conformed dimensions, metrics ownership, and stewardship workflows." },
      { step: "Quality Assurance", desc: "Deploy automated tests, reconciliation, and anomaly detection on volumes." },
      { step: "Handoff", desc: "Transfer runbooks, cost dashboards, and on-call expectations to platform teams." },
    ],
    whyChooseUs: [
      { title: "AI-ready data", desc: "Pipelines and catalogs structured for retrieval, features, and model training inputs." },
      { title: "Shared contracts", desc: "One governed source for analytics dashboards and product intelligence." },
    ],
    faqs: [
      { q: "Which platforms do you work with?", a: "Snowflake, BigQuery, Redshift, Databricks, and lakehouse stacks selected after workload profiling." },
      { q: "How is data quality managed?", a: "Declarative tests, freshness SLAs, quarantine paths for invalid records, and lineage to trace upstream issues." },
      { q: "Do you provide labeling support?", a: "Yes. Annotation workflows, inter-annotator review, and dataset versioning for supervised learning programs." },
    ],
  },
  "generative-ai": {
    icon: Sparkles,
    heroImage: heroImages[1],
    heroTitle: "Generative AI Solutions",
    heroDesc:
      "Agents, copilots, conversational experiences, and generative capabilities embedded in enterprise workflows—with governance built in from the start.",
    overview:
      "Generative AI programs scoped for enterprise adoption: grounded responses, controlled tool access, model adaptation, and measurable quality gates before production rollout.",
    techStack: [
      { category: "Foundation Models", techs: ["GPT-4o", "Claude", "Gemini", "Llama 3", "Mistral"] },
      { category: "RAG & Frameworks", techs: ["LangChain", "LlamaIndex", "Haystack", "Semantic Kernel"] },
      { category: "Vector Stores", techs: ["Pinecone", "Weaviate", "Milvus", "Qdrant", "Chroma"] },
      { category: "Agents", techs: ["LangGraph", "AutoGen", "CrewAI", "Temporal", "Kubernetes"] },
    ],
    process: [
      { step: "Use Case Definition", desc: "Map workflows, data sources, and policy constraints to measurable pilot outcomes." },
      { step: "Architecture Design", desc: "Select model routes, retrieval strategy, and integration points with existing applications." },
      { step: "Implementation", desc: "Build agents, prompts, and safety controls with staged validation at each gate." },
      { step: "Evaluation", desc: "Run regression, red-team, and user acceptance tests before widening production access." },
      { step: "Production Rollout", desc: "Deploy with monitoring for quality, cost, latency, and policy compliance." },
      { step: "Continuous Improvement", desc: "Refresh corpora, tune prompts, and review governance controls on a defined cadence." },
    ],
    whyChooseUs: [
      { title: "Embedded in context", desc: "Assistants surface inside existing screens rather than isolated chat experiences." },
      { title: "Controlled autonomy", desc: "Agents operate with scoped tools, human escalation, and operational kill switches." },
    ],
    faqs: [
      { q: "What generative capabilities do you deliver?", a: "Agents, copilots, conversational interfaces, model adaptation, and generative features integrated into existing products." },
      { q: "How do you manage agent risk?", a: "Tool scoping, approval workflows, run records, and kill switches with defined escalation paths." },
      { q: "Can we start with a single copilot?", a: "Yes. Most programs begin with one role-scoped copilot before expanding to additional workflows." },
    ],
  },
  devops: {
    icon: Cloud,
    heroImage: heroImages[6],
    heroTitle: "Platform Reliability & DevOps",
    heroDesc:
      "Delivery automation, reliability engineering, intelligent operations, and model observability for AI workloads and enterprise applications.",
    overview:
      "DevOps and platform engineering for teams running AI services and modernized applications—CI/CD, SRE practices, and model performance monitoring at production scale.",
    techStack: [
      { category: "CI/CD", techs: ["GitHub Actions", "GitLab CI", "Jenkins", "Argo CD", "Flux"] },
      { category: "Infrastructure", techs: ["Terraform", "Ansible", "Pulumi", "CloudFormation"] },
      { category: "Containers", techs: ["Docker", "Kubernetes", "Helm", "ECS", "Nomad"] },
      { category: "Observability", techs: ["Prometheus", "Grafana", "Datadog", "OpenTelemetry", "ELK"] },
    ],
    process: [
      { step: "Assessment", desc: "Review deployment paths, toil, incident history, and reliability baselines." },
      { step: "Roadmap", desc: "Prioritize pipeline, security, and recovery improvements by operational risk." },
      { step: "Platform Build", desc: "Implement IaC, CI/CD, and self-service patterns with documented standards." },
      { step: "Reliability Design", desc: "Define SLOs, error budgets, and runbooks for critical services and model endpoints." },
      { step: "Observability", desc: "Install dashboards, alerting, and model-performance monitoring for production." },
      { step: "Enablement", desc: "Train teams on platform APIs, release process, and incident response." },
    ],
    whyChooseUs: [
      { title: "AI-scale operations", desc: "Reliability patterns for model endpoints, batch jobs, and application releases together." },
      { title: "Controlled change", desc: "Progressive rollout and verified rollback for infrastructure and application updates." },
    ],
    faqs: [
      { q: "Which cloud providers are supported?", a: "AWS, Azure, GCP, hybrid Kubernetes, and multi-account landing zones with centralized guardrails." },
      { q: "Do you monitor model endpoints?", a: "Yes. Latency, drift, quality regressions, and cost dashboards for language-model and ML services." },
      { q: "How is security integrated?", a: "Mandatory scans in CI, signed artifacts, least-privilege deployment roles, and policy gates before production." },
    ],
  },
  "development-services": {
    icon: Code,
    heroImage: heroImages[6],
    heroTitle: "Software Product Engineering",
    heroDesc:
      "Mobile, custom software, embedded engineering teams, product development, and API platforms delivered with defined acceptance criteria.",
    overview:
      "Product engineering services for web, mobile, and API delivery—from discovery through launch with documentation, testing, and operational handover.",
    techStack: [
      { category: "Frontend", techs: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
      { category: "Backend", techs: ["Node.js", "Python", "Java", "PostgreSQL", "Redis"] },
      { category: "Mobile", techs: ["React Native", "Flutter", "Swift", "Kotlin"] },
      { category: "APIs", techs: ["REST", "GraphQL", "gRPC", "OpenAPI", "Event-driven"] },
    ],
    process: [
      { step: "Discovery", desc: "Define product scope, user journeys, integration boundaries, and acceptance criteria." },
      { step: "Architecture", desc: "Select stack, deployment model, and integration patterns aligned to your environment." },
      { step: "Build", desc: "Implement agreed increments with code review, automated testing, and documentation." },
      { step: "Validation", desc: "Run functional, performance, and security checks against defined acceptance tests." },
      { step: "Launch", desc: "Deploy with release checklist, rollback plan, and operator handover." },
      { step: "Support Window", desc: "Provide a defined post-launch support period with knowledge transfer to your team." },
    ],
    whyChooseUs: [
      { title: "Senior-led delivery", desc: "Practitioners who own outcomes—not ticket-based augmentation without accountability." },
      { title: "Launch readiness", desc: "Documentation, tests, and runbooks included in every scoped delivery." },
    ],
    faqs: [
      { q: "Do you offer embedded engineering teams?", a: "Yes. Senior practitioners embedded under NeuralTrix delivery standards with defined reporting and quality checkpoints." },
      { q: "Which mobile platforms do you support?", a: "Native iOS and Android, React Native, and Flutter based on product requirements and team preferences." },
      { q: "Can you integrate with our existing APIs?", a: "Yes. REST, GraphQL, gRPC, and event-driven integration behind your identity and network controls." },
    ],
  },
};

const services = SERVICE_CATALOG.map((pillar) => {
  const meta = SERVICE_META[pillar.id];

  return {
    slug: pillar.id,
    pillar: pillar.label,
    catalogTitle: pillar.label,
    title: pillar.label,
    shortDesc: pillar.shortDesc,
    icon: meta.icon,
    heroTitle: meta.heroTitle,
    heroDesc: meta.heroDesc,
    heroImage: meta.heroImage,
    overview: meta.overview,
    subservices: pillar.subservices,
    techStack: meta.techStack,
    process: meta.process,
    whyChooseUs: meta.whyChooseUs,
    faqs: meta.faqs,
  };
});

/** Prior service slugs → current main service slug. */
export const LEGACY_SERVICE_SLUGS = {
  "artificial-intelligence": "artificial-intelligence",
  "machine-learning": "artificial-intelligence",
  "ai-agents": "generative-ai",
  "llm-development": "artificial-intelligence",
  "ai-product-transformation": "generative-ai",
  "model-fine-tuning-ml": "artificial-intelligence",
  "saas-platform-engineering": "devops",
  "cloud-infrastructure": "devops",
  "application-engineering": "development-services",
  "custom-software": "development-services",
  "mobile-apps": "development-services",
  devops: "devops",
};

export function servicesForDisplay(list = services) {
  return list.map((service) => ({
    ...service,
    catalogCapabilities: (service.subservices ?? []).slice(0, 4).map((sub) => sub.title),
  }));
}

export default services;
