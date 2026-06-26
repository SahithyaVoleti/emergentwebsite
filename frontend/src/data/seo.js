import services from "./services";
import solutions from "./solutions";
import industries from "./industries";
import caseStudies from "./caseStudies";
import blogArticles from "./blog";
import { env } from "../lib/env";

const SITE_NAME = "NeuralTrix AI";
const DEFAULT_DESCRIPTION =
  "NeuralTrix AI transforms existing products into AI-enabled software, fine-tunes models for production, and builds AI-native SaaS across interdisciplinary industries.";

export const SITE_URL = env("SITE_URL", "https://neuraltrix.ai").replace(/\/$/, "");
export const DEFAULT_OG_IMAGE = "/neuraltrix-header-logo.png";

const STATIC_PAGES = {
  "/": {
    title: `${SITE_NAME} | AI Product Transformation & SaaS Engineering`,
    description: DEFAULT_DESCRIPTION,
  },
  "/services": {
    title: `Services | ${SITE_NAME}`,
    description:
      "AI product transformation, model fine-tuning, and platform engineering services for enterprise software teams.",
  },
  "/solutions": {
    title: `Products | ${SITE_NAME}`,
    description:
      "AI-native SaaS products and accelerators designed and developed for interdisciplinary industry deployment.",
  },
  "/industries": {
    title: `Industries | ${SITE_NAME}`,
    description:
      "Interdisciplinary AI product transformation and SaaS programs across healthcare, finance, education, and other regulated sectors.",
  },
  "/case-studies": {
    title: `Production Test Cases | ${SITE_NAME}`,
    description: "Live-tested AI systems NeuralTrix built and validated as production-ready across industry sectors.",
  },
  "/research-innovation": {
    title: `Research & Innovation | ${SITE_NAME}`,
    description:
      "Research programs, innovation tracks, and production test cases for governed intelligent automation delivery.",
  },
  "/about": {
    title: `About Us | ${SITE_NAME}`,
    description:
      "AI transformation company: product fine-tuning, AI-enabled software, interdisciplinary SaaS engineering, team, and security practices.",
  },
  "/blog": {
    title: `News & Media | ${SITE_NAME}`,
    description: "Technical articles and field notes from delivery programs.",
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
    description: "Legal templates are provided on the Terms and Privacy pages.",
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
