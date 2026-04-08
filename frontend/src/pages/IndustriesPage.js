import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import PageHero from "../components/PageHero";
import PageContactForm from "../components/PageContactForm";
import industries from "../data/industries";
import { LISTING_PAGE_HERO_IMAGES } from "../lib/heroImageThemes";

export default function IndustriesPage() {
  return (
    <div>
      <PageHero
        label="Industries"
        title="Purpose-built AI for Industry Excellence"
        description="We engineer industry-ready AI systems built for regulatory compliance, total data security, and measurable financial impact across every sector we serve."
        primaryCTA={{ text: "Book a Consultation", href: "#page-contact" }}
        image={LISTING_PAGE_HERO_IMAGES.industries}
      />
      <section className="py-20 sm:py-24 corp-pat-diag-dash">
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((ind) => (
              <Link
                key={ind.slug}
                to={`/industries/${ind.slug}`}
                data-testid={`industry-link-${ind.slug}`}
                className="group bg-white border border-slate-200 rounded-sm overflow-hidden hover:border-[#2563EB]/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
              >
                <div className="relative h-44 w-full overflow-hidden bg-[#0B1B3D]/10 shrink-0">
                  <img
                    src={ind.heroImage}
                    alt=""
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <ind.icon size={28} className="text-[#2563EB] mb-4" />
                  <h3 className="text-lg font-bold text-[#0B1B3D] group-hover:text-[#2563EB] mb-3 transition-colors" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>{ind.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed mb-4 flex-1">{ind.shortDesc}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-[#2563EB]">Explore <ArrowRight size={14} /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <PageContactForm context="Industries Page" />
    </div>
  );
}
