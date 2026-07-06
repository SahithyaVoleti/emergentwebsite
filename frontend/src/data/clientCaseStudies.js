/**
 * Client delivery case studies — how platform products resolved operational problems.
 * Linked from Our Work → Case Studies; detail pages at /our-work/case-studies/:slug
 */
export const CLIENT_CASE_STUDIES = [
  {
    slug: "leadcliques-education-enrollment",
    productKey: "leadcliques",
    productLabel: "LeadCliques · Admission CRM",
    title: "Unified admission pipeline for a multi-campus education group",
    description:
      "A Hyderabad-based education group consolidated enquiry handling across six campuses, reducing counselor response time and improving conversion visibility for leadership.",
    metrics: [
      { value: "65%", label: "Faster enquiry response" },
      { value: "45%", label: "Higher conversion rate" },
      { value: "6", label: "Campuses connected" },
    ],
    image: "/media/portfolio/leadcliques-admission-crm.png",
    imageAlt: "LeadCliques admission CRM dashboard used by the education group",
    imagePosition: "left",
    heroTitle: "LeadCliques reduced admission cycle time for a multi-campus education group",
    heroDesc:
      "Priya Sharma's admissions team replaced spreadsheet tracking with AI lead scoring, counselor copilot, and automated nurture across six Andhra Pradesh campuses.",
    heroImage: "/media/portfolio/leadcliques-admission-crm.png",
    customerOverview: {
      title: "Customer overview",
      clientName: "Sunrise Education Group",
      industry: "Higher education & K–12",
      location: "Hyderabad and Vijayawada, Andhra Pradesh",
      size: "6 campuses · 14,000+ annual enquiries",
      body:
        "Sunrise Education Group operates day schools and junior colleges across Andhra Pradesh. Admissions teams managed enquiries through disconnected CRM exports, WhatsApp groups, and manual counselor logs. Leadership lacked a single view of pipeline health, counselor performance, or campaign ROI before each intake season.",
      highlights: [
        "Admissions season spans October through June across six locations",
        "Counselor teams of 8–12 per campus with overlapping enquiry sources",
        "Marketing spend tracked separately from enrollment outcomes",
      ],
    },
    businessChallenges: {
      title: "Business challenges",
      lead: "The group needed measurable control over enquiry flow before the next intake cycle.",
      items: [
        "Duplicate enquiries across channels with no central deduplication or scoring",
        "Counselors spending 40% of time on status updates instead of high-intent follow-ups",
        "No real-time pipeline view for principals and marketing leadership",
        "Campaign attribution split across offline events, digital ads, and referral partners",
        "Manual reporting delayed leadership decisions by one to two weeks",
      ],
    },
    solutionOverview: {
      title: "Solution overview",
      lead: "LeadCliques was deployed as the admission command center with AI-assisted counselor workflows.",
      body:
        "NeuralTrix AI implemented LeadCliques across all campuses with shared enquiry ingestion, role-based counselor workspaces, and an executive dashboard for the group admissions office. AI lead scoring prioritized high-intent families; the counselor copilot drafted follow-up messages within approved templates.",
      features: [
        "Central enquiry queue with AI scoring and source attribution",
        "Counselor copilot for personalized nurture sequences and SLA reminders",
        "Pipeline board with stage-wise conversion and campus-level filters",
        "Campaign performance analytics tied to enrolled students",
        "Integration catalog for SMS, payment, and CRM exports marked Available",
      ],
    },
    industryImpact: {
      title: "Impact of the solution in the industries",
      lead: "Measured outcomes after one full admission cycle across the education group.",
      body:
        "The deployment established a repeatable admission operating model for multi-campus education groups in Andhra Pradesh. Principals now review pipeline health daily; marketing reallocates spend based on conversion data rather than lead volume alone.",
      metrics: [
        { value: "65%", label: "Reduction in average enquiry response time" },
        { value: "45%", label: "Increase in enquiry-to-enrollment conversion" },
        { value: "3.2x", label: "Documented ROI within 12 months" },
        { value: "92%", label: "Counselor adoption within 30 days" },
      ],
    },
  },
  {
    slug: "staffcliques-distributed-operations",
    productKey: "staffcliques",
    productLabel: "StaffCliques · Workforce Monitoring",
    title: "Workforce visibility for a distributed BPO operations center",
    description:
      "A Visakhapatnam operations center gained live productivity tracking, attendance compliance, and AI alerts across 1,200+ agents working in hybrid shifts.",
    metrics: [
      { value: "87.6%", label: "Average productivity" },
      { value: "1,248", label: "Employees monitored" },
      { value: "34%", label: "Fewer compliance gaps" },
    ],
    image: "/media/portfolio/staffcliques-workforce-platform.png",
    imageAlt: "StaffCliques workforce dashboard for distributed operations monitoring",
    imagePosition: "right",
    heroTitle: "StaffCliques improved productivity oversight for a 1,200-agent operations center",
    heroDesc:
      "Srinivas Murthy's HR team replaced manual attendance sheets and ad hoc screen checks with unified live monitoring, productivity scorecards, and AI compliance alerts.",
    heroImage: "/media/portfolio/staffcliques-workforce-platform.png",
    customerOverview: {
      title: "Customer overview",
      clientName: "Coastal Process Solutions",
      industry: "Business process outsourcing",
      location: "Visakhapatnam, Andhra Pradesh",
      size: "1,248 employees · hybrid shift model",
      body:
        "Coastal Process Solutions delivers customer support and back-office processing for financial and telecom clients. Supervisors managed attendance through biometric exports and periodic audits, while productivity reviews relied on weekly spreadsheets that lagged actual floor conditions.",
      highlights: [
        "Three shifts covering 18 hours of daily operations",
        "Hybrid teams split between office floors and approved remote locations",
        "Client SLAs tied to handle time, occupancy, and schedule adherence",
      ],
    },
    businessChallenges: {
      title: "Business challenges",
      lead: "Operations leadership needed near-real-time visibility without adding manual audit overhead.",
      items: [
        "Attendance discrepancies discovered days after shift completion",
        "No unified view of active work, idle time, and application usage",
        "Supervisors spending excessive time on manual compliance checks",
        "Remote agents difficult to compare fairly against floor-based teams",
        "Audit preparation required consolidating data from four separate tools",
      ],
    },
    solutionOverview: {
      title: "Solution overview",
      lead: "StaffCliques unified attendance, activity monitoring, and productivity analytics on one command center.",
      body:
        "The platform connected biometric attendance feeds, desktop activity signals, and shift schedules. AI alerts flagged idle thresholds and policy violations for supervisor review rather than automatic disciplinary action.",
      features: [
        "Live activity monitor wall with department and shift filters",
        "Attendance heatmap integrated with shift compliance calendars",
        "Productivity scorecards with trend sparklines per team",
        "AI alert inbox for idle time and unauthorized application usage",
        "Exportable audit reports for client SLA and internal HR review",
      ],
    },
    industryImpact: {
      title: "Impact of the solution in the industries",
      lead: "Outcomes measured over a 90-day production rollout across all shifts.",
      body:
        "The operations center reduced compliance gaps and improved supervisor response time to floor issues. Client audit cycles now pull standardized reports from StaffCliques rather than manual reconciliations.",
      metrics: [
        { value: "87.6%", label: "Average team productivity index" },
        { value: "34%", label: "Reduction in attendance compliance gaps" },
        { value: "99.99%", label: "Platform uptime during rollout" },
        { value: "2.1 hrs", label: "Weekly supervisor time saved per team lead" },
      ],
    },
  },
  {
    slug: "procsquare-university-exams",
    productKey: "procsquare",
    productLabel: "ProcSquare · Live Proctoring",
    title: "Secure remote examinations for a state university consortium",
    description:
      "A university consortium proctored 2,500+ concurrent candidates with AI violation detection, identity verification, and integrity scoring during degree assessments.",
    metrics: [
      { value: "2,543", label: "Candidates proctored" },
      { value: "156", label: "Violations auto-flagged" },
      { value: "99.2%", label: "Session completion rate" },
    ],
    image: "/media/portfolio/procsquare-proctoring-platform.png",
    imageAlt: "ProcSquare proctoring platform during university remote examinations",
    imagePosition: "left",
    heroTitle: "ProcSquare secured large-scale remote exams for an Andhra university consortium",
    heroDesc:
      "Sai Krishna Reddy's exam operations team replaced manual proctor ratios with live monitoring walls, AI integrity scoring, and structured violation review workflows.",
    heroImage: "/media/portfolio/procsquare-proctoring-platform.png",
    customerOverview: {
      title: "Customer overview",
      clientName: "Andhra Degree Assessment Consortium",
      industry: "Higher education",
      location: "Guntur, Rajahmundry, and Tirupati, Andhra Pradesh",
      size: "12 affiliated colleges · 2,500+ candidates per cycle",
      body:
        "The consortium coordinates semester-end assessments for affiliated degree colleges. Prior remote exam attempts relied on basic video calls and manual proctor assignment, producing inconsistent integrity standards and slow violation review.",
      highlights: [
        "Exam windows spanning multiple districts with varying bandwidth conditions",
        "Mixed device types among candidates in rural and urban centers",
        "Regulatory requirement for auditable integrity records per session",
      ],
    },
    businessChallenges: {
      title: "Business challenges",
      lead: "The consortium required defensible exam integrity at scale without proportional proctor headcount growth.",
      items: [
        "Manual proctor-to-candidate ratios unsustainable above 800 concurrent sessions",
        "Inconsistent violation capture across colleges using different tools",
        "Identity verification handled through ad hoc document uploads",
        "Post-exam review cycles extending results publication by two weeks",
        "Limited audit trail for appeals and regulatory inspection",
      ],
    },
    solutionOverview: {
      title: "Solution overview",
      lead: "ProcSquare delivered a centralized proctoring command center with AI-assisted integrity review.",
      body:
        "Exam administrators scheduled sessions, assigned proctor monitors, and tracked integrity scores from a single dashboard. AI flagged suspicious behavior for human review; identity verification workflows standardized document checks before session start.",
      features: [
        "Live candidate video wall with severity-ranked violation queue",
        "Identity verification workflow with document and facial match checks",
        "Exam session scheduling with proctor assignment and capacity planning",
        "Integrity scoring per candidate with exportable audit reports",
        "AI proctoring assistant summarizing session anomalies for review leads",
      ],
    },
    industryImpact: {
      title: "Impact of the solution in the industries",
      lead: "Results from the first full-semester remote assessment cycle across the consortium.",
      body:
        "The consortium established a repeatable remote exam model for affiliated colleges, reducing proctor staffing pressure while improving integrity documentation. Results publication timelines shortened with structured violation review.",
      metrics: [
        { value: "2,543", label: "Candidates proctored in one cycle" },
        { value: "156", label: "AI-flagged violations reviewed and resolved" },
        { value: "99.2%", label: "Session completion rate" },
        { value: "11 days", label: "Reduction in results publication time" },
      ],
    },
  },
  {
    slug: "schooltrix-multi-campus-school",
    productKey: "schooltrix",
    productLabel: "SchoolTrix · Institution & Mobile Platform",
    title: "Institution management and parent engagement for a school network",
    description:
      "Sunrise High International School unified academics, fees, and parent communication through SchoolTrix web and native mobile apps across 2,500+ students.",
    metrics: [
      { value: "2,543", label: "Students managed" },
      { value: "93.6%", label: "Attendance visibility" },
      { value: "\u20B948.75L", label: "Fees collected digitally" },
    ],
    images: [
      {
        src: "/media/portfolio/schooltrix-management-platform.png",
        alt: "SchoolTrix web dashboard for institution management",
        label: "Web platform dashboard",
      },
      {
        src: "/media/portfolio/agent-vidya-mobile.png",
        alt: "SchoolTrix mobile apps for students, parents, and administrators",
        label: "Native mobile apps",
      },
    ],
    autoAdvanceMs: 5500,
    imagePosition: "right",
    heroTitle: "SchoolTrix connected institution operations and parent engagement for a school network",
    heroDesc:
      "Dr. Sujatha Rao's administration replaced fragmented spreadsheets and messaging groups with a web command center and native mobile apps for students, parents, and staff.",
    heroImage: "/media/portfolio/schooltrix-management-platform.png",
    customerOverview: {
      title: "Customer overview",
      clientName: "Sunrise High International School",
      industry: "K–12 education",
      location: "Amaravati region, Andhra Pradesh",
      size: "2,543 students · 96 teachers · single integrated campus",
      body:
        "Sunrise High International School managed timetables, attendance, fees, and parent communication through separate tools. Parents received delayed fee reminders; teachers logged attendance in paper registers reconciled weekly by the academic office.",
      highlights: [
        "Fee collection split between cash counters and legacy payment links",
        "Parent satisfaction surveys showing communication gaps as top concern",
        "Academic coordinators spending evenings on manual timetable adjustments",
      ],
    },
    businessChallenges: {
      title: "Business challenges",
      lead: "The school required one operational system connecting administrators, teachers, students, and parents.",
      items: [
        "Attendance data reaching administrators one to three days late",
        "Fee dues tracked manually with inconsistent parent reminders",
        "No unified view of student progress for parent-teacher engagement",
        "Teachers lacking mobile access to assignments and class participation data",
        "Leadership unable to monitor institutional KPIs without requesting reports",
      ],
    },
    solutionOverview: {
      title: "Solution overview",
      lead: "SchoolTrix deployed a web institution platform with native mobile apps for each stakeholder role.",
      body:
        "The web command center gave administrators live attendance, fee collection, and timetable visibility. Mobile apps extended gamified learning for students, fee and progress visibility for parents, and executive oversight for administrators with live sync.",
      features: [
        "Institution dashboard with timetable heatmap and attendance analytics",
        "Student mobile app with learning streaks, progress rings, and achievement badges",
        "Parent portal with fee status, academic progress, and event notifications",
        "Admin mobile app with live attendance pulse and revenue overview",
        "Teacher workspace with assignment tracker and participation heatmaps",
      ],
    },
    industryImpact: {
      title: "Impact of the solution in the industries",
      lead: "Outcomes measured after one academic term on the integrated platform.",
      body:
        "The school improved fee collection timeliness and parent engagement scores while reducing administrative reconciliation work. The model applies to K–12 institutions seeking web and mobile delivery without separate vendor stacks.",
      metrics: [
        { value: "93.6%", label: "Average attendance recorded same day" },
        { value: "4.8/5", label: "Parent satisfaction score on communication" },
        { value: "\u20B948.75L", label: "Fees collected through digital channels" },
        { value: "12", label: "Mobile modules adopted across roles" },
      ],
    },
  },
  {
    slug: "talentrix-engineering-placements",
    productKey: "talentrix",
    productLabel: "Talentrix · Campus Recruitment",
    title: "Campus placement operations for an engineering college cluster",
    description:
      "An Andhra engineering college cluster processed 1,200+ applications with NeuralTrix AI interviewing and resume matching during a multi-campus placement season.",
    metrics: [
      { value: "1,248", label: "Applications processed" },
      { value: "856", label: "Candidates screened" },
      { value: "32", label: "Offers accepted" },
    ],
    image: "/media/portfolio/talentrix-recruitment-platform.png",
    imageAlt: "Talentrix recruitment platform during campus placement drives",
    imagePosition: "left",
    heroTitle: "Talentrix improved shortlist quality for an Andhra engineering placement season",
    heroDesc:
      "Swathi Reddy's placement cell replaced manual resume sorting and unstructured interviews with AI resume matching, live interview grids, and NeuralTrix AI interviewing.",
    heroImage: "/media/portfolio/talentrix-recruitment-platform.png",
    customerOverview: {
      title: "Customer overview",
      clientName: "Coastal Engineering College Cluster",
      industry: "Higher education · campus recruitment",
      location: "Kakinada and Rajahmundry, Andhra Pradesh",
      size: "4 colleges · 1,248 final-year applicants",
      body:
        "The cluster coordinates placement drives for engineering graduates across four affiliated colleges. Recruiters previously reviewed resumes manually; interview panels lacked structured scoring, extending shortlist cycles and reducing offer conversion.",
      highlights: [
        "Concurrent placement drives with 40+ hiring partners",
        "Mixed resume formats and incomplete skill metadata from applicants",
        "Limited interviewer capacity during peak November–January season",
      ],
    },
    businessChallenges: {
      title: "Business challenges",
      lead: "The placement cell needed faster, consistent screening without sacrificing shortlist quality.",
      items: [
        "Manual resume review creating bottlenecks before interview shortlists",
        "Interview panels using inconsistent evaluation criteria across colleges",
        "No live visibility into drive progress for TPO leadership",
        "Difficulty matching candidates to role-specific skill requirements at scale",
        "Offer tracking scattered across spreadsheets per hiring partner",
      ],
    },
    solutionOverview: {
      title: "Solution overview",
      lead: "Talentrix unified application intake, AI screening, and live interview operations for the placement season.",
      body:
        "Applicants entered a single pipeline with AI resume match scores. Interview grids connected hiring managers with NeuralTrix AI interviewing for first-round screening; recruiters advanced candidates through structured stages with audit trails.",
      features: [
        "Application pipeline with AI resume-to-role matching scores",
        "Live interview grid with NeuralTrix AI interviewer for structured first rounds",
        "Campus drive scheduler with booth allocation across colleges",
        "Recruiter dashboard with funnel analytics and offer conversion tracking",
        "Shortlist recommendations with skill gap summaries per candidate",
      ],
    },
    industryImpact: {
      title: "Impact of the solution in the industries",
      lead: "Measured outcomes from one full placement season across the cluster.",
      body:
        "The cluster reduced time-to-shortlist and improved offer quality metrics for hiring partners. TPO leadership now monitors drive progress in real time rather than through end-of-day email summaries.",
      metrics: [
        { value: "856", label: "Candidates AI-screened before human interview" },
        { value: "38%", label: "Reduction in time-to-shortlist" },
        { value: "32", label: "Offers accepted across hiring partners" },
        { value: "91%", label: "Interviewer satisfaction with structured scoring" },
      ],
    },
  },
  {
    slug: "medclues-regional-hospital",
    productKey: "medclues",
    productLabel: "MedClues · Hospital Operations",
    title: "Hospital operations command center for a regional care network",
    description:
      "A regional hospital network unified OPD, IPD, pharmacy, and laboratory workflows with live patient monitoring and AI bed-demand insights across 3,200+ patients.",
    metrics: [
      { value: "3,245", label: "Patients managed" },
      { value: "76.4%", label: "Average bed occupancy" },
      { value: "22%", label: "Faster OPD throughput" },
    ],
    image: "/media/portfolio/medclues-hospital-platform.png",
    imageAlt: "MedClues hospital operations dashboard for regional care network",
    imagePosition: "right",
    heroTitle: "MedClues unified patient and operations workflows for a regional hospital network",
    heroDesc:
      "Dr. Kiran Kumar's operations team replaced siloed department systems with a single command center for OPD, IPD, pharmacy, laboratory, and live patient vitals monitoring.",
    heroImage: "/media/portfolio/medclues-hospital-platform.png",
    customerOverview: {
      title: "Customer overview",
      clientName: "Coastal Regional Care Network",
      industry: "Healthcare",
      location: "Visakhapatnam and Anakapalle, Andhra Pradesh",
      size: "220 beds · 3,245 active patients per quarter",
      body:
        "Coastal Regional Care Network operates a multi-specialty hospital with high OPD volume and seasonal IPD demand. Department heads managed queues through separate registers; bed allocation relied on phone coordination between nursing stations and admissions.",
      highlights: [
        "OPD averaging 450 daily visits with peak morning congestion",
        "Pharmacy and laboratory orders tracked on paper chits between wards",
        "Leadership requiring occupancy and revenue visibility for expansion planning",
      ],
    },
    businessChallenges: {
      title: "Business challenges",
      lead: "The network needed integrated operations visibility without disrupting clinical workflows.",
      items: [
        "OPD wait times exceeding patient satisfaction targets during peak hours",
        "Bed allocation delays due to manual ward coordination",
        "Laboratory result turnaround difficult to track across departments",
        "Pharmacy inventory disconnected from prescription fulfillment queues",
        "No predictive view of readmission risk or seasonal bed demand",
      ],
    },
    solutionOverview: {
      title: "Solution overview",
      lead: "MedClues deployed as the hospital operations command center with AI-assisted capacity insights.",
      body:
        "OPD token management, IPD bed maps, pharmacy fulfillment, and laboratory pipelines connected on one platform. Live vitals monitoring walls surfaced threshold alerts; AI insights flagged readmission risk and projected bed demand.",
      features: [
        "Operations dashboard with occupancy, revenue, and patient volume KPIs",
        "OPD queue management with wait-time analytics and token display",
        "IPD bed map with ward occupancy, transfers, and discharge planning",
        "Pharmacy and laboratory workflow queues with TAT tracking",
        "Live patient vitals wall with AI readmission risk indicators",
      ],
    },
    industryImpact: {
      title: "Impact of the solution in the industries",
      lead: "Outcomes measured over a six-month operational deployment.",
      body:
        "The network improved OPD throughput and bed utilization while giving leadership a defensible view of capacity planning. The deployment model applies to regional hospitals integrating departments without full EMR replacement.",
      metrics: [
        { value: "22%", label: "Improvement in OPD patient throughput" },
        { value: "76.4%", label: "Average bed occupancy with reduced idle wards" },
        { value: "\u20B948.75L", label: "Revenue tracked through integrated billing views" },
        { value: "18%", label: "Reduction in lab result TAT exceptions" },
      ],
    },
  },
  {
    slug: "telebuddy-admissions-outreach",
    productKey: "telebuddy",
    productLabel: "TeleBuddy · IVR Telecalling",
    title: "IVR outreach campaigns for an education admissions program",
    description:
      "An admissions outreach program handled 125,000+ calls with IVR flows, predictive dialing, and AI campaign insights to re-engage dormant enquiries.",
    metrics: [
      { value: "125K+", label: "Calls handled" },
      { value: "12.45%", label: "Conversion rate" },
      { value: "18%", label: "AI performance uplift" },
    ],
    image: "/media/portfolio/telebuddy-telecalling-platform.png",
    imageAlt: "TeleBuddy telecalling platform during admissions outreach campaigns",
    imagePosition: "left",
    heroTitle: "TeleBuddy scaled admissions outreach with IVR automation and AI campaign insights",
    heroDesc:
      "Priya Sharma's operations team replaced manual dial lists with IVR flows, predictive dialing, and structured follow-up sequences across voice and messaging channels.",
    heroImage: "/media/portfolio/telebuddy-telecalling-platform.png",
    customerOverview: {
      title: "Customer overview",
      clientName: "Andhra Professional Admissions Program",
      industry: "Education · outbound engagement",
      location: "Statewide Andhra Pradesh outreach",
      size: "125,000+ outbound calls per intake cycle",
      body:
        "The program re-engages dormant admission enquiries for professional courses across Andhra Pradesh. Prior campaigns relied on agent manual dialing with inconsistent scripts and limited visibility into conversion by region or counselor team.",
      highlights: [
        "Peak calling windows aligned with admission deadline milestones",
        "Mixed connectivity conditions across urban and rural lead lists",
        "Compliance requirements for call recording and consent tracking",
      ],
    },
    businessChallenges: {
      title: "Business challenges",
      lead: "The program needed higher outreach volume without proportional agent headcount increases.",
      items: [
        "Manual dialing limiting daily contact rates per agent",
        "Inconsistent IVR scripts and follow-up timing across teams",
        "No unified view of campaign performance by region or channel",
        "Callback scheduling handled through separate calendar tools",
        "Leadership unable to measure AI-assisted script performance against baselines",
      ],
    },
    solutionOverview: {
      title: "Solution overview",
      lead: "TeleBuddy delivered IVR campaign automation with predictive dialing and AI performance analytics.",
      body:
        "Campaign operators configured IVR flows, assigned agent pools, and monitored live call grids from one dashboard. Follow-up sequences triggered automatically based on call outcomes; AI insights highlighted script variants with higher conversion rates.",
      features: [
        "IVR flow designer with branching paths and consent capture",
        "Predictive dialer with agent availability and handle-time tracking",
        "Live agent grid with call status, QA scores, and supervisor monitoring",
        "Automated follow-up sequences across voice and SMS channels",
        "Campaign analytics with conversion rates and regional performance breakdowns",
      ],
    },
    industryImpact: {
      title: "Impact of the solution in the industries",
      lead: "Results from one full admissions outreach cycle using TeleBuddy.",
      body:
        "The program increased contact rates and conversion on re-engaged enquiries while maintaining auditable call records. Education groups and regulated outbound programs can replicate the model for seasonal intake campaigns.",
      metrics: [
        { value: "125K+", label: "Outbound calls completed in one cycle" },
        { value: "12.45%", label: "Enquiry re-engagement conversion rate" },
        { value: "18%", label: "Performance uplift from AI-optimized scripts" },
        { value: "40%", label: "Increase in daily contacts per agent team" },
      ],
    },
  },
];

export function getClientCaseStudies() {
  return CLIENT_CASE_STUDIES;
}

export function getClientCaseStudyBySlug(slug) {
  return CLIENT_CASE_STUDIES.find((study) => study.slug === slug);
}
