import UbuntuFeaturesBand from "./ubuntu/UbuntuFeaturesBand";
import { TRACEFOLD } from "../lib/tracefoldLabel";

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
      eyebrow="Coverage"
      title={title || `${TRACEFOLD} delivery patterns`}
      lead="Examples of problem classes and how we structure an engagement—not references to specific completed client programs unless separately agreed."
      items={items}
    />
  );
}
