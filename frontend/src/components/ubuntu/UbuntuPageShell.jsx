import Header from "../Header";
import Footer from "../Footer";
import DevelopmentRibbon from "../DevelopmentRibbon";
import { SectionMediaProvider } from "./SectionMediaContext";

const showDevRibbon =
  process.env.REACT_APP_SHOW_DEV_RIBBON === "true" ||
  (process.env.NODE_ENV === "development" &&
    process.env.REACT_APP_SHOW_DEV_RIBBON !== "false");

/** Site-wide shell: optional development notice + navbar + page content + footer. */
export default function UbuntuPageShell({ children, mediaStartIndex = 1 }) {
  return (
    <div
      className={`ubuntu-site ubuntu-site--fixed-nav${showDevRibbon ? " ubuntu-site--dev-ribbon" : ""}`}
    >
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[200] focus:border focus:border-[#8b1538] focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-[#8b1538]"
      >
        Skip to main content
      </a>
      {showDevRibbon ? <DevelopmentRibbon /> : null}
      <Header shell />
      <div id="main-content" className="ubuntu-site__body" tabIndex={-1}>
        <SectionMediaProvider startIndex={mediaStartIndex}>{children}</SectionMediaProvider>
      </div>
      <Footer />
    </div>
  );
}
