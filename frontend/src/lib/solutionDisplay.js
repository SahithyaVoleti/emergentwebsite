/**
 * Product display helpers — English product name primary, Sanskrit brand as sub-label.
 */
export function getSolutionProductName(solution) {
  return solution?.productName || solution?.cardDescriptor || solution?.title || "";
}

export function getSolutionBrandName(solution) {
  return solution?.brandName || solution?.title || "";
}

export function getSolutionNavLabel(solution) {
  const product = getSolutionProductName(solution);
  const brand = getSolutionBrandName(solution);
  if (product && brand && product !== brand) {
    return `${product} · ${brand}`;
  }
  return product || brand;
}

export function toSolutionCarouselItem(solution) {
  return {
    slug: solution.slug,
    title: getSolutionProductName(solution),
    brandName: getSolutionBrandName(solution),
    cardDescriptor: solution.cardDescriptor,
    shortDesc: solution.shortDesc,
    heroImage: solution.heroImage,
    href: `/solutions/${solution.slug}`,
  };
}
