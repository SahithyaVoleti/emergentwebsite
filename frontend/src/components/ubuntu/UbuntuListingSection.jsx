import UbuntuLink from "./UbuntuLink";

/**
 * Homepage-style section shell for listing/catalog content (Coverage bands).
 */
export default function UbuntuListingSection({
  id,
  eyebrow,
  title,
  lead,
  children,
  className = "",
  variant = "default",
  headerAction,
  viewAllHref,
  viewAllLabel = "View all",
}) {
  const sectionClass = [
    "ubuntu-section-block border-b border-[#d9d9d9]",
    variant === "alt" ? "ubuntu-section--alt" : "bg-white",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const action =
    headerAction ??
    (viewAllHref ? (
      <UbuntuLink to={viewAllHref} muted className="flex-shrink-0 self-start lg:self-auto">
        {viewAllLabel}
      </UbuntuLink>
    ) : null);

  return (
    <section id={id} className={sectionClass} aria-labelledby={id ? `${id}-heading` : undefined}>
      <div className="ubuntu-container">
        <div className="mb-6 flex flex-col gap-4 lg:mb-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            {eyebrow && (
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#5c677d]">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 id={id ? `${id}-heading` : undefined} className="ubuntu-section-title text-[#002855]">
                {title}
              </h2>
            )}
            {lead && <p className="ubuntu-lead mt-3 text-[#33415c]">{lead}</p>}
          </div>
          {action}
        </div>
        {children}
      </div>
    </section>
  );
}
