import SiteNavLink from "./SiteNavLink";

export default function UbuntuPageHero({
  label,
  title,
  description,
  primaryCTA,
  secondaryCTA,
  hideContent = false,
  embedded = false,
}) {
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

  if (hideContent) {
    return (
      <div
        id="page-hero"
        data-testid="page-hero"
        className={[
          "ubuntu-hero-fullbleed__body",
          embedded ? "ubuntu-site-page-chrome__hero" : "",
        ]
          .filter(Boolean)
          .join(" ")}
        aria-hidden
      />
    );
  }

  return (
    <div
      id="page-hero"
      data-testid="page-hero"
      className={[
        "ubuntu-hero-fullbleed__body",
        embedded ? "ubuntu-site-page-chrome__hero" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="ubuntu-container">
        <div className="ubuntu-hero-fullbleed__content max-w-2xl">
          {label && (
            <p className="ubuntu-hero-eyebrow mb-2 text-xs font-semibold uppercase tracking-[0.12em]">
              {label}
            </p>
          )}
          {title && (
            <h1 data-testid="page-hero-title" className="ubuntu-hero-title">
              {title}
            </h1>
          )}
          {description && <p className="ubuntu-lead mt-4">{description}</p>}
          {(primaryCTA || secondaryCTA) && (
            <div className="ubuntu-cta-row">
              {renderCta(primaryCTA, true)}
              {renderCta(secondaryCTA, false)}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
