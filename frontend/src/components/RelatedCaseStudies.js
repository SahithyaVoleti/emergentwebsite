import { Link } from "react-router-dom";
import UbuntuSectionShell from "./ubuntu/UbuntuSectionShell";
import UbuntuLink from "./ubuntu/UbuntuLink";
import caseStudies from "../data/caseStudies";

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
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#666]">
              Coverage
            </p>
          )}
          <h2 className="ubuntu-section-title">{title || "Coverage across scenarios"}</h2>
        </div>
        <UbuntuLink to="/case-studies" muted data-testid="view-all-case-studies">
          Explore all scenarios
        </UbuntuLink>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {display.map((cs) => (
          <Link
            key={cs.slug}
            to={`/case-studies/${cs.slug}`}
            className="group flex h-full flex-col border border-[#d9d9d9] bg-white p-6 transition-colors hover:border-[#8b1538]"
          >
            <span className="text-xs font-semibold uppercase tracking-wide text-[#8b1538]">
              {cs.industry}
            </span>
            <h3 className="mt-3 text-base font-medium text-[#111] group-hover:text-[#8b1538]">
              {cs.title}
            </h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-[#555]">{cs.shortDesc}</p>
            <span className="mt-4 text-sm font-medium text-[#8b1538]">View scenario →</span>
          </Link>
        ))}
      </div>
    </UbuntuSectionShell>
  );
}
