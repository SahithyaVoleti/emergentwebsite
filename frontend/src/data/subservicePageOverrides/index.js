import { APPLIED_AI_ADVISORY_SECTIONS } from "./appliedAiAdvisory";
import { buildAllSubservicePageOverrides } from "./buildSubservicePageOverride";

const generatedSubserviceOverrides = buildAllSubservicePageOverrides();

/** Per-subservice landing page overrides keyed by catalog subservice id. */
export const SUBSERVICE_PAGE_OVERRIDES = {
  ...generatedSubserviceOverrides,
  "applied-ai-advisory": APPLIED_AI_ADVISORY_SECTIONS,
  "ai-enabled-software-delivery": {
    ...generatedSubserviceOverrides["ai-enabled-software-delivery"],
    nextStep: {
      ...generatedSubserviceOverrides["ai-enabled-software-delivery"].nextStep,
      media: {
        src: "/media/subservices/ai-enabled-software-delivery-next-step.jpg",
        alt: "Hands interacting with a generative AI holographic interface for software delivery workflows",
      },
    },
  },
  "decision-analytics-engineering": {
    ...generatedSubserviceOverrides["decision-analytics-engineering"],
    nextStep: {
      ...generatedSubserviceOverrides["decision-analytics-engineering"].nextStep,
      media: {
        src: "/media/subservices/decision-analytics-engineering-next-step.jpg",
        alt: "Hands interacting with a generative AI analytics interface for decision engineering workflows",
      },
    },
  },
};

export function getSubservicePageOverride(subserviceId) {
  return SUBSERVICE_PAGE_OVERRIDES[subserviceId] ?? null;
}

function mergeSection(base, override) {
  if (override === undefined) return base;
  if (override === null) return base;
  if (typeof override !== "object" || Array.isArray(override)) return override;
  if (typeof base !== "object" || base === null || Array.isArray(base)) return override;

  return Object.keys({ ...base, ...override }).reduce((acc, key) => {
    acc[key] = mergeSection(base[key], override[key]);
    return acc;
  }, { ...base });
}

/** Deep-merge optional subservice overrides onto generated section config. */
export function applySubservicePageOverride(sections, subserviceId) {
  const override = getSubservicePageOverride(subserviceId);
  if (!override) return sections;
  return mergeSection(sections, override);
}
