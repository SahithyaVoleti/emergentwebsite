import blogArticles from "./blog";
import { HOME_STARTUP_STATS } from "./homePageSections";
import { SITE_OUTCOMES_MEDIA, SITE_ASSURANCE_MEDIA, SITE_CAPABILITIES_MEDIA } from "./brandAssets";

/** Canonical section order for the services hub page. */
export const SERVICES_PAGE_LAYOUT = [
  "hero",
  "startup-stats",
  "services-intro",
  "services-catalog",
  "tech-stack",
  "core-capabilities",
  "methodology",
  "outcomes",
  "assurance",
  "case-studies",
  "industries",
  "engagement",
  "blog",
  "next-step",
  "faq",
  "contact",
];

export const SERVICES_HERO = {
  title: "AI development services for |product-led teams|",
  description:
    "NeuralTrix designs and delivers applied AI, generative features, and data foundations inside software already in market—using machine learning, retrieval systems, and language models with governance built in from the first pilot.",
  primaryCTA: { text: "Browse service disciplines", href: "#services-catalog" },
  secondaryCTA: { text: "Discuss a pilot", href: "#page-contact", contactIntent: "consultation" },
};

export const SERVICES_STARTUP_STATS = HOME_STARTUP_STATS;

export const SERVICES_INTRO = {
  id: "services-intro",
  eyebrow: "Services",
  title: "Five disciplines for |AI product delivery|",
  lead: "Each discipline includes scoped subservices you can engage independently—applied AI, data engineering, generative AI, platform reliability, and software product engineering.",
  body:
    "We work as a senior-led startup studio: fixed pilot scope, measurable acceptance criteria, and direct access to the engineers building your features—not a layered account team.",
  primaryCta: { label: "View disciplines", href: "#services-catalog" },
  secondaryCta: { label: "View our work", href: "/our-work" },
};

export const SERVICES_CATALOG = {
  id: "services-catalog",
  eyebrow: "Service offerings",
  title: "Main |services|",
  lead: "Open a discipline to review subservices, deliverables, and integration assumptions. Each offering maps to a defined scope—not a generic capability list.",
};

export const SERVICES_TECH_STACK = {
  id: "services-tech-stack",
  eyebrow: "Technology stack",
  title: "The stack behind our |AI delivery|",
  lead: "Models, frameworks, data systems, and cloud platforms we apply across applied AI, generative features, and product engineering engagements.",
};

export const SERVICES_CORE_CAPABILITIES = {
  id: "core-capabilities",
  eyebrow: "Capabilities",
  title: "Core |AI and ML| capabilities",
  lead: "Technical foundations we implement during pilots and production rollouts—selected against your latency, cost, and data-handling requirements.",
  items: [
    {
      name: "Machine learning integration",
      description:
        "Scoring, classification, and forecasting embedded in product workflows with evaluation harnesses tied to your domain tasks.",
      icon: "ml",
    },
    {
      name: "Natural language processing",
      description:
        "Text understanding, entity extraction, and conversational routing designed for production monitoring and reviewer workflows.",
      icon: "agents",
    },
    {
      name: "Retrieval-augmented systems",
      description:
        "Permission-aware search and grounded responses over enterprise knowledge—with source attribution and access boundaries.",
      icon: "data",
    },
    {
      name: "Language model engineering",
      description:
        "Model selection, fine-tuning, routing, and cost controls across commercial and open foundation models.",
      icon: "llm",
    },
    {
      name: "Generative feature delivery",
      description:
        "Copilots, agents, and structured generation inside CRM, ERP, and line-of-business tools your teams operate today.",
      icon: "genai",
    },
    {
      name: "Production observability",
      description:
        "Model performance monitoring, regression alerts, and rollback paths integrated with your release and on-call practices.",
      icon: "devops",
    },
  ],
  media: SITE_CAPABILITIES_MEDIA,
};

export const SERVICES_METHODOLOGY = {
  id: "services-methodology",
  eyebrow: "Methodology",
  title: "Methodology for |AI development engagements|",
  lead: "This methodology sequences discovery, pilot delivery, validation, and handover—with clear ownership at each stage.",
  process: [
    {
      step: "Discovery and scope alignment",
      desc: "Map the application, workflow, data boundaries, and success measures before build begins.",
    },
    {
      step: "Architecture and data readiness",
      desc: "Confirm integration surfaces, retrieval design, and evaluation criteria for the pilot slice.",
    },
    {
      step: "Pilot build and integration",
      desc: "Implement AI features or copilots inside your existing stack with scoped permissions and audit trails.",
    },
    {
      step: "Validation and governance review",
      desc: "Test on real tasks, document controls, and agree rollback criteria before wider release.",
    },
    {
      step: "Handover and scale path",
      desc: "Transfer runbooks, observability, and code ownership—with an optional roadmap for the next increment.",
    },
  ],
};

export const SERVICES_OUTCOMES = {
  id: "services-outcomes",
  eyebrow: "Outcomes",
  title: "Outcomes for |startup and growth-stage| partners",
  body: "We optimize for measurable pilot results and maintainable handover—not slide-deck demos or open-ended experimentation.",
  bullets: [
    "Senior engineers on every active workstream from scoping through handover",
    "Pilots scoped to one workflow with agreed metrics before scale-up",
    "AI embedded in products your teams already operate—not parallel prototypes",
    "Runbooks, tests, and observability your engineers can extend in-house",
  ],
  primaryCta: { label: "Request consultation", href: "#page-contact", contactIntent: "consultation" },
  secondaryCta: { label: "View case studies", href: "#services-case-studies" },
  media: SITE_OUTCOMES_MEDIA,
};

export const SERVICES_ASSURANCE = {
  id: "services-assurance",
  eyebrow: "Assurance",
  title: "Assurance for |AI product delivery|",
  lead: "This assurance model embeds guardrails, logging, and rollback from the initial delivery phase—not after launch.",
  bullets: [
    "Scoped credentials and audit trails for automated actions",
    "Human review on high-risk outputs before production promotion",
    "Rollback paths for prompts, models, and tool permissions",
    "Documentation structured for security and procurement review",
  ],
  media: SITE_ASSURANCE_MEDIA,
};

export const SERVICES_CASE_STUDIES = {
  id: "services-case-studies",
  eyebrow: "Our Work",
  title: "Client |case studies|",
  lead: "Representative deployments across education, workforce operations, healthcare, and admissions—each scoped to measurable operational outcomes.",
  viewAllHref: "/our-work/case-studies",
  viewAllLabel: "View all case studies",
  slugs: [
    "leadcliques-education-enrollment",
    "schooltrix-multi-campus-school",
    "medclues-regional-hospital",
  ],
};

export const SERVICES_INDUSTRIES = {
  id: "services-industries",
  eyebrow: "Industries",
  title: "Coverage across |regulated sectors|",
  lead: "We scope AI programs around sector data boundaries, review cycles, and operational workflows—healthcare, education, finance, commerce, and more.",
};

export const SERVICES_ENGAGEMENT = {
  title: "Engagement principles for new partners",
};

export const SERVICES_BLOG = {
  id: "services-blog",
  eyebrow: "Insights",
  title: "Engineering notes on |AI delivery|",
  lead: "Practical notes on model fine-tuning, product integration, and operating AI features in production environments.",
  viewAllHref: "/blog",
  viewAllLabel: "View all articles",
  slugs: ["augment-code-vs-cursor", "claude-vs-chatgpt-coding", "top-vibe-coding-tools"],
};

export const SERVICES_NEXT_STEP = {
  id: "services-next-step",
  eyebrow: "Next Step",
  title: "Next Step for your |AI development scope|",
  lead: "Share your product landscape and priority workflow. We will recommend service lines, pilot boundaries, and delivery milestones.",
  primaryCta: { label: "Request consultation", href: "#page-contact", contactIntent: "consultation" },
  secondaryCta: { label: "Browse disciplines", href: "#services-catalog" },
};

export const SERVICES_FAQS = [
  {
    q: "What AI development services does NeuralTrix offer?",
    a: "We deliver applied AI engineering, enterprise data engineering, generative AI solutions, platform reliability, and software product engineering. Each discipline includes defined subservices you can scope independently—from advisory and retrieval systems to copilots, fine-tuning, and production integration.",
  },
  {
    q: "How is NeuralTrix different from a large offshore agency?",
    a: "We operate as a senior-led startup studio: direct access to builders, fixed pilot scope, and measurable acceptance criteria. Engagements are sized for product teams that need production integration—not generic capability decks or long discovery cycles without delivery.",
  },
  {
    q: "How long does a typical pilot take?",
    a: "Most scoped pilots run four to six weeks from kickoff to validated handover, depending on data access, integration complexity, and review requirements. We agree milestones and rollback criteria before build begins.",
  },
  {
    q: "Can you work inside our existing product and cloud stack?",
    a: "Yes. We integrate through your APIs, data pipelines, identity systems, and deployment platforms. Stack choices remain subordinate to your policies, residency requirements, and operational constraints.",
  },
  {
    q: "Do you build custom models or use foundation models?",
    a: "We select the approach against your latency, cost, and data-handling requirements. That may include commercial foundation models, fine-tuned open models, retrieval-augmented orchestration, or a combination—with evaluation tied to your domain tasks.",
  },
  {
    q: "What happens after the pilot?",
    a: "We hand over documented systems with runbooks and observability. Your team retains ownership of models, code, and release decisions. We can support monitoring and iteration, or transition operational responsibility in-house.",
  },
];

export const SERVICES_BLOG_POSTS = blogArticles.slice(0, 3).map((article) => ({
  title: article.title,
  href: `/blog/${article.slug}`,
  meta: `${article.date} · ${article.readTime}`,
}));
