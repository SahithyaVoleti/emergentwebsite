/**
 * Standard homepage section container — ubuntu-section-block + ubuntu-container.
 * Prefer UbuntuListingSection or UbuntuPageSection when a full band header is needed.
 */
export default function UbuntuSectionShell({
  id,
  eyebrow,
  title,
  lead,
  className = "",
  variant = "default",
  containerClassName = "",
  headerAction,
  children,
  "data-testid": testId,
}) {
  const sectionClass = [
    "ubuntu-section-block border-b border-[#d9d9d9]",
    variant === "alt" && "ubuntu-section--alt",
    variant === "dark" && "ubuntu-section--dark",
    variant === "default" && "bg-white",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const hasHeader = eyebrow || title || lead || headerAction;

  return (
    <section
      id={id}
      data-testid={testId}
      className={sectionClass}
      aria-labelledby={id && title ? `${id}-heading` : undefined}
    >
      <div className={`ubuntu-container ${containerClassName}`.trim()}>
        {hasHeader && (
          <div className="mb-6 flex flex-col gap-4 lg:mb-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              {eyebrow && (
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#666]">
                  {eyebrow}
                </p>
              )}
              {title && (
                <h2 id={id ? `${id}-heading` : undefined} className="ubuntu-section-title text-[#111]">
                  {title}
                </h2>
              )}
              {lead && <p className="ubuntu-lead mt-3 text-[#333]">{lead}</p>}
            </div>
            {headerAction}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
