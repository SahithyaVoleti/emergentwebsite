import {
  ArrowRight,
  Bot,
  Brain,
  Layers,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import SiteNavLink from "../../ubuntu/SiteNavLink";
import { HOME_HERO } from "../../../data/homePageSections";
import { getSiteMockup } from "../../../data/siteMockups";

const FEATURE_ICONS = {
  bot: Bot,
  layers: Layers,
  brain: Brain,
  "trending-up": TrendingUp,
};

export default function UbuntuHomeHero({ embedded = false }) {
  const {
    badge,
    titleBefore,
    titleAccent,
    titleAfter,
    features,
    primaryCta,
  } = HOME_HERO;

  const heroImage = getSiteMockup("hero");

  return (
    <div
      id="hero"
      data-testid="hero-section"
      className={[
        "ubuntu-hero-transformation",
        embedded ? "ubuntu-site-page-chrome__hero" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="ubuntu-container ubuntu-hero-transformation__container">
        <div className="ubuntu-hero-transformation__grid">
          <div className="ubuntu-hero-transformation__content">
            <p className="ubuntu-hero-transformation__badge">
              <Sparkles size={14} aria-hidden className="ubuntu-hero-transformation__badge-icon" />
              {badge}
            </p>

            <h1 className="ubuntu-hero-transformation__title">
              {titleBefore}{" "}
              <span className="ubuntu-hero-transformation__title-accent">{titleAccent}</span>{" "}
              {titleAfter}
            </h1>

            <ul className="ubuntu-hero-transformation__features" aria-label="Core capabilities">
              {features.map(({ icon, label }) => {
                const Icon = FEATURE_ICONS[icon] ?? Bot;
                return (
                  <li key={label} className="ubuntu-hero-transformation__feature">
                    <span className="ubuntu-hero-transformation__feature-icon-wrap" aria-hidden>
                      <Icon size={20} className="ubuntu-hero-transformation__feature-icon" />
                    </span>
                    <span className="ubuntu-hero-transformation__feature-label">{label}</span>
                  </li>
                );
              })}
            </ul>

            <div className="ubuntu-hero-transformation__cta">
              <SiteNavLink
                href={primaryCta.href}
                contactIntent="consultation"
                primary
                showArrow={false}
                className="ubuntu-hero-transformation__cta-btn"
              >
                {primaryCta.label}
                <ArrowRight size={18} aria-hidden className="ubuntu-hero-transformation__cta-arrow" />
              </SiteNavLink>
            </div>
          </div>

          <div className="ubuntu-hero-transformation__media">
            <img
              src={heroImage.src}
              alt={heroImage.alt}
              className="ubuntu-hero-transformation__illustration"
              draggable={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
