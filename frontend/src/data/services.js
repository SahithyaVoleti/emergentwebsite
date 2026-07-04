import { Bot, Brain, BarChart3, GitBranch } from "lucide-react";
import { SERVICES_HERO_IMAGES as heroImages } from "../lib/heroImageThemes";
import { SERVICE_CATALOG } from "./serviceCatalog";

const SERVICE_META = {
  "generative-ai": {
    icon: Bot,
    heroImage: heroImages[1],
    heroTitle: "Enterprise Generative AI",
    heroDesc:
      "Copilots, retrieval, and agent workflows embedded in the systems your teams already operate—with governance built in from the start.",
    overview:
      "Generative AI programs scoped for enterprise adoption: grounded responses, controlled tool access, and measurable quality gates before production rollout.",
    techStack: [
      { category: "Foundation Models", techs: ["GPT-4o", "Claude", "Gemini", "Llama 3", "Mistral"] },
      { category: "RAG & Frameworks", techs: ["LangChain", "LlamaIndex", "Haystack", "Semantic Kernel"] },
      { category: "Vector Stores", techs: ["Pinecone", "Weaviate", "Milvus", "Qdrant", "Chroma"] },
      { category: "Deployment", techs: ["AWS Bedrock", "Azure OpenAI", "GCP Vertex AI", "Kubernetes"] },
    ],
    process: [
      { step: "Use Case Definition", desc: "Map workflows, data sources, and policy constraints to measurable pilot outcomes." },
      { step: "Architecture Design", desc: "Select model routes, retrieval strategy, and integration points with existing applications." },
      { step: "Implementation", desc: "Build pipelines, prompts, and safety controls with staged validation at each gate." },
      { step: "Evaluation", desc: "Run regression, red-team, and user acceptance tests before widening production access." },
      { step: "Production Rollout", desc: "Deploy with monitoring for quality, cost, latency, and policy compliance." },
      { step: "Continuous Improvement", desc: "Refresh corpora, tune prompts, and review governance controls on a defined cadence." },
    ],
    whyChooseUs: [
      { title: "Embedded in context", desc: "Assistants surface inside existing screens rather than isolated chat experiences." },
      { title: "Governed delivery", desc: "Evaluation gates, audit trails, and rollback paths sized for regulated environments." },
    ],
    faqs: [
      { q: "Which foundation models do you support?", a: "OpenAI, Anthropic, Google, Meta, Mistral, and open-weights models where licensing and residency requirements allow." },
      { q: "How do you reduce hallucinations?", a: "Retrieval grounding, schema-constrained outputs, refusal rules, and continuous evaluation on held-out question sets." },
      { q: "Can data remain in our environment?", a: "Yes. Private networking, per-tenant indexes, and deployment options that keep inference inside your cloud account." },
    ],
  },
  "machine-learning": {
    icon: Brain,
    heroImage: heroImages[0],
    heroTitle: "Machine Intelligence",
    heroDesc:
      "Production ML programs with clear metrics, drift monitoring, and integration paths into CRM, ERP, and customer-facing products.",
    overview:
      "Machine learning delivery from feasibility through deployment—models your product and operations teams can measure, monitor, and maintain.",
    techStack: [
      { category: "Frameworks", techs: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "XGBoost"] },
      { category: "MLOps", techs: ["MLflow", "Kubeflow", "Prometheus", "Grafana", "CI/CD Pipelines"] },
      { category: "Cloud ML", techs: ["AWS SageMaker", "Azure ML", "GCP Vertex AI", "Serverless"] },
      { category: "LLM Tooling", techs: ["Hugging Face", "vLLM", "LoRA", "Axolotl"] },
    ],
    process: [
      { step: "Discovery", desc: "Assess data readiness, integration needs, and success metrics before model development." },
      { step: "Data Preparation", desc: "Validate labels, splits, and lineage with documented quality thresholds." },
      { step: "Model Development", desc: "Train with reproducible configurations and held-out evaluation requirements." },
      { step: "Validation", desc: "Stress-test accuracy, latency, and fairness across priority segments." },
      { step: "Deployment", desc: "Integrate inference with monitoring, rollback, and operational runbooks." },
      { step: "Operations", desc: "Track drift, schedule retraining, and report performance to business stakeholders." },
    ],
    whyChooseUs: [
      { title: "Production focus", desc: "Models integrated into live products—not isolated experiments without operational ownership." },
      { title: "Measurable outcomes", desc: "Evaluation criteria agreed upfront and tracked through deployment and scale." },
    ],
    faqs: [
      { q: "How long does a pilot take?", a: "Most scoped pilots complete in four to six weeks when data access and integration paths are defined." },
      { q: "What data is required?", a: "Tabular, text, image, audio, or log data with defined labels or proxies and documented retention rules." },
      { q: "Can you integrate with existing systems?", a: "Yes. REST, gRPC, or event-driven endpoints behind your identity and network controls." },
    ],
  },
  "data-engineering": {
    icon: BarChart3,
    heroImage: heroImages[7],
    heroTitle: "Data Platform Engineering",
    heroDesc:
      "Governed data platforms that keep analytics, feature stores, and retrieval corpora current for AI and enterprise applications.",
    overview:
      "Data engineering for reliable pipelines, warehouses, and streaming platforms—the foundation for analytics and AI programs at scale.",
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
      { q: "How do you handle privacy?", a: "Column masking, row filters, encryption, access logs, and region pinning for regulated datasets." },
    ],
  },
  "cloud-infrastructure": {
    icon: GitBranch,
    heroImage: heroImages[6],
    heroTitle: "Cloud Platform Engineering",
    heroDesc:
      "Platforms and delivery pipelines that keep AI workloads and enterprise applications deployable, observable, and recoverable.",
    overview:
      "Cloud infrastructure and platform engineering for teams running AI services and modernized applications at production scale.",
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
      { step: "Hardening", desc: "Apply network, identity, and supply-chain controls aligned to policy." },
      { step: "Observability", desc: "Install SLO dashboards, alerting, and runbooks for critical services." },
      { step: "Enablement", desc: "Train teams on platform APIs, release process, and incident response." },
    ],
    whyChooseUs: [
      { title: "AI-scale operations", desc: "Reliability patterns for model endpoints, batch jobs, and application releases together." },
      { title: "Controlled change", desc: "Progressive rollout and verified rollback for infrastructure and application updates." },
    ],
    faqs: [
      { q: "Which cloud providers are supported?", a: "AWS, Azure, GCP, hybrid Kubernetes, and multi-account landing zones with centralized guardrails." },
      { q: "Do you support Kubernetes migration?", a: "Yes. Image hardening, network policies, GitOps workflows, and tested rollback for cluster upgrades." },
      { q: "How is security integrated?", a: "Mandatory scans in CI, signed artifacts, least-privilege deployment roles, and policy gates before production." },
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
  "artificial-intelligence": "machine-learning",
  "ai-agents": "generative-ai",
  "llm-development": "machine-learning",
  "custom-software": "cloud-infrastructure",
  "mobile-apps": "cloud-infrastructure",
  devops: "cloud-infrastructure",
};

export function servicesForDisplay(list = services) {
  return list.map((service) => ({
      ...service,
    catalogCapabilities: (service.subservices ?? []).slice(0, 4).map((sub) => sub.title),
    }));
}

export default services;
