import { Link, useLocation } from "react-router-dom";
import { CONTACT_TOPIC, contactFormTo } from "../../lib/contactIntent";
import SectionEyebrow from "../ubuntu/SectionEyebrow";
import SectionTitle from "../ubuntu/SectionTitle";
import UbuntuHomeLink from "../home/ubuntu/UbuntuHomeLink";
import TechFoundationCtaMedia from "./TechFoundationCtaMedia";
import { SECTION_LABEL } from "../../data/sectionLabels";

/**
 * Technology foundation band — copy and actions above a static tech logo grid.
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
    <section
      id={id}
      data-testid="service-technical-foundation-cta"
      className="ubuntu-section-block ubuntu-tech-foundation-cta border-y border-[#d9d9d9] bg-white"
      aria-labelledby={`${id}-heading`}
    >
      <div className="ubuntu-container">
        <div className="max-w-3xl">
          <SectionEyebrow>{eyebrow}</SectionEyebrow>
          <SectionTitle as="h2" id={`${id}-heading`} title={title} />
          <p className="ubuntu-lead mt-3">{lead}</p>
          <div className="ubuntu-cta-row">
            <Link to={primaryHref} className="ubuntu-btn-primary">
              {primaryLabel}
            </Link>
            <UbuntuHomeLink to={secondaryHref}>{secondaryLabel}</UbuntuHomeLink>
          </div>
        </div>

        <div className="mt-8">
          <TechFoundationCtaMedia techNames={techNames} />
        </div>
      </div>
    </section>
  );
}
