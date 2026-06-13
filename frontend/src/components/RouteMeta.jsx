import { useLocation } from "react-router-dom";
import PageMeta from "./PageMeta";
import { resolvePageMeta } from "../lib/pageMeta";

export default function RouteMeta() {
  const { pathname } = useLocation();
  const meta = resolvePageMeta(pathname);

  return <PageMeta title={meta.title} description={meta.description} pathname={pathname} />;
}
