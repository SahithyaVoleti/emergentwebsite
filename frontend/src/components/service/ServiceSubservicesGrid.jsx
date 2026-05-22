import ProductCardHeading from "../ubuntu/ProductCardHeading";

/**
 * Homepage ServicesGrid4x4 shell — service subservices as catalog cards (same content as scope band).
 */
export default function ServiceSubservicesGrid({
  service,
  id = "scope-of-delivery",
  eyebrow = "Coverage",
  title,
  lead = "Service modules structured for rapid time-to-value with clear boundaries per track.",
  className = "!border-t-0",
}) {
  const subs = service?.subservices ?? [];
  if (!subs.length) return null;

  const Icon = service.icon;
  const sectionTitle = title ?? `Scope of delivery for ${service.title}`;

  return (
    <section
      id={id}
      className={`ubuntu-section-block border-y border-[#d9d9d9] bg-white ${className}`}
      aria-labelledby={`${id}-heading`}
    >
      <div className="ubuntu-container">
        <div className="mb-6 flex flex-col gap-4 lg:mb-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            {eyebrow && (
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#666]">
                {eyebrow}
              </p>
            )}
            <h2 id={`${id}-heading`} className="ubuntu-section-title text-[#111]">
              {sectionTitle}
            </h2>
            {lead && <p className="ubuntu-lead mt-3 text-[#333]">{lead}</p>}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4 lg:gap-5">
          {subs.map((sub, index) => (
            <article
              key={sub.title}
              data-testid={`subservice-grid-card-${index}`}
              className="ubuntu-services-grid__card group flex flex-col border border-[#e5e5e5] bg-white"
            >
              <div className="relative aspect-square overflow-hidden border-b border-[#e5e5e5] bg-[#eee]">
                <img
                  src={service.heroImage}
                  alt=""
                  className="h-full w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                {Icon && (
                  <span className="absolute left-2 top-2 flex h-8 w-8 items-center justify-center bg-[#8b1538] text-white sm:left-3 sm:top-3">
                    <Icon size={16} strokeWidth={2} aria-hidden />
                  </span>
                )}
              </div>
              <div className="shrink-0 border-t border-[#e5e5e5] bg-white py-3 sm:py-4">
                <ProductCardHeading>{sub.title}</ProductCardHeading>
                <p className="mt-2 px-3 pb-3 text-xs leading-relaxed text-[#555] sm:px-4">{sub.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
