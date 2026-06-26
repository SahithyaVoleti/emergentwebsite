import { Navigate } from "react-router-dom";

/** Legacy route — technology partners now live on About. */
export default function PartnersPage() {
  return <Navigate to="/about#partners" replace />;
}
