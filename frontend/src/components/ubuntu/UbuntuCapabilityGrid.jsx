import { useState } from "react";
import { Layers } from "lucide-react";

/**
 * Homepage-style capability band — left nav list + detail panel (same shell as home sections).
 */
export default function UbuntuCapabilityGrid({
  capabilities = [],
  eyebrow = "Coverage",
  title = "Coverage across functional capabilities",
  lead,
  id = "capabilities",
  variant = "alt",
  className = "",
}) {
  const [active, setActive] = useState(0);
  if (!capabilities?.length) return null;

  const activeCap = capabilities[active] ?? capabilities[0];
  const detailItems = activeCap.items ?? [];

  const sectionClass = [
    "ubuntu-section-block border-b border-[#d9d9d9]",
    variant === "alt" ? "ubuntu-section--alt" : "bg-white",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section id={id} className={sectionClass} aria-labelledby={`${id}-heading`}>
      <div className="ubuntu-container">
        <div className="max-w-3xl text-left">
          {eyebrow && (
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#666]">
              {eyebrow}
            </p>
          )}
          <h2 id={`${id}-heading`} className="ubuntu-section-title text-[#111]">
            {title}
          </h2>
          {lead && <p className="ubuntu-lead mt-4 max-w-3xl text-[#333]">{lead}</p>}
        </div>

        <div className="mt-8 grid grid-cols-1 gap-0 border border-[#d9d9d9] bg-white lg:grid-cols-12">
          <div className="border-b border-[#d9d9d9] lg:col-span-4 lg:border-b-0 lg:border-r">
            <ul className="divide-y divide-[#e5e5e5]">
              {capabilities.map((cap, i) => (
                <li key={cap.title ?? i}>
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    className={`flex w-full items-start gap-3 px-4 py-4 text-left transition-colors ${
                      active === i ? "bg-[#fafafa] text-[#8b1538]" : "text-[#555] hover:bg-[#fafafa]"
                    }`}
                  >
                    <Layers size={18} className="mt-0.5 shrink-0" strokeWidth={1.5} aria-hidden />
                    <span className="text-sm font-medium">{cap.title}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="p-6 sm:p-8 lg:col-span-8">
            <h3 className="text-lg font-medium text-[#111]">{activeCap.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#555]">{activeCap.desc}</p>
            {detailItems.length > 0 && (
              <ul className="ubuntu-bullet-list mt-6">
                {detailItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
