import { Link } from "react-router-dom";
import UbuntuSectionShell from "./ubuntu/UbuntuSectionShell";
import UbuntuLink from "./ubuntu/UbuntuLink";
import caseStudies from "../data/caseStudies";
import { SECTION_LABEL } from "../data/sectionLabels";

export default function RelatedCaseStudies({
  industryFilter,
  title,
  showLabel = true,
}) {
  let filtered = caseStudies;
  if (industryFilter) {
    filtered = caseStudies.filter(
      (cs) =>
        cs.industry.toLowerCase().includes(industryFilter.toLowerCase()) ||
        cs.techStack.some((t) => t.toLowerCase().includes(industryFilter.toLowerCase()))
    );
    if (filtered.length < 2) filtered = caseStudies;
  }
  const display = filtered.slice(0, 3);

  return (
    <UbuntuSectionShell data-testid="related-case-studies" variant="alt">
      <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div className="max-w-3xl">
          {showLabel && (
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#6b6b6b]">
              {SECTION_LABEL.productionTestCases}
            </p>
          )}
          <h2 className="ubuntu-section-title">{title || "Related production test cases"}</h2>
        </div>
        <UbuntuLink to="/case-studies" muted data-testid="view-all-case-studies">
          View all test cases
        </UbuntuLink>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {display.map((cs) => (
          <Link
            key={cs.slug}
            to={`/case-studies/${cs.slug}`}
            className="group flex h-full flex-col border border-[#d9d9d9] bg-white p-6 transition-colors hover:border-[#5c5c5c]"
          >
            <span className="text-xs font-semibold uppercase tracking-wide text-[#5c5c5c]">
              {cs.industry}
            </span>
            <h3 className="mt-3 text-base font-medium text-[#2d2d2d] group-hover:text-[#4a4a4a]">
              {cs.title}
            </h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-[#7d8597]">{cs.shortDesc ?? cs.heroDesc}</p>
            <span className="mt-4 text-sm font-medium text-[#5c5c5c]">View test case →</span>
          </Link>
        ))}
      </div>
    </UbuntuSectionShell>
  );
}
