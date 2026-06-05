import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import UbuntuContactFormSection from "./ubuntu/UbuntuContactFormSection";

export default function PageContactForm({ context }) {
  const [searchParams] = useSearchParams();
  const leadIntent =
    searchParams.get("topic") === "consultation" ? "consultation" : "contact";

  const copy = useMemo(() => {
    if (leadIntent === "consultation") {
      return {
        eyebrow: "Next Step",
        title: "Request a consultation",
        lead: "Outline goals, constraints, and timing. We align on scope, confirm fit, and schedule a working session with a delivery lead.",
        messageLabel: "Agenda *",
        messagePlaceholder:
          "Summarize the initiative, success criteria, stakeholders, and preferred meeting window.",
        submitLabel: "Request consultation",
      };
    }
    return {
      eyebrow: "Next Step",
      title: "Contact our team",
      lead: "Send a message for general inquiries, vendor questions, or partnership discussions. We respond with clear ownership and follow-up expectations.",
      messageLabel: "Message *",
      messagePlaceholder:
        "Describe your inquiry, organization context, and how you prefer we follow up.",
      submitLabel: "Let's talk",
    };
  }, [leadIntent]);

  return (
    <UbuntuContactFormSection
      id="page-contact"
      testIdPrefix="page-contact"
      copy={copy}
      context={context}
      leadIntent={leadIntent}
      showContactDetails
    />
  );
}
