import { describe, expect, it } from "vitest";
import services from "./services";
import { SERVICE_PILLARS, groupServicesByPillar, getPillarGroup } from "./servicePillars";

describe("servicePillars", () => {
  it("groups every service line under a main service pillar", () => {
    const groups = groupServicesByPillar(services);
    const lineCount = groups.reduce((total, group) => total + group.serviceLines.length, 0);

    expect(groups).toHaveLength(SERVICE_PILLARS.length);
    expect(lineCount).toBe(services.length);
  });

  it("exposes dedicated pages for main services in nav", () => {
    const groups = groupServicesByPillar(services);
    expect(groups.map((group) => group.href)).toEqual([
      "/services/ai-product-transformation",
      "/services/model-fine-tuning-ml",
      "/services/saas-platform-engineering",
    ]);
  });

  it("isolates service lines per main service page", () => {
    const transformation = getPillarGroup("ai-product-transformation", services);
    const platform = getPillarGroup("saas-platform-engineering", services);

    expect(transformation.serviceLines.map((line) => line.key)).toEqual([
      "generative-ai",
      "custom-software",
      "ai-agents",
      "mobile-apps",
    ]);
    expect(platform.serviceLines.map((line) => line.key)).toEqual([
      "data-engineering",
      "devops",
    ]);
  });
});
