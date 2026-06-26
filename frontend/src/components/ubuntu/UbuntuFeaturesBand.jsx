import { Link } from "react-router-dom";
import { SECTION_LABEL } from "../../data/sectionLabels";
import { paletteAccentIndex } from "../../lib/brandPalette";

/**
 * Homepage Features band — brand icon squares + two-column definition list.
 */
export default function UbuntuFeaturesBand({
  id,
  eyebrow = SECTION_LABEL.capabilities,
  title,
  lead,
  items = [],
  variant = "default",
  className = "",
}) {
  if (!items.length) return null;

  const sectionClass = [
    "ubuntu-section-block border-b border-[#d9d9d9]",
    variant === "alt" ? "ubuntu-section--alt" : "bg-white",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section
      id={id}
      className={sectionClass}
      aria-labelledby={id ? `${id}-heading` : undefined}
    >
      <div className="ubuntu-container">
        <div className="max-w-3xl text-left">
          {eyebrow && (
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#6b6b6b]">
              {eyebrow}
            </p>
          )}
          {title && (
            <h2 id={id ? `${id}-heading` : undefined} className="ubuntu-section-title text-[#2d2d2d]">
              {title}
            </h2>
          )}
          {lead && <p className="ubuntu-lead mt-4 max-w-3xl text-[#2d2d2d]">{lead}</p>}
        </div>

        <dl className="mx-auto mt-8 grid max-w-none grid-cols-1 gap-x-8 gap-y-8 sm:mt-10 lg:grid-cols-2 lg:gap-x-12 lg:gap-y-10">
          {items.map((item, index) => {
            const Icon = item.icon;
            const name = item.href ? (
              <Link
                to={item.href}
                className="text-[#2d2d2d] underline decoration-transparent underline-offset-2 transition-colors hover:text-[#4a4a4a] hover:decoration-[#4a4a4a]"
              >
                {item.name ?? item.title}
              </Link>
            ) : (
              item.name ?? item.title
            );

            return (
              <div
                key={item.name ?? item.title}
                className="relative pl-16"
                data-palette-accent={paletteAccentIndex(index)}
              >
                <dt className="text-base font-medium leading-snug">
                  {Icon ? (
                    <div className="ubuntu-palette-icon absolute left-0 top-0 flex h-10 w-10 items-center justify-center" aria-hidden="true">
                      <Icon className="h-6 w-6 text-white" strokeWidth={2} />
                    </div>
                  ) : (
                    <div
                      className="ubuntu-palette-icon absolute left-0 top-0 flex h-10 w-10 items-center justify-center text-xs font-semibold text-white"
                      aria-hidden="true"
                    >
                      •
                    </div>
                  )}
                  {name}
                </dt>
                {(item.description ?? item.desc) && (
                  <dd className="mt-2 text-base leading-relaxed text-[#7d8597]">
                    {item.description ?? item.desc}
                  </dd>
                )}
              </div>
            );
          })}
        </dl>
      </div>
    </section>
  );
}
