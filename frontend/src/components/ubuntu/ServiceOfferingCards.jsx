import { Link } from "react-router-dom";
import { paletteAccentIndex } from "../../lib/brandPalette";

function gridClassForCount(count) {
  if (count <= 1) return "grid-cols-1 max-w-md";
  if (count === 2) return "grid-cols-1 sm:grid-cols-2 max-w-4xl";
  if (count === 3) return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";
  return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4";
}

/**
 * Image + title + description cards — main services and service lines.
 */
export default function ServiceOfferingCards({
  items = [],
  cardVariant = "line",
  className = "",
}) {
  if (!items.length) return null;

  const isPillar = cardVariant === "pillar";
  const mediaClass = isPillar
    ? "ubuntu-services-grid__card-media--pillar"
    : "ubuntu-services-grid__card-media--line";
  const cardClass = isPillar
    ? "ubuntu-services-grid__card--pillar"
    : "ubuntu-services-grid__card--line";

  return (
    <ul
      className={`ubuntu-services-grid m-0 grid list-none gap-4 p-0 lg:gap-6 ${gridClassForCount(items.length)} ${className}`.trim()}
    >
      {items.map((item, index) => {
        const image = item.cardImage ?? item.flagship?.heroImage;
        const title = item.title ?? item.label;
        const description = item.description ?? item.shortDesc;
        const testId = item.testId ?? `offering-card-${item.key ?? item.id}`;

        return (
          <li key={item.key ?? item.id} className="ubuntu-services-grid__item">
            <Link
              to={item.href}
              data-testid={testId}
              data-palette-accent={paletteAccentIndex(index)}
              className={`ubuntu-services-grid__card ${cardClass} group flex h-full flex-col overflow-hidden border border-[#d9d9d9] bg-white transition-colors hover:border-[color-mix(in_srgb,var(--item-accent)_45%,#d9d9d9)]`}
            >
              <div
                className={`ubuntu-services-grid__card-media ${mediaClass} aspect-[4/3] overflow-hidden bg-white`}
              >
                {image ? (
                  <img src={image} alt="" className="h-full w-full" loading="lazy" decoding="async" />
                ) : null}
              </div>
              <div className="flex flex-1 flex-col border-t border-[#e5e5e5] px-3 py-3 sm:px-4 sm:py-4">
                <h3 className="text-sm font-medium leading-snug text-[#2d2d2d] sm:text-[0.9375rem]">
                  {title}
                </h3>
                {description ? (
                  <p className="mt-2 flex-1 text-xs leading-relaxed text-[#5c5c5c] sm:text-sm">
                    {description}
                  </p>
                ) : null}
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
