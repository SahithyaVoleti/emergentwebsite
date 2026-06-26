import { Link } from "react-router-dom";
import UbuntuListingSection from "./UbuntuListingSection";
import { SECTION_LABEL } from "../../data/sectionLabels";
import { paletteAccentIndex } from "../../lib/brandPalette";

/**
 * Industry catalog grid — same visual language as homepage industry coverage.
 */
export default function UbuntuIndustriesGrid({
  industries = [],
  id = "verticals",
  eyebrow = SECTION_LABEL.industries,
  title = "Industry programs",
  lead = "Sectors where we scope pilots today; each overview ties constraints to delivery patterns and milestone checkpoints.",
  className = "!border-t-0",
}) {
  if (!industries.length) return null;

  return (
    <UbuntuListingSection
      id={id}
      eyebrow={eyebrow}
      title={title}
      lead={lead}
      className={className}
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {industries.map((ind, index) => {
          const Icon = ind.icon;
          return (
            <Link
              key={ind.slug}
              to={`/industries/${ind.slug}`}
              data-testid={`industry-link-${ind.slug}`}
              data-palette-accent={paletteAccentIndex(index)}
              className="ubuntu-service-card group flex h-full flex-col border border-[#d9d9d9] bg-white p-5 transition-colors hover:border-[color-mix(in_srgb,var(--item-accent)_50%,#d9d9d9)]"
            >
              {Icon && (
                <span className="ubuntu-palette-icon-ring mb-4 flex h-10 w-10 items-center justify-center border">
                  <Icon className="ubuntu-palette-icon-fill" size={20} strokeWidth={1.5} aria-hidden />
                </span>
              )}
              <h3 className="text-base font-medium text-[#2d2d2d] group-hover:text-[var(--item-accent-hover)]">
                {ind.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-[#7d8597]">{ind.shortDesc}</p>
              <span className="ubuntu-palette-text mt-4 text-sm font-medium">Technical overview →</span>
            </Link>
          );
        })}
      </div>
    </UbuntuListingSection>
  );
}
