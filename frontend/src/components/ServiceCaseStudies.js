import UbuntuFeaturesBand from "./ubuntu/UbuntuFeaturesBand";
import { SECTION_LABEL } from "../data/sectionLabels";

export default function ServiceCaseStudies({ cases, title }) {
  if (!cases || cases.length === 0) return null;

  const items = cases.map((cs) => ({
    title: cs.title,
    desc: cs.desc,
    name: cs.industry ? `${cs.industry} — ${cs.title}` : cs.title,
    description: [cs.archetype, cs.highlight, cs.desc].filter(Boolean).join(" · "),
  }));

  return (
    <UbuntuFeaturesBand
      id="service-case-studies"
      eyebrow={SECTION_LABEL.productionTestCases}
      title={title || "Production test cases for this service"}
      lead="Systems we developed, tested in live environments, and validated as production-ready."
      items={items}
    />
  );
}
