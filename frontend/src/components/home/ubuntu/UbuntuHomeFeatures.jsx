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
import UbuntuSplitLayout from "../../ubuntu/UbuntuSplitLayout";
import SectionEyebrow from "../../ubuntu/SectionEyebrow";
import SectionTitle from "../../ubuntu/SectionTitle";
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
  const section = { ...HOME_FEATURES, ...config };
  const { id: sectionId, eyebrow, title, lead, media } = section;
  const list = items ?? section.items;

  if (!list.length) return null;

  return (
    <UbuntuSplitLayout
      id={sectionId}
      testId="home-features-section"
      className="border-b border-[#d9d9d9]"
      imagePosition="right"
      mediaClassName="ubuntu-split__media--fill"
      mediaSlot={
        media?.src ? (
          <img
            src={media.src}
            alt={media.alt ?? ""}
            className="ubuntu-split__img ubuntu-split__img--fill"
            loading="lazy"
            decoding="async"
          />
        ) : null
      }
    >
      {eyebrow && <SectionEyebrow>{eyebrow}</SectionEyebrow>}
      <SectionTitle id={`${sectionId}-heading`} title={title} />
      {lead && <p className="ubuntu-lead">{lead}</p>}
      <dl className="ubuntu-home-features__list mt-6 grid grid-cols-1 gap-x-8 gap-y-8 sm:mt-8 lg:grid-cols-1 lg:gap-y-7">
        {list.map((feature, index) => {
          const Icon = ICONS[feature.icon] ?? Brain;

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
                {feature.name}
              </dt>
              <dd className="mt-2 text-base leading-relaxed text-[#7d8597]">{feature.description}</dd>
            </div>
          );
        })}
      </dl>
    </UbuntuSplitLayout>
  );
}
