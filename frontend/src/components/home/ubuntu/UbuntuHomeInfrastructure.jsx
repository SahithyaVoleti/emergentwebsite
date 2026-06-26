import { HOME_INFRASTRUCTURE } from "../../../data/homePageSections";
import { getSiteMockup } from "../../../data/siteMockups";
import UbuntuSplitLayout from "../../ubuntu/UbuntuSplitLayout";
import SectionEyebrow from "../../ubuntu/SectionEyebrow";
import SectionTitle from "../../ubuntu/SectionTitle";

export default function UbuntuHomeInfrastructure() {
  const mockup = getSiteMockup(HOME_INFRASTRUCTURE.mockupKey);

  return (
    <UbuntuSplitLayout
      id={HOME_INFRASTRUCTURE.id}
      testId="home-infrastructure"
      className="ubuntu-infra-section border-y border-[#e5e5e5]"
      image={mockup.src}
      imageAlt={mockup.alt}
      imagePosition="right"
    >
      <SectionEyebrow>{HOME_INFRASTRUCTURE.eyebrow}</SectionEyebrow>
      <SectionTitle
        id={`${HOME_INFRASTRUCTURE.id}-heading`}
        as="h2"
        title={HOME_INFRASTRUCTURE.title}
      />
      <p className="ubuntu-lead mt-4">{HOME_INFRASTRUCTURE.lead}</p>
      <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {HOME_INFRASTRUCTURE.topics.map((topic) => (
          <li
            key={topic}
            className="border border-[#e5e5e5] bg-white px-4 py-3 text-sm text-[#2d2d2d] transition-colors hover:border-[#d1511f]/40 hover:bg-white"
          >
            {topic}
          </li>
        ))}
      </ul>
    </UbuntuSplitLayout>
  );
}
