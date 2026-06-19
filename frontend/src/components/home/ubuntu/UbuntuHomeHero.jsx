import { Link } from "react-router-dom";
import UbuntuLink from "../../ubuntu/UbuntuLink";
import { HOME_HERO } from "../../../data/homePageSections";

export default function UbuntuHomeHero({ embedded = false }) {
  const { title, lead, primaryCta, secondaryCta } = HOME_HERO;

  return (
    <div
      id="hero"
      data-testid="hero-section"
      className={[
        "ubuntu-hero-fullbleed__body",
        embedded ? "ubuntu-site-page-chrome__hero" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="ubuntu-container">
        <div className="ubuntu-hero-fullbleed__content max-w-2xl">
          <h1 className="ubuntu-hero-title">{title}</h1>
          <p className="ubuntu-lead mt-5">{lead}</p>
          <div className="ubuntu-cta-row">
            <Link to={primaryCta.href} className="ubuntu-btn-primary">
              {primaryCta.label}
            </Link>
            <UbuntuLink to={secondaryCta.href} muted>
              {secondaryCta.label}
            </UbuntuLink>
          </div>
        </div>
      </div>
    </div>
  );
}
