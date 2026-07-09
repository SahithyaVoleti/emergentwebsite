import industries from "../../data/industries";
import { SECTION_LABEL } from "../../data/sectionLabels";
import ModuleIconGrid from "./ModuleIconGrid";
import SectionEyebrow from "../ubuntu/SectionEyebrow";
import SectionTitle from "../ubuntu/SectionTitle";
import { sectionBlockClass } from "../../lib/sectionBands";

/**
 * Industries served band — compact icon grid aligned to service landing pages.
 */
export default function ServiceDetailIndustriesBand({
  id = "industries-served",
  eyebrow = SECTION_LABEL.industries,
  title = "Industries we serve",
  lead = "Sector patterns and use cases we scope during discovery for this service track.",
}) {
  const items = industries.slice(0, 8).map((industry) => ({
    title: industry.title,
    slug: industry.slug,
    icon: industry.icon,
  }));

  return (
    <section
      id={id}
      data-testid="service-industries-band"
      className={sectionBlockClass("border-b border-[#d9d9d9]")}
      aria-labelledby={`${id}-heading`}
    >
      <div className="ubuntu-container">
        {eyebrow && <SectionEyebrow>{eyebrow}</SectionEyebrow>}
        <SectionTitle id={`${id}-heading`} title={title} />
        {lead && <p className="ubuntu-lead mt-4 max-w-3xl">{lead}</p>}

        <ModuleIconGrid items={items} listClassName="mt-8" />
      </div>
    </section>
  );
}
