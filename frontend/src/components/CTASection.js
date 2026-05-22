import { Link, useLocation } from "react-router-dom";
import UbuntuSplitLayout from "./ubuntu/UbuntuSplitLayout";
import UbuntuLink from "./ubuntu/UbuntuLink";
import { getSiteMockup } from "../data/siteMockups";
import { CONTACT_TOPIC, contactFormTo } from "../lib/contactIntent";

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
        {title || "Next Step for Your AI and Software Initiative"}
      </h2>
      <p className="ubuntu-lead text-white/85">
        {description ||
          "Contact us to discuss scope, timeline, and fit. We respond with a structured view of options, dependencies, and governance considerations for your environment."}
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
        <UbuntuLink to="/#services-grid" className="!text-[#e8b4b8]">
          View services
        </UbuntuLink>
      </div>
    </UbuntuSplitLayout>
  );
}
