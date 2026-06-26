import TechStackRibbon from "../TechStackRibbon";
import { dedupeTechNamesByIcon } from "../../lib/serviceTechStackSlugs";

/** Horizontal tech ribbon panel (shared homepage + service bands). */
export default function TechFoundationCtaMedia({ techNames = [] }) {
  const names = dedupeTechNamesByIcon(techNames);
  if (!names.length) return null;

  return <TechStackRibbon items={names} />;
}
