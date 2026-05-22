import UbuntuCapabilityGrid from "./ubuntu/UbuntuCapabilityGrid";

/** @deprecated Use UbuntuCapabilityGrid — kept for existing imports. */
export default function ArchitecturalShowcase({
  capabilities = [],
  title,
  description,
  eyebrow = "Coverage",
}) {
  return (
    <UbuntuCapabilityGrid
      id="capabilities-showcase"
      eyebrow={eyebrow}
      title={title || "Coverage across functional capabilities"}
      lead={description}
      capabilities={capabilities}
      variant="default"
    />
  );
}
