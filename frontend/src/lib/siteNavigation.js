import { CONTACT_TOPIC, contactFormTo } from "./contactIntent";

const CONTACT_HASH = "page-contact";

export function isContactHref(href) {
  if (!href) return false;
  const value = href.trim();
  return (
    value === `#${CONTACT_HASH}` ||
    value.startsWith(`#${CONTACT_HASH}`) ||
    value.includes(CONTACT_HASH)
  );
}

export function scrollToElementId(elementId, { behavior = "smooth", retry = false } = {}) {
  const scroll = (element) => element.scrollIntoView({ behavior });

  const target = document.getElementById(elementId);
  if (target) {
    scroll(target);
    return true;
  }

  if (!retry) return false;

  let attempts = 0;
  const maxAttempts = 40;
  const tick = () => {
    const element = document.getElementById(elementId);
    if (element) {
      scroll(element);
      return;
    }
    if (attempts++ < maxAttempts) {
      window.requestAnimationFrame(tick);
    }
  };
  window.requestAnimationFrame(tick);
  return true;
}

function contactTopicFromHref(href, contactIntent) {
  if (href.includes("topic=consultation") || contactIntent === "consultation") {
    return CONTACT_TOPIC.CONSULTATION;
  }
  if (href.includes("topic=contact") || contactIntent === "contact") {
    return CONTACT_TOPIC.CONTACT;
  }
  return contactIntent === "consultation"
    ? CONTACT_TOPIC.CONSULTATION
    : CONTACT_TOPIC.CONTACT;
}

/**
 * Resolve marketing links into route, hash, or external navigation targets.
 */
export function resolveNavTarget(href, pathname = "/", contactIntent) {
  const raw = (href || "").trim();

  if (!raw) {
    return { type: "hash", elementId: CONTACT_HASH };
  }

  if (/^https?:\/\//i.test(raw) || raw.startsWith("mailto:")) {
    return { type: "external", href: raw };
  }

  if (raw.startsWith("#")) {
    const elementId = raw.split("?")[0].slice(1) || CONTACT_HASH;
    if (isContactHref(raw) && pathname !== "/") {
      return {
        type: "route",
        to: contactFormTo(pathname, contactTopicFromHref(raw, contactIntent)),
      };
    }
    return { type: "hash", elementId };
  }

  if (raw.startsWith("/")) {
    const hashIndex = raw.indexOf("#");
    if (hashIndex !== -1) {
      const routePath = raw.slice(0, hashIndex) || pathname || "/";
      const hash = raw.slice(hashIndex + 1);
      if (hash.includes(CONTACT_HASH)) {
        return {
          type: "route",
          to: contactFormTo(routePath, contactTopicFromHref(raw, contactIntent)),
        };
      }
      return { type: "route", to: { pathname: routePath, hash: `#${hash}` } };
    }
    return { type: "route", to: raw };
  }

  return { type: "route", to: raw };
}
