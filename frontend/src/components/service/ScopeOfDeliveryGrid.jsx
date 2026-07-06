import { Brain } from "lucide-react";
import { SECTION_LABEL } from "../../data/sectionLabels";
import SectionEyebrow from "../ubuntu/SectionEyebrow";
import SectionTitle from "../ubuntu/SectionTitle";
import ModuleIconGrid from "./ModuleIconGrid";

export { assignUniqueScopeIcons, resolveScopeDeliveryIcon } from "../../lib/scopeDeliveryIcons";

export default function ScopeOfDeliveryGrid({
  id = "scope-of-delivery",
  eyebrow = SECTION_LABEL.scope,
  title,
  lead,
  modules = [],
  serviceIcon: ServiceIcon = Brain,
}) {
  if (!modules.length) return null;

  return (
    <section
      id={id}
      className="ubuntu-section-block ubuntu-section--alt ubuntu-scope-grid-section border-y border-[#d9d9d9]"
      aria-labelledby={`${id}-heading`}
    >
      <div className="ubuntu-container">
        <header className="ubuntu-scope-grid__header max-w-3xl">
          {eyebrow && (
            <SectionEyebrow className="ubuntu-scope-grid__eyebrow">{eyebrow}</SectionEyebrow>
          )}
          <SectionTitle id={`${id}-heading`} title={title} />
          {lead && <p className="ubuntu-lead mt-4">{lead}</p>}
        </header>

        <ModuleIconGrid items={modules} fallbackIcon={ServiceIcon} />
      </div>
    </section>
  );
}
