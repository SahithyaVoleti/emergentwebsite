import TechStackLogoGrid from "../TechStackLogoGrid";
import { dedupeTechNamesByIcon } from "../../lib/serviceTechStackSlugs";

/** Scrolling tech stack panel (shared homepage + service CTA bands). */
export default function TechFoundationCtaMedia({ techNames = [] }) {
  const names = dedupeTechNamesByIcon(techNames);
  if (!names.length) return null;

  return (
    <div className="ubuntu-tech-stack__panel">
      <TechStackLogoGrid
        items={names}
        compact
        marqueeColumnCap={3}
        marqueeColumnHeightClassName="h-[min(22rem,48vh)] sm:h-[24rem] min-h-[16rem]"
      />
    </div>
  );
}
