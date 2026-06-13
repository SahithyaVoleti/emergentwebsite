import UbuntuSplitLayout from "../../ubuntu/UbuntuSplitLayout";
import { getSiteMockup } from "../../../data/siteMockups";
import {
  COMPANY_FOUNDED_LABEL,
  COMPANY_NAME,
  COMPANY_STARTUP_PITCH,
} from "../../../lib/company";

export default function UbuntuHomeFounderLetter({ imagePosition = "left" }) {
  const mockup = getSiteMockup("collaboration");

  return (
    <UbuntuSplitLayout
      id="founder-letter"
      testId="home-founder-letter"
      variant="alt"
      image={mockup.src}
      imageAlt={mockup.alt}
      imagePosition={imagePosition}
    >
      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#666]">
        From leadership
      </p>
      <h2 className="ubuntu-section-title">A note on how we engage</h2>
      <p className="ubuntu-lead mt-4">{COMPANY_STARTUP_PITCH}</p>
      <p className="mt-4 text-sm leading-relaxed text-[#555]">
        {COMPANY_NAME} began operations on {COMPANY_FOUNDED_LABEL}. We work with early customer
        programs through scoped pilots, senior-led delivery, and documented handovers your team can
        operate and extend.
      </p>
      <p className="mt-6 text-sm font-medium text-[#111]">— {COMPANY_NAME} Leadership</p>
    </UbuntuSplitLayout>
  );
}
