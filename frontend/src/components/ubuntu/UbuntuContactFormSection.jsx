import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, CheckCircle2, Mail, Phone, MapPin } from "lucide-react";
import UbuntuSplitLayout from "./UbuntuSplitLayout";
import MockupFrame from "./MockupFrame";
import { BorderBeam } from "@/components/ui/border-beam";
import { openWhatsAppLead } from "../../utils/whatsappLead";
import { COMPANY_CONTACT } from "../../lib/company";

const PHONE_COUNTRIES = [
  { code: "IN", dial: "+91", label: "IN +91" },
  { code: "US", dial: "+1", label: "US +1" },
  { code: "UK", dial: "+44", label: "UK +44" },
  { code: "EU", dial: "+49", label: "EU +49" },
];

const fieldClass =
  "ubuntu-contact-field block w-full border border-[#d9d9d9] bg-white px-3 py-2 text-sm text-[#111] placeholder:text-[#888] focus:border-[#8b1538] focus:outline-none focus:ring-1 focus:ring-[#8b1538]";

const labelClass = "block text-xs font-semibold text-[#111] sm:text-sm";

export default function UbuntuContactFormSection({
  id = "page-contact",
  testIdPrefix = "contact",
  copy,
  context,
  leadIntent = "contact",
  showContactDetails = true,
}) {
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    company: "",
    email: "",
    phone_country: "IN",
    phone: "",
    description: "",
    agree: false,
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const dial =
    PHONE_COUNTRIES.find((c) => c.code === form.phone_country)?.dial ?? "+91";

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (
      !form.first_name ||
      !form.last_name ||
      !form.email ||
      !form.description ||
      !form.agree
    ) {
      setError("Please complete required fields and accept the privacy policy.");
      return;
    }
    setLoading(true);
    try {
      const phoneLine = form.phone ? `${dial} ${form.phone}`.trim() : "";
      const descParts = [
        form.company ? `Company: ${form.company}` : null,
        form.description,
      ].filter(Boolean);
      openWhatsAppLead({
        first_name: form.first_name,
        last_name: form.last_name,
        email: form.email,
        phone: phoneLine || undefined,
        description: descParts.join("\n"),
        context,
        leadIntent,
      });
      setSubmitted(true);
      setForm({
        first_name: "",
        last_name: "",
        company: "",
        email: "",
        phone_country: "IN",
        phone: "",
        description: "",
        agree: false,
      });
    } catch {
      setError("Could not open WhatsApp. Try again or contact us by phone.");
    } finally {
      setLoading(false);
    }
  };

  const formBody = submitted ? (
    <div
      data-testid={`${testIdPrefix}-success`}
      className="flex min-h-[18rem] flex-col items-center justify-center px-4 py-10 text-center sm:min-h-[22rem]"
    >
      <CheckCircle2 size={40} className="mb-3 text-[#8b1538]" strokeWidth={1.5} />
      <h3 className="mb-2 text-lg font-medium text-[#111]">Thank you</h3>
      <p className="text-sm text-[#555]">
        WhatsApp should open with your message draft. Send it there and we will follow up with clear next steps.
      </p>
      <button
        type="button"
        data-testid={`${testIdPrefix}-send-another`}
        onClick={() => setSubmitted(false)}
        className="ubuntu-btn-primary mt-6 border-0 text-sm"
      >
        Send another message
      </button>
    </div>
  ) : (
    <form onSubmit={handleSubmit} className="px-4 py-5 sm:px-5 sm:py-6">
      <div className="ubuntu-contact-form__grid grid grid-cols-2 gap-x-4 gap-y-4">
        <div>
          <label htmlFor={`${testIdPrefix}-first-name`} className={labelClass}>
            First name *
          </label>
          <div className="mt-1.5">
            <input
              id={`${testIdPrefix}-first-name`}
              data-testid={`${testIdPrefix}-first-name`}
              name="first_name"
              type="text"
              autoComplete="given-name"
              value={form.first_name}
              onChange={handleChange}
              className={fieldClass}
              required
            />
          </div>
        </div>
        <div>
          <label htmlFor={`${testIdPrefix}-last-name`} className={labelClass}>
            Last name *
          </label>
          <div className="mt-1.5">
            <input
              id={`${testIdPrefix}-last-name`}
              data-testid={`${testIdPrefix}-last-name`}
              name="last_name"
              type="text"
              autoComplete="family-name"
              value={form.last_name}
              onChange={handleChange}
              className={fieldClass}
              required
            />
          </div>
        </div>
        <div className="col-span-2">
          <label htmlFor={`${testIdPrefix}-company`} className={labelClass}>
            Company
          </label>
          <div className="mt-1.5">
            <input
              id={`${testIdPrefix}-company`}
              name="company"
              type="text"
              autoComplete="organization"
              value={form.company}
              onChange={handleChange}
              className={fieldClass}
            />
          </div>
        </div>
        <div className="min-w-0">
          <label htmlFor={`${testIdPrefix}-email`} className={labelClass}>
            Email *
          </label>
          <div className="mt-1.5">
            <input
              id={`${testIdPrefix}-email`}
              data-testid={`${testIdPrefix}-email`}
              name="email"
              type="email"
              autoComplete="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@company.com"
              className={fieldClass}
              required
            />
          </div>
        </div>
        <div className="min-w-0">
          <label htmlFor={`${testIdPrefix}-phone`} className={labelClass}>
            Phone number
          </label>
          <div className="mt-1.5">
            <div className="ubuntu-contact-phone-row flex min-w-0 border border-[#d9d9d9] bg-white focus-within:border-[#8b1538] focus-within:ring-1 focus-within:ring-[#8b1538]">
              <div className="relative grid shrink-0 grid-cols-1">
                <select
                  name="phone_country"
                  aria-label="Country code"
                  value={form.phone_country}
                  onChange={handleChange}
                  className="col-start-1 row-start-1 w-full appearance-none border-0 bg-transparent py-2 pr-7 pl-2.5 text-sm text-[#555] focus:outline-none"
                >
                  {PHONE_COUNTRIES.map((c) => (
                    <option key={c.code} value={c.code}>
                      {c.label}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  aria-hidden
                  className="pointer-events-none col-start-1 row-start-1 mr-1.5 size-4 self-center justify-self-end text-[#666]"
                />
              </div>
              <input
                id={`${testIdPrefix}-phone`}
                data-testid={`${testIdPrefix}-phone`}
                name="phone"
                type="tel"
                autoComplete="tel"
                placeholder="Phone number"
                value={form.phone}
                onChange={handleChange}
                className="min-w-0 grow border-0 bg-transparent py-2 pr-2 pl-1 text-sm text-[#111] placeholder:text-[#888] focus:outline-none"
              />
            </div>
          </div>
        </div>
        <div className="col-span-2">
          <label htmlFor={`${testIdPrefix}-description`} className={labelClass}>
            {copy.messageLabel}
          </label>
          <div className="mt-1.5">
            <textarea
              id={`${testIdPrefix}-description`}
              data-testid={`${testIdPrefix}-description`}
              name="description"
              rows={3}
              value={form.description}
              onChange={handleChange}
              placeholder={copy.messagePlaceholder}
              className={`${fieldClass} min-h-[5rem] resize-y`}
              required
            />
          </div>
        </div>
        <div className="col-span-2 flex gap-x-3">
          <div className="flex h-6 shrink-0 items-center">
            <input
              id={`${testIdPrefix}-agree`}
              name="agree"
              type="checkbox"
              checked={form.agree}
              onChange={handleChange}
              className="size-4 border-[#d9d9d9] text-[#8b1538] focus:ring-[#8b1538]"
            />
          </div>
          <label htmlFor={`${testIdPrefix}-agree`} className="text-xs leading-relaxed text-[#555] sm:text-sm">
            By selecting this, you agree to our{" "}
            <Link to="/privacy-policy" className="font-semibold text-[#8b1538] hover:underline">
              privacy policy
            </Link>
            .
          </label>
        </div>
      </div>

      {error && (
        <p data-testid={`${testIdPrefix}-error`} className="mt-4 text-sm text-red-600">
          {error}
        </p>
      )}

      <div className="mt-6">
        <button
          type="submit"
          data-testid={`${testIdPrefix}-submit-button`}
          disabled={loading}
          className="ubuntu-btn-primary block w-full border-0 py-2.5 text-center text-sm font-semibold disabled:opacity-60"
        >
          {loading ? "Submitting..." : copy.submitLabel}
        </button>
      </div>
    </form>
  );

  const mockupPanel = (
    <div className="ubuntu-contact-mockup relative w-full overflow-hidden">
      <MockupFrame screenClassName="ubuntu-contact-mockup__screen">
        <div className="ubuntu-contact-mockup__inner ubuntu-contact-form">{formBody}</div>
      </MockupFrame>
      <BorderBeam duration={8} size={100} colorFrom="#8b1538" colorTo="#e8b4b8" borderWidth={2} />
    </div>
  );

  return (
    <UbuntuSplitLayout
      id={id}
      testId={`${testIdPrefix}-section`}
      pattern="cta"
      variant="dark"
      imagePosition="right"
      className="ubuntu-contact-section scroll-mt-[88px]"
      mediaClassName="ubuntu-contact-mockup__media"
      mediaSlot={mockupPanel}
    >
      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#e8b4b8]">
        {copy.eyebrow}
      </p>
      <h2
        id={`${id}-heading`}
        data-testid={`${testIdPrefix}-heading`}
        className="ubuntu-section-title text-white"
      >
        {copy.title}
      </h2>
      <p className="ubuntu-lead mt-4 text-white/90">{copy.lead}</p>

      {showContactDetails && (
        <ul className="mt-8 space-y-5 text-left">
          <li className="flex items-start gap-3 text-sm">
            <Mail size={18} className="mt-0.5 shrink-0 text-[#e8b4b8]" strokeWidth={1.5} />
            <div>
              <p className="text-xs uppercase tracking-wide text-white/60">Email</p>
              <p className="font-medium text-white">{COMPANY_CONTACT.email}</p>
            </div>
          </li>
          <li className="flex items-start gap-3 text-sm">
            <Phone size={18} className="mt-0.5 shrink-0 text-[#e8b4b8]" strokeWidth={1.5} />
            <div>
              <p className="text-xs uppercase tracking-wide text-white/60">Phone</p>
              <p className="font-medium text-white">{COMPANY_CONTACT.phone}</p>
            </div>
          </li>
          <li className="flex items-start gap-3 text-sm">
            <MapPin size={18} className="mt-0.5 shrink-0 text-[#e8b4b8]" strokeWidth={1.5} />
            <div>
              <p className="text-xs uppercase tracking-wide text-white/60">Office</p>
              <p className="font-medium text-white">
                {COMPANY_CONTACT.addressLine1}, {COMPANY_CONTACT.addressLine2}
              </p>
            </div>
          </li>
        </ul>
      )}
    </UbuntuSplitLayout>
  );
}
