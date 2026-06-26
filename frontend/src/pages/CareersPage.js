import { Navigate } from "react-router-dom";

/** Legacy route — careers now live on About. */
export default function CareersPage() {
  return <Navigate to="/about#careers" replace />;
}
