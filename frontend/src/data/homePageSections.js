import blogArticles from "./blog";

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
  badge: "Enterprise AI & application services",
  titleBefore: "Enterprise",
  titleAccent: "AI delivery",
  titleAfter: "and application modernization at scale",
  lead: "NeuralTrix delivers intelligent automation, generative AI, and application modernization programs—integrated with CRM, ERP, and line-of-business systems across regulated and operational environments.",
  features: [
    { icon: "bot", label: "AI agents" },
    { icon: "layers", label: "Intelligent integration" },
    { icon: "brain", label: "Advanced AI models" },
    { icon: "trending-up", label: "Measurable outcomes" },
  ],
  primaryCta: { label: "View service offerings", href: "/#services-grid" },
  valueDeliver: [
    { icon: "heart", label: "User-centered design" },
    { icon: "settings", label: "Operational excellence" },
    { icon: "bar-chart", label: "Data-driven decisions" },
    { icon: "box", label: "Sustainable architecture" },
  ],
  /** @deprecated kept for any legacy references */
  title: "Enterprise AI delivery and application modernization",
  secondaryCta: { label: "Application modernization", href: "/services/custom-software" },
};

export const HOME_STARTUP_STATS = [
  { value: "AI agents", label: "Built for real applications" },
  { value: "10+", label: "Industries we work in" },
  { value: "2 tracks", label: "Intelligent automation & modernization" },
  { value: "Governed pilots", label: "Measured scope before scale-up" },
];

export const HOME_ALERT = {
  eyebrow: "Engagement",
  title: "Methodology for embedding AI in enterprise applications",
  body: "This methodology assesses application workflows, designs governed intelligent automation, and delivers production capabilities with defined acceptance criteria.",
  primaryCta: { label: "About us", href: "/about" },
  secondaryCta: { label: "Explore services →", href: "/#services-grid" },
};

/** Delivery capabilities — program standards distinct from the service catalog grid. */
const HOME_DELIVERY_CAPABILITIES = [
  {
    name: "Embedded in your applications",
    description:
      "Agents appear inside CRM, ERP, EHR, and internal tools your teams already use—not separate chat windows outside daily work.",
    icon: "agents",
    href: "/services/ai-agents",
  },
  {
    name: "Governance and human review",
    description:
      "Role gates, approval queues, and audit trails on high-risk actions so security and compliance teams can verify agent behavior.",
    icon: "governance",
  },
  {
    name: "Pilot-first rollout",
    description:
      "Bounded pilots with agreed success measures before we extend agents to more teams, sites, or use cases.",
    icon: "devops",
  },
  {
    name: "Production validation",
    description:
      "Live and sandbox testing against named production agents—Agent Vidya, Agent Arogya, and sector programs—before we mark a build ready.",
    icon: "platform",
    href: "/research-innovation#test-cases",
  },
  {
    name: "Sector-aware controls",
    description:
      "Workflow and data boundaries reflect industry context—clinical sign-off, AML explainability, FERPA scope, and public-sector accessibility.",
    icon: "data",
    href: "/industries",
  },
  {
    name: "Measurable adoption",
    description:
      "Usage monitoring, feedback loops, and documented releases so operators can govern agent behavior after launch.",
    icon: "genai",
  },
];

export const HOME_FEATURES = {
  id: "home-features",
  eyebrow: "Capabilities",
  title: "Assurance standards for enterprise AI programs",
  lead: "These delivery standards apply across intelligent automation and application modernization engagements—independent of the service catalog structure.",
  items: HOME_DELIVERY_CAPABILITIES,
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
  eyebrow: "Service offerings",
  title: "Enterprise capabilities for AI and application modernization",
  lead: "Structured service lines across intelligent automation, generative AI, application modernization, data platforms, and cloud engineering—aligned to how global enterprises plan, govern, and scale delivery.",
  viewAllHref: undefined,
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
  eyebrow: "Workflow",
  title: "Methodology for enterprise AI and application delivery",
  lead: "This methodology applies the same delivery sequence for intelligent automation and application modernization—from workflow analysis through governed production rollout.",
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
  title: "Production-validated intelligent automation",
  lead: "Named programs—including Agent Vidya, Agent Arogya, and Agent Kavacha—delivered inside sector applications, validated in live environments, and documented for production use.",
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
  title: "Coverage across industry sectors",
  lead: "Sector-specific intelligent automation programs embedded in line-of-business applications. Each industry page outlines validated agent patterns and integration scope.",
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
  lead: "Technical notes on intelligent automation, application modernization, and governed AI delivery in production environments.",
  viewAllHref: "/blog",
  viewAllLabel: "View all articles",
  autoAdvanceMs: 5500,
  slugs: ["augment-code-vs-cursor", "claude-vs-chatgpt-coding", "top-vibe-coding-tools"],
};

export const HOME_VISION_CTA_2 = {
  id: "vision-cta-2",
  eyebrow: "Platforms",
  title: "Solution accelerators for faster deployment",
  body: "Pre-built modules and reference architectures accelerate delivery—configured to your applications, data boundaries, and sector governance requirements.",
  primaryCta: { label: "View solution modules", href: "/solutions" },
  secondaryCta: { label: "Contact us", href: "/#page-contact" },
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
  title: "Delivery principles for enterprise AI",
  lead: "Intelligent automation should operate within existing application workflows, with governance and measurable outcomes.",
  bullets: [
    "Enterprise applications can adopt intelligent automation incrementally",
    "Automation should target defined operational workflows",
    "Pilot with agreed metrics, then expand under governance",
    "Your team keeps ownership of the software we help upgrade",
  ],
  mockupKey: "security",
};

export const HOME_SOLUTIONS_SLIDER = {
  id: "solutions-slider",
  eyebrow: "Platforms",
  title: "Solution accelerators for enterprise applications",
  lead: "Pre-built modules for deployment inside CRM, ERP, internal tools, and customer applications—derived from production delivery programs.",
  viewAllHref: "/solutions",
  viewAllLabel: "View all accelerators",
};

/** @deprecated Use HOME_SERVICES_GRID + HOME_SOLUTIONS_SLIDER */
export const HOME_SERVICES_SLIDER = HOME_SERVICES_GRID;
export const HOME_SOLUTION_TOPIC_SECTIONS = [];
export const HOME_CORE_TOPIC_SECTIONS = HOME_SOLUTION_TOPIC_SECTIONS;

export const HOME_ASSURANCE_SECTION = {
  id: "assurance",
  title: "Assurance for intelligent automation programs",
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
  title: "Outcomes for application modernization programs",
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
  title: "Methodology for enterprise AI delivery",
  lead: "This methodology emphasizes bounded pilots, integration with existing systems, and early validation against agreed success criteria.",
  steps: [
    { title: "Discover", desc: "Review your applications, workflows, and data to pick the first agent or AI feature to build." },
    { title: "Build", desc: "Create agents and embed them in your app—or modernize the app with AI in a pilot scope." },
    { title: "Deploy", desc: "Release to a defined user cohort with monitoring and human oversight where required." },
    { title: "Expand", desc: "Measure results and add agents to more processes, teams, and applications." },
  ],
};

export const HOME_COVERAGE = {
  title: "Coverage across client profiles",
  lead: "Organizations seeking governed intelligent automation within existing application estates.",
  items: [
    { title: "Product and engineering teams", desc: "Adding AI agents and copilots to products and internal tools on a release timeline." },
    { title: "Operations and business leaders", desc: "Modernizing legacy applications to cut manual work and improve decisions." },
    { title: "IT and innovation groups", desc: "Running pilots that prove AI value in real applications before wider investment." },
  ],
};

export const HOME_NEXT_STEP = {
  eyebrow: "Contact",
  title: "Next Step for your enterprise AI program",
  lead: "Share your application landscape and priorities. We will recommend service lines, pilot scope, and governance boundaries.",
  primaryCta: { label: "Schedule consultation", href: "/#page-contact?topic=consultation" },
  secondaryCta: { label: "Send a message", href: "/#page-contact" },
  tertiaryCta: { label: "View service offerings", href: "/#services-grid" },
};
