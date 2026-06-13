import { COMPANY_CONTACT, COMPANY_NAME } from "../lib/company";

/** Canonical contact block for legal and compliance pages. */
export default function LegalContactBlock() {
  return (
    <section
      className="ubuntu-section-block border-b border-[#d9d9d9] bg-[#fafafa]"
      aria-labelledby="legal-contact-heading"
    >
      <div className="ubuntu-container py-10">
        <h2 id="legal-contact-heading" className="text-lg font-medium text-[#111]">
          Contact {COMPANY_NAME}
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-[#555]">
          For privacy, legal, or compliance requests, reach us using the details below.
        </p>
        <ul className="mt-6 space-y-2 text-sm text-[#333]">
          <li>
            Email:{" "}
            <a href={`mailto:${COMPANY_CONTACT.email}`} className="text-[#8b1538] hover:underline">
              {COMPANY_CONTACT.email}
            </a>
          </li>
          <li>
            Phone:{" "}
            <a href={`tel:${COMPANY_CONTACT.phoneE164}`} className="text-[#8b1538] hover:underline">
              {COMPANY_CONTACT.phone}
            </a>
          </li>
          <li>
            Address: {COMPANY_CONTACT.addressLine1}, {COMPANY_CONTACT.addressLine2}
          </li>
        </ul>
      </div>
    </section>
  );
}
