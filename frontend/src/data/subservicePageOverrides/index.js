import { APPLIED_AI_ADVISORY_SECTIONS } from "./appliedAiAdvisory";
import { buildAllSubservicePageOverrides } from "./buildSubservicePageOverride";

/** Per-subservice landing page overrides keyed by catalog subservice id. */
export const SUBSERVICE_PAGE_OVERRIDES = {
  ...buildAllSubservicePageOverrides(),
  "applied-ai-advisory": APPLIED_AI_ADVISORY_SECTIONS,
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
