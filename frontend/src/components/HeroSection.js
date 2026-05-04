import { Button } from "../components/ui/button";
import { ArrowRight } from "lucide-react";
import HeroAnimatedBackdrop from "./HeroAnimatedBackdrop";

export default function HeroSection() {
  return (
    <section id="hero" data-testid="hero-section" className="relative overflow-hidden bg-[#0B1B3D] text-white">
      {/* Full-bleed hero: Refined centered design with high impact height */}
      <div className="relative isolate flex min-h-[88vh] flex-col items-start justify-center text-left">
        <HeroAnimatedBackdrop video="/hero/Untitled.mp4" bgDark />

        {/* Left readability scrim: separates copy from bright mid-frame video detail */}
        <div
          className="pointer-events-none absolute inset-0 z-[5] bg-gradient-to-r from-[#0B1B3D]/95 via-[#0B1B3D]/72 to-transparent sm:via-[#0B1B3D]/58"
          aria-hidden
        />

        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-10 xl:px-14 py-6 sm:py-8 md:py-10">
          <div className="max-w-4xl flex flex-col items-start space-y-8">
            <div className="relative">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-sky-200 drop-shadow-[0_1px_3px_rgba(0,0,0,0.85)]">
                Future-Scale Solution Engineering
              </p>
            </div>

            <div className="space-y-5">
              <h1
                data-testid="hero-heading"
                className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-[1.12] tracking-tight [text-shadow:0_2px_24px_rgba(0,0,0,0.55),0_1px_2px_rgba(0,0,0,0.9)]"
              >
                Engineering the
                <br />
                <span className="font-semibold text-sky-200">AI-First</span> Enterprise
              </h1>
              <p className="text-base sm:text-lg text-white/95 leading-relaxed max-w-xl font-normal [text-shadow:0_1px_12px_rgba(0,0,0,0.65)]">
                If you are evaluating an AI copilot, a data-backed product, or a modernized platform, we scope <strong className="font-semibold text-white">structured pilots</strong> with
                clear metrics, security boundaries, and a path to production—so your team can judge fit with limited commitment.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-start gap-5 pt-4">
              <Button
                data-testid="hero-cta-primary"
                asChild
                className="bg-blue-600/80 hover:bg-blue-600 text-white backdrop-blur-sm rounded-full px-8 py-6 font-bold text-sm shadow-xl shadow-blue-500/10 transition-all hover:scale-105"
              >
                <a href="#page-contact">
                  Schedule a consultation <ArrowRight size={18} className="ml-2" />
                </a>
              </Button>
              <Button
                data-testid="hero-cta-secondary"
                asChild
                variant="outline"
                className="bg-white/5 text-white/80 border-white/10 hover:bg-white/10 backdrop-blur-md rounded-full px-8 py-6 font-bold text-sm transition-all hover:scale-105"
              >
                <a href="#solutions">Explore Solutions</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

