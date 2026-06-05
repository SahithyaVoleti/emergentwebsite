/**
 * Enterprise site navigation — single source of truth for header (and footer sync).
 *
 * Framework:
 * - What We Offer → Services
 * - Platforms → Products / Solutions
 * - Industries → Industry coverage
 * - Why Us → Case Studies
 * - Research & Innovation → Research hub
 * - Company → Corporate
 *
 * Primary nav sequence: offerings → platforms → industries → proof → innovation → company.
 */

export const TOP_NAV = {
  services: {
    label: "What We Offer",
    basePath: "/services",
    testId: "services",
    viewAllLabel: "View all services",
    dropdownVariant: "wide",
  },
  products: {
    label: "Platforms",
    basePath: "/solutions",
    testId: "products",
    viewAllLabel: "View all platforms",
  },
  industries: {
    label: "Industries",
    basePath: "/industries",
    testId: "industries",
    viewAllLabel: "View all industries",
  },
  caseStudies: { label: "Why Us", href: "/case-studies", testId: "case-studies" },
  research: { label: "Research & Innovation", href: "/research-innovation", testId: "research-innovation" },
  company: {
    label: "Company",
    basePath: "/about",
    testId: "company",
    viewAllLabel: "View all company",
  },
};

/** Primary nav sequence: offerings → segments → proof → innovation → company. */
export const TOP_NAV_ORDER = [
  "services",
  "products",
  "industries",
  "caseStudies",
  "research",
  "company",
];

/** Client delivery and implementation programs (not SaaS products). */
export const SERVICES_NAV = [
  { label: "AI Consulting", href: "/services/artificial-intelligence" },
  { label: "Generative AI Solutions", href: "/services/generative-ai" },
  { label: "AI Agent Development", href: "/services/ai-agents" },
  { label: "Enterprise AI Automation", href: "/services/ai-agents" },
  { label: "Computer Vision Solutions", href: "/services/artificial-intelligence" },
  { label: "NLP & Speech AI", href: "/services/generative-ai" },
  { label: "AI SaaS Development", href: "/services/custom-software" },
  { label: "Data Engineering & Analytics", href: "/services/data-engineering" },
  { label: "Cloud & MLOps", href: "/services/devops" },
  { label: "AI System Integration", href: "/services/custom-software" },
];

/** Product ecosystem categories — routes to accelerators and program hubs. */
export const PRODUCTS_NAV = [
  { label: "Enterprise AI", href: "/solutions" },
  { label: "Education AI", href: "/solutions/talentify-ai" },
  { label: "Communication AI", href: "/solutions/quikbiz-ai" },
  { label: "Intelligence Systems", href: "/solutions/intellibot-ai" },
  { label: "Governance & Security", href: "/security" },
];

/** Industry coverage for enterprise buyers. */
export const INDUSTRIES_NAV = [
  { label: "Education", href: "/industries/education" },
  { label: "Healthcare", href: "/industries/healthcare" },
  { label: "Agriculture", href: "/industries/agriculture" },
  { label: "Biotechnology", href: "/industries/biotechnology" },
  { label: "Manufacturing", href: "/industries/manufacturing" },
  { label: "Enterprise Operations", href: "/industries/retail" },
  { label: "Government", href: "/industries/government" },
];

/** Corporate and company information. */
export const COMPANY_NAV = [
  { label: "About Us", href: "/about" },
  { label: "Leadership", href: "/team" },
  { label: "Careers", href: "/careers" },
  { label: "Partners", href: "/partners" },
  { label: "News & Media", href: "/blog" },
];

export const PRIMARY_NAV_CTA = {
  label: "Consult Now",
  topic: "consultation",
};

export function flattenProductLinks(groups = PRODUCTS_NAV) {
  if (!groups?.length) return [];
  if (groups[0]?.items) {
    return groups.flatMap((section) => section.items);
  }
  return groups;
}

export function isPathActive(pathname, href) {
  if (!href) return false;
  const base = href.split("#")[0].replace(/\/$/, "") || "/";
  const path = pathname.replace(/\/$/, "") || "/";
  if (href.includes("#")) {
    return path === base;
  }
  if (isExactHubPath(base)) {
    return path === base;
  }
  return path === base || path.startsWith(`${base}/`);
}

function isExactHubPath(basePath) {
  return basePath === "/industries" || basePath === "/services" || basePath === "/solutions";
}

export function isNavSectionActive(pathname, basePath, links = []) {
  const base = basePath.replace(/\/$/, "") || "/";
  const path = pathname.replace(/\/$/, "") || "/";
  if (path === base || path.startsWith(`${base}/`)) return true;
  return links.some((link) => isPathActive(pathname, link.href));
}
