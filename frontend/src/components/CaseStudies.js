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

function CaseStudyMockup({ slug }) {
  if (slug === "ai-video-creation") {
    return (
      <div className="w-full h-full bg-[#07132B] p-3 flex flex-col justify-between text-white font-mono text-[9px] select-none overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/40 via-transparent to-transparent pointer-events-none" />
        <div className="flex items-center justify-between border-b border-slate-800 pb-1.5 shrink-0">
          <span className="text-[#0052CC] font-bold">AVATAR GENERATOR v2.4</span>
          <span className="bg-[#36B37E]/20 text-[#36B37E] px-1.5 py-0.5 rounded text-[8px] font-bold">78% COMPLETED</span>
        </div>
        <div className="flex-1 flex items-center gap-2 py-2 min-h-0">
          {/* Waveform graphic */}
          <div className="flex-1 flex flex-col justify-center gap-1 h-full">
            <span className="text-slate-400 text-[8px]">TTS SPEECH SYNTH</span>
            <div className="flex items-end gap-0.5 h-6">
              {[30, 60, 45, 90, 75, 40, 65, 80, 50, 95, 35, 70].map((h, i) => (
                <div key={i} className="bg-[#2684FF] w-[3px] rounded-t-sm" style={{ height: `${h}%` }} />
              ))}
            </div>
          </div>
          {/* Avatar box */}
          <div className="w-10 h-10 rounded border border-slate-800 bg-slate-900/80 flex items-center justify-center shrink-0">
            <svg className="w-6 h-6 text-slate-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
        </div>
        <div className="border-t border-slate-800 pt-1.5 shrink-0 flex items-center justify-between text-slate-400 text-[8px]">
          <span>RENDER TIME: 1.4s</span>
          <span>FPS: 60.0</span>
        </div>
      </div>
    );
  }

  if (slug === "smart-teaching-platform") {
    return (
      <div className="w-full h-full bg-[#07132B] p-3 flex flex-col justify-between text-white font-mono text-[9px] select-none overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-900/40 via-transparent to-transparent pointer-events-none" />
        <div className="flex items-center justify-between border-b border-slate-800 pb-1.5 shrink-0">
          <span className="text-[#2684FF] font-bold">EDUCATOR WORKSPACE</span>
          <span className="text-slate-400">PLANNER v1.0</span>
        </div>
        <div className="flex-1 flex gap-2 py-2 min-h-0 items-center">
          {/* Progress graph */}
          <div className="flex-1 h-full flex flex-col justify-between">
            <div className="flex justify-between items-center text-slate-400 text-[8px]">
              <span>CURRICULUM ALIGN</span>
              <span className="text-[#36B37E] font-bold">96%</span>
            </div>
            <div className="w-full bg-slate-900 rounded-full h-2 overflow-hidden border border-slate-800">
              <div className="bg-[#36B37E] h-full rounded-full" style={{ width: "96%" }} />
            </div>
            <div className="flex gap-1 text-[7px] text-slate-500">
              <span className="bg-slate-900 px-1 rounded border border-slate-800">QUIZ</span>
              <span className="bg-slate-900 px-1 rounded border border-slate-800">RUBRIC</span>
              <span className="bg-slate-900 px-1 rounded border border-slate-800">FERPA</span>
            </div>
          </div>
          {/* Mini checklist card */}
          <div className="w-12 bg-slate-900/80 border border-slate-800 rounded p-1.5 shrink-0 flex flex-col gap-1">
            <div className="w-full bg-[#36B37E]/20 h-1 rounded" />
            <div className="w-3/4 bg-slate-800 h-1 rounded" />
            <div className="w-full bg-[#2684FF]/20 h-1 rounded" />
            <div className="w-1/2 bg-slate-800 h-1 rounded" />
          </div>
        </div>
        <div className="border-t border-slate-800 pt-1.5 shrink-0 text-slate-400 text-[8px]">
          <span>GATES: HUMAN-IN-THE-LOOP ACTIVE</span>
        </div>
      </div>
    );
  }

  if (slug === "ai-astrology-app") {
    return (
      <div className="w-full h-full bg-[#07132B] p-3 flex flex-col justify-between text-white font-mono text-[9px] select-none overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-900/40 via-transparent to-transparent pointer-events-none" />
        <div className="flex items-center justify-between border-b border-slate-800 pb-1.5 shrink-0">
          <span className="text-[#FF5630] font-bold">CONSUMER TELEMETRY</span>
          <span className="bg-[#FF5630]/20 text-[#FF5630] px-1.5 py-0.5 rounded text-[8px] font-bold">SAFETY OK</span>
        </div>
        <div className="flex-1 flex gap-2 py-2 min-h-0 items-center">
          {/* Glowing charts */}
          <div className="flex-1 h-full flex flex-col justify-between">
            <span className="text-slate-400 text-[8px]">DAU CONCURRENCY</span>
            <div className="relative flex-1 flex items-end">
              <svg className="w-full h-8 text-[#FF5630]" viewBox="0 0 100 30" fill="none">
                <path d="M0,25 Q15,10 30,22 T60,5 T90,18 T100,8" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
                <path d="M0,25 Q15,10 30,22 T60,5 T90,18 T100,8 L100,30 L0,30 Z" fill="currentColor" fillOpacity={0.08} />
              </svg>
            </div>
          </div>
          {/* Latency card */}
          <div className="w-14 bg-slate-900/80 border border-slate-800 rounded p-1.5 shrink-0 flex flex-col justify-center items-center gap-0.5">
            <span className="text-slate-500 text-[6px] uppercase">LATENCY</span>
            <span className="text-[#FF5630] font-bold text-[10px]">85ms</span>
            <span className="text-slate-400 text-[6px]">99.9% uptime</span>
          </div>
        </div>
        <div className="border-t border-slate-800 pt-1.5 shrink-0 text-slate-400 text-[8px] flex justify-between">
          <span>SAFE-GENERATION PASSED</span>
          <span>MODERATION: ON</span>
        </div>
      </div>
    );
  }

  // ai-trip-planner
  return (
    <div className="w-full h-full bg-[#07132B] p-3 flex flex-col justify-between text-white font-mono text-[9px] select-none overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cyan-900/40 via-transparent to-transparent pointer-events-none" />
      <div className="flex items-center justify-between border-b border-slate-800 pb-1.5 shrink-0">
        <span className="text-[#00B8D9] font-bold">ORCHESTRATION LAYER</span>
        <span className="bg-[#00B8D9]/20 text-[#00B8D9] px-1.5 py-0.5 rounded text-[8px] font-bold">4 SYNCED APIs</span>
      </div>
      <div className="flex-1 flex gap-2 py-2 min-h-0 items-center">
        {/* Node network map */}
        <div className="flex-1 h-full relative flex items-center justify-center">
          <svg className="w-full h-full text-slate-700" viewBox="0 0 80 40">
            <line x1="15" y1="20" x2="40" y2="10" stroke="currentColor" strokeWidth={1} strokeDasharray="2,2" />
            <line x1="15" y1="20" x2="40" y2="30" stroke="currentColor" strokeWidth={1} strokeDasharray="2,2" />
            <line x1="40" y1="10" x2="65" y2="20" stroke="currentColor" strokeWidth={1} />
            <line x1="40" y1="30" x2="65" y2="20" stroke="currentColor" strokeWidth={1} />
            <circle cx="15" cy="20" r="4" fill="#0052CC" />
            <circle cx="40" cy="10" r="4" fill="#00B8D9" />
            <circle cx="40" cy="30" r="4" fill="#36B37E" />
            <circle cx="65" cy="20" r="4" fill="#FF5630" />
          </svg>
        </div>
        {/* API Latency Card */}
        <div className="w-12 bg-slate-900/80 border border-slate-800 rounded p-1 flex flex-col justify-between h-full">
          <div className="flex justify-between items-center text-[7px]">
            <span className="text-slate-500">MAPS</span>
            <span className="text-[#36B37E]">12ms</span>
          </div>
          <div className="flex justify-between items-center text-[7px]">
            <span className="text-slate-500">PRIC</span>
            <span className="text-[#36B37E]">24ms</span>
          </div>
          <div className="flex justify-between items-center text-[7px]">
            <span className="text-slate-500">AUTH</span>
            <span className="text-[#36B37E]">8ms</span>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-800 pt-1.5 shrink-0 text-slate-400 text-[8px] flex justify-between">
        <span>RESOLVED: 100% TRUTH</span>
        <span>CACHE: 94.2% HIT</span>
      </div>
    </div>
  );
}

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
                      {/* Live Mockup Dashboard / Diagram */}
                      <div className="relative h-[150px] sm:h-[170px] w-full overflow-hidden border-b border-slate-100 shrink-0">
                        <CaseStudyMockup slug={cs.slug} />
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
