import PageHero from "../components/PageHero";
import UbuntuTeamGrid from "../components/ubuntu/UbuntuTeamGrid";
import PageStandardSections from "../components/ubuntu/PageStandardSections";
import SitePageMain from "../components/ubuntu/SitePageMain";

const team = [
  {
    name: "Arjun Mehta",
    role: "CEO & Co-founder",
    bio: "Product-minded operator focused on shipping AI systems customers actually run.",
  },
  {
    name: "Sarah Chen",
    role: "CTO & Co-founder",
    bio: "Hands-on ML lead, architecture through evaluation harnesses and production monitoring.",
  },
  {
    name: "David Okafor",
    role: "Principal Engineer",
    bio: "Distributed systems and shipping discipline from high-growth platform teams.",
  },
  {
    name: "Lisa Park",
    role: "Head of Product",
    bio: "Turns ambiguous AI ideas into scoped milestones teams can execute.",
  },
  {
    name: "Raj Patel",
    role: "Lead Applied Scientist",
    bio: "LLMs, retrieval, and evaluation, making models behave in the wild.",
  },
  {
    name: "Maria Santos",
    role: "Customer Programs",
    bio: "Keeps pilots honest on outcomes, timelines, and handover clarity.",
  },
];

export default function TeamPage() {
  return (
    <SitePageMain>
      <PageHero
        label="Our Team"
        title="Leadership and Delivery, Accountable to Scope"
        description="Senior practitioners remain engaged on delivery workstreams so stakeholders interact with decision-makers responsible for outcomes."
        primaryCTA={{ text: "View careers", href: "/careers" }}
        illustrationKey="about"
      />

      <UbuntuTeamGrid members={team} />

      <PageStandardSections pageKey="team" contactContext="Team Page" />
    </SitePageMain>
  );
}
