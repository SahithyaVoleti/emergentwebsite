import { getHomeIndustryGroups } from "./homeIndustryGroups";

function slugFromHref(href) {
  const parts = href.split("/").filter(Boolean);
  return parts[parts.length - 1] || href;
}

/** Flat list of all industry cards (for legacy carousel consumers). */
export function getHomeDomainCarouselItems() {
  return getHomeIndustryGroups().flatMap((group) =>
    group.items.map((item) => ({
      slug: item.slug,
      title: item.title,
      cardDescriptor: item.subtitle,
      shortDesc: item.desc,
      heroImage: item.image,
      href: item.href,
    }))
  );
}
