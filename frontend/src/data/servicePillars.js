import { SERVICE_CATALOG, getSubserviceCards } from "./serviceCatalog";

/** Legacy pillar URLs from prior layouts. */
const PILLAR_ID_ALIASES = {
  "ai-product-transformation": "generative-ai",
  "model-fine-tuning-ml": "machine-learning",
  "saas-platform-engineering": "cloud-infrastructure",
};

const PILLAR_BY_LABEL = Object.fromEntries(SERVICE_CATALOG.map((pillar) => [pillar.label, pillar]));
const PILLAR_BY_ID = Object.fromEntries(SERVICE_CATALOG.map((pillar) => [pillar.id, pillar]));

export const SERVICE_PILLARS = SERVICE_CATALOG;

export function getPillarById(id) {
  if (!id) return undefined;
  const resolved = PILLAR_ID_ALIASES[id] ?? id;
  return PILLAR_BY_ID[resolved];
}

export function isServicePillarSlug(slug) {
  return Boolean(getPillarById(slug));
}

export function getPillarForService(service) {
  return service?.pillar ? PILLAR_BY_LABEL[service.pillar] : undefined;
}

/** Main services with subservices for catalog and pillar pages. */
export function groupServicesByPillar() {
  return SERVICE_CATALOG.map((pillar) => ({
    ...pillar,
    href: `/services/${pillar.id}`,
    subservices: getSubserviceCards(pillar.id),
  }));
}

/** One main service with subservices — for dedicated pillar pages. */
export function getPillarGroup(pillarId) {
  const pillar = getPillarById(pillarId);
  if (!pillar) return null;

  return {
    ...pillar,
    href: `/services/${pillar.id}`,
    subservices: getSubserviceCards(pillar.id),
  };
}
