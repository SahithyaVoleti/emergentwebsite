import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import caseStudiesData from "../data/caseStudies";
import { TRACEFOLD } from "../lib/tracefoldLabel";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";

const slides = caseStudiesData.map((cs) => ({
  slug: cs.slug,
  title: cs.title,
  industry: cs.industry,
  image: cs.heroImage,
}));

export default function CaseStudies({ showLabel = true }) {
  const [api, setApi] = useState(null);
  const [current, setCurrent] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  useEffect(() => {
    if (!api) return;
    const onSelect = () => setCurrent(api.selectedScrollSnap());
    const onInit = () => {
      setScrollSnaps(api.scrollSnapList());
      setCurrent(api.selectedScrollSnap());
    };
    onInit();
    api.on("select", onSelect);
    api.on("reInit", onInit);
    return () => {
      api.off("select", onSelect);
      api.off("reInit", onInit);
    };
  }, [api]);

  useEffect(() => {
    if (!api) return;
    const id = window.setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        api.scrollTo(0);
      }
    }, 3000);
    return () => window.clearInterval(id);
  }, [api]);

  return (
    <section 
      id="case-studies" 
      data-testid="case-studies-section" 
      className="relative overflow-hidden bg-gradient-to-br from-[#F4F5F7] via-[#FFFFFF] to-[#E9F0FC] py-10 sm:py-12 border-y border-slate-100"
    >
      {/* Decorative High-Tech Background Glows */}
      <div className="absolute right-[-100px] top-[-50px] w-[450px] h-[450px] rounded-full bg-blue-300/15 blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute left-[-150px] bottom-[-50px] w-[500px] h-[500px] rounded-full bg-indigo-200/15 blur-[135px] -z-10 pointer-events-none" />

      <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14 z-10">
        <div className="mb-6 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-end lg:gap-10">
          <div className="max-w-xl lg:max-w-none">
            {showLabel && (
              <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.15em] text-[#0052CC]">
                Coverage
              </p>
            )}
            <h2 className="text-2xl font-black tracking-tight text-[#172B4D] sm:text-3xl lg:text-4xl uppercase">
              Coverage Across
              <br />
              <span className="text-[#0052CC]">{TRACEFOLD} scenarios</span>
            </h2>
          </div>
          <div className="max-w-md lg:ml-auto lg:text-right">
            <p className="mb-3 text-xs sm:text-sm leading-relaxed text-[#42526E] font-medium">
              {TRACEFOLD} patterns are representative narratives, not completed client projects. Use them to see how we approach problems like yours, then contact us to scope something concrete.
            </p>
            <Link
              to="/case-studies"
              className="inline-flex items-center gap-1 text-xs sm:text-sm font-bold text-[#0052CC] hover:text-[#0065FF] underline decoration-[#0052CC]/30 hover:decoration-[#0065FF] underline-offset-4 transition-colors"
            >
              View all projects
              <span aria-hidden className="text-base ml-0.5">
                ›
              </span>
            </Link>
          </div>
        </div>

        <div>
          <Carousel
            setApi={setApi}
            opts={{ align: "start", loop: true, duration: 28 }}
            className="w-full"
          >
            <CarouselContent className="-ml-3">
              {slides.map((cs) => (
                <CarouselItem
                  key={cs.slug}
                  className="pl-3 basis-[82%] sm:basis-1/2 md:basis-[38%] lg:basis-[31%] xl:basis-[31%]"
                >
                  <Link
                    to={`/case-studies/${cs.slug}`}
                    className="group block"
                    data-testid={`case-study-card-${cs.slug}`}
                  >
                    <div className="overflow-hidden rounded-xl border border-slate-200/80 bg-white shadow-[0_4px_20px_rgba(9,30,66,0.04)] group-hover:shadow-[0_15px_45px_rgba(9,30,66,0.08)] group-hover:border-blue-200 transition-all duration-300 flex flex-col h-full">
                      {/* Image Block */}
                      <div className="relative h-[150px] sm:h-[170px] w-full overflow-hidden bg-slate-50 border-b border-slate-100">
                        <img
                          src={cs.image}
                          alt=""
                          className="h-full w-full object-cover transition-all duration-700 ease-out group-hover:scale-105"
                          loading="lazy"
                          draggable={false}
                        />
                      </div>
                      
                      {/* Integrated Text Block */}
                      <div className="p-4 sm:p-5 flex flex-col flex-1 bg-white">
                        <p className="mb-1 text-[9px] font-black uppercase tracking-widest text-[#0052CC]">
                          IT Solution
                        </p>
                        <h3 className="text-sm sm:text-base font-black leading-snug tracking-tight text-[#172B4D] group-hover:text-[#0052CC] transition-colors line-clamp-2 min-h-[44px]">
                          {cs.title}
                        </h3>
                      </div>
                    </div>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          <div className="mt-6 flex justify-center gap-2">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`Go to slide ${index + 1}`}
                onClick={() => api?.scrollTo(index)}
                className={`rounded-full border transition-all duration-300 ${
                  current === index
                    ? "h-2 w-6 border-[#0052CC] bg-[#0052CC]"
                    : "h-2 w-2 border-slate-300 bg-transparent hover:bg-slate-100"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
