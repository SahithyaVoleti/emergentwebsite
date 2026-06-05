import { HOME_WORKFLOW } from "../../../data/homePageSections";
import AnimatedSection from "../../AnimatedSection";
import ArchTimelineHexIcon from "./ArchTimelineHexIcon";

const STEP_COLORS = ["#173d5e", "#2f6fad", "#c9a227", "#8b1538"];

export default function UbuntuHomeWorkflow({ config, steps }) {
  const sectionId = config?.id ?? HOME_WORKFLOW.id;
  const eyebrow = config?.eyebrow ?? HOME_WORKFLOW.eyebrow;
  const title = config?.title ?? HOME_WORKFLOW.title;
  const lead = config?.lead ?? HOME_WORKFLOW.lead;
  const timelineSteps = steps ?? HOME_WORKFLOW.steps;

  if (!timelineSteps.length) return null;

  return (
    <section
      id={sectionId}
      data-testid="home-ai-workflow"
      className="ubuntu-section-block ubuntu-arch-timeline-section border-b border-[#d9d9d9]"
      aria-labelledby={`${sectionId}-heading`}
    >
      <div className="ubuntu-container">
        <AnimatedSection>
          <div className="max-w-3xl text-left">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#666]">
              {eyebrow}
            </p>
            <h2 id={`${sectionId}-heading`} className="ubuntu-section-title text-[#111]">
              {title}
            </h2>
            <p className="ubuntu-lead mt-4 max-w-3xl text-[#333]">{lead}</p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.08}>
          <ol className="ubuntu-arch-timeline mt-10 sm:mt-12">
            <div className="ubuntu-arch-timeline__track" aria-hidden="true">
              <span className="ubuntu-arch-timeline__track-line" />
            </div>

            {timelineSteps.map((step, index) => {
              const color = STEP_COLORS[index] ?? STEP_COLORS[STEP_COLORS.length - 1];

              return (
                <li
                  key={step.title}
                  className="ubuntu-arch-timeline__step"
                  style={{ "--arch-step-color": color }}
                >
                  <div className="ubuntu-arch-timeline__hex">
                    <ArchTimelineHexIcon
                      index={index}
                      label={String(index + 1).padStart(2, "0")}
                    />
                  </div>

                  <div className="ubuntu-arch-timeline__marker" aria-hidden="true">
                    <span className="ubuntu-arch-timeline__dot" />
                  </div>

                  <h3 className="ubuntu-arch-timeline__title">{step.title}</h3>
                  <p className="ubuntu-arch-timeline__desc">{step.desc}</p>
                </li>
              );
            })}
          </ol>
        </AnimatedSection>
      </div>
    </section>
  );
}
