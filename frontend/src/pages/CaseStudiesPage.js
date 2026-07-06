import { Navigate } from "react-router-dom";

/** Legacy route — client case studies now live under Our Work. */
export default function CaseStudiesPage() {
  return <Navigate to="/our-work/case-studies" replace />;
}
