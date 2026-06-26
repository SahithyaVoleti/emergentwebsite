import { useMemo, useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Calendar, Layers, Server } from "lucide-react";
import { getTechFoundationIcon } from "../../lib/techFoundationIcons";
import MethodologyFlowchart from "../MethodologyFlowchart";
import SectionPatternBackground from "../SectionPatternBackground";
import { usePatternSectionHover } from "../../hooks/usePatternSectionHover";

function useReveal() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-8%" });
  const prefersReducedMotion = useReducedMotion();

  const reveal = (delay = 0) =>
    prefersReducedMotion
      ? {}
      : {
          initial: { opacity: 0, y: 22 },
          animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 },
          transition: { duration: 0.48, delay, ease: [0.22, 1, 0.36, 1] },
        };

  return { ref, reveal };
}

function FactTile({ icon: Icon, label, value, delay, reveal }) {
  return (
    <motion.div
      {...reveal(delay)}
      className="solution-fact-tile border border-[#e5e5e5] bg-white p-4 sm:p-5"
    >
      <div className="mb-2 flex items-center gap-2 text-[#8b1538]">
        <Icon size={16} strokeWidth={2} aria-hidden />
        <span className="text-[10px] font-semibold uppercase tracking-[0.12em]">{label}</span>
      </div>
      <p className="text-sm font-medium leading-snug text-[#111] sm:text-base">{value}</p>
    </motion.div>
  );
}

export function SolutionOverviewSection({ solution }) {
  const { ref, reveal } = useReveal();
  const techItems = useMemo(
    () => [...new Set((solution.tech ?? []).map((item) => String(item).trim()).filter(Boolean))],
    [solution.tech]
  );

  return (
    <section
      id="solution-overview"
      data-testid="solution-overview"
      className="ubuntu-section-block ubuntu-section--alt border-b border-[#d9d9d9]"
      aria-labelledby="solution-overview-heading"
    >
      <div ref={ref} className="ubuntu-container">
        <motion.div {...reveal(0)} className="mb-6 max-w-3xl sm:mb-8">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#666]">
            Overview
          </p>
          <h2 id="solution-overview-heading" className="ubuntu-section-title text-[#111]">
            {solution.title} accelerator scope
          </h2>
        </motion.div>

        <motion.div
          {...reveal(0.08)}
          className="solution-datasheet overflow-hidden border border-[#d9d9d9] bg-white"
        >
          <div className="grid lg:grid-cols-12">
            <div className="border-b border-[#e5e5e5] p-6 sm:p-8 lg:col-span-8 lg:border-b-0 lg:border-r">
              <p className="text-base leading-relaxed text-[#333] sm:text-[1.0625rem]">
                {solution.overview}
              </p>
              {(solution.useCases ?? []).length > 0 && (
                <div className="mt-6 border-t border-[#eee] pt-5">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#888]">
                    Example use cases
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-[#555]">
                    {(solution.useCases ?? []).slice(0, 4).join(" · ")}
                  </p>
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 lg:col-span-4 lg:grid-cols-1">
              <FactTile
                icon={Calendar}
                label="Pilot window"
                value="6–8 weeks typical"
                delay={0.14}
                reveal={reveal}
              />
              <FactTile
                icon={Server}
                label="Deployment"
                value="Your cloud or on-prem environment"
                delay={0.18}
                reveal={reveal}
              />
              <FactTile
                icon={Layers}
                label="Delivery model"
                value="Configured accelerator modules"
                delay={0.22}
                reveal={reveal}
              />
            </div>
          </div>

          {techItems.length > 0 && (
            <div className="border-t border-[#e5e5e5] bg-white px-4 py-5 sm:px-6 sm:py-6">
              <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#888]">
                Technology stack
              </p>
              <ul className="solution-tech-strip mt-4 flex flex-wrap items-center gap-x-1 gap-y-3">
                {techItems.map((name, index) => {
                  const Icon = getTechFoundationIcon(name);
                  return (
                    <motion.li
                      key={name}
                      {...reveal(0.26 + index * 0.05)}
                      className="flex items-center"
                    >
                      {index > 0 && (
                        <span
                          className="mx-3 hidden h-4 w-px bg-[#d9d9d9] sm:inline-block"
                          aria-hidden
                        />
                      )}
                      <span className="inline-flex items-center gap-2 text-sm text-[#333]">
                        <Icon className="h-4 w-4 text-[#8b1538]" aria-hidden />
                        <span className="font-medium">{name}</span>
                      </span>
                    </motion.li>
                  );
                })}
              </ul>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}

function SolutionPilotSchedule({ weeks, reveal }) {
  return (
    <div className="solution-pilot-schedule overflow-hidden border border-[#d9d9d9] bg-white">
      <div
        className="solution-pilot-schedule__head hidden grid-cols-[6.5rem_9rem_1fr] gap-6 border-b border-[#e5e5e5] bg-white px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#666] sm:grid"
        aria-hidden
      >
        <span>Week</span>
        <span>Phase</span>
        <span>Focus</span>
      </div>

      <ol className="list-none divide-y divide-[#e5e5e5] p-0">
        {weeks.map((week, index) => (
          <motion.li
            key={week.week}
            {...reveal(0.08 + index * 0.05)}
            className="solution-pilot-schedule__row grid gap-2 px-5 py-5 sm:grid-cols-[6.5rem_9rem_1fr] sm:items-start sm:gap-6 sm:px-6 sm:py-6"
          >
            <div>
              <span className="text-[10px] font-semibold uppercase tracking-[0.1em] text-[#999] sm:sr-only">
                Week
              </span>
              <p className="font-mono text-sm font-semibold text-[#8b1538] sm:text-base">{week.week}</p>
            </div>
            <div>
              <span className="text-[10px] font-semibold uppercase tracking-[0.1em] text-[#999] sm:sr-only">
                Phase
              </span>
              <p className="text-base font-medium text-[#111]">{week.label}</p>
            </div>
            <div>
              <span className="text-[10px] font-semibold uppercase tracking-[0.1em] text-[#999] sm:sr-only">
                Focus
              </span>
              <p className="text-sm leading-relaxed text-[#555] sm:text-[0.9375rem]">{week.desc}</p>
            </div>
          </motion.li>
        ))}
      </ol>
    </div>
  );
}

export function SolutionPilotTimeline({ weeks }) {
  const { ref, reveal } = useReveal();

  return (
    <section
      id="pilot-package"
      data-testid="solution-pilot-timeline"
      className="ubuntu-section-block ubuntu-section--alt border-b border-[#d9d9d9]"
      aria-labelledby="pilot-package-heading"
    >
      <div ref={ref} className="ubuntu-container">
        <motion.div {...reveal(0)} className="max-w-3xl">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#666]">
            Pilot package
          </p>
          <h2 id="pilot-package-heading" className="ubuntu-section-title text-[#111]">
            Typical 6–8 week accelerator pilot
          </h2>
          <p className="ubuntu-lead mt-3 text-[#333]">
            Exact scope depends on integration depth. Slack, Teams, and SOC 2 alignment are
            available in pilot scope—not assumed day one.
          </p>
        </motion.div>

        <div className="mt-8 sm:mt-10">
          <SolutionPilotSchedule weeks={weeks} reveal={reveal} />
        </div>
      </div>
    </section>
  );
}

export function SolutionMethodologySection({ steps }) {
  const { ref, reveal } = useReveal();
  const { sectionRef, onPointerMove, onPointerLeave } = usePatternSectionHover();

  return (
    <section
      ref={sectionRef}
      id="solution-methodology"
      data-testid="solution-methodology"
      className="ubuntu-section-block ubuntu-pattern-section ubuntu-pattern-section--cta border-b border-[#d9d9d9]"
      aria-labelledby="solution-methodology-heading"
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
    >
      <SectionPatternBackground variant="cta" />
      <div ref={ref} className="ubuntu-container relative z-10">
        <motion.div {...reveal(0)} className="max-w-3xl">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#8b4c6e]">
            Methodology
          </p>
          <h2 id="solution-methodology-heading" className="ubuntu-section-title">
            Methodology for solution accelerator deployment
          </h2>
          <p className="ubuntu-lead mt-3">
            Connect, configure, validate, and hand over—with explicit checkpoints.
          </p>
        </motion.div>

        <motion.div
          {...reveal(0.12)}
          className="solution-methodology-panel mt-8 border border-[#e5e5e5] bg-white p-4 sm:mt-10 sm:p-6"
        >
          <MethodologyFlowchart steps={steps} />
        </motion.div>
      </div>
    </section>
  );
}
