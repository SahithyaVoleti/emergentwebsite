import { Link } from "react-router-dom";
import { cn } from "../lib/utils";
import { SECTION_LABEL } from "../data/sectionLabels";
import TechStackLogoGrid from "./TechStackLogoGrid";

const DEFAULT_CATEGORY_DESC =
  "Representative tools for scoping and integration planning; selection follows your standards and procurement rules.";

/**
 * Normalize API shapes: { category }, { cat }, { title }, optional desc / description.
 */
export function normalizeTechCategories(categories) {
  return (categories || [])
    .map((c) => ({
      title: String(c.title || c.cat || c.category || "").trim(),
      description: String(c.desc || c.description || "").trim(),
      techs: Array.isArray(c.techs) ? c.techs : [],
    }))
    .filter((x) => x.title && x.techs.length);
}

/** Navy rule + header + inset grid — single flat list (case studies, solution sidebar, etc.) */
export function FlatTechStackPanel({
  eyebrow,
  title,
  intro,
  children,
  className,
  bodyClassName,
  insetClassName,
}) {
  return (
    <div
      className={cn(
        "flex flex-col overflow-hidden border border-[#d9d9d9] bg-white",
        className
      )}
    >
      <div className="h-1 shrink-0 bg-[#5c5c5c]" aria-hidden />
      <div className="border-b border-[#e5e5e5] bg-white px-5 py-4 sm:px-6 sm:py-5">
        {eyebrow ? (
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#6b6b6b]">
            {eyebrow}
          </p>
        ) : null}
        <h3 className="text-sm font-medium text-[#2d2d2d]">{title}</h3>
        {intro ? (
          <p className="mt-3 text-sm leading-relaxed text-[#7d8597]">{intro}</p>
        ) : null}
      </div>
      <div className={cn("bg-white px-4 py-4 sm:px-5 sm:py-5", bodyClassName)}>
        <div
          className={cn(
            "overflow-hidden border border-[#d9d9d9] bg-white p-3",
            insetClassName
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

/** Inset only (for tight card footers) — gray band + white inner well */
export function TechStackLogoInset({ children, className }) {
  return (
    <div className={cn("rounded-md border border-slate-200/80 bg-white p-2.5 sm:p-3", className)}>
      <div className="overflow-hidden rounded-md border border-slate-200/90 bg-white p-2 shadow-inner sm:p-3">
        {children}
      </div>
    </div>
  );
}

/**
 * 2×2 category grid with marquee panels (industry page, service technology foundation).
 */
export function CategorizedTechStackPanels({
  categories,
  className,
  marqueeColumnCap = 3,
  marqueeColumnHeightClassName = "h-36 sm:h-44 min-h-[9rem]",
}) {
  const cats = normalizeTechCategories(categories);
  if (cats.length === 0) return null;

  return (
    <div
      className={cn("grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-6", className)}
    >
      {cats.map((c) => (
        <article
          key={c.title}
          className="group flex flex-col overflow-hidden border border-[#d9d9d9] bg-white transition-colors hover:border-[#5c5c5c]"
        >
          <div className="h-1 shrink-0 bg-[#5c5c5c]" aria-hidden />
          <div className="border-b border-[#e5e5e5] bg-white px-4 py-4 sm:px-5 sm:py-5">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-[#2d2d2d]">
              {c.title}
            </h3>
            <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-[#7d8597]">
              {c.description || DEFAULT_CATEGORY_DESC}
            </p>
          </div>
          <div className="bg-white px-4 py-4 sm:px-5 sm:py-5">
            <div className="relative border border-[#d9d9d9] bg-white p-4">
              <TechStackLogoGrid
                items={c.techs}
                compact
                marqueeColumnCap={marqueeColumnCap}
                marqueeColumnHeightClassName={marqueeColumnHeightClassName}
                className="w-full"
              />
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

/**
 * Full section: eyebrow, title, intro, optional integrations link, categorized panels.
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
  marqueeColumnCap,
  marqueeColumnHeightClassName,
}) {
  const cats = normalizeTechCategories(categories);

  return (
    <section
      data-testid={dataTestId}
      className={cn("ubuntu-section-block ubuntu-section--alt border-y border-[#d9d9d9]", className)}
    >
      <div className="ubuntu-container">
        <div className="mb-10 max-w-3xl">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#6b6b6b]">
            {eyebrow}
          </p>
          {typeof title === "string" ? (
            <h2 className="ubuntu-section-title">{title}</h2>
          ) : (
            title
          )}
          {intro ? <p className="ubuntu-lead mt-3">{intro}</p> : null}
          {showIntegrations && integrationsHref ? (
            <Link to={integrationsHref} className="ubuntu-btn-primary mt-6 inline-flex border-0">
              {integrationsCta}
            </Link>
          ) : null}
          {children}
        </div>

        <CategorizedTechStackPanels
          categories={cats}
          marqueeColumnCap={marqueeColumnCap}
          marqueeColumnHeightClassName={marqueeColumnHeightClassName}
        />

        {!cats.length ? (
          <p className="py-8 text-center text-sm text-[#7d8597]">No technologies listed.</p>
        ) : null}
      </div>
    </section>
  );
}
