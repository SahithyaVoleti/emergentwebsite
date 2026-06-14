import { CASE_STUDY_HERO_IMAGES as caseStudyHeroes } from "../lib/heroImageThemes";

/**
 * Production test cases — systems NeuralTrix developed, tested in live environments,
 * and validated as production-ready across industry sectors.
 */
const caseStudies = [
  {
    slug: "smart-teaching-platform",
    archetype: "LMS and educator tools",
    title: "Agent Vidya — educator copilot in production",
    industry: "Education",
    status: "Production-ready",
    heroTitle: "Teacher copilot tested inside live LMS workflows",
    heroDesc:
      "We built and tested an AI copilot inside educator tools—lesson planning, rubric-aligned quizzes, and parent communication—with human review gates and FERPA-aligned data handling.",
    heroImage: caseStudyHeroes[0],
    challenge:
      "District and EdTech teams needed to cut documentation time without bypassing curriculum standards or student privacy rules. The test case had to run against real LMS integrations and district approval paths.",
    solution:
      "NeuralTrix shipped Agent Vidya inside the teaching platform: structured prompts, teacher approval queues, role-based access, and audit logs. We ran live classroom pilots, measured time saved on planning tasks, and hardened exports for LMS compatibility.",
    results: [
      { metric: "Live", label: "Tested in production", desc: "Piloted with educators on real lesson and assessment workflows." },
      { metric: "Privacy", label: "Policy controls", desc: "FERPA-aligned retention, role gates, and district IT review artifacts." },
      { metric: "Quality", label: "Human review", desc: "Teacher sign-off before student-facing content ships." },
      { metric: "Ship", label: "Production-ready", desc: "Deployed with monitoring, rollback, and feature flags." },
    ],
    techStack: ["React", "Next.js", "Python", "PostgreSQL", "Azure", "GPT-4o", "LangChain"],
    testimonial: null,
    features: [
      "Copilot panels inside educator planning screens",
      "Rubric-aligned quiz and feedback drafts",
      "Role-aware workflows for staff versus students",
      "Logging and exports for district IT review",
      "LMS-compatible handoff formats",
    ],
    faqs: [
      { q: "Was this tested with real users?", a: "Yes. We validated the copilot on live educator workflows with agreed success measures before marking the build production-ready." },
      { q: "Can it connect to our LMS?", a: "Integration patterns were tested against common LMS APIs. Your environment defines final connectors and data boundaries." },
    ],
  },
  {
    slug: "medimind-clinical-assist",
    archetype: "EHR and clinical documentation",
    title: "Agent Arogya — clinical documentation agent",
    industry: "Healthcare",
    status: "Production-ready",
    heroTitle: "Clinical documentation agent tested in EHR-style workflows",
    heroDesc:
      "A production test case for drafting structured clinical notes, routing triage support, and surfacing patient context inside EHR workflows—with clinician review on every output.",
    heroImage: caseStudyHeroes[1],
    challenge:
      "Clinical teams needed faster documentation without compromising HIPAA controls or clinician accountability. The agent had to run against real chart structures and approval habits.",
    solution:
      "NeuralTrix built Agent Arogya as an EHR-embedded agent: FHIR-aware context retrieval, structured note drafts, triage suggestions with human override, and full audit trails. We tested in a live clinical sandbox with clinicians reviewing every generated note.",
    results: [
      { metric: "Live", label: "Clinical sandbox", desc: "Tested on real chart layouts and documentation paths." },
      { metric: "Safety", label: "Clinician review", desc: "No autonomous clinical decisions—review queues on all outputs." },
      { metric: "Compliance", label: "HIPAA-aligned", desc: "Scoped access, encryption, and retention controls built in." },
      { metric: "Ship", label: "Production-ready", desc: "Handover runbooks and monitoring for hospital IT teams." },
    ],
    techStack: ["React", "Python", "FHIR", "PostgreSQL", "Azure", "Claude 3.5", "Vector DB"],
    testimonial: null,
    features: [
      "Structured note drafting inside EHR screens",
      "Triage support with clinician override",
      "Permission-scoped patient context retrieval",
      "Audit logs for compliance review",
      "Rollback for prompts and tool permissions",
    ],
    faqs: [
      { q: "Is this cleared for clinical use?", a: "The test case was validated in a controlled environment. Your organization defines clinical governance and go-live approval." },
      { q: "Which EHR systems were tested?", a: "We validated FHIR-based integration patterns. Final connectors follow your EHR vendor and security requirements." },
    ],
  },
  {
    slug: "fraud-guard-transactions",
    archetype: "AML and transaction monitoring",
    title: "Agent Kavacha — real-time transaction agent",
    industry: "Finance",
    status: "Production-ready",
    heroTitle: "Transaction monitoring agent tested on live payment streams",
    heroDesc:
      "We developed and tested an AML-style agent that scores transactions in near real time, routes exceptions to analyst queues, and logs every decision for audit review.",
    heroImage: caseStudyHeroes[2],
    challenge:
      "Fintech and banking teams needed sub-second scoring with explainable alerts—not black-box flags. The test case had to handle production-like transaction volume and investigator workflows.",
    solution:
      "NeuralTrix built Agent Kavacha with streaming ingestion, governed thresholds, explainability panels for analysts, and feedback loops for model tuning. We stress-tested on live payment sandboxes and validated alert precision with operations teams.",
    results: [
      { metric: "Live", label: "Streaming test", desc: "Validated on production-like transaction throughput." },
      { metric: "Speed", label: "Sub-second scoring", desc: "Near real-time alerts with bounded latency." },
      { metric: "Gov", label: "Analyst queues", desc: "Human review on flagged transactions before action." },
      { metric: "Ship", label: "Production-ready", desc: "Audit trails and rollback for rules and models." },
    ],
    techStack: ["Python", "Kafka", "PostgreSQL", "AWS", "Snowflake", "XGBoost", "GPT-4o"],
    testimonial: null,
    features: [
      "Real-time transaction scoring pipelines",
      "Explainable alert panels for analysts",
      "Threshold governance and approval paths",
      "Investigator feedback loops for tuning",
      "Regulatory-ready audit exports",
    ],
    faqs: [
      { q: "Was this run on real transaction data?", a: "We tested on live sandboxes and anonymized production-like streams with your security boundaries." },
      { q: "Can it integrate with our core banking stack?", a: "Yes. API and event hooks were validated during the test case—final wiring follows your vendor contracts." },
    ],
  },
  {
    slug: "stock-sense-commerce",
    archetype: "ERP and warehouse operations",
    title: "Agent Vyapar — inventory agent in ERP",
    industry: "Commerce",
    status: "Production-ready",
    heroTitle: "Replenishment agent tested inside ERP and WMS workflows",
    heroDesc:
      "A production test case that reads stock across POS, warehouse, and channel systems—and recommends replenishment inside ERP screens with manager approval before purchase orders.",
    heroImage: caseStudyHeroes[3],
    challenge:
      "Retail ops teams lost hours reconciling stock across channels. The agent had to surface exceptions inside ERP workflows teams already use—not a separate dashboard.",
    solution:
      "NeuralTrix built Agent Vyapar embedded in ERP and WMS UIs: live stock reads, replenishment recommendations within margin rules, and manager approval gates. We ran a multi-store pilot and validated stockout reduction on agreed SKUs.",
    results: [
      { metric: "Live", label: "Store pilot", desc: "Tested across POS, warehouse, and channel feeds." },
      { metric: "Accuracy", label: "Stock signals", desc: "Exception detection before stockouts on pilot SKUs." },
      { metric: "Control", label: "Manager approval", desc: "No auto-PO without sign-off inside ERP." },
      { metric: "Ship", label: "Production-ready", desc: "Monitoring and rollback for agent permissions." },
    ],
    techStack: ["Python", "PostgreSQL", "REST APIs", "SAP connectors", "GPT-4o", "Redis"],
    testimonial: null,
    features: [
      "Embedded agent panels in ERP screens",
      "Cross-channel stock reconciliation",
      "Replenishment recommendations with margin rules",
      "Manager approval before purchase orders",
      "Audit logs for inventory decisions",
    ],
    faqs: [
      { q: "Which ERP systems were tested?", a: "We validated patterns on common retail ERPs and custom WMS APIs. Your stack defines final connectors." },
      { q: "Does it auto-order stock?", a: "No. The agent proposes actions; your rules define what requires manager approval." },
    ],
  },
  {
    slug: "ai-video-creation",
    archetype: "Sports media and content ops",
    title: "Agent Chitra — AI video production pipeline",
    industry: "Sports & Media",
    status: "Production-ready",
    heroTitle: "Avatar and video pipeline tested at production scale",
    heroDesc:
      "We built and tested a multilingual video production system—script workflows, avatar rendering, and cloud pipelines with cost controls—for sports and media content teams.",
    heroImage: caseStudyHeroes[4],
    challenge:
      "Media teams needed faster highlight and persona-led content without blowing render budgets. The test case had to run batch and interactive jobs with brand and disclosure controls.",
    solution:
      "NeuralTrix delivered Agent Chitra with retrieval-assisted scripting, avatar and speech integrations, Azure render queues, and quota dashboards. We load-tested concurrent renders and validated publish workflows with content ops teams.",
    results: [
      { metric: "Live", label: "Render pilot", desc: "Tested batch and on-demand jobs at agreed concurrency." },
      { metric: "Cost", label: "Unit economics", desc: "Per-minute models tracked in production dashboards." },
      { metric: "Brand", label: "Review gates", desc: "Human approval before published output." },
      { metric: "Ship", label: "Production-ready", desc: "Queue monitoring, failure alerts, and rollback paths." },
    ],
    techStack: ["Next.js", "Python", "PostgreSQL", "Azure", "GPT-4o", "Media pipelines"],
    testimonial: null,
    features: [
      "Script and brief ingestion with retrieval",
      "Avatar and voice workflow management",
      "Cloud rendering with concurrency controls",
      "Brand review and disclosure checkpoints",
      "Cost and latency dashboards",
    ],
    faqs: [
      { q: "Was rendering tested at scale?", a: "Yes. We validated queue behavior and cost caps under production-like concurrent workloads." },
      { q: "Can it plug into our CMS?", a: "API hooks were tested for campaign and CMS handoff. Final integration follows your content stack." },
    ],
  },
  {
    slug: "maint-predict-operations",
    archetype: "CMMS and plant operations",
    title: "Agent Yantra — predictive maintenance agent",
    industry: "Manufacturing",
    status: "Production-ready",
    heroTitle: "Maintenance agent tested on live equipment telemetry",
    heroDesc:
      "A production test case that ingests sensor and historian data, predicts failure windows, and routes work orders inside CMMS—with maintenance lead approval before scheduling.",
    heroImage: caseStudyHeroes[5],
    challenge:
      "Plant teams needed earlier failure signals without flooding technicians with false alarms. The agent had to integrate with existing CMMS and historian systems.",
    solution:
      "NeuralTrix built Agent Yantra with time-series models, alert routing to CMMS work orders, and technician feedback loops. We tested on live equipment telemetry in a plant sandbox and validated precision on agreed asset classes.",
    results: [
      { metric: "Live", label: "Plant telemetry", desc: "Tested on real sensor streams and historian feeds." },
      { metric: "Precision", label: "Alert quality", desc: "Tuned thresholds with maintenance team feedback." },
      { metric: "Ops", label: "CMMS routing", desc: "Work orders created with supervisor approval." },
      { metric: "Ship", label: "Production-ready", desc: "Runbooks for model refresh and incident response." },
    ],
    techStack: ["Python", "PyTorch", "Azure IoT", "PostgreSQL", "Kafka", "CMMS APIs"],
    testimonial: null,
    features: [
      "Sensor and historian ingestion pipelines",
      "Failure window predictions with confidence scores",
      "CMMS work order routing with approval",
      "Technician feedback for model tuning",
      "Maintenance dashboards and alert history",
    ],
    faqs: [
      { q: "Was this tested on real equipment?", a: "Yes, in a plant sandbox with live telemetry and maintenance team review cycles." },
      { q: "Does it auto-schedule repairs?", a: "It proposes work orders; supervisors approve inside CMMS before scheduling." },
    ],
  },
  {
    slug: "lead-score-proptech",
    archetype: "CRM and listing portals",
    title: "Agent Bhumi — PropTech CRM agent",
    industry: "Real Estate",
    status: "Production-ready",
    heroTitle: "Lead prioritization agent tested in live CRM workflows",
    heroDesc:
      "We built and tested an agent that scores inbound leads, drafts follow-up actions, and surfaces comparable listings inside CRM tools broker teams use daily.",
    heroImage: caseStudyHeroes[6],
    challenge:
      "Brokerage teams missed high-intent leads in noisy CRM queues. The agent had to rank leads and suggest actions without sending messages autonomously.",
    solution:
      "NeuralTrix shipped Agent Bhumi inside CRM screens: intent scoring from inquiry history, follow-up draft suggestions, and listing match panels. We tested with live lead feeds and measured response-time improvement on pilot offices.",
    results: [
      { metric: "Live", label: "CRM pilot", desc: "Tested on real inbound lead streams." },
      { metric: "Speed", label: "Response time", desc: "Faster first contact on high-intent leads." },
      { metric: "Control", label: "Broker approval", desc: "No outbound messages without agent sign-off." },
      { metric: "Ship", label: "Production-ready", desc: "Audit logs and permission scoping per office." },
    ],
    techStack: ["React", "Node.js", "PostgreSQL", "CRM APIs", "GPT-4o", "Vector DB"],
    testimonial: null,
    features: [
      "Lead scoring inside CRM queues",
      "Follow-up draft suggestions with approval",
      "Comparable listing match panels",
      "Office-level permission scoping",
      "Activity logs for brokerage compliance",
    ],
    faqs: [
      { q: "Which CRM platforms were tested?", a: "We validated integration patterns on common PropTech CRMs. Your CRM defines final API wiring." },
      { q: "Does it contact leads automatically?", a: "No. Brokers review and approve every outbound action." },
    ],
  },
  {
    slug: "yield-plan-agriculture",
    archetype: "Farm management dashboards",
    title: "Agent Krishi — crop forecasting agent",
    industry: "Agriculture",
    status: "Production-ready",
    heroTitle: "Yield forecasting agent tested on live farm data",
    heroDesc:
      "A production test case that combines weather, soil, and harvest history to forecast yield inside farm management dashboards—with agronomist review before input recommendations.",
    heroImage: caseStudyHeroes[7],
    challenge:
      "Farm operators needed seasonal forecasts they could trust for input and irrigation decisions. The agent had to run on live field data and regional weather feeds.",
    solution:
      "NeuralTrix built Agent Krishi with multi-source data ingestion, scenario panels for planting and input decisions, and agronomist approval gates. We tested across pilot fields and validated forecast accuracy against harvest records.",
    results: [
      { metric: "Live", label: "Field pilot", desc: "Tested on live weather, soil, and harvest feeds." },
      { metric: "Accuracy", label: "Forecast validation", desc: "Compared predictions to actual harvest outcomes." },
      { metric: "Review", label: "Agronomist gates", desc: "Recommendations require sign-off before action." },
      { metric: "Ship", label: "Production-ready", desc: "Seasonal model refresh and monitoring runbooks." },
    ],
    techStack: ["Python", "PostgreSQL", "Weather APIs", "GIS", "Snowflake", "GPT-4o"],
    testimonial: null,
    features: [
      "Weather and soil data ingestion",
      "Yield forecast panels in farm dashboards",
      "Irrigation and input scenario review",
      "Agronomist approval on recommendations",
      "Harvest comparison and model tuning",
    ],
    faqs: [
      { q: "Was this tested on real farms?", a: "Yes. Pilot fields supplied live data; forecasts were validated against recorded harvests." },
      { q: "Does it control irrigation hardware?", a: "It recommends actions; operators approve before any automated irrigation changes." },
    ],
  },
  {
    slug: "protocol-lab-biotech",
    archetype: "Electronic lab notebooks",
    title: "Agent Shodh — lab research agent",
    industry: "Biotechnology",
    status: "Production-ready",
    heroTitle: "Experiment search agent tested in live ELN workflows",
    heroDesc:
      "We built and tested an agent that searches protocols, routes deviation reports, and packages regulatory submission drafts inside electronic lab notebook environments.",
    heroImage: caseStudyHeroes[8],
    challenge:
      "Research teams lost time searching protocols and compiling deviation summaries. The agent had to respect GxP access rules and scientist review on every output.",
    solution:
      "NeuralTrix delivered Agent Shodh inside ELN tools: semantic protocol search, deviation routing with QA review, and regulatory draft assembly. We tested in a live lab sandbox with scientists validating retrieval accuracy and audit trails.",
    results: [
      { metric: "Live", label: "Lab sandbox", desc: "Tested on real protocol libraries and deviation logs." },
      { metric: "Search", label: "Retrieval accuracy", desc: "Validated by scientists on agreed query sets." },
      { metric: "GxP", label: "Access control", desc: "Role-scoped search and immutable audit logs." },
      { metric: "Ship", label: "Production-ready", desc: "Regulatory export formats and version control." },
    ],
    techStack: ["Python", "PostgreSQL", "Vector DB", "ELN APIs", "Claude 3.5", "LangChain"],
    testimonial: null,
    features: [
      "Semantic search across protocol libraries",
      "Deviation report routing with QA review",
      "Regulatory submission draft assembly",
      "GxP-aligned access and audit trails",
      "Versioned exports for compliance review",
    ],
    faqs: [
      { q: "Was this validated by lab scientists?", a: "Yes. Retrieval and deviation workflows were reviewed by research and QA staff in the test environment." },
      { q: "Does it replace regulatory sign-off?", a: "No. It drafts packages; qualified staff approve before submission." },
    ],
  },
  {
    slug: "citizen-serve-government",
    archetype: "Public service portals",
    title: "Agent JanSeva — public inquiry agent",
    industry: "Government",
    status: "Production-ready",
    heroTitle: "Citizen inquiry agent tested on live public portals",
    heroDesc:
      "A production test case that routes citizen inquiries, drafts case summaries, and surfaces policy answers inside government portals—with caseworker review on every response.",
    heroImage: caseStudyHeroes[9],
    challenge:
      "Agency portals faced high inquiry volume and inconsistent routing. The agent had to integrate with case management systems and meet public-sector security requirements.",
    solution:
      "NeuralTrix built Agent JanSeva with inquiry classification, policy retrieval with citations, case summary drafts, and caseworker approval queues. We tested on live portal traffic in a controlled agency sandbox and validated routing accuracy with operations staff.",
    results: [
      { metric: "Live", label: "Portal sandbox", desc: "Tested on real inquiry patterns and case queues." },
      { metric: "Routing", label: "Classification", desc: "Validated routing accuracy with agency staff." },
      { metric: "Trust", label: "Caseworker review", desc: "No citizen-facing replies without approval." },
      { metric: "Ship", label: "Production-ready", desc: "Security review artifacts and monitoring." },
    ],
    techStack: ["React", "Python", "PostgreSQL", "Case management APIs", "GPT-4o", "Vector DB"],
    testimonial: null,
    features: [
      "Inquiry classification and queue routing",
      "Policy answers with source citations",
      "Case summary drafts for caseworkers",
      "Approval queues before citizen responses",
      "Audit logs for public-sector review",
    ],
    faqs: [
      { q: "Was this tested with real inquiry patterns?", a: "Yes, in an agency sandbox using production-like inquiry volumes and routing rules." },
      { q: "Does it reply to citizens automatically?", a: "No. Caseworkers review and approve every outbound response." },
    ],
  },
];

export default caseStudies;
