import { useMemo } from "react";
import { cn } from "../lib/utils";
import { TechBrandMark } from "./TechBrandIcon";

export { default as TechBrandIcon, TechBrandMark } from "./TechBrandIcon";

/** Shared responsive column layout for all tech stack grids site-wide. */
export const TECH_STACK_GRID_COLUMNS =
  "grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6";

/**
 * Technology mark — brand logo with name (no card tile).
 */
export function TechStackLogoTile({ name, compact = false, className }) {
  return <TechBrandMark name={name} compact={compact} className={className} />;
}

/**
 * Static grid of brand logos with names — standard tech stack format across all pages.
 */
export default function TechStackLogoGrid({
  items = [],
  compact = false,
  className,
  gridClassName = TECH_STACK_GRID_COLUMNS,
  ...rest
}) {
  const unique = useMemo(
    () => [...new Set(items.map((x) => String(x).trim()).filter(Boolean))],
    [items]
  );

  if (unique.length === 0) return null;

  return (
    <ul
      className={cn("ubuntu-tech-brand-grid m-0 list-none p-0", gridClassName, className)}
      role="list"
      {...rest}
    >
      {unique.map((name) => (
        <li key={name} role="listitem">
          <TechBrandMark name={name} compact={compact} />
        </li>
      ))}
    </ul>
  );
}
