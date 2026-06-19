import { footerColumns, footerCompanyLinks } from "./siteNav";
import services from "../data/services";
import industries from "../data/industries";

describe("siteNav", () => {
  it("derives service and industry links from data files", () => {
    const servicesColumn = footerColumns.find((column) => column.title === "Services");
    const industriesColumn = footerColumns.find((column) => column.title === "Industries");

    expect(servicesColumn.links).toHaveLength(services.length);
    expect(industriesColumn.links).toHaveLength(industries.length);
    expect(servicesColumn.links[0].href).toMatch(/^\/services\//);
    expect(industriesColumn.links[0].href).toMatch(/^\/industries\//);
  });

  it("includes core company destinations", () => {
    const hrefs = footerCompanyLinks.map((link) => link.href);
    const labels = footerCompanyLinks.map((link) => link.label);
    expect(hrefs).toEqual(
      expect.arrayContaining(["/case-studies", "/testimonials", "/partners", "/security"])
    );
    expect(labels).toContain("How we work");
  });
});
