import { Navigate } from "react-router-dom";

/** Legacy route — leadership now lives on About. */
export default function TeamPage() {
  return <Navigate to="/about#team" replace />;
}
