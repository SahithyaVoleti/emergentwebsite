import UbuntuLink from "./UbuntuLink";
import SectionEyebrow from "./SectionEyebrow";
import SectionTitle from "./SectionTitle";
import { sectionBlockClass } from "../../lib/sectionBands";

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
  const sectionClass = sectionBlockClass(
    "border-b border-[#d9d9d9]",
    className,
  );

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
              {eyebrow && <SectionEyebrow>{eyebrow}</SectionEyebrow>}
              {title && (
                <SectionTitle id={id ? `${id}-heading` : undefined} title={title} />
              )}
              {lead && <p className="ubuntu-lead mt-3">{lead}</p>}
            </div>
            {headerAction}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
