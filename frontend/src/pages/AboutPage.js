import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PageHero from "../components/PageHero";
import TestimonialsSection from "../components/TestimonialsSection";
import SitePageMain from "../components/ubuntu/SitePageMain";
import UbuntuPageSection from "../components/ubuntu/UbuntuPageSection";
import UbuntuFeaturesBand from "../components/ubuntu/UbuntuFeaturesBand";
import UbuntuStatsStrip from "../components/ubuntu/UbuntuStatsStrip";
import UbuntuTeamGrid from "../components/ubuntu/UbuntuTeamGrid";
import UbuntuPartnerGrid from "../components/ubuntu/UbuntuPartnerGrid";
import UbuntuCareersSection from "../components/ubuntu/UbuntuCareersSection";
import PageContactForm from "../components/PageContactForm";
import team from "../data/team";
import technologyPartners from "../data/partners";
import { COMPANY_FOUNDED_LABEL } from "../lib/company";
import { ABOUT_HERO_BACKGROUND } from "../data/brandAssets";
import { getSiteMockup } from "../data/siteMockups";
import { SECTION_LABEL } from "../data/sectionLabels";

const values = [
  {
    title: "Embedded delivery",
    desc: "Intelligent automation integrated with CRM, ERP, and line-of-business tools.",
  },
  {
    title: "Incremental modernization",
    desc: "We upgrade legacy apps incrementally so work keeps moving while AI lands.",
  },
  {
    title: "Transparent execution",
    desc: "Timelines, code, and tradeoffs are documented for your internal review.",
  },
  {
    title: "Remote-first",
    desc: "We hire globally and run disciplined schedules and handovers.",
  },
];

export default function AboutPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const missionMockup = getSiteMockup("collaboration");

  useEffect(() => {
    if (location.hash === "#security") {
      navigate("/security", { replace: true });
    }
  }, [location.hash, navigate]);

  return (
    <SitePageMain>
      <PageHero
        title="AI transformation and |SaaS engineering| company"
        description={`NeuralTrix AI was founded in ${COMPANY_FOUNDED_LABEL}. We transform existing products into AI-enabled software, fine-tune models for production, and design interdisciplinary AI SaaS applications.`}
        primaryCTA={{ text: "Contact us", href: "#page-contact" }}
        secondaryCTA={{ text: "How we work", href: "#engagement" }}
        homeBackgroundImage={ABOUT_HERO_BACKGROUND}
        showSymbol={false}
      />

      <UbuntuPageSection
        eyebrow={SECTION_LABEL.mission}
        title="Our |mission|"
        lead="We help software companies and enterprises transform products with AI, fine-tune models on domain data, and ship governed AI SaaS across interdisciplinary industries."
        image={missionMockup.src}
        imageAlt={missionMockup.alt}
        bullets={[
          "AI transformation for products already in market",
          "Model fine-tuning and production ML engineering",
          "Design and development of AI-native SaaS applications",
          "Handover of code, models, and operational runbooks",
        ]}
      />

      <UbuntuStatsStrip
        stats={[
          { value: "2026", label: `Founded ${COMPANY_FOUNDED_LABEL}` },
          { value: "Senior-led", label: "Builders on every workstream" },
          { value: "Remote-first", label: "Distributed engineering team" },
          { value: "Pilot-based", label: "Scoped product transformation programs" },
        ]}
      />

      <UbuntuFeaturesBand
        id="about-values"
        eyebrow={SECTION_LABEL.values}
        title="Values that guide delivery"
        lead="These values guide how we scope intelligent automation programs, modernization workstreams, and operational handover."
        variant="alt"
        items={values}
      />

      <TestimonialsSection
        id="engagement"
        title="How we work with clients"
        eyebrow={SECTION_LABEL.engagement}
      />

      <UbuntuTeamGrid
        id="team"
        members={team}
        title="Leadership and delivery"
        lead="Senior practitioners lead workstreams so you engage directly with delivery owners—not intermediary account layers."
      />

      <UbuntuPartnerGrid
        id="partners"
        partners={technologyPartners}
        title="Technology ecosystem"
        lead="Vendors and clouds we integrate in live programs; final stack choices stay governed by your policies and data boundaries."
      />

      <UbuntuCareersSection id="careers" className="!border-t-0" />

      <PageContactForm context="About Page" />
    </SitePageMain>
  );
}
