import { describe, expect, it } from "vitest";
import blogArticles from "../data/blog";
import services from "../data/services";
import {
  getArticlesForService,
  getBlogCatalogByService,
  getServiceLabelsForArticle,
  serviceArticlesSectionId,
} from "./blogByService";

describe("blogByService", () => {
  it("groups catalog sections by service with stable section ids", () => {
    const sections = getBlogCatalogByService();
    expect(sections.length).toBeGreaterThan(0);

    for (const section of sections) {
      expect(section.articles.length).toBeGreaterThan(0);
      expect(section.slug).toBeTruthy();
      expect(serviceArticlesSectionId(section.slug)).toBe(`service-articles-${section.slug}`);
      for (const article of section.articles) {
        expect(article.serviceSlugs).toContain(section.slug);
      }
    }
  });

  it("maps article service labels for News & Media anchors", () => {
    const article = blogArticles[0];
    const labels = getServiceLabelsForArticle(article);
    expect(labels.length).toBe(article.serviceSlugs.length);
    for (const entry of labels) {
      expect(entry.href).toMatch(/^\/blog#service-articles-/);
    }
  });

  it("covers every article in at least one service section", () => {
    const sectionSlugs = new Set(getBlogCatalogByService().flatMap((s) => s.articles.map((a) => a.slug)));
    for (const article of blogArticles) {
      expect(article.serviceSlugs?.length).toBeGreaterThan(0);
      expect(sectionSlugs.has(article.slug)).toBe(true);
    }
  });

  it("returns service-specific articles without duplicates", () => {
    const slug = services[0].slug;
    const articles = getArticlesForService(slug);
    const slugs = articles.map((a) => a.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });
});
