import { ArrowRight, Bot, Brain, Layers, TrendingUp } from "lucide-react";
import SiteNavLink from "./SiteNavLink";
import MockupGif from "./MockupGif";

const FEATURE_ICONS = {
  bot: Bot,
  layers: Layers,
  brain: Brain,
  "trending-up": TrendingUp,
};

function HeroMedia({ media }) {
  if (!media?.src) return null;

  const mediaType = media.mediaType ?? "image";
  const isMotionMedia = mediaType === "video" || mediaType === "gif";

  return (
    <div
      className={[
        "ubuntu-hero-transformation__media",
        isMotionMedia && "ubuntu-hero-transformation__media--video",
        media.variant === "service-pillar" && "ubuntu-hero-transformation__media--service-pillar",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {mediaType === "video" ? (
        <video
          src={media.src}
          className="ubuntu-hero-transformation__video"
          autoPlay
          muted
          playsInline
          aria-hidden="true"
        />
      ) : mediaType === "gif" ? (
        <MockupGif
          src={media.src}
          screenClassName="ubuntu-hero-transformation__mockup-screen"
          imgClassName="ubuntu-hero-transformation__mockup-gif"
        />
      ) : (
        <img
          src={media.src}
          alt=""
          className="ubuntu-hero-transformation__illustration"
          draggable={false}
          aria-hidden="true"
        />
      )}
    </div>
  );
}

function renderTitle(title) {
  if (!title) return null;

  if (typeof title === "object" && title.accent != null) {
    return (
      <>
        {title.before}{" "}
        <span className="ubuntu-hero-transformation__title-accent">{title.accent}</span>{" "}
        {title.after}
      </>
    );
  }

  return title;
}

/**
 * Homepage-aligned light-split hero for all site pages.
 * @param {"primary" | "detail" | "utility"} [significance]
 */
export default function UbuntuLightSplitHero({
  id = "page-hero",
  testId = "page-hero",
  embedded = false,
  significance = "primary",
  title,
  description,
  features = [],
  primaryCTA,
  secondaryCTA,
  media,
  hideContent = false,
}) {
  const showMedia = significance !== "utility" && media?.src;
  const isUtility = significance === "utility";

  if (hideContent) {
    return (
      <div
        id={id}
        data-testid={testId}
        className={[
          "ubuntu-hero-transformation",
          embedded ? "ubuntu-site-page-chrome__hero" : "",
        ]
          .filter(Boolean)
          .join(" ")}
        aria-hidden
      />
    );
  }

  const showSecondaryCta =
    significance === "primary" && Boolean(secondaryCTA?.href?.trim());

  const renderCta = (cta, primary = false) => {
    if (!cta?.href?.trim()) return null;

    if (primary) {
      return (
        <SiteNavLink
          href={cta.href}
          contactIntent={cta.contactIntent}
          primary
          showArrow={false}
          className="ubuntu-hero-transformation__cta-btn"
        >
          {cta.text ?? cta.label}
          <ArrowRight size={18} aria-hidden className="ubuntu-hero-transformation__cta-arrow" />
        </SiteNavLink>
      );
    }

    return (
      <SiteNavLink
        href={cta.href}
        contactIntent={cta.contactIntent}
        muted
        showArrow
      >
        {cta.text ?? cta.label}
      </SiteNavLink>
    );
  };

  return (
    <div
      id={id}
      data-testid={testId}
      className={[
        "ubuntu-hero-transformation",
        isUtility && "ubuntu-hero-transformation--utility",
        significance === "detail" && "ubuntu-hero-transformation--detail",
        embedded ? "ubuntu-site-page-chrome__hero" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="ubuntu-container ubuntu-hero-transformation__container">
        <div
          className={[
            "ubuntu-hero-transformation__grid",
            !showMedia && "ubuntu-hero-transformation__grid--content-only",
          ]
            .filter(Boolean)
            .join(" ")}
        >
          <div className="ubuntu-hero-transformation__copy">
            <div className="ubuntu-hero-transformation__intro">
              {title && (
                <h1 data-testid="page-hero-title" className="ubuntu-hero-transformation__title">
                  {renderTitle(title)}
                </h1>
              )}
            </div>

            <div className="ubuntu-hero-transformation__body">
              {description && (
                <p className="ubuntu-hero-transformation__lead ubuntu-lead">{description}</p>
              )}

              {(features.length > 0 || primaryCTA || showSecondaryCta) && (
                <div className="ubuntu-hero-transformation__actions">
                  {features.length > 0 && (
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
                  )}

                  {(primaryCTA || showSecondaryCta) && (
                    <div className="ubuntu-hero-transformation__cta ubuntu-cta-row">
                      {primaryCTA && renderCta(primaryCTA, significance !== "utility")}
                      {showSecondaryCta && renderCta(secondaryCTA, false)}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {showMedia ? <HeroMedia media={media} /> : null}
        </div>
      </div>
    </div>
  );
}
