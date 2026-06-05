import PageHero from "../components/PageHero";
import PageStandardSections from "../components/ubuntu/PageStandardSections";
import SitePageMain from "../components/ubuntu/SitePageMain";
import UbuntuPageSection from "../components/ubuntu/UbuntuPageSection";
import { LISTING_PAGE_HERO_IMAGES } from "../lib/heroImageThemes";
import { getSiteMockup } from "../data/siteMockups";

const termsTemplates = [
  { title: "India Jurisdiction Clause", file: "/legal-templates/jurisdiction-template-india.pdf" },
  { title: "United Kingdom Jurisdiction Clause", file: "/legal-templates/jurisdiction-template-uk.pdf" },
  { title: "European Union Jurisdiction Clause", file: "/legal-templates/jurisdiction-template-eu.pdf" },
  { title: "United States (Delaware) Jurisdiction Clause", file: "/legal-templates/jurisdiction-template-us-delaware.pdf" },
  { title: "Singapore Jurisdiction Clause", file: "/legal-templates/jurisdiction-template-singapore.pdf" },
  { title: "UAE (DIFC) Jurisdiction Clause", file: "/legal-templates/jurisdiction-template-uae-difc.pdf" },
];

const privacyTemplates = [
  { title: "India Privacy Request Template", file: "/legal-templates/privacy-request-template-india.pdf" },
  { title: "United Kingdom Privacy Request Template", file: "/legal-templates/privacy-request-template-uk.pdf" },
  { title: "European Union Privacy Request Template", file: "/legal-templates/privacy-request-template-eu.pdf" },
  { title: "United States Privacy Request Template", file: "/legal-templates/privacy-request-template-us.pdf" },
  { title: "Singapore Privacy Request Template", file: "/legal-templates/privacy-request-template-singapore.pdf" },
  { title: "UAE Privacy Request Template", file: "/legal-templates/privacy-request-template-uae.pdf" },
];

function TemplateCard({ item }) {
  return (
    <article className="h-full border border-[#e5e5e5] bg-white p-6">
      <h3 className="mb-4 text-base font-medium text-[#111]">{item.title}</h3>
      <a href={item.file} download className="ubuntu-btn-primary inline-flex border-0 px-4 py-2 text-xs">
        Download template
      </a>
    </article>
  );
}

export default function LegalTemplatesPage() {
  const mockup = getSiteMockup("collaboration");

  return (
    <SitePageMain>
      <PageHero
        label="Legal & Trust"
        title="Legal Templates Index for Global Engagements"
        description="This index centralizes jurisdiction and privacy templates for cross-border contracting and compliance workflows."
        primaryCTA={{ text: "View Templates", href: "#legal-templates-content" }}
        image={LISTING_PAGE_HERO_IMAGES.blog}
      />

      <UbuntuPageSection
        id="legal-templates-content"
        eyebrow="Coverage"
        title="Coverage across legal templates"
        lead="Downloadable templates for jurisdiction clauses and privacy rights requests across key regions."
        image={mockup.src}
        imageAlt={mockup.alt}
        belowContent={
          <>
            <div className="mb-8 flex flex-wrap items-center gap-3">
              <span className="inline-flex border border-[#d9d9d9] bg-[#fafafa] px-3 py-1 text-xs font-medium text-[#555]">
                Updated May 2026
              </span>
              <span className="inline-flex border border-[#8b1538]/30 bg-[#fdf2f4] px-3 py-1 text-xs font-medium text-[#7a1528]">
                Internal legal review recommended
              </span>
            </div>

            <article className="mb-10 border border-[#e5e5e5] bg-[#fafafa] p-6">
              <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-[#666]">Assurance</p>
              <h3 className="mb-3 text-base font-medium text-[#111]">Assurance for governance reporting</h3>
              <p className="mb-4 text-sm text-[#555]">
                Board-ready legal risk dashboard covering operational, financial, compliance, and dispute exposure.
              </p>
              <a
                href="/legal-templates/legal-risk-dashboard.pdf"
                download
                className="ubuntu-btn-primary inline-flex border-0 px-4 py-2 text-xs"
              >
                Download legal risk dashboard
              </a>
            </article>

            <h3 className="ubuntu-section-title mb-5 text-xl">Jurisdiction clause templates</h3>
            <div className="mb-12 grid grid-cols-1 gap-5 md:grid-cols-2">
              {termsTemplates.map((item) => (
                <TemplateCard key={item.file} item={item} />
              ))}
            </div>

            <h3 className="ubuntu-section-title mb-5 text-xl">Privacy request templates</h3>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {privacyTemplates.map((item) => (
                <TemplateCard key={item.file} item={item} />
              ))}
            </div>
          </>
        }
      />

      <PageStandardSections pageKey="legal" contactContext="Legal Templates Page" />
    </SitePageMain>
  );
}
