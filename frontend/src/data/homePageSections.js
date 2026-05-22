import services from "./services";
import solutions from "./solutions";
import blogArticles from "./blog";
import { COMPANY_STARTUP_PITCH } from "../lib/company";

const serviceBySlug = (slug) => services.find((s) => s.slug === slug);
const solutionBySlug = (slug) => solutions.find((s) => s.slug === slug);

/**
 * Canonical homepage order — aligned to CONTENT_STYLE_GUIDE flow:
 * Hero stack → services → stats → features → vision (research CTA) → solutions → philosophy → tech-stack → workflow → coverage → next-step → blogs → contact.
 *
 * CTA placement:
 * 1. hero-stack — hero + engagement CTA (sticky overlap on hero)
 * 2. stats strip — after services grid
 * 3. vision (research) — after features, before solutions & engineering
 * 4. next-step — after coverage, before blogs
 * 5. contact — after blogs
 */
export const HOME_PAGE_LAYOUT = [
  "hero-stack",
  "services",
  "stats",
  "features",
  "vision-cta",
  "solutions",
  "philosophy",
  "tech-stack",
  "workflow",
  "industries",
  "next-step",
  "blogs",
  "contact",
];

export const HOME_HERO = {
  title: "Engineering intelligent systems for the future of interdisciplinary innovation",
  lead: "Applied AI, GenAI platforms, intelligent automation, and scalable enterprise infrastructure engineered for next-generation digital ecosystems.",
  primaryCta: { label: "Explore solutions", href: "/solutions" },
  secondaryCta: { label: "About our vision", href: "/about" },
};

export const HOME_STARTUP_STATS = [
  { value: "50+", label: "AI Workflows" },
  { value: "30+", label: "Intelligent Agents" },
  { value: "15+", label: "Integrations" },
  { value: "8+", label: "Industry Domains" },
  { value: "99.9%", label: "Reliability" },
];

export const HOME_ALERT = {
  eyebrow: "Our approach",
  title: "Engineering intelligent systems for interdisciplinary innovation",
  body: "We build scalable AI ecosystems that combine applied machine learning, GenAI, data platforms, and cloud-native engineering to power the next generation of intelligent digital experiences.",
  primaryCta: { label: "About our vision", href: "/about" },
  secondaryCta: { label: "Explore services →", href: "/services" },
};

/** Capability labels per service — cross-cutting themes, not service card titles. */
const HOME_SERVICE_CAPABILITIES = [
  {
    serviceSlug: "artificial-intelligence",
    name: "Model training & inference operations",
    description:
      "Versioned training jobs, registry promotions, slice-based evaluation, and governed inference for batch and real-time ML workloads.",
    icon: "ml",
  },
  {
    serviceSlug: "generative-ai",
    name: "Grounded copilots & retrieval",
    description:
      "Permission-aware ingestion, hybrid retrieval, prompt versioning, and release gates for production copilots and content pipelines.",
    icon: "genai",
  },
  {
    serviceSlug: "custom-software",
    name: "Application platforms & API contracts",
    description:
      "Bounded services, schema-stable APIs, identity integration, and release cadences that keep product and integration teams aligned.",
    icon: "platform",
  },
  {
    serviceSlug: "mobile-apps",
    name: "Client delivery & device operations",
    description:
      "Native and cross-platform builds with performance budgets, secure storage, staged rollouts, and telemetry tied to store and MDM constraints.",
    icon: "mobile",
  },
  {
    serviceSlug: "ai-agents",
    name: "Orchestrated automation & tool policy",
    description:
      "Typed tool surfaces, durable execution, human-in-the-loop queues, and structured run records for auditable autonomous workflows.",
    icon: "agents",
  },
  {
    serviceSlug: "llm-development",
    name: "LLM evaluation & lifecycle control",
    description:
      "Fine-tuning and adapter governance, regression harnesses, routing and cost telemetry, and residency-aware hosting patterns.",
    icon: "llm",
  },
  {
    serviceSlug: "devops",
    name: "Release automation & reliability",
    description:
      "Pipeline-as-code, declarative infrastructure, SLO-backed observability, and incident playbooks aligned to service ownership.",
    icon: "devops",
  },
  {
    serviceSlug: "data-engineering",
    name: "Governed data movement & contracts",
    description:
      "Batch and streaming pipelines, schema evolution, lineage, quality SLAs, and curated datasets for analytics and model consumers.",
    icon: "data",
  },
];

export const HOME_FEATURES = {
  id: "home-features",
  eyebrow: "AI Engineering Infrastructure",
  title: "Capabilities shared across every delivery track",
  lead: "Engineering foundations that underpin all service lines above—scope control, quality gates, integration, and operations—not a repeat of the service catalog.",
  items: HOME_SERVICE_CAPABILITIES.map((cap) => {
    const service = serviceBySlug(cap.serviceSlug);
    if (!service) return null;
    return {
      name: cap.name,
      description: cap.description,
      icon: cap.icon,
      href: `/services/${cap.serviceSlug}`,
    };
  }).filter(Boolean),
};

export const HOME_BLOG = {
  title: "Latest from our blog",
  posts: blogArticles.slice(0, 3).map((a) => ({
    title: a.title,
    href: `/blog/${a.slug}`,
    meta: `${a.date} · ${a.readTime}`,
  })),
  viewAll: { label: "View all articles", href: "/blog" },
};

function serviceSection(slug, titleOverride, extraBullets = []) {
  const s = serviceBySlug(slug);
  if (!s) return null;
  return {
    id: slug,
    title: titleOverride || s.heroTitle || s.title,
    lead: s.shortDesc,
    bullets: [
      ...(s.whyChooseUs?.slice(0, 2).map((w) => w.desc) || []),
      ...extraBullets,
    ].slice(0, 6),
    learnMore: { label: "Learn more", href: `/services/${slug}` },
    contact: { label: "Contact us", href: "/#page-contact" },
  };
}

function solutionSection(slug) {
  const s = solutionBySlug(slug);
  if (!s) return null;
  return {
    id: s.slug,
    title: s.heroTitle || s.title,
    lead: s.shortDesc,
    bullets: (s.features || []).slice(0, 6).map((f) => f.title),
    learnMore: { label: "Learn more", href: `/solutions/${slug}` },
    contact: { label: "Contact us", href: "/#page-contact" },
  };
}

export const HOME_SERVICES_GRID = {
  id: "services-grid",
  eyebrow: "Service delivery",
  title: "Engineering tracks for enterprise AI systems",
  lead: "Interdisciplinary delivery across applied machine learning, GenAI, platform engineering, and intelligent automation—structured for production-scale adoption.",
  viewAllHref: "/services",
  viewAllLabel: "View all services",
};

export const HOME_TECH_STACK = {
  id: "tech-stack",
  eyebrow: "Technology",
  title: "Engineering stack for governed AI delivery",
  lead: "Select a delivery track to view the technologies we use for that service—drawn from the stacks defined across our service catalog.",
  primaryCta: { label: "View DevOps services", href: "/services/devops" },
  secondaryCta: { label: "Explore all services", href: "/services" },
  filterAllLabel: "All services",
};

export const HOME_WORKFLOW = {
  id: "ai-workflow",
  eyebrow: "Architecture",
  title: "How intelligent systems are engineered end to end",
  lead: "A reference architecture for connecting data, models, agents, and enterprise automation with measurable control points.",
  steps: [
    {
      title: "Discover & plan",
      desc: "Confirm problem statement, data availability, governance boundaries, and success metrics within a bounded discovery window.",
    },
    {
      title: "Design & build",
      desc: "Shape pipelines, model routing, retrieval policies, and platform contracts aligned to residency, security, and release cadence.",
    },
    {
      title: "Implement & validate",
      desc: "Deploy agents, integrations, and automation with evaluation gates, observability, and human oversight on critical paths.",
    },
    {
      title: "Operate & scale",
      desc: "Measure usage and outcomes through dashboards, SLAs, and feedback loops that inform the next controlled iteration.",
    },
  ],
};

export const HOME_ENGINEERING_SHOWCASES = {
  id: "engineering-showcases",
  eyebrow: "Engineering showcases",
  title: "AI systems designed for interdisciplinary innovation",
  lead: "Representative architecture concepts and innovation blueprints—not client endorsements. Use them to compare methods and technical scope.",
  viewAllHref: "/case-studies",
  viewAllLabel: "View all showcases",
  items: [
    {
      slug: "medimind-ai",
      title: "AI healthcare intelligence platform",
      shortTitle: "Healthcare intelligence",
      summary: "Clinical documentation, triage support, and governed NLP within HIPAA-aligned deployment boundaries.",
      imageKey: "medimind-ai",
      domain: "Healthcare",
      href: "/solutions/medimind-ai",
    },
    {
      slug: "smart-teaching-platform",
      title: "Autonomous education copilot",
      shortTitle: "Education copilot",
      summary: "Educator workflows with human review gates, curriculum templates, and privacy-first data handling.",
      imageKey: "smart-teaching-platform",
      domain: "Education",
      href: "/case-studies/smart-teaching-platform",
    },
    {
      slug: "ai-agents-ecosystem",
      title: "Enterprise AI agent ecosystem",
      shortTitle: "AI agent ecosystem",
      summary: "Multi-agent orchestration with tool policies, observability, and role-based access for internal operations.",
      imageKey: "intellibot-ai",
      domain: "Enterprise automation",
      href: "/services/ai-agents",
    },
    {
      slug: "data-intelligence",
      title: "Real-time data intelligence platform",
      shortTitle: "Data intelligence",
      summary: "Streaming pipelines, semantic layers, and operational dashboards for cross-functional analytics teams.",
      imageKey: "data-engineering",
      domain: "Data platforms",
      href: "/services/data-engineering",
    },
  ],
};

export const HOME_DOMAINS = {
  id: "interdisciplinary-domains",
  eyebrow: "Coverage",
  title: "Industries we serve",
  lead: "Interdisciplinary AI engineering across regulated, operational, and knowledge-intensive fields.",
  items: [
    { title: "Healthcare AI", href: "/industries/healthcare", icon: "healthcare" },
    { title: "Education & learning", href: "/industries/education", icon: "education" },
    { title: "Commerce & retail", href: "/industries/retail", icon: "commerce" },
    { title: "Sports & media", href: "/industries/sports-gaming", icon: "media" },
    { title: "Banking & finance", href: "/industries/fintech", icon: "fintech" },
    { title: "Travel & operations", href: "/industries/manufacturing", icon: "operations" },
    { title: "Real estate & PropTech", href: "/industries/real-estate", icon: "proptech" },
    { title: "Knowledge & analytics", href: "/services/data-engineering", icon: "analytics" },
  ],
};

export const HOME_BLOGS_BAND = {
  id: "from-the-blogs",
  eyebrow: "Insights",
  title: "From the blogs",
  lead: "Technical notes on AI engineering, delivery tooling, and enterprise adoption patterns.",
  viewAllHref: "/blog",
  viewAllLabel: "View all articles",
  autoAdvanceMs: 5500,
  slugs: ["augment-code-vs-cursor", "claude-vs-chatgpt-coding", "top-vibe-coding-tools"],
};

export const HOME_VISION_CTA_2 = {
  id: "vision-cta-2",
  eyebrow: "Research",
  title: "Research-driven AI engineering for real-world impact",
  body: "From AI agents to enterprise orchestration systems, we explore modern architectures shaping the future of intelligent digital platforms.",
  primaryCta: { label: "Read insights", href: "/blog" },
  secondaryCta: { label: "Explore AI systems", href: "/solutions" },
  mockupKey: "code",
};

/** @deprecated Homepage uses HOME_BLOGS_BAND inside industries block */
export const HOME_INSIGHTS = HOME_BLOGS_BAND;

/** @deprecated Removed from homepage — assurance topics covered in service tracks and philosophy. */
export const HOME_INFRASTRUCTURE = {
  id: "infrastructure",
  eyebrow: "Infrastructure",
  title: "Cloud-native infrastructure for AI at scale",
  lead: "Reliability, observability, and security patterns for distributed intelligent systems.",
  topics: [],
  mockupKey: "pipeline",
};

export const HOME_PHILOSOPHY = {
  id: "philosophy",
  eyebrow: "Philosophy",
  title: "An AI-first engineering discipline for long-term innovation",
  lead: "We treat intelligent systems as infrastructure: measurable, governable, and designed for continuous evolution—not one-off experiments.",
  bullets: [
    "Research-informed architecture with production accountability",
    "Interdisciplinary teams across ML, platform, and product engineering",
    "Transparent tradeoffs between scope, risk, and timeline",
    "Vendor-neutral recommendations tied to your constraints",
  ],
  mockupKey: "security",
};

export const HOME_SOLUTIONS_SLIDER = {
  id: "solutions-slider",
  eyebrow: "Solutions & engineering",
  title: "Accelerators and engineering showcases",
  lead: "Pre-architected solution modules and representative architecture blueprints—review each slide, then open the overview that matches your scope.",
  viewAllHref: "/solutions",
  viewAllLabel: "View all accelerators",
};

/** @deprecated Use HOME_SERVICES_GRID + HOME_SOLUTIONS_SLIDER */
export const HOME_SERVICES_SLIDER = HOME_SERVICES_GRID;
export const HOME_SOLUTION_TOPIC_SECTIONS = [];
export const HOME_CORE_TOPIC_SECTIONS = HOME_SOLUTION_TOPIC_SECTIONS;

export const HOME_ASSURANCE_SECTION = {
  id: "assurance",
  title: "Assurance for governed AI delivery",
  lead: "Security, compliance, and operational controls across the full delivery stack—not only model endpoints.",
  bullets: [
    "Access control and audit trails for data and model artifacts",
    "Evaluation sets and regression checks on critical slices",
    "Incident playbooks tied to SLOs and escalation paths",
    "Documentation for security review and vendor diligence",
    "Privacy and retention boundaries defined during discovery",
    "Change management for prompts, tools, and automation rules",
  ],
  learnMore: { label: "Discover assurance practices", href: "/security" },
  contact: { label: "Contact us", href: "/#page-contact" },
};

export const HOME_OUTCOMES_SECTION = {
  id: "enterprise-efficiency",
  title: "Outcomes for measurable enterprise efficiency",
  lead: "Sustainable delivery at proportionate cost—scoped pilots, clear tradeoffs, and paths to scale without uncontrolled scope.",
  bullets: [
    "Pilot boundaries frozen behind agreed KPI gates",
    "Transparent effort and dependency tracking",
    "Multi-cloud and on-prem patterns where residency matters",
    "Handoff packages engineering teams can extend",
    "Long-term maintenance options after initial delivery",
    "Vendor-neutral recommendations tied to your constraints",
  ],
  learnMore: { label: "Let's discuss your initiative", href: "/#page-contact" },
  contact: { label: "View services", href: "/services" },
};

/** @deprecated Use HOME_CORE_TOPIC_SECTIONS + HOME_ASSURANCE_SECTION + HOME_OUTCOMES_SECTION */
export const HOME_TOPIC_SECTIONS = [
  ...HOME_CORE_TOPIC_SECTIONS,
  HOME_ASSURANCE_SECTION,
  HOME_OUTCOMES_SECTION,
];

export const HOME_METHODOLOGY = {
  title: "Methodology for enterprise AI delivery",
  lead: "This methodology keeps scope controlled, releases on a predictable cadence, and places decisions with the delivery team so working software is visible early.",
  steps: [
    { title: "Discover", desc: "Confirm problem statement, data availability, and success metrics within a short discovery window." },
    { title: "Build", desc: "Ship a thin vertical slice your team can use, then harden from real feedback." },
    { title: "Ship", desc: "Release on a steady cadence with monitoring, not a one-off handover." },
    { title: "Learn", desc: "Measure usage and outcomes, then stack the next high-leverage iteration." },
  ],
};

export const HOME_COVERAGE = {
  title: "Coverage across organizations we engage",
  lead: "This coverage clarifies stakeholder mixes where our delivery model fits today—product and engineering, leadership and operations, or innovation and IT.",
  items: [
    { title: "Product and engineering", desc: "Teams integrating AI into product roadmaps and needing delivery aligned to release milestones." },
    { title: "Leadership and operations", desc: "Executives and operators who require transparent tradeoffs between scope, risk, and timeline." },
    { title: "Innovation and IT", desc: "Functions modernizing workflows and seeking measurable validation before broader funding." },
  ],
};

export const HOME_NEXT_STEP = {
  title: "Next step for your AI engineering initiative",
  lead: "Schedule a working session to align objectives, constraints, and a proportionate path from discovery to production.",
  primaryCta: { label: "Schedule consultation", href: "/#page-contact?topic=consultation" },
  secondaryCta: { label: "Contact team", href: "/#page-contact" },
  tertiaryCta: { label: "Explore solutions", href: "/solutions" },
};
