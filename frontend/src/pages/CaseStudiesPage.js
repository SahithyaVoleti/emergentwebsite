import { Navigate } from "react-router-dom";

/** Legacy route — test cases catalog now lives on Research & Innovation. */
export default function CaseStudiesPage() {
  return <Navigate to="/research-innovation#test-cases" replace />;
}
