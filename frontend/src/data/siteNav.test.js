import { describe, expect, it } from "vitest";
import services from "./services";
import solutions from "./solutions";
import industries from "./industries";
import {
  SERVICES_NAV,
  SERVICES_NAV_GROUPS,
  SERVICES_PILLAR_NAV,
  PRODUCTS_NAV,
  INDUSTRIES_NAV,
  COMPANY_NAV,
  FOOTER_COLUMNS,
  LEGAL_LINKS,
} from "./siteNav";

const serviceSlugs = new Set(services.map((s) => s.slug));
const solutionSlugs = new Set(solutions.map((s) => s.slug));
const industrySlugs = new Set(industries.map((i) => i.slug));

function collectHrefs(items) {
  return items.flatMap((item) => {
    if (item.href) return [item.href];
    if (item.links) return item.links.map((link) => link.href);
    return [];
  });
}

describe("siteNav", () => {
  it("maps service nav links to valid service slugs", () => {
    for (const { href } of SERVICES_NAV) {
      const slug = href.replace("/services/", "");
      expect(serviceSlugs.has(slug)).toBe(true);
    }
  });

  it("groups services by pillar with catalog titles", () => {
    const groupedHrefs = SERVICES_NAV_GROUPS.flatMap((group) => group.items.map((item) => item.href));
    expect(groupedHrefs).toHaveLength(services.length);
    expect(new Set(groupedHrefs).size).toBe(services.length);
    for (const group of SERVICES_NAV_GROUPS) {
      expect(group.pillar).toBeTruthy();
      expect(group.items.length).toBeGreaterThan(0);
      for (const item of group.items) {
        expect(item.label).toBeTruthy();
        expect(item.label).not.toBe(group.pillar);
      }
    }
  });

  it("exposes pillar-only links for the header services dropdown", () => {
    expect(SERVICES_PILLAR_NAV.length).toBe(SERVICES_NAV_GROUPS.length);
    for (const item of SERVICES_PILLAR_NAV) {
      expect(item.label).toBe(item.pillar);
      expect(item.href).toMatch(/^\/services\//);
      expect(item.matchHrefs.length).toBeGreaterThan(0);
      const group = SERVICES_NAV_GROUPS.find((g) => g.pillar === item.pillar);
      expect(group).toBeTruthy();
      expect(item.matchHrefs).toEqual(group.items.map((entry) => entry.href));
    }
  });

  it("maps product nav links to valid solution slugs or known hubs", () => {
    for (const { href } of PRODUCTS_NAV) {
      if (href === "/solutions" || href === "/security") continue;
      const slug = href.replace("/solutions/", "");
      expect(solutionSlugs.has(slug)).toBe(true);
    }
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
    expect(hrefs).toContain("/solutions");
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
      "/team",
      "/testimonials",
      "/careers",
      "/partners",
      "/security",
      "/blog",
      "/services",
      "/solutions",
      "/industries",
      "/research-innovation",
      "/case-studies",
      "/privacy-policy",
      "/terms-and-conditions",
      "/legal-templates",
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
        expect(serviceSlugs.has(href.replace("/services/", ""))).toBe(true);
        continue;
      }
      if (href.startsWith("/solutions/")) {
        expect(solutionSlugs.has(href.replace("/solutions/", ""))).toBe(true);
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
