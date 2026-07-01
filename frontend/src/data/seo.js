import { resolvePageMeta } from "../lib/pageMeta";
import { env } from "../lib/env";

const SITE_NAME = "NeuralTrix AI";
const DEFAULT_DESCRIPTION =
  "NeuralTrix AI transforms existing products into AI-enabled software, fine-tunes models for production, and builds AI-native SaaS across interdisciplinary industries.";

export const SITE_URL = env("SITE_URL", "https://neuraltrix.ai").replace(/\/$/, "");
export const DEFAULT_OG_IMAGE = "/neuraltrix-header-logo.png";

export function getSeoForPath(pathname) {
  const path = pathname.replace(/\/$/, "") || "/";
  const meta = resolvePageMeta(path);

  if (meta.notFound) {
    return {
      title: meta.title ?? `Page not found | ${SITE_NAME}`,
      description: meta.description ?? DEFAULT_DESCRIPTION,
      noindex: true,
      ogImage: DEFAULT_OG_IMAGE,
    };
  }

  return {
    title: meta.title,
    description: meta.description,
    noindex: false,
    ogImage: DEFAULT_OG_IMAGE,
  };
}
