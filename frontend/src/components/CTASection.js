import { useLocation } from "react-router-dom";
import UbuntuSplitLayout from "./ubuntu/UbuntuSplitLayout";
import SiteNavLink from "./ubuntu/SiteNavLink";
import { getSiteMockup } from "../data/siteMockups";
import { CONTACT_TOPIC } from "../lib/contactIntent";
import { isContactHref, resolveNavTarget } from "../lib/siteNavigation";

export default function CTASection({
  title,
  description,
  buttonText,
  buttonHref,
  contactIntent = "contact",
  compact = false,
  hideLabel = false,
  mockupKey = "collaboration",
}) {
  const location = useLocation();
  const topic =
    contactIntent === "consultation" ? CONTACT_TOPIC.CONSULTATION : CONTACT_TOPIC.CONTACT;
  const mockup = getSiteMockup(mockupKey);
  const href = buttonHref?.trim() || "#page-contact";
  const servicesTarget = resolveNavTarget("/services", location.pathname);

  return (
    <UbuntuSplitLayout
      id="page-cta"
      testId="cta-section"
      pattern="cta"
      variant="dark"
      image={mockup.src}
      imageAlt={mockup.alt}
      imagePosition="right"
    >
      {!hideLabel && (
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#e8b4b8]">
          Next Step
        </p>
      )}
      <h2 data-testid="cta-title" className="ubuntu-section-title text-white">
        {title || "Ready to scope a pilot?"}
      </h2>
      <p className="ubuntu-lead text-white/85">
        {description ||
          "30-minute discovery call · Fixed-scope pilot proposal within 5 business days · No slide-deck-only engagements"}
      </p>
      <div className="ubuntu-cta-row">
        <SiteNavLink
          href={href}
          contactIntent={isContactHref(href) ? contactIntent : undefined}
          primary
          showArrow={false}
          className={compact ? "text-sm" : ""}
        >
          {buttonText || (contactIntent === "consultation" ? "Start a pilot" : "Contact us")}
        </SiteNavLink>
        <SiteNavLink
          href={servicesTarget.type === "route" ? servicesTarget.to : "/services"}
          muted
          className="!text-[#e8b4b8]"
        >
          View services
        </SiteNavLink>
      </div>
    </UbuntuSplitLayout>
  );
}
