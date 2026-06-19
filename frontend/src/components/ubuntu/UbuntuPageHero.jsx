import { Link, useLocation } from "react-router-dom";
import UbuntuLink from "./UbuntuLink";
import { CONTACT_TOPIC, contactFormTo } from "../../lib/contactIntent";

function scrollToSelector(e, hashSelector) {
  e.preventDefault();
  const target = document.querySelector(hashSelector);
  if (target) {
    const top = target.getBoundingClientRect().top + window.pageYOffset - 100;
    window.scrollTo({ top, behavior: "smooth" });
  }
}

export default function UbuntuPageHero({
  label,
  title,
  description,
  primaryCTA,
  secondaryCTA,
  hideContent = false,
  embedded = false,
}) {
  const location = useLocation();

  const contactTopicFor = (cta) =>
    cta?.contactIntent === "consultation" ? CONTACT_TOPIC.CONSULTATION : CONTACT_TOPIC.CONTACT;

  const renderCta = (cta, primary = false) => {
    if (!cta) return null;
    const href = cta.href?.trim();
    if (primary) {
      if (href === "#page-contact") {
        return (
          <Link to={contactFormTo(location.pathname, contactTopicFor(cta))} className="ubuntu-btn-primary">
            {cta.text}
          </Link>
        );
      }
      if (href?.startsWith("#")) {
        return (
          <a href={href} className="ubuntu-btn-primary" onClick={(e) => scrollToSelector(e, href)}>
            {cta.text}
          </a>
        );
      }
      if (href?.startsWith("http") || href?.startsWith("mailto:")) {
        return (
          <a href={href} className="ubuntu-btn-primary" target="_blank" rel="noreferrer">
            {cta.text}
          </a>
        );
      }
      return (
        <Link to={href || "/"} className="ubuntu-btn-primary">
          {cta.text}
        </Link>
      );
    }

    if (href === "#page-contact") {
      return <UbuntuLink to={contactFormTo(location.pathname, contactTopicFor(cta))}>{cta.text}</UbuntuLink>;
    }
    if (href?.startsWith("#")) {
      return (
        <a href={href} className="ubuntu-link-muted" onClick={(e) => scrollToSelector(e, href)}>
          {cta.text}
        </a>
      );
    }
    if (href?.startsWith("http") || href?.startsWith("mailto:")) {
      return (
        <a href={href} className="ubuntu-link-muted" target="_blank" rel="noreferrer">
          {cta.text}
        </a>
      );
    }
    return (
      <UbuntuLink to={href || "/"} muted>
        {cta.text}
      </UbuntuLink>
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
