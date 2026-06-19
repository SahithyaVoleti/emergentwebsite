import services from "../data/services";
import solutions from "../data/solutions";
import industries from "../data/industries";
import blogArticles from "../data/blog";
import caseStudies from "../data/caseStudies";
import { DEFAULT_META_DESCRIPTION, DEFAULT_PAGE_TITLE } from "./company";

export const STATIC_PAGE_META = {
  "/": {
    title: DEFAULT_PAGE_TITLE,
    description: DEFAULT_META_DESCRIPTION,
  },
  "/about": {
    title: `About Us | ${DEFAULT_PAGE_TITLE.split(" | ")[0]}`,
    description:
      "Learn how NeuralTrix AI delivers applied AI engineering with disciplined, senior-led execution for early customer programs.",
  },
  "/team": {
    title: `Our Team | ${DEFAULT_PAGE_TITLE.split(" | ")[0]}`,
    description:
      "Meet the senior practitioners at NeuralTrix AI responsible for scoped delivery and accountable outcomes.",
  },
  "/solutions": {
    title: `Solutions | ${DEFAULT_PAGE_TITLE.split(" | ")[0]}`,
    description:
      "Explore NeuralTrix AI solution accelerators for document intelligence, healthcare, talent, commerce, and knowledge automation.",
  },
  "/industries": {
    title: `Industries | ${DEFAULT_PAGE_TITLE.split(" | ")[0]}`,
    description:
      "Industry-specific AI engineering for commerce, healthcare, finance, education, manufacturing, sports, and property technology.",
  },
  "/case-studies": {
    title: `Case Studies | ${DEFAULT_PAGE_TITLE.split(" | ")[0]}`,
    description:
      "Engineering showcases and delivery narratives from NeuralTrix AI pilot programs and scoped customer workstreams.",
  },
  "/blog": {
    title: `Blog | ${DEFAULT_PAGE_TITLE.split(" | ")[0]}`,
    description:
      "Articles on applied AI engineering, delivery discipline, and production systems from NeuralTrix AI.",
  },
  "/careers": {
    title: `Careers | ${DEFAULT_PAGE_TITLE.split(" | ")[0]}`,
    description:
      "Open roles and operating principles for engineers joining NeuralTrix AI delivery programs.",
  },
  "/testimonials": {
    title: `How We Work | ${DEFAULT_PAGE_TITLE.split(" | ")[0]}`,
    description:
      "Engagement principles and operating commitments for discovery and pilot programs with NeuralTrix AI.",
  },
  "/partners": {
    title: `Technology Partners | ${DEFAULT_PAGE_TITLE.split(" | ")[0]}`,
    description:
      "Platform partnerships that strengthen NeuralTrix AI delivery across cloud, AI, and data infrastructure.",
  },
  "/security": {
    title: `Security | ${DEFAULT_PAGE_TITLE.split(" | ")[0]}`,
    description:
      "Security posture, data handling, and delivery safeguards for NeuralTrix AI customer programs.",
  },
  "/privacy-policy": {
    title: `Privacy Policy | ${DEFAULT_PAGE_TITLE.split(" | ")[0]}`,
    description: "Privacy policy for NeuralTrix AI website visitors and contact submissions.",
  },
  "/terms-and-conditions": {
    title: `Terms & Conditions | ${DEFAULT_PAGE_TITLE.split(" | ")[0]}`,
    description: "Terms and conditions governing use of the NeuralTrix AI website.",
  },
  "/legal-templates": {
    title: `Legal Templates | ${DEFAULT_PAGE_TITLE.split(" | ")[0]}`,
    description:
      "Downloadable legal and privacy request templates referenced by NeuralTrix AI compliance materials.",
  },
};

function matchDynamicMeta(pathname) {
  const serviceMatch = pathname.match(/^\/services\/([^/]+)$/);
  if (serviceMatch) {
    const service = services.find((item) => item.slug === serviceMatch[1]);
    if (service) {
      return {
        title: `${service.title} | Services | NeuralTrix AI`,
        description: service.shortDesc || service.heroDesc || DEFAULT_META_DESCRIPTION,
      };
    }
  }

  const solutionMatch = pathname.match(/^\/solutions\/([^/]+)$/);
  if (solutionMatch) {
    const solution = solutions.find((item) => item.slug === solutionMatch[1]);
    if (solution) {
      return {
        title: `${solution.title} | Solutions | NeuralTrix AI`,
        description: solution.shortDesc || solution.heroDesc || DEFAULT_META_DESCRIPTION,
      };
    }
  }

  const industryMatch = pathname.match(/^\/industries\/([^/]+)$/);
  if (industryMatch) {
    const industry = industries.find((item) => item.slug === industryMatch[1]);
    if (industry) {
      return {
        title: `${industry.title} | Industries | NeuralTrix AI`,
        description: industry.shortDesc || industry.heroDesc || DEFAULT_META_DESCRIPTION,
      };
    }
  }

  const caseStudyMatch = pathname.match(/^\/case-studies\/([^/]+)$/);
  if (caseStudyMatch) {
    const study = caseStudies.find((item) => item.slug === caseStudyMatch[1]);
    if (study) {
      return {
        title: `${study.title} | Case Studies | NeuralTrix AI`,
        description: study.summary || study.heroDesc || DEFAULT_META_DESCRIPTION,
      };
    }
  }

  const blogMatch = pathname.match(/^\/blog\/([^/]+)$/);
  if (blogMatch) {
    const article = blogArticles.find((item) => item.slug === blogMatch[1]);
    if (article) {
      return {
        title: `${article.title} | Blog | NeuralTrix AI`,
        description: article.excerpt || DEFAULT_META_DESCRIPTION,
      };
    }
  }

  return null;
}

export function resolvePageMeta(pathname) {
  if (STATIC_PAGE_META[pathname]) {
    return STATIC_PAGE_META[pathname];
  }

  const dynamicMeta = matchDynamicMeta(pathname);
  if (dynamicMeta) {
    return dynamicMeta;
  }

  if (pathname === "/services") {
    return {
      title: `Services | NeuralTrix AI`,
      description: DEFAULT_META_DESCRIPTION,
    };
  }

  return {
    title: `Page Not Found | NeuralTrix AI`,
    description: "The page you requested could not be found.",
  };
}
