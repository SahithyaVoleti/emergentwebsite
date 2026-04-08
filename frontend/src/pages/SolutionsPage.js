import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import PageHero from "../components/PageHero";
import PageContactForm from "../components/PageContactForm";
import solutions from "../data/solutions";
import { LISTING_PAGE_HERO_IMAGES } from "../lib/heroImageThemes";

export default function SolutionsPage() {
  return (
    <div>
      <PageHero
        label="Our Solutions"
        title="AI-Driven Digital Solutions for Every Challenge"
        description="We don't just build tools; we engineer high-performance intelligence that justifies your investment through reduced manual effort and superior technical integrity."
        primaryCTA={{ text: "Explore Solutions", href: "#solutions-list" }}
        image={LISTING_PAGE_HERO_IMAGES.solutions}
      />
      <section id="solutions-list" className="py-20 sm:py-24 corp-pat-cross-dash">
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((s) => (
              <Link
                key={s.slug}
                to={`/solutions/${s.slug}`}
                data-testid={`solution-link-${s.slug}`}
                className="group bg-white border border-slate-200 rounded-sm overflow-hidden hover:border-[#2563EB]/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
              >
                <div className="relative h-44 w-full overflow-hidden bg-[#0B1B3D]/10 shrink-0">
                  <img
                    src={s.heroImage}
                    alt=""
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-[#0B1B3D] group-hover:text-[#2563EB] mb-3 transition-colors" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>
                    {s.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed mb-4 flex-1">{s.shortDesc}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {s.tech.slice(0, 3).map((t) => (
                      <span key={t} className="text-xs px-2 py-1 bg-slate-100 text-slate-600 rounded-sm">{t}</span>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-[#2563EB]">
                    Learn More <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <PageContactForm context="Solutions Page" />
    </div>
  );
}
