import services from "./services";
import blogArticles from "./blog";

const serviceBySlug = (slug) => services.find((s) => s.slug === slug);

/**
 * Canonical homepage section order.
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
  title: "We build AI agents and turn your apps into AI-powered software",
  lead: "NeuralTrix creates intelligent agents for business applications—and modernizes the software you already run—across healthcare, finance, retail, education, manufacturing, and more.",
  primaryCta: { label: "See AI agent services", href: "/services/ai-agents" },
  secondaryCta: { label: "How we modernize apps", href: "/services/custom-software" },
};

export const HOME_STARTUP_STATS = [
  { value: "AI agents", label: "Built for real applications" },
  { value: "10+", label: "Industries we work in" },
  { value: "2 tracks", label: "New agents & app modernization" },
  { value: "Pilot-first", label: "Prove value before you scale" },
];

export const HOME_ALERT = {
  eyebrow: "Engagement",
  title: "How we put AI inside your software",
  body: "We study how your teams use existing applications, design agents for those workflows, and ship AI features people can rely on—not demos that sit on the shelf.",
  primaryCta: { label: "About us", href: "/about" },
  secondaryCta: { label: "Explore services →", href: "/#services-grid" },
};

/** Capabilities aligned to agent building and app modernization. */
const HOME_SERVICE_CAPABILITIES = [
  {
    serviceSlug: "ai-agents",
    name: "AI agents for your applications",
    description:
      "Multi-step agents that work inside your CRM, ERP, internal tools, and customer-facing apps—with human review and clear audit trails.",
    icon: "agents",
  },
  {
    serviceSlug: "custom-software",
    name: "App modernization",
    description:
      "Upgrade existing web, mobile, and enterprise applications with AI copilots, automation, and intelligent workflows.",
    icon: "platform",
  },
  {
    serviceSlug: "generative-ai",
    name: "Copilots inside your apps",
    description:
      "Add document search, chat assistants, and smart suggestions directly into the software your company already uses.",
    icon: "genai",
  },
  {
    serviceSlug: "artificial-intelligence",
    name: "ML behind your agents",
    description:
      "Prediction, classification, and decision models that power agent actions in production.",
    icon: "ml",
  },
  {
    serviceSlug: "mobile-apps",
    name: "AI-powered mobile apps",
    description:
      "Native and cross-platform apps with built-in agents, voice, and on-device intelligence.",
    icon: "mobile",
  },
  {
    serviceSlug: "llm-development",
    name: "Language models for agents",
    description:
      "Choose, tune, and host the models that drive agent reasoning—with cost and safety controls.",
    icon: "llm",
  },
  {
    serviceSlug: "data-engineering",
    name: "Data for intelligent apps",
    description:
      "Connect your application data to agents and copilots so answers stay accurate and up to date.",
    icon: "data",
  },
  {
    serviceSlug: "devops",
    name: "Ship and run AI features",
    description:
      "Deploy agent updates safely, monitor usage, and keep AI-powered applications reliable in production.",
    icon: "devops",
  },
];

export const HOME_FEATURES = {
  id: "home-features",
  eyebrow: "Capabilities",
  title: "Two ways we help companies use AI",
  lead: "We build new AI agents from scratch and we transform the applications you already have into AI-powered software—both across the industries you operate in.",
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

export const HOME_SERVICES_GRID = {
  id: "services-grid",
  eyebrow: "Service catalog",
  title: "Build agents. Modernize apps.",
  lead: "From greenfield AI agents to upgrading legacy ERP, CRM, and internal tools—pick the service track that matches where you are today.",
  viewAllHref: undefined,
  viewAllLabel: "View all services",
};

export const HOME_TECH_STACK = {
  id: "tech-stack",
  eyebrow: "Technology",
  title: "Tools we use for agents and AI apps",
  lead: "See the frameworks, models, and platforms behind the agents and modernized applications we deliver.",
  primaryCta: { label: "View AI agent services", href: "/services/ai-agents" },
  secondaryCta: { label: "Explore all services", href: "/#services-grid" },
  filterAllLabel: "All services",
};

export const HOME_WORKFLOW = {
  id: "ai-workflow",
  eyebrow: "Workflow",
  title: "How we build agents and modernize your apps",
  lead: "Whether we are creating a new agent or upgrading software you already own, we follow the same practical path—from your real workflows to production AI.",
  steps: [
    {
      title: "Understand your application",
      desc: "Map how people use your software today—CRMs, ERPs, portals, mobile apps—and find the workflows agents can improve first.",
    },
    {
      title: "Design the AI agents",
      desc: "Define what each agent does, which tools it can access, and where humans stay in the loop.",
    },
    {
      title: "Build and integrate",
      desc: "Embed agents and copilots into your application with APIs, UI changes, and secure connections to your data.",
    },
    {
      title: "Launch and expand",
      desc: "Roll out to a pilot group, measure adoption and results, then extend agents to more teams and use cases.",
    },
  ],
};

export const HOME_ENGINEERING_SHOWCASES = {
  id: "engineering-showcases",
  eyebrow: "Industry ready agents",
  title: "Production-ready agents we ship",
  lead: "Named agents—Agent Vidya, Agent Arogya, Agent Kavacha, and more—built inside sector applications, tested live, and validated for production.",
  viewAllHref: "/case-studies",
  viewAllLabel: "View all agents",
  items: [
    {
      slug: "fraud-guard-transactions",
      title: "Agent Kavacha — live transaction monitoring",
      shortTitle: "Agent Kavacha",
      summary: "AML agent tested on live payment streams with analyst queues and audit trails.",
      imageKey: "medimind-ai",
      domain: "Finance",
      href: "/case-studies/fraud-guard-transactions",
    },
    {
      slug: "medimind-clinical-assist",
      title: "Agent Arogya — clinical documentation agent",
      shortTitle: "Agent Arogya",
      summary: "EHR-embedded agent tested in clinical sandboxes with clinician review on every output.",
      imageKey: "medimind-ai",
      domain: "Healthcare",
      href: "/case-studies/medimind-clinical-assist",
    },
    {
      slug: "smart-teaching-platform",
      title: "Agent Vidya — educator copilot",
      shortTitle: "Agent Vidya",
      summary: "LMS copilot tested in live classrooms with FERPA-aligned controls and teacher review.",
      imageKey: "smart-teaching-platform",
      domain: "Education",
      href: "/case-studies/smart-teaching-platform",
    },
    {
      slug: "stock-sense-commerce",
      title: "Agent Vyapar — ERP inventory agent",
      shortTitle: "Agent Vyapar",
      summary: "Replenishment agent tested inside ERP and WMS with manager approval before purchase orders.",
      imageKey: "data-engineering",
      domain: "Commerce",
      href: "/case-studies/stock-sense-commerce",
    },
  ],
};

export const HOME_DOMAINS = {
  id: "interdisciplinary-domains",
  eyebrow: "Industries",
  title: "AI agents across industries",
  lead: "We build and embed agents in industry-specific applications. Each industry page lists industry ready agents you can scope and deploy inside your software.",
  items: [
    { title: "Healthcare AI", href: "/industries/healthcare", icon: "healthcare" },
    { title: "Education and learning", href: "/industries/education", icon: "education" },
    { title: "Commerce and retail", href: "/industries/retail", icon: "commerce" },
    { title: "Sports and media", href: "/industries/sports-gaming", icon: "media" },
    { title: "Banking and finance", href: "/industries/fintech", icon: "fintech" },
    { title: "Manufacturing and operations", href: "/industries/manufacturing", icon: "operations" },
    { title: "Real estate and PropTech", href: "/industries/real-estate", icon: "proptech" },
    { title: "Knowledge and analytics", href: "/services/data-engineering", icon: "analytics" },
  ],
};

export const HOME_BLOGS_BAND = {
  id: "from-the-blogs",
  eyebrow: "Blog",
  title: "From our blog",
  lead: "Notes on building AI agents, modernizing applications, and shipping AI features that teams actually use.",
  viewAllHref: "/blog",
  viewAllLabel: "View all articles",
  autoAdvanceMs: 5500,
  slugs: ["augment-code-vs-cursor", "claude-vs-chatgpt-coding", "top-vibe-coding-tools"],
};

export const HOME_VISION_CTA_2 = {
  id: "vision-cta-2",
  eyebrow: "Platforms",
  title: "Agent platforms you can start from",
  body: "Pre-built agent modules and application patterns speed up delivery—then we tailor them to your software, data, and industry rules.",
  primaryCta: { label: "See agent platforms", href: "/solutions" },
  secondaryCta: { label: "Talk to our team", href: "/#page-contact" },
  mockupKey: "code",
};

/** @deprecated Homepage uses HOME_BLOGS_BAND inside industries block */
export const HOME_INSIGHTS = HOME_BLOGS_BAND;

/** @deprecated Removed from homepage */
export const HOME_INFRASTRUCTURE = {
  id: "infrastructure",
  title: "Cloud infrastructure for AI agents",
  lead: "Reliable hosting, monitoring, and security for agent-powered applications at scale.",
  topics: [],
  mockupKey: "pipeline",
};

export const HOME_PHILOSOPHY = {
  id: "philosophy",
  eyebrow: "Philosophy",
  title: "What we believe about AI in business software",
  lead: "AI agents belong inside the applications people already use—not as separate tools that slow teams down.",
  bullets: [
    "Every company app can become an AI-powered application",
    "Agents should automate real workflows, not generic chat",
    "Start with one use case, prove results, then grow",
    "Your team keeps ownership of the software we help upgrade",
  ],
  mockupKey: "security",
};

export const HOME_SOLUTIONS_SLIDER = {
  id: "solutions-slider",
  eyebrow: "Industry ready agents",
  title: "Production-ready agents we ship",
  lead: "Named agents—Agent Vidya, Agent Arogya, Agent Kavacha, and more—built inside sector applications, tested live, and validated for production. Includes customizable agent platforms for faster rollout.",
  viewAllHref: "/case-studies",
  viewAllLabel: "View all agents",
};

/** @deprecated Use HOME_SERVICES_GRID + HOME_SOLUTIONS_SLIDER */
export const HOME_SERVICES_SLIDER = HOME_SERVICES_GRID;
export const HOME_SOLUTION_TOPIC_SECTIONS = [];
export const HOME_CORE_TOPIC_SECTIONS = HOME_SOLUTION_TOPIC_SECTIONS;

export const HOME_ASSURANCE_SECTION = {
  id: "assurance",
  title: "Assurance for every agent we ship",
  lead: "Security, access control, and human review are built into agents from day one—not added after launch.",
  bullets: [
    "Agents only access data and tools you approve",
    "Human review on high-risk agent actions",
    "Full logs of what agents did and why",
    "Documentation for your security and compliance teams",
    "Privacy rules agreed before we connect to your apps",
    "Controlled updates to agent behavior and prompts",
  ],
  learnMore: { label: "See our security practices", href: "/security" },
  contact: { label: "Contact us", href: "/#page-contact" },
};

export const HOME_OUTCOMES_SECTION = {
  id: "enterprise-efficiency",
  title: "Outcomes when we modernize your software",
  lead: "Faster workflows, smarter applications, and a clear path from pilot to company-wide rollout.",
  bullets: [
    "AI agents working inside your existing applications",
    "Modernized apps your teams can adopt without retraining on new tools",
    "Pilot scope with agreed goals before full rollout",
    "Handoff so your engineers can extend agents and features",
    "Support after launch when you need it",
    "Honest recommendations on build vs. buy for each agent",
  ],
  learnMore: { label: "Discuss your applications", href: "/#page-contact" },
  contact: { label: "View services", href: "/#services-grid" },
};

/** @deprecated */
export const HOME_TOPIC_SECTIONS = [
  ...HOME_CORE_TOPIC_SECTIONS,
  HOME_ASSURANCE_SECTION,
  HOME_OUTCOMES_SECTION,
];

export const HOME_METHODOLOGY = {
  title: "How we deliver AI agents and app upgrades",
  lead: "We keep pilots small, integrate with software you already run, and show working agents early—not months of planning.",
  steps: [
    { title: "Discover", desc: "Review your applications, workflows, and data to pick the first agent or AI feature to build." },
    { title: "Build", desc: "Create agents and embed them in your app—or modernize the app with AI in a pilot scope." },
    { title: "Ship", desc: "Launch to a real user group with monitoring and human oversight where needed." },
    { title: "Expand", desc: "Measure results and add agents to more processes, teams, and applications." },
  ],
};

export const HOME_COVERAGE = {
  title: "Who we work with",
  lead: "Companies that want AI inside their software—not another disconnected chatbot.",
  items: [
    { title: "Product and engineering teams", desc: "Adding AI agents and copilots to products and internal tools on a release timeline." },
    { title: "Operations and business leaders", desc: "Modernizing legacy applications to cut manual work and improve decisions." },
    { title: "IT and innovation groups", desc: "Running pilots that prove AI value in real applications before wider investment." },
  ],
};

export const HOME_NEXT_STEP = {
  eyebrow: "Contact",
  title: "Ready to add AI agents to your applications?",
  lead: "Tell us about the software you run today—we will suggest whether to build new agents, modernize an existing app, or both.",
  primaryCta: { label: "Book a call", href: "/#page-contact?topic=consultation" },
  secondaryCta: { label: "Send a message", href: "/#page-contact" },
  tertiaryCta: { label: "See AI agents", href: "/services/ai-agents" },
};
