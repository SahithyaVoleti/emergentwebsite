import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const STEP_COLORS = ["#0f2744", "#1a365d", "#2f6fad", "#4a6fa5"];
const PHASE_MS = 3200;

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  return reduced;
}

/**
 * Animated process timeline — active phase travels across steps with line fill + pulse.
 */
export default function UbuntuHomeProcessTimeline({ steps }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const rootRef = useRef(null);
  const isInView = useInView(rootRef, { amount: 0.35 });
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (!isInView || prefersReducedMotion || steps.length < 2) return undefined;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % steps.length);
    }, PHASE_MS);

    return () => window.clearInterval(timer);
  }, [isInView, prefersReducedMotion, steps.length]);

  if (!steps.length) return null;

  const progress =
    steps.length <= 1 ? 1 : activeIndex / (steps.length - 1);
  const activeColor = STEP_COLORS[activeIndex] ?? STEP_COLORS[STEP_COLORS.length - 1];

  return (
    <div ref={rootRef} className="w-full" data-testid="home-process-timeline">
      {/* Desktop animated timeline */}
      <div className="relative hidden md:block">
        <div
          className="pointer-events-none absolute left-[10%] right-[10%] top-10 h-[3px] overflow-hidden rounded-full bg-[#e8e8e8]/90"
          aria-hidden="true"
        >
          <motion.div
            className="h-full rounded-full"
            style={{
              background: "linear-gradient(90deg, #0f2744 0%, #1a365d 33%, #2f6fad 66%, #4a6fa5 100%)",
            }}
            initial={false}
            animate={{ width: `${Math.max(progress * 100, 8)}%` }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.85, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>

        <motion.div
          className="pointer-events-none absolute top-[2.35rem] z-20 h-3 w-3 -translate-x-1/2 rounded-full"
          style={{ backgroundColor: activeColor, boxShadow: `0 0 0 6px ${activeColor}33, 0 0 18px ${activeColor}66` }}
          initial={false}
          animate={{
            left: `${10 + progress * 80}%`,
            scale: prefersReducedMotion ? 1 : [1, 1.35, 1],
          }}
          transition={{
            left: { duration: prefersReducedMotion ? 0 : 0.85, ease: [0.22, 1, 0.36, 1] },
            scale: prefersReducedMotion
              ? { duration: 0 }
              : { duration: 0.6, repeat: Infinity, repeatDelay: PHASE_MS / 1000 - 0.6 },
          }}
          aria-hidden="true"
        />

        <ol className="relative z-10 grid list-none grid-cols-4 gap-4 p-0 lg:gap-6">
          {steps.map((step, index) => {
            const color = STEP_COLORS[index] ?? STEP_COLORS[STEP_COLORS.length - 1];
            const isActive = index === activeIndex;
            const isReached = index <= activeIndex;

            return (
              <li key={step.title} className="flex flex-col items-center text-center">
                <motion.button
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className="relative mb-5 flex h-[4.5rem] w-[4.5rem] items-center justify-center border bg-white/95 outline-none focus-visible:ring-2 focus-visible:ring-[#1a365d] focus-visible:ring-offset-2"
                  animate={{
                    borderColor: isActive ? color : isReached ? color : "#d9d9d9",
                    scale: isActive && !prefersReducedMotion ? 1.06 : 1,
                    opacity: isReached ? 1 : 0.55,
                    boxShadow: isActive
                      ? `0 10px 28px ${color}33, 0 0 0 4px ${color}22`
                      : "0 4px 14px rgba(0,0,0,0.06)",
                  }}
                  transition={{ duration: prefersReducedMotion ? 0 : 0.55, ease: [0.22, 1, 0.36, 1] }}
                  aria-current={isActive ? "step" : undefined}
                  aria-label={`Phase ${index + 1}: ${step.title}`}
                >
                  {isActive && !prefersReducedMotion && (
                    <motion.span
                      className="absolute inset-0 rounded-[inherit] border-2"
                      style={{ borderColor: color }}
                      initial={{ opacity: 0.6, scale: 1 }}
                      animate={{ opacity: 0, scale: 1.35 }}
                      transition={{ duration: 1.4, repeat: Infinity, ease: "easeOut" }}
                      aria-hidden="true"
                    />
                  )}
                  <span
                    className="relative text-base font-semibold tabular-nums"
                    style={{ color: isReached ? color : "#888" }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </motion.button>

                <motion.h3
                  className="ubuntu-arch-timeline__title"
                  animate={{ color: isActive ? "#ffffff" : isReached ? "#cccccc" : "#888888" }}
                  transition={{ duration: 0.4 }}
                >
                  {step.title}
                </motion.h3>
                {step.duration && (
                  <p className="ubuntu-arch-timeline__duration mt-1 text-xs font-semibold uppercase tracking-wide text-[#1a365d]">
                    {step.duration}
                  </p>
                )}
                <motion.p
                  className="ubuntu-arch-timeline__desc"
                  animate={{ opacity: isActive ? 1 : isReached ? 0.82 : 0.55 }}
                  transition={{ duration: 0.4 }}
                >
                  {step.desc}
                </motion.p>
              </li>
            );
          })}
        </ol>
      </div>

      {/* Mobile: vertical traveling highlight */}
      <div className="md:hidden">
        <ol className="relative list-none space-y-5 p-0 pl-1">
          <div
            className="pointer-events-none absolute bottom-2 left-[1.125rem] top-2 w-[2px] rounded-full bg-[#ececec]"
            aria-hidden="true"
          >
            <motion.div
              className="w-full rounded-full"
              style={{
                background: "linear-gradient(180deg, #0f2744 0%, #1a365d 33%, #2f6fad 66%, #4a6fa5 100%)",
              }}
              initial={false}
              animate={{
                height: `${((activeIndex + 1) / steps.length) * 100}%`,
              }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.75, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>

          {steps.map((step, index) => {
            const color = STEP_COLORS[index] ?? STEP_COLORS[STEP_COLORS.length - 1];
            const isActive = index === activeIndex;
            const isReached = index <= activeIndex;

            return (
              <li key={step.title}>
                <motion.button
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className="flex w-full gap-4 border border-[#e5e5e5] bg-white/95 p-5 text-left shadow-sm outline-none focus-visible:ring-2 focus-visible:ring-[#1a365d]"
                  animate={{
                    borderColor: isActive ? color : "#e5e5e5",
                    opacity: isReached ? 1 : 0.6,
                    x: isActive && !prefersReducedMotion ? 4 : 0,
                  }}
                  transition={{ duration: 0.45 }}
                  aria-current={isActive ? "step" : undefined}
                >
                  <motion.div
                    className="flex h-12 w-12 shrink-0 items-center justify-center border bg-white"
                    animate={{
                      borderColor: isActive ? color : "#1a365d",
                      scale: isActive && !prefersReducedMotion ? 1.05 : 1,
                    }}
                  >
                    <span className="text-sm font-semibold tabular-nums" style={{ color }}>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </motion.div>
                  <div className="min-w-0">
                    <h3 className="text-base font-medium text-white">{step.title}</h3>
                    {step.duration && (
                      <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-[#1a365d]">
                        {step.duration}
                      </p>
                    )}
                    <p className="mt-2 text-sm leading-relaxed text-[#555]">{step.desc}</p>
                  </div>
                </motion.button>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}
