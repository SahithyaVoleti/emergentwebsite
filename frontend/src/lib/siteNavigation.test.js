import { contactFormTo } from "./contactIntent";
import { isContactHref, resolveNavTarget } from "./siteNavigation";

describe("resolveNavTarget", () => {
  it("routes same-page contact hashes to the current page contact form", () => {
    expect(resolveNavTarget("#page-contact", "/solutions/smriti-ai", "consultation")).toEqual({
      type: "route",
      to: contactFormTo("/solutions/smriti-ai", "consultation"),
    });
  });

  it("routes home contact links to the homepage contact form", () => {
    expect(resolveNavTarget("/#page-contact", "/about")).toEqual({
      type: "route",
      to: contactFormTo("/", "contact"),
    });
  });

  it("keeps in-page anchors on the current page", () => {
    expect(resolveNavTarget("#capabilities", "/solutions/smriti-ai")).toEqual({
      type: "hash",
      elementId: "capabilities",
    });
  });

  it("routes section anchors on other pages to the homepage hash", () => {
    expect(resolveNavTarget("/#services-grid", "/about")).toEqual({
      type: "route",
      to: { pathname: "/", hash: "#services-grid" },
    });
  });
});

describe("isContactHref", () => {
  it("detects contact form destinations", () => {
    expect(isContactHref("#page-contact")).toBe(true);
    expect(isContactHref("/#page-contact?topic=consultation")).toBe(true);
    expect(isContactHref("#capabilities")).toBe(false);
  });
});
