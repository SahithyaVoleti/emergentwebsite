import { hq } from "../lib/heroImageThemes.js";

/**
 * Content-suitable imagery for main service pillars and subservices.
 * Prefer on-brand local assets; remote sources are seeded via `npm run seed:service-images`.
 */

export const PILLAR_IMAGES = {
  "artificial-intelligence": {
    card: "/media/service-model-fine-tuning-ml.png",
    hero: "/media/service-model-fine-tuning-ml.png",
    capabilities: "/media/home/what-we-deliver.png",
    alt: {
      card: "Applied AI engineering — neural model integration and evaluation workflows",
      hero: "Engineer reviewing applied AI model integration and evaluation results",
      capabilities: "Applied AI delivery review with intelligent interface overlays",
    },
  },
  "data-engineering": {
    card: "/media/service-data-engineering.png",
    hero: "/media/service-data-engineering.png",
    capabilities: "/media/subservices/data-warehouse-lakehouse.jpg",
    alt: {
      card: "Enterprise data engineering — governed analytics and pipeline platforms",
      hero: "Data engineering workspace with analytics dashboards and pipeline metrics",
      capabilities: "Enterprise data warehouse and analytics platform dashboard",
    },
  },
  "generative-ai": {
    card: "/media/service-ai-product-transformation.png",
    hero: "/media/service-ai-product-transformation.png",
    capabilities: "/media/home/what-we-deliver.png",
    alt: {
      card: "Generative AI solutions — agents, copilots, and enterprise workflow integration",
      hero: "Generative AI capability integrated across enterprise product surfaces",
      capabilities: "Generative AI feature delivery with copilot and workflow interfaces",
    },
  },
  devops: {
    card: "/media/service-cloud-infrastructure.png",
    hero: "/media/service-cloud-infrastructure.png",
    capabilities: "/media/subservices/cicd-release-automation.jpg",
    alt: {
      card: "Platform reliability and DevOps — CI/CD, SRE, and production observability",
      hero: "Production infrastructure with automated delivery and reliability controls",
      capabilities: "Continuous delivery pipeline and platform automation engineering",
    },
  },
  "development-services": {
    card: "/media/service-saas-platform-engineering.png",
    hero: "/media/service-saas-platform-engineering.png",
    capabilities: "/media/subservices/llm-engineering.jpg",
    alt: {
      card: "Software product engineering — mobile, APIs, and full-stack delivery",
      hero: "Product engineering workspace building web, mobile, and API platforms",
      capabilities: "Custom software engineering with code review and release discipline",
    },
  },
};

/**
 * Local image path per subservice id.
 * Each entry is unique and aligned to the offering theme.
 */
export const SUBSERVICE_IMAGES = {
  "applied-ai-advisory": "/media/subservices/applied-ai-advisory.jpg",
  "context-retrieval-systems": "/media/subservices/retrieval-augmented-generation.jpg",
  "language-model-engineering": "/media/subservices/llm-engineering.jpg",
  "intelligent-application-delivery": "/media/service-data-engineering.png",
  "ai-enabled-software-delivery": "/media/home/what-we-deliver.png",
  "enterprise-ai-integration": "/media/subservices/enterprise-ai-integration.jpg",
  "decision-analytics-engineering": "/media/subservices/observability-sre.jpg",
  "enterprise-data-repository-design": "/media/subservices/data-warehouse-lakehouse.jpg",
  "training-data-preparation": "/media/subservices/predictive-analytics.jpg",
  "autonomous-agent-engineering": "/media/subservices/autonomous-agent-engineering.jpg",
  "conversational-experience-engineering": "/media/subservices/conversational-experience-engineering.jpg",
  "model-adaptation-alignment": "/media/service-model-fine-tuning-ml.png",
  "foundation-model-integration": "/media/subservices/foundation-model-integration.jpg",
  "generative-capability-integration": "/media/home/what-we-do.png",
  "adaptive-intelligence-systems": "/media/subservices/adaptive-intelligence-systems.jpg",
  "role-based-copilot-engineering": "/media/subservices/role-based-copilot-engineering.jpg",
  "intelligent-operations-automation": "/media/subservices/intelligent-operations-automation.jpg",
  "delivery-pipeline-advisory": "/media/subservices/delivery-pipeline-advisory.jpg",
  "continuous-delivery-engineering": "/media/subservices/cicd-release-automation.jpg",
  "reliability-resilience-engineering": "/media/service-cloud-infrastructure.png",
  "model-performance-observability": "/media/subservices/model-performance-observability.jpg",
  "mobile-engineering": "/media/subservices/mobile-engineering.jpg",
  "custom-software-engineering": "/media/subservices/custom-software-engineering.jpg",
  "embedded-engineering-teams": "/media/subservices/embedded-engineering-teams.jpg",
  "end-to-end-product-development": "/media/subservices/end-to-end-product-development.jpg",
  "api-platform-engineering": "/media/subservices/api-platform-engineering.jpg",
};

/** Remote sources for subservice paths that are seeded into public/media. */
export const SUBSERVICE_IMAGE_DOWNLOADS = {
  "/media/subservices/applied-ai-advisory.jpg": hq("photo-1600880292203-757bb62b4baf"),
  "/media/subservices/enterprise-ai-integration.jpg": hq("photo-1563013544-824ae1b704d3"),
  "/media/subservices/autonomous-agent-engineering.jpg": hq("photo-1620712943543-bcc4688e7485"),
  "/media/subservices/conversational-experience-engineering.jpg": hq("photo-1577563908411-5077b6dc7624"),
  "/media/subservices/foundation-model-integration.jpg": hq("photo-1677442136019-21780ecad995"),
  "/media/subservices/adaptive-intelligence-systems.jpg": hq("photo-1526374965328-7f61d4dc18c5"),
  "/media/subservices/role-based-copilot-engineering.jpg": hq("photo-1551434678-e076c223a692"),
  "/media/subservices/intelligent-operations-automation.jpg": hq("photo-1551288049-bebda4e38f71"),
  "/media/subservices/delivery-pipeline-advisory.jpg": hq("photo-1542744173-8e7e53415bb0"),
  "/media/subservices/model-performance-observability.jpg": hq("photo-1554224155-6726b3ff858f"),
  "/media/subservices/mobile-engineering.jpg": hq("photo-1511707171634-5f897ff02aa9"),
  "/media/subservices/custom-software-engineering.jpg": hq("photo-1633356122544-f134324a6cee"),
  "/media/subservices/embedded-engineering-teams.jpg": hq("photo-1522071820081-009f0129c71c"),
  "/media/subservices/end-to-end-product-development.jpg": hq("photo-1552664730-d307ca884978"),
  "/media/subservices/api-platform-engineering.jpg": hq("photo-1555949963-aa79dcee981c"),
};

const SUBSERVICE_ALTS = {
  "applied-ai-advisory": "AI strategy workshop reviewing use-case roadmap and pilot scope",
  "context-retrieval-systems": "Retrieval analytics dashboard with search performance and knowledge indexing metrics",
  "language-model-engineering": "Engineer configuring language model APIs and inference routes in an IDE",
  "intelligent-application-delivery": "Intelligent application dashboard with embedded scoring and decision support",
  "ai-enabled-software-delivery": "Software delivery workspace integrating AI components under release discipline",
  "enterprise-ai-integration": "Enterprise platform integration with secure API and identity boundaries",
  "decision-analytics-engineering": "Decision analytics dashboard with operational KPIs and trend monitoring",
  "enterprise-data-repository-design": "Enterprise data warehouse dashboard with governed analytics views",
  "training-data-preparation": "Analytics platform supporting training dataset preparation and quality review",
  "autonomous-agent-engineering": "Autonomous agent and workflow automation engineering environment",
  "conversational-experience-engineering": "Conversational assistant interface for multi-channel enterprise support",
  "model-adaptation-alignment": "Domain model fine-tuning and neural network evaluation workspace",
  "foundation-model-integration": "Commercial foundation model integration with enterprise routing controls",
  "generative-capability-integration": "Generative AI capability embedded in enterprise product interfaces",
  "adaptive-intelligence-systems": "Adaptive intelligence system with feedback signals and policy guardrails",
  "role-based-copilot-engineering": "Engineering team building role-based copilots for enterprise workflows",
  "intelligent-operations-automation": "Intelligent operations dashboard with automated incident correlation",
  "delivery-pipeline-advisory": "DevOps maturity review and delivery pipeline improvement planning session",
  "continuous-delivery-engineering": "Continuous delivery infrastructure with automated deployment pipelines",
  "reliability-resilience-engineering": "Production infrastructure engineered for reliability and resilience",
  "model-performance-observability": "Model observability dashboard tracking latency, drift, and quality metrics",
  "mobile-engineering": "Mobile application engineering across iOS, Android, and cross-platform stacks",
  "custom-software-engineering": "Custom software engineering with modern IDE and test automation",
  "embedded-engineering-teams": "Embedded engineering team collaborating with client product organization",
  "end-to-end-product-development": "Product team planning end-to-end discovery, build, and launch milestones",
  "api-platform-engineering": "API platform engineering with service design and integration patterns",
};

export function getPillarCardImage(pillarId) {
  return PILLAR_IMAGES[pillarId]?.card ?? "/media/service-model-fine-tuning-ml.png";
}

export function getPillarHeroImage(pillarId) {
  return PILLAR_IMAGES[pillarId]?.hero ?? getPillarCardImage(pillarId);
}

export function getPillarIntroMedia(pillarId, pillarLabel) {
  const pillar = PILLAR_IMAGES[pillarId];
  return {
    src: getPillarCardImage(pillarId),
    alt: pillar?.alt?.card ?? `${pillarLabel} delivery overview`,
  };
}

export function getPillarCapabilityMedia(pillarId) {
  const pillar = PILLAR_IMAGES[pillarId];
  if (!pillar) {
    return {
      src: "/media/home/what-we-deliver.png",
      alt: "Engineering delivery review on a laptop",
    };
  }
  return {
    src: pillar.capabilities,
    alt: pillar.alt.capabilities,
  };
}

export function getSubserviceCardImage(subserviceId) {
  return SUBSERVICE_IMAGES[subserviceId] ?? `/media/subservices/${subserviceId}.jpg`;
}

export function getSubserviceImageAlt(subserviceId, fallbackTitle = "Service delivery") {
  return SUBSERVICE_ALTS[subserviceId] ?? `${fallbackTitle} delivery overview`;
}

export function getSubserviceIntroMedia(subserviceId, subserviceTitle) {
  return {
    src: getSubserviceCardImage(subserviceId),
    alt: getSubserviceImageAlt(subserviceId, subserviceTitle),
  };
}

export function getSubserviceCapabilityMedia(subserviceId, pillarId, subserviceTitle) {
  if (SUBSERVICE_IMAGES[subserviceId]) {
    return {
      src: getSubserviceCardImage(subserviceId),
      alt: getSubserviceImageAlt(subserviceId, subserviceTitle),
    };
  }
  return getPillarCapabilityMedia(pillarId);
}

/** Remote URLs to fetch into public/media (path → url). */
export function getServiceImageDownloadMap() {
  return { ...SUBSERVICE_IMAGE_DOWNLOADS };
}

/** @deprecated Use SUBSERVICE_IMAGES / SUBSERVICE_IMAGE_DOWNLOADS */
export const SUBSERVICE_IMAGE_SOURCES = SUBSERVICE_IMAGE_DOWNLOADS;
