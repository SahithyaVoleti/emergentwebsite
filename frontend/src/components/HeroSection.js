import { Button } from "../components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import HeroAnimatedBackdrop from "./HeroAnimatedBackdrop";
import { HOME_HERO_IMAGE } from "../lib/heroImageThemes";

export default function HeroSection() {
  return (
    <section id="hero" data-testid="hero-section" className="relative overflow-hidden bg-[#0B1B3D]">
      {/* Full-bleed hero: image covers entire area above client logos */}
      <div className="relative isolate flex min-h-[min(88vh,920px)] flex-col justify-center">
        <HeroAnimatedBackdrop image={HOME_HERO_IMAGE} bgDark />

        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-10 xl:px-14 py-20 sm:py-28 md:py-36">
          <div className="max-w-3xl space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 border border-white/20 rounded-sm backdrop-blur-sm bg-white/5">
              <Sparkles size={14} className="text-[#2563EB]" />
              <span className="text-xs font-semibold text-white/80 uppercase tracking-widest">
                AI-First Engineering
              </span>
            </div>
            <h1
              data-testid="hero-heading"
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.08] drop-shadow-sm"
              style={{ fontFamily: "'Cabinet Grotesk', sans-serif", letterSpacing: "-0.04em" }}
            >
              Engineering the
              <br />
              <span className="text-[#2563EB]">AI-First</span> Enterprise
            </h1>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-lg drop-shadow-sm">
              NeuralTrix AI engineers high-performance digital systems that push businesses beyond average.
              We combine software architecture, data pipelines, cloud, and custom AI development to deliver
              production-ready solutions that launch <strong className="text-white">3x faster</strong>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                data-testid="hero-cta-primary"
                asChild
                className="bg-[#2563EB] text-white hover:bg-[#2563EB]/90 rounded-sm px-6 py-3 font-semibold text-sm shadow-lg shadow-black/20"
              >
                <a href="#contact">
                  Talk to Our AI Experts <ArrowRight size={16} className="ml-2" />
                </a>
              </Button>
              <Button
                data-testid="hero-cta-secondary"
                asChild
                variant="outline"
                className="bg-white/5 text-white border-white/35 hover:bg-white/15 backdrop-blur-sm rounded-sm px-6 py-3 font-semibold text-sm"
              >
                <a href="#solutions">Explore Solutions</a>
              </Button>
            </div>
            <div className="flex flex-wrap items-center gap-6 sm:gap-8 pt-4">
              <div>
                <span className="text-2xl font-bold text-white" style={{ fontFamily: "'JetBrains Mono', monospace" }}>150+</span>
                <p className="text-xs text-slate-300 mt-1">AI Systems Deployed</p>
              </div>
              <div className="w-px h-10 bg-white/25 hidden sm:block" />
              <div>
                <span className="text-2xl font-bold text-white" style={{ fontFamily: "'JetBrains Mono', monospace" }}>99.9%</span>
                <p className="text-xs text-slate-300 mt-1">Uptime Guarantee</p>
              </div>
              <div className="w-px h-10 bg-white/25 hidden sm:block" />
              <div>
                <span className="text-2xl font-bold text-white" style={{ fontFamily: "'JetBrains Mono', monospace" }}>3x</span>
                <p className="text-xs text-slate-300 mt-1">Faster Delivery</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Client logos bar */}
      <div className="relative z-10 border-t border-white/10 bg-[#0B1B3D] py-8">
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
          <p className="text-xs uppercase tracking-widest text-slate-500 mb-6 text-center">
            Trusted by industry leaders
          </p>
          <div className="flex flex-wrap justify-center items-center gap-10 opacity-50">
            {["Movegistics", "Mondelez", "HealthifyMe", "Alorica", "Pinergy", "SohoZ"].map((name) => (
              <span key={name} className="text-sm font-semibold text-white/60 tracking-wide">{name}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
