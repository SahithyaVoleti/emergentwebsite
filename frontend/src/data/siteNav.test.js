import { describe, expect, it } from "vitest";
import { SERVICE_PILLARS } from "./servicePillars";
import industries from "./industries";
import {
  buildServicesNavGroups,
  SERVICES_NAV,
  SERVICES_NAV_GROUPS,
  SERVICES_PILLAR_NAV,
  PORTFOLIO_NAV,
  INDUSTRIES_NAV,
  COMPANY_NAV,
  FOOTER_COLUMNS,
  LEGAL_LINKS,
} from "./siteNav";

const industrySlugs = new Set(industries.map((i) => i.slug));

function collectHrefs(items) {
  return items.flatMap((item) => {
    if (item.href) return [item.href];
    if (item.links) return item.links.map((link) => link.href);
    return [];
  });
}

describe("siteNav", () => {
  it("maps service nav links to valid subservice routes", () => {
    for (const { href } of SERVICES_NAV) {
      expect(href).toMatch(/^\/services\/[a-z0-9-]+$/);
    }
  });

  it("orders services by five pillars in nav groups", () => {
    const groups = buildServicesNavGroups();
    expect(groups.map((group) => group.pillar)).toEqual([
      "Applied AI Engineering",
      "Enterprise Data Engineering",
      "Generative AI Solutions",
      "Platform Reliability & DevOps",
      "Software Product Engineering",
    ]);
    expect(groups[0].items.map((item) => item.label)).toEqual([
      "AI Strategy & Advisory",
      "Retrieval-Augmented System Engineering",
      "Large Language Model Engineering",
      "Intelligent Application Development",
      "AI-Enabled Software Engineering",
      "Enterprise AI Integration",
    ]);
    expect(groups[1].items).toHaveLength(3);
    expect(groups[2].items).toHaveLength(7);
    expect(groups[3].items).toHaveLength(5);
    expect(groups[4].items).toHaveLength(5);
  });

  it("groups subservices by pillar with professional titles", () => {
    const groupedHrefs = SERVICES_NAV_GROUPS.flatMap((group) => group.items.map((item) => item.href));
    expect(groupedHrefs.length).toBeGreaterThan(0);
    expect(new Set(groupedHrefs).size).toBe(groupedHrefs.length);
    for (const group of SERVICES_NAV_GROUPS) {
      expect(group.pillar).toBeTruthy();
      expect(group.items.length).toBeGreaterThanOrEqual(3);
      expect(group.items.length).toBeLessThanOrEqual(7);
      for (const item of group.items) {
        expect(item.label).toBeTruthy();
        expect(item.label).not.toBe(group.pillar);
      }
    }
  });

  it("exposes main service links for the header services dropdown", () => {
    expect(SERVICES_PILLAR_NAV.length).toBe(SERVICE_PILLARS.length);
    for (const item of SERVICES_PILLAR_NAV) {
      expect(item.label).toBe(item.pillar);
      expect(item.href).toMatch(/^\/services\/[a-z0-9-]+$/);
      expect(item.matchHrefs.length).toBeGreaterThan(0);
      const group = SERVICES_NAV_GROUPS.find((g) => g.pillar === item.pillar);
      expect(group).toBeTruthy();
      const pillar = SERVICE_PILLARS.find((entry) => entry.label === item.pillar);
      expect(pillar).toBeTruthy();
      expect(item.matchHrefs).toEqual([
        `/services/${pillar.id}`,
        ...group.items.map((entry) => entry.href),
      ]);
    }
  });

  it("maps our work nav links to known hub routes", () => {
    const hrefs = PORTFOLIO_NAV.map((item) => item.href);
    expect(hrefs).not.toContain("/our-work");
    expect(hrefs).toContain("/our-work/products");
    expect(hrefs).toContain("/our-work/case-studies");
  });

  it("includes governance and security in company nav", () => {
    const hrefs = COMPANY_NAV.map((item) => item.href);
    expect(hrefs).toContain("/security");
    expect(PORTFOLIO_NAV.map((item) => item.href)).not.toContain("/security");
  });

  it("maps industry nav links to valid industry slugs", () => {
    for (const { href } of INDUSTRIES_NAV) {
      const slug = href.replace("/industries/", "");
      expect(industrySlugs.has(slug)).toBe(true);
    }
  });

  it("footer includes primary offering hub links", () => {
    const hrefs = collectHrefs(FOOTER_COLUMNS);
    expect(hrefs).toContain("/services");
    expect(hrefs).toContain("/our-work");
    expect(hrefs).toContain("/industries");
    expect(hrefs).toContain("/research-innovation");
  });

  it("company nav includes research and innovation", () => {
    const labels = COMPANY_NAV.map((item) => item.label);
    const hrefs = COMPANY_NAV.map((item) => item.href);
    expect(labels).toContain("Research & Innovation");
    expect(hrefs).toContain("/research-innovation");
  });

  it("uses known static routes for company and footer links", () => {
    const staticRoutes = new Set([
      "/about",
      "/security",
      "/blog",
      "/services",
      "/our-work",
      "/our-work/products",
      "/our-work/case-studies",
      "/industries",
      "/research-innovation",
      "/privacy-policy",
      "/terms-and-conditions",
    ]);

    const hrefs = [
      ...collectHrefs(COMPANY_NAV),
      ...collectHrefs(FOOTER_COLUMNS),
      ...collectHrefs(LEGAL_LINKS),
    ];

    for (const href of hrefs) {
      if (href.includes("#")) {
        expect(href.startsWith("/")).toBe(true);
        continue;
      }
      if (href.startsWith("/services/")) {
        expect(href.replace(/#.*$/, "").match(/^\/services\/[a-z0-9-]+$/)).toBeTruthy();
        continue;
      }
      if (href.startsWith("/our-work")) {
        expect(href.match(/^\/our-work(\/[a-z-]+)?$/)).toBeTruthy();
        continue;
      }
      if (href.startsWith("/solutions/")) {
        continue;
      }
      if (href.startsWith("/industries/")) {
        expect(industrySlugs.has(href.replace("/industries/", ""))).toBe(true);
        continue;
      }
      expect(staticRoutes.has(href)).toBe(true);
    }
  });
});
