import { describe, expect, it } from "vitest";
import { SERVICE_CATALOG, findSubserviceById } from "../data/serviceCatalog";
import services from "../data/services";
import { SUBSERVICE_PAGE_OVERRIDES } from "../data/subservicePageOverrides";
import {
  buildPillarPageSections,
  buildSubservicePageSections,
} from "./buildServicePageSections";

describe("buildServicePageSections", () => {
  it("builds full landing sections for every main service pillar", () => {
    for (const pillar of SERVICE_CATALOG) {
      const service = services.find((entry) => entry.slug === pillar.id);
      const sections = buildPillarPageSections(pillar, service);

      expect(sections.hero.title).toContain("|");
      expect(sections.stats.items).toHaveLength(4);
      expect(sections.techStack.techNames.length).toBeGreaterThan(0);
      expect(sections.coreCapabilities.items.length).toBeGreaterThan(0);
      expect(sections.methodology.process.length).toBe(5);
      expect(sections.faqs.length).toBeGreaterThanOrEqual(4);
    }
  });

  it("builds full landing sections for every subservice", () => {
    for (const pillar of SERVICE_CATALOG) {
      const service = services.find((entry) => entry.slug === pillar.id);

      for (const subservice of pillar.subservices) {
        const sections = buildSubservicePageSections(pillar, subservice, service);

        expect(sections.hero.title).toContain(subservice.title);
        expect(sections.serviceBlocks?.modules?.length).toBe(8);
        expect(sections.techStack.techNames.length).toBeGreaterThan(0);
        expect(sections.faqs.length).toBeGreaterThanOrEqual(4);
        expect(sections.offerings.hide).toBe(true);
        expect(sections.relatedOfferings.hide).toBe(true);
        expect(sections.engagement.hide).toBe(true);
        expect(sections.blog.hide).toBe(true);
      }
    }
  });

  it("applies rich advisory override for AI Strategy & Advisory", () => {
    const pillar = SERVICE_CATALOG.find((entry) => entry.id === "artificial-intelligence");
    const subservice = pillar.subservices.find((entry) => entry.id === "applied-ai-advisory");
    const service = services.find((entry) => entry.slug === pillar.id);
    const sections = buildSubservicePageSections(pillar, subservice, service);

    expect(sections.serviceBlocks?.modules?.length).toBe(8);
    expect(sections.valuePillars).toBeUndefined();
    expect(sections.trustMetrics?.items?.length).toBe(4);
    expect(sections.methodology.process.length).toBe(6);
    expect(sections.faqs.length).toBe(9);
    expect(sections.offerings.hide).toBe(true);
    expect(sections.relatedOfferings.hide).toBe(true);
    expect(sections.engagement.hide).toBe(true);
    expect(sections.blog.hide).toBe(true);
  });

  it("provides landing overrides for all catalog subservices", () => {
    const catalogCount = SERVICE_CATALOG.reduce(
      (total, pillar) => total + pillar.subservices.length,
      0
    );

    expect(Object.keys(SUBSERVICE_PAGE_OVERRIDES)).toHaveLength(catalogCount);

    for (const pillar of SERVICE_CATALOG) {
      const service = services.find((entry) => entry.slug === pillar.id);

      for (const subservice of pillar.subservices) {
        const override = SUBSERVICE_PAGE_OVERRIDES[subservice.id];
        const sections = buildSubservicePageSections(pillar, subservice, service);

        expect(override).toBeTruthy();
        expect(sections.serviceBlocks?.modules?.length).toBe(8);
        expect(sections.methodology.process.length).toBe(6);
        expect(sections.trustMetrics?.items?.length).toBe(4);
        expect(sections.offerings.hide).toBe(true);
        expect(sections.relatedOfferings.hide).toBe(true);
        expect(sections.engagement.hide).toBe(true);
        expect(sections.blog.hide).toBe(true);
        expect(sections.servicesIntro).toBeUndefined();
        expect(sections.valuePillars).toBeUndefined();
      }
    }
  });
});

describe("findSubserviceById", () => {
  it("resolves subservices and returns null for unknown slugs", () => {
    expect(findSubserviceById("applied-ai-advisory")?.subservice.title).toBe(
      "AI Strategy & Advisory"
    );
    expect(findSubserviceById("not-a-service")).toBeNull();
  });
});
