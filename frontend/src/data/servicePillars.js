import { servicesForDisplay } from "./services";

/** Top-level service disciplines — main offerings in nav and homepage. */
export const SERVICE_PILLARS = [
  {
    id: "ai-product-transformation",
    label: "AI Product Transformation",
    cardImage: "/media/service-ai-product-transformation.png",
    shortDesc:
      "Transform existing CRM, ERP, portals, and internal tools with copilots, automation, and modern APIs—without replacing the products your teams already operate.",
  },
  {
    id: "model-fine-tuning-ml",
    label: "Model Fine-Tuning & ML",
    cardImage: "/media/service-model-fine-tuning-ml.png",
    shortDesc:
      "Domain-specific fine-tuning, evaluation harnesses, and production ML pipelines so models perform on your data—not generic benchmarks alone.",
  },
  {
    id: "saas-platform-engineering",
    label: "SaaS & Platform Engineering",
    cardImage: "/media/service-saas-platform-engineering.png",
    shortDesc:
      "Data platforms, cloud infrastructure, and release engineering that AI-native SaaS and enterprise products require at production scale.",
  },
];

const PILLAR_BY_LABEL = Object.fromEntries(SERVICE_PILLARS.map((pillar) => [pillar.label, pillar]));
const PILLAR_BY_ID = Object.fromEntries(SERVICE_PILLARS.map((pillar) => [pillar.id, pillar]));

export function getPillarById(id) {
  return id ? PILLAR_BY_ID[id] : undefined;
}

export function isServicePillarSlug(slug) {
  return Boolean(getPillarById(slug));
}

export function getPillarForService(service) {
  return service?.pillar ? PILLAR_BY_LABEL[service.pillar] : undefined;
}

function mapServiceLines(ordered, pillarLabel) {
  return ordered
    .filter((service) => service.pillar === pillarLabel)
    .map((service) => ({
      key: service.slug,
      testId: `service-line-${service.slug}`,
      href: `/services/${service.slug}`,
      title: service.catalogTitle ?? service.title,
      description: service.shortDesc,
      cardImage: service.heroImage,
      capabilities: service.catalogCapabilities ?? [],
    }));
}

/** Main services with nested service lines, ordered by pillar then display rank. */
export function groupServicesByPillar(list) {
  const ordered = servicesForDisplay(list);

  return SERVICE_PILLARS.map((pillar) => {
    const serviceLines = mapServiceLines(ordered, pillar.label);

    return {
      ...pillar,
      href: `/services/${pillar.id}`,
      flagship: ordered.find((service) => service.pillar === pillar.label),
      serviceLines,
    };
  }).filter((group) => group.serviceLines.length > 0);
}

/** One main service with only its service lines — for dedicated pillar pages. */
export function getPillarGroup(pillarId, list) {
  const pillar = getPillarById(pillarId);
  if (!pillar) return null;

  const ordered = servicesForDisplay(list);
  const serviceLines = mapServiceLines(ordered, pillar.label);
  if (!serviceLines.length) return null;

  return {
    ...pillar,
    href: `/services/${pillar.id}`,
    flagship: ordered.find((service) => service.pillar === pillar.label),
    serviceLines,
  };
}
