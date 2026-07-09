import { resetSectionBands } from "../../lib/sectionBands";

/** Resets section band alternation before each page tree renders. */
export default function SectionBandReset({ children }) {
  resetSectionBands();
  return children;
}
