import { hq } from "../lib/heroImageThemes";

/**
 * Product / UI mockup imagery for ubuntu-style split sections site-wide.
 * Photos depict dashboards, devices, and engineering workspaces as stand-in product mockups.
 */
export const SITE_MOCKUPS = {
  hero: {
    src: "/media/data-extraction-hero.gif",
    alt: "Data extraction and AI pipeline — animated platform visualization",
    mediaType: "gif",
    playOnce: true,
  },
  dashboard: {
    src: hq("photo-1551288049-bebda4e38f71"),
    alt: "Analytics dashboard mockup with charts and KPI panels",
  },
  mobile: {
    src: hq("photo-1512941937669-90a1b58e7e9c"),
    alt: "Mobile application mockup on device frame",
  },
  collaboration: {
    src: hq("photo-1522071820081-4ef5e1c0b612"),
    alt: "Team collaboration workspace mockup",
  },
  pipeline: {
    src: hq("photo-1558494949-ef010cbdcc31"),
    alt: "CI/CD and platform engineering pipeline mockup",
  },
  documents: {
    src: hq("photo-1456324504439-367ceeef0852"),
    alt: "Document intelligence and knowledge base mockup",
  },
  healthcare: {
    src: hq("photo-1576091160399-112ba8d25d1d"),
    alt: "Clinical workflow and healthcare systems mockup",
  },
  security: {
    src: hq("photo-1563986768609-322da13575f3"),
    alt: "Security operations and governance console mockup",
  },
  code: {
    src: hq("photo-1461749280684-dccba630e2f6"),
    alt: "Engineering IDE and code review mockup",
  },
  cloud: {
    src: hq("photo-1451187580459-43490279c0fa"),
    alt: "Multi-cloud infrastructure topology mockup",
  },
  data: {
    src: "/media/data-extraction.gif",
    alt: "Data extraction and AI pipeline visualization mockup",
  },
  chat: {
    src: hq("photo-1531482615713-2afd69097998"),
    alt: "Enterprise assistant and semantic search mockup",
  },
  careers: {
    src: hq("photo-1521737711867-e3b97375f902"),
    alt: "Careers and team culture workspace mockup",
  },
  partners: {
    src: hq("photo-1556761175-5973dc0f32e7"),
    alt: "Partner ecosystem and integration mockup",
  },
  legal: {
    src: hq("photo-1450101499163-c8848c66ca85"),
    alt: "Compliance and policy documentation mockup",
  },
};

export function getSiteMockup(key) {
  return SITE_MOCKUPS[key] ?? SITE_MOCKUPS.dashboard;
}
