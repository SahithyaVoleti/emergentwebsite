import services from "../data/services";
import ServicesShowcaseTabs from "./ServicesShowcaseTabs";

export default function ServicesSection() {
  return (
    <section
      id="services"
      data-testid="services-section"
      className="py-10 sm:py-12 md:py-14 corp-pat-dots overflow-hidden"
    >
      <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
        <div className="max-w-2xl mb-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-slate-600">
            Services
          </p>
          <h2
            data-testid="services-heading"
            className="text-4xl sm:text-5xl lg:text-5xl font-black tracking-tighter text-[#0B1B3D] mb-4"

          >
            AI Development <span className="text-[#0B1B3D]/30">Real-World Impact</span>
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Navigate through the current tech-driven landscape and foster long-term growth with custom AI solutions.
          </p>
        </div>
        <ServicesShowcaseTabs services={services.slice(0, 6)} />
      </div>
    </section>
  );
}

