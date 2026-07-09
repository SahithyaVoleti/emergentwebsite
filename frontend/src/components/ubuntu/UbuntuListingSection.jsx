import UbuntuLink from "./UbuntuLink";
import SectionEyebrow from "./SectionEyebrow";
import SectionTitle from "./SectionTitle";
import { sectionBlockClass } from "../../lib/sectionBands";

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
  const sectionClass = sectionBlockClass("border-b border-[#d9d9d9]", className);

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
            {eyebrow && <SectionEyebrow>{eyebrow}</SectionEyebrow>}
            {title && (
              <SectionTitle id={id ? `${id}-heading` : undefined} title={title} />
            )}
            {lead && <p className="ubuntu-lead mt-3">{lead}</p>}
          </div>
          {action}
        </div>
        {children}
      </div>
    </section>
  );
}
