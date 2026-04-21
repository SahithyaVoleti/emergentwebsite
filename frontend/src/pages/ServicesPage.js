import PageHero from "../components/PageHero";
import PageContactForm from "../components/PageContactForm";
import AnimatedSection, { StaggerChildren, StaggerItem } from "../components/AnimatedSection";
import FAQSection from "../components/FAQSection";
import ListingImageCard from "../components/ListingImageCard";
import services from "../data/services";
import { SERVICES_LANDING_HERO_IMAGE } from "../lib/heroImageThemes";

export default function ServicesPage() {
  const serviceFaqs = [
    {
      q: "How do you decide which AI service we should start with?",
      a: "We run a short discovery process to evaluate your highest-friction workflows, data readiness, and ROI potential, then prioritize the service track with the fastest business impact.",
    },
    {
      q: "Can you work with our existing stack and internal team?",
      a: "Yes. Our delivery model is stack-aware and collaborative. We integrate with your current systems and work alongside your engineering, product, and operations teams.",
    },
    {
      q: "What timeline should we expect for initial value delivery?",
      a: "Most clients see first measurable outcomes within 8-12 weeks, depending on integration complexity, data quality, and stakeholder availability.",
    },
    {
      q: "How do you handle security and compliance requirements?",
      a: "Security and governance are built into architecture and delivery from day one, including access controls, auditability, and compliance-aligned deployment patterns.",
    },
    {
      q: "Do you provide post-launch support and optimization?",
      a: "Absolutely. We offer managed optimization for model quality, performance monitoring, cost controls, and feature expansion after go-live.",
    },
  ];

  return (
    <div>
      <PageHero
        label="Our Services"
        title="Enterprise AI Services Built Around Business Outcomes"
        description="From advisory to managed delivery, each service line is designed to solve a specific operational problem with measurable impact and clear accountability."
        primaryCTA={{ text: "Talk to Our Experts", href: "#page-contact" }}
        image={SERVICES_LANDING_HERO_IMAGE}
      />
      <section className="py-20 sm:py-24 corp-pat-dots">
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <StaggerItem key={s.slug}>
                <ListingImageCard
                  to={`/services/${s.slug}`}
                  data-testid={`service-link-${s.slug}`}
                  image={s.heroImage}
                  title={s.title}
                  description={s.shortDesc}
                  icon={s.icon}
                  ctaText="Learn More"
                  variant="service"
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
                Delivery Method
              </p>
              <h2
                className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0B1B3D] mb-4"
                style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
              >
                Delivery Designed for Operational Reality
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                We combine engineering discipline, change management, and governance controls so projects move beyond pilots and stay reliable in production.
              </p>
            </div>
          </AnimatedSection>
          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: "2-4 weeks", label: "Discovery and architecture planning" },
              { value: "< 12 weeks", label: "Typical pilot to production timeline" },
              { value: "99.9%", label: "Target uptime for critical workflows" },
              { value: "ROI-first", label: "Every engagement tied to business KPIs" },
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
                Service Lifecycle
              </p>
              <h2
                className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0B1B3D]"
                style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
              >
                From Strategy to Scaled Operations
              </h2>
            </div>
          </AnimatedSection>
          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Assess", desc: "Evaluate current systems, data readiness, and operational bottlenecks." },
              { step: "02", title: "Design", desc: "Define architecture, security controls, and phased delivery roadmap." },
              { step: "03", title: "Build", desc: "Implement with rapid sprint cycles, quality checks, and stakeholder feedback." },
              { step: "04", title: "Scale", desc: "Operationalize with monitoring, optimization, and cross-team adoption plans." },
            ].map((item) => (
              <StaggerItem key={item.step}>
                <div className="h-full rounded-sm border border-slate-200 bg-white p-6">
                  <span
                    className="inline-flex items-center rounded-full border border-[#2563EB]/20 bg-[#2563EB]/5 px-2.5 py-1 text-[11px] font-semibold tracking-wider text-[#2563EB] mb-4"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    STEP {item.step}
                  </span>
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
      </section>
      <section className="py-20 sm:py-24 bg-white">
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
          <AnimatedSection>
            <div className="max-w-3xl mb-10">
              <p className="text-xs font-semibold text-[#2563EB] uppercase tracking-widest mb-4">
                Engagement Options
              </p>
              <h2
                className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0B1B3D] mb-5"
                style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
              >
                Flexible Models for Different Delivery Needs
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                Choose a collaboration model based on your timeline, internal capability, and transformation goals.
              </p>
            </div>
          </AnimatedSection>
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Strategy + Blueprint",
                desc: "A focused advisory phase to prioritize use cases and define a practical implementation roadmap.",
              },
              {
                title: "Pilot to Production",
                desc: "Launch one high-impact workflow quickly, validate ROI, and harden for enterprise rollout.",
              },
              {
                title: "Managed AI Delivery",
                desc: "Ongoing engineering partnership for continuous releases, monitoring, and optimization.",
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
      <section className="py-20 sm:py-24 corp-pat-diag-dash">
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
          <AnimatedSection>
            <div className="max-w-3xl mb-10">
              <p className="text-xs font-semibold text-[#2563EB] uppercase tracking-widest mb-4">
                Industry Alignment
              </p>
              <h2
                className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0B1B3D] mb-5"
                style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
              >
                Services Adapted to Real Industry Constraints
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                We tailor delivery for regulated, data-sensitive, and high-throughput environments with practical implementation plans.
              </p>
            </div>
          </AnimatedSection>
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Healthcare & life sciences compliance workflows",
              "Financial risk, fraud, and audit intelligence",
              "Retail and commerce personalization at scale",
              "Enterprise knowledge and operations automation",
            ].map((item) => (
              <StaggerItem key={item}>
                <div className="h-full rounded-sm border border-slate-200 bg-white p-6">
                  <p className="text-sm text-slate-700 leading-relaxed">{item}</p>
                </div>
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
                Technology Coverage
              </p>
              <h2
                className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0B1B3D]"
                style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
              >
                Platforms and Capabilities Across the AI Stack
              </h2>
            </div>
          </AnimatedSection>
          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Data & Pipelines",
                desc: "Data ingestion, quality, transformation, orchestration, and observability for AI-ready foundations.",
              },
              {
                title: "Model & LLM Engineering",
                desc: "Fine-tuning, RAG pipelines, evaluation harnesses, and inference optimization for production workloads.",
              },
              {
                title: "Application Layer",
                desc: "Web and mobile AI products, copilots, agent workflows, and enterprise integrations.",
              },
              {
                title: "MLOps & DevOps",
                desc: "CI/CD, model versioning, rollout controls, and environment automation across deployment stages.",
              },
              {
                title: "Security & Governance",
                desc: "Policy controls, auditability, role-based access, and secure architecture aligned to compliance requirements.",
              },
              {
                title: "Monitoring & Optimization",
                desc: "Drift detection, response quality tracking, cost controls, and iterative model/service improvement.",
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
      <section className="py-20 sm:py-24 bg-[#F8FAFC]">
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
          <AnimatedSection>
            <div className="max-w-3xl mb-10">
              <p className="text-xs font-semibold text-[#2563EB] uppercase tracking-widest mb-4">
                Assurance
              </p>
              <h2
                className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0B1B3D] mb-5"
                style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
              >
                Governance, Security, and Quality Built Into Delivery
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                Every service engagement includes technical guardrails to protect reliability, compliance posture, and long-term maintainability.
              </p>
            </div>
          </AnimatedSection>
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Security by Design",
                points: ["Encrypted data pathways", "Access controls and least privilege", "Secure SDLC across environments"],
              },
              {
                title: "Operational Governance",
                points: ["KPI and SLA tracking", "Model and workflow audit trails", "Release controls and rollback plans"],
              },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <div className="h-full rounded-sm border border-slate-200 bg-white p-6">
                  <h3
                    className="text-lg font-bold text-[#0B1B3D] mb-4"
                    style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
                  >
                    {item.title}
                  </h3>
                  <ul className="space-y-2">
                    {item.points.map((point) => (
                      <li key={point} className="text-sm text-slate-600 leading-relaxed">
                        - {point}
                      </li>
                    ))}
                  </ul>
                </div>
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
                Client Outcomes
              </p>
              <h2
                className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0B1B3D] mb-5"
                style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
              >
                What Teams Typically Improve After Engagement
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                We structure each service line around quantifiable operational and financial improvements.
              </p>
            </div>
          </AnimatedSection>
          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Operational Efficiency",
                metric: "35-70%",
                desc: "Reduction in repetitive workflows through automation and AI-assisted execution.",
              },
              {
                title: "Decision Velocity",
                metric: "2-5x",
                desc: "Faster analysis and response cycles using real-time intelligence layers.",
              },
              {
                title: "Quality & Consistency",
                metric: "Up to 90%",
                desc: "Lower variance in outputs through standardized workflows and governance controls.",
              },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <div className="h-full rounded-sm border border-slate-200 bg-[#F8FAFC] p-6">
                  <p
                    className="text-xs font-semibold text-[#2563EB] uppercase tracking-wider mb-2"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    {item.title}
                  </p>
                  <p
                    className="text-3xl font-bold text-[#0B1B3D] mb-2"
                    style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
                  >
                    {item.metric}
                  </p>
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
              <p className="text-xs font-semibold text-[#2563EB] uppercase tracking-widest mb-4">
                Operating Model
              </p>
              <h2
                className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0B1B3D] mb-5"
                style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
              >
                Choose the Execution Rhythm That Fits Your Organization
              </h2>
            </div>
          </AnimatedSection>
          <StaggerChildren className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Project Mode",
                subtitle: "Defined scope, fixed milestones",
                details: "Best for targeted initiatives with clear outcomes and delivery timelines.",
              },
              {
                title: "Pod Extension",
                subtitle: "Embedded multi-disciplinary team",
                details: "Best for teams that need continuous velocity without increasing full-time headcount.",
              },
              {
                title: "Transformation Program",
                subtitle: "Cross-functional modernization",
                details: "Best for enterprise-wide AI rollout with governance, enablement, and phased scaling.",
              },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <div className="h-full rounded-sm border border-slate-200 bg-white p-6">
                  <h3
                    className="text-lg font-bold text-[#0B1B3D] mb-2"
                    style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-sm font-medium text-[#2563EB] mb-3">{item.subtitle}</p>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.details}</p>
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
              <p className="text-xs font-semibold text-blue-200 uppercase tracking-widest mb-4">
                Strategic Next Step
              </p>
              <h2
                className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4"
                style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
              >
                Convert Priorities into an Executable Delivery Plan
              </h2>
              <p className="text-base text-blue-100/90 leading-relaxed max-w-3xl">
                Share your current priorities and constraints. We will map service fit, delivery sequence, and expected business impact in a focused consultation.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
      <section className="py-14 sm:py-16 bg-white border-y border-slate-200/70">
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
          <AnimatedSection>
            <div className="text-center mb-8">
              <p className="text-xs font-semibold text-[#2563EB] uppercase tracking-widest mb-3">
                Trusted Delivery Standards
              </p>
              <p className="text-sm text-slate-500">
                Service engagements aligned with enterprise expectations for reliability and governance
              </p>
            </div>
          </AnimatedSection>
          <StaggerChildren className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              "Secure SDLC",
              "SOC-Aligned",
              "Data Governance",
              "SLA Driven",
              "Audit Ready",
              "24/7 Monitoring",
            ].map((item) => (
              <StaggerItem key={item}>
                <div className="h-14 rounded-sm border border-slate-200 bg-[#F8FAFC] flex items-center justify-center">
                  <span className="text-xs sm:text-sm font-semibold text-slate-600 tracking-wide">{item}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>
      <FAQSection faqs={serviceFaqs} title="Services FAQ" />
      <PageContactForm context="Services Page" />
    </div>
  );
}
