import { useState, useRef, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import solutions from "../data/solutions";

const DISPLAY = solutions.slice(0, 3);

const TAB_LABELS = ["Delivery scope", "Integrations", "Architecture"];

const ALT_IMAGES = [
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=960&q=80",
  "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=960&q=80",
];

function tabBullets(solution, tabIdx) {
  const features = solution.features || [];
  const tech = solution.tech || [];
  const useCases = solution.useCases || [];
  if (tabIdx === 0) {
    return features.slice(0, 5).map((x) => x.title);
  }
  if (tabIdx === 1) {
    return tech.slice(0, 6);
  }
  return useCases.slice(0, 5);
}

function tabImage(solution, tabIdx) {
  if (tabIdx === 0) return solution.heroImage;
  return ALT_IMAGES[(tabIdx - 1) % ALT_IMAGES.length];
}

function SolutionCard({ solution }) {
  const [tab, setTab] = useState(0);
  const bullets = tabBullets(solution, tab);

  return (
    <article className="flex h-full min-h-0 flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white text-[#172B4D] shadow-[0_10px_35px_rgba(9,30,66,0.06)]">
      <div className="grid min-h-0 flex-1 grid-cols-1 gap-0 lg:grid-cols-2 lg:gap-0">
        <div className="flex min-h-0 flex-col justify-between p-5 sm:p-6 lg:p-8 bg-[#FAFBFC] border-r border-slate-100">
          <div className="min-h-0 flex-1 overflow-y-auto lg:overflow-visible">
            <h3 className="mb-2 text-[#172B4D] text-lg sm:text-xl font-bold tracking-tight">{solution.title}</h3>
            <p className="mb-4 text-xs leading-relaxed text-[#42526E] sm:text-sm">{solution.shortDesc}</p>
            <ul className="space-y-2">
              {bullets.map((line) => (
                <li key={line} className="flex gap-2.5 text-xs sm:text-sm text-[#42526E]">
                  <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#0052CC]/10">
                    <Check className="h-2.5 w-2.5 text-[#0052CC]" strokeWidth={3} aria-hidden />
                  </span>
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-5 shrink-0 border-t border-slate-200/80 pt-4">
            <div className="flex flex-wrap gap-2" role="tablist" aria-label={`${solution.title} focus areas`}>
              {TAB_LABELS.map((label, idx) => (
                <button
                  key={label}
                  type="button"
                  role="tab"
                  aria-selected={tab === idx}
                  onClick={() => setTab(idx)}
                  className={`rounded-[4px] px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider transition-all sm:text-xs ${
                    tab === idx 
                      ? "bg-[#0052CC] text-white shadow-sm" 
                      : "text-[#42526E] hover:bg-slate-200/60 hover:text-[#172B4D]"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
            <Link
              to={`/solutions/${solution.slug}`}
              className="mt-4 inline-flex text-xs sm:text-sm font-bold text-[#0052CC] hover:text-[#0065FF] underline underline-offset-4 decoration-[#0052CC]/30 hover:decoration-[#0065FF] transition-all"
            >
              View solution details →
            </Link>
          </div>
        </div>

        <div className="relative min-h-[160px] shrink-0 bg-white sm:min-h-[200px] lg:min-h-0 lg:h-full flex items-center justify-center p-4">
          <img
            key={`${solution.slug}-${tab}`}
            src={tabImage(solution, tab)}
            alt=""
            className="h-full max-h-[240px] w-full object-contain lg:absolute lg:inset-0 lg:max-h-none lg:p-6"
          />
        </div>
      </div>
    </article>
  );
}

export default function SolutionsSection({ showLabel = true }) {
  const [active, setActive] = useState(0);
  const [pauseHover, setPauseHover] = useState(false);
  const touchStartX = useRef(null);

  const count = DISPLAY.length;

  const go = useCallback(
    (dir) => {
      setActive((i) => {
        const next = i + dir;
        if (next < 0) return count - 1;
        if (next >= count) return 0;
        return next;
      });
    },
    [count]
  );

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || pauseHover) return;
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % count);
    }, 5000);
    return () => window.clearInterval(id);
  }, [pauseHover, count]);

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e) => {
    if (touchStartX.current == null) return;
    const dx = touchStartX.current - e.changedTouches[0].clientX;
    touchStartX.current = null;
    if (Math.abs(dx) < 48) return;
    if (dx > 0) go(1);
    else go(-1);
  };

  return (
    <section id="solutions" data-testid="solutions-section" className="overflow-hidden bg-white py-10 sm:py-12 text-slate-900 border-b border-slate-100">
      <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
        <header className="mb-6 max-w-3xl text-left">
          {showLabel && (
            <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.15em] text-[#0052CC]">Enterprise Templates</p>
          )}
          <h2
            className="mb-2 text-[#172B4D] text-2xl sm:text-3xl font-extrabold tracking-tight uppercase"
          >
            Production-Ready <span className="text-[#0052CC]">AI Solution Accelerators</span>
          </h2>
          <p className="text-xs sm:text-sm leading-relaxed text-[#42526E]">
            Deploy pre-governed, domain-specific AI foundations designed to integrate seamlessly with your corporate data controls and operational workflows.
          </p>
        </header>

        <div
          className="relative mx-auto max-w-6xl"
          onMouseEnter={() => setPauseHover(true)}
          onMouseLeave={() => setPauseHover(false)}
        >
          <div
            className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_20px_50px_rgba(9,30,66,0.08)] h-[550px] sm:h-[480px] lg:h-[400px]"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <div
              className="flex flex-row transition-transform duration-500 ease-out motion-reduce:transition-none w-full h-full"
              style={{ transform: `translateX(-${active * 100}%)` }}
            >
              {DISPLAY.map((s) => (
                <div
                  key={s.slug}
                  className="w-full h-full shrink-0 overflow-hidden px-0 pb-0"
                >
                  <SolutionCard solution={s} />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 flex flex-col items-center gap-4">
            <div className="flex justify-center gap-2">
              {DISPLAY.map((s, i) => (
                <button
                  key={s.slug}
                  type="button"
                  aria-label={`Show ${s.title}`}
                  aria-current={active === i}
                  onClick={() => setActive(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    active === i ? "w-6 bg-[#0052CC]" : "w-2 bg-slate-200 hover:bg-slate-300"
                  }`}
                />
              ))}
            </div>
            <p className="text-center text-[10px] text-slate-400 font-bold uppercase tracking-wider">Swipe left or right to explore</p>
          </div>
        </div>
      </div>
    </section>
  );
}
