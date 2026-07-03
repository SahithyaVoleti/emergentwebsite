/**
 * Curated delivery outcomes per service — one row per subservice capability area.
 */
export function getServiceDeliveryOutcomes(service) {
  const subs = service?.subservices ?? [];
  if (!subs.length) return [];

  return subs.slice(0, 6).map((sub, index) => ({
    key: sub.title,
    testId: `subservice-grid-card-${index}`,
    code: String(index + 1).padStart(2, "0"),
    title: sub.title,
    description: sub.desc,
    capabilities: (sub.items ?? []).slice(0, 4),
  }));
}
