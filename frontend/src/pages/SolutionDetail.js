import { useParams, Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2, Brain, Layers, Database, Code2, Zap } from "lucide-react";
import PageHero from "../components/PageHero";
import CTASection from "../components/CTASection";
import FAQSection from "../components/FAQSection";
import PageContactForm from "../components/PageContactForm";
import TestimonialsSection from "../components/TestimonialsSection";
import RelatedBlog from "../components/RelatedBlog";
import ImpactStats from "../components/ImpactStats";
import AnimatedSection, { StaggerChildren, StaggerItem } from "../components/AnimatedSection";
import MethodologyFlowchart from "../components/MethodologyFlowchart";
import DomainAssurance from "../components/DomainAssurance";
import ArchitecturalShowcase from "../components/ArchitecturalShowcase";
import solutions from "../data/solutions";
import TechStackLogoGrid from "../components/TechStackLogoGrid";
import { FlatTechStackPanel } from "../components/CategorizedTechStackSection";

export default function SolutionDetail() {
  const { slug } = useParams();
  const solution = solutions.find((s) => s.slug === slug);

  if (!solution) {
    return (<div className="min-h-screen flex items-center justify-center"><h1 className="text-2xl font-bold text-[#0B1B3D]">Solution Not Found</h1><Link to="/solutions" className="text-[#2563EB] ml-4">Back</Link></div>);
  }

  return (
    <div className="bg-[#0B1B3D]">
      {/* 1. Hero with Sticky Behavior */}
      <div className="sticky top-0 z-0 h-[60vh] overflow-hidden">
        <PageHero
          label="Solutions"
          title={solution.heroTitle}
          description={solution.heroDesc}
          primaryCTA={{ text: "Request a briefing", href: "#page-contact", contactIntent: "consultation" }}
          secondaryCTA={{ text: "View capabilities", href: "#features" }}
          image={solution.heroImage}
        />
      </div>

      {/* 2. Page Content - Scrolling Over Hero */}
      <div className="relative z-10 bg-white text-[#0B1B3D] shadow-[0_-10px_50px_rgba(0,0,0,0.05)]">

        {/* 2. Breadcrumb */}
        <div className="bg-white border-b border-slate-200">
          <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14 py-4">
            <Link to="/solutions" data-testid="back-to-solutions" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-[#2563EB]"><ArrowLeft size={14} /> All Solutions</Link>
          </div>
        </div>

        {/* 3. Overview + Sidebar */}
        <section className="py-6 sm:py-8 md:py-10 bg-white relative">
          <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-20">
              <div className="lg:col-span-12 xl:col-span-8">
                <AnimatedSection>
                  <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 lg:mb-12">
                    <div>
                      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-slate-600">Methodology</p>
                      <h2 className="">Methodology for <span className="corp-heading-secondary">this solution</span></h2>
                    </div>
                    <div className="flex items-center gap-4 border-l-2 border-blue-500 pl-6 py-1">
                      <span className="text-lg font-bold text-[#0B1B3D] tracking-tight leading-snug max-w-[14rem]">
                        Grounded outputs
                      </span>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-tight">
                        Citations &amp;<br />evaluation
                      </span>
                    </div>
                  </div>

                  <div className="max-w-4xl">
                    <p className="text-base lg:text-lg text-[#0B1B3D] leading-relaxed font-medium mb-10 lg:mb-14">
                      {solution.overview}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-10 border-t border-slate-100">
                      <div className="group">
                        <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center mb-5 group-hover:bg-[#0B1B3D] group-hover:text-white transition-all duration-500">
                          <Brain size={20} />
                        </div>
                        <h4 className="uppercase tracking-widest mb-3">Core value</h4>
                        <p className="text-[13px] text-slate-500 leading-relaxed font-medium">
                          Consolidates dispersed documents and systems into governed retrieval and answer workflows aligned to access policy.
                        </p>
                      </div>
                      <div className="group">
                        <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center mb-5 group-hover:bg-[#0B1B3D] group-hover:text-white transition-all duration-500">
                          <Layers size={20} />
                        </div>
                        <h4 className="uppercase tracking-widest mb-3">Deployment Fit</h4>
                        <p className="text-[13px] text-slate-500 leading-relaxed font-medium">
                          Optimized for heterogeneous enterprise environments with support for multi-cloud and hybrid configurations.
                        </p>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              </div>

              <div className="lg:col-span-12 xl:col-span-4">
                <AnimatedSection delay={0.2}>
                  <div className="sticky top-24 rounded-3xl border border-slate-200 bg-[#F8FAFC]/90 p-6 shadow-sm backdrop-blur-sm sm:p-8">
                    <FlatTechStackPanel
                      title="Technology stack"
                      intro="Representative tools for this accelerator; your environment and procurement rules define the final catalog."
                      className="border-slate-200/90 shadow-none"
                      bodyClassName="bg-transparent px-0 py-0"
                      insetClassName="bg-white p-2.5 sm:p-3"
                    >
                      <TechStackLogoGrid
                        items={solution.tech}
                        compact
                        marqueeColumnCap={3}
                        marqueeColumnHeightClassName="h-36 sm:h-40 min-h-[9rem]"
                        className="w-full"
                      />
                    </FlatTechStackPanel>
                    <div className="mt-10">
                      <h3 className="mb-6 uppercase tracking-[0.3em]">Primary Use Cases</h3>
                      <ul className="space-y-4">
                        {solution.useCases.slice(0, 5).map((u) => (
                          <li key={u} className="group flex items-start gap-4 text-left text-[13px] font-bold text-slate-600">
                            <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-white transition-colors group-hover:border-[#0B1B3D] group-hover:bg-[#0B1B3D]">
                              <CheckCircle2 size={10} className="text-[#2563EB] group-hover:text-white" />
                            </div>
                            <span className="group-hover:text-[#0B1B3D] transition-colors">{u}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>

        <DomainAssurance />

        {/* Features */}
        <ArchitecturalShowcase 
          title="Functional Capabilities"
          description="Service modules are structured to shorten time-to-value while keeping architecture and operations maintainable."
          capabilities={solution.features}
        />
      </div>

      {/* 6. Pinned CTA Layer */}
      <div className="sticky top-0 z-0 h-[55vh] flex flex-col justify-center bg-[#0B1B3D] text-white overflow-hidden">
        <CTASection title={`Next Step for ${solution.title}`} description="Assess integration effort, governance fit, and operational impact for your environment and stakeholder model." />
      </div>

      {/* 7. Surface Layer 2 */}
      <div className="relative z-10 bg-white text-[#0B1B3D] shadow-[0_-20px_50px_rgba(0,0,0,0.1)]">
        {/* 7. How It Works - High-Density Compact Sequence */}
        <section className="py-6 sm:py-8 md:py-10 border-y border-slate-100 relative">
          <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10 lg:gap-20">
              {/* Header Column */}
              <div className="lg:w-1/3">
                <AnimatedSection>
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-slate-600">Assurance</p>
                  <h2 className="mb-4">
                    Adoption <span className="corp-heading-secondary">Path</span>
                  </h2>
                  <p className="text-sm text-slate-500 leading-relaxed font-medium">
                    This adoption path sequences connectivity, configuration, validation, and rollout with explicit checkpoints.
                  </p>
                </AnimatedSection>
              </div>

              {/* Steps Column */}
              <div className="lg:w-2/3">
            <MethodologyFlowchart 
              steps={[
                { icon: Database, label: "Connect Data", desc: "Link existing sources through secure permission-aware connectors." },
                { icon: Code2, label: "Configure Scope", desc: "Define AI behavior and roles to your needs." },
                { icon: Brain, label: "Validate Logic", desc: "Review and validate ground-truth responses at scale." },
                { icon: Zap, label: "Scale Output", desc: "Go live, monitor usage, and iterate on quality." },
              ]} 
            />
              </div>
            </div>
          </div>
        </section>

        {/* 8. Testimonials */}
        <TestimonialsSection title="How we engage new partners" />

        {/* 9. FAQ */}
        <FAQSection faqs={solution.faqs} />

        {/* 10. Blog */}
        <RelatedBlog />

        {/* 11. Contact */}
        <div>
          <PageContactForm context={solution.title} />
        </div>
      </div>
    </div>
  );
}

