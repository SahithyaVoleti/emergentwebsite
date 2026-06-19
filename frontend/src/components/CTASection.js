import UbuntuSplitLayout from "./ubuntu/UbuntuSplitLayout";
import SiteNavLink from "./ubuntu/SiteNavLink";
import { getSiteMockup } from "../data/siteMockups";
import { SECTION_LABEL } from "../data/sectionLabels";

export default function CTASection({
  title,
  description,
  buttonText,
  buttonHref,
  contactIntent = "contact",
  compact: _compact = false,
  hideLabel = false,
  mockupKey = "collaboration",
  secondaryCta = { label: "View services", href: "/services" },
}) {
  const mockup = getSiteMockup(mockupKey);
  const href = buttonHref?.trim() || "#page-contact";

  return (
    <UbuntuSplitLayout
      id="page-cta"
      testId="cta-section"
      pattern="cta"
      image={mockup.src}
      imageAlt={mockup.alt}
      imagePosition="right"
    >
      {!hideLabel && (
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#5c677d]">
          {SECTION_LABEL.contact}
        </p>
      )}
      <h2 data-testid="cta-title" className="ubuntu-section-title">
        {title || "Get started with AI agents in your applications"}
      </h2>
      <p className="ubuntu-lead">
        {description ||
          "Tell us about the software you run. We will outline how to build agents, modernize apps, or both—with clear scope and next steps."}
      </p>
      <div className="ubuntu-cta-row">
        <SiteNavLink
          href={href}
          contactIntent={contactIntent}
          primary
          showArrow={false}
        >
          {buttonText || "Contact us"}
        </SiteNavLink>
        <SiteNavLink href={secondaryCta.href} muted showArrow={false}>
          {secondaryCta.label}
        </SiteNavLink>
      </div>
    </UbuntuSplitLayout>
  );
}
