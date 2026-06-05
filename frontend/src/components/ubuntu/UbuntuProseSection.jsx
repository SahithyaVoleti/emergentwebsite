import UbuntuListingSection from "./UbuntuListingSection";

/**
 * Long-form content band (legal, policies) inside ubuntu container typography.
 */
export default function UbuntuProseSection({
  id = "page-content",
  eyebrow,
  title,
  lead,
  children,
  variant = "default",
}) {
  return (
    <UbuntuListingSection id={id} eyebrow={eyebrow} title={title} lead={lead} variant={variant}>
      <div className="ubuntu-prose max-w-4xl text-[#555]">{children}</div>
    </UbuntuListingSection>
  );
}
