import { ShieldCheck, Target, Repeat, BarChart, FileCheck } from "lucide-react";
import UbuntuSectionShell from "./UbuntuSectionShell";

const DEFAULT_PILLARS = [
  { icon: Target, title: "Defined", desc: "Precision KPI gates agreed before build scale-up." },
  { icon: ShieldCheck, title: "Governed", desc: "Access, audit, and change control embedded in delivery." },
  { icon: Repeat, title: "Iterative", desc: "Thin slices with explicit go or stop decisions." },
  { icon: BarChart, title: "Measured", desc: "Operational metrics tied to acceptance criteria." },
  { icon: FileCheck, title: "Documented", desc: "Handover artifacts suitable for internal review." },
];

export default function UbuntuAssurancePillars({
  pillars = DEFAULT_PILLARS,
  eyebrow = "Assurance",
  title = "Assurance through delivery commitments",
  lead = "This assurance model keeps deployments grounded in measurable checkpoints, governance, and documented handover.",
}) {
  return (
    <UbuntuSectionShell eyebrow={eyebrow} title={title} lead={lead}>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {pillars.map((pillar) => {
          const Icon = pillar.icon;
          return (
            <article
              key={pillar.title}
              className="flex h-full flex-col border border-[#d9d9d9] bg-[#fafafa] p-5 transition-colors hover:border-[#8b1538]"
            >
              <Icon size={22} className="mb-4 text-[#8b1538]" strokeWidth={1.5} aria-hidden />
              <h3 className="text-sm font-medium text-[#111]">{pillar.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-[#555]">{pillar.desc}</p>
            </article>
          );
        })}
      </div>
    </UbuntuSectionShell>
  );
}
