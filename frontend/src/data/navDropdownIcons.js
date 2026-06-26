import {
  Bot,
  Brain,
  Briefcase,
  Building2,
  Circle,
  Cloud,
  Code,
  Cpu,
  Database,
  Dna,
  Factory,
  GraduationCap,
  Handshake,
  HeartPulse,
  Info,
  Landmark,
  LayoutGrid,
  MessageCircle,
  Newspaper,
  Shield,
  Smartphone,
  Sparkles,
  Sprout,
  Store,
  Users,
} from "lucide-react";

const ICON_BY_HREF = {
  "/services/ai-product-transformation": Sparkles,
  "/services/model-fine-tuning-ml": Brain,
  "/services/saas-platform-engineering": Cloud,
  "/services/artificial-intelligence": Brain,
  "/services/generative-ai": Sparkles,
  "/services/ai-agents": Bot,
  "/services/custom-software": Code,
  "/services/data-engineering": Database,
  "/services/devops": Cloud,
  "/services/mobile-apps": Code,
  "/services/llm-development": Sparkles,
  "/solutions": Building2,
  "/solutions/databrain-ai": Database,
  "/solutions/medimind-ai": HeartPulse,
  "/solutions/talentify-ai": GraduationCap,
  "/solutions/quikbiz-ai": MessageCircle,
  "/solutions/intellibot-ai": Cpu,
  "/about#security": Shield,
  "/industries/education": GraduationCap,
  "/industries/healthcare": HeartPulse,
  "/industries/manufacturing": Factory,
  "/industries/agriculture": Sprout,
  "/industries/biotechnology": Dna,
  "/industries/government": Landmark,
  "/industries/retail": Store,
  "/industries/fintech": Building2,
  "/industries/sports-gaming": Factory,
  "/industries/real-estate": Building2,
  "/about": Info,
  "/careers": Briefcase,
  "/blog": Newspaper,
};

const ICON_BY_PILLAR = {
  "AI Product Transformation": Sparkles,
  "Model Fine-Tuning & ML": Brain,
  "SaaS & Platform Engineering": Cloud,
};

export function getNavDropdownIcon(href, { pillar, fallback = Circle } = {}) {
  if (pillar && ICON_BY_PILLAR[pillar]) return ICON_BY_PILLAR[pillar];
  return ICON_BY_HREF[href] || fallback;
}

export const NAV_VIEW_ALL_ICON = LayoutGrid;
