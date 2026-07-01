import { Children, Fragment, isValidElement } from "react";

function flattenChildren(children) {
  return Children.toArray(children).flatMap((child) => {
    if (isValidElement(child) && child.type === Fragment) {
      return Children.toArray(child.props.children);
    }
    return child;
  });
}

function getComponentName(type) {
  if (typeof type === "string") return type;
  return type?.displayName || type?.name || "";
}

function isHeading(child) {
  if (!isValidElement(child)) return false;

  if (getComponentName(child.type) === "SectionTitle") return true;

  if (typeof child.type === "string" && /^h[1-6]$/.test(child.type)) return true;

  const className = child.props?.className ?? "";
  return (
    typeof className === "string" &&
    (className.includes("ubuntu-section-title") ||
      className.includes("ubuntu-hero-transformation__title"))
  );
}

/** Split split-layout copy so media can sit between the section title and body on small screens. */
export function splitLayoutContentAtTitle(children) {
  const items = flattenChildren(children);
  const titleIndex = items.findIndex(isHeading);

  if (titleIndex === -1) {
    return { intro: null, body: children, structured: false };
  }

  return {
    intro: items.slice(0, titleIndex + 1),
    body: items.slice(titleIndex + 1),
    structured: true,
  };
}

/** Prefer title-based split whenever section media is present. */
export function splitLayoutContentForMedia(children) {
  return splitLayoutContentAtTitle(children);
}
