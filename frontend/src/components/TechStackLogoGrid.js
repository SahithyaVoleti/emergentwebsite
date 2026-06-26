import { useMemo } from "react";
import { cn } from "../lib/utils";
import TechBrandIcon from "./TechBrandIcon";
import TechStackRibbon from "./TechStackRibbon";

export { default as TechBrandIcon } from "./TechBrandIcon";

/**
 * Technology card: white tile, brand SVG (Simple Icons) with react-icons fallback.
 */
export function TechStackLogoTile({ name, compact = false, className }) {
  return (
    <div
      className={cn(
        "group flex flex-col items-center justify-center rounded-2xl bg-white text-center shadow-[0_4px_12px_rgba(15,23,42,0.08)] ring-1 ring-slate-100/90 transition-[transform,box-shadow] duration-200 hover:shadow-[0_8px_20px_rgba(15,23,42,0.12)]",
        compact
          ? "min-h-[76px] px-2 py-2 sm:min-h-[80px]"
          : "aspect-[3/2] min-h-[96px] max-h-[128px] px-3 py-4 sm:min-h-[104px]",
        className
      )}
      data-testid={`tech-tile-${String(name)
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")}`}
    >
      <TechBrandIcon name={name} compact={compact} />
      <span
        className={cn(
          "mt-2 max-w-[140px] font-bold uppercase leading-tight tracking-wide text-[#2d2d2d]",
          compact ? "text-[8px] sm:text-[9px]" : "text-[9px] sm:text-[10px]"
        )}
      >
        {name}
      </span>
    </div>
  );
}

/**
 * Tech logos: default is a horizontal sliding ribbon. Set marquee={false} for a static grid.
 */
export default function TechStackLogoGrid({
  items = [],
  compact = false,
  className,
  gridClassName,
  marquee = true,
  marqueeColumnCap: _marqueeColumnCap,
  marqueeColumnHeightClassName: _marqueeColumnHeightClassName,
  ribbonSpeed = "normal",
}) {
  const unique = useMemo(
    () => [...new Set(items.map((x) => String(x).trim()).filter(Boolean))],
    [items]
  );

  if (unique.length === 0) return null;

  if (marquee) {
    return (
      <TechStackRibbon
        items={unique}
        compact={compact}
        speed={ribbonSpeed}
        className={className}
      />
    );
  }

  return (
    <div
      className={cn(
        "grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-5",
        gridClassName,
        className
      )}
    >
      {unique.map((name) => (
        <TechStackLogoTile key={name} name={name} compact={compact} />
      ))}
    </div>
  );
}
