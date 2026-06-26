import { Children, Fragment, isValidElement } from "react";

function flattenChildren(children) {
  return Children.toArray(children).flatMap((child) => {
    if (isValidElement(child) && child.type === Fragment) {
      return Children.toArray(child.props.children);
    }
    return child;
  });
}

function isSectionTitle(child) {
  if (!isValidElement(child)) return false;
  if (child.type === "h1" || child.type === "h2") return true;
  const className = child.props?.className ?? "";
  return typeof className === "string" && className.includes("ubuntu-section-title");
}

/** Split split-layout copy so media can sit between the section title and body on small screens. */
export function splitLayoutContentAtTitle(children) {
  const items = flattenChildren(children);
  const titleIndex = items.findIndex(isSectionTitle);

  if (titleIndex === -1) {
    return { intro: null, body: children, structured: false };
  }

  return {
    intro: items.slice(0, titleIndex + 1),
    body: items.slice(titleIndex + 1),
    structured: true,
  };
}
