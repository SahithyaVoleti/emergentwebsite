import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import engagementPrinciples from "../data/engagementPrinciples";
import { SECTION_LABEL } from "../data/sectionLabels";
import UbuntuListingSection from "./ubuntu/UbuntuListingSection";

export default function TestimonialsSection({
  title,
  showLabel = true,
  eyebrow = SECTION_LABEL.engagement,
}) {
  return (
    <UbuntuListingSection
      id="page-testimonials"
      eyebrow={showLabel ? eyebrow : undefined}
      title={title || "Engagement principles for new partners"}
      lead="Operating commitments for discovery and pilots. Use alongside your own diligence, security review, and procurement rules."
      variant="alt"
    >
      <Carousel opts={{ align: "start", loop: true }} className="w-full">
        <CarouselContent className="-ml-4">
          {engagementPrinciples.map((item, i) => (
            <CarouselItem key={item.headline} className="pl-4 md:basis-1/2 lg:basis-1/3">
              <article
                data-testid={`page-testimonial-${i}`}
                className="flex h-full flex-col border border-[#e5e5e5] bg-white p-6"
              >
                <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-[#0466c8]">
                  {item.tag}
                </p>
                <p className="mb-3 text-base font-medium text-[#002855]">{item.headline}</p>
                <p className="flex-1 text-sm leading-relaxed text-[#7d8597]">{item.body}</p>
              </article>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="border-[#d9d9d9]" />
        <CarouselNext className="border-[#d9d9d9]" />
      </Carousel>
    </UbuntuListingSection>
  );
}
