import Header from "../Header";
import Footer from "../Footer";
import { SectionMediaProvider } from "./SectionMediaContext";

/** Site-wide shell: persistent navbar + page content + footer. */
export default function UbuntuPageShell({ children, mediaStartIndex = 1 }) {
  return (
    <div className="ubuntu-site ubuntu-site--fixed-nav">
      <Header shell />
      <div className="ubuntu-site__body">
        <SectionMediaProvider startIndex={mediaStartIndex}>{children}</SectionMediaProvider>
      </div>
      <Footer />
    </div>
  );
}
