import { SECTION_LABEL } from "../../data/sectionLabels";
import ModuleIconGrid from "../service/ModuleIconGrid";
import SectionEyebrow from "./SectionEyebrow";
import SectionTitle from "./SectionTitle";
import { sectionBlockClass } from "../../lib/sectionBands";

/**
 * Industry catalog — compact 2×4 icon grid (label only, no circles).
 */
export default function UbuntuIndustriesIconGrid({
  industries = [],
  id = "verticals",
  eyebrow = SECTION_LABEL.industries,
  title = "Industry programs",
  lead = "Sectors where we scope pilots today; each overview ties constraints to delivery patterns and milestone checkpoints.",
  className = "!border-t-0",
}) {
  if (!industries.length) return null;

  const items = industries.map((industry) => ({
    title: industry.title,
    slug: industry.slug,
    icon: industry.icon,
  }));

  return (
    <section
      id={id}
      className={sectionBlockClass("border-b border-[#d9d9d9]", className)}
      aria-labelledby={`${id}-heading`}
    >
      <div className="ubuntu-container">
        <div className="max-w-3xl text-left">
          {eyebrow && <SectionEyebrow>{eyebrow}</SectionEyebrow>}
          <SectionTitle id={`${id}-heading`} title={title} />
          {lead && <p className="ubuntu-lead mt-4 max-w-3xl">{lead}</p>}
        </div>

        <ModuleIconGrid items={items} listClassName="mt-8" />
      </div>
    </section>
  );
}
