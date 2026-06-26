import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import SitePageMain from "../components/ubuntu/SitePageMain";
import UbuntuPageSection from "../components/ubuntu/UbuntuPageSection";
import PageStandardSections from "../components/ubuntu/PageStandardSections";
import CaseStudiesVerticalSlider from "../components/ubuntu/CaseStudiesVerticalSlider";
import caseStudies from "../data/caseStudies";
import { SECTION_LABEL } from "../data/sectionLabels";

const RESEARCH_TOPICS = [
  {
    title: "AI Research Labs",
    desc: "Structured evaluation of intelligent automation behavior, tool use, and safety before client deployment.",
  },
  {
    title: "Emerging Technologies",
    desc: "Hands-on assessment of multimodal models, orchestration patterns, and copilot integration in application environments.",
  },
  {
    title: "Whitepapers",
    desc: "Technical briefs on intelligent automation deployment, modernization paths, and pilot-versus-scale decisions.",
  },
  {
    title: "Publications",
    desc: "Articles and field notes from delivery programs for practitioners and program leadership.",
  },
  {
    title: "AI Experiments",
    desc: "Time-boxed prototypes with fixed datasets, documented failure modes, and defined production blockers.",
  },
  {
    title: "Innovation Programs",
    desc: "Co-designed tracks to validate automation concepts in your applications—with review gates and engineering handover.",
  },
];

export default function ResearchInnovationPage() {
  return (
    <SitePageMain>
      <PageHero
        label="Research & Innovation"
        title="Research programs for production AI delivery"
        description="Controlled experimentation on intelligent automation and application integration—documented outcomes inform governed production programs."
        primaryCTA={{
          text: "Schedule research briefing",
          href: "#page-contact",
          contactIntent: "consultation",
        }}
        secondaryCTA={{ text: "View test cases", href: "#test-cases" }}
        illustrationKey="research"
      />

      <UbuntuPageSection
        eyebrow={SECTION_LABEL.experimentation}
        title="Methodology for connecting research to production"
        lead="This methodology links controlled experiments to delivery programs—with named ownership at each review gate."
        bullets={[
          "Hypothesis definition tied to a production workflow",
          "Controlled evaluation before significant compute or vendor commitment",
          "Engineering handover with full documentation of validated patterns",
        ]}
      />

      <UbuntuPageSection
        variant="alt"
        eyebrow={SECTION_LABEL.research}
        title="Research and innovation tracks"
        lead="These tracks operate independently or as precursors to scoped intelligent automation and modernization programs."
      >
        <ul className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {RESEARCH_TOPICS.map((topic) => (
            <li key={topic.title} className="border border-[#e5e5e5] bg-white p-5">
              <h3 className="text-base font-medium text-[#2d2d2d]">{topic.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#7d8597]">{topic.desc}</p>
            </li>
          ))}
        </ul>
        <p className="ubuntu-body mt-8">
          Technical articles and field notes are published on{" "}
          <Link to="/blog" className="text-[#d1511f] hover:underline">
            News & Media
          </Link>
          .
        </p>
      </UbuntuPageSection>

      <CaseStudiesVerticalSlider
        studies={caseStudies}
        id="test-cases"
        showLabel
        lead="Review live-tested implementations by sector. Each case documents delivery scope, validation approach, and adaptation requirements for your environment."
        viewAllHref={undefined}
      />

      <PageStandardSections
        pageKey="caseStudies"
        contactContext="Research & Innovation"
        ctaOverrides={{
          title: "Next Step for research collaboration",
          description:
            "Share your research question or modernization hypothesis. We will align a briefing to your domain, data boundaries, and governance requirements.",
          mockupKey: "code",
        }}
      />
    </SitePageMain>
  );
}
