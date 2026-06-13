import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import UbuntuListingSection from "./ubuntu/UbuntuListingSection";

export default function FAQSection({ faqs, title, eyebrow = "Assurance", bare = false }) {
  if (!faqs || faqs.length === 0) return null;

  const accordion = (
    <Accordion type="single" collapsible className="w-full" data-testid="faq-section">
      {faqs.map((faq, i) => (
        <AccordionItem key={i} value={`faq-${i}`} className="border-b border-[#d9d9d9]">
          <AccordionTrigger
            data-testid={`faq-trigger-${i}`}
            className="py-5 text-left text-base font-medium text-[#111] hover:text-[#8b1538] hover:no-underline"
          >
            {faq.q}
          </AccordionTrigger>
          <AccordionContent className="pb-5 text-sm leading-relaxed text-[#555]">
            {faq.a}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );

  if (bare) {
    return accordion;
  }

  return (
    <UbuntuListingSection
      id="page-faq"
      eyebrow={eyebrow}
      title={title || "Frequently asked questions"}
      variant="alt"
    >
      {accordion}
    </UbuntuListingSection>
  );
}
