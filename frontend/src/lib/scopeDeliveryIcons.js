import {
  BarChart3,
  Bot,
  Brain,
  Building2,
  ClipboardCheck,
  CloudCog,
  Code2,
  Compass,
  Cpu,
  Database,
  DollarSign,
  Factory,
  FileSearch,
  FlaskConical,
  Gamepad2,
  GitBranch,
  GraduationCap,
  Heart,
  Layers,
  LayoutGrid,
  LineChart,
  Link2,
  MessageSquareText,
  Mic,
  Network,
  Plug,
  RefreshCw,
  ScanEye,
  ShieldAlert,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Sprout,
  Target,
  TrendingUp,
  UserRound,
  Workflow,
} from "lucide-react";

/** String keys used in capability item data → Lucide components. */
export const CAPABILITY_ICON_MAP = {
  agents: Bot,
  ml: Brain,
  data: Database,
  llm: RefreshCw,
  platform: Code2,
  devops: CloudCog,
  governance: ShieldCheck,
  genai: Sparkles,
};

/** String keys used on homepage industry/domain items. */
export const INDUSTRY_ICON_MAP = {
  healthcare: Heart,
  education: GraduationCap,
  commerce: ShoppingCart,
  media: Gamepad2,
  fintech: DollarSign,
  operations: Factory,
  proptech: Building2,
  analytics: BarChart3,
  retail: ShoppingCart,
  agriculture: Sprout,
  industrial: Factory,
  sports: Gamepad2,
};

/** Ordered by specificity — first match wins. */
const ICON_BY_KEYWORD = [
  { match: /tool integration/i, Icon: Plug },
  { match: /workflow automation/i, Icon: Workflow },
  { match: /human handoff/i, Icon: UserRound },
  { match: /run records|tracing/i, Icon: LineChart },
  { match: /pilot scope|success criteria/i, Icon: Target },
  { match: /boundary design|data boundary/i, Icon: LayoutGrid },
  { match: /acceptance testing|evaluation and acceptance/i, Icon: ClipboardCheck },
  { match: /governance|production handover/i, Icon: ShieldCheck },
  { match: /strategy|consulting|advisory|prioritization/i, Icon: Compass },
  { match: /natural language|nlp|text/i, Icon: MessageSquareText },
  { match: /vision|image|video|proctoring/i, Icon: ScanEye },
  { match: /predictive|forecast|analytics|revenue|dashboard/i, Icon: TrendingUp },
  { match: /recommend/i, Icon: Sparkles },
  { match: /anomaly|fraud|intrusion/i, Icon: ShieldAlert },
  { match: /automation|workflow/i, Icon: Workflow },
  { match: /prototyp|rapid validation/i, Icon: FlaskConical },
  { match: /mlops|registry/i, Icon: GitBranch },
  { match: /pipeline|orchestrat|ingestion/i, Icon: Layers },
  { match: /speech|audio|asr/i, Icon: Mic },
  { match: /knowledge|graph|ontology|repository|warehouse/i, Icon: Network },
  { match: /edge|on-device|device|mobile|ios|android|flutter/i, Icon: Cpu },
  { match: /copilot|genai|generative|llm|rag|prompt/i, Icon: Sparkles },
  { match: /agent/i, Icon: Bot },
  { match: /integration/i, Icon: Link2 },
  { match: /handoff/i, Icon: UserRound },
  { match: /tracing|records|monitoring/i, Icon: FileSearch },
  { match: /scope|criteria/i, Icon: Target },
  { match: /evaluation|testing/i, Icon: ClipboardCheck },
  { match: /responsible ai/i, Icon: ShieldCheck },
  { match: /data engineering|etl|training data/i, Icon: Database },
  { match: /architecture|design|platform/i, Icon: LayoutGrid },
  { match: /devops|ci\/cd/i, Icon: CloudCog },
  { match: /feasibility|machine learning/i, Icon: Brain },
  { match: /readiness|assessment/i, Icon: ClipboardCheck },
  { match: /opportunity mapping/i, Icon: Compass },
];

/** Fallback pool — each icon used at most once per grid. */
const ICON_POOL = [
  Plug,
  Workflow,
  UserRound,
  LineChart,
  Target,
  LayoutGrid,
  ClipboardCheck,
  ShieldCheck,
  Compass,
  MessageSquareText,
  ScanEye,
  TrendingUp,
  Sparkles,
  ShieldAlert,
  FlaskConical,
  GitBranch,
  Layers,
  Mic,
  Network,
  Cpu,
  Bot,
  Link2,
  FileSearch,
  Database,
  CloudCog,
  Code2,
  RefreshCw,
  Brain,
];

function resolveIconComponent(icon) {
  if (!icon) return null;
  if (typeof icon === "string") {
    return CAPABILITY_ICON_MAP[icon] ?? INDUSTRY_ICON_MAP[icon] ?? null;
  }
  return icon;
}

function keywordIconCandidates(title) {
  return ICON_BY_KEYWORD.filter(({ match }) => match.test(title ?? "")).map(({ Icon }) => Icon);
}

/**
 * Assign a distinct Lucide icon to each module/capability item in a grid.
 */
export function assignUniqueScopeIcons(items, fallback = Brain) {
  const used = new Set();

  const take = (Icon) => {
    if (!Icon || used.has(Icon)) return null;
    used.add(Icon);
    return Icon;
  };

  return items.map((item) => {
    const explicit = take(resolveIconComponent(item.icon));
    if (explicit) return explicit;

    const title = item.title ?? item.name ?? "";
    for (const Icon of keywordIconCandidates(title)) {
      const picked = take(Icon);
      if (picked) return picked;
    }

    for (const Icon of ICON_POOL) {
      const picked = take(Icon);
      if (picked) return picked;
    }

    return fallback;
  });
}

/** @deprecated Use assignUniqueScopeIcons for grids — kept for single-item lookups. */
export function resolveScopeDeliveryIcon(title, fallback = Brain) {
  const [icon] = assignUniqueScopeIcons([{ title }], fallback);
  return icon ?? fallback;
}
