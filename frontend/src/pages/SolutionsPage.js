import { useEffect, useRef, useState } from "react";
import PageHero from "../components/PageHero";
import PageContactForm from "../components/PageContactForm";
import AnimatedSection, { StaggerChildren, StaggerItem } from "../components/AnimatedSection";
import ListingImageCard from "../components/ListingImageCard";
import solutions from "../data/solutions";
import solutionIcons, { DEFAULT_SOLUTION_ICON } from "../data/solutionIcons";
import { LISTING_PAGE_HERO_IMAGES } from "../lib/heroImageThemes";

export default function SolutionsPage() {
  const [activeStep, setActiveStep] = useState(1);
  const mobileTimelineRef = useRef(null);
  const processSteps = [
    { step: "01", title: "Discovery", desc: "Map priorities, data readiness, and success metrics with your stakeholders." },
    { step: "02", title: "Architecture", desc: "Design secure, scalable AI workflows aligned to your current tech stack." },
    { step: "03", title: "Implementation", desc: "Build and integrate the solution with rapid iterations and validation loops." },
    { step: "04", title: "Optimization", desc: "Monitor adoption, improve model quality, and scale across teams." },
  ];

  useEffect(() => {
    const container = mobileTimelineRef.current;
    if (!container) return;

    const updateActiveStep = () => {
      const cards = container.querySelectorAll("[data-process-step]");
      if (!cards.length) return;

      const containerRect = container.getBoundingClientRect();
      const viewportCenter = containerRect.left + (containerRect.width / 2);
      let nearestIndex = 0;
      let nearestDistance = Number.POSITIVE_INFINITY;

      cards.forEach((card, index) => {
        const cardRect = card.getBoundingClientRect();
        const cardCenter = cardRect.left + (cardRect.width / 2);
        const distance = Math.abs(cardCenter - viewportCenter);

        if (distance < nearestDistance) {
          nearestDistance = distance;
          nearestIndex = index;
        }
      });

      setActiveStep(nearestIndex + 1);
    };

    updateActiveStep();
    container.addEventListener("scroll", updateActiveStep, { passive: true });
    window.addEventListener("resize", updateActiveStep);

    return () => {
      container.removeEventListener("scroll", updateActiveStep);
      window.removeEventListener("resize", updateActiveStep);
    };
  }, []);

  return (
    <div>
      <PageHero
        label="Our Solutions"
        title="Production-Ready AI Solutions for Critical Workflows"
        description="These solution accelerators are engineered for fast adoption, safe integration, and sustained value across customer, operations, and internal teams."
        primaryCTA={{ text: "Explore Solutions", href: "#solutions-list" }}
        image={LISTING_PAGE_HERO_IMAGES.solutions}
      />
      <section id="solutions-list" className="py-20 sm:py-24 corp-pat-cross-dash">
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {solutions.map((s) => (
              <StaggerItem key={s.slug}>
                <ListingImageCard
                  to={`/solutions/${s.slug}`}
                  data-testid={`solution-link-${s.slug}`}
                  image={s.heroImage}
                  title={s.title}
                  description={s.shortDesc}
                  icon={solutionIcons[s.slug] || DEFAULT_SOLUTION_ICON}
                  ctaText="Learn More"
                  variant="solutionExecutive"
                />
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>
      <section className="py-20 sm:py-24 bg-white border-y border-slate-200/70">
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
          <AnimatedSection>
            <div className="max-w-2xl mb-12">
              <p className="text-xs font-semibold text-[#2563EB] uppercase tracking-widest mb-4">
                Expected Outcomes
              </p>
              <h2
                className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0B1B3D] mb-4"
                style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
              >
                Outcome Targets Defined Before Build Starts
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                We define success metrics early, then deliver with observability and governance so value is visible after go-live.
              </p>
            </div>
          </AnimatedSection>
          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: "60-80%", label: "Reduction in repetitive manual workflows" },
              { value: "2-5x", label: "Faster access to operational insights" },
              { value: "<12 weeks", label: "Typical pilot launch timeline" },
              { value: "24/7", label: "Always-on AI assistance and automation" },
            ].map((item) => (
              <StaggerItem key={item.label}>
                <div className="rounded-sm border border-slate-200 p-6 bg-[#F8FAFC]">
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
      <section className="py-20 sm:py-24 corp-pat-dots">
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
          <AnimatedSection>
            <div className="max-w-2xl mb-12">
              <p className="text-xs font-semibold text-[#2563EB] uppercase tracking-widest mb-4">
                Delivery Process
              </p>
              <h2
                className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0B1B3D]"
                style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
              >
                Solution Delivery Path from Scoping to Scale
              </h2>
            </div>
          </AnimatedSection>
          <div className="relative rounded-2xl border border-slate-200/80 bg-white/80 backdrop-blur-sm p-6 sm:p-8 lg:p-10 overflow-hidden">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-r from-[#2563EB]/5 via-[#0B1B3D]/5 to-[#2563EB]/5" />
            <div className="lg:hidden mb-5">
              <div className="mb-3">
                <span
                  className="inline-flex items-center rounded-full border border-[#2563EB]/20 bg-[#2563EB]/5 px-2.5 py-1 text-[11px] font-semibold tracking-wider text-[#2563EB]"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  STEP {activeStep} OF {processSteps.length}
                </span>
              </div>
              <div className="flex items-center gap-2">
                {processSteps.map((item, idx) => (
                  <div key={item.step} className="flex items-center flex-1">
                    <span className="h-2 w-2 rounded-full bg-[#2563EB]" />
                    {idx < processSteps.length - 1 && (
                      <span className="h-[2px] flex-1 bg-gradient-to-r from-[#2563EB]/55 to-[#2563EB]/20 mx-2" />
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div ref={mobileTimelineRef} className="lg:hidden -mx-2 px-2 overflow-x-auto snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              <div className="flex gap-4 pb-1">
                {processSteps.map((item, index) => (
                  <div
                    key={item.step}
                    data-process-step={index + 1}
                    className="snap-center shrink-0 w-[85%] sm:w-[70%] rounded-xl border border-slate-200/90 bg-white p-5 shadow-[0_8px_30px_-20px_rgba(15,23,42,0.45)]"
                  >
                    <div className="inline-flex items-center rounded-full border border-[#2563EB]/20 bg-[#2563EB]/5 px-2.5 py-1 mb-4">
                      <span
                        className="text-[11px] font-semibold tracking-wider text-[#2563EB]"
                        style={{ fontFamily: "'JetBrains Mono', monospace" }}
                      >
                        STEP {item.step}
                      </span>
                    </div>
                    <h3
                      className="text-lg font-bold text-[#0B1B3D] mb-2 tracking-tight"
                      style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
                    >
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="pointer-events-none hidden lg:block absolute left-12 right-12 top-[84px] h-[2px] bg-gradient-to-r from-[#2563EB]/20 via-[#2563EB] to-[#0B1B3D]/30" />
            <div className="pointer-events-none hidden lg:block absolute left-12 right-12 top-[74px]">
              <div className="relative h-5">
                {[0, 1, 2, 3].map((dot) => (
                  <span
                    key={dot}
                    className="absolute top-0 h-5 w-5 rounded-full border-4 border-white bg-[#2563EB] shadow-[0_10px_30px_-10px_rgba(37,99,235,0.85)]"
                    style={{ left: `${dot * 33.333}%` }}
                  />
                ))}
              </div>
            </div>
            <StaggerChildren className="hidden lg:grid lg:grid-cols-4 gap-6 mt-20">
            {processSteps.map((item) => (
              <StaggerItem key={item.step}>
                <div className="group relative h-full rounded-xl border border-slate-200/90 bg-white p-5 sm:p-6 shadow-[0_8px_30px_-20px_rgba(15,23,42,0.45)] hover:-translate-y-1 hover:shadow-[0_20px_45px_-25px_rgba(37,99,235,0.45)] transition-all duration-300">
                  <div className="inline-flex items-center rounded-full border border-[#2563EB]/20 bg-[#2563EB]/5 px-2.5 py-1 mb-4">
                    <span
                      className="text-[11px] font-semibold tracking-wider text-[#2563EB]"
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      STEP {item.step}
                    </span>
                  </div>
                  <h3
                    className="text-lg font-bold text-[#0B1B3D] mb-2 tracking-tight"
                    style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
            </StaggerChildren>
          </div>
        </div>
      </section>
      <section className="py-20 sm:py-24 bg-white">
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
          <AnimatedSection>
            <div className="max-w-3xl">
              <p className="text-xs font-semibold text-[#2563EB] uppercase tracking-widest mb-4">
                Engagement Model
              </p>
              <h2
                className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0B1B3D] mb-5"
                style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
              >
                Flexible Collaboration for Teams at Any Stage
              </h2>
              <p className="text-base text-slate-600 leading-relaxed mb-8">
                Start with strategy, move into an accelerated pilot, or engage us as your long-term AI engineering partner.
              </p>
            </div>
          </AnimatedSection>
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Advisory Sprint",
                desc: "A focused engagement to prioritize use cases, architecture, and rollout plan in 2-3 weeks.",
              },
              {
                title: "Pilot Build",
                desc: "A production-grade pilot for one workflow with clear KPIs and measurable business outcomes.",
              },
              {
                title: "Scale Program",
                desc: "Ongoing delivery to expand AI capabilities across departments with governance and monitoring.",
              },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <div className="h-full rounded-sm border border-slate-200 p-6 bg-[#F8FAFC]">
                  <h3
                    className="text-lg font-bold text-[#0B1B3D] mb-3"
                    style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>
      <section className="py-20 sm:py-24 bg-[#F8FAFC] border-y border-slate-200/70">
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
          <AnimatedSection>
            <div className="max-w-3xl mb-10">
              <p className="text-xs font-semibold text-[#2563EB] uppercase tracking-widest mb-4">Assurance</p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0B1B3D] mb-4" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>
                Assurance for End-to-End Solution Reliability
              </h2>
            </div>
          </AnimatedSection>
          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Architecture Controls", desc: "Design standards ensure security, scalability, and maintainability from day one." },
              { title: "Quality Gates", desc: "Validation checkpoints enforce consistency before release and rollout decisions." },
              { title: "Operational Monitoring", desc: "Performance and adoption metrics tracked to guide continuous improvement." },
              { title: "Cost Governance", desc: "Usage and efficiency controls to keep AI delivery economically sustainable." },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <div className="h-full rounded-sm border border-slate-200 bg-white p-6">
                  <h3 className="text-lg font-bold text-[#0B1B3D] mb-2" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>{item.title}</h3>
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
                Select the Right Solution with Implementation Confidence
              </h2>
              <p className="text-base text-blue-100/90 leading-relaxed max-w-3xl">
                This next step evaluates use-case fit, technical readiness, and implementation sequence for the fastest measurable impact.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
      <PageContactForm context="Solutions Page" />
    </div>
  );
}
