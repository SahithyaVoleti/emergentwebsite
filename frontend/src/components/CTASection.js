import { Link, useLocation } from "react-router-dom";
import UbuntuSplitLayout from "./ubuntu/UbuntuSplitLayout";
import UbuntuLink from "./ubuntu/UbuntuLink";
import { getSiteMockup } from "../data/siteMockups";
import { CONTACT_TOPIC, contactFormTo } from "../lib/contactIntent";
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
  const location = useLocation();
  const topic =
    contactIntent === "consultation" ? CONTACT_TOPIC.CONSULTATION : CONTACT_TOPIC.CONTACT;
  const mockup = getSiteMockup(mockupKey);
  const href = buttonHref?.trim() || "#page-contact";

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
          {SECTION_LABEL.contact}
        </p>
      )}
      <h2 data-testid="cta-title" className="ubuntu-section-title text-white">
        {title || "Get started with AI agents in your applications"}
      </h2>
      <p className="ubuntu-lead text-white/85">
        {description ||
          "Tell us about the software you run. We will outline how to build agents, modernize apps, or both—with clear scope and next steps."}
      </p>
      <div className="ubuntu-cta-row">
        {href.startsWith("http") || href.startsWith("mailto:") ? (
          <a href={href} className="ubuntu-btn-primary">
            {buttonText || "Contact us"}
          </a>
        ) : href === "#page-contact" ? (
          <Link to={contactFormTo(location.pathname, topic)} className="ubuntu-btn-primary">
            {buttonText || "Contact us"}
          </Link>
        ) : href.startsWith("#") ? (
          <a href={href} className="ubuntu-btn-primary">
            {buttonText || "Contact us"}
          </a>
        ) : (
          <Link to={href} className="ubuntu-btn-primary">
            {buttonText || "Contact us"}
          </Link>
        )}
        <UbuntuLink to={secondaryCta.href} className="!text-[#e8b4b8]">
          {secondaryCta.label}
        </UbuntuLink>
      </div>
    </UbuntuSplitLayout>
  );
}
