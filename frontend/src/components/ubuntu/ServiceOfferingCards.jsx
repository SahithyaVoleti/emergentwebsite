import { Link } from "react-router-dom";
import { paletteAccentIndex } from "../../lib/brandPalette";

function resolveCardTo(href) {
  if (!href || !href.includes("#")) return href;
  const hashIndex = href.indexOf("#");
  const pathname = href.slice(0, hashIndex) || "/";
  const hash = href.slice(hashIndex);
  return { pathname, hash };
}

function gridClassForCount(count, cardVariant) {
  if (cardVariant === "pillar") {
    return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4";
  }

  if (cardVariant === "subservice") {
    if (count === 4) return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4";
    if (count === 6) return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";
    if (count === 5) return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";
    return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";
  }

  if (count <= 1) return "grid-cols-1 max-w-md";
  if (count === 2) return "grid-cols-1 sm:grid-cols-2 max-w-4xl";
  if (count === 3) return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";
  return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4";
}

/**
 * Image + title cards — main services and subservices.
 */
export default function ServiceOfferingCards({
  items = [],
  cardVariant = "subservice",
  className = "",
}) {
  if (!items.length) return null;

  const isPillar = cardVariant === "pillar";
  const isSubservice = cardVariant === "subservice";
  const mediaClass = isPillar
    ? "ubuntu-services-grid__card-media--pillar"
    : isSubservice
      ? "ubuntu-services-grid__card-media--subservice"
      : "ubuntu-services-grid__card-media--line";
  const cardClass = isPillar
    ? "ubuntu-services-grid__card--pillar"
    : isSubservice
      ? "ubuntu-services-grid__card--subservice"
      : "ubuntu-services-grid__card--line";

  return (
    <ul
      className={`ubuntu-services-grid m-0 grid list-none gap-4 p-0 lg:gap-6 ${gridClassForCount(items.length, cardVariant)} ${className}`.trim()}
    >
      {items.map((item, index) => {
        const image = item.cardImage ?? item.flagship?.heroImage;
        const title = item.title ?? item.label;
        const testId = item.testId ?? `offering-card-${item.key ?? item.id}`;
        const showMedia = item.showMedia !== false && Boolean(image);

        return (
          <li key={item.key ?? item.id} id={item.id} className="ubuntu-services-grid__item scroll-mt-28">
            <Link
              to={resolveCardTo(item.href)}
              data-testid={testId}
              data-palette-accent={paletteAccentIndex(index)}
              className={`ubuntu-services-grid__card ${cardClass} group flex h-full flex-col overflow-hidden border border-[#d9d9d9] bg-white transition-colors hover:border-[color-mix(in_srgb,var(--item-accent)_45%,#d9d9d9)]`}
            >
              {showMedia ? (
                <div
                  className={`ubuntu-services-grid__card-media ${mediaClass} aspect-[4/3] overflow-hidden bg-white`}
                >
                  <img src={image} alt="" className="h-full w-full" loading="lazy" decoding="async" />
                </div>
              ) : null}
              <div
                className={`flex flex-1 flex-col justify-center border-[#e5e5e5] px-4 py-5 sm:px-5 sm:py-6 ${showMedia ? "border-t" : ""}`}
              >
                <h3 className="text-sm font-medium leading-snug text-[#2d2d2d] sm:text-[0.9375rem]">
                  {title}
                </h3>
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
