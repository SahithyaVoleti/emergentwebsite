/** Legal template download paths — shared by page and tests. */
export const LEGAL_RISK_DASHBOARD = "/legal-templates/legal-risk-dashboard.pdf";

export const JURISDICTION_TEMPLATES = [
  { title: "India Jurisdiction Clause", file: "/legal-templates/jurisdiction-template-india.pdf" },
  { title: "United Kingdom Jurisdiction Clause", file: "/legal-templates/jurisdiction-template-uk.pdf" },
  { title: "European Union Jurisdiction Clause", file: "/legal-templates/jurisdiction-template-eu.pdf" },
  { title: "United States (Delaware) Jurisdiction Clause", file: "/legal-templates/jurisdiction-template-us-delaware.pdf" },
  { title: "Singapore Jurisdiction Clause", file: "/legal-templates/jurisdiction-template-singapore.pdf" },
  { title: "UAE (DIFC) Jurisdiction Clause", file: "/legal-templates/jurisdiction-template-uae-difc.pdf" },
];

export const PRIVACY_TEMPLATES = [
  { title: "India Privacy Request Template", file: "/legal-templates/privacy-request-template-india.pdf" },
  { title: "United Kingdom Privacy Request Template", file: "/legal-templates/privacy-request-template-uk.pdf" },
  { title: "European Union Privacy Request Template", file: "/legal-templates/privacy-request-template-eu.pdf" },
  { title: "United States Privacy Request Template", file: "/legal-templates/privacy-request-template-us.pdf" },
  { title: "Singapore Privacy Request Template", file: "/legal-templates/privacy-request-template-singapore.pdf" },
  { title: "UAE Privacy Request Template", file: "/legal-templates/privacy-request-template-uae.pdf" },
];

export const ALL_LEGAL_TEMPLATE_FILES = [
  LEGAL_RISK_DASHBOARD,
  ...JURISDICTION_TEMPLATES.map((t) => t.file),
  ...PRIVACY_TEMPLATES.map((t) => t.file),
];
