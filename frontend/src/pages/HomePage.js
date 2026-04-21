import HeroSection from "../components/HeroSection";
import CEOLetter from "../components/CEOLetter";
import ServicesSection from "../components/ServicesSection";
import SolutionsSection from "../components/SolutionsSection";
import CaseStudies from "../components/CaseStudies";
import TechStack from "../components/TechStack";
import StatsSection from "../components/StatsSection";
import Industries from "../components/Industries";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";
import BlogResources from "../components/BlogResources";
import ContactForm from "../components/ContactForm";
import AnimatedSection, { StaggerChildren, StaggerItem } from "../components/AnimatedSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AnimatedSection><CEOLetter /></AnimatedSection>
      <AnimatedSection><ServicesSection /></AnimatedSection>
      <AnimatedSection><SolutionsSection /></AnimatedSection>
      <CaseStudies />
      <TechStack />
      <AnimatedSection><StatsSection /></AnimatedSection>
      <AnimatedSection><Industries /></AnimatedSection>
      <AnimatedSection><WhyChooseUs /></AnimatedSection>
      <AnimatedSection><Testimonials /></AnimatedSection>
      <AnimatedSection><BlogResources /></AnimatedSection>
      <section className="py-20 sm:py-24 bg-white border-y border-slate-200/70">
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
          <AnimatedSection>
            <div className="max-w-3xl mb-10">
              <p className="text-xs font-semibold text-[#2563EB] uppercase tracking-widest mb-4">Methodology</p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0B1B3D] mb-4" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>
                Our Enterprise Delivery Approach
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                This methodology combines advisory, engineering, and governance into one integrated delivery model.
              </p>
            </div>
          </AnimatedSection>
          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Discover", desc: "Prioritize use cases by ROI, feasibility, and operational readiness." },
              { step: "02", title: "Architect", desc: "Design secure, scalable systems aligned to your enterprise stack." },
              { step: "03", title: "Deploy", desc: "Launch rapidly with quality gates and measurable outcome tracking." },
              { step: "04", title: "Scale", desc: "Expand adoption across teams with governance and optimization loops." },
            ].map((item) => (
              <StaggerItem key={item.step}>
                <div className="h-full rounded-sm border border-slate-200 bg-[#F8FAFC] p-6">
                  <span className="inline-flex items-center rounded-full border border-[#2563EB]/20 bg-[#2563EB]/5 px-2.5 py-1 text-[11px] font-semibold tracking-wider text-[#2563EB] mb-4" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
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
      <section className="py-20 sm:py-24 corp-pat-dots">
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
          <AnimatedSection>
            <div className="max-w-3xl mb-10">
              <p className="text-xs font-semibold text-[#2563EB] uppercase tracking-widest mb-4">Coverage</p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0B1B3D] mb-4" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>
                Teams We Commonly Support
              </h2>
            </div>
          </AnimatedSection>
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Enterprise IT Teams", desc: "Modernizing legacy systems with scalable AI-first architectures." },
              { title: "Digital Product Organizations", desc: "Embedding intelligent features and automation into customer-facing products." },
              { title: "Operations & Process Leaders", desc: "Driving measurable efficiency gains through governed AI workflows." },
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
                Discuss Your Highest-Value Starting Point
              </h2>
              <p className="text-base text-blue-100/90 leading-relaxed max-w-3xl">
                This next step maps your priorities and constraints into the best-fit delivery path and first milestone.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
      <ContactForm />
    </>
  );
}
