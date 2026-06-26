import blogArticles from "../data/blog";
import services, { servicesForDisplay } from "../data/services";

export function serviceArticlesSectionId(serviceSlug) {
  return `service-articles-${serviceSlug}`;
}

export function getBlogAnchorForService(serviceSlug) {
  return `/blog#${serviceArticlesSectionId(serviceSlug)}`;
}

export function getArticlesForService(serviceSlug) {
  return blogArticles.filter((article) => article.serviceSlugs?.includes(serviceSlug));
}

export function getArticlesForServices(serviceSlugs, { limit } = {}) {
  if (!serviceSlugs?.length) return [];

  const seen = new Set();
  const matched = [];

  for (const article of blogArticles) {
    if (!article.serviceSlugs?.some((slug) => serviceSlugs.includes(slug))) continue;
    if (seen.has(article.slug)) continue;
    seen.add(article.slug);
    matched.push(article);
    if (limit && matched.length >= limit) break;
  }

  return matched;
}

/** Service lines with their linked articles, in catalog display order. */
export function getBlogCatalogByService(list = services) {
  return servicesForDisplay(list)
    .map((service) => ({
      slug: service.slug,
      title: service.catalogTitle ?? service.title,
      pillar: service.pillar,
      href: `/services/${service.slug}`,
      articles: getArticlesForService(service.slug),
    }))
    .filter((section) => section.articles.length > 0);
}

export function getServiceLabelsForArticle(article, list = services) {
  const slugs = article?.serviceSlugs ?? [];
  return servicesForDisplay(list)
    .filter((service) => slugs.includes(service.slug))
    .map((service) => ({
      slug: service.slug,
      label: service.catalogTitle ?? service.title,
      href: getBlogAnchorForService(service.slug),
    }));
}
