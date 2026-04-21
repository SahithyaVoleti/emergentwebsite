import { StaggerChildren, StaggerItem } from "./AnimatedSection";
import ListingImageCard from "./ListingImageCard";
import industries from "../data/industries";

export default function Industries() {
  return (
    <section id="industries" data-testid="industries-section" className="py-20 sm:py-24 md:py-32 corp-pat-cross-dash">
      <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
        <div className="max-w-2xl mb-16">
          <p className="text-xs font-semibold text-[#2563EB] uppercase tracking-widest mb-4">
            Industries
          </p>
          <h2
            data-testid="industries-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0B1B3D] mb-4"
            style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
          >
            Purpose-built AI for Industry Excellence
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            We engineer industry-ready AI systems built for regulatory compliance, total data security, and measurable financial impact.
          </p>
        </div>
        <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((ind) => (
            <StaggerItem key={ind.slug}>
              <ListingImageCard
                to={`/industries/${ind.slug}`}
                data-testid={`industry-${ind.slug}`}
                image={ind.heroImage}
                title={ind.title}
                description={ind.shortDesc}
                icon={ind.icon}
                ctaText="Explore"
                variant="industryMinimal"
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
