import services from "../data/services";
import { getSubserviceCardImage } from "../data/serviceSubserviceImages";
import { applySubservicePageOverride } from "../data/subservicePageOverrides";
import {
  buildPillarStatsItems,
  buildStatsSectionMeta,
  buildSubserviceStatsItems,
} from "./buildServiceStatsStrip";
import { dedupeTechNamesByIcon, extractTechNamesFromService } from "./serviceTechStackSlugs";

const DEFAULT_CASE_STUDY_SLUGS = [
  "leadcliques-education-enrollment",
  "schooltrix-multi-campus-school",
  "medclues-regional-hospital",
];

const DEFAULT_BLOG_SLUGS = [
  "augment-code-vs-cursor",
  "claude-vs-chatgpt-coding",
  "top-vibe-coding-tools",
];

const CAPABILITY_ICONS = ["ml", "agents", "data", "llm", "platform", "devops", "governance"];

const PILLAR_CORE_CAPABILITIES = {
  "artificial-intelligence": [
    {
      name: "Machine learning integration",
      description:
        "Scoring, classification, and forecasting embedded in product workflows with evaluation harnesses tied to your acceptance criteria.",
      icon: "ml",
    },
    {
      name: "Natural language processing",
      description:
        "Text understanding, entity extraction, and conversational routing designed for reviewer workflows and production monitoring.",
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
        "Model selection, routing, latency tuning, and cost controls across commercial and open foundation models.",
      icon: "llm",
    },
    {
      name: "Intelligent application delivery",
      description:
        "Decision support, classification, and scoring features inside line-of-business tools with rollback paths.",
      icon: "platform",
    },
    {
      name: "Production observability",
      description:
        "Model performance monitoring, regression alerts, and drift review integrated with your release practices.",
      icon: "devops",
    },
  ],
  "data-engineering": [
    {
      name: "Pipeline orchestration",
      description:
        "Batch and streaming ingestion with validation gates, failure handling, and observable stages for analytics and AI workloads.",
      icon: "data",
    },
    {
      name: "Warehouse and lakehouse design",
      description:
        "Schema modeling, storage tiers, and access patterns aligned to query profiles and cost controls.",
      icon: "platform",
    },
    {
      name: "Metric and semantic layers",
      description:
        "Governed metric definitions and self-service views that connect operational data to business decisions.",
      icon: "ml",
    },
    {
      name: "Training data preparation",
      description:
        "Labeling workflows, inter-annotator review, and dataset versioning for supervised learning programs.",
      icon: "agents",
    },
    {
      name: "Data quality and lineage",
      description:
        "Automated tests, freshness SLAs, and lineage tracing to isolate upstream issues before they reach models.",
      icon: "governance",
    },
    {
      name: "Platform handover",
      description:
        "Runbooks, cost dashboards, and stewardship workflows your data platform team can operate in-house.",
      icon: "devops",
    },
  ],
  "generative-ai": [
    {
      name: "Autonomous agent engineering",
      description:
        "Multi-step agents with scoped tools, durable execution, escalation paths, and operational kill switches.",
      icon: "agents",
    },
    {
      name: "Conversational interfaces",
      description:
        "Channel-aware assistants with policy filters, session memory, and reviewer workflows for regulated interactions.",
      icon: "llm",
    },
    {
      name: "Retrieval-augmented generation",
      description:
        "Grounded responses over enterprise knowledge with source attribution and permission boundaries.",
      icon: "data",
    },
    {
      name: "Domain model adaptation",
      description:
        "Fine-tuning and preference alignment with rollback when held-out evaluation metrics regress.",
      icon: "ml",
    },
    {
      name: "Generative feature integration",
      description:
        "Structured generation inside CRM, ERP, and line-of-business tools with schema-constrained outputs.",
      icon: "platform",
    },
    {
      name: "Copilot and assistant delivery",
      description:
        "Role-scoped copilots with tool permissions, citation policies, and conversation audit trails.",
      icon: "governance",
    },
  ],
  devops: [
    {
      name: "Pipeline automation",
      description:
        "Pipeline-as-code with signed artifacts, environment promotion, and rollback procedures tied to release policy.",
      icon: "devops",
    },
    {
      name: "Infrastructure as code",
      description:
        "Terraform, Ansible, and cloud-native provisioning with documented standards and guardrails.",
      icon: "platform",
    },
    {
      name: "Site reliability engineering",
      description:
        "SLO design, error budgets, chaos testing, and incident runbooks for mission-critical services.",
      icon: "governance",
    },
    {
      name: "Intelligent operations",
      description:
        "Automated remediation, anomaly correlation, and AI-assisted incident triage integrated with on-call workflows.",
      icon: "agents",
    },
    {
      name: "Model and LLM observability",
      description:
        "Monitor latency, drift, quality regressions, and cost for language-model and ML endpoints in production.",
      icon: "ml",
    },
    {
      name: "Platform enablement",
      description:
        "Self-service patterns, documentation, and training so your teams can operate the platform after handover.",
      icon: "data",
    },
  ],
  "development-services": [
    {
      name: "Full-stack product delivery",
      description:
        "Web and backend systems built to enterprise standards with test coverage, documentation, and operational handover.",
      icon: "platform",
    },
    {
      name: "Mobile application engineering",
      description:
        "iOS, Android, and cross-platform applications with offline resilience, secure sync, and store-ready release paths.",
      icon: "agents",
    },
    {
      name: "API platform engineering",
      description:
        "REST, GraphQL, and event APIs with versioning, authentication layers, and developer documentation.",
      icon: "data",
    },
    {
      name: "Embedded engineering teams",
      description:
        "Senior practitioners embedded with your product organization under defined reporting and quality checkpoints.",
      icon: "governance",
    },
    {
      name: "End-to-end product engineering",
      description:
        "Discovery through launch for a defined product slice—architecture, build, test, and release with stakeholder sign-off.",
      icon: "ml",
    },
    {
      name: "Launch readiness",
      description:
        "Release checklists, rollback plans, and post-launch support windows with knowledge transfer to your team.",
      icon: "devops",
    },
  ],
};

const PILLAR_HERO_ACCENT = {
  "artificial-intelligence": "product-led teams",
  "data-engineering": "data-driven products",
  "generative-ai": "enterprise workflows",
  devops: "production systems",
  "development-services": "software products",
};

function getServiceByPillarId(pillarId) {
  return services.find((service) => service.slug === pillarId);
}

function slugify(value) {
  return String(value)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function buildMethodologyProcess(service) {
  const steps = service?.process ?? [];
  if (steps.length >= 5) {
    return steps.slice(0, 5).map((step) => ({
      step: step.step,
      desc: step.desc,
    }));
  }

  return [
    {
      step: "Discovery and scope alignment",
      desc: "Map the workflow, data boundaries, integration surfaces, and success measures before build begins.",
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
      step: "Handover and scale path",
      desc: "Transfer runbooks, observability, and code ownership—with an optional roadmap for the next increment.",
    },
  ];
}

function buildOutcomeBullets(service) {
  const fromService = (service?.whyChooseUs ?? []).map(
    (item) => `${item.title}: ${item.desc}`
  );

  return [
    "Senior engineers on every active workstream from scoping through handover",
    "Pilots scoped to one workflow with agreed metrics before scale-up",
    ...fromService.slice(0, 2),
    "Runbooks, tests, and observability your engineers can extend in-house",
  ].slice(0, 4);
}

function buildAssuranceBullets() {
  return [
    "Scoped credentials and audit trails for automated actions",
    "Human review on high-risk outputs before production promotion",
    "Rollback paths for prompts, models, and tool permissions",
    "Documentation structured for security and procurement review",
  ];
}

function buildPillarFaqs(pillar, service) {
  const serviceFaqs = service?.faqs ?? [];
  const workstreamCount = pillar.subservices?.length ?? 0;

  return [
    {
      q: `What is included in ${pillar.label}?`,
      a: `${workstreamCount} scoped workstreams covering ${pillar.subservices
        .slice(0, 3)
        .map((sub) => sub.title.toLowerCase())
        .join(", ")}, and related delivery areas. Each can be engaged independently for a pilot with defined acceptance criteria.`,
    },
    {
      q: "How is NeuralTrix different from a large offshore agency?",
      a: "We operate as a senior-led startup studio: direct access to builders, fixed pilot scope, and measurable acceptance criteria. Engagements are sized for product teams that need production integration—not generic capability decks or long discovery cycles without delivery.",
    },
    {
      q: `How long does a typical ${pillar.label.toLowerCase()} pilot take?`,
      a: "Most scoped pilots run four to six weeks from kickoff to validated handover, depending on data access, integration complexity, and review requirements. We agree milestones and rollback criteria before build begins.",
    },
    ...serviceFaqs.slice(0, 3),
  ].slice(0, 6);
}

function buildSubserviceFaqs(pillar, subservice, service) {
  const serviceFaqs = service?.faqs ?? [];

  return [
    {
      q: `What does ${subservice.title} include?`,
      a: `${subservice.desc} Typical deliverables include ${subservice.items.slice(0, 3).join(", ").toLowerCase()}, and related artifacts defined during scoping.`,
    },
    {
      q: `Can ${subservice.title} be scoped as a standalone pilot?`,
      a: `Yes. Most partners begin with a single ${subservice.title.toLowerCase()} pilot scoped to one workflow before expanding to additional ${pillar.label.toLowerCase()} workstreams.`,
    },
    {
      q: "How long does a typical pilot take?",
      a: "Most scoped pilots run four to six weeks from kickoff to validated handover, depending on data access, integration complexity, and review requirements.",
    },
    ...serviceFaqs.slice(0, 3),
  ].slice(0, 6);
}

function itemsToCapabilities(items, contextLabel) {
  return items.map((item, index) => ({
    name: item,
    description: `Delivered as part of ${contextLabel} pilots—with defined acceptance criteria and handover artifacts.`,
    icon: CAPABILITY_ICONS[index % CAPABILITY_ICONS.length],
  }));
}

const DATA_ENGINEERING_OUTCOMES_MEDIA = {
  src: "/media/services/data-engineering/outcomes.jpg",
  alt: "Professional presenting governed data platforms with database and analytics workflow symbols",
};

function buildSharedSections({
  idPrefix,
  label,
  techNames,
  methodologyProcess,
  outcomesBullets,
  caseStudyLead,
  industriesLead,
  engagementTitle,
  blogTitle,
  nextStepTitle,
  faqs,
  faqTitle,
  caseStudyId,
}) {
  return {
    techStack: {
      id: `${idPrefix}-tech-stack`,
      testId: `${idPrefix}-tech-stack`,
      eyebrow: "Technology stack",
      title: `The stack behind |${label}|`,
      techNames,
    },
    methodology: {
      id: `${idPrefix}-methodology`,
      eyebrow: "Methodology",
      title: `Methodology for |${label}|`,
      lead: "This methodology sequences discovery, pilot build, validation, and handover—with clear ownership at each stage.",
      process: methodologyProcess,
    },
    outcomes: {
      id: `${idPrefix}-outcomes`,
      eyebrow: "Outcomes",
      title: "Outcomes for |startup and growth-stage| partners",
      body: "We optimize for measurable pilot results and maintainable handover—not slide-deck demos or open-ended experimentation.",
      bullets: outcomesBullets,
      primaryCta: {
        label: "Request consultation",
        href: "#page-contact",
        contactIntent: "consultation",
      },
      secondaryCta: {
        label: "View case studies",
        href: `#${caseStudyId}`,
      },
      mockupKey: "data",
    },
    assurance: {
      id: `${idPrefix}-assurance`,
      eyebrow: "Assurance",
      title: `Assurance for |${label} programs|`,
      lead: "This assurance model embeds guardrails, logging, and rollback from the initial delivery phase—not after launch.",
      bullets: buildAssuranceBullets(),
      mockupKey: "security",
    },
    caseStudies: {
      id: caseStudyId,
      eyebrow: "Our Work",
      title: "Client |case studies|",
      lead: caseStudyLead,
      viewAllHref: "/our-work/case-studies",
      viewAllLabel: "View all case studies",
      slugs: DEFAULT_CASE_STUDY_SLUGS,
    },
    industries: {
      id: `${idPrefix}-industries`,
      eyebrow: "Industries",
      title: "Coverage across |regulated sectors|",
      lead: industriesLead,
    },
    engagement: {
      title: engagementTitle,
    },
    blog: {
      id: `${idPrefix}-blog`,
      eyebrow: "Insights",
      title: blogTitle,
      lead: "Practical notes on delivery discipline, integration patterns, and operating intelligent features in production environments.",
      viewAllHref: "/blog",
      viewAllLabel: "View all articles",
      slugs: DEFAULT_BLOG_SLUGS,
    },
    nextStep: {
      id: `${idPrefix}-next-step`,
      eyebrow: "Next Step",
      title: nextStepTitle,
      lead: "Share your product landscape and priority workflow. We will recommend scope boundaries, workstreams, and delivery milestones.",
      primaryCta: {
        label: "Request consultation",
        href: "#page-contact",
        contactIntent: "consultation",
      },
      secondaryCta: { label: "Browse offerings", href: "#service-offerings" },
    },
    faqs,
    faqTitle,
  };
}

/** Full landing-page sections for a main service pillar. */
export function buildPillarPageSections(pillar, service = getServiceByPillarId(pillar.id)) {
  const idPrefix = pillar.id;
  const workstreamCount = pillar.subservices?.length ?? 0;
  const techNames = dedupeTechNamesByIcon(extractTechNamesFromService(service));
  const caseStudyId = `${slugify(pillar.id)}-case-studies`;
  const accent = PILLAR_HERO_ACCENT[pillar.id] ?? "product-led teams";

  return {
    hero: {
      title: `${pillar.label} for |${accent}|`,
      description: `${service?.heroDesc ?? pillar.shortDesc} Scoped for startup and growth-stage teams that need governed pilots with measurable acceptance criteria.`,
      primaryCTA: { text: "Browse offerings", href: "#service-offerings" },
      secondaryCTA: { text: "Discuss a pilot", href: "#page-contact", contactIntent: "consultation" },
    },
    stats: {
      ...buildStatsSectionMeta(idPrefix),
      items: buildPillarStatsItems(pillar, service),
    },
    intro: {
      id: `${idPrefix}-intro`,
      eyebrow: pillar.label,
      title: "Delivery scoped for |systems you operate|",
      lead: `${workstreamCount} workstreams within ${pillar.label.toLowerCase()}—each with defined deliverables, integration assumptions, and evaluation gates.`,
      body: `${service?.overview ?? pillar.shortDesc} We work as a senior-led startup studio: one workflow per pilot, direct access to engineers, and handover artifacts your team can extend.`,
      primaryCta: { label: "View offerings", href: "#service-offerings" },
      secondaryCta: { label: "View our work", href: "/our-work/case-studies" },
      media: {
        src: pillar.cardImage,
        alt: `${pillar.label} delivery overview`,
      },
    },
    offerings: {
      id: "service-offerings",
      eyebrow: "Service offerings",
      title: `${pillar.label} |workstreams|`,
      lead: "Each offering maps to defined deliverables, integration assumptions, and evaluation gates—select one for a pilot or combine for a phased rollout.",
    },
    coreCapabilities: {
      id: `${idPrefix}-capabilities`,
      eyebrow: "Capabilities",
      title: `Core |foundations| for ${pillar.label.toLowerCase()}`,
      lead: `Technical foundations we implement during ${pillar.label.toLowerCase()} engagements—scoped to your domain tasks, data boundaries, and operational constraints.`,
      items: PILLAR_CORE_CAPABILITIES[pillar.id] ?? [],
      media:
        pillar.id === "data-engineering"
          ? {
              src: "/media/services/data-engineering/executive-dashboards.jpg",
              alt: `${pillar.label} engineer reviewing governed data platforms and analytics outcomes`,
            }
          : {
              src: "/media/home/what-we-deliver.png",
              alt: `${pillar.label} engineer reviewing delivery outcomes on a laptop`,
            },
    },
    ...(() => {
      const shared = buildSharedSections({
        idPrefix,
        label: pillar.label,
        techNames,
        methodologyProcess: buildMethodologyProcess(service),
        outcomesBullets: buildOutcomeBullets(service),
        caseStudyLead: `Representative ${pillar.label.toLowerCase()} deployments across education, workforce operations, and healthcare—each scoped to measurable operational outcomes.`,
        industriesLead: `We scope ${pillar.label.toLowerCase()} programs around sector data boundaries, review cycles, and operational workflows—healthcare, education, finance, commerce, and more.`,
        engagementTitle: `Engagement principles for ${pillar.label.toLowerCase()} pilots`,
        blogTitle: `Engineering notes on |${pillar.label}|`,
        nextStepTitle: `Next Step for your |${pillar.label.toLowerCase()} scope|`,
        faqs: buildPillarFaqs(pillar, service),
        faqTitle: `Frequently asked questions about ${pillar.label}`,
        caseStudyId,
      });

      if (pillar.id !== "data-engineering") return shared;

      return {
        ...shared,
        outcomes: {
          ...shared.outcomes,
          media: DATA_ENGINEERING_OUTCOMES_MEDIA,
        },
      };
    })(),
  };
}

/** Full landing-page sections for an individual subservice. */
export function buildSubservicePageSections(
  pillar,
  subservice,
  service = getServiceByPillarId(pillar.id)
) {
  const idPrefix = subservice.id;
  const techNames = dedupeTechNamesByIcon(extractTechNamesFromService(service));
  const caseStudyId = `${slugify(subservice.id)}-case-studies`;
  const cardImage = subservice.cardImage ?? getSubserviceCardImage(subservice.id);

  const sections = {
    hero: {
      title: `${subservice.title} for |product-led teams|`,
      description: `${subservice.desc} Scoped for startup and growth-stage teams that need governed pilots with measurable acceptance criteria.`,
      primaryCTA: { text: "View delivery scope", href: "#service-offerings" },
      secondaryCTA: { text: "Discuss a pilot", href: "#page-contact", contactIntent: "consultation" },
    },
    stats: {
      ...buildStatsSectionMeta(idPrefix),
      items: buildSubserviceStatsItems(pillar, subservice, service),
    },
    intro: {
      id: `${idPrefix}-intro`,
      eyebrow: subservice.title,
      title: "Scoped delivery for |your workflow|",
      lead: subservice.desc,
      body: `This workstream sits within ${pillar.label}. We scope one workflow per pilot with direct access to senior engineers, defined acceptance criteria, and handover artifacts your team can extend in-house.`,
      primaryCta: { label: "View delivery scope", href: "#service-offerings" },
      secondaryCta: { label: `All ${pillar.label}`, href: `/services/${pillar.id}` },
      media: {
        src: cardImage,
        alt: `${subservice.title} delivery overview`,
      },
    },
    offerings: {
      id: "service-offerings",
      eyebrow: "Delivery scope",
      title: "Scope for |this workstream|",
      lead: "Defined delivery areas within this offering—each mapped to accountable scope with measurable results.",
      capabilityItems: itemsToCapabilities(subservice.items ?? [], subservice.title),
    },
    relatedOfferings: {
      id: "related-workstreams",
      eyebrow: "Related offerings",
      title: `Other |${pillar.label}| workstreams`,
      lead: `Additional workstreams within ${pillar.label.toLowerCase()} you can combine for phased rollout.`,
    },
    coreCapabilities: {
      id: `${idPrefix}-capabilities`,
      eyebrow: "Capabilities",
      title: `Foundations for |${subservice.title}|`,
      lead: `Technical and operational foundations applied during ${subservice.title.toLowerCase()} pilots.`,
      items: itemsToCapabilities(subservice.items ?? [], subservice.title),
      media: {
        src: "/media/home/what-we-deliver.png",
        alt: `${subservice.title} delivery review on a laptop`,
      },
    },
    ...buildSharedSections({
      idPrefix,
      label: subservice.title,
      techNames,
      methodologyProcess: buildMethodologyProcess(service),
      outcomesBullets: buildOutcomeBullets(service),
      caseStudyLead: `Representative deployments related to ${subservice.title.toLowerCase()}—each scoped to measurable operational outcomes.`,
      industriesLead: `We scope ${subservice.title.toLowerCase()} programs around sector data boundaries, review cycles, and operational workflows.`,
      engagementTitle: `Engagement principles for ${subservice.title.toLowerCase()} pilots`,
      blogTitle: `Engineering notes on |${subservice.title}|`,
      nextStepTitle: `Next Step for |${subservice.title}|`,
      faqs: buildSubserviceFaqs(pillar, subservice, service),
      faqTitle: `Frequently asked questions about ${subservice.title}`,
      caseStudyId,
    }),
  };

  return applySubservicePageOverride(sections, subservice.id);
}

export function getPillarPageSections(pillarId) {
  const pillar = services.find((service) => service.slug === pillarId);
  if (!pillar) return null;

  const catalogPillar = {
    id: pillarId,
    label: pillar.catalogTitle ?? pillar.title,
    shortDesc: pillar.shortDesc,
    cardImage: pillar.heroImage,
    subservices: pillar.subservices,
  };

  return buildPillarPageSections(catalogPillar, pillar);
}
