import { Link } from "react-router-dom";
import { CLIENT_CASE_STUDIES } from "../../data/clientCaseStudies";
import { SERVICES_CASE_STUDIES } from "../../data/servicesPageSections";

/** @typedef {typeof SERVICES_CASE_STUDIES} CaseStudiesPreviewConfig */
import SectionEyebrow from "./SectionEyebrow";
import SectionTitle from "./SectionTitle";

const studiesBySlug = Object.fromEntries(CLIENT_CASE_STUDIES.map((study) => [study.slug, study]));

export default function ServicesClientCaseStudiesPreview({ config = SERVICES_CASE_STUDIES }) {
  const items = config.slugs.map((slug) => studiesBySlug[slug]).filter(Boolean);

  if (!items.length) return null;

  return (
    <section
      id={config.id}
      data-testid="services-case-studies"
      className="ubuntu-section-block border-b border-[#d9d9d9] bg-[#fafafa]"
      aria-labelledby={`${config.id}-heading`}
    >
      <div className="ubuntu-container">
        <div className="mb-8 max-w-3xl lg:mb-10">
          <SectionEyebrow>{config.eyebrow}</SectionEyebrow>
          <SectionTitle id={`${config.id}-heading`} title={config.title} />
          <p className="ubuntu-lead mt-3">{config.lead}</p>
        </div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          {items.map((study) => (
            <article
              key={study.slug}
              className="flex h-full flex-col border border-[#e5e5e5] bg-white p-6"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-[#8b4c6e]">
                {study.customerOverview?.industry ?? study.productLabel}
              </p>
              <h3 className="mt-2 text-lg font-medium leading-snug text-[#2d2d2d]">{study.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-[#7d8597]">
                {study.description ?? study.heroDesc}
              </p>
              <Link
                to={`/our-work/case-studies/${study.slug}`}
                className="mt-5 text-sm font-medium text-[#d1511f] hover:underline"
              >
                Explore case study →
              </Link>
            </article>
          ))}
        </div>

        {config.viewAllHref && (
          <p className="ubuntu-body mt-8">
            <Link to={config.viewAllHref} className="text-[#d1511f] hover:underline">
              {config.viewAllLabel}
            </Link>
          </p>
        )}
      </div>
    </section>
  );
}
