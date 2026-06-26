import UbuntuListingSection from "./UbuntuListingSection";
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
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {partners.map((partner) => (
          <div
            key={partner}
            className="flex h-20 items-center justify-center border border-[#d9d9d9] bg-white px-3 text-center"
          >
            <span className="text-sm font-medium tracking-wide text-[#7d8597]">{partner}</span>
          </div>
        ))}
      </div>
    </UbuntuListingSection>
  );
}
