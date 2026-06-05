import { ChevronRight } from "lucide-react";

const MethodologyFlowchart = ({ steps }) => {
  if (!steps?.length) return null;

  return (
    <div className="w-full">
      <div className="hidden xl:block">
        <div className="relative flex justify-between gap-4 px-2">
          <div
            className="absolute left-[8%] right-[8%] top-10 h-px bg-[#d9d9d9]"
            aria-hidden
          />
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={i} className="relative z-10 flex flex-1 flex-col items-center text-center">
                <div className="mb-6 flex h-20 w-20 items-center justify-center border border-[#d9d9d9] bg-white transition-colors hover:border-[#8b1538]">
                  {Icon ? (
                    <Icon size={24} className="text-[#8b1538]" strokeWidth={1.5} aria-hidden />
                  ) : (
                    <span className="text-lg font-medium text-[#111]">{i + 1}</span>
                  )}
                </div>
                <h3 className="text-xs font-semibold uppercase tracking-wide text-[#111]">
                  {step.label || step.step || step.title}
                </h3>
                {step.desc && (
                  <p className="mt-2 max-w-[10rem] text-xs leading-relaxed text-[#555]">
                    {step.desc}
                  </p>
                )}
                {i < steps.length - 1 && (
                  <ChevronRight
                    size={20}
                    className="absolute -right-3 top-9 hidden text-[#ccc] xl:block"
                    aria-hidden
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:hidden">
        {steps.map((step, i) => {
          const Icon = step.icon;
          return (
            <article
              key={i}
              className="flex gap-4 border border-[#d9d9d9] bg-white p-5"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-[#8b1538] bg-[#fafafa]">
                {Icon ? (
                  <Icon size={20} className="text-[#8b1538]" strokeWidth={1.5} aria-hidden />
                ) : (
                  <span className="text-sm font-medium text-[#111]">{i + 1}</span>
                )}
              </div>
              <div>
                <h3 className="text-sm font-medium text-[#111]">
                  {step.label || step.step || step.title}
                </h3>
                {step.desc && (
                  <p className="mt-1 text-sm leading-relaxed text-[#555]">{step.desc}</p>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default MethodologyFlowchart;
