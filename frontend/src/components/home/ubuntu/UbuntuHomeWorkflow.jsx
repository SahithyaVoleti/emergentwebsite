import { HOME_WORKFLOW } from "../../../data/homePageSections";
import UbuntuProcessMethodologyStrip from "../../ubuntu/UbuntuProcessMethodologyStrip";
import { toMethodologyStripSteps } from "../../../lib/processSteps";

/** Homepage methodology band — same process shape and stepper as service detail pages. */
export default function UbuntuHomeWorkflow({ config, process: processProp }) {
  const section = { ...HOME_WORKFLOW, ...config };
  const process = processProp ?? section.process ?? [];

  return (
    <UbuntuProcessMethodologyStrip
      id={section.id}
      eyebrow={section.eyebrow}
      title={section.title}
      lead={section.lead}
      steps={toMethodologyStripSteps(process)}
    />
  );
}
