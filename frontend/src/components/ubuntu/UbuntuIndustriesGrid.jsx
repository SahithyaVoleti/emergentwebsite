import { Link } from "react-router-dom";
import UbuntuListingSection from "./UbuntuListingSection";

/**
 * Industry catalog grid — same visual language as homepage industry coverage.
 */
export default function UbuntuIndustriesGrid({
  industries = [],
  id = "verticals",
  eyebrow = "Coverage",
  title = "Coverage across industry programs",
  lead = "This coverage surfaces sectors where we scope pilots today; each overview ties constraints to delivery patterns and milestone checkpoints.",
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
        {industries.map((ind) => {
          const Icon = ind.icon;
          return (
            <Link
              key={ind.slug}
              to={`/industries/${ind.slug}`}
              data-testid={`industry-link-${ind.slug}`}
              className="ubuntu-service-card group flex h-full flex-col border border-[#d9d9d9] bg-white p-5 transition-colors hover:border-[#8b1538]"
            >
              {Icon && (
                <span className="mb-4 flex h-10 w-10 items-center justify-center border border-[#8b1538] text-[#8b1538]">
                  <Icon size={20} strokeWidth={1.5} aria-hidden />
                </span>
              )}
              <h3 className="text-base font-medium text-[#111] group-hover:text-[#8b1538]">
                {ind.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-[#555]">{ind.shortDesc}</p>
              <span className="mt-4 text-sm font-medium text-[#8b1538]">Technical overview →</span>
            </Link>
          );
        })}
      </div>
    </UbuntuListingSection>
  );
}
