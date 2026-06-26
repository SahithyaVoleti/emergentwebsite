import { Link } from "react-router-dom";
import {
  Bot,
  Sparkles,
  Brain,
  RefreshCw,
  Database,
  CloudCog,
  Code2,
  Smartphone,
  ShieldCheck,
} from "lucide-react";
import { HOME_FEATURES } from "../../../data/homePageSections";
import { paletteAccentIndex } from "../../../lib/brandPalette";

const ICONS = {
  agents: Bot,
  genai: Sparkles,
  ml: Brain,
  llm: RefreshCw,
  data: Database,
  devops: CloudCog,
  platform: Code2,
  mobile: Smartphone,
  governance: ShieldCheck,
};

export default function UbuntuHomeFeatures({ config, items }) {
  const sectionId = config?.id ?? HOME_FEATURES.id;
  const eyebrow = config?.eyebrow ?? HOME_FEATURES.eyebrow;
  const title = config?.title ?? HOME_FEATURES.title;
  const lead = config?.lead ?? HOME_FEATURES.lead;
  const list = items ?? HOME_FEATURES.items;

  if (!list.length) return null;

  return (
    <section
      id={sectionId}
      data-testid="home-features-section"
      className="ubuntu-section-block border-b border-[#d9d9d9] bg-white"
      aria-labelledby={`${sectionId}-heading`}
    >
      <div className="ubuntu-container">
        <div className="max-w-3xl text-left">
          {eyebrow && (
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#6b6b6b]">
              {eyebrow}
            </p>
          )}
          <h2 id={`${sectionId}-heading`} className="ubuntu-section-title text-[#2d2d2d]">
            {title}
          </h2>
          <p className="ubuntu-lead mt-4 max-w-3xl text-[#2d2d2d]">{lead}</p>
        </div>

        <dl className="mx-auto mt-8 grid max-w-none grid-cols-1 gap-x-8 gap-y-8 sm:mt-10 lg:grid-cols-2 lg:gap-x-12 lg:gap-y-10">
          {list.map((feature, index) => {
            const Icon = ICONS[feature.icon] ?? Brain;
            const title = feature.href ? (
              <Link
                to={feature.href}
                className="text-[#2d2d2d] underline decoration-transparent underline-offset-2 transition-colors hover:text-[#4a4a4a] hover:decoration-[#4a4a4a]"
              >
                {feature.name}
              </Link>
            ) : (
              feature.name
            );

            return (
              <div
                key={feature.name}
                className="relative pl-16"
                data-palette-accent={paletteAccentIndex(index)}
              >
                <dt className="text-base font-medium leading-snug">
                  <div
                    className="ubuntu-palette-icon absolute left-0 top-0 flex h-10 w-10 items-center justify-center"
                    aria-hidden="true"
                  >
                    <Icon className="h-6 w-6 text-white" strokeWidth={2} />
                  </div>
                  {title}
                </dt>
                <dd className="mt-2 text-base leading-relaxed text-[#7d8597]">{feature.description}</dd>
              </div>
            );
          })}
        </dl>
      </div>
    </section>
  );
}
