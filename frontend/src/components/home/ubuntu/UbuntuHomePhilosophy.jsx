import { HOME_PHILOSOPHY } from "../../../data/homePageSections";
import { getSiteMockup } from "../../../data/siteMockups";
import UbuntuSplitLayout from "../../ubuntu/UbuntuSplitLayout";

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
      {section.eyebrow && (
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#5c677d]">
          {section.eyebrow}
        </p>
      )}
      <h2 className="ubuntu-section-title">{section.title}</h2>
      <p className="ubuntu-lead">{section.lead}</p>
      <ul className="mt-6 space-y-3">
        {(section.bullets ?? []).map((bullet) => (
          <li key={bullet} className="flex gap-3 text-sm leading-relaxed text-[#33415c]">
            <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 bg-[#0466c8]" aria-hidden="true" />
            {bullet}
          </li>
        ))}
      </ul>
    </UbuntuSplitLayout>
  );
}
