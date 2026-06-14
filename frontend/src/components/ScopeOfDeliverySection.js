import ScopeOfDeliveryGrid from "./service/ScopeOfDeliveryGrid";
import { SECTION_LABEL } from "../data/sectionLabels";

/**
 * Service scope band — centered icon grid (feature-card layout).
 */
export default function ScopeOfDeliverySection({ service }) {
  const subs = service?.subservices ?? [];
  if (!subs.length) return null;

  const modules = subs.slice(0, 9).map((sub) => ({
    title: sub.title,
    desc: sub.desc,
  }));

  return (
    <ScopeOfDeliveryGrid
      id="scope-of-delivery"
      eyebrow={SECTION_LABEL.scope}
      title={`Scope of delivery for ${service.title}`}
      lead="Service modules structured for rapid time-to-value with clear boundaries per track."
      modules={modules}
      serviceIcon={service.icon}
    />
  );
}
