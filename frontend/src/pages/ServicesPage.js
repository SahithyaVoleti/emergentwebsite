import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import PageHero from "../components/PageHero";
import PageContactForm from "../components/PageContactForm";
import AnimatedSection, { StaggerChildren, StaggerItem } from "../components/AnimatedSection";
import services from "../data/services";
import { SERVICES_LANDING_HERO_IMAGE } from "../lib/heroImageThemes";

export default function ServicesPage() {
  return (
    <div>
      <PageHero
        label="Our Services"
        title="AI Development Services for Real-World Impact"
        description="Navigate through the current tech-driven landscape and foster long-term growth with custom AI solutions tailored to your unique business challenges."
        primaryCTA={{ text: "Talk to Our Experts", href: "#page-contact" }}
        image={SERVICES_LANDING_HERO_IMAGE}
      />
      <section className="py-20 sm:py-24 corp-pat-dots">
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <StaggerItem key={s.slug}>
                <Link
                  to={`/services/${s.slug}`}
                  data-testid={`service-link-${s.slug}`}
                  className="group relative isolate min-h-[320px] overflow-hidden rounded-sm border border-slate-200/80 shadow-sm hover:border-slate-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 block h-full flex flex-col"
                >
                  <img
                    src={s.heroImage}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    loading="lazy"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/[0.92] via-black/50 to-black/15"
                    aria-hidden
                  />
                  <div
                    className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"
                    aria-hidden
                  />
                  <div className="relative z-10 flex min-h-[320px] flex-col justify-between p-6 sm:p-8">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-white/30 bg-black/25 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.5)] backdrop-blur-md transition-all duration-300 group-hover:border-white/45 group-hover:bg-black/35">
                      <s.icon size={26} className="text-white drop-shadow-sm" strokeWidth={1.75} />
                    </div>
                    <div className="pt-8">
                      <h3 className="text-lg font-bold text-white mb-3 tracking-tight drop-shadow-md" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>{s.title}</h3>
                      <p className="text-sm text-white/95 leading-relaxed mb-5 [text-shadow:0_2px_20px_rgba(0,0,0,0.75),0_1px_3px_rgba(0,0,0,0.9)]">{s.shortDesc}</p>
                      <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-white/95 underline underline-offset-4 decoration-white/35 group-hover:decoration-white transition-colors">
                        Learn More <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>
      <PageContactForm context="Services Page" />
    </div>
  );
}
