import { useCallback, useEffect, useRef, useState } from "react";
import { SECTION_LABEL } from "../../data/sectionLabels";
import SectionEyebrow from "./SectionEyebrow";
import SectionTitle from "./SectionTitle";

const STEP_INTERVAL_MS = 4000;

/**
 * Dark methodology band — auto-advancing horizontal stepper with progress track.
 */
export default function UbuntuProcessMethodologyStrip({
  id = "methodology-process",
  eyebrow = SECTION_LABEL.methodology,
  title = "Methodology for delivery engagements",
  lead = "This methodology sequences alignment, build, and deployment checkpoints with clear ownership at each stage.",
  steps = [],
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoverPaused, setHoverPaused] = useState(false);

  const stepCount = steps.length;
  const pausedRef = useRef(false);
  const stepCountRef = useRef(stepCount);

  stepCountRef.current = stepCount;
  pausedRef.current = hoverPaused;

  const progressPercent =
    stepCount <= 1 ? 0 : (activeIndex / (stepCount - 1)) * 100;

  const goToStep = useCallback((index) => {
    setActiveIndex(index);
  }, []);

  /* Single persistent timer — not torn down when hover pause toggles */
  useEffect(() => {
    if (stepCount <= 1) return undefined;

    const tick = () => {
      if (pausedRef.current) return;

      const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)");
      if (prefersReduced.matches) return;

      const count = stepCountRef.current;
      if (count <= 1) return;

      setActiveIndex((current) => (current + 1) % count);
    };

    const timer = window.setInterval(tick, STEP_INTERVAL_MS);
    return () => window.clearInterval(timer);
  }, [stepCount]);

  if (!stepCount) return null;

  const activeStep = steps[activeIndex];

  return (
    <section
      id={id}
      data-testid="process-methodology-stepper"
      className="ubuntu-stats-cta-strip ubuntu-process-stepper border-y border-[#dce8f5]"
      aria-labelledby={`${id}-heading`}
    >
      <div className="ubuntu-container relative z-10 py-8 sm:py-10 md:py-12">
        <header className="max-w-3xl text-left">
          {eyebrow && <SectionEyebrow>{eyebrow}</SectionEyebrow>}
          <SectionTitle id={`${id}-heading`} className="!mb-3" title={title} />
          {lead && <p className="ubuntu-lead mt-0">{lead}</p>}
        </header>

        <div
          className="ubuntu-process-stepper__nav mt-8 sm:mt-10"
          onMouseEnter={() => setHoverPaused(true)}
          onMouseLeave={() => setHoverPaused(false)}
        >
          <div
            className="ubuntu-process-stepper__track-wrap"
            style={{ "--process-progress": `${progressPercent}%` }}
            role="navigation"
            aria-label="Methodology steps"
          >
            <div className="ubuntu-process-stepper__track" aria-hidden="true">
              <span className="ubuntu-process-stepper__track-bg" />
              <span className="ubuntu-process-stepper__track-fill" />
            </div>

            <ol className="ubuntu-process-stepper__rail">
              {steps.map((step, index) => {
                const isActive = activeIndex === index;
                const isComplete = index < activeIndex;

                return (
                  <li
                    key={`${step.label}-${index}`}
                    className={[
                      "ubuntu-process-stepper__step",
                      isActive ? "is-active" : "",
                      isComplete ? "is-complete" : "",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                  >
                    <button
                      type="button"
                      className="ubuntu-process-stepper__control"
                      onClick={() => goToStep(index)}
                      aria-current={isActive ? "step" : undefined}
                      aria-label={`Step ${step.value}: ${step.label}`}
                    >
                      <span className="ubuntu-process-stepper__node">
                        <span className="ubuntu-process-stepper__value">{step.value}</span>
                      </span>
                      <span className="ubuntu-process-stepper__label">{step.label}</span>
                    </button>
                  </li>
                );
              })}
            </ol>
          </div>

          <p className="ubuntu-process-stepper__status sr-only" aria-live="off">
            {activeStep
              ? `Step ${activeStep.value} of ${String(stepCount).padStart(2, "0")}: ${activeStep.label}`
              : ""}
          </p>
        </div>
      </div>
    </section>
  );
}
