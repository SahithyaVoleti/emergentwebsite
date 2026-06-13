import SiteNavLink from "./SiteNavLink";
import UbuntuSplitLayout from "./UbuntuSplitLayout";
import { DEFAULT_PAGE_HERO_IMAGE } from "../../lib/heroImageThemes";
import { getSiteMockup } from "../../data/siteMockups";
import {
  COMPANY_PROOF_LINE,
  PRIMARY_CTA_LABEL,
  SECONDARY_CTA_LABEL,
} from "../../lib/company";

export default function UbuntuPageHero({
  label,
  title,
  description,
  primaryCTA,
  secondaryCTA,
  image,
  illustrationKey,
  showProofLine = true,
  hideContent = false,
  imagePosition = "right",
  embedded = false,
}) {
  const resolvedPrimary = primaryCTA ?? {
    text: PRIMARY_CTA_LABEL,
    href: "#page-contact",
    contactIntent: "consultation",
  };
  const resolvedSecondary = secondaryCTA ?? {
    text: SECONDARY_CTA_LABEL,
    href: "/services",
  };
  const mockup = image
    ? { src: image, alt: title ? `${title} — product mockup` : "Page hero mockup" }
    : illustrationKey
      ? getSiteMockup(illustrationKey)
      : getSiteMockup("hero");

  const renderCta = (cta, primary = false) => {
    if (!cta) return null;
    const href = cta.href?.trim();
    if (!href) return null;

    return (
      <SiteNavLink
        href={href}
        contactIntent={cta.contactIntent}
        primary={primary}
        muted={!primary}
        showArrow={!primary}
      >
        {cta.text}
      </SiteNavLink>
    );
  };

  const pattern = embedded ? null : "hero";
  const heroClass = embedded ? "ubuntu-site-page-chrome__hero" : undefined;

  if (hideContent) {
    return (
      <UbuntuSplitLayout
        id="page-hero"
        testId="page-hero"
        pattern={pattern}
        className={heroClass}
        image={mockup.src || DEFAULT_PAGE_HERO_IMAGE}
        imageAlt={mockup.alt}
        imagePosition={imagePosition}
      />
    );
  }

  return (
    <UbuntuSplitLayout
      id="page-hero"
      testId="page-hero"
      pattern={pattern}
      className={heroClass}
      image={mockup.src || DEFAULT_PAGE_HERO_IMAGE}
      imageAlt={mockup.alt}
      imagePosition={imagePosition}
    >
      {label && (
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#666]">{label}</p>
      )}
      {title && (
        <h1 data-testid="page-hero-title" className="ubuntu-hero-title">
          {title}
        </h1>
      )}
      {description && <p className="ubuntu-lead mt-4">{description}</p>}
      {showProofLine && (
        <p className="mt-3 text-sm font-medium text-[#555]">{COMPANY_PROOF_LINE}</p>
      )}
      <div className="ubuntu-cta-row">
        {renderCta(resolvedPrimary, true)}
        {renderCta(resolvedSecondary, false)}
      </div>
    </UbuntuSplitLayout>
  );
}
