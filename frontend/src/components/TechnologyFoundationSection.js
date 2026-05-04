import { Link } from "react-router-dom";
import { cn } from "../lib/utils";
import AnimatedSection from "./AnimatedSection";
import { CategorizedTechStackPanels, normalizeTechCategories } from "./CategorizedTechStackSection";

/**
 * Service page: intro + CTA, then a 2×2 corporate panel grid per technology category
 * (same treatment as industry reference stack).
 */
export default function TechnologyFoundationSection({
  label = "Coverage",
  titleLead = "Empowering Innovation",
  titleMuted = "Through Advanced Technologies",
  title,
  description,
  categories = [],
  dataTestId = "technology-foundation-section",
  className = "",
  integrationsHref = "/partners",
  integrationsCta = "See all integrations",
}) {
  const cats = normalizeTechCategories(categories);
  const hasCategories = cats.length > 0;

  return (
    <section
      data-testid={dataTestId}
      className={cn(
        "border-t border-slate-200 bg-[#EFF3F8] py-10 sm:py-12 md:py-14",
        className
      )}
    >
      <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
        <AnimatedSection>
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-[#0B1B3D]/85">
              {label}
            </p>
            <h2 className="mb-4 text-2xl font-bold tracking-tight text-[#0B1B3D] sm:text-3xl lg:text-[2.15rem] lg:leading-snug">
              {title ? (
                title
              ) : (
                <>
                  {titleLead}{" "}
                  <span className="corp-heading-secondary">{titleMuted}</span>
                </>
              )}
            </h2>
            {description ? (
              <p className="mb-6 text-base leading-relaxed text-slate-700">
                {description}
              </p>
            ) : null}
            <Link
              to={integrationsHref}
              className="inline-flex items-center justify-center rounded-sm bg-[#2563eb] px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-700"
            >
              {integrationsCta}
            </Link>
          </div>
        </AnimatedSection>

        {hasCategories ? (
          <CategorizedTechStackPanels categories={cats} />
        ) : (
          <p className="py-8 text-center text-sm text-slate-600">
            No technologies listed.
          </p>
        )}
      </div>
    </section>
  );
}
