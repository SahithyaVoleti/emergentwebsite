import { useParams, Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import PageHero from "../components/PageHero";
import CTASection from "../components/CTASection";
import FAQSection from "../components/FAQSection";
import PageContactForm from "../components/PageContactForm";
import industries from "../data/industries";

export default function IndustryDetail() {
  const { slug } = useParams();
  const industry = industries.find((i) => i.slug === slug);

  if (!industry) {
    return (<div className="min-h-screen flex items-center justify-center"><div className="text-center"><h1 className="text-2xl font-bold text-[#0B1B3D] mb-4">Industry Not Found</h1><Link to="/industries" className="text-[#2563EB] font-medium">Back to Industries</Link></div></div>);
  }

  return (
    <div>
      <PageHero label="Industries" title={industry.heroTitle} description={industry.heroDesc} primaryCTA={{ text: "Get Industry Assessment", href: "#page-contact" }} secondaryCTA={{ text: "All Industries", href: "/industries" }} image={industry.heroImage} />

      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 py-4">
          <Link to="/industries" data-testid="back-to-industries" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-[#2563EB]"><ArrowLeft size={14} /> All Industries</Link>
        </div>
      </div>

      {/* Overview */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 max-w-3xl">
          <p className="text-base text-slate-600 leading-relaxed">{industry.overview}</p>
        </div>
      </section>

      {/* AI Capabilities */}
      <section className="py-20 sm:py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
          <div className="max-w-2xl mb-12">
            <p className="text-xs font-semibold text-[#2563EB] uppercase tracking-widest mb-4">Capabilities</p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0B1B3D] mb-4" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>
              AI Solutions for {industry.title}
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industry.features.map((f, i) => (
              <div key={i} className="bg-white border border-slate-200 rounded-sm p-8 hover:-translate-y-1 transition-all duration-300">
                <CheckCircle2 size={20} className="text-[#2563EB] mb-4" />
                <h3 className="text-base font-bold text-[#0B1B3D] mb-2" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>{f.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection title={`Ready to Transform ${industry.title}?`} description="Schedule a consultation to discuss how AI can drive measurable results in your industry." />

      {/* Process */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
          <div className="max-w-2xl mb-12">
            <p className="text-xs font-semibold text-[#2563EB] uppercase tracking-widest mb-4">Our Process</p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0B1B3D] mb-4" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>
              Implementation Roadmap
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {industry.process.map((p, i) => (
              <div key={i} className="relative border border-slate-200 rounded-sm p-8 bg-white">
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

      {/* Stats */}
      <section className="py-16" style={{ backgroundColor: "#0B1B3D" }}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
            {[
              { value: "15+", label: "Years of Innovation" },
              { value: "1000+", label: "Global Clients" },
              { value: "400+", label: "AI Experts" },
              { value: "1500+", label: "Projects Delivered" },
              { value: "95%", label: "Client Retention" },
              { value: "20%", label: "Faster Launch" },
            ].map((m) => (
              <div key={m.label}>
                <span className="text-2xl font-extrabold text-white block" style={{ fontFamily: "'JetBrains Mono', monospace" }}>{m.value}</span>
                <span className="text-xs text-slate-400 mt-1 block">{m.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQSection faqs={industry.faqs} />
      <PageContactForm context={`Industry: ${industry.title}`} />
    </div>
  );
}
