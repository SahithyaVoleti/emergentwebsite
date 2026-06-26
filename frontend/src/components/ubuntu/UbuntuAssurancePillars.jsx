import { ShieldCheck, Target, Repeat, BarChart, FileCheck } from "lucide-react";
import { SECTION_LABEL } from "../../data/sectionLabels";
import UbuntuSectionShell from "./UbuntuSectionShell";
import { paletteAccentIndex } from "../../lib/brandPalette";

const DEFAULT_PILLARS = [
  { icon: Target, title: "Defined", desc: "KPI targets agreed before build scale-up." },
  { icon: ShieldCheck, title: "Controlled", desc: "Access, audit, and change control built into delivery." },
  { icon: Repeat, title: "Iterative", desc: "Small releases with clear go or stop decisions." },
  { icon: BarChart, title: "Measured", desc: "Operational metrics tied to acceptance criteria." },
  { icon: FileCheck, title: "Documented", desc: "Handover materials suitable for internal review." },
];

export default function UbuntuAssurancePillars({
  pillars = DEFAULT_PILLARS,
  eyebrow = SECTION_LABEL.controls,
  title = "Assurance through delivery commitments",
  lead = "We keep deployments grounded in measurable checkpoints, governance, and documented handover.",
}) {
  return (
    <UbuntuSectionShell eyebrow={eyebrow} title={title} lead={lead}>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {pillars.map((pillar, index) => {
          const Icon = pillar.icon;
          return (
            <article
              key={pillar.title}
              data-palette-accent={paletteAccentIndex(index)}
              className="ubuntu-assurance-pillar flex h-full flex-col border border-[#d9d9d9] bg-white p-5 transition-colors"
            >
              <Icon size={22} className="ubuntu-palette-icon-fill mb-4" strokeWidth={1.5} aria-hidden />
              <h3 className="text-sm font-medium text-[#2d2d2d]">{pillar.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-[#7d8597]">{pillar.desc}</p>
            </article>
          );
        })}
      </div>
    </UbuntuSectionShell>
  );
}
