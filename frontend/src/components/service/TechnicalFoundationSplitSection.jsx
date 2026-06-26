import { Link, useLocation } from "react-router-dom";
import { CONTACT_TOPIC, contactFormTo } from "../../lib/contactIntent";
import UbuntuSplitLayout from "../ubuntu/UbuntuSplitLayout";
import SectionEyebrow from "../ubuntu/SectionEyebrow";
import SectionTitle from "../ubuntu/SectionTitle";
import UbuntuHomeLink from "../home/ubuntu/UbuntuHomeLink";
import TechFoundationCtaMedia from "./TechFoundationCtaMedia";
import { SECTION_LABEL } from "../../data/sectionLabels";

/**
 * Light CTA band — copy + actions left, scrolling tech stack panel right.
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
      imagePosition="right"
      className="ubuntu-tech-foundation-cta"
      mediaClassName="ubuntu-tech-foundation-cta__media"
      mediaSlot={<TechFoundationCtaMedia techNames={techNames} />}
    >
      <SectionEyebrow>{eyebrow}</SectionEyebrow>
      <SectionTitle as="h2" title={title} />
      <p className="ubuntu-lead">{lead}</p>
      <div className="ubuntu-cta-row">
        <Link to={primaryHref} className="ubuntu-btn-primary">
          {primaryLabel}
        </Link>
        <UbuntuHomeLink to={secondaryHref}>
          {secondaryLabel}
        </UbuntuHomeLink>
      </div>
    </UbuntuSplitLayout>
  );
}
