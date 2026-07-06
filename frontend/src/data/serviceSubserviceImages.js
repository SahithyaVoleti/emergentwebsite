import { hq } from "../lib/heroImageThemes";

/** Remote sources used to seed local subservice card assets. */
export const SUBSERVICE_IMAGE_SOURCES = {
  "applied-ai-advisory": hq("photo-1677442136019-21780ecad995"),
  "context-retrieval-systems": hq("photo-1551288049-bebda4e38f71"),
  "language-model-engineering": hq("photo-1517694712202-14dd9538aa97"),
  "intelligent-application-delivery": hq("photo-1555949963-aa79dcee981c"),
  "ai-enabled-software-delivery": hq("photo-1461749280684-dccba630e2f6"),
  "enterprise-ai-integration": hq("photo-1563013544-824ae1b704d3"),
  "decision-analytics-engineering": hq("photo-1460925895917-afdab827c52f"),
  "enterprise-data-repository-design": hq("photo-1551288049-bebda4e38f71"),
  "training-data-preparation": hq("photo-1451187580459-43490279c0fa"),
  "autonomous-agent-engineering": hq("photo-1555949963-aa79dcee981c"),
  "conversational-experience-engineering": hq("photo-1677442136019-21780ecad995"),
  "model-adaptation-alignment": hq("photo-1620712943543-bcc4688e7485"),
  "foundation-model-integration": hq("photo-1517694712202-14dd9538aa97"),
  "generative-capability-integration": hq("photo-1450101499163-c8848c66ca85"),
  "adaptive-intelligence-systems": hq("photo-1526374965328-7f61d4dc18c5"),
  "role-based-copilot-engineering": hq("photo-1677442136019-21780ecad995"),
  "intelligent-operations-automation": hq("photo-1551288049-bebda4e38f71"),
  "delivery-pipeline-advisory": hq("photo-1461749280684-dccba630e2f6"),
  "continuous-delivery-engineering": hq("photo-1558494949-ef010cbdcc31"),
  "reliability-resilience-engineering": hq("photo-1551288049-bebda4e38f71"),
  "model-performance-observability": hq("photo-1558494949-ef010cbdcc31"),
  "mobile-engineering": hq("photo-1485827404703-89b55fcc595e"),
  "custom-software-engineering": hq("photo-1461749280684-dccba630e2f6"),
  "embedded-engineering-teams": hq("photo-1522071820081-009f0129c71c"),
  "end-to-end-product-development": hq("photo-1552664730-d307ca884978"),
  "api-platform-engineering": hq("photo-1558494949-ef010cbdcc31"),
};

export function getSubserviceCardImage(subserviceId) {
  return `/media/subservices/${subserviceId}.jpg`;
}

/** Intro split-band image for a subservice landing page. */
export function getSubserviceIntroMedia(subserviceId, title) {
  return {
    src: getSubserviceCardImage(subserviceId),
    alt: `${title} delivery overview`,
  };
}

const PILLAR_CAPABILITY_IMAGE = {
  "artificial-intelligence": "/media/home/what-we-deliver.png",
  "data-engineering": "/media/services/data-engineering/executive-dashboards.jpg",
  "generative-ai": "/media/service-ai-product-transformation.png",
  devops: "/media/service-cloud-infrastructure.png",
  "development-services": "/media/home/what-we-do.png",
};

const DATA_ENGINEERING_CAPABILITY_IMAGES = {
  "decision-analytics-engineering":
    "/media/services/data-engineering/analytics-strategy.jpg",
  "enterprise-data-repository-design":
    "/media/services/data-engineering/cloud-data-platforms.jpg",
  "training-data-preparation": "/media/services/data-engineering/operations-monitoring.jpg",
};

/** Capabilities split-band image for a subservice landing page. */
export function getSubserviceCapabilityMedia(subserviceId, pillarId, title) {
  const src =
    DATA_ENGINEERING_CAPABILITY_IMAGES[subserviceId] ??
    PILLAR_CAPABILITY_IMAGE[pillarId] ??
    "/media/home/what-we-deliver.png";

  return {
    src,
    alt: `${title} capability review on a workstation`,
  };
}
