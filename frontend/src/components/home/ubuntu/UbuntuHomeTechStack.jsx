import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import DeferredMount from "../../DeferredMount";
import { IconCloud } from "@/components/ui/icon-cloud";
import { BorderBeam } from "@/components/ui/border-beam";
import { HOME_TECH_STACK } from "../../../data/homePageSections";
import UbuntuSplitLayout from "../../ubuntu/UbuntuSplitLayout";
import MockupFrame from "../../ubuntu/MockupFrame";
import UbuntuHomeLink from "./UbuntuHomeLink";
import {
  SITE_SERVICE_TECH_CLOUDS,
  getBalancedSiteTechSlugs,
  getSimpleIconImageUrl,
  getSlugsForService,
} from "../../../lib/serviceTechStackSlugs";

const ALL_SERVICES_KEY = "all";

export default function UbuntuHomeTechStack({ initialSlug = ALL_SERVICES_KEY, config }) {
  const section = { ...HOME_TECH_STACK, ...config };
  const [activeService, setActiveService] = useState(initialSlug);

  const activeSlugs = useMemo(() => {
    if (activeService === ALL_SERVICES_KEY) {
      return getBalancedSiteTechSlugs(20);
    }
    return getSlugsForService(activeService);
  }, [activeService]);

  const images = useMemo(
    () => activeSlugs.map((slug) => getSimpleIconImageUrl(slug)),
    [activeSlugs]
  );

  const iconCloudPanel = (
    <div className="ubuntu-tech-stack__mockup relative overflow-hidden">
      <MockupFrame screenClassName="ubuntu-tech-stack__screen">
        <div className="ubuntu-tech-stack__cloud-inner">
          {images.length > 0 ? (
            <DeferredMount minHeight="400px" rootMargin="320px">
              <IconCloud
                key={activeService}
                images={images}
                width={640}
                height={400}
                className="ubuntu-tech-stack__canvas"
              />
            </DeferredMount>
          ) : (
            <p className="px-6 text-center text-sm text-white/60">
              No mapped icons for this service yet.
            </p>
          )}
        </div>
      </MockupFrame>
      <BorderBeam duration={8} size={100} colorFrom="#8b1538" colorTo="#e8b4b8" borderWidth={2} />
    </div>
  );

  return (
    <UbuntuSplitLayout
      id={section.id}
      testId="home-tech-stack-section"
      pattern="cta"
      variant="dark"
      imagePosition="right"
      className="ubuntu-tech-stack-section"
      mediaClassName="ubuntu-tech-stack__media"
      mediaSlot={iconCloudPanel}
    >
      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#e8b4b8]">
        {section.eyebrow}
      </p>
      <h2 className="ubuntu-section-title text-white">{section.title}</h2>
      <p className="ubuntu-lead text-white/90">{section.lead}</p>

      <div className="ubuntu-tech-stack-filters" role="tablist" aria-label="Service technology stacks">
        <button
          type="button"
          role="tab"
          aria-selected={activeService === ALL_SERVICES_KEY}
          className={`ubuntu-tech-stack-filters__btn ${
            activeService === ALL_SERVICES_KEY ? "ubuntu-tech-stack-filters__btn--active" : ""
          }`}
          onClick={() => setActiveService(ALL_SERVICES_KEY)}
        >
          {section.filterAllLabel}
        </button>
        {SITE_SERVICE_TECH_CLOUDS.map((service) => (
          <button
            key={service.slug}
            type="button"
            role="tab"
            aria-selected={activeService === service.slug}
            className={`ubuntu-tech-stack-filters__btn ${
              activeService === service.slug ? "ubuntu-tech-stack-filters__btn--active" : ""
            }`}
            onClick={() => setActiveService(service.slug)}
          >
            {service.title}
          </button>
        ))}
      </div>

      <div className="ubuntu-cta-row">
        <Link
          to={
            config?.primaryCta?.href
              ? section.primaryCta.href
              : activeService === ALL_SERVICES_KEY
                ? section.primaryCta.href
                : `/services/${activeService}`
          }
          className="ubuntu-btn-primary"
        >
          {config?.primaryCta?.label
            ? section.primaryCta.label
            : activeService === ALL_SERVICES_KEY
              ? section.primaryCta.label
              : `View ${SITE_SERVICE_TECH_CLOUDS.find((s) => s.slug === activeService)?.title ?? "service"}`}
        </Link>
        {section.secondaryCta && (
          <UbuntuHomeLink to={section.secondaryCta.href} className="!text-[#e8b4b8]">
            {section.secondaryCta.label} →
          </UbuntuHomeLink>
        )}
      </div>
    </UbuntuSplitLayout>
  );
}
