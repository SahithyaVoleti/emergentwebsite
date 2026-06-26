import { HOME_METHODOLOGY } from "../../../data/homePageSections";
import UbuntuHomeWorkflow from "./UbuntuHomeWorkflow";

/** Homepage band explaining delivery methodology for early customer programs. */
export default function UbuntuHomeHowWeWork() {
  return (
    <UbuntuHomeWorkflow
      config={{
        id: "how-we-work",
        eyebrow: "Methodology",
        title: HOME_METHODOLOGY.title,
        lead: HOME_METHODOLOGY.lead,
      }}
      steps={HOME_METHODOLOGY.steps}
    />
  );
}
