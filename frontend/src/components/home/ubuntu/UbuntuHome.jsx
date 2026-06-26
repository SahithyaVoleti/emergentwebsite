import { lazy, Suspense } from "react";
import SiteNavLink from "../../ubuntu/SiteNavLink";
import UbuntuHomeHeroChrome from "./UbuntuHomeHeroChrome";
import UbuntuHomeHeroStack from "./UbuntuHomeHeroStack";
import UbuntuHomeStatsStrip from "./UbuntuHomeStatsStrip";
import UbuntuHomeLink from "../../ubuntu/UbuntuLink";
import UbuntuSplitLayout from "../../ubuntu/UbuntuSplitLayout";
import SectionEyebrow from "../../ubuntu/SectionEyebrow";
import SectionTitle from "../../ubuntu/SectionTitle";
import ServicesPillarCatalog from "../../ubuntu/ServicesPillarCatalog";
import ScrollPlayOnceGif from "../../ubuntu/ScrollPlayOnceGif";
import { getHomeSectionImage } from "../../../data/homePageImages";
import { homeImagePosition } from "../../../lib/homeImagePosition";
import {
  HOME_ALERT,
  HOME_SERVICES_GRID,
  HOME_SOLUTIONS_SLIDER,
  HOME_NEXT_STEP,
} from "../../../data/homePageSections";

const UbuntuHomeFeatures = lazy(() => import("./UbuntuHomeFeatures"));
const SolutionsHorizontalSlider = lazy(() => import("../../ubuntu/SolutionsHorizontalSlider"));
const UbuntuHomeWorkflow = lazy(() => import("./UbuntuHomeWorkflow"));
const UbuntuHomeValidationSection = lazy(() => import("./UbuntuHomeValidationSection"));
const UbuntuHomeIndustries = lazy(() =>
  import("./UbuntuHomeIndustriesBlogs").then((mod) => ({ default: mod.UbuntuHomeIndustries }))
);
const UbuntuHomeBlogs = lazy(() =>
  import("./UbuntuHomeIndustriesBlogs").then((mod) => ({ default: mod.UbuntuHomeBlogs }))
);
const ContactForm = lazy(() => import("../../ContactForm"));

function HomeSectionFallback({ minHeight = "12rem" }) {
  return <div className="ubuntu-section-block bg-white" style={{ minHeight }} aria-hidden />;
}

export default function UbuntuHome() {
  let mediaIndex = 1;
  const nextPosition = () => homeImagePosition(mediaIndex++);

  const nextStepImage = getHomeSectionImage("next-step");

  return (
    <div className="ubuntu-home-page relative z-10 bg-white">
      <UbuntuHomeHeroChrome />

      <UbuntuHomeHeroStack
        cta={
          <UbuntuSplitLayout
            id="engagement-cta"
            testId="engagement-alert-cta"
            pattern="cta"
            imagePosition={nextPosition()}
            mediaClassName="ubuntu-split__media--gif"
            mediaSlot={
              <ScrollPlayOnceGif
                src={HOME_ALERT.media.src}
                playbackMs={HOME_ALERT.media.playbackMs}
              />
            }
          >
            <SectionEyebrow>{HOME_ALERT.eyebrow}</SectionEyebrow>
            <SectionTitle as="h2" title={HOME_ALERT.title} />
            <p className="ubuntu-lead">{HOME_ALERT.body}</p>
            <div className="ubuntu-cta-row">
              <SiteNavLink href={HOME_ALERT.primaryCta.href} primary showArrow={false}>
                {HOME_ALERT.primaryCta.label}
              </SiteNavLink>
              <UbuntuHomeLink to={HOME_ALERT.secondaryCta.href}>
                {HOME_ALERT.secondaryCta.label}
              </UbuntuHomeLink>
            </div>
          </UbuntuSplitLayout>
        }
      />

      <ServicesPillarCatalog variant="cards" {...HOME_SERVICES_GRID} />

      <Suspense fallback={<HomeSectionFallback />}>
        <UbuntuHomeFeatures />
      </Suspense>

      <Suspense fallback={<HomeSectionFallback minHeight="20rem" />}>
        <SolutionsHorizontalSlider useHomeSlides {...HOME_SOLUTIONS_SLIDER} />
      </Suspense>

      <Suspense fallback={<HomeSectionFallback />}>
        <UbuntuHomeIndustries />
      </Suspense>

      <Suspense fallback={<HomeSectionFallback />}>
        <UbuntuHomeValidationSection />
      </Suspense>

      <Suspense fallback={<HomeSectionFallback />}>
        <UbuntuHomeWorkflow />
      </Suspense>

      <UbuntuHomeStatsStrip />

      <UbuntuSplitLayout
        id="next-step"
        testId="next-step-cta"
        pattern="cta"
      image={nextStepImage?.src}
        imageAlt={nextStepImage?.alt}
        imagePosition={nextPosition()}
      >
        <SectionEyebrow>{HOME_NEXT_STEP.eyebrow}</SectionEyebrow>
        <SectionTitle as="h2" title={HOME_NEXT_STEP.title} />
        <p className="ubuntu-lead">{HOME_NEXT_STEP.lead}</p>
        <div className="ubuntu-cta-row flex-wrap">
          <SiteNavLink
            href={HOME_NEXT_STEP.primaryCta.href}
            contactIntent="consultation"
            primary
            showArrow={false}
          >
            {HOME_NEXT_STEP.primaryCta.label}
          </SiteNavLink>
          <UbuntuHomeLink to={HOME_NEXT_STEP.secondaryCta.href}>
            {HOME_NEXT_STEP.secondaryCta.label}
          </UbuntuHomeLink>
          {HOME_NEXT_STEP.tertiaryCta && (
            <UbuntuHomeLink to={HOME_NEXT_STEP.tertiaryCta.href}>
              {HOME_NEXT_STEP.tertiaryCta.label}
            </UbuntuHomeLink>
          )}
        </div>
      </UbuntuSplitLayout>

      <Suspense fallback={<HomeSectionFallback minHeight="16rem" />}>
        <UbuntuHomeBlogs />
      </Suspense>

      <Suspense fallback={<HomeSectionFallback minHeight="16rem" />}>
        <ContactForm />
      </Suspense>
    </div>
  );
}
