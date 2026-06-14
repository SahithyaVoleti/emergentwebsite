import Header from "../Header";
import Footer from "../Footer";
import DevelopmentRibbon from "../DevelopmentRibbon";
import { SectionMediaProvider } from "./SectionMediaContext";
import { env } from "@/lib/env";

const showDevRibbon = env("SHOW_DEV_RIBBON") === "true";

/** Site-wide shell: optional development notice + navbar + page content + footer. */
export default function UbuntuPageShell({ children, mediaStartIndex = 1 }) {
  return (
    <div
      className={`ubuntu-site ubuntu-site--fixed-nav${showDevRibbon ? " ubuntu-site--dev-ribbon" : ""}`}
    >
      <a href="#main-content" className="ubuntu-skip-link">
        Skip to main content
      </a>
      {showDevRibbon ? <DevelopmentRibbon /> : null}
      <Header shell />
      <div id="main-content" className="ubuntu-site__body" role="main">
        <SectionMediaProvider startIndex={mediaStartIndex}>{children}</SectionMediaProvider>
      </div>
      <Footer />
    </div>
  );
}
