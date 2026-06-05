import Header from "../Header";
import Footer from "../Footer";
import DevelopmentRibbon from "../DevelopmentRibbon";
import { SectionMediaProvider } from "./SectionMediaContext";

/** Site-wide shell: development notice + navbar + page content + footer. */
export default function UbuntuPageShell({ children, mediaStartIndex = 1 }) {
  return (
    <div className="ubuntu-site ubuntu-site--fixed-nav ubuntu-site--dev-ribbon">
      <DevelopmentRibbon />
      <Header shell />
      <div className="ubuntu-site__body">
        <SectionMediaProvider startIndex={mediaStartIndex}>{children}</SectionMediaProvider>
      </div>
      <Footer />
    </div>
  );
}
