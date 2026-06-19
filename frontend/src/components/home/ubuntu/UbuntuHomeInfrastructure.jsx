import { HOME_INFRASTRUCTURE } from "../../../data/homePageSections";
import { getSiteMockup } from "../../../data/siteMockups";
import MockupFrame from "../../ubuntu/MockupFrame";

export default function UbuntuHomeInfrastructure() {
  const mockup = getSiteMockup(HOME_INFRASTRUCTURE.mockupKey);

  return (
    <section
      id={HOME_INFRASTRUCTURE.id}
      data-testid="home-infrastructure"
      className="ubuntu-infra-section border-y border-[#2a2a2a]"
      aria-labelledby={`${HOME_INFRASTRUCTURE.id}-heading`}
    >
      <div className="ubuntu-stats-dots-layer" aria-hidden="true" />
      <div className="ubuntu-container relative z-10">
        <div className="ubuntu-split ubuntu-split--image-right gap-10 lg:gap-14">
          <div className="ubuntu-split__content max-w-xl">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#e8b4b8]">
              {HOME_INFRASTRUCTURE.eyebrow}
            </p>
            <h2
              id={`${HOME_INFRASTRUCTURE.id}-heading`}
              className="ubuntu-section-title text-white"
            >
              {HOME_INFRASTRUCTURE.title}
            </h2>
            <p className="ubuntu-lead mt-4 text-white/85">{HOME_INFRASTRUCTURE.lead}</p>
            <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {HOME_INFRASTRUCTURE.topics.map((topic) => (
                <li
                  key={topic}
                  className="border border-white/15 bg-white/5 px-4 py-3 text-sm text-white/90 transition-colors hover:border-[#e8b4b8]/40 hover:bg-white/[0.08]"
                >
                  {topic}
                </li>
              ))}
            </ul>
          </div>
          <div className="ubuntu-split__media">
            <MockupFrame src={mockup.src} alt={mockup.alt} variant="browser" />
          </div>
        </div>
      </div>
    </section>
  );
}
