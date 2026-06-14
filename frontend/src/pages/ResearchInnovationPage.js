import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import SitePageMain from "../components/ubuntu/SitePageMain";
import UbuntuPageSection from "../components/ubuntu/UbuntuPageSection";
import PageStandardSections from "../components/ubuntu/PageStandardSections";
import { getSiteMockup } from "../data/siteMockups";
import { SECTION_LABEL } from "../data/sectionLabels";

const RESEARCH_TOPICS = [
  {
    title: "AI Research Labs",
    desc: "Structured tests of agent behavior, tool use, and safety before we embed agents in client apps.",
  },
  {
    title: "Emerging Technologies",
    desc: "Hands-on review of multimodal models, agent orchestration, and copilot patterns inside real app setups.",
  },
  {
    title: "Whitepapers",
    desc: "Technical briefs on agent deployment, app modernization paths, and when to pilot versus scale.",
  },
  {
    title: "Publications",
    desc: "Articles and field notes from agent and app modernization projects for practitioners and leaders.",
  },
  {
    title: "AI Experiments",
    desc: "Time-boxed prototypes with fixed datasets, documented failures, and clear blockers before production.",
  },
  {
    title: "Innovation Programs",
    desc: "Co-designed tracks to test agent ideas in your apps—with review gates and handoff to engineering.",
  },
];

export default function ResearchInnovationPage() {
  const mockup = getSiteMockup("code");

  return (
    <SitePageMain>
      <PageHero
        label="Research & Innovation"
        title="Research that feeds agent and app builds"
        description="We test agent patterns and app integration in the lab, document what works, and move proven ideas into client projects—with clear limits and honest results."
        primaryCTA={{
          text: "Book a research briefing",
          href: "#page-contact",
          contactIntent: "consultation",
        }}
        secondaryCTA={{ text: "View case studies", href: "/case-studies" }}
        image={mockup.src}
      />

      <UbuntuPageSection
        eyebrow={SECTION_LABEL.experimentation}
        title="How we connect research to production"
        lead="Experiments inform agent and app modernization work—with a named owner at each review point."
        bullets={[
          "Start with a hypothesis tied to a real app workflow",
          "Test agent behavior before heavy spend on compute or vendors",
          "Hand off proven patterns to engineering with full documentation",
        ]}
      />

      <UbuntuPageSection
        variant="alt"
        eyebrow={SECTION_LABEL.research}
        title="Research and innovation tracks"
        lead="Run these on their own or before a scoped agent or app modernization engagement."
      >
        <ul className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {RESEARCH_TOPICS.map((topic) => (
            <li key={topic.title} className="border border-[#e5e5e5] bg-white p-5">
              <h3 className="text-base font-semibold text-[#111]">{topic.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#555]">{topic.desc}</p>
            </li>
          ))}
        </ul>
        <p className="ubuntu-body mt-8">
          Technical articles and field notes are published on{" "}
          <Link to="/blog" className="text-[#8b1538] hover:underline">
            News & Media
          </Link>
          .
        </p>
      </UbuntuPageSection>

      <PageStandardSections
        pageKey="research"
        contactContext="Research & Innovation"
        includeMethodology={false}
        includeOutcomes
        includeAssurance
        ctaOverrides={{
          title: "Get started with research and innovation",
          description:
            "Tell us about an agent pattern or app upgrade idea. We will align a briefing to your domain, data limits, and governance needs.",
          mockupKey: "code",
        }}
      />
    </SitePageMain>
  );
}
