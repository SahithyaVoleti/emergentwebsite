import { useState } from "react";
import { Link } from "react-router-dom";
import UbuntuPageSection from "./ubuntu/UbuntuPageSection";
import industries from "../data/industries";
import industryTabUseCases from "../data/industryTabUseCases";
import { getSiteMockup } from "../data/siteMockups";

export default function IndustriesServed({ title }) {
  const [activeTab, setActiveTab] = useState(0);
  const displayIndustries = industries.slice(0, 6);
  const active = displayIndustries[activeTab];
  const useCases =
    industryTabUseCases[active.title] ||
    active.features.slice(0, 6).map((f) => f.title);
  const mockup = getSiteMockup("collaboration");

  return (
    <UbuntuPageSection
      id="industries-served"
      eyebrow="Coverage"
      title={title || "Coverage across industries"}
      lead="Sector patterns and use cases we scope during discovery for this service track."
      image={mockup.src}
      imageAlt={mockup.alt}
      variant="alt"
      belowContent={
        <>
          <div className="mb-6 flex flex-wrap gap-1.5 border border-[#d9d9d9] bg-white p-1">
            {displayIndustries.map((ind, i) => (
              <button
                key={ind.slug}
                type="button"
                onClick={() => setActiveTab(i)}
                className={`px-4 py-2 text-xs font-semibold uppercase tracking-wide transition-colors ${
                  activeTab === i
                    ? "bg-[#8b1538] text-white"
                    : "text-[#666] hover:bg-[#fafafa] hover:text-[#8b1538]"
                }`}
              >
                {ind.title}
              </button>
            ))}
          </div>
          <p className="mb-4 text-sm leading-relaxed text-[#555]">{active.shortDesc}</p>
          <ul className="ubuntu-bullet-list">
            {useCases.map((uc) => (
              <li key={uc}>{uc}</li>
            ))}
          </ul>
          <div className="ubuntu-cta-row mt-6">
            <Link to={`/industries/${active.slug}`} className="ubuntu-link">
              View {active.title} coverage
            </Link>
          </div>
        </>
      }
    />
  );
}
