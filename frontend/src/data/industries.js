import { ShoppingCart, Heart, DollarSign, GraduationCap, Factory, Gamepad2, Building2, Sprout, Dna, Landmark } from "lucide-react";
import { INDUSTRY_HERO_IMAGES as industryImages } from "../lib/heroImageThemes";

/**
 * Industry programs — AI product transformation inside sector applications
 * and modernization of existing business software.
 */
const industries = [
  {
    slug: "retail",
    icon: ShoppingCart,
    title: "Commerce",
    shortDesc: "AI product modules inside POS and ERP applications—for inventory, pricing, and customer operations.",
    heroTitle: "Enterprise AI programs for retail and commerce applications",
    heroDesc: "We transform POS, ERP, and WMS admin tools with embedded intelligence—automating inventory checks, pricing decisions, and support workflows your store teams already use.",
    heroImage: industryImages[0],
    overview:
      "Retail teams run on a mix of POS, ERP, marketplace admin panels, and CRM tools. We embed AI capabilities in those applications so staff get answers and actions without switching systems—or we modernize legacy commerce products with built-in copilots and automation.",
    highlights: [
      "Product transformation programs: Vyapar replenishment inside ERP and warehouse applications",
      "Mulya margin-aware pricing in merchandising and channel admin tools",
      "Suchi catalog discovery and tagging in product management applications",
    ],
    industryProductModules: [
      {
        title: "Inventory replenishment · Vyapar",
        desc: "Reads stock levels across POS, warehouse, and channel systems and recommends replenishment inside your ERP workflow. Surfaces exceptions before stockouts affect fulfillment.",
        deploysIn: "ERP, WMS, and POS systems",
      },
      {
        title: "Margin-aware pricing · Mulya",
        desc: "Suggests price changes within margin rules inside merchandising portals, with human approval before anything goes live. Aligns recommendations to channel and promotion calendars.",
        deploysIn: "merchandising portals and channel admin tools",
      },
      {
        title: "Catalog discovery · Suchi",
        desc: "Helps merchandisers find and tag catalog items by image or description inside product management applications. Reduces manual search time across large SKU catalogs.",
        deploysIn: "PIM and OMS admin tools",
      },
      {
        title: "Demand forecasting · Maang",
        desc: "Forecasts demand from sales history and promotions, surfaced inside planning software your ops team opens daily. Supports scenario review before purchase orders are raised.",
        deploysIn: "demand planning and analytics applications",
      },
      {
        title: "Customer feedback intelligence · Shruti",
        desc: "Summarizes reviews, tickets, and social feedback inside CRM or support apps so service teams see trends without manual reports. Routes urgent issues to the right queue.",
        deploysIn: "CRM, helpdesk, and customer support platforms",
      },
      {
        title: "Application modernization · Nava",
        desc: "Transforms legacy POS, OMS, and internal portals into AI-enabled applications with embedded chat, workflow automation, and API hooks for new modules. Delivers modernization without a full platform replacement.",
        deploysIn: "legacy POS, OMS, and internal commerce portals",
      },
    ],
    process: [
      { step: "Map your retail apps", desc: "List POS, ERP, WMS, and CRM systems—and the workflows where AI modules would save the most time." },
      { step: "Design product modules", desc: "Define what each module can access, which actions need approval, and how it appears inside your existing UI." },
      { step: "Connect to your data", desc: "Wire modules to product, inventory, and customer data with the permissions your security team approves." },
      { step: "Pilot in one channel", desc: "Launch for one store, region, or brand—measure stock accuracy, response time, or margin impact." },
      { step: "Expand across apps", desc: "Roll out to more locations and connect additional applications as results hold up." },
      { step: "Operate and tune", desc: "Monitor usage, retrain on seasonal patterns, and document changes for audit review." },
    ],
    faqs: [
      { q: "Which retail applications do you integrate with?", a: "Common integrations include Shopify, Square, Lightspeed, SAP, Oracle Retail, custom ERPs, and warehouse systems via API. We scope exact connections during discovery." },
      { q: "Can AI modules work inside our existing ERP?", a: "Yes. We implement intelligence in ERP screens, add side-panel copilots, or connect through APIs—without replacing the system you already run." },
      { q: "Do you only build new modules or also upgrade old apps?", a: "Both. We add AI features for specific workflows and modernize legacy commerce applications with intelligence built in." },
      { q: "How do you handle pricing and inventory approvals?", a: "Modules propose actions; your rules define what auto-executes versus what requires a manager click inside the application." },
    ],
  },
  {
    slug: "healthcare",
    icon: Heart,
    title: "Health",
    shortDesc: "Clinical and operations AI inside EHR, scheduling, and patient applications—with clinician review built in.",
    heroTitle: "Enterprise AI programs for healthcare applications",
    heroDesc: "We transform EHR systems, scheduling software, and patient portals—reducing documentation load and supporting clinical workflows with HIPAA-aligned controls and human review.",
    heroImage: industryImages[1],
    overview:
      "Healthcare runs on EHR platforms, scheduling tools, billing systems, and patient-facing apps. We deliver AI-enabled capabilities inside those applications—drafting notes, routing triage, and answering staff questions—while clinicians stay in control of every clinical decision.",
    highlights: [
      "Product transformation programs: Arogya structured note drafting inside EHR workflows",
      "Pravesh severity-based triage in scheduling and intake applications",
      "Chikitsa differential suggestions inside clinician review workflows",
    ],
    industryProductModules: [
      {
        title: "Clinical documentation · Arogya",
        desc: "Drafts structured notes from encounters inside your EHR; clinicians review and sign before anything enters the record. Reduces documentation time while preserving clinical accountability.",
        deploysIn: "Epic, Cerner, and other EHR platforms",
      },
      {
        title: "Patient intake triage · Pravesh",
        desc: "Prioritizes patient requests by severity inside scheduling or intake software, with escalation to clinical staff. Routes non-urgent inquiries to self-service channels where appropriate.",
        deploysIn: "scheduling, intake, and patient portal applications",
      },
      {
        title: "Clinical decision support · Chikitsa",
        desc: "Presents differential suggestions inside clinician workflows for review—not autonomous diagnosis. Surfaces relevant literature and prior encounters to support clinical judgment.",
        deploysIn: "EHR modules and clinical decision support tools",
      },
      {
        title: "Imaging review assist · Drishti",
        desc: "Highlights regions of interest in radiology and pathology viewers; radiologists confirm findings. Accelerates review without replacing specialist interpretation.",
        deploysIn: "PACS viewers and digital pathology platforms",
      },
      {
        title: "Scheduling optimization · Samay",
        desc: "Recommends slot changes, resource allocation, and waitlist moves inside hospital scheduling software. Balances utilization against patient access targets.",
        deploysIn: "hospital scheduling and resource management applications",
      },
      {
        title: "Application modernization · Nava",
        desc: "Transforms legacy patient portals, admin tools, and specialty applications into AI-enabled systems with intelligent search, automation, and embedded copilot panels. Modernizes without disrupting validated clinical workflows.",
        deploysIn: "legacy patient portals, admin tools, and specialty applications",
      },
    ],
    process: [
      { step: "Map clinical applications", desc: "Work with clinical and IT teams to list EHR modules, portals, and ops tools where AI can help." },
      { step: "Design with HIPAA in mind", desc: "Set data boundaries, access roles, and audit logging before any module connects to PHI." },
      { step: "Build and validate", desc: "Create capabilities with clinical experts; test on agreed cases before any production use." },
      { step: "Integrate with EHR", desc: "Connect via FHIR, HL7, or vendor APIs so features appear where clinicians already work." },
      { step: "Pilot on one unit", desc: "Run in a single department with oversight, feedback, and measured time savings." },
      { step: "Scale with monitoring", desc: "Expand to more units with drift checks, safety reviews, and documented change control." },
    ],
    faqs: [
      { q: "Do AI features replace doctors or nurses?", a: "No. They reduce admin work and surface suggestions. Licensed clinicians review and approve all clinical actions." },
      { q: "Can modules run inside our EHR?", a: "Yes. We integrate with Epic, Cerner, Allscripts, Meditech, and others through standards-based APIs and vendor-approved patterns." },
      { q: "Is patient data used to train public models?", a: "Not without explicit agreement. Programs typically run in your environment with data handling defined in your BAA and policies." },
      { q: "Can you modernize an old patient portal?", a: "Yes. We add copilots, smart search, and automated routing to existing portals without a full platform replacement." },
    ],
  },
  {
    slug: "fintech",
    icon: DollarSign,
    title: "Finance",
    shortDesc: "Fraud, KYC, and operations AI inside banking, trading, and loan applications.",
    heroTitle: "Enterprise AI programs for financial services applications",
    heroDesc: "We transform core banking tools, loan origination systems, CRM, and compliance platforms—detecting fraud, speeding KYC, and processing documents with full audit trails.",
    heroImage: industryImages[2],
    overview:
      "Banks and fintechs run on core systems, loan apps, trading platforms, and compliance tools. We implement intelligent automation inside those applications so analysts get faster alerts, cleaner case files, and cited answers—without bypassing the controls regulators expect.",
    highlights: [
      "Product transformation programs: Kavacha transaction monitoring inside AML applications",
      "Parichaya document collection and validation in onboarding portals",
      "Bima applicant summarization in loan origination systems",
    ],
    industryProductModules: [
      {
        title: "Transaction monitoring · Kavacha",
        desc: "Flags suspicious transactions inside your existing monitoring UI with reasons analysts can verify. Reduces false positives through context-aware scoring tied to your rule sets.",
        deploysIn: "transaction monitoring and AML case management applications",
      },
      {
        title: "KYC onboarding · Parichaya",
        desc: "Guides document collection, validates IDs, and fills case files inside onboarding applications—with human review on edge cases. Accelerates time-to-approval for standard profiles.",
        deploysIn: "customer onboarding portals and KYC case systems",
      },
      {
        title: "Loan origination assist · Bima",
        desc: "Summarizes applicant data and suggests risk scores inside loan origination systems; underwriters decide. Surfaces missing documents and policy exceptions before submission.",
        deploysIn: "loan origination and underwriting applications",
      },
      {
        title: "Regulatory reporting · Niyam",
        desc: "Pulls data from multiple systems and drafts regulatory reports inside compliance workflows for analyst sign-off. Maintains citation trails for audit and examiner review.",
        deploysIn: "compliance reporting and GRC platforms",
      },
      {
        title: "Digital banking assist · Artha",
        desc: "Answers account questions inside mobile and web banking—with strict limits on what data the module can access. Escalates sensitive requests to human staff with full context.",
        deploysIn: "mobile banking, web banking, and contact center applications",
      },
      {
        title: "Application modernization · Nava",
        desc: "Transforms legacy core banking UIs and internal ops tools into AI-enabled applications with intelligent search, workflow automation, and copilot sidebars. Extends system life without a core replacement program.",
        deploysIn: "legacy core banking UIs and internal ops tools",
      },
    ],
    process: [
      { step: "Map financial applications", desc: "Document core banking, lending, trading, and compliance systems—and regulatory constraints for each." },
      { step: "Design controlled modules", desc: "Define permissions, explainability outputs, and escalation paths for every automated action." },
      { step: "Integrate with core systems", desc: "Connect via APIs and event streams with latency targets your ops team approves." },
      { step: "Validate with compliance", desc: "Backtest and shadow-mode programs before they affect customer-facing or monetary workflows." },
      { step: "Pilot one product line", desc: "Launch on a bounded set of transactions or accounts; measure false positives and analyst time saved." },
      { step: "Scale with governance", desc: "Expand with model versioning, drift monitoring, and audit logs for regulatory review." },
    ],
    faqs: [
      { q: "Can AI modules work inside our core banking system?", a: "Yes. We integrate through vendor APIs and middleware—capabilities appear in analyst consoles or ops tools your team already uses." },
      { q: "How fast can fraud detection respond?", a: "Latency targets are set during scoping—often sub-second for card rails, longer for complex AML cases. We benchmark before go-live." },
      { q: "Do you support crypto and DeFi platforms?", a: "Yes, when scope includes wallet monitoring, exchange ops, or blockchain analytics—with controls defined per jurisdiction." },
      { q: "Can you upgrade an old loan origination app?", a: "Yes. We add document intelligence, copilots for underwriters, and automation without replacing the whole LOS." },
    ],
  },
  {
    slug: "education",
    icon: GraduationCap,
    title: "EdTech",
    shortDesc: "Teaching and admin AI inside LMS, SIS, and campus applications.",
    heroTitle: "Enterprise AI programs for education applications",
    heroDesc: "We transform LMS platforms, student information systems, and admin portals—helping teachers grade, plan, and support students while keeping FERPA and COPPA boundaries clear.",
    heroImage: industryImages[3],
    overview:
      "Schools and EdTech companies run on LMS tools, student information systems, and admin software. We implement intelligent capabilities in those applications so educators spend less time on repetitive tasks—and students get help inside the portals they already use.",
    highlights: [
      "Product transformation programs: Vidya rubric-aligned grading inside LMS tools",
      "Shiksha lesson and quiz drafting in teacher admin applications",
      "Marg student support inside campus portals",
    ],
    industryProductModules: [
      {
        title: "Educator assessment assist · Vidya",
        desc: "Assists essay and project grading inside your LMS with rubric alignment; instructors approve final scores. Surfaces consistency gaps across sections for educator review.",
        deploysIn: "Canvas, Moodle, Google Classroom, and similar LMS platforms",
      },
      {
        title: "Curriculum drafting · Shiksha",
        desc: "Generates lesson drafts, quizzes, and materials inside teacher admin tools—aligned to standards you specify. Supports revision cycles before content is published to courses.",
        deploysIn: "teacher admin tools and curriculum management applications",
      },
      {
        title: "Student support · Marg",
        desc: "Answers common student questions inside campus portals; complex issues route to staff. Operates within FERPA boundaries defined by your institution.",
        deploysIn: "campus portals and student mobile applications",
      },
      {
        title: "Early intervention signals · Sanket",
        desc: "Flags attendance and performance patterns inside student information systems for counselor review. Supports early intervention without automated disciplinary action.",
        deploysIn: "SIS and student analytics dashboards",
      },
      {
        title: "Accessibility assist · Sambandh",
        desc: "Provides translation, simplification, and read-aloud inside course delivery tools per institutional policy. Improves accessibility without altering core instructional design.",
        deploysIn: "course delivery and accessibility tools",
      },
      {
        title: "Application modernization · Nava",
        desc: "Transforms legacy registration, HR, and communication systems into AI-enabled campus applications with intelligent search, scheduling automation, and embedded copilots. Modernizes where full SIS replacement is not practical.",
        deploysIn: "legacy SIS, registration, and campus admin systems",
      },
    ],
    process: [
      { step: "Map education applications", desc: "List LMS, SIS, portal, and admin tools—and workflows teachers and staff want to simplify." },
      { step: "Align to curriculum and privacy", desc: "Set FERPA/COPPA rules, consent flows, and what student data modules may access." },
      { step: "Co-design with educators", desc: "Build capabilities with teachers so outputs fit classroom reality—not generic AI demos." },
      { step: "Integrate with LMS", desc: "Connect via LTI and APIs so features appear inside courses and admin panels." },
      { step: "Pilot in select classes", desc: "Test with agreed metrics: time saved, educator satisfaction, student outcomes." },
      { step: "Roll out institution-wide", desc: "Expand with training docs, support, and ongoing privacy review." },
    ],
    faqs: [
      { q: "Do modules work inside our LMS?", a: "Yes. We integrate with Canvas, Blackboard, Google Classroom, Moodle, and custom platforms via LTI and APIs." },
      { q: "Is student data protected?", a: "Programs are designed for FERPA and COPPA requirements. Data stays within boundaries your institution defines." },
      { q: "Can teachers override AI suggestions?", a: "Always. Educators control difficulty, content focus, and final grades—AI is an assistant, not a replacement." },
      { q: "Can you add AI to an old registration system?", a: "Yes. We modernize legacy SIS and admin apps with copilots and automation where a full replacement is not practical." },
    ],
  },
  {
    slug: "manufacturing",
    icon: Factory,
    title: "Industrial",
    shortDesc: "Maintenance and quality AI inside MES, CMMS, ERP, and shop-floor applications.",
    heroTitle: "Enterprise AI programs for manufacturing applications",
    heroDesc: "We transform MES, CMMS, ERP, and operator HMIs—predicting maintenance needs, flagging defects, and planning production inside the software your plant teams use daily.",
    heroImage: industryImages[6],
    overview:
      "Factories run on MES, ERP, CMMS, and shop-floor HMIs. We implement intelligent automation inside those applications—and on edge devices where needed—so operators and planners get alerts and recommendations without leaving their screens.",
    highlights: [
      "Product transformation programs: Yantra predictive maintenance inside CMMS applications",
      "Gunam defect detection on line HMIs and inspection tools",
      "Yojana schedule optimization in ERP and MES planning software",
    ],
    industryProductModules: [
      {
        title: "Predictive maintenance · Yantra",
        desc: "Reads sensor data and work order history inside maintenance apps; recommends service windows before breakdowns. Prioritizes assets by downtime risk and spare parts availability.",
        deploysIn: "CMMS and asset management applications",
      },
      {
        title: "Quality inspection · Gunam",
        desc: "Flags defects from camera feeds inside operator interfaces; humans confirm rejects and rework. Integrates with existing vision systems without replacing line controls.",
        deploysIn: "line HMIs and quality inspection applications",
      },
      {
        title: "Production scheduling · Yojana",
        desc: "Suggests schedule changes inside planning software based on capacity, materials, and orders. Supports planner review before changes propagate to the shop floor.",
        deploysIn: "ERP and MES scheduling applications",
      },
      {
        title: "Operations analytics · Phal",
        desc: "Explains scrap and downtime patterns inside manufacturing analytics applications. Connects operational events to root-cause hypotheses for engineering review.",
        deploysIn: "manufacturing analytics and OEE dashboards",
      },
      {
        title: "Safety monitoring · Suraksha",
        desc: "Watches PPE and zone rules via vision systems; alerts appear in safety dashboards supervisors already monitor. Logs incidents for compliance and training follow-up.",
        deploysIn: "safety monitoring dashboards and plant supervision tools",
      },
      {
        title: "Application modernization · Nava",
        desc: "Transforms legacy MES screens and internal reporting tools into AI-enabled plant applications with embedded panels, alerts, and copilots. Adds intelligence without replacing entire MES deployments.",
        deploysIn: "legacy MES screens and internal reporting tools",
      },
    ],
    process: [
      { step: "Map plant applications", desc: "Inventory MES, ERP, CMMS, historians, and HMIs—and where latency matters on the line." },
      { step: "Connect OT and IT data", desc: "Wire SCADA, sensor, and business data with governance your ops and security teams approve." },
      { step: "Pilot on one line", desc: "Deploy on a bounded production scope; compare to baseline KPIs in shadow mode first." },
      { step: "Embed in operator UI", desc: "Show outputs inside HMIs and maintenance apps with acknowledge-and-log workflows." },
      { step: "Scale across plants", desc: "Standardize modules with version control and monitoring as you add sites." },
      { step: "Improve each season", desc: "Retrain on new products and equipment with documented releases." },
    ],
    faqs: [
      { q: "Can modules run on the shop floor or edge?", a: "Yes. We deploy on-premise, private cloud, or edge devices when latency and residency require it." },
      { q: "Which systems do you connect to?", a: "Common targets include major MES/ERP platforms, historians, and IoT gateways via OPC-UA, MQTT, and REST." },
      { q: "Will automation auto-stop the line?", a: "Only if you explicitly approve automated actions. Most programs start with alerts and recommendations inside operator apps." },
      { q: "Can you upgrade old MES screens?", a: "Yes. We add AI overlays, copilots, and integration hooks without replacing entire MES deployments." },
    ],
  },
  {
    slug: "sports-gaming",
    icon: Gamepad2,
    title: "Sports",
    shortDesc: "Performance and fan engagement AI inside coaching apps, media platforms, and games.",
    heroTitle: "Enterprise AI programs for sports and gaming applications",
    heroDesc: "We transform coaching platforms, fan apps, broadcast tools, and game backends—turning telemetry and audience data into actions your teams can use in the software they already run.",
    heroImage: industryImages[4],
    overview:
      "Sports and gaming organizations use coaching apps, fan mobile apps, CMS tools, and game servers. We implement intelligent capabilities in those systems—for performance insights, content creation, and player experiences—without bolting on separate AI tools.",
    highlights: [
      "Product transformation programs: Chitra performance summaries inside coaching applications",
      "Ruchi personalized engagement in fan mobile and streaming apps",
      "Lekh highlights and captions inside editorial CMS workflows",
    ],
    industryProductModules: [
      {
        title: "Performance analytics · Chitra",
        desc: "Summarizes player telemetry and video tags inside coaching dashboards for staff review. Surfaces training load patterns and matchup insights for coaching staff decisions.",
        deploysIn: "coaching platforms and video analysis applications",
      },
      {
        title: "Fan personalization · Ruchi",
        desc: "Personalizes content, stats, and offers inside fan applications per consent and platform rules. Supports A/B testing of engagement flows before wider rollout.",
        deploysIn: "fan mobile apps and streaming platforms",
      },
      {
        title: "Content production · Lekh",
        desc: "Drafts highlights, captions, and social posts from live data inside editorial workflows. Accelerates post-game content production with human editorial approval.",
        deploysIn: "media CMS and broadcast production tools",
      },
      {
        title: "Athlete wellness signals · Kaya",
        desc: "Surfaces load and biomechanics signals inside medical and coaching software—not medical diagnosis. Flags patterns for staff review against established protocols.",
        deploysIn: "medical, performance, and coaching software",
      },
      {
        title: "Live-ops intelligence · Khel",
        desc: "Powers adaptive NPCs, matchmaking, and live-ops tools inside game backends with test gates before release. Supports staged rollout and telemetry-driven tuning.",
        deploysIn: "game backends and live-ops management tools",
      },
      {
        title: "Application modernization · Nava",
        desc: "Transforms legacy ticketing and membership applications into AI-enabled fan platforms with chat assistants, personalization, and workflow automation. Extends existing apps without a full rebuild.",
        deploysIn: "legacy ticketing and membership applications",
      },
    ],
    process: [
      { step: "Map sports and gaming apps", desc: "List coaching, fan, broadcast, and game systems—and data feeds available." },
      { step: "Prioritize use cases", desc: "Pick one workflow—coaching review, fan chat, or live content—with clear success measures." },
      { step: "Build with real data", desc: "Train models on your telemetry, video, and audience data with evaluation protocols." },
      { step: "Integrate in real time", desc: "Connect streaming pipelines where live events need low-latency responses." },
      { step: "Pilot one season or release", desc: "Measure engagement, staff time saved, or content throughput before wider rollout." },
      { step: "Tune each cycle", desc: "Update models each season or game patch with documented releases." },
    ],
    faqs: [
      { q: "Which sports and platforms do you support?", a: "Frameworks adapt to football, basketball, cricket, soccer, esports, and more—based on data you can provide." },
      { q: "Can modules run during live games?", a: "Yes, with streaming architectures sized to your latency and volume requirements." },
      { q: "Do you build in-game AI for studios?", a: "Yes—NPC behavior, matchmaking, anti-cheat assists, and live-ops tools inside game backends." },
      { q: "Can you add AI to an existing fan app?", a: "Yes. We embed copilots and personalization without rebuilding the app from scratch." },
    ],
  },
  {
    slug: "real-estate",
    icon: Building2,
    title: "PropTech",
    shortDesc: "Valuation and lead intelligence inside CRM, MLS tools, and property applications.",
    heroTitle: "Enterprise AI programs for real estate applications",
    heroDesc: "We transform CRM, MLS-connected tools, and property portals—qualifying leads, drafting valuations, and processing documents inside the apps brokers already use.",
    heroImage: industryImages[5],
    overview:
      "Real estate runs on CRM, MLS integrations, transaction management, and client portals. We implement intelligent automation inside those applications so brokers spend less time on paperwork and more time with clients—or we modernize legacy PropTech software with built-in intelligence.",
    highlights: [
      "Product transformation programs: Bhumi lead prioritization inside CRM applications",
      "Mulya property valuation in broker and CMA tools",
      "Patra lease and contract drafting in transaction management software",
    ],
    industryProductModules: [
      {
        title: "Lead prioritization · Bhumi",
        desc: "Scores and prioritizes leads inside Salesforce or similar CRM based on behavior and intent signals. Routes high-intent prospects to the right broker or team.",
        deploysIn: "CRM and lead management applications",
      },
      {
        title: "Property valuation · Mulya",
        desc: "Estimates property values with confidence ranges inside CRM or CMA tools; brokers override when needed. Grounds estimates in local comparable sales data.",
        deploysIn: "broker CRM and CMA applications",
      },
      {
        title: "Market research · Vipul",
        desc: "Summarizes neighborhood trends inside research dashboards brokers use for client meetings. Updates on new listings and price movements in target markets.",
        deploysIn: "market research dashboards and MLS-connected tools",
      },
      {
        title: "Contract drafting · Patra",
        desc: "Drafts leases, disclosures, and contracts inside transaction management apps for legal review. Populates standard clauses from property and party data.",
        deploysIn: "transaction management and document workflow applications",
      },
      {
        title: "Tenant screening · Nivas",
        desc: "Organizes applicant data inside screening workflows with fair-housing checks built in. Flags incomplete applications before submission to underwriting.",
        deploysIn: "property operations and tenant screening applications",
      },
      {
        title: "Application modernization · Nava",
        desc: "Transforms legacy listing and property management platforms into AI-enabled applications with intelligent search, virtual tour assists, and embedded copilots. Modernizes without disrupting broker workflows.",
        deploysIn: "legacy listing and property management platforms",
      },
    ],
    process: [
      { step: "Map PropTech stack", desc: "Document CRM, MLS, transaction, and portal tools—and broker workflows to automate." },
      { step: "Connect market data", desc: "Wire MLS, records, and CRM data with licensing and access rules respected." },
      { step: "Build sector modules", desc: "Create valuation, lead, and document capabilities calibrated to your markets." },
      { step: "Embed in broker UI", desc: "Show outputs inside CRM and mobile apps brokers open every day." },
      { step: "Pilot with one team", desc: "Measure lead conversion, time per transaction, and broker adoption." },
      { step: "Expand markets", desc: "Extend to new regions with local validation." },
    ],
    faqs: [
      { q: "Do modules work inside our CRM?", a: "Yes. We integrate with Salesforce, HubSpot, and custom CRMs so capabilities appear in existing broker workflows." },
      { q: "How accurate are AI valuations?", a: "Models are validated against local sale data with confidence bands. Brokers always review before client use." },
      { q: "Do you integrate with MLS?", a: "Yes, within your MLS licensing and data-use agreements." },
      { q: "Can you upgrade an old property management app?", a: "Yes. We add tenant copilots, maintenance routing, and document automation to existing platforms." },
    ],
  },
  {
    slug: "agriculture",
    icon: Sprout,
    title: "Agriculture",
    shortDesc: "Field and logistics AI inside farm management and supply chain applications.",
    heroTitle: "Enterprise AI programs for agriculture applications",
    heroDesc: "We transform farm management systems, logistics ERPs, and field apps—helping agronomists plan irrigation, monitor crop health, and trace supply chains in software they use in the office and field.",
    heroImage: industryImages[7],
    overview:
      "Agriculture teams use farm management systems, logistics platforms, and mobile field apps. We implement intelligent capabilities in those tools—or modernize them with AI—so recommendations on yield, irrigation, and traceability appear where decisions are made.",
    highlights: [
      "Product transformation programs: Krishi yield forecasting inside farm management dashboards",
      "Jal watering recommendations in field mobile applications",
      "Vriksha stress and pest detection from imagery platforms",
    ],
    industryProductModules: [
      {
        title: "Yield forecasting · Krishi",
        desc: "Forecasts yield using weather, soil, and history inside farm management dashboards agronomists review. Supports scenario planning before planting and input decisions.",
        deploysIn: "farm management systems and agronomic planning tools",
      },
      {
        title: "Irrigation planning · Jal",
        desc: "Recommends watering schedules inside mobile or control applications tied to moisture sensors. Adjusts recommendations as weather and crop stage change.",
        deploysIn: "field mobile apps and irrigation control systems",
      },
      {
        title: "Crop health monitoring · Vriksha",
        desc: "Flags stress and pest signals from drone or satellite feeds inside field monitoring software. Prioritizes zones for scout visits and treatment review.",
        deploysIn: "field monitoring and imagery analysis applications",
      },
      {
        title: "Input planning · Beej",
        desc: "Suggests fertilizer and input rates inside planning tools mapped to field zones. Aligns recommendations to soil tests and regulatory limits.",
        deploysIn: "input planning and precision agriculture applications",
      },
      {
        title: "Supply chain traceability · Rekha",
        desc: "Tracks lot provenance inside supply chain portals from farm gate to distribution. Supports audit requests and buyer traceability requirements.",
        deploysIn: "supply chain and logistics portals",
      },
      {
        title: "Application modernization · Nava",
        desc: "Transforms legacy ERP and cooperative management systems into AI-enabled ag applications with planning copilots, alerts, and workflow automation. Modernizes rural operations software without full replacement.",
        deploysIn: "legacy ERP and cooperative management systems",
      },
    ],
    process: [
      { step: "Map ag applications", desc: "List FMS, ERP, IoT, and mobile tools—and regional crop workflows." },
      { step: "Integrate field data", desc: "Connect sensors, imagery, weather, and ops data with access rules for each role." },
      { step: "Pilot one region or crop", desc: "Compare recommendations to existing plans with agronomist sign-off." },
      { step: "Deploy in field apps", desc: "Surface alerts and plans inside mobile tools field teams actually carry." },
      { step: "Scale seasons", desc: "Expand regions with drift monitoring and release notes." },
      { step: "Improve each harvest", desc: "Retrain on new seasons and cultivars with stakeholder review." },
    ],
    faqs: [
      { q: "Can modules work with poor field connectivity?", a: "Yes. We support edge deployment and sync-when-online patterns for rural connectivity." },
      { q: "Which farm systems do you integrate with?", a: "We connect to common FMS and ERP platforms via APIs and structured data exchange." },
      { q: "Is satellite imagery required?", a: "No. Programs can start with sensors and imagery you already collect." },
      { q: "Can you add AI to our existing cooperative software?", a: "Yes. We modernize legacy ag apps with planning copilots and traceability features." },
    ],
  },
  {
    slug: "biotechnology",
    icon: Dna,
    title: "Biotechnology",
    shortDesc: "Research and quality AI inside LIMS, ELN, and QMS applications.",
    heroTitle: "Enterprise AI programs for biotechnology applications",
    heroDesc: "We transform lab notebooks, LIMS, QMS, and manufacturing systems—searching protocols, triaging deviations, and preparing regulatory packages inside GxP-aware workflows.",
    heroImage: industryImages[8],
    overview:
      "Biotech and life sciences run on ELN, LIMS, QMS, and manufacturing execution systems. We implement intelligent automation inside those applications so scientists and QA teams find answers faster—without breaking traceability or validation requirements.",
    highlights: [
      "Product transformation programs: Shodh experiment search inside electronic lab notebooks",
      "Ulthan quality event triage in QMS applications",
      "Niyam regulatory evidence assembly in submission workflows",
    ],
    industryProductModules: [
      {
        title: "Experiment search · Shodh",
        desc: "Finds and summarizes experiments and literature inside electronic lab notebooks with citations for scientist review. Reduces time spent searching across project histories.",
        deploysIn: "ELN and literature search tools",
      },
      {
        title: "Quality event triage · Ulthan",
        desc: "Classifies and routes quality events inside QMS applications with structured summaries for QA. Prioritizes events by severity and regulatory impact.",
        deploysIn: "QMS and quality event management applications",
      },
      {
        title: "Manufacturing monitoring · Pankti",
        desc: "Watches manufacturing KPIs inside execution systems and alerts ops when thresholds breach. Supports batch release review with documented deviation context.",
        deploysIn: "MES and manufacturing execution systems",
      },
      {
        title: "Regulatory submissions · Niyam",
        desc: "Assembles evidence sections inside submission workflows; humans approve every package. Maintains traceability from source records to submission artifacts.",
        deploysIn: "regulatory submission and document management workflows",
      },
      {
        title: "Knowledge capture · Gyan",
        desc: "Helps retiring experts document methods inside governed knowledge bases. Captures tacit know-how with review gates before publication to teams.",
        deploysIn: "governed knowledge bases and internal wikis",
      },
      {
        title: "Application modernization · Nava",
        desc: "Transforms legacy LIMS and document repositories into AI-enabled lab applications with intelligent search and workflow automation. Modernizes under GxP change-control requirements.",
        deploysIn: "legacy LIMS and document repositories",
      },
    ],
    process: [
      { step: "Scope compliance needs", desc: "Define data classes, validation rules, and QA sign-off with your compliance team." },
      { step: "Map lab applications", desc: "Document ELN, LIMS, QMS, and manufacturing system integrations." },
      { step: "Controlled pilot", desc: "Run on non-production data with test protocols and acceptance criteria." },
      { step: "Validate for GxP", desc: "Produce artifacts your validation team needs for promotion." },
      { step: "Production rollout", desc: "Deploy with role-based access and monitoring." },
      { step: "Lifecycle control", desc: "Version models and prompts under change management." },
    ],
    faqs: [
      { q: "Can modules support GxP environments?", a: "Yes, aligned to your validation and change-control SOPs. Specific claims depend on your auditors." },
      { q: "Do scientists approve all outputs?", a: "Yes. Critical actions require explicit human review and sign-off." },
      { q: "Which lab systems do you integrate with?", a: "Common integrations include major LIMS, ELN, and QMS platforms via APIs and validated exchange." },
      { q: "How is IP protected?", a: "Data stays in agreed boundaries with encryption, access logs, and no training on your data without contract." },
    ],
  },
  {
    slug: "government",
    icon: Landmark,
    title: "Government",
    shortDesc: "Citizen service and policy AI inside case management and portal applications.",
    heroTitle: "Enterprise AI programs for government applications",
    heroDesc: "We transform citizen portals, case management systems, and staff intranets—routing inquiries, searching policy, and processing forms with residency, accessibility, and audit requirements built in.",
    heroImage: industryImages[9],
    overview:
      "Agencies run on case systems, citizen portals, and document repositories. We implement intelligent capabilities in those applications—and modernize legacy public-sector software—so staff and citizens get faster service without sacrificing transparency or data sovereignty.",
    highlights: [
      "Product transformation programs: JanSeva inquiry routing inside public portals",
      "Marg case classification in case management systems",
      "Niti cited policy search on staff intranets",
    ],
    industryProductModules: [
      {
        title: "Citizen inquiry routing · JanSeva",
        desc: "Answers common questions and routes cases inside citizen-facing applications with escalation to staff. Operates within accessibility and language requirements your agency defines.",
        deploysIn: "citizen portals and public chat channels",
      },
      {
        title: "Case classification · Marg",
        desc: "Classifies and assigns inquiries inside case systems with full history for auditors. Reduces misrouting and backlog buildup across service channels.",
        deploysIn: "case management and workflow applications",
      },
      {
        title: "Policy search · Niti",
        desc: "Searches internal policy corpora inside intranet tools with cited answers. Helps staff locate authoritative guidance without manual document searches.",
        deploysIn: "staff intranets and knowledge base applications",
      },
      {
        title: "Permit processing · Patra",
        desc: "Extracts and validates fields from permits and applications inside processing workflows. Flags incomplete submissions before they enter review queues.",
        deploysIn: "permits, records, and application processing systems",
      },
      {
        title: "Service operations · Gati",
        desc: "Summarizes backlog, SLAs, and channel performance inside management applications. Supports leadership reporting with drill-down to service areas.",
        deploysIn: "operations dashboards and management reporting tools",
      },
      {
        title: "Application modernization · Nava",
        desc: "Transforms legacy citizen and internal systems into AI-enabled public-sector applications with multilingual copilots, accessibility features, and workflow automation. Modernizes without full platform replacement.",
        deploysIn: "legacy citizen portals and internal government systems",
      },
    ],
    process: [
      { step: "Align to mission outcomes", desc: "Define service goals, data classification, and stakeholders across business and IT." },
      { step: "Design secure architecture", desc: "Set identity, logging, and residency before selecting models." },
      { step: "Pilot one service", desc: "Implement on a bounded process with agreed SLAs and public-facing review." },
      { step: "Accessibility and language review", desc: "Validate UX against WCAG and multilingual requirements." },
      { step: "Procurement handover", desc: "Document operations, support, and costs for sustainment." },
      { step: "Scale with oversight", desc: "Expand with monitoring and artifacts for audit and FOIA alignment." },
    ],
    faqs: [
      { q: "Can solutions meet data residency rules?", a: "Yes. We deploy in your specified regions—including on-premise when required." },
      { q: "How do modules handle FOIA and records?", a: "Workflows align with your records team on logging, redaction, and retention." },
      { q: "Can you modernize an old citizen portal?", a: "Yes. We add intelligent routing, copilots, and form automation without full replacement." },
      { q: "Are interfaces accessible?", a: "Yes. We review against WCAG-oriented requirements agreed at project start." },
    ],
  },
];

/** @deprecated Use industryProductModules */
industries.forEach((industry) => {
  if (!industry.industryReadyAgents && industry.industryProductModules) {
    industry.industryReadyAgents = industry.industryProductModules;
  }
});

export default industries;
