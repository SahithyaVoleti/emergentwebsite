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
} from "lucide-react";
import { HOME_FEATURES } from "../../../data/homePageSections";

const ICONS = {
  agents: Bot,
  genai: Sparkles,
  ml: Brain,
  llm: RefreshCw,
  data: Database,
  devops: CloudCog,
  platform: Code2,
  mobile: Smartphone,
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
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#666]">
            {eyebrow}
          </p>
          <h2 id={`${sectionId}-heading`} className="ubuntu-section-title text-[#111]">
            {title}
          </h2>
          <p className="ubuntu-lead mt-4 max-w-3xl text-[#333]">{lead}</p>
        </div>

        <dl className="mx-auto mt-8 grid max-w-none grid-cols-1 gap-x-8 gap-y-8 sm:mt-10 lg:grid-cols-2 lg:gap-x-12 lg:gap-y-10">
          {list.map((feature) => {
            const Icon = ICONS[feature.icon] ?? Brain;
            const title = feature.href ? (
              <Link
                to={feature.href}
                className="text-[#111] underline decoration-transparent underline-offset-2 transition-colors hover:text-[#8b1538] hover:decoration-[#8b1538]"
              >
                {feature.name}
              </Link>
            ) : (
              feature.name
            );

            return (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-medium leading-snug">
                  <div
                    className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center bg-[#8b1538]"
                    aria-hidden="true"
                  >
                    <Icon className="h-6 w-6 text-white" strokeWidth={2} />
                  </div>
                  {title}
                </dt>
                <dd className="mt-2 text-base leading-relaxed text-[#555]">{feature.description}</dd>
              </div>
            );
          })}
        </dl>
      </div>
    </section>
  );
}
