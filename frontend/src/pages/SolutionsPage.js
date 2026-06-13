import PageHero from "../components/PageHero";
import SolutionsHorizontalSlider from "../components/ubuntu/SolutionsHorizontalSlider";
import UbuntuPageSection from "../components/ubuntu/UbuntuPageSection";
import PageStandardSections from "../components/ubuntu/PageStandardSections";
import SitePageMain from "../components/ubuntu/SitePageMain";
import solutions from "../data/solutions";
import { LISTING_PAGE_HERO_IMAGES } from "../lib/heroImageThemes";
import { getSiteMockup } from "../data/siteMockups";

const INTEGRATION_EFFORT = {
  "databrain-ai": "Medium",
  "medimind-ai": "High",
  "talentify-ai": "Medium",
  "quikbiz-ai": "Medium",
  "intellibot-ai": "Low–medium",
};

const IDEAL_BUYER = {
  "databrain-ai": "Legal, ops, research teams",
  "medimind-ai": "Clinics, health IT",
  "talentify-ai": "HR / recruiting ops",
  "quikbiz-ai": "Commerce, support teams",
  "intellibot-ai": "Internal ops, support",
};

export default function SolutionsPage() {
  const mockup = getSiteMockup("documents");

  return (
    <SitePageMain>
      <PageHero
        label="Solutions"
        title="Solution accelerators for structured AI rollouts"
        description="Accelerators are pre-architected starting points for pilots—not standalone SaaS products. We deploy modules into your environment with scoped integration and documented handover."
        primaryCTA={{ text: "Start a pilot", href: "#page-contact", contactIntent: "consultation" }}
        secondaryCTA={{ text: "Browse accelerators", href: "#solutions-catalog" }}
        image={LISTING_PAGE_HERO_IMAGES.solutions}
        illustrationKey="solutions"
      />

      <UbuntuPageSection
        eyebrow="How to read accelerators"
        title="Pilot-ready modules, not product shelfware"
        lead="Each accelerator shortens time-to-first-value when the problem class matches. Final stack and vendor choices stay governed by your policies."
        image={mockup.src}
        imageAlt={mockup.alt}
        bullets={[
          "English descriptor always visible alongside product name",
          "Typical pilot window: 4–8 weeks depending on integration depth",
          "Deployed in your cloud with explicit data boundaries",
        ]}
        belowContent={
          <div className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-[#d9d9d9] bg-[#fafafa]">
                  <th className="px-3 py-2 font-semibold text-[#111]">Accelerator</th>
                  <th className="px-3 py-2 font-semibold text-[#111]">Time to pilot</th>
                  <th className="px-3 py-2 font-semibold text-[#111]">Ideal buyer</th>
                  <th className="px-3 py-2 font-semibold text-[#111]">Integration effort</th>
                </tr>
              </thead>
              <tbody>
                {solutions.map((row) => (
                  <tr key={row.slug} className="border-b border-[#e5e5e5]">
                    <td className="px-3 py-2 text-[#111]">
                      {row.title} — {row.cardDescriptor}
                    </td>
                    <td className="px-3 py-2 text-[#555]">
                      {row.slug === "medimind-ai" ? "6–8 weeks" : "4–6 weeks"}
                    </td>
                    <td className="px-3 py-2 text-[#555]">{IDEAL_BUYER[row.slug] ?? "Product & ops teams"}</td>
                    <td className="px-3 py-2 text-[#555]">{INTEGRATION_EFFORT[row.slug] ?? "Medium"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        }
      />

      <SolutionsHorizontalSlider
        id="solutions-catalog"
        eyebrow="Coverage"
        title="Coverage across solution accelerators"
        lead="Pre-architected modules by accelerator—use the carousel to review each solution, then open a full overview with scope boundaries and integration assumptions."
        viewAllHref={undefined}
        autoAdvanceMs={0}
        className="!border-t-0"
      />

      <PageStandardSections
        pageKey="solutions"
        contactContext="Solutions Page"
        includeAssurance={false}
      />
    </SitePageMain>
  );
}
