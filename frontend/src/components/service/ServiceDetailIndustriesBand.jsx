import { Link } from "react-router-dom";
import industries from "../../data/industries";
import { SECTION_LABEL } from "../../data/sectionLabels";
import SectionEyebrow from "../ubuntu/SectionEyebrow";
import SectionTitle from "../ubuntu/SectionTitle";
import { paletteAccentIndex } from "../../lib/brandPalette";

/**
 * Homepage UbuntuHomeIndustries shell — industries served copy unchanged.
 */
export default function ServiceDetailIndustriesBand({
  id = "industries-served",
  eyebrow = SECTION_LABEL.industries,
  title = "Industries we serve",
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
        {eyebrow && <SectionEyebrow>{eyebrow}</SectionEyebrow>}
        <SectionTitle id={`${id}-heading`} title={title} />
        {lead && <p className="ubuntu-lead mt-4 max-w-3xl">{lead}</p>}

        <ul className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-8">
          {displayIndustries.map((ind, index) => {
            const Icon = ind.icon;
            return (
              <li key={ind.slug}>
                <Link
                  to={`/industries/${ind.slug}`}
                  data-palette-accent={paletteAccentIndex(index)}
                  className="ubuntu-industry-icon-card group flex flex-col items-center text-center"
                >
                  <span className="ubuntu-palette-icon-ring flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full border-2 bg-white transition-colors group-hover:bg-white sm:h-20 sm:w-20">
                    {Icon && (
                      <Icon
                        className="ubuntu-palette-icon-fill h-8 w-8 transition-colors sm:h-9 sm:w-9"
                        strokeWidth={1.5}
                        aria-hidden
                      />
                    )}
                  </span>
                  <span className="mt-4 text-sm font-medium leading-snug text-[#2d2d2d] transition-colors sm:text-base">
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
