import { describe, expect, it } from "vitest";
import { SERVICE_CATALOG } from "./serviceCatalog";
import { SERVICE_PILLARS, groupServicesByPillar, getPillarGroup } from "./servicePillars";

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

  it("keeps four to six subservices per main service", () => {
    for (const pillar of SERVICE_CATALOG) {
      expect(pillar.subservices.length).toBeGreaterThanOrEqual(4);
      expect(pillar.subservices.length).toBeLessThanOrEqual(6);
    }
  });

  it("exposes dedicated pages for main services in nav", () => {
    const groups = groupServicesByPillar();
    expect(groups.map((group) => group.href)).toEqual([
      "/services/generative-ai",
      "/services/machine-learning",
      "/services/data-engineering",
      "/services/cloud-infrastructure",
    ]);
  });

  it("isolates subservices per main service page", () => {
    const generativeAi = getPillarGroup("generative-ai");
    const machineLearning = getPillarGroup("machine-learning");
    const dataEngineering = getPillarGroup("data-engineering");
    const cloudInfrastructure = getPillarGroup("cloud-infrastructure");

    expect(generativeAi.subservices.map((line) => line.key)).toEqual([
      "enterprise-copilots",
      "retrieval-augmented-generation",
      "intelligent-document-processing",
      "agent-orchestration",
      "prompt-engineering",
      "generative-ai-governance",
    ]);
    expect(machineLearning.subservices.map((line) => line.key)).toEqual([
      "predictive-analytics",
      "natural-language-processing",
      "computer-vision",
      "model-fine-tuning",
      "mlops",
      "llm-engineering",
    ]);
    expect(dataEngineering.subservices.map((line) => line.key)).toEqual([
      "data-pipeline-engineering",
      "data-warehouse-lakehouse",
      "real-time-streaming",
      "data-governance",
    ]);
    expect(cloudInfrastructure.subservices.map((line) => line.key)).toEqual([
      "cloud-platform-engineering",
      "cicd-release-automation",
      "kubernetes-operations",
      "infrastructure-as-code",
      "observability-sre",
      "application-modernization",
    ]);
  });

  it("resolves legacy pillar URLs to the current layout", () => {
    expect(getPillarGroup("ai-product-transformation")?.id).toBe("generative-ai");
    expect(getPillarGroup("model-fine-tuning-ml")?.id).toBe("machine-learning");
    expect(getPillarGroup("saas-platform-engineering")?.id).toBe("cloud-infrastructure");
  });
});
