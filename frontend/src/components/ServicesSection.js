import { Brain, Bot, Code2, Smartphone, Users, Database, GitBranch, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";
import { SERVICES_HERO_IMAGES } from "../lib/heroImageThemes";

const services = [
  {
    icon: Brain,
    title: "Artificial Intelligence",
    slug: "artificial-intelligence",
    desc: "We transform your data into smart, automated decisions by embedding AI into your daily operations, helping your business run faster and more profitably.",
    image: SERVICES_HERO_IMAGES[0],
  },
  {
    icon: Bot,
    title: "Generative AI",
    slug: "generative-ai",
    desc: "Move beyond chatbots with AI services that power secure copilots and agents, delivering governed, domain-specific reasoning and automated workflows.",
    image: SERVICES_HERO_IMAGES[1],
  },
  {
    icon: Code2,
    title: "Custom Software",
    slug: "custom-software",
    desc: "Custom software that architects secure, AI-native platforms, modernizes legacy systems, and automates complex workflows for scalable operations.",
    image: SERVICES_HERO_IMAGES[2],
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    slug: "mobile-apps",
    desc: "Give your customers premium AI-driven experiences with custom mobile development that runs smoothly on any device and feels effortless.",
    image: SERVICES_HERO_IMAGES[3],
  },
  {
    icon: Users,
    title: "AI Agent Development",
    slug: "ai-agents",
    desc: "Autonomous agents that reason, act, and assist humans across dynamic workflows, from strategy consulting to full deployment.",
    image: SERVICES_HERO_IMAGES[4],
  },
  {
    icon: Database,
    title: "LLM Development",
    slug: "llm-development",
    desc: "Enterprise-grade large language models with secure, contextual intelligence for smarter applications and decision-making systems.",
    image: SERVICES_HERO_IMAGES[5],
  },
  {
    icon: GitBranch,
    title: "DevOps",
    slug: "devops",
    desc: "Speed up releases and keep systems running smoothly with DevOps services that connect development and operations using smart pipelines.",
    image: SERVICES_HERO_IMAGES[6],
  },
  {
    icon: BarChart3,
    title: "Data Engineering",
    slug: "data-engineering",
    desc: "Turn fragmented data into trusted insights, enabling analytics-ready intelligence for real-time, strategic enterprise decisions.",
    image: SERVICES_HERO_IMAGES[7],
  },
];

export default function ServicesSection() {
  return (
    <section id="services" data-testid="services-section" className="py-20 sm:py-24 md:py-32 corp-pat-dots">
      <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
        <div className="max-w-2xl mb-16">
          <p className="text-xs font-semibold text-[#2563EB] uppercase tracking-widest mb-4">
            Services
          </p>
          <h2
            data-testid="services-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0B1B3D] mb-4"
            style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
          >
            AI Development Services for Real-World Impact
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Navigate through the current tech-driven landscape and foster long-term growth with custom AI solutions.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <Link
              to={`/services/${s.slug}`}
              key={s.title}
              data-testid={`service-card-${s.title.toLowerCase().replace(/\s/g, "-")}`}
              className="group relative isolate min-h-[300px] sm:min-h-[320px] overflow-hidden rounded-sm border border-slate-200/80 shadow-sm hover:border-slate-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 cursor-pointer flex flex-col"
            >
              <img
                src={s.image}
                alt=""
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                loading="lazy"
              />
              {/* Neutral darkening only — keeps photos vivid, text readable at bottom */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/[0.92] via-black/50 to-black/15"
                aria-hidden
              />
              <div
                className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"
                aria-hidden
              />
              <div className="relative z-10 flex min-h-[300px] sm:min-h-[320px] flex-col justify-between p-8">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-white/30 bg-black/25 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.5)] backdrop-blur-md transition-all duration-300 group-hover:border-white/45 group-hover:bg-black/35">
                  <s.icon size={26} className="text-white drop-shadow-sm" strokeWidth={1.75} />
                </div>
                <div className="pt-8">
                  <h3
                    className="text-lg font-bold text-white mb-3 tracking-tight drop-shadow-md"
                    style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
                  >
                    {s.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/95 [text-shadow:0_2px_20px_rgba(0,0,0,0.75),0_1px_3px_rgba(0,0,0,0.9)]">
                    {s.desc}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
