import solutions from "../data/solutions";
import { HOME_ENGINEERING_SHOWCASES } from "../data/homePageSections";
import { getHomeShowcaseImage } from "./homeShowcaseImage";

/**
 * Unified carousel items: solution accelerators + engineering showcases (deduped by slug).
 */
export function getHomeAcceleratorSliderItems() {
  const solutionSlugs = new Set(solutions.map((s) => s.slug));

  const fromSolutions = solutions.map((s) => ({
    slug: s.slug,
    title: s.title,
    cardDescriptor: s.cardDescriptor,
    shortDesc: s.shortDesc,
    heroImage: s.heroImage,
    href: `/solutions/${s.slug}`,
  }));

  const fromShowcases = HOME_ENGINEERING_SHOWCASES.items
    .filter((item) => !solutionSlugs.has(item.slug))
    .map((item) => ({
      slug: item.slug,
      title: item.shortTitle || item.title,
      cardDescriptor: item.domain,
      shortDesc: item.summary,
      heroImage: getHomeShowcaseImage(item.imageKey).src,
      href: item.href,
    }));

  return [...fromSolutions, ...fromShowcases];
}
