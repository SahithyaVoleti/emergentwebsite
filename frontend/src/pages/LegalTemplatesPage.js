import { Navigate } from "react-router-dom";

/** Legacy route — legal templates now live on Terms and Privacy pages. */
export default function LegalTemplatesPage() {
  return <Navigate to="/terms-and-conditions#legal-templates" replace />;
}
