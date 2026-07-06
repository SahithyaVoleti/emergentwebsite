import { SOLUTION_HERO_IMAGES, SERVICES_HERO_IMAGES } from "./heroImageThemes";
import caseStudies from "../data/caseStudies";

/** Resolve showcase card imagery from solution, case study, or service keys. */
export function getHomeShowcaseImage(imageKey) {
  if (SOLUTION_HERO_IMAGES[imageKey]) {
    return { src: SOLUTION_HERO_IMAGES[imageKey], alt: `${imageKey} system architecture preview` };
  }
  const study = caseStudies.find((c) => c.slug === imageKey);
  if (study?.heroImage) {
    return { src: study.heroImage, alt: study.heroTitle || study.title };
  }
  if (imageKey === "data-engineering") {
    return {
      src: "/media/services/data-engineering/data-network-architecture.jpg",
      alt: "Cloud data platform and enterprise analytics architecture",
    };
  }
  return { src: SERVICES_HERO_IMAGES[0], alt: "Enterprise AI engineering preview" };
}
