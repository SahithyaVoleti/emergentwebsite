import { Link, useLocation } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { isContactHref, resolveNavTarget, scrollToElementId } from "../../lib/siteNavigation";

function linkClassName({ primary, muted, className }) {
  const base = primary ? "ubuntu-btn-primary" : muted ? "ubuntu-link-muted" : "ubuntu-link";
  return [base, className].filter(Boolean).join(" ");
}

export default function SiteNavLink({
  href,
  to,
  contactIntent,
  primary = false,
  muted = false,
  showArrow = true,
  className = "",
  children,
  ...rest
}) {
  const location = useLocation();
  const rawHref = (href ?? to ?? "").trim();
  const classes = linkClassName({ primary, muted, className });

  if (isContactHref(rawHref)) {
    const target = resolveNavTarget(rawHref, location.pathname, contactIntent);

    if (target.type === "hash") {
      return (
        <a
          href={`#${target.elementId}`}
          className={classes}
          onClick={(event) => {
            event.preventDefault();
            scrollToElementId(target.elementId, { retry: true });
          }}
          {...rest}
        >
          {children}
          {!primary && showArrow ? <ArrowRight size={14} aria-hidden className="inline ml-1" /> : null}
        </a>
      );
    }

    return (
      <Link to={target.to} className={classes} {...rest}>
        {children}
        {!primary && showArrow ? <ArrowRight size={14} aria-hidden className="inline ml-1" /> : null}
      </Link>
    );
  }

  const target = resolveNavTarget(rawHref, location.pathname, contactIntent);

  if (target.type === "external") {
    return (
      <a
        href={target.href}
        className={classes}
        target={target.href.startsWith("mailto:") ? undefined : "_blank"}
        rel={target.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
        {...rest}
      >
        {children}
        {!primary && showArrow ? <ArrowRight size={14} aria-hidden className="inline ml-1" /> : null}
      </a>
    );
  }

  if (target.type === "hash") {
    return (
      <a
        href={`#${target.elementId}`}
        className={classes}
        onClick={(event) => {
          event.preventDefault();
          scrollToElementId(target.elementId, { retry: true });
        }}
        {...rest}
      >
        {children}
        {!primary && showArrow ? <ArrowRight size={14} aria-hidden className="inline ml-1" /> : null}
      </a>
    );
  }

  return (
    <Link to={target.to} className={classes} {...rest}>
      {children}
      {!primary && showArrow ? <ArrowRight size={14} aria-hidden className="inline ml-1" /> : null}
    </Link>
  );
}
