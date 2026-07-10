/**
 * Custom landing-page sections for AI Strategy & Advisory (`applied-ai-advisory`).
 * Structure aligned to advisory consulting flows; copy is original and startup-focused.
 */
import { SITE_OUTCOMES_MEDIA, SITE_ASSURANCE_MEDIA, SITE_CAPABILITIES_MEDIA } from "../brandAssets";

export const APPLIED_AI_ADVISORY_SECTIONS = {
  hero: {
    title: "AI Strategy & Advisory for |product-led teams|",
    description:
      "AI should inform decisions, reduce operational cost, and support revenue—not remain in slide decks or unfinished pilots. NeuralTrix helps startup and growth-stage teams prioritize use cases, define success metrics early, and plan governed pilots with measurable acceptance criteria.",
    primaryCTA: { text: "View advisory scope", href: "#advisory-modules" },
    secondaryCTA: { text: "Request consultation", href: "#page-contact", contactIntent: "consultation" },
  },
  stats: {
    id: "applied-ai-advisory-stats",
    testId: "applied-ai-advisory-stats",
    items: [
      { value: "4", label: "Core advisory deliverables" },
      { value: "4–6 wks", label: "Typical advisory sprint" },
      { value: "6", label: "Applied AI workstreams" },
      { value: "Senior-led", label: "Practitioner access" },
    ],
  },
  intro: {
    id: "applied-ai-advisory-intro",
    eyebrow: "AI Strategy & Advisory",
    title: "Strategy that connects AI to |operational outcomes|",
    lead: "Advisory scoped for founders and product leaders who need clarity before build—not open-ended discovery without delivery paths.",
    body:
      "We assess where AI creates measurable impact in your product and operations, map integration and data constraints, and define pilot boundaries your engineering team can execute. Strategy outputs include documented roadmaps, risk registers, and success criteria—not generic recommendations without ownership.",
    primaryCta: { label: "View advisory modules", href: "#advisory-modules" },
    secondaryCta: { label: "Applied AI Engineering", href: "/services/artificial-intelligence" },
    media: {
      src: "/media/subservices/applied-ai-advisory.jpg",
      alt: "Advisory team reviewing strategy documents and approval criteria together",
    },
  },
  serviceBlocks: {
    id: "advisory-modules",
    eyebrow: "Advisory scope",
    title: "Modules within |AI strategy and advisory|",
    lead: "Each module maps to accountable deliverables—select individually for a focused sprint or combine for a phased advisory program.",
    modules: [
      {
        title: "AI strategy and use-case prioritization",
        desc: "Identify where AI creates operational or product impact, rank opportunities by feasibility, and define success metrics before engineering begins.",
      },
      {
        title: "Natural language workload assessment",
        desc: "Evaluate text, document, and conversational workloads for retrieval, classification, or assistant features—with data and policy constraints documented.",
      },
      {
        title: "Data readiness and platform assessment",
        desc: "Review source quality, pipeline maturity, and integration surfaces required for reliable AI features in production environments.",
      },
      {
        title: "Generative AI opportunity mapping",
        desc: "Scope copilot, agent, and generative feature candidates against latency, cost, residency, and governance requirements.",
      },
      {
        title: "Machine learning feasibility review",
        desc: "Assess supervised learning, forecasting, and scoring use cases with evaluation criteria tied to your domain tasks and data volume.",
      },
      {
        title: "Responsible AI and governance planning",
        desc: "Define review workflows, audit expectations, bias sampling approaches, and compliance checkpoints sized for your sector.",
      },
      {
        title: "Process automation advisory",
        desc: "Map high-volume decision workflows—onboarding, claims, invoice handling, compliance checks—for automation with human escalation paths.",
      },
      {
        title: "Rapid pilot validation planning",
        desc: "Design a fixed-scope pilot with acceptance tests, rollback criteria, and handover artifacts so validation precedes scale-up investment.",
      },
    ],
  },
  offerings: {
    hide: true,
  },
  relatedOfferings: {
    hide: true,
  },
  techStack: {
    id: "applied-ai-advisory-tech-stack",
    testId: "applied-ai-advisory-tech-stack",
    eyebrow: "Technology stack",
    title: "Platforms referenced during |advisory and pilot planning|",
  },
  coreCapabilities: {
    id: "applied-ai-advisory-capabilities",
    eyebrow: "Capabilities",
    title: "Advisory foundations for |Applied AI programs|",
    lead: "Assessment areas we cover when defining strategy, pilots, and rollout paths for startup and growth-stage partners.",
    items: [
      {
        name: "Use-case and ROI modeling",
        description:
          "Quantify expected impact, implementation effort, and dependency risks before committing engineering capacity.",
        icon: "ml",
      },
      {
        name: "Integration and data boundary review",
        description:
          "Document API surfaces, identity models, residency requirements, and data-handling constraints for each candidate workflow.",
        icon: "data",
      },
      {
        name: "Governance and assurance planning",
        description:
          "Align review workflows, audit expectations, and human-in-the-loop controls with sector and procurement requirements.",
        icon: "governance",
      },
      {
        name: "Pilot scope definition",
        description:
          "Fixed datasets, acceptance tests, and rollback criteria agreed before build—avoiding open-ended experimentation.",
        icon: "platform",
      },
      {
        name: "Model route selection",
        description:
          "Compare commercial, open, and retrieval-augmented approaches against latency, cost, and operational ownership.",
        icon: "llm",
      },
      {
        name: "Handover to engineering delivery",
        description:
          "Transition advisory outputs into Applied AI Engineering workstreams with documented scope and success measures.",
        icon: "devops",
      },
    ],
    media: SITE_CAPABILITIES_MEDIA,
  },
  methodology: {
    id: "applied-ai-advisory-methodology",
    eyebrow: "Methodology",
    title: "Methodology for |AI strategy and advisory|",
    lead: "This methodology sequences alignment, assessment, validation planning, and handover—with clear ownership at each stage.",
    process: [
      {
        step: "Discovery and business alignment",
        desc: "Map priority workflows, KPIs, stakeholders, and constraints before recommending any AI route.",
      },
      {
        step: "Data and feasibility assessment",
        desc: "Evaluate source quality, integration paths, and technical feasibility for shortlisted use cases.",
      },
      {
        step: "Solution design and validation plan",
        desc: "Define model routes, retrieval strategy, and acceptance criteria for the recommended pilot slice.",
      },
      {
        step: "Pilot scope and success criteria",
        desc: "Document fixed boundaries, metrics, owners, and review gates for the first delivery increment.",
      },
      {
        step: "Governance and rollout planning",
        desc: "Align policy controls, audit expectations, and phased rollout criteria with your operating model.",
      },
      {
        step: "Handover and engineering transition",
        desc: "Transfer roadmap artifacts, risk registers, and scoped requirements to delivery teams or NeuralTrix engineering workstreams.",
      },
    ],
  },
  outcomes: {
    id: "applied-ai-advisory-outcomes",
    eyebrow: "Outcomes",
    title: "Why partners choose |NeuralTrix advisory|",
    body: "We optimize for decisions your team can execute—not strategy documents that stall in review.",
    bullets: [
      "Senior practitioners on every advisory sprint with direct access—no layered account teams",
      "Pilots scoped to one workflow with agreed metrics before engineering scale-up",
      "Roadmaps tied to integration reality in products your teams already operate",
      "Artifacts structured for security, procurement, and engineering handover",
    ],
    primaryCta: {
      label: "Request consultation",
      href: "#page-contact",
      contactIntent: "consultation",
    },
    secondaryCta: { label: "View case studies", href: "#applied-ai-advisory-case-studies" },
    media: SITE_OUTCOMES_MEDIA,
  },
  trustMetrics: {
    id: "applied-ai-advisory-trust",
    eyebrow: "Track record",
    title: "Delivery indicators for |startup partners|",
    lead: "Representative measures from NeuralTrix advisory and engineering programs—not inflated agency claims.",
    items: [
      { value: "6+", label: "Years AI delivery experience" },
      { value: "7+", label: "Products with AI features" },
      { value: "12+", label: "Models fine-tuned" },
      { value: "4–6 wks", label: "Typical advisory sprint" },
    ],
    columns: 4,
  },
  assurance: {
    id: "applied-ai-advisory-assurance",
    eyebrow: "Assurance",
    title: "Assurance for |advisory engagements|",
    lead: "This assurance model embeds governance, documentation, and rollback planning from the initial advisory phase.",
    bullets: [
      "Scoped credentials and data access boundaries for assessment activities",
      "Risk registers and decision logs maintained throughout the advisory sprint",
      "Pilot recommendations include rollback and escalation criteria",
      "Documentation formatted for security and procurement review",
    ],
    media: SITE_ASSURANCE_MEDIA,
  },
  caseStudies: {
    id: "applied-ai-advisory-case-studies",
    eyebrow: "Our Work",
    title: "Client |case studies|",
    lead: "Representative Applied AI programs across education, workforce operations, and healthcare—each preceded by scoped advisory and measurable pilot outcomes.",
    viewAllHref: "/our-work/case-studies",
    viewAllLabel: "View all case studies",
    slugs: [
      "leadcliques-education-enrollment",
      "schooltrix-multi-campus-school",
      "medclues-regional-hospital",
    ],
  },
  industries: {
    id: "applied-ai-advisory-industries",
    eyebrow: "Industries",
    title: "Coverage across |regulated sectors|",
    lead: "We scope AI advisory around sector data boundaries, review cycles, and operational workflows—healthcare, education, finance, commerce, and more.",
  },
  engagement: {
    hide: true,
  },
  blog: {
    hide: true,
  },
  nextStep: {
    id: "applied-ai-advisory-next-step",
    eyebrow: "Next Step",
    title: "Next Step for your |AI strategy scope|",
    lead: "Share your product landscape and priority workflow. We will recommend advisory modules, pilot boundaries, and delivery milestones.",
    primaryCta: {
      label: "Request consultation",
      href: "#page-contact",
      contactIntent: "consultation",
    },
    secondaryCta: { label: "View advisory modules", href: "#advisory-modules" },
    media: {
      src: "/media/subservices/applied-ai-advisory-next-step.jpg",
      alt: "Guided path toward an idea, representing the next step in an AI strategy engagement",
    },
  },
  faqTitle: "Questions about AI strategy and advisory",
  faqs: [
    {
      q: "What are AI strategy and advisory services, and when does my team need them?",
      a: "Advisory helps you prioritize AI use cases, assess data and integration readiness, and define pilot scope before engineering investment. Teams typically engage when internal capacity is limited, multiple AI options are under consideration, or governance requirements need to be defined early.",
    },
    {
      q: "How is NeuralTrix different from other AI consulting firms?",
      a: "We operate as a senior-led startup studio with direct access to practitioners who also deliver engineering workstreams. Advisory outputs connect to Applied AI Engineering delivery—not standalone decks without implementation paths.",
    },
    {
      q: "How quickly can we see results from advisory?",
      a: "Most advisory sprints run four to six weeks and produce a prioritized roadmap, pilot scope, and success criteria. Engineering pilots can begin immediately after handover when data access and stakeholders are available.",
    },
    {
      q: "Is advisory suitable for mid-sized product teams, not only enterprises?",
      a: "Yes. We scope advisory for startup and growth-stage teams that need governed pilots with fixed boundaries—without enterprise-scale discovery cycles that delay delivery.",
    },
    {
      q: "Do you provide support after the advisory sprint?",
      a: "Yes. We can transition into Applied AI Engineering delivery, support pilot implementation, or hand over artifacts for your in-house team with documented scope and acceptance criteria.",
    },
    {
      q: "Which industries do you advise most often?",
      a: "Education, healthcare, workforce operations, commerce, and finance—sectors where data boundaries, review workflows, and operational integration constraints shape AI rollout decisions.",
    },
    {
      q: "How is data handled during advisory assessments?",
      a: "We work within your access policies, use scoped credentials where possible, and document data boundaries in advisory outputs. Sensitive environments can be assessed through metadata reviews and sample exports rather than full production access when required.",
    },
    {
      q: "Can advisory align with our existing systems and delivery teams?",
      a: "Yes. Integration surfaces, identity models, and deployment constraints are documented as part of feasibility assessment so engineering teams can execute against realistic assumptions.",
    },
    {
      q: "What is the first step to start an advisory engagement?",
      a: "Share your product context, priority workflow, and timeline through the contact form. We will recommend advisory modules, sprint boundaries, and success criteria for an initial scope discussion.",
    },
  ],
};
