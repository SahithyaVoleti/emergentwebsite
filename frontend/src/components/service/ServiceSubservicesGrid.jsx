import { SECTION_LABEL } from "../../data/sectionLabels";
import { getServiceDeliveryOutcomes } from "../../lib/serviceOutcomes";
import SectionEyebrow from "../ubuntu/SectionEyebrow";
import SectionTitle from "../ubuntu/SectionTitle";
import ServiceOfferingsList from "../ubuntu/ServiceOfferingsList";

/**
 * Service detail capability modules — same row catalog layout as the homepage offerings grid.
 */
export default function ServiceSubservicesGrid({
  service,
  id = "scope-of-delivery",
  eyebrow = SECTION_LABEL.scope,
  title,
  lead = "Delivery outcomes within this service line—grouped for accountable scope with defined controls and measurable results per workstream.",
  className = "!border-t-0",
}) {
  const items = getServiceDeliveryOutcomes(service);
  const sectionTitle = title ?? `Outcomes for ${service.catalogTitle ?? service.title}`;

  if (!items.length) return null;

  return (
    <section
      id={id}
      className={`ubuntu-section-block ubuntu-capability-grid-section border-y border-[#d9d9d9] bg-white ${className}`}
      aria-labelledby={`${id}-heading`}
    >
      <div className="ubuntu-container">
        <div className="mb-8 max-w-3xl lg:mb-10">
          {eyebrow && <SectionEyebrow>{eyebrow}</SectionEyebrow>}
          <SectionTitle id={`${id}-heading`} title={sectionTitle} />
          {lead && <p className="ubuntu-lead mt-3">{lead}</p>}
        </div>

        <ServiceOfferingsList items={items} />
      </div>
    </section>
  );
}
