import UbuntuListingSection from "./UbuntuListingSection";
import TechStackLogoGrid from "../TechStackLogoGrid";
import { SECTION_LABEL } from "../../data/sectionLabels";

export default function UbuntuPartnerGrid({
  partners = [],
  id = "partners-grid",
  eyebrow = SECTION_LABEL.partners,
  title = "Ecosystem platforms",
  lead = "Vendors and clouds we integrate in live programs; final stack choices stay governed by your policies and data boundaries.",
  className = "!border-t-0",
}) {
  return (
    <UbuntuListingSection id={id} eyebrow={eyebrow} title={title} lead={lead} className={className}>
      <TechStackLogoGrid items={partners} />
    </UbuntuListingSection>
  );
}
