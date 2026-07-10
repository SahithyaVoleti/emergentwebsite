import { SERVICE_CATALOG } from "../serviceCatalog";
import {
  getSubserviceCapabilityMedia,
  getSubserviceIntroMedia,
} from "../serviceSubserviceImages";
import services from "../services";
import { buildStatsSectionMeta, buildSubserviceStatsItems } from "../../lib/buildServiceStatsStrip";

const CAPABILITY_ICONS = ["ml", "data", "governance", "platform", "llm", "devops", "agents"];

const DEFAULT_CASE_STUDY_SLUGS = [
  "leadcliques-education-enrollment",
  "schooltrix-multi-campus-school",
  "medclues-regional-hospital",
];

const INTRO_TITLE_BY_PILLAR = {
  "artificial-intelligence": "Intelligent capabilities inside |systems you operate|",
  "data-engineering": "Governed data platforms for |AI and analytics|",
  "generative-ai": "Generative features inside |enterprise workflows|",
  devops: "Reliable delivery for |AI and application| workloads",
  "development-services": "Product engineering with |defined acceptance criteria|",
};

function slugify(value) {
  return String(value)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function shortLabel(title) {
  return title.replace(/\s*&\s*/g, " and ").toLowerCase();
}

function itemModuleDesc(item, subservice, pillar) {
  return `${item} within ${subservice.title.toLowerCase()}—scoped with defined acceptance criteria, integration boundaries, and handover artifacts aligned to ${pillar.label.toLowerCase()}.`;
}

function supplementalModules(subservice, pillar) {
  const focus = subservice.title.toLowerCase();

  return [
    {
      title: "Pilot scope and success criteria",
      desc: `Fixed boundaries, metrics, and review gates for ${focus}—agreed before engineering or advisory work begins.`,
    },
    {
      title: "Integration and data boundary design",
      desc: "Document API surfaces, identity models, residency requirements, and access policies for production rollout.",
    },
    {
      title: "Evaluation and acceptance testing",
      desc: "Regression, held-out evaluation, and user acceptance tests sized for the pilot slice before wider release.",
    },
    {
      title: "Governance and production handover",
      desc: "Audit trails, rollback paths, and runbooks transferred to your team with documented operational ownership.",
    },
  ];
}

function buildServiceModules(subservice, pillar) {
  const itemModules = (subservice.items ?? []).map((item) => ({
    title: item,
    desc: itemModuleDesc(item, subservice, pillar),
  }));

  return [...itemModules, ...supplementalModules(subservice, pillar)].slice(0, 8);
}

function buildCoreCapabilities(subservice) {
  const fromItems = (subservice.items ?? []).slice(0, 4).map((item, index) => ({
    name: item,
    description: `Delivered within ${subservice.title.toLowerCase()} pilots with measurable acceptance criteria and documented handover.`,
    icon: CAPABILITY_ICONS[index % CAPABILITY_ICONS.length],
  }));

  const extras = [
    {
      name: "Production observability",
      description:
        "Monitoring, regression alerts, and review cadences integrated with your release and on-call practices.",
      icon: "devops",
    },
    {
      name: "Governed rollout planning",
      description:
        "Phased release criteria, rollback paths, and audit expectations aligned to your operating model.",
      icon: "governance",
    },
  ];

  return [...fromItems, ...extras].slice(0, 6);
}

function buildMethodologySteps(subservice, service) {
  const focus = subservice.title.toLowerCase();
  const steps = service?.process?.slice(0, 6) ?? [];

  if (steps.length >= 6) {
    return steps.slice(0, 6).map((step) => ({
      step: step.step,
      desc: step.desc,
    }));
  }

  return [
    {
      step: "Discovery and scope alignment",
      desc: `Map workflows, data boundaries, and success measures for ${focus} before build begins.`,
    },
    {
      step: "Architecture and design",
      desc: "Confirm integration surfaces, technical approach, and evaluation criteria for the pilot slice.",
    },
    {
      step: "Pilot build and integration",
      desc: "Implement agreed deliverables with scoped permissions, audit trails, and staged validation gates.",
    },
    {
      step: "Validation and governance review",
      desc: "Run acceptance tests, document controls, and agree rollback criteria before wider release.",
    },
    {
      step: "Production rollout planning",
      desc: "Align release criteria, monitoring, and operator handover for the first production increment.",
    },
    {
      step: "Handover and scale path",
      desc: "Transfer runbooks, observability, and code ownership—with an optional roadmap for the next increment.",
    },
  ];
}

function buildFaqs(subservice, pillar, service) {
  const focus = subservice.title.toLowerCase();
  const serviceFaqs = service?.faqs ?? [];

  return [
    {
      q: `What is included in ${subservice.title}?`,
      a: `${subservice.desc} Typical deliverables include ${subservice.items.slice(0, 3).join(", ").toLowerCase()}, and related artifacts defined during scoping.`,
    },
    {
      q: `Can ${subservice.title} be scoped as a standalone pilot?`,
      a: `Yes. Most partners begin with a single ${focus} pilot scoped to one workflow before expanding to additional ${pillar.label.toLowerCase()} workstreams.`,
    },
    {
      q: "How long does a typical pilot take?",
      a: "Most scoped pilots run four to six weeks from kickoff to validated handover, depending on data access, integration complexity, and review requirements.",
    },
    {
      q: "How is NeuralTrix different from a large offshore agency?",
      a: "We operate as a senior-led startup studio: direct access to builders, fixed pilot scope, and measurable acceptance criteria—not generic capability decks or long discovery cycles without delivery.",
    },
    {
      q: "Can you work inside our existing product and cloud stack?",
      a: "Yes. We integrate through your APIs, data pipelines, identity systems, and deployment platforms. Stack choices remain subordinate to your policies and operational constraints.",
    },
    {
      q: "Do you provide support after the pilot?",
      a: `Yes. We hand over documented systems with runbooks and observability. Your team retains ownership of code and release decisions, with optional support for ${focus} iteration.`,
    },
    ...serviceFaqs.slice(0, 3),
  ].slice(0, 9);
}

function isAdvisorySubservice(subservice) {
  return /advisory|strategy/i.test(subservice.title) || /advisory/i.test(subservice.id);
}

/** Generate full landing-page override matching the AI Strategy & Advisory structure. */
export function buildSubservicePageOverride(pillar, subservice, service) {
  const idPrefix = subservice.id;
  const modulesId = `${slugify(subservice.id)}-modules`;
  const caseStudyId = `${slugify(subservice.id)}-case-studies`;
  const introMedia = getSubserviceIntroMedia(subservice.id, subservice.title);
  const capabilityMedia = getSubserviceCapabilityMedia(subservice.id, pillar.id, subservice.title);
  const advisory = isAdvisorySubservice(subservice);
  const scopeEyebrow = advisory ? "Advisory scope" : "Delivery scope";
  const pilotLabel = advisory ? "Typical advisory sprint" : "Typical pilot window";
  const shortTitle = shortLabel(subservice.title);

  return {
    hero: {
      title: `${subservice.title} for |product-led teams|`,
      description: `${subservice.desc} Scoped for startup and growth-stage teams that need governed pilots with measurable acceptance criteria.`,
      primaryCTA: { text: "View delivery scope", href: `#${modulesId}` },
      secondaryCTA: { text: "Request consultation", href: "#page-contact", contactIntent: "consultation" },
    },
    stats: {
      ...buildStatsSectionMeta(idPrefix),
      items: buildSubserviceStatsItems(pillar, subservice, service),
    },
    intro: {
      id: `${idPrefix}-intro`,
      eyebrow: subservice.title,
      title: INTRO_TITLE_BY_PILLAR[pillar.id] ?? "Scoped delivery for |your workflow|",
      lead: subservice.desc,
      body: `This workstream sits within ${pillar.label}. We scope one workflow per pilot with direct access to senior engineers, defined acceptance criteria, and handover artifacts your team can extend in-house.`,
      primaryCta: { label: "View delivery scope", href: `#${modulesId}` },
      secondaryCta: { label: pillar.label, href: `/services/${pillar.id}` },
      media: introMedia,
    },
    serviceBlocks: {
      id: modulesId,
      eyebrow: scopeEyebrow,
      title: `Modules within |${shortTitle}|`,
      lead: "Each module maps to accountable deliverables—select individually for a focused sprint or combine for a phased program.",
      modules: buildServiceModules(subservice, pillar),
    },
    offerings: { hide: true },
    relatedOfferings: { hide: true },
    engagement: { hide: true },
    blog: { hide: true },
    techStack: {
      id: `${idPrefix}-tech-stack`,
      testId: `${idPrefix}-tech-stack`,
      eyebrow: "Technology stack",
      title: `Platforms applied during |${shortTitle}|`,
    },
    coreCapabilities: {
      id: `${idPrefix}-capabilities`,
      eyebrow: "Capabilities",
      title: `Foundations for |${subservice.title}|`,
      lead: `Technical and operational foundations applied during ${shortTitle} pilots for startup and growth-stage partners.`,
      items: buildCoreCapabilities(subservice),
      media: capabilityMedia,
    },
    methodology: {
      id: `${idPrefix}-methodology`,
      eyebrow: "Methodology",
      title: `Methodology for |${shortTitle}|`,
      lead: "This methodology sequences alignment, build, validation, and handover—with clear ownership at each stage.",
      process: buildMethodologySteps(subservice, service),
    },
    outcomes: {
      id: `${idPrefix}-outcomes`,
      eyebrow: "Outcomes",
      title: `Outcomes for |${shortTitle}|`,
      body: "We optimize for measurable pilot results and maintainable handover—not slide-deck demos or open-ended experimentation.",
      bullets: [
        "Senior engineers on every active workstream from scoping through handover",
        "Pilots scoped to one workflow with agreed metrics before scale-up",
        "Capabilities embedded in products your teams already operate—not parallel prototypes",
        "Runbooks, tests, and observability your engineers can extend in-house",
      ],
      primaryCta: {
        label: "Request consultation",
        href: "#page-contact",
        contactIntent: "consultation",
      },
      secondaryCta: { label: "View case studies", href: `#${caseStudyId}` },
      mockupKey: "data",
    },
    trustMetrics: {
      id: `${idPrefix}-trust`,
      eyebrow: "Track record",
      title: "Delivery indicators for |startup partners|",
      lead: "Representative measures from NeuralTrix delivery programs—not inflated agency claims.",
      items: [
        { value: "6+", label: "Years AI delivery experience" },
        { value: "7+", label: "Products with AI features" },
        { value: "12+", label: "Models fine-tuned" },
        { value: "4–6 wks", label: pilotLabel },
      ],
      columns: 4,
    },
    assurance: {
      id: `${idPrefix}-assurance`,
      eyebrow: "Assurance",
      title: `Assurance for |${shortTitle}|`,
      lead: "This assurance model embeds guardrails, logging, and rollback from the initial delivery phase—not after launch.",
      bullets: [
        "Scoped credentials and audit trails for automated actions",
        "Human review on high-risk outputs before production promotion",
        "Rollback paths for prompts, models, and tool permissions",
        "Documentation structured for security and procurement review",
      ],
      mockupKey: "security",
    },
    caseStudies: {
      id: caseStudyId,
      eyebrow: "Our Work",
      title: "Client |case studies|",
      lead: `Representative programs related to ${shortTitle}—each scoped to measurable operational outcomes.`,
      viewAllHref: "/our-work/case-studies",
      viewAllLabel: "View all case studies",
      slugs: DEFAULT_CASE_STUDY_SLUGS,
    },
    industries: {
      id: `${idPrefix}-industries`,
      eyebrow: "Industries",
      title: "Coverage across |regulated sectors|",
      lead: `We scope ${shortTitle} programs around sector data boundaries, review cycles, and operational workflows.`,
    },
    nextStep: {
      id: `${idPrefix}-next-step`,
      eyebrow: "Next Step",
      title: `Next Step for |${shortTitle}|`,
      lead: "Share your product landscape and priority workflow. We will recommend scope boundaries, deliverables, and delivery milestones.",
      primaryCta: {
        label: "Request consultation",
        href: "#page-contact",
        contactIntent: "consultation",
      },
      secondaryCta: { label: "View delivery scope", href: `#${modulesId}` },
    },
    faqTitle: `Questions about ${subservice.title}`,
    faqs: buildFaqs(subservice, pillar, service),
  };
}

/** Build overrides for every catalog subservice except hand-crafted entries. */
export function buildAllSubservicePageOverrides(excludeIds = ["applied-ai-advisory"]) {
  const excluded = new Set(excludeIds);
  const overrides = {};

  for (const pillar of SERVICE_CATALOG) {
    const service = services.find((entry) => entry.slug === pillar.id);

    for (const subservice of pillar.subservices) {
      if (excluded.has(subservice.id)) continue;
      overrides[subservice.id] = buildSubservicePageOverride(pillar, subservice, service);
    }
  }

  return overrides;
}
