import { HOME_STARTUP_STATS } from "../../../data/homePageSections";
import UbuntuStatsStrip from "../../ubuntu/UbuntuStatsStrip";

/**
 * Compact dark stats band — dotted animated background, no heading copy.
 */
export default function UbuntuHomeStatsStrip({ stats = HOME_STARTUP_STATS, id = "startup-stats" }) {
  return (
    <UbuntuStatsStrip
      stats={stats}
      id={id}
      testId="home-startup-stats"
    />
  );
}
