import { describe, expect, it } from "vitest";
import services from "./services";
import solutions from "./solutions";
import industries from "./industries";
import {
  SERVICES_NAV,
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

  it("includes all industries in footer with view-all link", () => {
    const industryColumn = FOOTER_COLUMNS.find((c) => c.title === "Industries");
    const hrefs = industryColumn.links.map((l) => l.href);
    for (const industry of industries) {
      expect(hrefs).toContain(`/industries/${industry.slug}`);
    }
    expect(hrefs).toContain("/industries");
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
      "/case-studies",
      "/research-innovation",
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
