import { Link } from "react-router-dom";
import UbuntuLink from "./UbuntuLink";
import SectionEyebrow from "./SectionEyebrow";
import SectionTitle from "./SectionTitle";
import ServiceOfferingsList from "./ServiceOfferingsList";
import { SECTION_LABEL } from "../../data/sectionLabels";
import { paletteAccentIndex } from "../../lib/brandPalette";
import { sectionBlockClass } from "../../lib/sectionBands";

function ServiceOfferingCards({ services }) {
  return (
    <ul className="ubuntu-services-grid m-0 grid list-none grid-cols-2 gap-4 p-0 lg:grid-cols-4 lg:gap-6">
      {services.map((service, index) => {
        const label = service.catalogTitle ?? service.title;

        return (
          <li key={service.slug} className="ubuntu-services-grid__item">
            <Link
              to={`/services/${service.slug}`}
              data-testid={`service-grid-card-${service.slug}`}
              data-palette-accent={paletteAccentIndex(index)}
              className="ubuntu-services-grid__card group flex h-full flex-col overflow-hidden border border-[#d9d9d9] bg-white transition-colors hover:border-[color-mix(in_srgb,var(--item-accent)_45%,#d9d9d9)]"
            >
              <div className="ubuntu-services-grid__card-media aspect-[4/3] overflow-hidden bg-[#ececec]">
                {service.heroImage ? (
                  <img
                    src={service.heroImage}
                    alt=""
                    className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
                    loading="lazy"
                    decoding="async"
                  />
                ) : null}
              </div>
              <div className="ubuntu-services-grid__card-label flex min-h-[3.25rem] items-center border-t border-[#e5e5e5] px-3 py-3 sm:min-h-[3.5rem] sm:px-4 sm:py-4">
                <h3 className="text-sm font-medium leading-snug text-[#2d2d2d] sm:text-[0.9375rem]">
                  {label}
                </h3>
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

/**
 * Service offerings — row catalog (default) or 4×4 image cards (homepage).
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
  variant = "rows",
}) {
  if (!services.length) return null;

  const items = services.map((service, index) => {
    const displayTitle = service.catalogTitle ?? service.title;
    const showPillar = service.pillar && service.pillar !== displayTitle;

    return {
      key: service.slug,
      testId: `service-grid-card-${service.slug}`,
      href: `/services/${service.slug}`,
      code: String(index + 1).padStart(2, "0"),
      pillar: showPillar ? service.pillar : undefined,
      title: displayTitle,
      description: service.shortDesc,
      capabilities: service.catalogCapabilities ?? [],
    };
  });

  const isCards = variant === "cards";

  return (
    <section
      id={id}
      className={sectionBlockClass(
        "border-y border-[#d9d9d9]",
        isCards ? "ubuntu-services-grid-section" : "",
        className,
      )}
      aria-labelledby={`${id}-heading`}
    >
      <div className="ubuntu-container">
        <div className="mb-8 flex flex-col gap-4 lg:mb-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            {eyebrow && <SectionEyebrow>{eyebrow}</SectionEyebrow>}
            <SectionTitle id={`${id}-heading`} title={title} />
            {!isCards && lead && <p className="ubuntu-lead mt-3">{lead}</p>}
          </div>
          {viewAllHref && (
            <UbuntuLink to={viewAllHref} muted className="flex-shrink-0">
              {viewAllLabel}
            </UbuntuLink>
          )}
        </div>

        {isCards ? (
          <ServiceOfferingCards services={services} />
        ) : (
          <ServiceOfferingsList items={items} />
        )}
      </div>
    </section>
  );
}
