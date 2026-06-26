import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const ROW_GRID_LINKED =
  "grid grid-cols-1 gap-4 border-b border-[#e5e5e5] border-l-[3px] border-l-transparent bg-white p-5 transition-colors last:border-b-0 hover:border-l-[#d1511f] sm:grid-cols-[minmax(5.5rem,7rem)_minmax(0,1.35fr)_minmax(0,1fr)_auto] sm:items-start sm:gap-5 sm:p-6 lg:grid-cols-[10.5rem_minmax(0,1.2fr)_minmax(0,1fr)_auto] lg:gap-8";

const ROW_GRID_STATIC =
  "grid grid-cols-1 gap-4 border-b border-[#e5e5e5] border-l-[3px] border-l-transparent bg-white p-5 transition-colors last:border-b-0 hover:border-l-[#d1511f] sm:grid-cols-[minmax(5.5rem,7rem)_minmax(0,1.35fr)_minmax(0,1fr)] sm:items-start sm:gap-5 sm:p-6 lg:grid-cols-[10.5rem_minmax(0,1.2fr)_minmax(0,1fr)] lg:gap-8";

function OfferingRowContent({
  code,
  pillar,
  title,
  description,
  capabilities = [],
  ctaLabel = "Explore offering",
  showCta = false,
}) {
  return (
    <>
      <div className="ubuntu-services-offering__meta">
        <span className="ubuntu-services-offering__code">{code}</span>
        {pillar ? <span className="ubuntu-services-offering__pillar">{pillar}</span> : null}
      </div>

      <div className="ubuntu-services-offering__main min-w-0">
        <h3 className="text-lg font-medium leading-snug text-[#2d2d2d] sm:text-xl">{title}</h3>
        {description ? (
          <p className="mt-2 text-sm leading-relaxed text-[#4a4a4a] sm:text-[0.9375rem]">
            {description}
          </p>
        ) : null}
      </div>

      {capabilities.length > 0 ? (
        <ul className="ubuntu-services-offering__capabilities m-0 hidden list-none p-0 sm:block">
          {capabilities.slice(0, 4).map((item) => (
            <li
              key={item}
              className="relative pl-3 text-xs leading-relaxed text-[#5c5c5c] before:absolute before:left-0 before:top-[0.55em] before:h-1 before:w-1 before:bg-[#d1511f]"
            >
              {item}
            </li>
          ))}
        </ul>
      ) : null}

      {showCta ? (
        <span className="ubuntu-services-offering__cta inline-flex items-center gap-1.5 self-start text-sm font-medium text-[#d1511f] sm:mt-0.5 sm:justify-self-end lg:self-center">
          {ctaLabel}
          <ArrowRight
            size={16}
            className="transition-transform group-hover:translate-x-0.5"
            aria-hidden
          />
        </span>
      ) : null}
    </>
  );
}

/**
 * Shared row catalog — homepage service offerings and service-detail capability modules.
 */
export default function ServiceOfferingsList({ items = [], className = "" }) {
  if (!items.length) return null;

  return (
    <ul className={`ubuntu-services-offerings m-0 list-none border border-[#e5e5e5] bg-white p-0 ${className}`.trim()}>
      {items.map((item, index) => {
        const code = item.code ?? String(index + 1).padStart(2, "0");
        const rowProps = {
          code,
          pillar: item.pillar,
          title: item.title,
          description: item.description,
          capabilities: item.capabilities ?? [],
          ctaLabel: item.ctaLabel,
          showCta: Boolean(item.href),
        };

        return (
          <li key={item.key ?? item.title} className="ubuntu-services-offerings__item">
            {item.href ? (
              <Link
                to={item.href}
                data-testid={item.testId}
                className={`ubuntu-services-offering group relative ${ROW_GRID_LINKED}`}
              >
                <OfferingRowContent {...rowProps} />
              </Link>
            ) : (
              <article
                data-testid={item.testId}
                className={`ubuntu-services-offering ubuntu-services-offering--static relative ${ROW_GRID_STATIC}`}
              >
                <OfferingRowContent {...rowProps} />
              </article>
            )}
          </li>
        );
      })}
    </ul>
  );
}
