import { Navigate } from "react-router-dom";

/** Legacy route — portfolio products now live under Our Work. */
export default function SolutionsPage() {
  return <Navigate to="/our-work/products" replace />;
}
