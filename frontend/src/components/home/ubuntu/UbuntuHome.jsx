import { lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import UbuntuHomeHeroChrome from "./UbuntuHomeHeroChrome";
import UbuntuHomeHeroStack from "./UbuntuHomeHeroStack";
import UbuntuHomeStatsStrip from "./UbuntuHomeStatsStrip";
import UbuntuHomeLink from "../../ubuntu/UbuntuLink";
import UbuntuSplitLayout from "../../ubuntu/UbuntuSplitLayout";
import ServicesGrid4x4 from "../../ubuntu/ServicesGrid4x4";
import { getHomeSectionImage } from "../../../data/homePageImages";
import { getSiteMockup } from "../../../data/siteMockups";
import { homeImagePosition } from "../../../lib/homeImagePosition";
import {
  HOME_ALERT,
  HOME_SERVICES_GRID,
  HOME_SOLUTIONS_SLIDER,
  HOME_NEXT_STEP,
} from "../../../data/homePageSections";
import services from "../../../data/services";

const UbuntuHomeFeatures = lazy(() => import("./UbuntuHomeFeatures"));
const UbuntuHomeVisionCta = lazy(() => import("./UbuntuHomeVisionCta"));
const SolutionsHorizontalSlider = lazy(() => import("../../ubuntu/SolutionsHorizontalSlider"));
const UbuntuHomePhilosophy = lazy(() => import("./UbuntuHomePhilosophy"));
const UbuntuHomeTechStack = lazy(() => import("./UbuntuHomeTechStack"));
const UbuntuHomeWorkflow = lazy(() => import("./UbuntuHomeWorkflow"));
const UbuntuHomeIndustriesBlogs = lazy(() =>
  import("./UbuntuHomeIndustriesBlogs").then((mod) => ({
    default: function UbuntuHomeIndustriesBlogsBundle() {
      const { UbuntuHomeIndustries, UbuntuHomeBlogs } = mod;
      return (
        <>
          <UbuntuHomeIndustries />
          <UbuntuHomeBlogs />
        </>
      );
    },
  }))
);
const ContactForm = lazy(() => import("../../ContactForm"));

function HomeSectionFallback({ minHeight = "12rem" }) {
  return <div className="ubuntu-section-block bg-white" style={{ minHeight }} aria-hidden />;
}

export default function UbuntuHome() {
  let mediaIndex = 1;
  const nextPosition = () => homeImagePosition(mediaIndex++);

  const nextStepImage = getHomeSectionImage("next-step");
  const engagementMockup = getSiteMockup("collaboration");
  const visionMockup = getSiteMockup("code");

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
            image={engagementMockup.src}
            imageAlt={engagementMockup.alt}
            imagePosition={nextPosition()}
          >
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#e8b4b8]">
              {HOME_ALERT.eyebrow}
            </p>
            <h2 className="ubuntu-section-title text-white">{HOME_ALERT.title}</h2>
            <p className="ubuntu-lead text-white/90">{HOME_ALERT.body}</p>
            <div className="ubuntu-cta-row">
              <Link to={HOME_ALERT.primaryCta.href} className="ubuntu-btn-primary">
                {HOME_ALERT.primaryCta.label}
              </Link>
              <UbuntuHomeLink to={HOME_ALERT.secondaryCta.href} className="!text-[#e8b4b8]">
                {HOME_ALERT.secondaryCta.label}
              </UbuntuHomeLink>
            </div>
          </UbuntuSplitLayout>
        }
      />

      <ServicesGrid4x4 services={services} {...HOME_SERVICES_GRID} />

      <UbuntuHomeStatsStrip />

      <Suspense fallback={<HomeSectionFallback />}>
        <UbuntuHomeFeatures />
      </Suspense>

      <Suspense fallback={<HomeSectionFallback />}>
        <UbuntuHomeVisionCta mockup={visionMockup} imagePosition={nextPosition()} />
      </Suspense>

      <Suspense fallback={<HomeSectionFallback minHeight="20rem" />}>
        <SolutionsHorizontalSlider useHomeSlides {...HOME_SOLUTIONS_SLIDER} />
      </Suspense>

      <Suspense fallback={<HomeSectionFallback />}>
        <UbuntuHomePhilosophy />
      </Suspense>

      <Suspense fallback={<HomeSectionFallback minHeight="24rem" />}>
        <UbuntuHomeTechStack />
      </Suspense>

      <Suspense fallback={<HomeSectionFallback />}>
        <UbuntuHomeWorkflow />
      </Suspense>

      <Suspense fallback={<HomeSectionFallback />}>
        <UbuntuHomeIndustriesBlogs />
      </Suspense>

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
        <div className="ubuntu-cta-row flex-wrap">
          <Link to={HOME_NEXT_STEP.primaryCta.href} className="ubuntu-btn-primary">
            {HOME_NEXT_STEP.primaryCta.label}
          </Link>
          <UbuntuHomeLink to={HOME_NEXT_STEP.secondaryCta.href} className="!text-[#e8b4b8]">
            {HOME_NEXT_STEP.secondaryCta.label}
          </UbuntuHomeLink>
          {HOME_NEXT_STEP.tertiaryCta && (
            <UbuntuHomeLink to={HOME_NEXT_STEP.tertiaryCta.href} className="!text-[#e8b4b8]">
              {HOME_NEXT_STEP.tertiaryCta.label}
            </UbuntuHomeLink>
          )}
        </div>
      </UbuntuSplitLayout>

      <Suspense fallback={<HomeSectionFallback minHeight="16rem" />}>
        <ContactForm />
      </Suspense>
    </main>
  );
}
