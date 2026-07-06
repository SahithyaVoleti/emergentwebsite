import {
  PORTFOLIO_PRODUCTS,
  buildProductSlides,
  resolvePortfolioImageSrc,
} from "./portfolioProductMenus";

export const PORTFOLIO_SLIDE_INTERVAL_MS = 5500;

/** Solutions page portfolio case studies — each row auto-slides role × menu views. */
export const PORTFOLIO_CASE_STUDIES = [
  {
    id: "featured-case-study",
    productLabel: "LeadCliques · Admission CRM",
    title: "AI-Powered Admission CRM",
    description:
      "Transform enquiry management with AI lead scoring, counselor copilot, and automated nurture sequences across the enrollment lifecycle.",
    metrics: [
      { value: "65%", label: "Faster admissions" },
      { value: "45%", label: "Higher conversions" },
      { value: "3.2x", label: "ROI within 12 months" },
    ],
    imagePosition: "left",
    productKey: "leadcliques",
  },
  {
    id: "featured-case-study-workforce",
    productLabel: "StaffCliques · Workforce Monitoring",
    title: "Employee Management & Staff Monitoring",
    description:
      "Unify attendance, live activity tracking, and productivity analytics with AI alerts for idle time and compliance gaps across distributed teams.",
    metrics: [
      { value: "87.6%", label: "Average productivity" },
      { value: "1,248", label: "Employees managed" },
      { value: "99.99%", label: "Platform uptime" },
    ],
    imagePosition: "right",
    productKey: "staffcliques",
  },
  {
    id: "featured-case-study-proctoring",
    productLabel: "ProcSquare · Live Proctoring",
    title: "Live Online Proctoring Platform",
    description:
      "Secure remote exams with real-time candidate monitoring, AI violation detection, identity verification, and integrity scoring at scale.",
    metrics: [
      { value: "2,543", label: "Candidates proctored" },
      { value: "156", label: "Violations auto-flagged" },
      { value: "99.99%", label: "Platform uptime" },
    ],
    imagePosition: "left",
    productKey: "procsquare",
  },
  {
    id: "featured-case-study-school",
    productLabel: "SchoolTrix · Institution & Mobile Platform",
    title: "School Management Platform & Native Apps",
    description:
      "Run the institution from a web command center and extend delivery through native mobile apps—gamified learning for students, fee and progress visibility for parents, and executive oversight for administrators with live sync.",
    metrics: [
      { value: "2,543", label: "Students managed" },
      { value: "12", label: "Mobile modules" },
      { value: "\u20B948.75L", label: "Fees collected" },
    ],
    imagePosition: "right",
    productKey: "schooltrix",
  },
  {
    id: "featured-case-study-talent",
    productLabel: "Talentrix · Campus Recruitment",
    title: "AI-Powered Talent & Recruitment Platform",
    description:
      "Run Andhra campus placement drives with live interview grids, NeuralTrix AI interviewing, and AI resume matching to improve shortlist quality.",
    metrics: [
      { value: "1,248", label: "Applications processed" },
      { value: "856", label: "Candidates screened" },
      { value: "32", label: "Hires made" },
    ],
    imagePosition: "left",
    productKey: "talentrix",
  },
  {
    id: "featured-case-study-hospital",
    productLabel: "MedClues · Hospital Operations",
    title: "AI-Powered Hospital & Patient Management",
    description:
      "Manage OPD, IPD, pharmacy, and laboratory workflows with live patient vitals monitoring and AI insights for bed demand and readmission risk.",
    metrics: [
      { value: "3,245", label: "Patients managed" },
      { value: "76.4%", label: "Average occupancy" },
      { value: "\u20B948.75L", label: "Revenue tracked" },
    ],
    imagePosition: "right",
    productKey: "medclues",
  },
  {
    id: "featured-case-study-telecalling",
    productLabel: "TeleBuddy · IVR Telecalling",
    title: "IVR-Based AI Telecalling Platform",
    description:
      "Automate outbound campaigns with IVR flows, predictive dialing, follow-up sequences, and AI campaign insights across voice and messaging channels.",
    metrics: [
      { value: "125K+", label: "Calls handled" },
      { value: "12.45%", label: "Conversion rate" },
      { value: "18%", label: "AI performance uplift" },
    ],
    imagePosition: "left",
    productKey: "telebuddy",
  },
].map((study) => {
  const product = PORTFOLIO_PRODUCTS.find((entry) => entry.key === study.productKey);
  const slides = buildProductSlides(product).map((slide) => ({
    ...slide,
    src: resolvePortfolioImageSrc(slide.src),
  }));

  return {
    ...study,
    images: slides,
    autoAdvanceMs: PORTFOLIO_SLIDE_INTERVAL_MS,
    href: "/#page-contact",
  };
});

export function getPortfolioCaseStudies() {
  return PORTFOLIO_CASE_STUDIES;
}
