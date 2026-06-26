import { useMemo } from "react";
import { cn } from "../lib/utils";
import TechBrandIcon from "./TechBrandIcon";

function TechRibbonChip({ name, compact = false }) {
  return (
    <div
      className={[
        "ubuntu-tech-ribbon__chip flex shrink-0 items-center rounded-full border border-[#e5e5e5] bg-white shadow-sm",
        compact ? "gap-2 px-3 py-1.5" : "gap-2.5 px-4 py-2",
      ].join(" ")}
      data-testid={`tech-ribbon-${String(name)
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")}`}
    >
      <TechBrandIcon name={name} compact />
      <span
        className={[
          "whitespace-nowrap font-medium text-[#2d2d2d]",
          compact ? "text-[11px] sm:text-xs" : "text-xs sm:text-sm",
        ].join(" ")}
      >
        {name}
      </span>
    </div>
  );
}

/**
 * Horizontal infinite-scroll ribbon of technology names and icons.
 */
export default function TechStackRibbon({
  items = [],
  className,
  trackClassName,
  /** "normal" | "slow" | "fast" */
  speed = "normal",
  compact = false,
  ariaLabel = "Technology stack",
}) {
  const unique = useMemo(
    () => [...new Set(items.map((x) => String(x).trim()).filter(Boolean))],
    [items]
  );

  if (!unique.length) return null;

  const speedClass =
    speed === "slow"
      ? "ubuntu-tech-ribbon__track--slow"
      : speed === "fast"
        ? "ubuntu-tech-ribbon__track--fast"
        : "";

  return (
    <div
      className={cn("ubuntu-tech-ribbon group overflow-hidden", className)}
      role="list"
      aria-label={ariaLabel}
    >
      <div
        className={cn(
          "tech-marquee-track ubuntu-tech-ribbon__track group-hover:[animation-play-state:paused]",
          speedClass,
          trackClassName
        )}
      >
        {[...unique, ...unique].map((name, index) => (
          <div key={`${name}-${index}`} role="listitem">
            <TechRibbonChip name={name} compact={compact} />
          </div>
        ))}
      </div>
    </div>
  );
}
