import { StaggerChildren, StaggerItem } from "./AnimatedSection";
import ListingImageCard from "./ListingImageCard";
import solutions from "../data/solutions";
import solutionIcons, { DEFAULT_SOLUTION_ICON } from "../data/solutionIcons";

export default function SolutionsSection() {
  return (
    <section id="solutions" data-testid="solutions-section" className="py-20 sm:py-24 md:py-32 bg-[#F8FAFC]">
      <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
        <div className="max-w-2xl mb-16">
          <p className="text-xs font-semibold text-[#2563EB] uppercase tracking-widest mb-4">
            Solutions
          </p>
          <h2
            data-testid="solutions-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0B1B3D] mb-4"
            style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
          >
            Engineering What's Next with AI-Driven Solutions
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            We don't just build tools; we engineer high-performance intelligence that justifies your investment.
          </p>
        </div>
        <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((s) => (
            <StaggerItem key={s.slug}>
              <ListingImageCard
                to={`/solutions/${s.slug}`}
                data-testid={`solution-card-${s.slug}`}
                image={s.heroImage}
                title={s.title}
                description={s.shortDesc}
                icon={solutionIcons[s.slug] || DEFAULT_SOLUTION_ICON}
                ctaText="Learn More"
                variant="solution"
                minHeightClass="min-h-[300px] sm:min-h-[320px]"
                contentMinHeightClass="min-h-[300px] sm:min-h-[320px]"
                contentPaddingClass="p-8"
              />
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
