import {
  Brain,
  Compass,
  MessageSquareText,
  ScanEye,
  TrendingUp,
  Sparkles,
  ShieldAlert,
  Workflow,
  FlaskConical,
  GitBranch,
  Mic,
  Network,
  Cpu,
} from "lucide-react";
import { SECTION_LABEL } from "../../data/sectionLabels";
import SectionEyebrow from "../ubuntu/SectionEyebrow";
import SectionTitle from "../ubuntu/SectionTitle";

const ICON_BY_KEYWORD = [
  { match: /strategy|consulting/i, Icon: Compass },
  { match: /language|nlp|text/i, Icon: MessageSquareText },
  { match: /vision|image|video/i, Icon: ScanEye },
  { match: /predictive|forecast|analytics/i, Icon: TrendingUp },
  { match: /recommend/i, Icon: Sparkles },
  { match: /anomaly|fraud|intrusion/i, Icon: ShieldAlert },
  { match: /automation|workflow/i, Icon: Workflow },
  { match: /prototyp|rapid/i, Icon: FlaskConical },
  { match: /mlops|production ml|registry/i, Icon: GitBranch },
  { match: /speech|audio|asr/i, Icon: Mic },
  { match: /knowledge|graph|ontology/i, Icon: Network },
  { match: /edge|on-device|device/i, Icon: Cpu },
  { match: /copilot|genai|generative|llm|rag|prompt/i, Icon: Sparkles },
  { match: /agent/i, Icon: Workflow },
  { match: /mobile|ios|android|flutter/i, Icon: Cpu },
  { match: /devops|ci\/cd|pipeline/i, Icon: GitBranch },
  { match: /data engineering|warehouse|etl/i, Icon: TrendingUp },
];

export function resolveScopeDeliveryIcon(title, fallback = Brain) {
  const entry = ICON_BY_KEYWORD.find(({ match }) => match.test(title ?? ""));
  return entry?.Icon ?? fallback;
}

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

        <div className="ubuntu-scope-grid__panel">
          <ul className="ubuntu-scope-grid__list">
            {modules.map((mod) => {
              const Icon = mod.icon ?? resolveScopeDeliveryIcon(mod.title, ServiceIcon);

              return (
                <li key={mod.title}>
                  <article className="ubuntu-scope-grid__card">
                    <div className="ubuntu-scope-grid__icon-wrap" aria-hidden>
                      <Icon className="ubuntu-scope-grid__icon" strokeWidth={2} />
                    </div>
                    <h3 className="ubuntu-scope-grid__card-title">{mod.title}</h3>
                    <p className="ubuntu-scope-grid__card-desc">{mod.desc}</p>
                  </article>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
