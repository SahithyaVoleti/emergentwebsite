import { SECTION_LABEL } from "../../data/sectionLabels";
import ModuleIconGrid from "../service/ModuleIconGrid";
import UbuntuListingSection from "./UbuntuListingSection";

/**
 * Industry catalog grid — compact icon + label layout (no descriptions).
 */
export default function UbuntuIndustriesGrid({
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
    <UbuntuListingSection
      id={id}
      eyebrow={eyebrow}
      title={title}
      lead={lead}
      className={className}
    >
      <ModuleIconGrid items={items} />
    </UbuntuListingSection>
  );
}
