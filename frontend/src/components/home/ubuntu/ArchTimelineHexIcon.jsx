import { ClipboardList, Layers, ShieldCheck, LineChart } from "lucide-react";

const HEX_GRADIENTS = [
  { from: "#6b6b6b", to: "#5c5c5c", text: "#6b6b6b" },
  { from: "#4a4a4a", to: "#6b6b6b", text: "#4a4a4a" },
  { from: "#7d7d7d", to: "#b0b0b0", text: "#5c5c5c" },
  { from: "#2d2d2d", to: "#9a9a9a", text: "#2d2d2d" },
];

const STEP_ICONS = [ClipboardList, Layers, ShieldCheck, LineChart];

/** Flat top, vertical sides, pointed bottom — matches reference timeline badge */
const OUTER_BADGE = "M18 3 H70 L70 64 L44 97 L18 64 Z";

/** Regular hexagon nested in the upper portion */
const INNER_HEX = "M44 15 L62 27 L62 49 L44 61 L26 49 L26 27 Z";

export default function ArchTimelineHexIcon({ index, label }) {
  const palette = HEX_GRADIENTS[index] ?? HEX_GRADIENTS[HEX_GRADIENTS.length - 1];
  const gradId = `arch-hex-grad-${index}`;
  const Icon = STEP_ICONS[index] ?? ClipboardList;
  const stepLabel = label ?? String(index + 1).padStart(2, "0");

  return (
    <div
      className="ubuntu-arch-timeline__hex-badge"
      style={{ "--hex-text": palette.text }}
    >
      <svg
        viewBox="0 0 88 100"
        className="ubuntu-arch-timeline__hex-svg"
        aria-hidden="true"
        focusable="false"
      >
        <defs>
          <linearGradient id={gradId} x1="12%" y1="0%" x2="88%" y2="100%">
            <stop offset="0%" stopColor={palette.from} />
            <stop offset="100%" stopColor={palette.to} />
          </linearGradient>
        </defs>
        <path d={OUTER_BADGE} fill={`url(#${gradId})`} />
        <path
          d={OUTER_BADGE}
          fill="none"
          stroke="rgba(255,255,255,0.28)"
          strokeWidth="1"
          strokeLinejoin="round"
        />
        <path d={INNER_HEX} fill="#ffffff" />
        <path
          d={INNER_HEX}
          fill="none"
          stroke="rgba(0,0,0,0.06)"
          strokeWidth="1"
          strokeLinejoin="round"
        />
      </svg>

      <div className="ubuntu-arch-timeline__hex-content">
        <Icon
          className="ubuntu-arch-timeline__hex-icon"
          size={24}
          strokeWidth={1.75}
          color={palette.text}
          aria-hidden="true"
        />
        <span className="ubuntu-arch-timeline__hex-label">{stepLabel}</span>
      </div>
    </div>
  );
}
