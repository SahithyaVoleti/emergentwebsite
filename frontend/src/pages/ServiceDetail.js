import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2, ChevronDown, ChevronUp } from "lucide-react";
import PageHero from "../components/PageHero";
import CTASection from "../components/CTASection";
import FAQSection from "../components/FAQSection";
import PageContactForm from "../components/PageContactForm";
import services from "../data/services";

function SubserviceCard({ sub, index, isOpen, onToggle }) {
  return (
    <div data-testid={`subservice-${index}`} className="border border-slate-200 rounded-sm overflow-hidden bg-white">
      <button onClick={onToggle} className="w-full text-left p-6 sm:p-8 flex items-start justify-between gap-4 hover:bg-[#F8FAFC] transition-colors">
        <div>
          <span className="text-xs font-medium text-[#2563EB]" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="text-lg font-bold text-[#0B1B3D] mt-1" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>{sub.title}</h3>
          <p className="text-sm text-slate-500 leading-relaxed mt-2">{sub.desc}</p>
        </div>
        {isOpen ? <ChevronUp size={20} className="text-slate-400 mt-1 flex-shrink-0" /> : <ChevronDown size={20} className="text-slate-400 mt-1 flex-shrink-0" />}
      </button>
      {isOpen && (
        <div className="px-6 sm:px-8 pb-6 sm:pb-8 border-t border-slate-100 pt-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {sub.items.map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-3 bg-[#F8FAFC] rounded-sm">
                <CheckCircle2 size={16} className="text-[#2563EB] flex-shrink-0" />
                <span className="text-sm text-slate-700 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);
  const [openSub, setOpenSub] = useState(0);

  if (!service) {
    return (<div className="min-h-screen flex items-center justify-center"><h1 className="text-2xl font-bold text-[#0B1B3D] mb-4">Service Not Found</h1><Link to="/services" className="text-[#2563EB]">Back to Services</Link></div>);
  }

  return (
    <div>
      {/* Hero with Image */}
      <PageHero label="Services" title={service.heroTitle} description={service.heroDesc} primaryCTA={{ text: "Get Started", href: "#page-contact" }} secondaryCTA={{ text: "View All Services", href: "/services" }} image={service.heroImage} />

      {/* Breadcrumb */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 py-4">
          <Link to="/services" data-testid="back-to-services" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-[#2563EB] transition-colors">
            <ArrowLeft size={14} /> Back to All Services
          </Link>
        </div>
      </div>

      {/* Overview */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
          <div className="max-w-3xl">
            <p className="text-base text-slate-600 leading-relaxed">{service.overview}</p>
          </div>
        </div>
      </section>

      {/* Subservices */}
      <section data-testid="subservices-section" className="py-20 sm:py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
          <div className="max-w-2xl mb-12">
            <p className="text-xs font-semibold text-[#2563EB] uppercase tracking-widest mb-4">What We Deliver</p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0B1B3D] mb-4" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>
              Our {service.title} Services
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Comprehensive capabilities designed to deliver measurable business impact across your organization.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {service.subservices.map((sub, i) => (
              <SubserviceCard key={i} sub={sub} index={i} isOpen={openSub === i} onToggle={() => setOpenSub(openSub === i ? -1 : i)} />
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      {service.techStack && (
        <section data-testid="tech-stack-section" className="py-20 sm:py-24" style={{ backgroundColor: "#0B1B3D" }}>
          <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <p className="text-xs font-semibold text-[#2563EB] uppercase tracking-widest mb-4">Tech Stack</p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>
                Enterprise-Grade Tools That Power Results
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {service.techStack.map((cat) => (
                <div key={cat.category} className="border border-white/10 rounded-sm p-6">
                  <h3 className="text-sm font-semibold text-white/80 uppercase tracking-wider mb-5">{cat.category}</h3>
                  <div className="space-y-3">
                    {cat.techs.map((t) => (
                      <div key={t} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-[#2563EB] rounded-full" />
                        <span className="text-sm text-slate-400">{t}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Process */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
          <div className="max-w-2xl mb-12">
            <p className="text-xs font-semibold text-[#2563EB] uppercase tracking-widest mb-4">Our Process</p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0B1B3D] mb-4" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>
              From Vision to Victory
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.process.map((p, i) => (
              <div key={i} data-testid={`process-step-${i}`} className="relative border border-slate-200 rounded-sm p-8 bg-white">
                <span className="text-5xl font-extrabold text-slate-100 absolute top-4 right-4" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="relative z-10">
                  <h3 className="text-base font-bold text-[#0B1B3D] mb-2" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>{p.step}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Ready to Get Started?" description={`Let's discuss how our ${service.title} services can transform your business.`} />

      {/* Why Choose Us */}
      {service.whyChooseUs && (
        <section className="py-20 sm:py-24 bg-[#F8FAFC]">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <p className="text-xs font-semibold text-[#2563EB] uppercase tracking-widest mb-4">Why NeuralTrix AI?</p>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0B1B3D] mb-8" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>
                  Why Leaders Choose Us
                </h2>
                <div className="space-y-8">
                  {service.whyChooseUs.map((w, i) => (
                    <div key={i} className="border-l-2 border-[#2563EB] pl-6">
                      <h3 className="text-lg font-bold text-[#0B1B3D] mb-2" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>{w.title}</h3>
                      <p className="text-sm text-slate-600 leading-relaxed">{w.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 content-start">
                {[
                  { value: "15+", label: "Years of Innovation" },
                  { value: "1000+", label: "Global Success Stories" },
                  { value: "400+", label: "AI Experts" },
                  { value: "1500+", label: "Projects Delivered" },
                  { value: "95%", label: "Client Retention" },
                  { value: "20%", label: "Faster to Market" },
                ].map((m) => (
                  <div key={m.label} className="border border-slate-200 rounded-sm p-4 bg-white text-center">
                    <span className="text-2xl font-extrabold text-[#0B1B3D] block" style={{ fontFamily: "'JetBrains Mono', monospace" }}>{m.value}</span>
                    <span className="text-xs text-slate-500 mt-1 block">{m.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      <FAQSection faqs={service.faqs} />
      <PageContactForm context={service.title} />
    </div>
  );
}
