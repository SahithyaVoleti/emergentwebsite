import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { MapPin, Clock, Briefcase, ChevronDown, ChevronUp, Award, Coffee, BookOpen, Heart, Globe, Users } from "lucide-react";
import { CONTACT_TOPIC, contactFormTo } from "../lib/contactIntent";
import PageHero from "../components/PageHero";
import UbuntuStatsStrip from "../components/ubuntu/UbuntuStatsStrip";
import UbuntuListingSection from "../components/ubuntu/UbuntuListingSection";
import UbuntuFeaturesBand from "../components/ubuntu/UbuntuFeaturesBand";
import PageStandardSections from "../components/ubuntu/PageStandardSections";
import SitePageMain from "../components/ubuntu/SitePageMain";
import careers from "../data/careers";

function JobCard({ job }) {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <div
      data-testid={`job-card-${job.id}`}
      className="overflow-hidden border border-[#d9d9d9] bg-white"
    >
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls={`job-details-${job.id}`}
        className="flex w-full items-start justify-between gap-4 p-6 text-left transition-colors hover:bg-[#fafafa] sm:p-8"
      >
        <div>
          <h3 className="text-base font-medium text-[#111]">{job.title}</h3>
          <p className="mt-1 text-sm text-[#666]">{job.department}</p>
          <div className="mt-3 flex flex-wrap gap-4 text-xs text-[#666]">
            <span className="inline-flex items-center gap-1">
              <MapPin size={12} aria-hidden /> {job.location}
            </span>
            <span className="inline-flex items-center gap-1">
              <Clock size={12} aria-hidden /> {job.type}
            </span>
            <span className="inline-flex items-center gap-1">
              <Briefcase size={12} aria-hidden /> {job.experience}
            </span>
          </div>
        </div>
        {open ? (
          <ChevronUp size={20} className="shrink-0 text-[#666]" aria-hidden />
        ) : (
          <ChevronDown size={20} className="shrink-0 text-[#666]" aria-hidden />
        )}
      </button>
      {open && (
        <div id={`job-details-${job.id}`} className="border-t border-[#e5e5e5] px-6 pb-8 pt-6 sm:px-8">
          <p className="mb-6 text-sm leading-relaxed text-[#555]">{job.description}</p>
          <h4 className="mb-3 text-xs font-semibold uppercase tracking-wide text-[#111]">
            Responsibilities
          </h4>
          <ul className="mb-6 space-y-2">
            {job.responsibilities.map((r) => (
              <li key={r} className="flex items-start gap-2 text-sm text-[#555]">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-[#8b1538]" aria-hidden />
                {r}
              </li>
            ))}
          </ul>
          <h4 className="mb-3 text-xs font-semibold uppercase tracking-wide text-[#111]">
            Requirements
          </h4>
          <ul className="mb-6 space-y-2">
            {job.requirements.map((r) => (
              <li key={r} className="flex items-start gap-2 text-sm text-[#555]">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-[#ccc]" aria-hidden />
                {r}
              </li>
            ))}
          </ul>
          <Link
            data-testid={`apply-btn-${job.id}`}
            to={contactFormTo(location.pathname, CONTACT_TOPIC.CONTACT)}
            className="ubuntu-btn-primary inline-flex border-0 text-sm"
          >
            Apply for this role
          </Link>
        </div>
      )}
    </div>
  );
}

const perks = [
  { icon: Coffee, title: "Modern stack", desc: "Hands-on work with current AI and cloud tooling on production-oriented programs." },
  { icon: Globe, title: "Remote-first", desc: "Distributed team with coordinated hours and clear communication norms." },
  { icon: BookOpen, title: "Professional development", desc: "Learning allocation for certifications, conferences, and structured mentorship." },
  { icon: Heart, title: "Compensation and benefits", desc: "Market-informed packages with health benefits and paid time off; equity where applicable." },
  { icon: Users, title: "Senior peers", desc: "Collaborate directly with experienced engineers, scientists, and delivery leads." },
  { icon: Award, title: "Measurable impact", desc: "Contributions tied to shipped releases, client milestones, and operational outcomes." },
];

export default function CareersPage() {
  const departments = [...new Set(careers.map((j) => j.department))];
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? careers : careers.filter((j) => j.department === filter);

  return (
    <SitePageMain>
      <PageHero
        label="Careers"
        title="Build Your Practice in Enterprise AI Delivery"
        description="Join delivery programs that emphasize production discipline, stakeholder communication, and accountable outcomes across research, engineering, and operations."
        primaryCTA={{ text: "View open positions", href: "#positions" }}
        illustrationKey="careers"
      />

      <UbuntuStatsStrip
        stats={[
          { value: "2026", label: "Founded Jan 12" },
          { value: "Remote-first", label: "Distributed hiring" },
          { value: "Senior-led", label: "Direct technical leadership" },
          { value: "Pilot-based", label: "Scoped customer work" },
        ]}
      />

      <UbuntuFeaturesBand
        eyebrow="Assurance"
        title="Assurance for your career here"
        lead="Benefits and working norms we aim to maintain as the team scales delivery capacity."
        variant="alt"
        items={perks}
      />

      <UbuntuListingSection
        id="positions"
        eyebrow="Coverage"
        title="Coverage across open positions"
        lead={`${careers.length} open roles across ${departments.length} departments. Filter by department or expand a role for details.`}
      >
        <div className="mb-8 flex flex-wrap gap-2">
          <button
            type="button"
            data-testid="filter-all"
            onClick={() => setFilter("All")}
            className={`px-4 py-2 text-sm font-medium transition-colors ${
              filter === "All"
                ? "bg-[#8b1538] text-white"
                : "border border-[#d9d9d9] bg-white text-[#555] hover:border-[#8b1538]"
            }`}
          >
            All
          </button>
          {departments.map((d) => (
            <button
              key={d}
              type="button"
              data-testid={`filter-${d.toLowerCase()}`}
              onClick={() => setFilter(d)}
              className={`px-4 py-2 text-sm font-medium transition-colors ${
                filter === d
                  ? "bg-[#8b1538] text-white"
                  : "border border-[#d9d9d9] bg-white text-[#555] hover:border-[#8b1538]"
              }`}
            >
              {d}
            </button>
          ))}
        </div>
        <div className="space-y-4">
          {filtered.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </UbuntuListingSection>

      <PageStandardSections pageKey="careers" contactContext="Careers - Job Application" />
    </SitePageMain>
  );
}
