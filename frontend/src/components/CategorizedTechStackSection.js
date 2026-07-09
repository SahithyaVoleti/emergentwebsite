import { Link } from "react-router-dom";
import { cn } from "../lib/utils";
import { SECTION_LABEL } from "../data/sectionLabels";
import TechStackLogoGrid from "./TechStackLogoGrid";
import SectionEyebrow from "./ubuntu/SectionEyebrow";
import SectionTitle from "./ubuntu/SectionTitle";
import { sectionBlockClass } from "../lib/sectionBands";

const DEFAULT_CATEGORY_DESC =
  "Representative tools for scoping and integration planning; selection follows your standards and procurement rules.";

function techItemName(tech) {
  if (typeof tech === "string") return tech.trim();
  return String(tech?.name ?? "").trim();
}

/**
 * Normalize API shapes: { category }, { cat }, { title }, optional desc / description.
 */
export function normalizeTechCategories(categories) {
  return (categories || [])
    .map((c) => ({
      title: String(c.title || c.cat || c.category || "").trim(),
      description: String(c.desc || c.description || "").trim(),
      techs: Array.isArray(c.techs) ? c.techs.map(techItemName).filter(Boolean) : [],
    }))
    .filter((x) => x.title && x.techs.length);
}

/** Simple titled block with static tech logo grid (case studies, solution sidebar, etc.) */
export function FlatTechStackPanel({
  eyebrow,
  title,
  intro,
  children,
  className,
}) {
  return (
    <div className={cn("ubuntu-tech-stack-inline", className)}>
      {eyebrow ? <SectionEyebrow>{eyebrow}</SectionEyebrow> : null}
      {title ? <h3 className="text-sm font-medium text-[#2d2d2d] sm:text-base">{title}</h3> : null}
      {intro ? (
        <p className="mt-2 text-sm leading-relaxed text-[#7d8597]">{intro}</p>
      ) : null}
      <div className="mt-4">{children}</div>
    </div>
  );
}

/** Inset wrapper for tight layouts — same static grid format */
export function TechStackLogoInset({ children, className }) {
  return <div className={className}>{children}</div>;
}

/**
 * Category rows — each with a static logo + name grid (About Us format).
 */
export function CategorizedTechStackPanels({
  categories,
  className,
}) {
  const cats = normalizeTechCategories(categories);
  if (cats.length === 0) return null;

  return (
    <div className={cn("ubuntu-tech-category-groups flex flex-col gap-10", className)}>
      {cats.map((c) => (
        <article key={c.title} className="ubuntu-tech-category-group">
          <h3 className="text-xs font-semibold uppercase tracking-wide text-[#2d2d2d]">
            {c.title}
          </h3>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-[#7d8597]">
            {c.description || DEFAULT_CATEGORY_DESC}
          </p>
          <TechStackLogoGrid items={c.techs} className="mt-4" />
        </article>
      ))}
    </div>
  );
}

/**
 * Full section: eyebrow, title, intro, optional integrations link, categorized grids.
 */
export default function CategorizedTechStackSection({
  eyebrow = SECTION_LABEL.technology,
  title,
  intro,
  categories = [],
  dataTestId = "categorized-tech-stack",
  className,
  integrationsHref,
  integrationsCta = "See all integrations",
  showIntegrations = false,
  children,
}) {
  const cats = normalizeTechCategories(categories);

  return (
    <section
      data-testid={dataTestId}
      className={cn(sectionBlockClass("border-y border-[#d9d9d9]"), className)}
    >
      <div className="ubuntu-container">
        <div className="mb-10 max-w-3xl">
          <SectionEyebrow>{eyebrow}</SectionEyebrow>
          {typeof title === "string" ? (
            <SectionTitle title={title} />
          ) : (
            title
          )}
          {intro ? <p className="ubuntu-lead mt-3">{intro}</p> : null}
          {showIntegrations && integrationsHref ? (
            <div className="ubuntu-cta-row">
              <Link to={integrationsHref} className="ubuntu-btn-primary inline-flex border-0">
                {integrationsCta}
              </Link>
            </div>
          ) : null}
          {children}
        </div>

        <CategorizedTechStackPanels categories={cats} />

        {!cats.length ? (
          <p className="py-8 text-center text-sm text-[#7d8597]">No technologies listed.</p>
        ) : null}
      </div>
    </section>
  );
}
