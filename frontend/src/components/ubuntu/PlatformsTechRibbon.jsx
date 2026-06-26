import { useMemo } from "react";
import UbuntuListingSection from "./UbuntuListingSection";
import TechStackLogoGrid from "../TechStackLogoGrid";
import { SECTION_LABEL } from "../../data/sectionLabels";
import { getPlatformsFeaturedTechNames } from "../../lib/serviceTechStackSlugs";

/**
 * Featured technology stack — Products listing (/solutions).
 * Same static logo grid format as About Us technology ecosystem.
 */
export default function PlatformsTechRibbon({
  id = "platforms-tech-stack",
  className = "!border-t-0",
}) {
  const items = useMemo(() => getPlatformsFeaturedTechNames(), []);

  if (!items.length) return null;

  return (
    <UbuntuListingSection
      id={id}
      eyebrow={SECTION_LABEL.technology}
      title="Technology foundation"
      lead="Representative platforms and tools integrated across product accelerators; final selections follow your security and procurement policies."
      className={className}
      variant="alt"
    >
      <TechStackLogoGrid items={items} data-testid="platforms-tech-stack" />
    </UbuntuListingSection>
  );
}
