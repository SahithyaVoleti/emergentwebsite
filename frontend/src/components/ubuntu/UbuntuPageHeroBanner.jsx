import { ArrowRight } from "lucide-react";
import SiteNavLink from "./SiteNavLink";
import { BRAND_HERO_SYMBOL } from "../../data/brandAssets";

function parseHeroTitle(title) {
  if (!title) return null;
  if (typeof title === "object" && title.accent != null) return title;
  if (typeof title === "string" && title.includes("|")) {
    const [before = "", accent = "", after = ""] = title.split("|").map((part) => part.trim());
    if (accent) return { before, accent, after };
  }
  return title;
}

function renderHeroTitle(title) {
  const parsed = parseHeroTitle(title);
  if (typeof parsed === "object" && parsed.accent != null) {
    return (
      <>
        {parsed.before}
        {parsed.before ? " " : null}
        <span className="ubuntu-home-hero-banner__title-accent">{parsed.accent}</span>
        {parsed.after ? ` ${parsed.after}` : null}
      </>
    );
  }
  return parsed;
}

function normalizeCta(cta) {
  if (!cta?.href?.trim()) return null;
  return {
    label: cta.label ?? cta.text,
    href: cta.href,
    contactIntent: cta.contactIntent,
  };
}

/**
 * Homepage-aligned hero band — headline, lead, optional CTAs, symbol watermark.
 */
export default function UbuntuPageHeroBanner({
  id = "hero",
  testId = "hero-section",
  embedded = false,
  significance = "primary",
  title,
  lead,
  description,
  primaryCTA,
  secondaryCTA,
  showSymbol = true,
  hideContent = false,
}) {
  if (hideContent) {
    return (
      <div
        id={id}
        data-testid={testId}
        className={[
          "ubuntu-home-hero-banner",
          "ubuntu-home-hero-banner--spacer",
          embedded ? "ubuntu-site-page-chrome__hero" : "",
        ]
          .filter(Boolean)
          .join(" ")}
        aria-hidden
      />
    );
  }

  const body = lead ?? description;
  const primary = normalizeCta(primaryCTA);
  const secondary = normalizeCta(secondaryCTA);
  const showSecondary = significance === "primary" && Boolean(secondary);
  const isDetail = significance === "detail";

  return (
    <div
      id={id}
      data-testid={testId}
      className={[
        "ubuntu-home-hero-banner",
        isDetail && "ubuntu-home-hero-banner--detail",
        embedded ? "ubuntu-site-page-chrome__hero" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="ubuntu-container ubuntu-home-hero-banner__container">
        <div className="ubuntu-home-hero-banner__grid">
          <div className="ubuntu-home-hero-banner__copy">
            {title ? (
              <h1 data-testid="page-hero-title" className="ubuntu-home-hero-banner__title">
                {renderHeroTitle(title)}
              </h1>
            ) : null}
            {body ? <p className="ubuntu-home-hero-banner__lead">{body}</p> : null}
            {(primary || showSecondary) && (
              <div className="ubuntu-home-hero-banner__cta ubuntu-cta-row flex-wrap">
                {primary ? (
                  <SiteNavLink
                    href={primary.href}
                    contactIntent={primary.contactIntent ?? "consultation"}
                    primary
                    showArrow={false}
                    className="ubuntu-hero-transformation__cta-btn"
                  >
                    {primary.label}
                    <ArrowRight size={18} aria-hidden className="ubuntu-hero-transformation__cta-arrow" />
                  </SiteNavLink>
                ) : null}
                {showSecondary ? (
                  <SiteNavLink
                    href={secondary.href}
                    contactIntent={secondary.contactIntent}
                    muted
                    showArrow
                  >
                    {secondary.label}
                  </SiteNavLink>
                ) : null}
              </div>
            )}
          </div>

          {showSymbol ? (
            <div className="ubuntu-home-hero-banner__symbol" aria-hidden="true">
              <img
                src={BRAND_HERO_SYMBOL}
                alt=""
                draggable={false}
                className="ubuntu-home-hero-banner__symbol-img"
              />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
