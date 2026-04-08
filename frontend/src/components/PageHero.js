import { Button } from "../components/ui/button";
import { ArrowRight } from "lucide-react";
import HeroAnimatedBackdrop from "./HeroAnimatedBackdrop";
import { DEFAULT_PAGE_HERO_IMAGE } from "../lib/heroImageThemes";

export default function PageHero({ label, title, description, primaryCTA, secondaryCTA, bgDark = true, image }) {
  const resolvedImage = image ?? DEFAULT_PAGE_HERO_IMAGE;

  return (
    <section
      data-testid="page-hero"
      className={`relative overflow-hidden ${bgDark ? "text-white bg-[#0B1B3D]" : "text-[#0B1B3D] bg-[#F8FAFC]"}`}
    >
      <div className="relative isolate flex min-h-[min(75vh,820px)] flex-col justify-center">
        <HeroAnimatedBackdrop image={resolvedImage} bgDark={bgDark} />
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-10 xl:px-14 py-20 sm:py-28">
          <div className="max-w-3xl space-y-6 drop-shadow-sm">
            {label && (
              <p className="text-xs font-semibold uppercase tracking-widest mb-2 text-[#2563EB]">{label}</p>
            )}
            <h1
              data-testid="page-hero-title"
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.08]"
              style={{ fontFamily: "'Cabinet Grotesk', sans-serif", letterSpacing: "-0.04em" }}
            >
              {title}
            </h1>
            <p className={`text-base sm:text-lg leading-relaxed max-w-2xl ${bgDark ? "text-slate-200" : "text-slate-600"}`}>
              {description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              {primaryCTA && (
                <Button
                  data-testid="page-hero-primary-cta"
                  asChild
                  className="bg-[#2563EB] text-white hover:bg-[#2563EB]/90 rounded-sm px-6 py-3 font-semibold text-sm shadow-lg shadow-black/15"
                >
                  <a href={primaryCTA.href}>
                    {primaryCTA.text} <ArrowRight size={16} className="ml-2" />
                  </a>
                </Button>
              )}
              {secondaryCTA && (
                <Button
                  data-testid="page-hero-secondary-cta"
                  asChild
                  variant="outline"
                  className={`rounded-sm px-6 py-3 font-semibold text-sm ${
                    bgDark
                      ? "bg-white/5 text-white border-white/35 hover:bg-white/10 backdrop-blur-sm"
                      : "bg-white/80 text-[#0B1B3D] border-[#0B1B3D]/25 hover:bg-white"
                  }`}
                >
                  <a href={secondaryCTA.href}>{secondaryCTA.text}</a>
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
