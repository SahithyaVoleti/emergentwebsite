import { HOME_WORKFLOW } from "../../../data/homePageSections";
import AnimatedSection from "../../AnimatedSection";
import UbuntuHomeProcessTimeline from "./UbuntuHomeProcessTimeline";

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
          <div className="mt-10 sm:mt-12">
            <UbuntuHomeProcessTimeline steps={timelineSteps} />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
