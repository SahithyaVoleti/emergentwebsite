import PageHero from "../components/PageHero";
import PageContactForm from "../components/PageContactForm";
import AnimatedSection, { StaggerChildren, StaggerItem } from "../components/AnimatedSection";
import ListingImageCard from "../components/ListingImageCard";
import industries from "../data/industries";
import { LISTING_PAGE_HERO_IMAGES } from "../lib/heroImageThemes";

export default function IndustriesPage() {
  return (
    <div>
      <PageHero
        label="Industries"
        title="Industry-Specific AI Programs for Complex Environments"
        description="Each industry track addresses domain constraints, compliance expectations, and process maturity to ensure adoption without operational disruption."
        primaryCTA={{ text: "Book a Consultation", href: "#page-contact" }}
        image={LISTING_PAGE_HERO_IMAGES.industries}
      />
      <section className="py-20 sm:py-24 corp-pat-diag-dash">
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((ind) => (
              <StaggerItem key={ind.slug}>
                <ListingImageCard
                  to={`/industries/${ind.slug}`}
                  data-testid={`industry-link-${ind.slug}`}
                  image={ind.heroImage}
                  title={ind.title}
                  description={ind.shortDesc}
                  icon={ind.icon}
                  ctaText="Explore"
                  variant="industry"
                />
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>
      <section className="py-20 sm:py-24 bg-white border-y border-slate-200/70">
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
          <AnimatedSection>
            <div className="max-w-3xl mb-10">
              <p className="text-xs font-semibold text-[#2563EB] uppercase tracking-widest mb-4">
                Industry Outcomes
              </p>
              <h2
                className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0B1B3D] mb-5"
                style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
              >
                Performance Gains Mapped to Sector Priorities
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                We align each rollout to the KPIs that matter in that domain, including turnaround time, control quality, and service consistency.
              </p>
            </div>
          </AnimatedSection>
          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: "30-60%", label: "Process automation improvement" },
              { value: "2-4x", label: "Faster operational insights" },
              { value: "40%+", label: "Reduction in response/handling time" },
              { value: "Audit-ready", label: "Governed and traceable workflows" },
            ].map((item) => (
              <StaggerItem key={item.label}>
                <div className="h-full rounded-sm border border-slate-200 p-6 bg-[#F8FAFC]">
                  <p
                    className="text-3xl font-bold text-[#0B1B3D] mb-2"
                    style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
                  >
                    {item.value}
                  </p>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.label}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>
      <section className="py-20 sm:py-24 corp-pat-cross-dash">
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
          <AnimatedSection>
            <div className="max-w-2xl mb-12">
              <p className="text-xs font-semibold text-[#2563EB] uppercase tracking-widest mb-4">
                Implementation Framework
              </p>
              <h2
                className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0B1B3D]"
                style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
              >
                Structured Rollout for Domain Risk and Compliance Needs
              </h2>
            </div>
          </AnimatedSection>
          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Assess Constraints", desc: "Map regulatory, data, and integration constraints by business unit." },
              { step: "02", title: "Design Blueprint", desc: "Define secure architecture, controls, and measurable implementation milestones." },
              { step: "03", title: "Pilot + Validate", desc: "Deploy in a focused workflow with KPI tracking and risk controls." },
              { step: "04", title: "Scale + Govern", desc: "Extend across teams with monitoring, auditability, and optimization loops." },
            ].map((item) => (
              <StaggerItem key={item.step}>
                <div className="h-full rounded-sm border border-slate-200 bg-white p-6">
                  <span
                    className="inline-flex items-center rounded-full border border-[#2563EB]/20 bg-[#2563EB]/5 px-2.5 py-1 text-[11px] font-semibold tracking-wider text-[#2563EB] mb-4"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    STEP {item.step}
                  </span>
                  <h3 className="text-lg font-bold text-[#0B1B3D] mb-2" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>
      <section className="py-20 sm:py-24 bg-white">
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
          <AnimatedSection>
            <div className="max-w-3xl mb-10">
              <p className="text-xs font-semibold text-[#2563EB] uppercase tracking-widest mb-4">
                Capability Matrix
              </p>
              <h2
                className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0B1B3D] mb-5"
                style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
              >
                Core Capabilities Available Across Industries
              </h2>
            </div>
          </AnimatedSection>
          <div className="rounded-sm border border-slate-200 overflow-hidden">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 bg-[#F8FAFC] border-b border-slate-200">
              {["Capability", "Healthcare", "Finance", "Retail", "Education", "Real Estate"].map((h) => (
                <div key={h} className="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-slate-600">{h}</div>
              ))}
            </div>
            {[
              ["Automation Workflows", "Yes", "Yes", "Yes", "Yes", "Yes"],
              ["Predictive Intelligence", "Yes", "Yes", "Yes", "Partial", "Yes"],
              ["Compliance Reporting", "Yes", "Yes", "Partial", "Partial", "Partial"],
            ].map((row) => (
              <div key={row[0]} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 border-b last:border-b-0 border-slate-200">
                {row.map((cell, idx) => (
                  <div key={`${row[0]}-${idx}`} className="px-4 py-3 text-sm text-slate-600">
                    {idx === 0 ? <span className="font-semibold text-[#0B1B3D]">{cell}</span> : cell}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 sm:py-24 bg-[#F8FAFC] border-y border-slate-200/70">
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
          <AnimatedSection>
            <div className="max-w-3xl mb-10">
              <p className="text-xs font-semibold text-[#2563EB] uppercase tracking-widest mb-4">Methodology</p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0B1B3D] mb-4" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>
                Methodology for Industry-Focused Program Delivery
              </h2>
            </div>
          </AnimatedSection>
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Advisory + Blueprint", desc: "Define priority use-cases and implementation architecture for your industry context." },
              { title: "Pilot Deployment", desc: "Launch one high-value workflow with KPI tracking and governance controls." },
              { title: "Scaled Rollout", desc: "Expand across business units with operating standards and optimization loops." },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <div className="h-full rounded-sm border border-slate-200 bg-white p-6">
                  <h3 className="text-lg font-bold text-[#0B1B3D] mb-3" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>
      <section className="py-16 sm:py-20 bg-[#0B1B3D]">
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
          <AnimatedSection>
            <div className="rounded-sm border border-white/15 bg-white/[0.02] p-8 sm:p-10 lg:p-12">
              <p className="text-xs font-semibold text-blue-200 uppercase tracking-widest mb-4">Next Step</p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>
                Plan an Industry Rollout with Lower Execution Risk
              </h2>
              <p className="text-base text-blue-100/90 leading-relaxed max-w-3xl">
                This next step maps your regulatory, operational, and data constraints into a practical AI rollout strategy.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
      <PageContactForm context="Industries Page" />
    </div>
  );
}
