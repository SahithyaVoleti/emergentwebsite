import SiteNavLink from "../../ubuntu/SiteNavLink";
import UbuntuSplitLayout from "../../ubuntu/UbuntuSplitLayout";
import ServicesGrid4x4 from "../../ubuntu/ServicesGrid4x4";
import SolutionsHorizontalSlider from "../../ubuntu/SolutionsHorizontalSlider";
import { UbuntuHomeIndustries, UbuntuHomeBlogs } from "./UbuntuHomeIndustriesBlogs";
import UbuntuHomeHeroChrome from "./UbuntuHomeHeroChrome";
import UbuntuHomeHeroStack from "./UbuntuHomeHeroStack";
import UbuntuHomeHowWeWork from "./UbuntuHomeHowWeWork";
import UbuntuHomeFounderLetter from "./UbuntuHomeFounderLetter";
import ContactForm from "../../ContactForm";
import services from "../../../data/services";
import { getHomeSectionImage } from "../../../data/homePageImages";
import { homeImagePosition } from "../../../lib/homeImagePosition";
import { HOME_ALERT, HOME_SERVICES_GRID, HOME_SOLUTIONS_SLIDER, HOME_NEXT_STEP } from "../../../data/homePageSections";

export default function UbuntuHome() {
  let mediaIndex = 1;
  const nextPosition = () => homeImagePosition(mediaIndex++);
  const nextStepImage = getHomeSectionImage("next-step");

  return (
    <main className="ubuntu-home-page relative z-10 bg-white">
      <UbuntuHomeHeroChrome />

      <UbuntuHomeHeroStack
        cta={
          <UbuntuSplitLayout
            id="engagement-cta"
            testId="engagement-alert-cta"
            pattern="cta"
            variant="dark"
            image={getHomeSectionImage("collaboration")?.src}
            imageAlt="Pilot delivery timeline"
            imagePosition={nextPosition()}
          >
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#e8b4b8]">
              {HOME_ALERT.eyebrow}
            </p>
            <h2 className="ubuntu-section-title text-white">{HOME_ALERT.title}</h2>
            <p className="ubuntu-lead text-white/90">{HOME_ALERT.body}</p>
            <div className="ubuntu-cta-row">
              <SiteNavLink href={HOME_ALERT.primaryCta.href} primary showArrow={false}>
                {HOME_ALERT.primaryCta.label}
              </SiteNavLink>
              <SiteNavLink href={HOME_ALERT.secondaryCta.href} muted className="!text-[#e8b4b8]">
                {HOME_ALERT.secondaryCta.label}
              </SiteNavLink>
            </div>
          </UbuntuSplitLayout>
        }
      />

      <ServicesGrid4x4 services={services} {...HOME_SERVICES_GRID} />

      <UbuntuHomeHowWeWork />

      <SolutionsHorizontalSlider useHomeSlides {...HOME_SOLUTIONS_SLIDER} autoAdvanceMs={9000} />

      <UbuntuHomeIndustries />

      <UbuntuHomeFounderLetter imagePosition={nextPosition()} />

      <UbuntuHomeBlogs />

      <UbuntuSplitLayout
        id="next-step"
        testId="next-step-cta"
        pattern="cta"
        variant="dark"
        image={nextStepImage?.src}
        imageAlt={nextStepImage?.alt}
        imagePosition={nextPosition()}
      >
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#e8b4b8]">
          Next Step
        </p>
        <h2 className="ubuntu-section-title text-white">{HOME_NEXT_STEP.title}</h2>
        <p className="ubuntu-lead text-white/90">{HOME_NEXT_STEP.lead}</p>
        <ul className="mt-4 space-y-2 text-sm text-white/85">
          {HOME_NEXT_STEP.firstCallBullets.map((item) => (
            <li key={item} className="flex gap-2">
              <span className="text-[#e8b4b8]" aria-hidden>
                —
              </span>
              {item}
            </li>
          ))}
        </ul>
        <div className="ubuntu-cta-row flex-wrap">
          <SiteNavLink href={HOME_NEXT_STEP.primaryCta.href} contactIntent="consultation" primary showArrow={false}>
            {HOME_NEXT_STEP.primaryCta.label}
          </SiteNavLink>
          <SiteNavLink href={HOME_NEXT_STEP.secondaryCta.href} muted className="!text-[#e8b4b8]">
            {HOME_NEXT_STEP.secondaryCta.label}
          </SiteNavLink>
        </div>
      </UbuntuSplitLayout>

      <ContactForm />
    </main>
  );
}
