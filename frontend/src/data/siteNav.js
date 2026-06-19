/**
 * Enterprise site navigation — single source of truth for header and footer.
 */
import services from "./services";
import solutions from "./solutions";
import industries from "./industries";
import { env } from "../lib/env";

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
  caseStudies: { label: "Test Cases", href: "/case-studies", testId: "case-studies" },
  research: { label: "Research & Innovation", href: "/research-innovation", testId: "research-innovation" },
  company: {
    label: "Company",
    basePath: "/about",
    testId: "company",
    viewAllLabel: "View all company",
  },
};

export const TOP_NAV_ORDER = [
  "services",
  "products",
  "industries",
  "caseStudies",
  "research",
  "company",
];

/** One entry per service slug from services.js */
export const SERVICES_NAV = services.map((service) => ({
  label: service.title,
  href: `/services/${service.slug}`,
}));

/** All solution accelerators + governance hub */
export const PRODUCTS_NAV = [
  { label: "Enterprise AI", href: "/solutions" },
  ...solutions.map((solution) => ({
    label: solution.title,
    href: `/solutions/${solution.slug}`,
  })),
  { label: "Governance & Security", href: "/security" },
];

/** All industry programs */
export const INDUSTRIES_NAV = industries.map((industry) => ({
  label: industry.title,
  href: `/industries/${industry.slug}`,
}));

export const COMPANY_NAV = [
  { label: "About Us", href: "/about" },
  { label: "Leadership", href: "/team" },
  { label: "Engagement", href: "/testimonials" },
  { label: "Careers", href: "/careers" },
  { label: "Partners", href: "/partners" },
  { label: "News & Media", href: "/blog" },
];

export const FOOTER_COLUMNS = [
  {
    title: "Offerings",
    links: [
      { label: "Services", href: "/services" },
      { label: "Platforms", href: "/solutions" },
      { label: "Industries", href: "/industries" },
      { label: "Test Cases", href: "/case-studies" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Leadership", href: "/team" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/#page-contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Research", href: "/research-innovation" },
      { label: "Engagement", href: "/testimonials" },
      { label: "Partners", href: "/partners" },
    ],
  },
];

export const LEGAL_LINKS = [
  { label: "Privacy", href: "/privacy-policy" },
  { label: "Terms", href: "/terms-and-conditions" },
  { label: "Legal", href: "/legal-templates" },
];

export const SOCIAL_LINKS = {
  linkedin: env("LINKEDIN_URL"),
  twitter: env("TWITTER_URL"),
};

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

/** Secondary CTA labels for PageStandardSections by page key */
export const SECONDARY_CTA_BY_PAGE = {
  services: { label: "View services", href: "/services" },
  solutions: { label: "View platforms", href: "/solutions" },
  industries: { label: "View industries", href: "/industries" },
  about: { label: "View leadership", href: "/team" },
  team: { label: "View careers", href: "/careers" },
  careers: { label: "View company", href: "/about" },
  blog: { label: "View case studies", href: "/case-studies" },
  caseStudies: { label: "View services", href: "/services" },
  detail: { label: "View services", href: "/services" },
  legal: { label: "Contact us", href: "#page-contact" },
  security: { label: "View platforms", href: "/solutions" },
  testimonials: { label: "View case studies", href: "/case-studies" },
  partners: { label: "View company", href: "/about" },
  research: { label: "View platforms", href: "/solutions" },
};
