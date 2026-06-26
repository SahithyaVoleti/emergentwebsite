import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { HOME_TECH_STACK } from "../../../data/homePageSections";
import UbuntuSplitLayout from "../../ubuntu/UbuntuSplitLayout";
import UbuntuHomeLink from "./UbuntuHomeLink";
import TechStackLogoGrid from "../../TechStackLogoGrid";
import services from "../../../data/services";
import {
  SITE_SERVICE_TECH_CLOUDS,
  dedupeTechNamesByIcon,
  extractTechNamesFromService,
  getBalancedSiteTechNames,
} from "../../../lib/serviceTechStackSlugs";

const ALL_SERVICES_KEY = "all";

export default function UbuntuHomeTechStack({ initialSlug = ALL_SERVICES_KEY, config }) {
  const section = { ...HOME_TECH_STACK, ...config };
  const [activeService, setActiveService] = useState(initialSlug);

  const activeTechNames = useMemo(() => {
    if (activeService === ALL_SERVICES_KEY) {
      return getBalancedSiteTechNames(24);
    }
    const service = services.find((s) => s.slug === activeService);
    return dedupeTechNamesByIcon(extractTechNamesFromService(service));
  }, [activeService]);

  const techStackPanel = (
    <div className="ubuntu-tech-stack__panel">
      {activeTechNames.length > 0 ? (
        <TechStackLogoGrid
          key={activeService}
          items={activeTechNames}
          compact
          marqueeColumnCap={4}
          marqueeColumnHeightClassName="h-[min(22rem,48vh)] sm:h-[24rem] min-h-[16rem]"
        />
      ) : (
        <p className="px-6 py-12 text-center text-sm text-[#6b6b6b]">
          No mapped technologies for this service yet.
        </p>
      )}
    </div>
  );

  return (
    <UbuntuSplitLayout
      id={section.id}
      testId="home-tech-stack-section"
      pattern="cta"
      imagePosition="right"
      className="ubuntu-tech-stack-section"
      mediaClassName="ubuntu-tech-stack__media"
      mediaSlot={techStackPanel}
    >
      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#6b6b6b]">
        {section.eyebrow}
      </p>
      <h2 className="ubuntu-section-title">{section.title}</h2>
      <p className="ubuntu-lead">{section.lead}</p>

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
          <UbuntuHomeLink to={section.secondaryCta.href}>
            {section.secondaryCta.label} →
          </UbuntuHomeLink>
        )}
      </div>
    </UbuntuSplitLayout>
  );
}
