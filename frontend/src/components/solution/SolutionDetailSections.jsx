import { useMemo, useRef } from "react";
import { getSolutionProductName } from "../../lib/solutionDisplay";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Calendar, Layers, Server } from "lucide-react";
import TechStackLogoGrid from "../TechStackLogoGrid";
import MethodologyFlowchart from "../MethodologyFlowchart";
import SectionEyebrow from "../ubuntu/SectionEyebrow";
import SectionTitle from "../ubuntu/SectionTitle";
import { sectionBlockClass } from "../../lib/sectionBands";

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
      <p className="text-sm font-medium leading-snug text-white sm:text-base">{value}</p>
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
      className={sectionBlockClass("border-b border-[#d9d9d9]")}
      aria-labelledby="solution-overview-heading"
    >
      <div ref={ref} className="ubuntu-container">
        <motion.div {...reveal(0)} className="mb-6 max-w-3xl sm:mb-8">
          <SectionEyebrow>Overview</SectionEyebrow>
          <SectionTitle
            id="solution-overview-heading"
            title={`${getSolutionProductName(solution)} accelerator scope`}
          />
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
              <TechStackLogoGrid items={techItems} className="mt-4" />
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
              <p className="text-base font-medium text-white">{week.label}</p>
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
      className={sectionBlockClass("border-b border-[#d9d9d9]")}
      aria-labelledby="pilot-package-heading"
    >
      <div ref={ref} className="ubuntu-container">
        <motion.div {...reveal(0)} className="max-w-3xl">
          <SectionEyebrow>Pilot package</SectionEyebrow>
          <SectionTitle
            id="pilot-package-heading"
            title="Typical 6–8 week accelerator pilot"
          />
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

  return (
    <section
      id="solution-methodology"
      data-testid="solution-methodology"
      className={sectionBlockClass("border-b border-[var(--site-border)]")}
      aria-labelledby="solution-methodology-heading"
    >
      <div ref={ref} className="ubuntu-container relative z-10">
        <motion.div {...reveal(0)} className="max-w-3xl">
          <SectionEyebrow>Methodology</SectionEyebrow>
          <SectionTitle
            id="solution-methodology-heading"
            title="Methodology for solution accelerator deployment"
          />
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
