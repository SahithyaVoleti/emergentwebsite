/**
 * Portfolio product roles and sidebar menu modules.
 * Each (role × menu) pair becomes one auto-sliding carousel frame.
 * Every dashboard view must include an AI assistant panel.
 */
export const PORTFOLIO_PRODUCTS = [
  {
    key: "leadcliques",
    brand: "LeadCliques",
    theme: "Salesforce-style navy and teal admission CRM",
    roles: [
      { slug: "admissions-admin", label: "Admissions administrator", user: "Priya Sharma", title: "Admissions Head" },
      { slug: "counselor", label: "Counselor workspace", user: "Rajesh Kumar", title: "Senior Counselor" },
      { slug: "marketing-head", label: "Marketing manager", user: "Meghana Rao", title: "Marketing Head" },
    ],
    menus: [
      { slug: "dashboard", label: "Dashboard", module: "Enrollment KPI ribbon, pipeline funnel, and conversion analytics" },
      { slug: "leads", label: "Leads", module: "Lead queue grid with AI scoring and source attribution" },
      { slug: "pipeline", label: "Pipeline", module: "Stage-wise admission pipeline board with SLA timers" },
      { slug: "campaigns", label: "Campaigns", module: "Campaign performance charts and channel mix" },
      { slug: "nurture", label: "Nurture", module: "Automated nurture sequences and engagement timeline" },
      { slug: "analytics", label: "Analytics", module: "Cohort analytics, counselor performance, and ROI charts" },
      { slug: "integrations", label: "Integrations", module: "Integration catalog with Available status pills" },
    ],
  },
  {
    key: "staffcliques",
    brand: "StaffCliques",
    theme: "Purple and indigo workforce command center",
    roles: [
      { slug: "hr-command", label: "HR command center", user: "Srinivas Murthy", title: "HR Director" },
      { slug: "team-manager", label: "Team manager view", user: "Harika Chowdary", title: "Team Manager" },
      { slug: "compliance-officer", label: "Compliance officer", user: "Naveen Kumar", title: "Compliance Officer" },
    ],
    menus: [
      { slug: "dashboard", label: "Dashboard", module: "Workforce productivity KPIs and live headcount pulse" },
      { slug: "employees", label: "Employees", module: "Employee directory with live status and department filters" },
      { slug: "attendance", label: "Attendance", module: "Attendance heatmap and shift compliance calendar" },
      { slug: "activity", label: "Live activity", module: "Real-time activity monitor wall with app usage tiles" },
      { slug: "productivity", label: "Productivity", module: "Productivity scorecards and trend sparklines" },
      { slug: "alerts", label: "Alerts", module: "AI alert inbox for idle time and policy violations" },
      { slug: "reports", label: "Reports", module: "Exportable workforce reports and audit summaries" },
    ],
  },
  {
    key: "procsquare",
    brand: "ProcSquare",
    theme: "Dark crimson live proctoring operations center",
    roles: [
      { slug: "proctor-monitor", label: "Proctor monitor", user: "Sai Krishna Reddy", title: "Lead Proctor" },
      { slug: "exam-admin", label: "Exam administrator", user: "Lakshmi Devi", title: "Exam Administrator" },
      { slug: "integrity-analyst", label: "Integrity analyst", user: "Venkatesh Naidu", title: "Integrity Analyst" },
    ],
    menus: [
      { slug: "dashboard", label: "Dashboard", module: "Exam session overview with integrity score KPIs" },
      { slug: "live-monitor", label: "Live monitor", module: "Candidate video wall with violation flags" },
      { slug: "sessions", label: "Exam sessions", module: "Scheduled sessions table with proctor assignment" },
      { slug: "candidates", label: "Candidates", module: "Candidate roster with verification status" },
      { slug: "violations", label: "Violations", module: "AI-flagged violation queue with severity badges" },
      { slug: "identity", label: "Identity verify", module: "Identity verification workflow and document checks" },
      { slug: "reports", label: "Reports", module: "Integrity reports and session audit exports" },
    ],
  },
  {
    key: "schooltrix",
    brand: "SchoolTrix",
    theme: "Green and white institution management platform",
    roles: [
      { slug: "principal", label: "Principal dashboard", user: "Dr. Sujatha Rao", title: "Principal" },
      { slug: "academic-coordinator", label: "Academic coordinator", user: "Ramana Murthy", title: "Academic Coordinator" },
      { slug: "finance-officer", label: "Finance officer", user: "Anitha Kumari", title: "Finance Officer" },
    ],
    menus: [
      { slug: "dashboard", label: "Dashboard", module: "Institution KPIs, timetable heatmap, and attendance donut" },
      { slug: "academics", label: "Academics", module: "Class schedules, syllabus tracker, and subject analytics" },
      { slug: "students", label: "Students", module: "Student roster carousel with Andhra faces and enrollment stats" },
      { slug: "finance", label: "Finance", module: "Fee collection charts and pending dues breakdown" },
      { slug: "analytics", label: "Analytics", module: "Performance trends and institutional insights" },
      { slug: "calendar", label: "Calendar", module: "Academic calendar with events and holidays" },
      { slug: "reports", label: "Reports", module: "Report builder and compliance exports" },
      { slug: "integrations", label: "Integrations", module: "SMS, payment, GPS, biometric integrations marked Available" },
    ],
    mobileRoles: [
      { slug: "student-app", label: "Student mobile app", user: "Charan Reddy", title: "Class 8 Student", module: "Gamified learning dashboard with streaks and badges" },
      { slug: "parent-app", label: "Parent mobile app", user: "Rekha Devi", title: "Parent", module: "Child progress, fee status, and happiness score portal" },
      { slug: "admin-mobile", label: "Admin mobile app", user: "Dr. Satish Kumar", title: "Administrator", module: "Live attendance pulse and revenue overview on phone" },
      { slug: "teacher-app", label: "Teacher mobile app", user: "Ramana Murthy", title: "Science Teacher", module: "Assignment tracker and participation heatmap on phone" },
    ],
  },
  {
    key: "talentrix",
    brand: "Talentrix",
    theme: "Blue campus recruitment and placement platform",
    roles: [
      { slug: "recruiter-hub", label: "Recruiter hub", user: "Swathi Reddy", title: "Lead Recruiter" },
      { slug: "campus-coordinator", label: "Campus coordinator", user: "Arjun Prasad", title: "Campus Coordinator" },
      { slug: "hiring-manager", label: "Hiring manager", user: "Deepika Rao", title: "Hiring Manager" },
    ],
    menus: [
      { slug: "dashboard", label: "Dashboard", module: "Placement drive KPIs and hiring funnel summary" },
      { slug: "applications", label: "Applications", module: "Application pipeline with AI resume match scores" },
      { slug: "interviews", label: "Live interviews", module: "Live interview grid with NeuralTrix AI interviewer feeds" },
      { slug: "ai-screener", label: "AI screener", module: "AI screening queue with shortlist recommendations" },
      { slug: "campus-drives", label: "Campus drives", module: "Andhra campus drive schedule and booth allocation" },
      { slug: "resume-match", label: "Resume match", module: "Resume-to-role matching matrix and skill gaps" },
      { slug: "analytics", label: "Analytics", module: "Recruitment analytics and offer conversion charts" },
    ],
  },
  {
    key: "medclues",
    brand: "MedClues",
    theme: "Clinical teal hospital operations center",
    roles: [
      { slug: "operations-admin", label: "Operations administrator", user: "Dr. Kiran Kumar", title: "Hospital Administrator" },
      { slug: "clinical-physician", label: "Clinical physician", user: "Dr. Padma Sri", title: "Senior Physician" },
      { slug: "nursing-supervisor", label: "Nursing supervisor", user: "Sujatha Devi", title: "Nursing Supervisor" },
    ],
    menus: [
      { slug: "dashboard", label: "Dashboard", module: "Occupancy, revenue, and patient volume command center" },
      { slug: "opd", label: "OPD", module: "Outpatient queue, token display, and wait-time analytics" },
      { slug: "ipd", label: "IPD", module: "Inpatient bed map with ward occupancy and transfers" },
      { slug: "pharmacy", label: "Pharmacy", module: "Pharmacy inventory and prescription fulfillment queue" },
      { slug: "laboratory", label: "Laboratory", module: "Lab orders, results pipeline, and TAT tracking" },
      { slug: "patient-vitals", label: "Patient vitals", module: "Live vitals monitoring wall with alert thresholds" },
      { slug: "analytics", label: "Analytics", module: "Readmission risk AI insights and revenue analytics" },
    ],
  },
  {
    key: "telebuddy",
    brand: "TeleBuddy",
    theme: "Orange and navy IVR telecalling operations platform",
    roles: [
      { slug: "campaign-ops", label: "Campaign operations", user: "Priya Sharma", title: "Operations Lead" },
      { slug: "agent-supervisor", label: "Agent supervisor", user: "Rajesh Kumar", title: "Supervisor" },
      { slug: "quality-analyst", label: "Quality analyst", user: "Meghana Rao", title: "Quality Analyst" },
    ],
    menus: [
      { slug: "dashboard", label: "Dashboard", module: "Campaign KPI ribbon, call volume, and conversion rate" },
      { slug: "campaigns", label: "Campaigns", module: "Campaign list with performance and budget tracking" },
      { slug: "ivr-flows", label: "IVR flows", module: "IVR flow designer canvas with node paths" },
      { slug: "dialer", label: "Predictive dialer", module: "Predictive dialer queue and agent availability" },
      { slug: "followups", label: "Follow-ups", module: "Follow-up sequence builder and callback calendar" },
      { slug: "agents", label: "Live agents", module: "Live agent grid with call status and handle time" },
      { slug: "reports", label: "Reports", module: "Call analytics, QA scores, and campaign exports" },
    ],
  },
];

/** Flat slide list for one product — role × menu (+ mobile roles for SchoolTrix). */
export function buildProductSlides(product) {
  const slides = [];

  for (const role of product.roles) {
    for (const menu of product.menus) {
      slides.push({
        src: `/media/portfolio/${product.key}-${role.slug}-${menu.slug}.png`,
        alt: `${product.brand} ${menu.label} for ${role.label} with AI assistant`,
        label: `${role.label} · ${menu.label}`,
        role,
        menu,
      });
    }
  }

  if (product.mobileRoles?.length) {
    for (const mobile of product.mobileRoles) {
      slides.push({
        src: `/media/portfolio/${product.key}-${mobile.slug}.png`,
        alt: `${product.brand} ${mobile.label} for ${mobile.user} with AI assistant`,
        label: mobile.label,
        role: mobile,
        menu: { slug: mobile.slug, label: mobile.label },
      });
    }
  }

  return slides;
}

/** Legacy single-role dashboard filenames mapped to role-dashboard slides. */
export const PORTFOLIO_LEGACY_IMAGE_ALIASES = {
  "leadcliques-admissions-admin-dashboard": "leadcliques-admissions-admin",
  "leadcliques-counselor-dashboard": "leadcliques-counselor-copilot",
  "staffcliques-hr-command-dashboard": "staffcliques-hr-command",
  "staffcliques-team-manager-dashboard": "staffcliques-team-manager",
  "procsquare-proctor-monitor-dashboard": "procsquare-proctor-monitor",
  "procsquare-exam-admin-dashboard": "procsquare-exam-admin",
  "schooltrix-principal-dashboard": "schooltrix-management-platform",
  "talentrix-recruiter-hub-dashboard": "talentrix-recruiter-hub",
  "talentrix-campus-coordinator-dashboard": "talentrix-campus-coordinator",
  "medclues-operations-admin-dashboard": "medclues-operations-admin",
  "medclues-clinical-physician-dashboard": "medclues-clinical-physician",
  "telebuddy-campaign-ops-dashboard": "telebuddy-campaign-ops",
  "telebuddy-agent-supervisor-dashboard": "telebuddy-agent-supervisor",
};

export function resolvePortfolioImageSrc(slideSrc) {
  const filename = slideSrc.split("/").pop().replace(".png", "");
  const legacy = PORTFOLIO_LEGACY_IMAGE_ALIASES[filename];
  if (legacy) {
    return slideSrc.replace(filename, legacy);
  }
  return slideSrc;
}
