import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import UbuntuLink from "./UbuntuLink";
import SectionEyebrow from "./SectionEyebrow";
import SectionTitle from "./SectionTitle";
import { SECTION_LABEL } from "../../data/sectionLabels";

/**
 * Enterprise service offerings catalog — structured rows (consulting-firm layout).
 */
export default function ServicesGrid4x4({
  services = [],
  id = "services-grid",
  eyebrow = SECTION_LABEL.serviceCatalog,
  title = "Service offerings",
  lead = "End-to-end capabilities across intelligent automation, application modernization, data, and cloud engineering—structured for enterprise delivery and governance.",
  viewAllHref = undefined,
  viewAllLabel = "View all services",
  className = "",
}) {
  if (!services.length) return null;

  return (
    <section
      id={id}
      className={`ubuntu-section-block border-y border-[#d9d9d9] bg-white ${className}`}
      aria-labelledby={`${id}-heading`}
    >
      <div className="ubuntu-container">
        <div className="mb-8 flex flex-col gap-4 lg:mb-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            {eyebrow && <SectionEyebrow>{eyebrow}</SectionEyebrow>}
            <SectionTitle id={`${id}-heading`} title={title} />
            {lead && <p className="ubuntu-lead mt-3">{lead}</p>}
          </div>
          {viewAllHref && (
            <UbuntuLink to={viewAllHref} muted className="flex-shrink-0">
              {viewAllLabel}
            </UbuntuLink>
          )}
        </div>

        <ul className="ubuntu-services-offerings m-0 list-none border border-[#e5e5e5] bg-white p-0">
          {services.map((service, index) => {
            const code = String(index + 1).padStart(2, "0");
            const capabilities = service.catalogCapabilities ?? [];

            const displayTitle = service.catalogTitle ?? service.title;
            const showPillar = service.pillar && service.pillar !== displayTitle;

            return (
              <li key={service.slug} className="ubuntu-services-offerings__item">
                <Link
                  to={`/services/${service.slug}`}
                  data-testid={`service-grid-card-${service.slug}`}
                  className="ubuntu-services-offering group relative grid grid-cols-1 gap-4 border-b border-[#e5e5e5] border-l-[3px] border-l-transparent bg-white p-5 transition-colors last:border-b-0 hover:border-l-[#d1511f] sm:grid-cols-[minmax(5.5rem,7rem)_minmax(0,1.35fr)_minmax(0,1fr)_auto] sm:items-start sm:gap-5 sm:p-6 lg:grid-cols-[10.5rem_minmax(0,1.2fr)_minmax(0,1fr)_auto] lg:gap-8"
                >
                  <div className="ubuntu-services-offering__meta">
                    <span className="ubuntu-services-offering__code">{code}</span>
                    {showPillar && (
                      <span className="ubuntu-services-offering__pillar">{service.pillar}</span>
                    )}
                  </div>

                  <div className="ubuntu-services-offering__main min-w-0">
                    <h3 className="text-lg font-medium leading-snug text-[#2d2d2d] sm:text-xl">
                      {displayTitle}
                    </h3>
                    {service.shortDesc && (
                      <p className="mt-2 text-sm leading-relaxed text-[#4a4a4a] sm:text-[0.9375rem]">
                        {service.shortDesc}
                      </p>
                    )}
                  </div>

                  {capabilities.length > 0 && (
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
                  )}

                  <span className="ubuntu-services-offering__cta inline-flex items-center gap-1.5 self-start text-sm font-medium text-[#d1511f] sm:mt-0.5 sm:justify-self-end lg:self-center">
                    Explore offering
                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover:translate-x-0.5"
                      aria-hidden
                    />
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
