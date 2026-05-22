import { Link } from "react-router-dom";
import industries from "../../data/industries";

/**
 * Homepage UbuntuHomeIndustries shell — industries served copy unchanged.
 */
export default function ServiceDetailIndustriesBand({
  id = "industries-served",
  eyebrow = "Coverage",
  title = "Coverage across industries",
  lead = "Sector patterns and use cases we scope during discovery for this service track.",
}) {
  const displayIndustries = industries.slice(0, 8);

  return (
    <section
      id={id}
      data-testid="service-industries-band"
      className="ubuntu-section-block border-b border-[#d9d9d9] bg-white"
      aria-labelledby={`${id}-heading`}
    >
      <div className="ubuntu-container">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#666]">{eyebrow}</p>
        <h2 id={`${id}-heading`} className="ubuntu-section-title text-[#111]">
          {title}
        </h2>
        {lead && <p className="ubuntu-lead mt-4 max-w-3xl text-[#333]">{lead}</p>}

        <ul className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-8">
          {displayIndustries.map((ind) => {
            const Icon = ind.icon;
            return (
              <li key={ind.slug}>
                <Link
                  to={`/industries/${ind.slug}`}
                  className="ubuntu-industry-icon-card group flex flex-col items-center text-center"
                >
                  <span className="flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full border-2 border-[#8b1538] bg-white transition-colors group-hover:border-[#7a1528] group-hover:bg-[#fafafa] sm:h-20 sm:w-20">
                    {Icon && (
                      <Icon
                        className="h-8 w-8 text-[#8b1538] transition-colors group-hover:text-[#7a1528] sm:h-9 sm:w-9"
                        strokeWidth={1.5}
                        aria-hidden
                      />
                    )}
                  </span>
                  <span className="mt-4 text-sm font-medium leading-snug text-[#111] transition-colors group-hover:text-[#8b1538] sm:text-base">
                    {ind.title}
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
