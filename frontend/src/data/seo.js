import services from "./services";
import solutions from "./solutions";
import industries from "./industries";
import caseStudies from "./caseStudies";
import blogArticles from "./blog";
import { env } from "../lib/env";

const SITE_NAME = "NeuralTrix AI";
const DEFAULT_DESCRIPTION =
  "NeuralTrix AI delivers enterprise intelligent automation, generative AI, and application modernization programs with governed integration.";

export const SITE_URL = env("SITE_URL", "https://neuraltrix.ai").replace(/\/$/, "");
export const DEFAULT_OG_IMAGE = "/neuraltrix-header-logo.png";

const STATIC_PAGES = {
  "/": {
    title: `${SITE_NAME} | Enterprise AI & Application Services`,
    description: DEFAULT_DESCRIPTION,
  },
  "/services": {
    title: `Services | ${SITE_NAME}`,
    description: "Enterprise services for intelligent automation, generative AI, application modernization, data platforms, and cloud engineering.",
  },
  "/solutions": {
    title: `Platforms | ${SITE_NAME}`,
    description: "Pre-built agent and copilot modules you can deploy inside CRM, ERP, and internal tools.",
  },
  "/industries": {
    title: `Industries | ${SITE_NAME}`,
    description: "Sector-specific intelligent automation and application modernization aligned to industry governance requirements.",
  },
  "/case-studies": {
    title: `Production Test Cases | ${SITE_NAME}`,
    description: "Live-tested AI systems NeuralTrix built and validated as production-ready across industry sectors.",
  },
  "/about": {
    title: `About Us | ${SITE_NAME}`,
    description: "A senior-led firm delivering governed intelligent automation and application modernization for enterprise clients.",
  },
  "/team": {
    title: `Leadership | ${SITE_NAME}`,
    description: "Senior practitioners accountable for scope and delivery outcomes.",
  },
  "/testimonials": {
    title: `Engagement | ${SITE_NAME}`,
    description: "Engagement principles for prospective partners and pilot programs.",
  },
  "/careers": {
    title: `Careers | ${SITE_NAME}`,
    description: "Join NeuralTrix AI to deliver governed AI and software programs.",
  },
  "/partners": {
    title: `Partners | ${SITE_NAME}`,
    description: "Technology partners that support enterprise AI delivery.",
  },
  "/security": {
    title: `Security | ${SITE_NAME}`,
    description: "Governance, access control, and security practices for AI programs.",
  },
  "/blog": {
    title: `News & Media | ${SITE_NAME}`,
    description: "Technical articles and field notes from delivery programs.",
  },
  "/research-innovation": {
    title: `Research & Innovation | ${SITE_NAME}`,
    description: "Controlled experimentation on intelligent automation and application integration before production programs.",
  },
  "/privacy-policy": {
    title: `Privacy Policy | ${SITE_NAME}`,
    description: "Privacy policy for NeuralTrix AI website and services.",
  },
  "/terms-and-conditions": {
    title: `Terms and Conditions | ${SITE_NAME}`,
    description: "Terms and conditions for use of NeuralTrix AI services and website.",
  },
  "/legal-templates": {
    title: `Legal Templates | ${SITE_NAME}`,
    description: "Legal template resources for enterprise AI engagements.",
  },
};

function matchDynamic(pathname, prefix, items, titleFn, descFn) {
  if (!pathname.startsWith(prefix)) return null;
  const slug = pathname.slice(prefix.length).replace(/\/$/, "");
  if (!slug) return null;
  const item = items.find((entry) => entry.slug === slug);
  if (!item) return null;
  return {
    title: `${titleFn(item)} | ${SITE_NAME}`,
    description: descFn(item),
  };
}

export function getSeoForPath(pathname) {
  const path = pathname.replace(/\/$/, "") || "/";
  if (STATIC_PAGES[path]) {
    return { ...STATIC_PAGES[path], noindex: false, ogImage: DEFAULT_OG_IMAGE };
  }

  const dynamic =
    matchDynamic(path, "/services/", services, (s) => s.title, (s) => s.shortDesc) ||
    matchDynamic(path, "/solutions/", solutions, (s) => s.title, (s) => s.shortDesc) ||
    matchDynamic(path, "/industries/", industries, (s) => s.title, (s) => s.shortDesc) ||
    matchDynamic(path, "/case-studies/", caseStudies, (s) => s.title, (s) => s.shortDesc) ||
    matchDynamic(path, "/blog/", blogArticles, (a) => a.title, (a) => a.excerpt);

  if (dynamic) {
    return { ...dynamic, noindex: false, ogImage: DEFAULT_OG_IMAGE };
  }

  return {
    title: `Page not found | ${SITE_NAME}`,
    description: DEFAULT_DESCRIPTION,
    noindex: true,
    ogImage: DEFAULT_OG_IMAGE,
  };
}
