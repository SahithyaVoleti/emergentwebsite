import { Link } from "react-router-dom";
import caseStudies from "../../../data/caseStudies";
import { HOME_VALIDATION } from "../../../data/homePageSections";
import SectionEyebrow from "../../ubuntu/SectionEyebrow";
import SectionTitle from "../../ubuntu/SectionTitle";
import { sectionBlockClass } from "../../../lib/sectionBands";

const studiesBySlug = Object.fromEntries(caseStudies.map((cs) => [cs.slug, cs]));

export default function UbuntuHomeValidationSection() {
  const items = HOME_VALIDATION.slugs
    .map((slug) => studiesBySlug[slug])
    .filter(Boolean);

  if (!items.length) return null;

  return (
    <section
      id={HOME_VALIDATION.id}
      data-testid="home-validation-section"
      className={sectionBlockClass("border-b border-[#d9d9d9]")}
      aria-labelledby={`${HOME_VALIDATION.id}-heading`}
    >
      <div className="ubuntu-container">
        <div className="mb-8 max-w-3xl lg:mb-10">
          <SectionEyebrow>{HOME_VALIDATION.eyebrow}</SectionEyebrow>
          <SectionTitle id={`${HOME_VALIDATION.id}-heading`} title={HOME_VALIDATION.title} />
          <p className="ubuntu-lead mt-3">{HOME_VALIDATION.lead}</p>
        </div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          {items.map((cs) => (
            <article
              key={cs.slug}
              className="flex h-full flex-col border border-[#e5e5e5] bg-white p-6"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-[#8b4c6e]">
                {cs.industry}
              </p>
              <h3 className="mt-2 text-lg font-medium leading-snug text-[#2d2d2d]">
                {cs.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-[#7d8597]">
                {cs.heroDesc}
              </p>
              <Link
                to={`/case-studies/${cs.slug}`}
                className="mt-5 text-sm font-medium text-[#d1511f] hover:underline"
              >
                Read transformation summary →
              </Link>
            </article>
          ))}
        </div>

        {HOME_VALIDATION.viewAllHref && (
          <p className="ubuntu-body mt-8">
            <Link to={HOME_VALIDATION.viewAllHref} className="text-[#d1511f] hover:underline">
              {HOME_VALIDATION.viewAllLabel}
            </Link>
          </p>
        )}
      </div>
    </section>
  );
}
