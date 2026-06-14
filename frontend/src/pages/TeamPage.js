import PageHero from "../components/PageHero";
import UbuntuTeamGrid from "../components/ubuntu/UbuntuTeamGrid";
import PageStandardSections from "../components/ubuntu/PageStandardSections";
import SitePageMain from "../components/ubuntu/SitePageMain";
import team from "../data/team";

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
