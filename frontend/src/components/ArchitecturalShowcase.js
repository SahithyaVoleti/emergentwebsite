import UbuntuCapabilityGrid from "./ubuntu/UbuntuCapabilityGrid";
import { SECTION_LABEL } from "../data/sectionLabels";

/** @deprecated Use UbuntuCapabilityGrid — kept for existing imports. */
export default function ArchitecturalShowcase({
  capabilities = [],
  title,
  description,
  eyebrow = SECTION_LABEL.modules,
  presentation = "module",
  id = "capabilities-showcase",
}) {
  return (
    <UbuntuCapabilityGrid
      id={id}
      eyebrow={eyebrow}
      title={title || "Functional capabilities"}
      lead={description}
      capabilities={capabilities}
      variant="default"
      presentation={presentation}
    />
  );
}
