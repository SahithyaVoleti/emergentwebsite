import {
  COMPANY_CONTACT,
  COMPANY_NAME,
  COMPANY_SHORT_NAME,
  DEFAULT_META_DESCRIPTION,
} from "./company";
import { resolvePageMeta } from "./pageMeta";

describe("company constants", () => {
  it("exposes canonical branding values", () => {
    expect(COMPANY_NAME).toMatch(/NeuralTrix AI/);
    expect(COMPANY_SHORT_NAME).toBe("NeuralTrix");
    expect(COMPANY_CONTACT.email).toContain("@");
    expect(DEFAULT_META_DESCRIPTION.length).toBeGreaterThan(20);
  });
});

describe("resolvePageMeta", () => {
  it("returns route-specific metadata for static pages", () => {
    const aboutMeta = resolvePageMeta("/about");
    expect(aboutMeta.title).toMatch(/About Us/i);
    expect(aboutMeta.description).toMatch(/NeuralTrix AI/i);
  });

  it("returns not found metadata for unknown routes", () => {
    const meta = resolvePageMeta("/unknown-route");
    expect(meta.title).toMatch(/Page Not Found/i);
  });
});
