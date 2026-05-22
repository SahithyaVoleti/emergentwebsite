import caseStudiesData from "../data/caseStudies";
import CaseStudiesVerticalSlider from "./ubuntu/CaseStudiesVerticalSlider";

export default function CaseStudies(props) {
  return <CaseStudiesVerticalSlider studies={caseStudiesData} {...props} />;
}
