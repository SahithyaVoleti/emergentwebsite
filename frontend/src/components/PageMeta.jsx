import { Helmet } from "react-helmet-async";
import { DEFAULT_PAGE_TITLE } from "../lib/company";

const OG_IMAGE_PATH = "/og-image.svg";

export default function PageMeta({ title, description, pathname = "/" }) {
  const pageTitle = title || DEFAULT_PAGE_TITLE;
  const canonicalBase = import.meta.env.VITE_SITE_URL || "https://neuraltrix.ai";
  const canonicalUrl = `${canonicalBase.replace(/\/$/, "")}${pathname === "/" ? "" : pathname}`;
  const ogImageUrl = `${canonicalBase.replace(/\/$/, "")}${OG_IMAGE_PATH}`;

  return (
    <Helmet>
      <title>{pageTitle}</title>
      {description ? <meta name="description" content={description} /> : null}
      <meta property="og:title" content={pageTitle} />
      {description ? <meta property="og:description" content={description} /> : null}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImageUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      {description ? <meta name="twitter:description" content={description} /> : null}
      <meta name="twitter:image" content={ogImageUrl} />
      <link rel="canonical" href={canonicalUrl} />
    </Helmet>
  );
}
