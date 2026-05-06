import { Users, Handshake, Star, Headset, Target } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const stats = [
  { value: "$20B+", label: "Estimated GenAI market growth by end of decade", source: "Statista" },
  { value: "54%", label: "Companies integrated GenAI by end of 2023", source: "PwC" },
  { value: "$4.4T", label: "Economic benefits AI adds annually", source: "McKinsey" },
  { value: "$288B", label: "Projected US AI market value by 2026", source: "PRNews" },
  { value: "10-15%", label: "NLP market definite growth rate", source: "Statista" },
];

const DEFAULT_SPLIT_HIGHLIGHTS = [
  { icon: Users, title: "Stable delivery team aligned to your stack, with continuity across releases" },
  { icon: Handshake, title: "Security and review practices proportionate to stage and regulatory context" },
  { icon: Star, title: "Acceptance criteria tied to observable behavior and defined test evidence" },
  { icon: Headset, title: "Structured handover and enablement as internal teams assume operations" },
];

const DEFAULT_SPLIT_IMAGES = [
  "https://images.unsplash.com/photo-1522071820081-4ef5e1c0b612?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80",
];

/**
 * @param {"stats"|"split"} [variant="stats"]. `"split"` = two-column intro + 2×2 feature icons + dual images (see Service Detail).
 */
export default function ImpactStats({
  title,
  customStats,
  variant = "stats",
  label = "Methodology",
  description,
  highlights = DEFAULT_SPLIT_HIGHLIGHTS,
  splitImages = DEFAULT_SPLIT_IMAGES,
}) {
  const displayStats = customStats || stats;
  const intro =
    description ||
    "We scope work to demonstrate value on a clear cadence, document deliverables and interfaces, and adjust the engagement as priorities and evidence warrant.";

  if (variant === "split") {
    const heading =
      title || "Assurance for accountable delivery";

    return (
      <section
        data-testid="impact-stats-section"
        className="border-y border-slate-200/80 bg-[#eef1f4] py-4 sm:py-6 md:py-8"
      >
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-10 xl:gap-12">
            <AnimatedSection>
              <div className="max-w-xl text-left lg:max-w-none">
                {label != null && label !== false && (
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">{label}</p>
                )}
                <h2 className="mb-4 text-3xl font-bold tracking-tight text-[#0B1B3D] sm:text-4xl lg:text-[2.15rem] lg:leading-[1.18]">
                  {heading}
                </h2>
                <p className="text-[15px] leading-snug text-slate-600">{intro}</p>

                <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-5">
                  {highlights.map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <div key={i} className="flex gap-4">
                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-md border border-slate-200 bg-white shadow-[0_1px_2px_rgba(15,23,42,0.06)]">
                          <Icon className="h-6 w-6 text-[#2563eb]" strokeWidth={1.75} aria-hidden />
                        </div>
                        <p className="pt-1 text-sm font-semibold leading-snug text-[#0B1B3D]">
                          {item.title}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.08}>
              <div
                className="grid grid-cols-2 gap-3 sm:gap-4"
                data-testid="impact-stats-split-images"
              >
                {splitImages.slice(0, 2).map((src, i) => (
                  <div
                    key={src}
                    className={`overflow-hidden rounded-lg bg-slate-200 shadow-sm ${i === 1 ? "lg:mt-6" : ""
                      }`}
                  >
                    <img
                      src={src}
                      alt=""
                      className="h-[min(420px,55vw)] w-full object-cover sm:h-[min(460px,48vw)] lg:h-[min(520px,36vw)]"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      data-testid="impact-stats-section"
      className="py-16 lg:py-24 bg-white"
    >
      <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Header */}
          <div className="lg:col-span-4">
            <AnimatedSection>
              <span className="text-[10px] font-black text-blue-600 uppercase tracking-[0.3em] mb-4 block">System Outputs</span>
              <h2 className="text-3xl lg:text-4xl font-black text-[#0B1B3D] tracking-tighter uppercase leading-[0.9] mb-6">
                Outcomes for <br/> <span className="text-blue-600 italic">Early Operations</span>
              </h2>
              <p className="text-sm text-slate-500 font-medium leading-relaxed max-w-sm">
                Operational indicators and market benchmarks for context; delivery decisions remain grounded in your constraints.
              </p>
            </AnimatedSection>
          </div>

          {/* Mini KPI Grid */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              {displayStats.map((s, i) => (
                <AnimatedSection key={i} delay={i * 0.1}>
                  <div className="group relative bg-[#F8FAFC] border border-slate-100 rounded-[2rem] p-6 lg:p-8 transition-all duration-500 hover:bg-white hover:border-blue-500/20 hover:shadow-2xl hover:shadow-blue-500/10">
                    <div className="flex flex-col h-full justify-between">
                      <div className="flex items-center justify-between mb-8">
                        <div className="w-8 h-8 rounded-xl bg-white flex items-center justify-center text-blue-500 shadow-sm transition-all duration-500 group-hover:bg-blue-600 group-hover:text-white">
                          <Target size={14} />
                        </div>
                        <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">0{i+1}</span>
                      </div>
                      
                      <div>
                        <span className="block text-2xl lg:text-3xl font-black text-[#0B1B3D] tracking-tighter mb-2 group-hover:text-blue-600 transition-colors">
                          {s.value}
                        </span>
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-tight group-hover:text-slate-700 transition-colors">
                          {s.label}
                        </p>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
