import { Users, Handshake, Star, Headset } from "lucide-react";
import UbuntuSectionShell from "./ubuntu/UbuntuSectionShell";
import UbuntuStatsStrip from "./ubuntu/UbuntuStatsStrip";

const stats = [
  { value: "$20B+", label: "Estimated GenAI market growth by end of decade" },
  { value: "54%", label: "Companies integrated GenAI by end of 2023" },
  { value: "$4.4T", label: "Economic benefits AI adds annually" },
  { value: "$288B", label: "Projected US AI market value by 2026" },
];

const DEFAULT_SPLIT_HIGHLIGHTS = [
  { icon: Users, title: "Stable delivery team aligned to your stack, with continuity across releases" },
  { icon: Handshake, title: "Security and review practices proportionate to stage and regulatory context" },
  { icon: Star, title: "Acceptance criteria tied to observable behavior and defined test evidence" },
  { icon: Headset, title: "Structured handover and enablement as internal teams assume operations" },
];

export default function ImpactStats({
  title,
  customStats,
  variant = "stats",
  label = "Assurance",
  description,
  highlights = DEFAULT_SPLIT_HIGHLIGHTS,
}) {
  const displayStats = customStats || stats;
  const intro =
    description ||
    "We scope work to demonstrate value on a clear cadence, document deliverables and interfaces, and adjust the engagement as priorities and evidence warrant.";

  if (variant === "split") {
    return (
      <UbuntuSectionShell
        data-testid="impact-stats-section"
        eyebrow={label || "Assurance"}
        title={title || "Assurance for accountable delivery"}
        lead={intro}
        variant="alt"
      >
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.title} className="flex gap-4 border border-[#d9d9d9] bg-white p-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-[#8b1538] bg-[#fafafa]">
                  <Icon size={20} className="text-[#8b1538]" strokeWidth={1.5} aria-hidden />
                </div>
                <p className="text-sm font-medium leading-snug text-[#111]">{item.title}</p>
              </li>
            );
          })}
        </ul>
      </UbuntuSectionShell>
    );
  }

  return (
    <UbuntuStatsStrip
      id="impact-stats"
      stats={displayStats.map((s) => ({ value: s.value, label: s.label }))}
    />
  );
}
