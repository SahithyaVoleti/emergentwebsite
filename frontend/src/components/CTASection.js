import UbuntuSplitLayout from "./ubuntu/UbuntuSplitLayout";
import SiteNavLink from "./ubuntu/SiteNavLink";
import SectionEyebrow from "./ubuntu/SectionEyebrow";
import SectionTitle from "./ubuntu/SectionTitle";
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
      {!hideLabel && <SectionEyebrow>{SECTION_LABEL.contact}</SectionEyebrow>}
      <SectionTitle
        as="h2"
        data-testid="cta-title"
        title={title || "Next Step for your enterprise AI program"}
      />
      <p className="ubuntu-lead">
        {description ||
          "Share your application landscape and priorities. We will outline service fit, pilot scope, and governance boundaries."}
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
