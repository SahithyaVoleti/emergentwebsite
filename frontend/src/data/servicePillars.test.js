import { describe, expect, it } from "vitest";
import { SERVICE_CATALOG } from "./serviceCatalog";
import { SERVICE_PILLARS, groupServicesByPillar, getPillarGroup } from "./servicePillars";

/** Subservice counts aligned to the reference service catalog layout. */
const EXPECTED_SUBSERVICE_COUNTS = {
  "artificial-intelligence": 6,
  "data-engineering": 3,
  "generative-ai": 7,
  devops: 5,
  "development-services": 5,
};

describe("servicePillars", () => {
  it("groups every subservice under a main service pillar", () => {
    const groups = groupServicesByPillar();
    const subserviceCount = groups.reduce((total, group) => total + group.subservices.length, 0);
    const catalogCount = SERVICE_CATALOG.reduce(
      (total, pillar) => total + pillar.subservices.length,
      0
    );

    expect(groups).toHaveLength(SERVICE_PILLARS.length);
    expect(subserviceCount).toBe(catalogCount);
  });

  it("matches reference subservice counts per main service", () => {
    for (const pillar of SERVICE_CATALOG) {
      expect(pillar.subservices.length).toBe(EXPECTED_SUBSERVICE_COUNTS[pillar.id]);
    }
  });

  it("exposes dedicated pages for main services in nav", () => {
    const groups = groupServicesByPillar();
    expect(groups.map((group) => group.href)).toEqual([
      "/services/artificial-intelligence",
      "/services/data-engineering",
      "/services/generative-ai",
      "/services/devops",
      "/services/development-services",
    ]);
  });

  it("isolates subservices per main service page", () => {
    const appliedAi = getPillarGroup("artificial-intelligence");
    const dataEngineering = getPillarGroup("data-engineering");
    const generativeAi = getPillarGroup("generative-ai");
    const devops = getPillarGroup("devops");
    const developmentServices = getPillarGroup("development-services");

    expect(appliedAi.subservices.map((line) => line.key)).toEqual([
      "applied-ai-advisory",
      "context-retrieval-systems",
      "language-model-engineering",
      "intelligent-application-delivery",
      "ai-enabled-software-delivery",
      "enterprise-ai-integration",
    ]);
    expect(dataEngineering.subservices.map((line) => line.key)).toEqual([
      "decision-analytics-engineering",
      "enterprise-data-repository-design",
      "training-data-preparation",
    ]);
    expect(generativeAi.subservices.map((line) => line.key)).toEqual([
      "autonomous-agent-engineering",
      "conversational-experience-engineering",
      "model-adaptation-alignment",
      "foundation-model-integration",
      "generative-capability-integration",
      "adaptive-intelligence-systems",
      "role-based-copilot-engineering",
    ]);
    expect(devops.subservices.map((line) => line.key)).toEqual([
      "intelligent-operations-automation",
      "delivery-pipeline-advisory",
      "continuous-delivery-engineering",
      "reliability-resilience-engineering",
      "model-performance-observability",
    ]);
    expect(developmentServices.subservices.map((line) => line.key)).toEqual([
      "mobile-engineering",
      "custom-software-engineering",
      "embedded-engineering-teams",
      "end-to-end-product-development",
      "api-platform-engineering",
    ]);
  });

  it("resolves legacy pillar URLs to the current layout", () => {
    expect(getPillarGroup("ai-product-transformation")?.id).toBe("generative-ai");
    expect(getPillarGroup("model-fine-tuning-ml")?.id).toBe("artificial-intelligence");
    expect(getPillarGroup("saas-platform-engineering")?.id).toBe("devops");
    expect(getPillarGroup("machine-learning")?.id).toBe("artificial-intelligence");
    expect(getPillarGroup("cloud-infrastructure")?.id).toBe("devops");
    expect(getPillarGroup("application-engineering")?.id).toBe("development-services");
  });
});
