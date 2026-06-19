import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import UbuntuContactFormSection from "./ubuntu/UbuntuContactFormSection";
import { SECTION_LABEL } from "../data/sectionLabels";

/**
 * Unified contact form — homepage (no context) or inner pages (with context).
 */
export default function ContactForm({
  context = "Homepage",
  id = "page-contact",
  testIdPrefix = "contact",
  showContactDetails = true,
  copyOverrides,
  alternateCta,
}) {
  const [searchParams] = useSearchParams();
  const leadIntent =
    searchParams.get("topic") === "consultation" ? "consultation" : "contact";

  const copy = useMemo(() => {
    let base;
    if (leadIntent === "consultation") {
      base = {
        eyebrow: SECTION_LABEL.contact,
        title: "Request a consultation",
        lead:
          context === "Homepage"
            ? "Share your objectives, constraints, and timing. We confirm fit and propose a focused discovery session."
            : "Outline goals, constraints, and timing. We align on scope, confirm fit, and schedule a session with a delivery lead.",
        messageLabel: "Agenda *",
        messagePlaceholder:
          "Summarize the initiative, success criteria, stakeholders, and preferred meeting time.",
        submitLabel: "Request consultation",
      };
    } else {
      base = {
        eyebrow: SECTION_LABEL.contact,
        title: "Contact our team",
        lead:
          context === "Homepage"
            ? "Tell us about the applications you run and where you want AI agents or copilots. We reply with clear next steps."
            : "Describe the app or workflow you want to upgrade. We respond with ownership and follow-up timing.",
        messageLabel: "Message *",
        messagePlaceholder:
          "Describe your inquiry, organization, and how you prefer we follow up.",
        submitLabel: "Let's talk",
      };
    }
    return copyOverrides ? { ...base, ...copyOverrides } : base;
  }, [leadIntent, context, copyOverrides]);

  return (
    <UbuntuContactFormSection
      id={id}
      testIdPrefix={testIdPrefix}
      copy={copy}
      context={context}
      leadIntent={leadIntent}
      showContactDetails={showContactDetails}
      alternateCta={alternateCta}
    />
  );
}
