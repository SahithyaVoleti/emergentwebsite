import { Link, useLocation } from "react-router-dom";
import { CONTACT_TOPIC, contactFormTo } from "../../lib/contactIntent";
import UbuntuSplitLayout from "../ubuntu/UbuntuSplitLayout";
import UbuntuHomeLink from "../home/ubuntu/UbuntuHomeLink";
import TechFoundationCtaMedia from "./TechFoundationCtaMedia";
import { SECTION_LABEL } from "../../data/sectionLabels";

/**
 * Dark CTA band — copy + actions left, browser mockup with scrolling stack icons right.
 */
export default function TechnicalFoundationSplitSection({
  id = "service-technical-foundation",
  eyebrow = SECTION_LABEL.foundation,
  title,
  lead = "Platforms and tools commonly integrated on delivery programs for this service track.",
  techItems = [],
  primaryCta,
  secondaryCta = { label: "View capabilities", href: "#scope-of-delivery" },
}) {
  const location = useLocation();

  if (!techItems.length) return null;

  const techNames = techItems.map((item) => item.name ?? item).filter(Boolean);

  const primaryHref =
    primaryCta?.href ?? contactFormTo(location.pathname, CONTACT_TOPIC.CONTACT);
  const primaryLabel = primaryCta?.label ?? "Contact us";
  const secondaryHref = secondaryCta?.href ?? "#scope-of-delivery";
  const secondaryLabel = secondaryCta?.label ?? "View capabilities";

  return (
    <UbuntuSplitLayout
      id={id}
      testId="service-technical-foundation-cta"
      pattern="cta"
      variant="dark"
      imagePosition="right"
      className="ubuntu-tech-foundation-cta"
      mediaClassName="ubuntu-tech-foundation-cta__media"
      mediaSlot={<TechFoundationCtaMedia techNames={techNames} />}
    >
      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#e8b4b8]">
        {eyebrow}
      </p>
      <h2 className="ubuntu-section-title text-white">{title}</h2>
      <p className="ubuntu-lead text-white/90">{lead}</p>
      <div className="ubuntu-cta-row">
        <Link to={primaryHref} className="ubuntu-btn-primary">
          {primaryLabel}
        </Link>
        <UbuntuHomeLink to={secondaryHref} className="!text-[#e8b4b8]">
          {secondaryLabel}
        </UbuntuHomeLink>
      </div>
    </UbuntuSplitLayout>
  );
}
