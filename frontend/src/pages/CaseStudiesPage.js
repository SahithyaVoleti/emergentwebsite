import PageHero from "../components/PageHero";
import CaseStudiesVerticalSlider from "../components/ubuntu/CaseStudiesVerticalSlider";
import PageStandardSections from "../components/ubuntu/PageStandardSections";
import SitePageMain from "../components/ubuntu/SitePageMain";
import caseStudies from "../data/caseStudies";
import { LISTING_PAGE_HERO_IMAGES } from "../lib/heroImageThemes";

export default function CaseStudiesPage() {
  return (
    <SitePageMain>
      <PageHero
        label="Delivery patterns"
        title="Delivery patterns & pilot work"
        description="Tracefold narratives show how NeuralTrix approaches common AI and software problems—so you can judge fit before a pilot. They are not endorsements from named customers."
        primaryCTA={{
          text: "Start a pilot",
          href: "#page-contact",
          contactIntent: "consultation",
        }}
        secondaryCTA={{ text: "How we work", href: "/testimonials" }}
        image={LISTING_PAGE_HERO_IMAGES.caseStudies}
        illustrationKey="caseStudies"
      />

      <CaseStudiesVerticalSlider
        studies={caseStudies}
        id="case-studies-catalog"
        showLabel
        eyebrow="Patterns"
        title="Representative delivery narratives"
        lead="Each card is tagged with an honest status. Scroll to compare scenarios, then contact us to scope something concrete."
        viewAllHref={undefined}
        className="!border-t-0"
      />

      <PageStandardSections
        pageKey="caseStudies"
        contactContext="Case Studies Page"
        includeAssurance={false}
      />
    </SitePageMain>
  );
}
