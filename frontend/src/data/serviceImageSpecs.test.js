import { describe, expect, it } from "vitest";
import { SERVICE_CATALOG } from "../data/serviceCatalog";
import { SERVICE_IMAGE_SPECS, SERVICE_IMAGE_SPECS_BY_ID } from "../data/serviceImageSpecs";
import {
  getPillarCardImage,
  getServiceImageDownloadMap,
  getSubserviceCardImage,
  getSubserviceImageAlt,
} from "../data/serviceImages";

describe("serviceImageSpecs", () => {
  it("maps a unique title-matched image to every pillar and subservice card", () => {
    for (const pillar of SERVICE_CATALOG) {
      const pillarSpec = SERVICE_IMAGE_SPECS_BY_ID[pillar.id];
      expect(pillarSpec?.title).toBe(pillar.label);
      expect(getPillarCardImage(pillar.id)).toBe(`/media/services/${pillar.id}.jpg`);

      for (const subservice of pillar.subservices) {
        const subSpec = SERVICE_IMAGE_SPECS_BY_ID[subservice.id];
        expect(subSpec?.title).toBe(subservice.title);
        expect(getSubserviceCardImage(subservice.id)).toBe(
          `/media/subservices/${subservice.id}.jpg`
        );
        expect(getSubserviceImageAlt(subservice.id, subservice.title)).toContain(
          subservice.title
        );
      }
    }
  });

  it("defines 31 unique download targets with verified remote sources", () => {
    const downloadMap = getServiceImageDownloadMap();
    const paths = Object.keys(downloadMap);

    expect(SERVICE_IMAGE_SPECS).toHaveLength(31);
    expect(paths).toHaveLength(31);
    expect(new Set(paths).size).toBe(31);
    expect(new Set(Object.values(downloadMap)).size).toBe(31);
  });
});
