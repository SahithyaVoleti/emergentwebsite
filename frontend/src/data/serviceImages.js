import { hq } from "../lib/heroImageThemes.js";
import {
  PILLAR_CAPABILITY_IMAGE_SPECS,
  SERVICE_IMAGE_SPECS,
  SERVICE_IMAGE_SPECS_BY_ID,
} from "./serviceImageSpecs.js";

/**
 * Title-driven imagery for service pillars and subservices.
 * Paths are seeded via `npm run seed:service-images` from specs in `serviceImageSpecs.js`.
 */

function pillarMediaPath(pillarId) {
  return `/media/services/${pillarId}.jpg`;
}

function subserviceMediaPath(subserviceId) {
  return `/media/subservices/${subserviceId}.jpg`;
}

function buildPillarImages() {
  const images = {};

  for (const spec of SERVICE_IMAGE_SPECS.filter((entry) => entry.kind === "pillar")) {
    const capabilitySpec = PILLAR_CAPABILITY_IMAGE_SPECS[spec.id];
    const capabilityPath = capabilitySpec
      ? subserviceMediaPath(capabilitySpec.subserviceId)
      : subserviceMediaPath("custom-software-engineering");

    images[spec.id] = {
      card: pillarMediaPath(spec.id),
      hero: pillarMediaPath(spec.id),
      capabilities: capabilityPath,
      alt: {
        card: spec.alt,
        hero: `${spec.title} — delivery overview for product-led teams`,
        capabilities: capabilitySpec?.alt ?? `${spec.title} — core delivery foundations`,
      },
    };
  }

  return images;
}

export const PILLAR_IMAGES = buildPillarImages();

export const SUBSERVICE_IMAGES = Object.fromEntries(
  SERVICE_IMAGE_SPECS.filter((entry) => entry.kind === "subservice").map((spec) => [
    spec.id,
    subserviceMediaPath(spec.id),
  ])
);

function buildDownloadMap() {
  const map = {};

  for (const spec of SERVICE_IMAGE_SPECS) {
    const path =
      spec.kind === "pillar" ? pillarMediaPath(spec.id) : subserviceMediaPath(spec.id);
    map[path] = hq(spec.photoId);
  }

  return map;
}

export const SUBSERVICE_IMAGE_DOWNLOADS = Object.fromEntries(
  Object.entries(buildDownloadMap()).filter(([path]) => path.includes("/subservices/"))
);

export const PILLAR_IMAGE_DOWNLOADS = Object.fromEntries(
  Object.entries(buildDownloadMap()).filter(([path]) => path.includes("/services/"))
);

const SUBSERVICE_ALTS = Object.fromEntries(
  SERVICE_IMAGE_SPECS.filter((entry) => entry.kind === "subservice").map((spec) => [
    spec.id,
    spec.alt,
  ])
);

export function getPillarCardImage(pillarId) {
  return PILLAR_IMAGES[pillarId]?.card ?? pillarMediaPath("artificial-intelligence");
}

export function getPillarHeroImage(pillarId) {
  return PILLAR_IMAGES[pillarId]?.hero ?? getPillarCardImage(pillarId);
}

export function getPillarIntroMedia(pillarId, pillarLabel) {
  const pillar = PILLAR_IMAGES[pillarId];
  const spec = SERVICE_IMAGE_SPECS_BY_ID[pillarId];
  return {
    src: getPillarCardImage(pillarId),
    alt: pillar?.alt?.card ?? spec?.alt ?? `${pillarLabel} delivery overview`,
  };
}

export function getPillarCapabilityMedia(pillarId) {
  const pillar = PILLAR_IMAGES[pillarId];
  if (!pillar) {
    return {
      src: subserviceMediaPath("custom-software-engineering"),
      alt: "Engineering delivery review on a laptop",
    };
  }
  return {
    src: pillar.capabilities,
    alt: pillar.alt.capabilities,
  };
}

export function getSubserviceCardImage(subserviceId) {
  return SUBSERVICE_IMAGES[subserviceId] ?? subserviceMediaPath(subserviceId);
}

export function getSubserviceImageAlt(subserviceId, fallbackTitle = "Service delivery") {
  const spec = SERVICE_IMAGE_SPECS_BY_ID[subserviceId];
  return spec?.alt ?? SUBSERVICE_ALTS[subserviceId] ?? `${fallbackTitle} delivery overview`;
}

export function getSubserviceIntroMedia(subserviceId, subserviceTitle) {
  return {
    src: getSubserviceCardImage(subserviceId),
    alt: getSubserviceImageAlt(subserviceId, subserviceTitle),
  };
}

export function getSubserviceCapabilityMedia(subserviceId, pillarId, subserviceTitle) {
  if (SUBSERVICE_IMAGES[subserviceId]) {
    return {
      src: getSubserviceCardImage(subserviceId),
      alt: getSubserviceImageAlt(subserviceId, subserviceTitle),
    };
  }
  return getPillarCapabilityMedia(pillarId);
}

/** All remote URLs to fetch into public/media (path → url). */
export function getServiceImageDownloadMap() {
  return buildDownloadMap();
}

/** @deprecated Use SUBSERVICE_IMAGES / getServiceImageDownloadMap */
export const SUBSERVICE_IMAGE_SOURCES = SUBSERVICE_IMAGE_DOWNLOADS;
