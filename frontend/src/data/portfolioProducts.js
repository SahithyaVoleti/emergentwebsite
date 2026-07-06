/** Platform products shown on Our Work → Products. */
export const PORTFOLIO_PRODUCTS_LIST = [
  {
    id: "featured-product-leadcliques",
    productLabel: "LeadCliques · Admission CRM",
    title: "AI-Powered Admission CRM",
    description:
      "Transform enquiry management with AI lead scoring, counselor copilot, and automated nurture sequences across the enrollment lifecycle.",
    metrics: [
      { value: "65%", label: "Faster admissions" },
      { value: "45%", label: "Higher conversions" },
      { value: "3.2x", label: "ROI within 12 months" },
    ],
    image: "/media/portfolio/leadcliques-admission-crm.png",
    imageAlt: "LeadCliques admission CRM dashboard with enrollment analytics and AI copilot",
    imagePosition: "left",
  },
  {
    id: "featured-product-staffcliques",
    productLabel: "StaffCliques · Workforce Monitoring",
    title: "Employee Management & Staff Monitoring",
    description:
      "Unify attendance, live activity tracking, and productivity analytics with AI alerts for idle time and compliance gaps across distributed teams.",
    metrics: [
      { value: "87.6%", label: "Average productivity" },
      { value: "1,248", label: "Employees managed" },
      { value: "99.99%", label: "Platform uptime" },
    ],
    image: "/media/portfolio/staffcliques-workforce-platform.png",
    imageAlt: "StaffCliques workforce command center with live employee monitoring",
    imagePosition: "right",
  },
  {
    id: "featured-product-procsquare",
    productLabel: "ProcSquare · Live Proctoring",
    title: "Live Online Proctoring Platform",
    description:
      "Secure remote exams with real-time candidate monitoring, AI violation detection, identity verification, and integrity scoring at scale.",
    metrics: [
      { value: "2,543", label: "Candidates proctored" },
      { value: "156", label: "Violations auto-flagged" },
      { value: "99.99%", label: "Platform uptime" },
    ],
    image: "/media/portfolio/procsquare-proctoring-platform.png",
    imageAlt: "ProcSquare live proctoring command center with candidate video feeds",
    imagePosition: "left",
  },
  {
    id: "featured-product-schooltrix",
    productLabel: "SchoolTrix · Institution & Mobile Platform",
    title: "School Management Platform & Native Apps",
    description:
      "Run the institution from a web command center and extend delivery through native mobile apps—gamified learning for students, fee and progress visibility for parents, and executive oversight for administrators with live sync.",
    metrics: [
      { value: "2,543", label: "Students managed" },
      { value: "12", label: "Mobile modules" },
      { value: "\u20B948.75L", label: "Fees collected" },
    ],
    images: [
      {
        src: "/media/portfolio/schooltrix-management-platform.png",
        alt: "SchoolTrix institution web dashboard with timetables and attendance analytics",
        label: "Web platform dashboard",
      },
      {
        src: "/media/portfolio/agent-vidya-mobile.png",
        alt: "SchoolTrix native mobile apps for student learning, parent portal, and admin oversight",
        label: "Native mobile apps",
      },
    ],
    autoAdvanceMs: 5500,
    imagePosition: "right",
  },
  {
    id: "featured-product-talentrix",
    productLabel: "Talentrix · Campus Recruitment",
    title: "AI-Powered Talent & Recruitment Platform",
    description:
      "Run Andhra campus placement drives with live interview grids, NeuralTrix AI interviewing, and AI resume matching to improve shortlist quality.",
    metrics: [
      { value: "1,248", label: "Applications processed" },
      { value: "856", label: "Candidates screened" },
      { value: "32", label: "Hires made" },
    ],
    image: "/media/portfolio/talentrix-recruitment-platform.png",
    imageAlt: "Talentrix recruitment dashboard with live interview grids and NeuralTrix AI interviewer",
    imagePosition: "left",
  },
  {
    id: "featured-product-medclues",
    productLabel: "MedClues · Hospital Operations",
    title: "AI-Powered Hospital & Patient Management",
    description:
      "Manage OPD, IPD, pharmacy, and laboratory workflows with live patient vitals monitoring and AI insights for bed demand and readmission risk.",
    metrics: [
      { value: "3,245", label: "Patients managed" },
      { value: "76.4%", label: "Average occupancy" },
      { value: "\u20B948.75L", label: "Revenue tracked" },
    ],
    image: "/media/portfolio/medclues-hospital-platform.png",
    imageAlt: "MedClues hospital operations center with live patient and staff monitoring",
    imagePosition: "right",
  },
  {
    id: "featured-product-telebuddy",
    productLabel: "TeleBuddy · IVR Telecalling",
    title: "IVR-Based AI Telecalling Platform",
    description:
      "Automate outbound campaigns with IVR flows, predictive dialing, follow-up sequences, and AI campaign insights across voice and messaging channels.",
    metrics: [
      { value: "125K+", label: "Calls handled" },
      { value: "12.45%", label: "Conversion rate" },
      { value: "18%", label: "AI performance uplift" },
    ],
    image: "/media/portfolio/telebuddy-telecalling-platform.png",
    imageAlt: "TeleBuddy telecalling operations dashboard with IVR flows and live call monitoring",
    imagePosition: "left",
  },
];

export function getPortfolioProducts() {
  return PORTFOLIO_PRODUCTS_LIST;
}
