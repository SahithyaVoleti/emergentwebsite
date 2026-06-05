import serviceCaseStudies from "../data/serviceCaseStudies";

/** Dark stats band metrics derived from service delivery data. */
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
    caseStudyCount > 0 && { value: String(caseStudyCount), label: "Case study narratives" },
    platformCount > 0 && { value: String(platformCount), label: "ML platforms" },
    phaseCount > 0 && { value: String(phaseCount), label: "Delivery phases" },
    { value: "99.9%", label: "Reliability target" },
  ].filter(Boolean);
}
