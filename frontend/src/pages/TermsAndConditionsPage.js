import PageHero from "../components/PageHero";
import LegalContactBlock from "../components/LegalContactBlock";
import PageStandardSections from "../components/ubuntu/PageStandardSections";
import SitePageMain from "../components/ubuntu/SitePageMain";
import UbuntuPageSection from "../components/ubuntu/UbuntuPageSection";
import UbuntuListingSection from "../components/ubuntu/UbuntuListingSection";
import { LISTING_PAGE_HERO_IMAGES } from "../lib/heroImageThemes";
import { getSiteMockup } from "../data/siteMockups";

const templateDownloads = [
  { title: "India", file: "/legal-templates/jurisdiction-template-india.pdf", note: "Comprehensive jurisdiction template for India-focused contracts." },
  { title: "United Kingdom", file: "/legal-templates/jurisdiction-template-uk.pdf", note: "Comprehensive jurisdiction template for UK contracts." },
  { title: "European Union", file: "/legal-templates/jurisdiction-template-eu.pdf", note: "Comprehensive jurisdiction template for EU member-state contracts." },
  { title: "United States (Delaware)", file: "/legal-templates/jurisdiction-template-us-delaware.pdf", note: "Comprehensive jurisdiction template for Delaware-law contracts." },
  { title: "Singapore", file: "/legal-templates/jurisdiction-template-singapore.pdf", note: "Comprehensive jurisdiction template for Singapore-law contracts." },
  { title: "UAE (DIFC)", file: "/legal-templates/jurisdiction-template-uae-difc.pdf", note: "Comprehensive jurisdiction template for DIFC-governed contracts." },
];

const sections = [
  {
    title: "1. Scope of Terms",
    content: (
      <>
        <p className="text-[#555]">
          These Terms and Conditions apply to all NeuralTrix AI services, including consulting, software delivery, AI solutions, support engagements, and website use.
        </p>
        <p className="mt-4 text-[#555]">
          By using our website or engaging our services, you agree to these terms unless a separate written agreement expressly governs your engagement.
        </p>
      </>
    ),
  },
  {
    title: "2. Service Engagement and Delivery",
    content: (
      <>
        <p className="text-[#555]">Service scope, deliverables, timelines, and responsibilities are defined through approved proposals, statements of work, or contracts.</p>
        <ul className="mt-4 space-y-3">
          {[
            "Client teams provide timely access, inputs, and decision approvals",
            "Project outcomes depend on agreed assumptions and dependencies",
            "Change requests are evaluated for scope, cost, and timeline impact",
            "Delays caused by client dependencies may result in schedule and cost adjustments",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-[#555]">
              <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#8b1538] shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    title: "3. Fees, Invoicing, and Payment",
    content: (
      <>
        <p className="text-[#555]">Commercial terms are defined in the applicable engagement agreement.</p>
        <p className="mt-4 text-[#555]">
          Unless otherwise agreed in writing, invoices are due according to stated payment terms and may include applicable taxes, duties, or statutory charges.
        </p>
        <p className="mt-4 text-[#555]">
          We may suspend or limit services for overdue payments, material credit risk, or repeated payment delays, subject to contractual notice requirements.
        </p>
      </>
    ),
  },
  {
    title: "4. Intellectual Property",
    content: (
      <>
        <p className="text-[#555]">
          Pre-existing intellectual property of each party remains owned by that party. Rights to project-specific deliverables are governed by the signed engagement agreement.
        </p>
        <p className="mt-4 text-[#555]">
          Unless explicitly transferred in writing, NeuralTrix AI retains ownership of its frameworks, accelerators, methodologies, and reusable technical assets.
        </p>
        <p className="mt-4 text-[#555]">
          Any implied license is strictly limited to the scope and duration set out in the applicable engagement documents.
        </p>
      </>
    ),
  },
  {
    title: "5. Confidentiality and Data Protection",
    content: (
      <>
        <p className="text-[#555]">
          Both parties agree to protect confidential information and use it only for authorized business purposes related to service delivery.
        </p>
        <p className="mt-4 text-[#555]">
          Data handling, security controls, and privacy obligations are managed in accordance with applicable law and contractual commitments.
        </p>
      </>
    ),
  },
  {
    title: "6. Acceptable Use",
    content: (
      <>
        <p className="text-[#555]">You agree not to misuse our website, services, systems, or content.</p>
        <ul className="mt-4 space-y-3">
          {[
            "No unauthorized access, disruption, or security testing without approval",
            "No use that violates law, regulation, or third-party rights",
            "No resale or redistribution of services unless contractually authorized",
            "No reverse engineering, extraction, or unauthorized reuse of deliverables, models, or proprietary methods",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-[#555]">
              <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#8b1538] shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    title: "7. AI Systems and Third-Party Components",
    content: (
      <>
        <p className="text-[#555]">
          Some services may use third-party cloud, model, analytics, or integration components. Performance and availability of those components may affect service outcomes.
        </p>
        <p className="mt-4 text-[#555]">
          Where applicable, project documentation will define model boundaries, human review responsibilities, and operational controls for AI-enabled workflows.
        </p>
        <p className="mt-4 text-[#555]">
          AI outputs may vary by context and source data quality. Final business decisions and regulatory reliance remain the client&apos;s responsibility unless expressly agreed otherwise in writing.
        </p>
      </>
    ),
  },
  {
    title: "8. Warranty, Liability, and Indemnity",
    content: (
      <>
        <p className="text-[#555]">
          Services are provided using commercially reasonable care and professional standards. Except where explicitly stated in writing, no additional warranties are implied.
        </p>
        <p className="mt-4 text-[#555]">
          To the extent permitted by law, liability is limited as defined in the governing contract, and neither party is liable for indirect or consequential damages unless required by law.
        </p>
        <p className="mt-4 text-[#555]">
          Where no signed agreement specifies liability caps, our aggregate liability is limited to fees paid for the specific services directly giving rise to the claim.
        </p>
      </>
    ),
  },
  {
    title: "9. Compliance and Export Controls",
    content: (
      <>
        <p className="text-[#555]">
          Each party is responsible for compliance with laws and regulations applicable to its obligations, including data protection, anti-corruption, and export control requirements.
        </p>
        <p className="mt-4 text-[#555]">
          Services must not be used in prohibited jurisdictions or for restricted end uses where applicable law prevents such activity.
        </p>
      </>
    ),
  },
  {
    title: "10. Termination",
    content: (
      <>
        <p className="text-[#555]">
          Either party may terminate an engagement as permitted by the applicable agreement, including for material breach not cured within the agreed notice period.
        </p>
        <p className="mt-4 text-[#555]">
          On termination, each party remains responsible for accrued obligations, including payment, confidentiality, and lawful data handling requirements.
        </p>
        <p className="mt-4 text-[#555]">
          We may suspend or terminate access immediately where necessary to address security threats, legal non-compliance, fraud risk, or material breach.
        </p>
      </>
    ),
  },
  {
    title: "11. Governing Law and Dispute Process",
    content: (
      <>
        <p className="text-[#555]">
          Governing law, venue, and dispute resolution procedures are defined in the signed master agreement or statement of work. If no such agreement exists, applicable law is determined by the contracting entity.
        </p>
        <p className="mt-4 text-[#555]">
          Parties must attempt good-faith commercial resolution before commencing formal proceedings, except where urgent injunctive or protective relief is required.
        </p>
      </>
    ),
  },
  {
    title: "12. Country and Region Legal Applicability",
    content: (
      <>
        <p className="text-[#555]">
          These terms are intended for cross-border service engagements and are interpreted alongside mandatory local laws that apply in specific countries or regions.
        </p>
        <p className="mt-4 text-[#555]">
          Where local law grants non-waivable rights or imposes additional obligations, those local provisions apply only to the extent required by law and only for the affected jurisdiction.
        </p>
      </>
    ),
  },
  {
    title: "13. Regional Regulatory Coverage",
    content: (
      <>
        <p className="text-[#555]">
          Depending on the location of parties, users, systems, or data, services may be subject to regional regulations and statutory obligations.
        </p>
        <ul className="mt-4 space-y-3">
          {[
            "European Union and EEA: GDPR and related local implementation laws",
            "United Kingdom: UK GDPR and Data Protection Act 2018",
            "United States: federal and state-level privacy, security, and consumer protection rules",
            "Canada: PIPEDA and applicable provincial regulations",
            "Latin America and Brazil: LGPD and local consumer frameworks",
            "Asia-Pacific jurisdictions: PDPA and equivalent national privacy laws",
            "Africa and Middle East jurisdictions: applicable data protection and commercial regulations",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-[#555]">
              <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#8b1538] shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    title: "14. Governing Terms and Updates",
    content: (
      <>
        <p className="text-[#555]">
          These terms may be updated at our discretion to reflect operational, legal, security, or service changes. Updated versions become effective when published on this page unless otherwise stated.
        </p>
        <p className="mt-4 text-[#555]">
          Continued use of services after publication of updates constitutes binding acceptance of revised terms to the extent permitted by applicable law.
        </p>
        <div className="mt-4 inline-flex border border-[#8b1538]/30 bg-[#fdf2f4] px-3 py-1 text-xs font-medium text-[#7a1528]">
          EFFECTIVE DATE: MAY 2026 | LAST UPDATED: MAY 2026
        </div>
      </>
    ),
  },
  {
    title: "15. Jurisdiction Selection Clause Template",
    content: (
      <>
        <p className="text-[#555]">
          For master agreements and statements of work, parties may adopt the following template language and replace bracketed fields with agreed commercial terms.
        </p>
        <div className="mt-4 rounded-sm border border-slate-200 bg-slate-50 p-4">
          <p className="text-sm text-slate-700 leading-relaxed">
            Governing Law and Venue. This Agreement is governed by the laws of [Country/State], excluding conflict of law rules. Courts located in [City/Country] have exclusive jurisdiction, except that parties may agree to arbitration under [Arbitration Rules] with seat in [Seat].
          </p>
        </div>
        <p className="mt-4 text-[#555]">
          This template is operational guidance for contracting workflows and must be finalized by authorized legal representatives of both parties.
        </p>
      </>
    ),
  },
  {
    title: "16. Legal Disclaimer",
    content: (
      <p className="text-[#555]">
        This page provides general contractual information for services and website use. It is not legal advice and does not create an attorney-client relationship. Legal interpretation must be confirmed by qualified counsel in relevant jurisdictions.
      </p>
    ),
  },
  {
    title: "17. Legal Contact",
    content: (
      <p className="text-[#555]">
        For legal notices, contractual clarifications, or terms-related requests, contact us through our official business communication channels with complete organizational and engagement details.
      </p>
    ),
  },
];

export default function TermsAndConditionsPage() {
  const termsMockup = getSiteMockup("code");

  return (
    <SitePageMain>
      <PageHero
        label="Legal & Trust"
        title="Terms and Conditions for All Services"
        description="These terms define contractual structure, delivery governance, compliance expectations, and legal responsibilities across all NeuralTrix AI services."
        primaryCTA={{ text: "View Terms", href: "#terms-content" }}
        image={LISTING_PAGE_HERO_IMAGES.blog}
      />

      <UbuntuPageSection
        id="terms-content"
        eyebrow="Assurance"
        title="Assurance for service terms"
        lead="Contractual terms for engagement structure, delivery governance, and legal responsibilities."
        image={termsMockup.src}
        imageAlt={termsMockup.alt}
        variant="alt"
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
            <div className="ubuntu-prose space-y-10">
              {sections.map((section) => (
                <div key={section.title} className="border-t border-[#e5e5e5] pt-8">
                  <h3 className="mb-4 text-base font-medium text-[#111]">{section.title}</h3>
                  {section.content}
                </div>
              ))}
            </div>
          </>
        }
      />

      <UbuntuListingSection
        eyebrow="Coverage"
        title="Coverage across jurisdiction templates"
        lead="Downloadable clause templates for contracting jurisdictions. Align with executed agreements and applicable mandatory law."
      >
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {templateDownloads.map((template) => (
            <article key={template.file} className="border border-[#e5e5e5] bg-white p-6">
              <h3 className="mb-2 text-base font-medium text-[#111]">{template.title}</h3>
              <p className="mb-4 text-sm text-[#555]">{template.note}</p>
              <a href={template.file} download className="ubuntu-btn-primary inline-flex border-0 px-4 py-2 text-xs">
                Download template
              </a>
            </article>
          ))}
        </div>
      </UbuntuListingSection>

      <LegalContactBlock />

      <PageStandardSections pageKey="legal" contactContext="Terms and Conditions Page" />
    </SitePageMain>
  );
}
