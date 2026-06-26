import PageHero from "../components/PageHero";
import PageStandardSections from "../components/ubuntu/PageStandardSections";
import SitePageMain from "../components/ubuntu/SitePageMain";
import UbuntuPageSection from "../components/ubuntu/UbuntuPageSection";
import UbuntuListingSection from "../components/ubuntu/UbuntuListingSection";
import { getSiteMockup } from "../data/siteMockups";

const privacyTemplateDownloads = [
  { title: "India", file: "/legal-templates/privacy-request-template-india.pdf", note: "Comprehensive DPDP-oriented request and verification template." },
  { title: "United Kingdom", file: "/legal-templates/privacy-request-template-uk.pdf", note: "Comprehensive UK GDPR request and verification template." },
  { title: "European Union", file: "/legal-templates/privacy-request-template-eu.pdf", note: "Comprehensive GDPR request and verification template." },
  { title: "United States", file: "/legal-templates/privacy-request-template-us.pdf", note: "Comprehensive US consumer-rights request and verification template." },
  { title: "Singapore", file: "/legal-templates/privacy-request-template-singapore.pdf", note: "Comprehensive PDPA request and verification template." },
  { title: "UAE (DIFC)", file: "/legal-templates/privacy-request-template-uae.pdf", note: "Comprehensive UAE request and verification template." },
];

const sections = [
  {
    title: "1. Scope and Applicability",
    content: (
      <>
        <p className="text-[#7d8597]">
          This Privacy Policy applies to all services, solutions, and website interactions delivered by NeuralTrix AI, including consulting engagements, platform-enabled offerings, and support communications.
        </p>
        <p className="mt-6 text-sm font-medium text-[#2d2d2d]">
          This policy covers:
        </p>
        <ul className="mt-4 space-y-3">
          {[
            "Service inquiry and onboarding interactions",
            "Project delivery and support communications",
            "Website usage and analytics data",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-[#7d8597]">
              <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </>
    )
  },
  {
    title: "2. Information We Collect",
    content: (
      <>
        <p className="text-[#7d8597]">
          We collect information required to deliver, secure, and improve services for enterprise clients and website users.
        </p>
        <p className="mt-6 text-sm font-medium text-[#2d2d2d]">This may include:</p>
        <ul className="mt-4 space-y-3">
          {[
            "Business contact details, including name, email, phone number, and company information",
            "Service-related information provided through forms, meetings, and project communication channels",
            "Technical metadata such as IP address, browser type, device details, and usage events",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-[#7d8597]">
              <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-[#7d8597]">
          We do not intentionally collect sensitive personal data unless it is required for a specific contractual purpose and handled under explicit safeguards.
        </p>
        <p className="mt-4 text-[#7d8597]">
          You are responsible for ensuring information submitted to us is accurate, lawfully obtained, and appropriately authorized for processing.
        </p>
      </>
    )
  },
  {
    title: "3. How We Use Information",
    content: (
      <>
        <p className="text-[#7d8597]">
          We process information for legitimate business and contractual purposes aligned with service delivery.
        </p>
        <ul className="mt-4 space-y-3 mb-6">
          {[
            "Respond to inquiries, proposals, and support requests",
            "Deliver contracted services, implementation work, and project governance",
            "Maintain operational security, performance monitoring, and service continuity",
            "Meet legal, compliance, and financial record-keeping obligations",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-[#7d8597]">
              <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-[#7d8597]">
          We do not sell personal information. We only share information with approved subprocessors and professional advisors where required to operate or comply with law.
        </p>
        <p className="mt-4 text-[#7d8597]">
          We may also use and disclose information where reasonably necessary to protect our legal rights, secure systems, enforce contractual terms, or prevent misuse of services.
        </p>
      </>
    )
  },
  {
    title: "4. Cookies and Analytics",
    content: (
      <>
        <p className="text-[#7d8597]">We use cookies and analytics technologies to operate and improve our website experience.</p>
        <p className="mt-6 text-sm font-medium text-[#2d2d2d]">These technologies support:</p>
        <ul className="mt-4 space-y-3">
          {[
            "Session continuity and basic website functionality",
            "Traffic analysis and content performance measurement",
            "Detection of reliability and security anomalies",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-[#7d8597]">
              <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-[#7d8597]">
          You may control cookies through your browser settings. Disabling certain cookies may affect the availability of specific website features.
        </p>
      </>
    )
  },
  {
    title: "5. Data Security and Retention",
    content: (
      <>
        <p className="text-[#7d8597]">We maintain administrative, technical, and organizational safeguards proportionate to the nature of the services delivered.</p>
        <p className="mt-4 text-[#7d8597]">
          Data is retained only for as long as required for contractual delivery, legal obligations, dispute resolution, and legitimate operational purposes.
        </p>
        <p className="mt-4 text-[#7d8597]">
          We may retain relevant records for longer periods where required to establish, exercise, or defend legal claims and regulatory positions.
        </p>
      </>
    )
  },
  {
    title: "6. International Transfers and Third Parties",
    content: (
      <>
        <p className="text-[#7d8597]">
          Where services involve cross-border collaboration or cloud infrastructure, data transfers may occur between jurisdictions with appropriate contractual and security controls.
        </p>
        <p className="mt-4 text-[#7d8597]">
          Third-party providers engaged by us are contractually required to process information for authorized purposes only and to maintain suitable protection standards.
        </p>
        <p className="mt-4 text-[#7d8597]">
          Third-party services may operate under independent policies and controls. We are not responsible for external practices outside our contractual control.
        </p>
      </>
    )
  },
  {
    title: "7. Country and Region Privacy Rights",
    content: (
      <>
        <p className="text-[#7d8597]">
          We recognize privacy rights required by applicable laws across jurisdictions, including rights related to access, correction, deletion, portability, objection, restriction, and consent withdrawal where available.
        </p>
        <p className="mt-4 text-[#7d8597]">
          Rights availability and response timelines vary by country or region. We will evaluate each request under the legal framework applicable to the individual, organization, and processing context.
        </p>
      </>
    )
  },
  {
    title: "8. Regional Compliance Notice",
    content: (
      <>
        <p className="text-[#7d8597]">
          Our privacy operations are designed to align with major data protection regimes where applicable to client engagements, data subjects, and processing activities.
        </p>
        <ul className="mt-4 space-y-3">
          {[
            "European Union and EEA: GDPR",
            "United Kingdom: UK GDPR and Data Protection Act 2018",
            "United States: CCPA and CPRA, plus applicable state privacy laws",
            "Canada: PIPEDA and applicable provincial privacy statutes",
            "Brazil: LGPD",
            "Singapore: PDPA",
            "Australia: Privacy Act 1988 and Australian Privacy Principles",
            "South Africa: POPIA",
            "India: Digital Personal Data Protection Act, where applicable",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-[#7d8597]">
              <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </>
    )
  },
  {
    title: "9. Your Rights and Requests",
    content: (
      <>
        <p className="text-[#7d8597]">
          Subject to applicable law and verification requirements, you may request access, correction, deletion, restriction, or objection related to personal information processed by us.
        </p>
        <p className="mt-4 text-[#7d8597]">
          To submit a request, you must contact us through our official communication channels with sufficient detail for verification and response handling.
        </p>
        <p className="mt-4 text-[#7d8597]">
          We may decline, limit, or defer requests where permitted by law, including cases involving legal privilege, security risk, disproportionate burden, conflicting rights, or unresolved verification.
        </p>
      </>
    )
  },
  {
    title: "10. AI and Service Delivery Data",
    content: (
      <>
        <p className="text-[#7d8597]">
          For AI engineering and automation services, we process only the data required for agreed use cases, model operations, evaluation, monitoring, and support.
        </p>
        <p className="mt-4 text-[#7d8597]">
          We do not use client-confidential project data to train shared foundation models unless explicitly authorized in writing by the client.
        </p>
        <p className="mt-4 text-[#7d8597]">
          We may use aggregated, de-identified, and operational metadata for service assurance, quality benchmarking, and internal model governance where such use does not identify a client or individual.
        </p>
      </>
    )
  },
  {
    title: "11. Policy Updates",
    content: (
      <>
        <p className="text-[#7d8597]">
          We may update this policy at our discretion to reflect legal, operational, security, or service changes. The latest version will be published on this page with an updated effective date.
        </p>
        <p className="mt-4 text-[#7d8597]">
          Continued use of our services or website after publication constitutes acceptance of the updated policy to the extent permitted by applicable law.
        </p>
      </>
    )
  },
  {
    title: "12. Legal Disclaimer",
    content: (
      <p className="text-[#7d8597]">
        This Privacy Policy provides general information about our privacy and data handling practices. It is not legal advice and must not be relied on as a substitute for independent legal review in any jurisdiction.
      </p>
    )
  },
  {
    title: "13. Legal Contact",
    content: (
      <p className="text-[#7d8597]">
        For privacy notices, data rights requests, or compliance questions, submit your request through our official contact channels with your organization details and request scope.
      </p>
    )
  },
  {
    title: "14. Effective Date and Last Updated",
    content: (
      <div className="inline-flex border border-[#d1511f]/30 bg-white px-3 py-1 text-xs font-medium text-[#b8451a]">
        Effective date: May 2026 · Last updated: May 2026
      </div>
    )
  }
];

export default function PrivacyPolicyPage() {
  const policyMockup = getSiteMockup("collaboration");

  return (
    <SitePageMain>
      <PageHero
        significance="utility"
        label="Legal & Trust"
        title="Privacy Policy for Services and Website Use"
        description="This policy defines how NeuralTrix AI collects, uses, secures, transfers, and governs personal information across service delivery and digital channels."
        primaryCTA={{ text: "View Details", href: "#privacy-content" }}
      />

      <UbuntuPageSection
        id="privacy-content"
        eyebrow="Policy"
        title="Privacy policy overview"
        lead="Policy sections for collection, use, retention, and rights requests across services and digital channels."
        image={policyMockup.src}
        imageAlt={policyMockup.alt}
        variant="alt"
        belowContent={
          <>
            <div className="mb-8 flex flex-wrap items-center gap-3">
              <span className="inline-flex border border-[#d9d9d9] bg-white px-3 py-1 text-xs font-medium text-[#7d8597]">
                Updated May 2026
              </span>
              <span className="inline-flex border border-[#d1511f]/30 bg-white px-3 py-1 text-xs font-medium text-[#b8451a]">
                Internal legal review recommended
              </span>
            </div>
            <div className="ubuntu-prose space-y-10">
              {sections.map((section) => (
                <div key={section.title} className="border-t border-[#e5e5e5] pt-8">
                  <h3 className="mb-4 text-base font-medium text-[#2d2d2d]">{section.title}</h3>
                  {section.content}
                </div>
              ))}
            </div>
          </>
        }
      />

      <UbuntuListingSection
        title="Privacy request templates"
        lead="Downloadable templates for common privacy and data-subject rights requests. Template use does not modify statutory obligations or response timelines."
      >
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {privacyTemplateDownloads.map((template) => (
            <article key={template.file} className="border border-[#e5e5e5] bg-white p-6">
              <h3 className="mb-2 text-base font-medium text-[#2d2d2d]">{template.title}</h3>
              <p className="mb-4 text-sm text-[#7d8597]">{template.note}</p>
              <a
                href={template.file}
                download
                className="ubuntu-btn-primary inline-flex border-0 px-4 py-2 text-xs"
              >
                Download template
              </a>
            </article>
          ))}
        </div>
      </UbuntuListingSection>

      <PageStandardSections
        pageKey="legal"
        contactContext="Privacy Policy Page"
        includeMethodology={false}
        includeOutcomes={false}
      />
    </SitePageMain>
  );
}

