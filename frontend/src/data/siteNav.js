/**
 * Enterprise site navigation — single source of truth for header and footer.
 */
import services, { servicesForDisplay } from "./services";
import solutions from "./solutions";
import industries from "./industries";
import { env } from "../lib/env";

export const TOP_NAV = {
  services: {
    label: "What We Offer",
    basePath: "/services",
    testId: "services",
    viewAllLabel: "View all services",
    dropdownVariant: "pillar",
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
  company: {
    label: "Company",
    basePath: "/about",
    testId: "company",
    viewAllLabel: "About us",
  },
};

export const TOP_NAV_ORDER = [
  "services",
  "products",
  "industries",
  "company",
];

/** Group services by practice-area pillar for header mega-menu. */
export function buildServicesNavGroups(list = services) {
  const ordered = servicesForDisplay(list);
  const pillarOrder = [];
  const byPillar = new Map();

  for (const service of ordered) {
    const pillar = service.pillar || "Services";
    if (!byPillar.has(pillar)) {
      byPillar.set(pillar, []);
      pillarOrder.push(pillar);
    }
    byPillar.get(pillar).push({
      label: service.catalogTitle ?? service.title,
      href: `/services/${service.slug}`,
    });
  }

  return pillarOrder.map((pillar) => ({
    pillar,
    items: byPillar.get(pillar),
  }));
}

export const SERVICES_NAV_GROUPS = buildServicesNavGroups();

/** Pillar-only links for the header services dropdown (icon + practice-area label). */
export function buildServicesPillarNav(groups = SERVICES_NAV_GROUPS) {
  return groups.map((group) => ({
    label: group.pillar,
    pillar: group.pillar,
    href: group.items[0]?.href ?? "/services",
    matchHrefs: group.items.map((item) => item.href),
  }));
}

export const SERVICES_PILLAR_NAV = buildServicesPillarNav();

/** Flat service links — used for active-state checks and tests. */
export const SERVICES_NAV = SERVICES_NAV_GROUPS.flatMap((group) => group.items);

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
  {
    label: "Research & Innovation",
    href: "/research-innovation",
    matchHrefs: ["/research-innovation", "/case-studies"],
  },
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
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Leadership", href: "/team" },
      { label: "Research & Innovation", href: "/research-innovation" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/#page-contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "News & Media", href: "/blog" },
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
  label: "Contact us",
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
  return links.some((link) => {
    if (link.matchHrefs?.some((href) => isPathActive(pathname, href))) return true;
    return isPathActive(pathname, link.href);
  });
}

/** Secondary CTA labels for PageStandardSections by page key */
export const SECONDARY_CTA_BY_PAGE = {
  services: { label: "View services", href: "/services" },
  solutions: { label: "View platforms", href: "/solutions" },
  industries: { label: "View industries", href: "/industries" },
  about: { label: "View leadership", href: "/team" },
  team: { label: "View careers", href: "/careers" },
  careers: { label: "View company", href: "/about" },
  blog: { label: "View test cases", href: "/research-innovation#test-cases" },
  caseStudies: { label: "View services", href: "/services" },
  detail: { label: "View services", href: "/services" },
  legal: { label: "Contact us", href: "#page-contact" },
  security: { label: "View platforms", href: "/solutions" },
  testimonials: { label: "View test cases", href: "/research-innovation#test-cases" },
  partners: { label: "View company", href: "/about" },
  research: { label: "View test cases", href: "#test-cases" },
};
