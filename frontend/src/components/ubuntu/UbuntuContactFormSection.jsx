import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, CheckCircle2, Mail, Phone, MapPin } from "lucide-react";
import UbuntuSplitLayout from "./UbuntuSplitLayout";
import SectionEyebrow from "./SectionEyebrow";
import SectionTitle from "./SectionTitle";
import SiteNavLink from "./SiteNavLink";
import MockupFrame from "./MockupFrame";
import { BorderBeam } from "@/components/ui/border-beam";
import { submitLead } from "../../lib/submitLead";
import { captureEvent } from "../../lib/analytics";
import { env } from "../../lib/env";

const CONTACT_EMAIL = env("CONTACT_EMAIL", "neuraltrixai@yahoo.com");

const PHONE_COUNTRIES = [
  { code: "IN", dial: "+91", label: "IN +91" },
  { code: "US", dial: "+1", label: "US +1" },
  { code: "UK", dial: "+44", label: "UK +44" },
  { code: "EU", dial: "+49", label: "EU +49" },
];

const fieldClass =
  "ubuntu-contact-field block w-full border border-[#d9d9d9] bg-white px-3 py-2 text-sm text-[#2d2d2d] placeholder:text-[#888] focus:border-[#5c5c5c] focus:outline-none focus:ring-1 focus:ring-[#5c5c5c]";

const labelClass = "block text-xs font-semibold text-[#2d2d2d] sm:text-sm";

export default function UbuntuContactFormSection({
  id = "page-contact",
  testIdPrefix = "contact",
  copy,
  context,
  leadIntent = "contact",
  showContactDetails = true,
  alternateCta,
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
  const [apiWarning, setApiWarning] = useState("");
  const [error, setError] = useState("");

  const errorId = `${testIdPrefix}-error`;
  const fieldErrorProps = error
    ? { "aria-invalid": true, "aria-describedby": errorId }
    : {};

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
    setApiWarning("");
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
      const result = await submitLead({
        first_name: form.first_name,
        last_name: form.last_name,
        email: form.email,
        phone: phoneLine || undefined,
        description: descParts.join("\n"),
        context,
        leadIntent,
      });
      if (result.apiError) {
        setApiWarning(
          "Your message was not saved to our system. Please complete the WhatsApp message to ensure we receive your inquiry."
        );
      }
      captureEvent("lead_submitted", { context, leadIntent, apiSubmitted: result.apiSubmitted });
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
      <CheckCircle2 size={40} className="mb-3 text-[#5c5c5c]" strokeWidth={1.5} />
      <h3 className="mb-2 text-lg font-medium text-[#2d2d2d]">Thank you</h3>
      <p className="text-sm text-[#7d8597]">
        WhatsApp opened — send the message to complete your inquiry. We respond with clear next steps.
      </p>
      {apiWarning ? (
        <p role="status" className="mt-3 text-sm text-amber-700">
          {apiWarning}
        </p>
      ) : null}
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
    <form
      onSubmit={handleSubmit}
      className="px-4 py-5 sm:px-5 sm:py-6"
      aria-labelledby={`${id}-heading`}
    >
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
              {...fieldErrorProps}
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
              {...fieldErrorProps}
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
              {...fieldErrorProps}
            />
          </div>
        </div>
        <div className="min-w-0">
          <label htmlFor={`${testIdPrefix}-phone`} className={labelClass}>
            Phone number
          </label>
          <div className="mt-1.5">
            <div className="ubuntu-contact-phone-row flex min-w-0 border border-[#d9d9d9] bg-white focus-within:border-[#5c5c5c] focus-within:ring-1 focus-within:ring-[#5c5c5c]">
              <div className="relative grid shrink-0 grid-cols-1">
                <select
                  name="phone_country"
                  aria-label="Country code"
                  value={form.phone_country}
                  onChange={handleChange}
      className="col-start-1 row-start-1 w-full appearance-none border-0 bg-transparent py-2 pr-7 pl-2.5 text-sm text-[#7d8597] focus:outline-none"
                >
                  {PHONE_COUNTRIES.map((c) => (
                    <option key={c.code} value={c.code}>
                      {c.label}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  aria-hidden
      className="pointer-events-none col-start-1 row-start-1 mr-1.5 size-4 self-center justify-self-end text-[#6b6b6b]"
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
      className="min-w-0 grow border-0 bg-transparent py-2 pr-2 pl-1 text-sm text-[#2d2d2d] placeholder:text-[#888] focus:outline-none"
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
              {...fieldErrorProps}
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
      className="size-4 border-[#d9d9d9] text-[#5c5c5c] focus:ring-[#5c5c5c]"
            />
          </div>
          <label htmlFor={`${testIdPrefix}-agree`} className="text-xs leading-relaxed text-[#7d8597] sm:text-sm">
            By selecting this, you agree to our{" "}
            <Link to="/privacy-policy" className="font-semibold text-[#5c5c5c] hover:underline">
              privacy policy
            </Link>
            .
          </label>
        </div>
      </div>

      {error && (
        <p
          id={errorId}
          data-testid={errorId}
          role="alert"
          className="mt-4 text-sm text-red-600"
        >
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
      <BorderBeam duration={8} size={100} colorFrom="#5c5c5c" colorTo="#979dac" borderWidth={2} />
    </div>
  );

  return (
    <UbuntuSplitLayout
      id={id}
      testId={`${testIdPrefix}-section`}
      pattern="cta"
      imagePosition="right"
      className="ubuntu-contact-section scroll-mt-[88px]"
      mediaClassName="ubuntu-contact-mockup__media"
      mediaSlot={mockupPanel}
    >
      {copy.eyebrow && <SectionEyebrow>{copy.eyebrow}</SectionEyebrow>}
      <SectionTitle
        id={`${id}-heading`}
        data-testid={`${testIdPrefix}-heading`}
        as="h2"
        title={copy.title}
      />
      <p className="ubuntu-lead mt-4">{copy.lead}</p>

      {alternateCta && (
        <div className="ubuntu-cta-row mt-6">
          <SiteNavLink href={alternateCta.href} primary showArrow={false}>
            {alternateCta.label}
          </SiteNavLink>
        </div>
      )}

      {showContactDetails && (
        <ul className="mt-8 space-y-5 text-left">
          <li className="flex items-start gap-3 text-sm">
            <Mail size={18} className="mt-0.5 shrink-0 text-[#6b6b6b]" strokeWidth={1.5} />
            <div>
              <p className="text-xs uppercase tracking-wide text-[#6b6b6b]">Email</p>
              <p className="font-medium text-[#2d2d2d]">{CONTACT_EMAIL}</p>
            </div>
          </li>
          <li className="flex items-start gap-3 text-sm">
            <Phone size={18} className="mt-0.5 shrink-0 text-[#6b6b6b]" strokeWidth={1.5} />
            <div>
              <p className="text-xs uppercase tracking-wide text-[#6b6b6b]">Phone</p>
              <p className="font-medium text-[#2d2d2d]">+91 81424 38759</p>
            </div>
          </li>
          <li className="flex items-start gap-3 text-sm">
            <MapPin size={18} className="mt-0.5 shrink-0 text-[#6b6b6b]" strokeWidth={1.5} />
            <div>
              <p className="text-xs uppercase tracking-wide text-[#6b6b6b]">Office</p>
              <p className="font-medium text-[#2d2d2d]">N-Block, Vignan University, Guntur</p>
            </div>
          </li>
        </ul>
      )}
    </UbuntuSplitLayout>
  );
}
