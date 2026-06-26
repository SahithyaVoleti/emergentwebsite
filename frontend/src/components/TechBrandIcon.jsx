import { useState } from "react";
import { cn } from "../lib/utils";
import { getTechFoundationIcon } from "../lib/techFoundationIcons";
import {
  getSimpleIconColoredImageUrl,
  getSimpleIconImageUrl,
  techNameToSimpleIconSlug,
} from "../lib/serviceTechStackSlugs";

export default function TechBrandIcon({ name, compact = false, logoOnly = false }) {
  const slug = techNameToSimpleIconSlug(name);
  const [source, setSource] = useState(slug ? "colored" : "fallback");
  const Icon = getTechFoundationIcon(name);
  const sizeClass = logoOnly
    ? compact
      ? "h-8 w-8 sm:h-9 sm:w-9"
      : "h-10 w-10 sm:h-12 sm:w-12"
    : compact
      ? "h-5 w-5 sm:h-6 sm:w-6"
      : "h-8 w-8";

  if (source === "fallback" || !slug) {
    return <Icon className={cn("shrink-0 text-[#2d2d2d]", sizeClass)} aria-hidden />;
  }

  const src =
    source === "colored" ? getSimpleIconColoredImageUrl(slug) : getSimpleIconImageUrl(slug);

  return (
    <img
      src={src}
      alt=""
      className={cn("shrink-0 object-contain", sizeClass)}
      loading="lazy"
      decoding="async"
      draggable={false}
      onError={() => {
        setSource((prev) => (prev === "colored" ? "mono" : "fallback"));
      }}
    />
  );
}

/** Brand logo with readable name — no card chrome. */
export function TechBrandMark({ name, compact = false, className }) {
  return (
    <div
      className={cn("ubuntu-tech-brand-mark", className)}
      data-testid={`tech-brand-${String(name)
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")}`}
      title={name}
    >
      <TechBrandIcon name={name} compact={compact} logoOnly />
      <span className="ubuntu-tech-brand-mark__label">{name}</span>
    </div>
  );
}
