import { Link } from "react-router-dom";
import { HOME_VISION_CTA_2 } from "../../../data/homePageSections";
import { getSiteMockup } from "../../../data/siteMockups";
import UbuntuSplitLayout from "../../ubuntu/UbuntuSplitLayout";
import UbuntuHomeLink from "../../ubuntu/UbuntuLink";
import SectionEyebrow from "../../ubuntu/SectionEyebrow";
import SectionTitle from "../../ubuntu/SectionTitle";

export default function UbuntuHomeVisionCta({
  mockup = getSiteMockup(HOME_VISION_CTA_2.mockupKey),
  mockupVariant = "plain",
  imagePosition = "left",
  config,
  bullets = [],
}) {
  const section = { ...HOME_VISION_CTA_2, ...config };
  const primaryTarget = section.primaryCta?.href ?? HOME_VISION_CTA_2.primaryCta.href;
  const primaryLabel = section.primaryCta?.label ?? HOME_VISION_CTA_2.primaryCta.label;
  const secondaryTarget = section.secondaryCta?.href ?? HOME_VISION_CTA_2.secondaryCta.href;
  const secondaryLabel = section.secondaryCta?.label ?? HOME_VISION_CTA_2.secondaryCta.label;

  const primaryIsRouteObject = primaryTarget && typeof primaryTarget === "object";
  const primaryHref = typeof primaryTarget === "string" ? primaryTarget : "";
  const isExternalPrimary =
    primaryHref.startsWith("http") || primaryHref.startsWith("mailto:");
  const isHashPrimary = primaryHref.startsWith("#");

  const secondaryIsRouteObject = secondaryTarget && typeof secondaryTarget === "object";
  const secondaryHref = typeof secondaryTarget === "string" ? secondaryTarget : "";

  return (
    <UbuntuSplitLayout
      id={section.id}
      testId="home-vision-cta-2"
      pattern="cta"
      image={mockup.src}
      imageAlt={mockup.alt}
      imagePosition={imagePosition}
      mockupVariant={mockupVariant}
    >
      {section.eyebrow && <SectionEyebrow>{section.eyebrow}</SectionEyebrow>}
      <SectionTitle as="h2" title={section.title} />
      <p className="ubuntu-lead">{section.body}</p>
      {bullets.length > 0 && (
        <ul className="ubuntu-bullet-list mt-4">
          {bullets.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
      <div className="ubuntu-cta-row">
        {primaryIsRouteObject ? (
          <Link to={primaryTarget} className="ubuntu-btn-primary">
            {primaryLabel}
          </Link>
        ) : isExternalPrimary ? (
          <a href={primaryHref} className="ubuntu-btn-primary">
            {primaryLabel}
          </a>
        ) : isHashPrimary ? (
          <a href={primaryHref} className="ubuntu-btn-primary">
            {primaryLabel}
          </a>
        ) : (
          <Link to={primaryHref} className="ubuntu-btn-primary">
            {primaryLabel}
          </Link>
        )}
        {secondaryIsRouteObject ? (
          <UbuntuHomeLink to={secondaryTarget}>
            {secondaryLabel} →
          </UbuntuHomeLink>
        ) : (
          <UbuntuHomeLink to={secondaryHref}>
            {secondaryLabel} →
          </UbuntuHomeLink>
        )}
      </div>
    </UbuntuSplitLayout>
  );
}
