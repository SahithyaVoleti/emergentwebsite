import { groupServicesByPillar } from "../../data/servicePillars";
import SectionEyebrow from "./SectionEyebrow";
import SectionTitle from "./SectionTitle";
import ServiceOfferingCards from "./ServiceOfferingCards";
import ServicePillarCarousel from "./ServicePillarCarousel";
import UbuntuLink from "./UbuntuLink";

function PillarSections({ groups, showSubservices }) {
  return (
    <div className="space-y-12 lg:space-y-16">
      {groups.map((group) => (
        <section
          key={group.id}
          id={group.id}
          className="scroll-mt-24"
          aria-labelledby={`${group.id}-heading`}
        >
          <div className="max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-[0.12em] text-[#d1511f]">
              Main service
            </p>
            <SectionTitle as="h2" id={`${group.id}-heading`} title={group.label} />
            <p className="ubuntu-lead mt-3">{group.shortDesc}</p>
          </div>

          {showSubservices && group.subservices.length > 0 ? (
            <div className="mt-6 lg:mt-8">
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.12em] text-[#7d8597]">
                Services
              </p>
              <ServiceOfferingCards items={group.subservices} cardVariant="subservice" />
            </div>
          ) : null}
        </section>
      ))}
    </div>
  );
}

/**
 * Main services with optional subservice cards per discipline.
 */
export default function ServicesPillarCatalog({
  groups = groupServicesByPillar(),
  id = "services-catalog",
  eyebrow,
  title = "Service offerings",
  lead,
  viewAllHref,
  viewAllLabel,
  variant = "sections",
  showSubservices = true,
  className = "",
}) {
  if (!groups.length) return null;

  const isCards = variant === "cards";

  return (
    <section
      id={id}
      className={`ubuntu-section-block border-y border-[#d9d9d9] bg-white ${
        isCards ? "ubuntu-services-grid-section" : ""
      } ${className}`}
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

        {isCards ? (
          <ServicePillarCarousel
            items={groups.map((group) => ({
              key: group.id,
              id: group.id,
              href: group.href,
              label: group.label,
              tagline: group.tagline ?? group.shortDesc,
              cardImage: group.cardImage,
              testId: `main-service-card-${group.id}`,
            }))}
          />
        ) : (
          <PillarSections groups={groups} showSubservices={showSubservices} />
        )}
      </div>
    </section>
  );
}
