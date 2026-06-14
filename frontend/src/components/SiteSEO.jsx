import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { getSeoForPath, SITE_URL } from "../data/seo";

export default function SiteSEO() {
  const { pathname } = useLocation();
  const { title, description, noindex, ogImage } = getSeoForPath(pathname);
  const canonical = `${SITE_URL}${pathname === "/" ? "" : pathname}`;
  const imageUrl = ogImage?.startsWith("http") ? ogImage : `${SITE_URL}${ogImage}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      {noindex ? <meta name="robots" content="noindex,nofollow" /> : null}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={imageUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
    </Helmet>
  );
}
