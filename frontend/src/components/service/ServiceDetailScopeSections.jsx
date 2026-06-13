import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { FileText, Minus, Plus } from "lucide-react";

function useReveal() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-8%" });
  const prefersReducedMotion = useReducedMotion();

  const reveal = (delay = 0) =>
    prefersReducedMotion
      ? {}
      : {
          initial: { opacity: 0, y: 20 },
          animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
          transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] },
        };

  return { ref, reveal, isInView };
}

function ScopeBlock({ title, icon: Icon, items, tone = "in", delay = 0, reveal }) {
  const accent = tone === "in" ? "text-[#8b1538]" : "text-[#666]";
  const marker = tone === "in" ? "bg-[#8b1538]" : "bg-[#bbb]";

  return (
    <motion.div {...reveal(delay)} className="service-pilot-block border-t border-[#e5e5e5] pt-8">
      <div className={`mb-4 flex items-center gap-2 ${accent}`}>
        <Icon size={17} strokeWidth={2.25} aria-hidden />
        <h3 className="text-sm font-semibold uppercase tracking-[0.1em]">{title}</h3>
      </div>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <motion.li
            key={item}
            {...reveal(delay + 0.05 + index * 0.06)}
            className="flex gap-3 text-sm leading-relaxed text-[#444] sm:text-[0.9375rem]"
          >
            <span className={`mt-2 h-1.5 w-1.5 shrink-0 ${marker}`} aria-hidden />
            <span>{item}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}

/**
 * Unified pilot overview — sticky summary sidebar + flowing scope/deliverables (no zig-zag, no card grid).
 */
export default function ServicePilotOverviewSection({ pilot }) {
  const { ref, reveal } = useReveal();

  return (
    <section
      id="pilot-overview"
      data-testid="service-pilot-overview"
      className="ubuntu-section-block border-b border-[#d9d9d9] bg-white"
      aria-labelledby="pilot-overview-heading"
    >
      <div ref={ref} className="ubuntu-container">
        <div className="service-pilot-overview grid gap-10 lg:grid-cols-12 lg:gap-14 xl:gap-16">
          <motion.aside
            {...reveal(0)}
            className="service-pilot-overview__sidebar lg:col-span-4 lg:sticky lg:top-24 lg:self-start"
          >
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#666]">
              Pilot snapshot
            </p>
            <h2 id="pilot-overview-heading" className="ubuntu-section-title text-[#111]">
              Who this track is for
            </h2>
            <p className="ubuntu-lead mt-3 text-[#333]">{pilot.idealFor}</p>

            <div className="mt-6 border border-[#e5e5e5] bg-[#fafafa] p-5 sm:p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[#666]">
                Typical pilot window
              </p>
              <p className="mt-2 text-3xl font-medium tracking-tight text-[#8b1538] sm:text-4xl">
                {pilot.pilotDuration}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[#555]">
                Scoped milestones, acceptance tests, and handover artifacts defined before build starts.
              </p>
            </div>
          </motion.aside>

          <div className="lg:col-span-8">
            <ScopeBlock
              title="In scope"
              icon={Plus}
              items={pilot.inScope}
              tone="in"
              delay={0.1}
              reveal={reveal}
            />
            <ScopeBlock
              title="Out of scope"
              icon={Minus}
              items={pilot.outOfScope}
              tone="out"
              delay={0.22}
              reveal={reveal}
            />

            <motion.div {...reveal(0.34)} className="service-pilot-block border-t border-[#e5e5e5] pt-8">
              <div className="mb-4 flex items-center gap-2 text-[#8b1538]">
                <FileText size={17} strokeWidth={2.25} aria-hidden />
                <h3 className="text-sm font-semibold uppercase tracking-[0.1em]">Deliverables</h3>
              </div>
              <p className="mb-5 max-w-2xl text-sm leading-relaxed text-[#555] sm:text-base">
                Artifacts you can review and hand over—evidence your team can operate, not only a demo
                environment.
              </p>
              <ul className="divide-y divide-[#e5e5e5] border-y border-[#e5e5e5]">
                {pilot.deliverables.map((item, index) => (
                  <motion.li
                    key={item}
                    {...reveal(0.4 + index * 0.07)}
                    className="flex items-start gap-4 py-4 sm:py-5"
                  >
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center bg-[#8b1538] text-[10px] font-semibold text-white">
                      {index + 1}
                    </span>
                    <p className="text-sm leading-relaxed text-[#333] sm:text-base">{item}</p>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
