import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import SitePageMain from "../components/ubuntu/SitePageMain";
import UbuntuPageSection from "../components/ubuntu/UbuntuPageSection";
import PageStandardSections from "../components/ubuntu/PageStandardSections";
import { getSiteMockup } from "../data/siteMockups";

const RESEARCH_TOPICS = [
  {
    title: "AI Research Labs",
    desc: "Structured experimentation on model behavior, evaluation harnesses, and domain-specific benchmarks before production commitments.",
  },
  {
    title: "Emerging Technologies",
    desc: "Applied exploration across multimodal models, agent orchestration, and retrieval architectures aligned to enterprise constraints.",
  },
  {
    title: "Whitepapers",
    desc: "Technical briefs on delivery patterns, governance models, and measurable adoption criteria for AI programs.",
  },
  {
    title: "Publications",
    desc: "Curated articles and field notes from delivery programs, published for practitioner and leadership audiences.",
  },
  {
    title: "AI Experiments",
    desc: "Time-boxed prototypes with frozen datasets, documented failure modes, and explicit production blockers.",
  },
  {
    title: "Innovation Programs",
    desc: "Co-designed innovation tracks with defined scope, review gates, and handoff criteria into engineering delivery.",
  },
];

export default function ResearchInnovationPage() {
  const mockup = getSiteMockup("code");

  return (
    <SitePageMain>
      <PageHero
        label="Research & Innovation"
        title="Research and innovation for applied AI programs"
        description="Interdisciplinary research, structured experimentation, and innovation tracks that inform how we design, evaluate, and govern AI systems for enterprise delivery."
        primaryCTA={{
          text: "Book a research briefing",
          href: "#page-contact",
          contactIntent: "consultation",
        }}
        secondaryCTA={{ text: "View case studies", href: "/case-studies" }}
        image={mockup.src}
      />

      <UbuntuPageSection
        eyebrow="Methodology"
        title="Methodology for research-led delivery"
        lead="This methodology connects lab-style experimentation to governed implementation paths with clear ownership at each review gate."
        bullets={[
          "Hypothesis framing tied to measurable business or operational outcomes",
          "Evaluation design before scale-up of compute or vendor spend",
          "Documented handoff from research spikes into production engineering",
        ]}
      />

      <UbuntuPageSection
        variant="alt"
        eyebrow="Coverage"
        title="Coverage across research and innovation tracks"
        lead="These tracks can run independently or as a precursor to scoped delivery engagements."
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
        pageKey="detail"
        contactContext="Research & Innovation"
        includeMethodology={false}
        includeOutcomes={false}
        includeAssurance
        ctaOverrides={{
          title: "Next Step for research and innovation",
          description:
            "We can align a research briefing to your domain, data constraints, and governance requirements to define an actionable starting scope.",
          mockupKey: "code",
        }}
      />
    </SitePageMain>
  );
}
