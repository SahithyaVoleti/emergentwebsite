import UbuntuCapabilityGrid from "./ubuntu/UbuntuCapabilityGrid";

/**
 * Service scope band — homepage capability grid layout (nav + detail panel).
 */
export default function ScopeOfDeliverySection({ service }) {
  const subs = service?.subservices ?? [];
  if (!subs.length) return null;

  const capabilities = subs.map((sub) => ({
    title: sub.title,
    desc: sub.desc,
    items: sub.items,
  }));

  return (
    <UbuntuCapabilityGrid
      id="scope-of-delivery"
      eyebrow="Coverage"
      title={`Scope of delivery for ${service.title}`}
      lead="Service modules structured for rapid time-to-value with clear boundaries per track."
      capabilities={capabilities}
      variant="alt"
    />
  );
}
