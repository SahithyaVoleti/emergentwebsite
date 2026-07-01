import blogArticles from "./blog";

/**
 * Canonical homepage section order.
 */
export const HOME_PAGE_LAYOUT = [
  "hero-stack",
  "services",
  "features",
  "solutions",
  "industries",
  "validation",
  "workflow",
  "stats",
  "next-step",
  "blogs",
  "contact",
];

export const HOME_HERO = {
  badge: "AI product transformation & SaaS engineering",
  titleBefore: "Transform products into",
  titleAccent: "AI-enabled software",
  titleAfter: "and build interdisciplinary SaaS",
  lead: "NeuralTrix fine-tunes and integrates AI into existing enterprise products, then designs and ships AI-native SaaS applications across healthcare, finance, education, and other regulated industries.",
  primaryCta: { label: "View services", href: "/#services-grid" },
  valueDeliver: [
    { icon: "heart", label: "User-centered design" },
    { icon: "settings", label: "Operational excellence" },
    { icon: "bar-chart", label: "Data-driven decisions" },
    { icon: "box", label: "Sustainable architecture" },
  ],
  title: "AI product transformation and AI-native SaaS engineering",
  secondaryCta: { label: "View agentic solutions", href: "/solutions" },
};

export const HOME_STARTUP_STATS = [
  { value: "4–6", label: "Weeks to scoped pilot" },
  { value: "10+", label: "Regulated industries" },
  { value: "12+", label: "Production test cases" },
  { value: "100%", label: "Senior engineers on delivery" },
];

export const HOME_ALERT = {
  eyebrow: "What we do",
  title: "AI transformation for |software products| already in market",
  body: "We assess your product architecture, fine-tune models on your domain data, embed AI into existing workflows, and extend delivery into new AI-native SaaS offerings where scope requires greenfield build.",
  primaryCta: { label: "How we work", href: "/about#engagement" },
  secondaryCta: { label: "View services →", href: "/#services-grid" },
  media: {
    src: "/media/home/ai-transformation-products.png",
    alt: "AI transformation workflow for software products already in market",
  },
};

/** Delivery outcomes — distinct from the services catalog above. */
const HOME_DELIVERY_OUTCOMES = [
  {
    name: "Scoped pilots before scale",
    description:
      "Fixed datasets, acceptance metrics, and rollback criteria agreed before production rollout—not open-ended experimentation.",
    icon: "governance",
  },
  {
    name: "AI inside products already in market",
    description:
      "Copilots and automation embedded in CRM, ERP, and line-of-business tools your teams operate today.",
    icon: "agents",
  },
  {
    name: "Models measured on your domain",
    description:
      "Fine-tuning and evaluation harnesses tied to your tasks, data boundaries, and compliance requirements.",
    icon: "ml",
  },
  {
    name: "Handover your team can extend",
    description:
      "Runbooks, observability, and code ownership transition when operational responsibility shifts in-house.",
    icon: "devops",
  },
];

export const HOME_FEATURES = {
  id: "home-features",
  eyebrow: "What we deliver",
  title: "Outcomes across |transformation programs|",
  lead: "Each engagement targets measurable product impact—incremental AI in live systems, validated models, and governed rollout paths.",
  items: HOME_DELIVERY_OUTCOMES,
  media: {
    src: "/media/operating-system-upgrade.gif",
  },
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

export const HOME_SERVICES_GRID = {
  id: "services-grid",
  eyebrow: "Services",
  title: "Three core |service disciplines|",
  lead: "Product transformation, model engineering, and platform delivery—each with defined service lines you can scope independently.",
  viewAllHref: "/services",
  viewAllLabel: "View all services",
};

export const HOME_TECH_STACK = {
  id: "tech-stack",
  eyebrow: "Technology",
  title: "Technology foundation for enterprise AI delivery",
  lead: "Frameworks, models, and platforms commonly applied across delivery programs for intelligent automation and application modernization.",
  primaryCta: { label: "View service offerings", href: "/#services-grid" },
  secondaryCta: { label: "Explore all services", href: "/#services-grid" },
  filterAllLabel: "All services",
};

export const HOME_WORKFLOW = {
  id: "ai-workflow",
  eyebrow: "Methodology",
  title: "Methodology for |AI product transformation|",
  lead: "This methodology sequences product assessment, model fine-tuning, integration, and production rollout for existing software and new SaaS programs.",
  process: [
    {
      step: "Assess the product estate",
      desc: "Map architecture, data boundaries, and workflows where AI can improve an existing product without destabilizing operations.",
    },
    {
      step: "Fine-tune and validate models",
      desc: "Train or adapt models on domain data with evaluation gates, safety checks, and rollback criteria before user-facing release.",
    },
    {
      step: "Embed AI in the product",
      desc: "Integrate copilots, automation, and APIs into current UX and backend systems with scoped permissions and audit trails.",
    },
    {
      step: "Scale SaaS and operations",
      desc: "Extend to new AI-native modules or SaaS surfaces, then hand over runbooks, monitoring, and release controls to your team.",
    },
  ],
};

export const HOME_VALIDATION = {
  id: "product-validation",
  eyebrow: "Validation",
  title: "Production-tested |product transformations|",
  lead: "Representative programs validated in live environments before wider rollout—clinical documentation, transaction monitoring, and educator workflows.",
  viewAllHref: "/research-innovation#test-cases",
  viewAllLabel: "View full validation catalog",
  slugs: [
    "medimind-clinical-assist",
    "fraud-guard-transactions",
    "smart-teaching-platform",
  ],
};

export const HOME_ENGINEERING_SHOWCASES = {
  id: "engineering-showcases",
  eyebrow: "Validated programs",
  title: "Production-tested AI product patterns",
  lead: "Product transformation programs validated in live environments—including clinical SaaS, transaction monitoring, and educator platforms.",
  viewAllHref: "/research-innovation#test-cases",
  viewAllLabel: "View validation catalog",
  items: [
    {
      slug: "fraud-guard-transactions",
      title: "Transaction monitoring product — finance",
      shortTitle: "Kavacha",
      summary: "AML scoring module tested on live payment streams with analyst queues and audit trails.",
      imageKey: "agent-kavacha",
      domain: "Finance",
      href: "/case-studies/fraud-guard-transactions",
    },
    {
      slug: "medimind-clinical-assist",
      title: "Clinical documentation product — healthcare",
      shortTitle: "Arogya",
      summary: "EHR-embedded documentation module tested in clinical sandboxes with clinician review on every output.",
      imageKey: "agent-arogya",
      domain: "Healthcare",
      href: "/case-studies/medimind-clinical-assist",
    },
    {
      slug: "smart-teaching-platform",
      title: "Educator platform transformation — education",
      shortTitle: "Vidya",
      summary: "LMS copilot tested in live classrooms with FERPA-aligned controls and teacher review.",
      imageKey: "agent-vidya",
      domain: "Education",
      href: "/case-studies/smart-teaching-platform",
    },
    {
      slug: "stock-sense-commerce",
      title: "Inventory product — commerce ERP",
      shortTitle: "Vyapar",
      summary: "Replenishment module tested inside ERP and WMS with manager approval before purchase orders.",
      imageKey: "data-engineering",
      domain: "Commerce",
      href: "/case-studies/stock-sense-commerce",
    },
  ],
};

export const HOME_DOMAINS = {
  id: "interdisciplinary-domains",
  eyebrow: "Industries",
  title: "Interdisciplinary |industry coverage|",
  lead: "AI transformation and SaaS programs across sector application estates—each industry page outlines product patterns, controls, and integration scope.",
  items: [
    { title: "Healthcare", href: "/industries/healthcare", icon: "healthcare" },
    { title: "Education", href: "/industries/education", icon: "education" },
    { title: "Commerce & retail", href: "/industries/retail", icon: "commerce" },
    { title: "Finance", href: "/industries/fintech", icon: "fintech" },
    { title: "Manufacturing", href: "/industries/manufacturing", icon: "operations" },
    { title: "Real estate", href: "/industries/real-estate", icon: "proptech" },
    { title: "Sports & media", href: "/industries/sports-gaming", icon: "media" },
    { title: "Data platforms", href: "/services/data-engineering", icon: "analytics" },
  ],
};

export const HOME_BLOGS_BAND = {
  id: "from-the-blogs",
  eyebrow: "Insights",
  title: "Engineering notes",
  lead: "Technical notes on model fine-tuning, product transformation, and shipping AI SaaS in production environments.",
  viewAllHref: "/blog",
  viewAllLabel: "View all articles",
  autoAdvanceMs: 5500,
  slugs: ["augment-code-vs-cursor", "claude-vs-chatgpt-coding", "top-vibe-coding-tools"],
};

export const HOME_VISION_CTA_2 = {
  id: "vision-cta-2",
  eyebrow: "Portfolio",
  title: "Agentic solutions for |enterprise workflows|",
  body: "Purpose-built AI agents that monitor transactions, resolve public inquiries, accelerate research, and support regulated operations—with governed integration and human oversight.",
  primaryCta: { label: "View portfolio", href: "/solutions" },
  secondaryCta: { label: "Contact us", href: "/#page-contact" },
  mockupKey: "code",
};

export const HOME_INSIGHTS = HOME_BLOGS_BAND;

export const HOME_INFRASTRUCTURE = {
  id: "infrastructure",
  title: "Cloud infrastructure for AI products",
  lead: "Reliable hosting, monitoring, and security for AI-enabled applications at scale.",
  topics: [],
  mockupKey: "pipeline",
};

export const HOME_PHILOSOPHY = {
  id: "philosophy",
  eyebrow: "Philosophy",
  title: "Principles for |AI product programs|",
  lead: "Transformation should strengthen products already in market—fine-tuning and SaaS delivery follow the same governance and measurement standards.",
  bullets: [
    "Existing products can adopt AI incrementally with clear rollback paths",
    "Fine-tuning is scoped to domain data with documented evaluation criteria",
    "SaaS modules ship with tenant isolation, observability, and handover artifacts",
    "Your team retains ownership of models, code, and release decisions",
  ],
  mockupKey: "security",
};

export const HOME_SOLUTIONS_SLIDER = {
  id: "solutions-slider",
  eyebrow: "Portfolio",
  title: "Agentic solutions for |enterprise workflows|",
  lead: "Production-ready AI agents for transaction security, public services, research, clinical documentation, travel operations, legal research, financial analysis, education, real estate, and agriculture.",
  viewAllHref: "/solutions",
  viewAllLabel: "View all agents",
};

export const HOME_SERVICES_SLIDER = HOME_SERVICES_GRID;
export const HOME_SOLUTION_TOPIC_SECTIONS = [];
export const HOME_CORE_TOPIC_SECTIONS = HOME_SOLUTION_TOPIC_SECTIONS;

export const HOME_ASSURANCE_SECTION = {
  id: "assurance",
  title: "Assurance for |AI product programs|",
  lead: "Security, access control, and human review are built into transformation and SaaS delivery from the first release—not added after launch.",
  bullets: [
    "AI modules only access approved data and tools",
    "Human review on high-risk automated actions",
    "Full logs of model and product behavior in production",
    "Documentation for security and procurement review",
    "Privacy and retention rules agreed before integration",
    "Controlled updates to models, prompts, and product features",
  ],
  learnMore: { label: "See governance practices", href: "/security" },
  contact: { label: "Contact us", href: "/#page-contact" },
};

export const HOME_OUTCOMES_SECTION = {
  id: "enterprise-efficiency",
  title: "Outcomes for |AI-enabled products|",
  lead: "Faster workflows, smarter software, and a defined path from pilot transformation to SaaS scale.",
  bullets: [
    "AI features operating inside products your teams already use",
    "Fine-tuned models measured on domain tasks—not generic demos",
    "Pilot scope with agreed metrics before full product rollout",
    "Handover so your engineers can extend models and SaaS modules",
    "Support after launch when operational ownership transitions",
    "Clear recommendations on build, buy, and fine-tune tradeoffs",
  ],
  learnMore: { label: "Discuss your products", href: "/#page-contact" },
  contact: { label: "View services", href: "/#services-grid" },
};

export const HOME_TOPIC_SECTIONS = [
  HOME_ASSURANCE_SECTION,
  HOME_OUTCOMES_SECTION,
];

export const HOME_METHODOLOGY = HOME_WORKFLOW;

export const HOME_COVERAGE = {
  id: "coverage",
  eyebrow: "Coverage",
  title: "Coverage across |services and industries|",
  lead: "This coverage model spans transformation services, SaaS products, and interdisciplinary industry programs.",
};

export const HOME_NEXT_STEP = {
  eyebrow: "Next Step",
  title: "Next Step for your |AI product program|",
  lead: "Share your product landscape, model requirements, or SaaS concept. We will outline transformation scope, fine-tuning approach, and delivery milestones.",
  primaryCta: { label: "Request consultation", href: "/#page-contact", contactIntent: "consultation" },
  secondaryCta: { label: "View portfolio", href: "/solutions" },
  tertiaryCta: { label: "View industries", href: "/industries" },
};
