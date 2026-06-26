import { Navigate } from "react-router-dom";

/** Legacy route — security practices now live on About. */
export default function SecurityPage() {
  return <Navigate to="/about#security" replace />;
}
