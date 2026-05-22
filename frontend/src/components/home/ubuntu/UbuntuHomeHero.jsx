import { Link } from "react-router-dom";
import UbuntuLink from "../../ubuntu/UbuntuLink";
import UbuntuSplitLayout from "../../ubuntu/UbuntuSplitLayout";
import { HOME_HERO } from "../../../data/homePageSections";
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
      <div className="ubuntu-cta-row">
        <Link to={primaryCta.href} className="ubuntu-btn-primary">
          {primaryCta.label}
        </Link>
        <UbuntuLink to={secondaryCta.href}>{secondaryCta.label}</UbuntuLink>
      </div>
    </UbuntuSplitLayout>
  );
}
