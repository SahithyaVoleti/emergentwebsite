import { Link } from "react-router-dom";
import UbuntuLink from "./UbuntuLink";
import ProductCardHeading from "./ProductCardHeading";
/**
 * Services catalog as a responsive 4-column card grid (4×2 for eight tracks on large screens).
 */
export default function ServicesGrid4x4({
  services = [],
  id = "services-grid",
  eyebrow = "Coverage",
  title = "Coverage across service delivery tracks",
  lead = "This coverage lists delivery tracks you can brief against. Select a card to open the full service overview.",
  viewAllHref = undefined,
  viewAllLabel = "View all services",
  className = "",
}) {
  if (!services.length) return null;

  return (
    <section
      id={id}
      className={`ubuntu-section-block border-y border-[#d9d9d9] ${className}`}
      aria-labelledby={`${id}-heading`}
    >
      <div className="ubuntu-container">
        <div className="mb-6 flex flex-col gap-4 lg:mb-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            {eyebrow && (
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#666]">{eyebrow}</p>
            )}
            <h2 id={`${id}-heading`} className="ubuntu-section-title">
              {title}
            </h2>
            {lead && <p className="ubuntu-lead mt-3">{lead}</p>}
          </div>
          {viewAllHref && (
            <UbuntuLink to={viewAllHref} muted className="flex-shrink-0">
              {viewAllLabel}
            </UbuntuLink>
          )}
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4 lg:gap-5">
          {services.map((service) => {
            const Icon = service.icon;
            return (              <Link
                key={service.slug}
                to={`/services/${service.slug}`}
                data-testid={`service-grid-card-${service.slug}`}
                className="ubuntu-services-grid__card group flex flex-col border border-[#e5e5e5] bg-white transition-colors hover:border-[#8b1538]/55 hover:shadow-[0_8px_24px_rgba(139, 21, 56,0.08)]"
              >
                <div className="relative aspect-square overflow-hidden bg-[#eee] border-b border-[#e5e5e5]">
                  <img
                    src={service.heroImage}
                    alt=""
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    loading="lazy"
                    decoding="async"
                  />
                  {Icon && (
                    <span className="absolute left-2 top-2 flex h-8 w-8 items-center justify-center bg-[#8b1538] text-white sm:left-3 sm:top-3">
                      <Icon size={16} strokeWidth={2} aria-hidden />
                    </span>
                  )}
                </div>                <div className="shrink-0 border-t border-[#e5e5e5] bg-white py-3 sm:py-4 group-hover:bg-[#fafafa]">
                  <ProductCardHeading className="group-hover:[&_.ubuntu-product-card__heading-text]:text-[#8b1538]">
                    {service.title}
                  </ProductCardHeading>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
