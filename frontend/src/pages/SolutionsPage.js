import PageHero from "../components/PageHero";
import PlatformsTechRibbon from "../components/ubuntu/PlatformsTechRibbon";
import SolutionsHorizontalSlider from "../components/ubuntu/SolutionsHorizontalSlider";
import PortfolioFeatureShowcase from "../components/ubuntu/PortfolioFeatureShowcase";
import PageStandardSections from "../components/ubuntu/PageStandardSections";
import SitePageMain from "../components/ubuntu/SitePageMain";
import { LISTING_PAGE_HERO_IMAGES } from "../lib/heroImageThemes";
import { SECTION_LABEL } from "../data/sectionLabels";

export default function SolutionsPage() {
  return (
    <SitePageMain>
      <PageHero
        title="Agentic solutions for |enterprise workflows|"
        description="Production-ready AI agents for transaction security, public services, research, clinical documentation, travel operations, legal research, financial analysis, education, real estate, and agriculture."
        primaryCTA={{ text: "Browse agents", href: "#solutions-catalog" }}
        image={LISTING_PAGE_HERO_IMAGES.solutions}
      />

      <PlatformsTechRibbon />

      <SolutionsHorizontalSlider
        id="solutions-catalog"
        eyebrow={SECTION_LABEL.portfolio}
        title="Agentic solution |catalog|"
        lead="Each agent addresses a defined workflow. Review capabilities, integration scope, and deployment requirements for your operating environment."
        viewAllHref={undefined}
        autoAdvanceMs={0}
        className="!border-t-0"
      />

      <PortfolioFeatureShowcase
        id="featured-case-study"
        sectionEyebrow={SECTION_LABEL.portfolio}
        sectionTitle="Featured delivery |case studies|"
        sectionLead="Representative transformation programs—delivery scope, applied AI capabilities, and measured outcomes."
        badge="Case Study"
        title="AI-Powered Admission CRM Transformation"
        description="We transformed a traditional admission management system into an intelligent, AI-powered platform—improving lead conversion, automating follow-ups, and strengthening student engagement across the enrollment lifecycle."
        metrics={[
          { value: "65%", label: "Faster admissions" },
          { value: "45%", label: "Higher conversions" },
          { value: "3.2x", label: "ROI within 12 months" },
        ]}
        image="/media/portfolio/agent-admission-crm.png"
        imageAlt="AI-powered admission CRM dashboard showing enquiries, application funnel, and counseling analytics"
        href="/#page-contact"
        linkLabel="View More"
      />

      <PortfolioFeatureShowcase
        id="featured-case-study-workforce"
        badge="Case Study"
        title="AI-Powered Employee Management Platform"
        description="We built an AI-driven workforce platform that unifies attendance, real-time activity tracking, and productivity analytics—giving managers live visibility and automating routine monitoring across distributed teams."
        metrics={[
          { value: "87.6%", label: "Average productivity" },
          { value: "1,248", label: "Employees managed" },
          { value: "99.99%", label: "Platform uptime" },
        ]}
        image="/media/portfolio/employee-management-platform.png"
        imageAlt="AI-powered employee management dashboard showing attendance, live monitoring, and productivity analytics"
        href="/#page-contact"
        linkLabel="View More"
        mediaPosition="left"
      />

      <PortfolioFeatureShowcase
        id="featured-case-study-proctoring"
        badge="Case Study"
        title="AI-Powered Online Proctoring Platform"
        description="We delivered an AI proctoring platform with live monitoring, face and audio detection, and automated violation flagging—securing remote exams at scale while reducing manual review load."
        metrics={[
          { value: "2,543", label: "Candidates proctored" },
          { value: "156", label: "Violations auto-flagged" },
          { value: "99.99%", label: "Platform uptime" },
        ]}
        image="/media/portfolio/agent-proctor-platform.png"
        imageAlt="AI-powered proctoring dashboard showing live exam sessions, AI detections, and violation breakdown"
        href="/#page-contact"
        linkLabel="View More"
      />

      <PortfolioFeatureShowcase
        id="featured-case-study-school"
        badge="Case Study"
        title="AI-Powered School Management System"
        description="We built a complete school management platform unifying admissions, attendance, fee collection, academics, and parent communication—giving administrators real-time visibility and automating routine operations across the institution."
        metrics={[
          { value: "2,543", label: "Students managed" },
          { value: "156", label: "Teachers onboarded" },
          { value: "\u20B948.75L", label: "Fees collected" },
        ]}
        image="/media/portfolio/agent-vidya-school.png"
        imageAlt="AI-powered school management dashboard showing attendance, class strength, and fee collection analytics"
        href="/#page-contact"
        linkLabel="View More"
        mediaPosition="left"
      />

      <PortfolioFeatureShowcase
        id="featured-case-study-talent"
        badge="Case Study"
        title="AI-Powered Talent & Recruitment Platform"
        description="We built an AI recruitment platform spanning sourcing, resume parsing, candidate matching, and interview scheduling—accelerating hiring while improving shortlist quality across roles."
        metrics={[
          { value: "1,248", label: "Applications processed" },
          { value: "856", label: "Candidates screened" },
          { value: "32", label: "Hires made" },
        ]}
        image="/media/portfolio/agent-talent-recruitment.png"
        imageAlt="AI-powered recruitment dashboard showing application trend, recruitment funnel, and interview schedule"
        href="/#page-contact"
        linkLabel="View More"
      />

      <PortfolioFeatureShowcase
        id="featured-case-study-school-mobile"
        badge="Case Study"
        title="School Management — Native Mobile Apps"
        description="We extended the school management platform into native mobile apps for administrators and staff—attendance, fee collection, communication, and academics available on the go with real-time sync."
        metrics={[
          { value: "2,543", label: "Students on app" },
          { value: "12", label: "Mobile modules" },
          { value: "Live", label: "Real-time sync" },
        ]}
        image="/media/portfolio/agent-vidya-mobile.png"
        imageAlt="School management mobile app screens showing dashboard, attendance, fee collection, and report cards"
        href="/#page-contact"
        linkLabel="View More"
        mediaPosition="left"
      />

      <PortfolioFeatureShowcase
        id="featured-case-study-hospital"
        badge="Case Study"
        title="AI-Powered Hospital Management System"
        description="We delivered a hospital management platform covering OPD and IPD, appointments, pharmacy, lab, and billing—with AI insights for no-show prediction, bed demand, and revenue optimization."
        metrics={[
          { value: "3,245", label: "Patients managed" },
          { value: "76.4%", label: "Average occupancy" },
          { value: "\u20B948.75L", label: "Revenue tracked" },
        ]}
        image="/media/portfolio/agent-aarogya-hospital.png"
        imageAlt="AI-powered hospital management dashboard showing department performance, occupancy, and clinical insights"
        href="/#page-contact"
        linkLabel="View More"
      />

      <PortfolioFeatureShowcase
        id="featured-case-study-telecalling"
        badge="Case Study"
        title="AI-Powered Telecalling & IVR Platform"
        description="We built an AI telecalling platform with IVR flows, auto-dialing, call scoring, and sentiment analysis—raising connect and conversion rates while automating follow-ups at scale."
        metrics={[
          { value: "125K+", label: "Calls handled" },
          { value: "12.45%", label: "Conversion rate" },
          { value: "18%", label: "AI performance uplift" },
        ]}
        image="/media/portfolio/agent-samvaad-telecalling.png"
        imageAlt="AI-powered telecalling dashboard showing call funnel, agent performance, and campaign analytics"
        href="/#page-contact"
        linkLabel="View More"
        mediaPosition="left"
      />

      <PageStandardSections
        pageKey="solutions"
        contactContext="Solutions Page"
        includeMethodology={false}
        includeOutcomes={false}
        includeAssurance={false}
      />
    </SitePageMain>
  );
}
