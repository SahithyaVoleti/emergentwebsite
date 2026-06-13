import SiteNavLink from "../../ubuntu/SiteNavLink";
import UbuntuSplitLayout from "../../ubuntu/UbuntuSplitLayout";
import { HOME_HERO } from "../../../data/homePageSections";
import { COMPANY_PROOF_LINE } from "../../../lib/company";
import { getHomeSectionImage } from "../../../data/homePageImages";

export default function UbuntuHomeHero({ embedded = false }) {
  const { title, lead, primaryCta, secondaryCta } = HOME_HERO;
  const heroImage = getHomeSectionImage("hero");

  return (
    <UbuntuSplitLayout
      id="hero"
      testId="hero-section"
      pattern={embedded ? null : "hero"}
      className={embedded ? "ubuntu-site-page-chrome__hero" : undefined}
      image={heroImage?.src}
      imageAlt={heroImage?.alt}
      imagePosition="right"
    >
      <h1 className="ubuntu-hero-title">{title}</h1>
      <p className="ubuntu-lead mt-5">{lead}</p>
      {HOME_HERO.proofLine && (
        <p className="mt-3 text-sm font-medium tracking-wide text-[#8b1538]">{HOME_HERO.proofLine}</p>
      )}
      {!HOME_HERO.proofLine && (
        <p className="mt-3 text-sm font-medium tracking-wide text-[#8b1538]">{COMPANY_PROOF_LINE}</p>
      )}
      <div className="ubuntu-cta-row">
        <SiteNavLink href={primaryCta.href} contactIntent="consultation" primary showArrow={false}>
          {primaryCta.label}
        </SiteNavLink>
        <SiteNavLink href={secondaryCta.href} muted>
          {secondaryCta.label}
        </SiteNavLink>
      </div>
    </UbuntuSplitLayout>
  );
}
