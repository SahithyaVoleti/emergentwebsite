import { SERVICE_CATALOG } from "../data/serviceCatalog";
import serviceCaseStudies from "../data/serviceCaseStudies";
import services from "../data/services";
import { dedupeTechNamesByIcon, extractTechNamesFromService } from "./serviceTechStackSlugs";

function countTechPlatforms(service) {
  return dedupeTechNamesByIcon(extractTechNamesFromService(service)).length;
}

function isAdvisorySubservice(subservice) {
  return /advisory|strategy/i.test(subservice.title ?? "");
}

function pilotStat(subservice) {
  return {
    value: "4–6 wks",
    label: isAdvisorySubservice(subservice) ? "Typical advisory sprint" : "Typical pilot window",
  };
}

/** Curated headline metrics for each main service pillar. */
const PILLAR_STATS_ITEMS = {
  "artificial-intelligence": [
    { value: "6", label: "Applied AI workstreams" },
    { value: "20+", label: "ML & LLM platforms" },
    { value: "6", label: "Delivery phases" },
    { value: "4–6 wks", label: "Typical pilot window" },
  ],
  "data-engineering": [
    { value: "3", label: "Data engineering workstreams" },
    { value: "16+", label: "Warehouse & pipeline tools" },
    { value: "6", label: "Governance checkpoints" },
    { value: "99.9%", label: "Pipeline reliability target" },
  ],
  "generative-ai": [
    { value: "7", label: "Generative AI workstreams" },
    { value: "20+", label: "Model & agent platforms" },
    { value: "5", label: "Evaluation gates" },
    { value: "4–6 wks", label: "Typical pilot window" },
  ],
  devops: [
    { value: "5", label: "Platform reliability workstreams" },
    { value: "20+", label: "CI/CD & observability tools" },
    { value: "6", label: "Reliability phases" },
    { value: "99.9%", label: "Uptime target" },
  ],
  "development-services": [
    { value: "5", label: "Product engineering workstreams" },
    { value: "16+", label: "Engineering platforms" },
    { value: "6", label: "Delivery phases" },
    { value: "4–6 wks", label: "Typical pilot window" },
  ],
};

/** Per-subservice stats keyed by catalog id — labels drawn from delivery scope items. */
const SUBSERVICE_STATS_BY_ID = Object.fromEntries(
  SERVICE_CATALOG.flatMap((pillar) =>
    pillar.subservices.map((subservice) => {
      const items = subservice.items ?? [];
      const caseStudyCount = serviceCaseStudies[pillar.id]?.length ?? 0;
      const phaseCount = String(
        services.find((entry) => entry.slug === pillar.id)?.process?.length ?? 5
      );

      const stats = [
        items[0] && { value: String(items.length), label: items[0] },
        items[1] && { value: "Scoped", label: items[1] },
        items[2] && { value: phaseCount, label: items[2] },
        caseStudyCount > 0
          ? { value: String(caseStudyCount), label: "Related case studies" }
          : { value: `${countTechPlatforms(services.find((entry) => entry.slug === pillar.id))}+`, label: "Platforms applied" },
        pilotStat(subservice),
      ].filter(Boolean);

      return [subservice.id, stats.slice(0, 4)];
    })
  )
);

export function buildPillarStatsItems(pillar, service) {
  const preset = PILLAR_STATS_ITEMS[pillar?.id];
  if (preset) return preset.map((item) => ({ ...item }));

  const workstreamCount = pillar?.subservices?.length ?? 0;
  const techCount = countTechPlatforms(service);
  const phaseCount = service?.process?.length ?? 5;

  return [
    { value: String(workstreamCount), label: `${pillar?.label ?? "Service"} workstreams` },
    { value: `${techCount}+`, label: "Platforms in stack" },
    { value: String(phaseCount), label: "Delivery phases" },
    { value: "4–6 wks", label: "Typical pilot window" },
  ];
}

export function buildSubserviceStatsItems(pillar, subservice, service) {
  const preset = SUBSERVICE_STATS_BY_ID[subservice?.id];
  if (preset) return preset.map((item) => ({ ...item }));

  const items = subservice?.items ?? [];
  const techCount = countTechPlatforms(service);
  const phaseCount = String(service?.process?.length ?? 5);

  return [
    { value: String(items.length || 4), label: `${subservice?.title ?? "Delivery"} modules` },
    { value: `${techCount}+`, label: "Platforms applied" },
    { value: phaseCount, label: "Delivery phases" },
    pilotStat(subservice),
  ];
}

export function buildStatsSectionMeta(idPrefix) {
  return {
    id: `${idPrefix}-stats`,
    testId: `${idPrefix}-startup-stats`,
  };
}

/** @deprecated Use buildPillarStatsItems or buildSubserviceStatsItems. */
export function buildServiceStatsStrip(service) {
  if (!service) return [];

  const expertiseCount = service.subservices?.length ?? 0;
  const caseStudyCount = serviceCaseStudies[service.slug]?.length ?? 0;
  const platformCount = (service.techStack ?? []).reduce(
    (sum, category) => sum + (category.techs?.length ?? 0),
    0
  );
  const phaseCount = service.process?.length ?? 0;

  return [
    expertiseCount > 0 && { value: String(expertiseCount), label: "Expertise areas" },
    caseStudyCount > 0 && { value: String(caseStudyCount), label: "Production test cases" },
    platformCount > 0 && { value: String(platformCount), label: "ML platforms" },
    phaseCount > 0 && { value: String(phaseCount), label: "Delivery phases" },
    { value: "99.9%", label: "Reliability target" },
  ].filter(Boolean);
}
