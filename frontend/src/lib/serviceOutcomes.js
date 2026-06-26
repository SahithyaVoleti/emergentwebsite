/**
 * Curated delivery outcomes per service (4–5 per track) — avoids overwhelming 12+ capability rows.
 */
const OUTCOME_INDICES = {
  "artificial-intelligence": [0, 1, 2, 3, 8],
  "generative-ai": [0, 1, 3, 6, 11],
  "custom-software": [2, 5, 0, 1, 6],
  "mobile-apps": [0, 1, 4, 2, 5],
  "ai-agents": [0, 1, 2, 4, 5],
  "llm-development": [0, 1, 2, 4, 7],
  "devops": [0, 1, 2, 5, 8],
  "data-engineering": [0, 1, 2, 4, 7],
};

export function getServiceDeliveryOutcomes(service) {
  const subs = service?.subservices ?? [];
  if (!subs.length) return [];

  const indices = OUTCOME_INDICES[service.slug];
  const picked = indices
    ? indices.map((i) => subs[i]).filter(Boolean)
    : subs.slice(0, 5);

  return picked.map((sub, index) => ({
    key: sub.title,
    testId: `subservice-grid-card-${index}`,
    code: String(index + 1).padStart(2, "0"),
    title: sub.title,
    description: sub.desc,
    capabilities: (sub.items ?? []).slice(0, 4),
  }));
}
