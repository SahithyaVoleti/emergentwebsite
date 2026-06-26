import solutions from "../data/solutions";

/**
 * Unified carousel items: solution accelerators only.
 */
export function getHomeAcceleratorSliderItems() {
  return solutions.map((s) => ({
    slug: s.slug,
    title: s.title,
    cardDescriptor: s.cardDescriptor,
    shortDesc: s.shortDesc,
    heroImage: s.heroImage,
    href: `/solutions/${s.slug}`,
  }));
}
