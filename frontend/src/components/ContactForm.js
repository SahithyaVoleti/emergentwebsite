import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import UbuntuContactFormSection from "./ubuntu/UbuntuContactFormSection";

export default function ContactForm() {
  const [searchParams] = useSearchParams();
  const leadIntent =
    searchParams.get("topic") === "consultation" ? "consultation" : "contact";

  const copy = useMemo(() => {
    if (leadIntent === "consultation") {
      return {
        eyebrow: "Next Step",
        title: "Request a consultation",
        lead: "Share objectives, constraints, and timing. We confirm fit and propose a focused discovery session aligned to your priorities.",
        messageLabel: "Agenda *",
        messagePlaceholder:
          "Summarize the initiative, success criteria, stakeholders, and preferred meeting window.",
        submitLabel: "Request consultation",
      };
    }
    return {
      eyebrow: "Contact",
      title: "Contact our team",
      lead: "Send a message with your question, vendor inquiry, or partnership interest. We reply with clear next steps and a named point of contact.",
      messageLabel: "Message *",
      messagePlaceholder:
        "Describe your inquiry, organization context, and how you prefer we follow up.",
      submitLabel: "Let's talk",
    };
  }, [leadIntent]);

  return (
    <UbuntuContactFormSection
      id="page-contact"
      testIdPrefix="contact"
      copy={copy}
      leadIntent={leadIntent}
      showContactDetails
    />
  );
}
