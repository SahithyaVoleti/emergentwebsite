import TechStackLogoGrid from "../TechStackLogoGrid";
import { dedupeTechNamesByIcon } from "../../lib/serviceTechStackSlugs";

export default function TechFoundationCtaMedia({ techNames = [] }) {
  const names = dedupeTechNamesByIcon(techNames);
  if (!names.length) return null;

  return <TechStackLogoGrid items={names} />;
}
