import { useState } from "react";
import { cn } from "../lib/utils";
import { getTechFoundationIcon } from "../lib/techFoundationIcons";
import {
  getSimpleIconColoredImageUrl,
  getSimpleIconImageUrl,
  techNameToSimpleIconSlug,
} from "../lib/serviceTechStackSlugs";

export default function TechBrandIcon({ name, compact = false }) {
  const slug = techNameToSimpleIconSlug(name);
  const [source, setSource] = useState(slug ? "colored" : "fallback");
  const Icon = getTechFoundationIcon(name);
  const sizeClass = compact ? "h-5 w-5 sm:h-6 sm:w-6" : "h-8 w-8";

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
