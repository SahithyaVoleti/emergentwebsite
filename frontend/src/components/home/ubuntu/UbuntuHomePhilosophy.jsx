import { HOME_PHILOSOPHY } from "../../../data/homePageSections";
import { getSiteMockup } from "../../../data/siteMockups";
import UbuntuSplitLayout from "../../ubuntu/UbuntuSplitLayout";
import SectionEyebrow from "../../ubuntu/SectionEyebrow";
import SectionTitle from "../../ubuntu/SectionTitle";

export default function UbuntuHomePhilosophy({
  config,
  mockup: mockupProp,
  imagePosition = "right",
}) {
  const section = { ...HOME_PHILOSOPHY, ...config };
  const mockup = mockupProp ?? getSiteMockup(section.mockupKey ?? HOME_PHILOSOPHY.mockupKey);

  return (
    <UbuntuSplitLayout
      id={section.id}
      testId="home-philosophy"
      variant="alt"
      image={mockup.src}
      imageAlt={mockup.alt}
      imagePosition={imagePosition}
    >
      {section.eyebrow && <SectionEyebrow>{section.eyebrow}</SectionEyebrow>}
      <SectionTitle as="h2" title={section.title} />
      <p className="ubuntu-lead">{section.lead}</p>
      <ul className="mt-6 space-y-3">
        {(section.bullets ?? []).map((bullet) => (
          <li key={bullet} className="flex gap-3 text-sm leading-relaxed text-[#2d2d2d]">
            <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 bg-[#5c5c5c]" aria-hidden="true" />
            {bullet}
          </li>
        ))}
      </ul>
    </UbuntuSplitLayout>
  );
}
