import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import UbuntuListingSection from "./ubuntu/UbuntuListingSection";
import { SECTION_LABEL } from "../data/sectionLabels";

export default function FAQSection({ faqs, title, eyebrow = SECTION_LABEL.questions, bare = false }) {
  if (!faqs || faqs.length === 0) return null;

  const accordion = (
    <Accordion type="single" collapsible className="w-full" data-testid="faq-section">
      {faqs.map((faq, i) => (
        <AccordionItem key={i} value={`faq-${i}`} className="border-b border-[#d9d9d9]">
          <AccordionTrigger
            data-testid={`faq-trigger-${i}`}
            className="py-5 text-left text-base font-medium text-[#002855] hover:text-[#0353a4] hover:no-underline"
          >
            {faq.q}
          </AccordionTrigger>
          <AccordionContent className="pb-5 text-sm leading-relaxed text-[#7d8597]">
            {faq.a}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );

  if (bare || !title) {
    return <div className="max-w-4xl">{accordion}</div>;
  }

  return (
    <UbuntuListingSection
      eyebrow={eyebrow}
      title={title || "Frequently asked questions"}
      variant="alt"
    >
      <div className="max-w-4xl">{accordion}</div>
    </UbuntuListingSection>
  );
}
