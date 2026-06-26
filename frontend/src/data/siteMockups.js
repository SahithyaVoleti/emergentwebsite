import { hq } from "../lib/heroImageThemes";
import { DECORATIVE_ALT } from "../lib/decorativeMedia";

/**
 * Product / UI mockup imagery for ubuntu-style split sections site-wide.
 */
export const SITE_MOCKUPS = {
  hero: {
    src: "/media/data-extraction-hero.gif",
    alt: DECORATIVE_ALT,
    mediaType: "gif",
    playOnce: true,
  },
  dashboard: {
    src: hq("photo-1551288049-bebda4e38f71"),
    alt: DECORATIVE_ALT,
  },
  mobile: {
    src: hq("photo-1512941937669-90a1b58e7e9c"),
    alt: DECORATIVE_ALT,
  },
  collaboration: {
    src: hq("photo-1522071820081-4ef5e1c0b612"),
    alt: DECORATIVE_ALT,
  },
  pipeline: {
    src: hq("photo-1558494949-ef010cbdcc31"),
    alt: DECORATIVE_ALT,
  },
  documents: {
    src: hq("photo-1456324504439-367ceeef0852"),
    alt: DECORATIVE_ALT,
  },
  healthcare: {
    src: hq("photo-1576091160399-112ba8d25d1d"),
    alt: DECORATIVE_ALT,
  },
  security: {
    src: hq("photo-1563986768609-322da13575f3"),
    alt: DECORATIVE_ALT,
  },
  code: {
    src: hq("photo-1461749280684-dccba630e2f6"),
    alt: DECORATIVE_ALT,
  },
  cloud: {
    src: hq("photo-1451187580459-43490279c0fa"),
    alt: DECORATIVE_ALT,
  },
  data: {
    src: "/media/data-extraction.gif",
    alt: DECORATIVE_ALT,
  },
  chat: {
    src: hq("photo-1531482615713-2afd69097998"),
    alt: DECORATIVE_ALT,
  },
  careers: {
    src: hq("photo-1521737711867-e3b97375f902"),
    alt: DECORATIVE_ALT,
  },
  partners: {
    src: hq("photo-1556761175-5973dc0f32e7"),
    alt: DECORATIVE_ALT,
  },
  legal: {
    src: hq("photo-1450101499163-c8848c66ca85"),
    alt: DECORATIVE_ALT,
  },
};

export function getSiteMockup(key) {
  return SITE_MOCKUPS[key] ?? SITE_MOCKUPS.dashboard;
}
