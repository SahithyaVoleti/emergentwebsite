import { Navigate } from "react-router-dom";

/** Legacy route — engagement principles now live on About. */
export default function TestimonialsPage() {
  return <Navigate to="/about#engagement" replace />;
}
