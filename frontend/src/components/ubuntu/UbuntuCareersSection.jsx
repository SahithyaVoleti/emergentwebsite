import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Award,
  BookOpen,
  Briefcase,
  ChevronDown,
  ChevronUp,
  Clock,
  Coffee,
  Globe,
  Heart,
  MapPin,
  Users,
} from "lucide-react";
import { CONTACT_TOPIC, contactFormTo } from "../../lib/contactIntent";
import UbuntuFeaturesBand from "./UbuntuFeaturesBand";
import UbuntuListingSection from "./UbuntuListingSection";
import careers from "../../data/careers";
import { SECTION_LABEL } from "../../data/sectionLabels";

const perks = [
  { icon: Coffee, title: "Modern stack", desc: "Hands-on work with current AI and cloud tools on production programs." },
  { icon: Globe, title: "Remote-first", desc: "Distributed team with set hours and clear communication norms." },
  { icon: BookOpen, title: "Professional development", desc: "Learning budget for certifications, conferences, and mentorship." },
  { icon: Heart, title: "Compensation and benefits", desc: "Market-based packages with health benefits and paid time off; equity where applicable." },
  { icon: Users, title: "Senior peers", desc: "Work directly with experienced engineers, scientists, and delivery leads." },
  { icon: Award, title: "Measurable impact", desc: "Contributions tied to production releases, client milestones, and operational outcomes." },
];

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
        className="flex w-full items-start justify-between gap-4 p-6 text-left transition-colors hover:bg-white sm:p-8"
      >
        <div>
          <h3 className="text-base font-medium text-[#2d2d2d]">{job.title}</h3>
          <p className="mt-1 text-sm text-[#6b6b6b]">{job.department}</p>
          <div className="mt-3 flex flex-wrap gap-4 text-xs text-[#6b6b6b]">
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
          <ChevronUp size={20} className="shrink-0 text-[#6b6b6b]" aria-hidden />
        ) : (
          <ChevronDown size={20} className="shrink-0 text-[#6b6b6b]" aria-hidden />
        )}
      </button>
      {open && (
        <div className="border-t border-[#e5e5e5] px-6 pb-8 pt-6 sm:px-8">
          <p className="mb-6 text-sm leading-relaxed text-[#7d8597]">{job.description}</p>
          <h4 className="mb-3 text-xs font-semibold uppercase tracking-wide text-[#2d2d2d]">
            Responsibilities
          </h4>
          <ul className="mb-6 space-y-2">
            {job.responsibilities.map((r) => (
              <li key={r} className="flex items-start gap-2 text-sm text-[#7d8597]">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-[#5c5c5c]" aria-hidden />
                {r}
              </li>
            ))}
          </ul>
          <h4 className="mb-3 text-xs font-semibold uppercase tracking-wide text-[#2d2d2d]">
            Requirements
          </h4>
          <ul className="mb-6 space-y-2">
            {job.requirements.map((r) => (
              <li key={r} className="flex items-start gap-2 text-sm text-[#7d8597]">
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

export default function UbuntuCareersSection({
  id = "careers",
  showPerks = true,
  className = "",
}) {
  const departments = [...new Set(careers.map((j) => j.department))];
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? careers : careers.filter((j) => j.department === filter);

  return (
    <>
      {showPerks && (
        <UbuntuFeaturesBand
          eyebrow={SECTION_LABEL.careers}
          title="Benefits and working norms"
          lead="Benefits and working norms we maintain as the team grows."
          variant="alt"
          items={perks}
          className={className}
        />
      )}

      <UbuntuListingSection
        id={id}
        eyebrow={SECTION_LABEL.careers}
        title="Open positions"
        lead={`${careers.length} open roles across ${departments.length} departments. Filter by department or expand a role for details.`}
      >
        <div className="mb-8 flex flex-wrap gap-2">
          <button
            type="button"
            data-testid="filter-all"
            onClick={() => setFilter("All")}
            className={`px-4 py-2 text-sm font-medium transition-colors ${
              filter === "All"
                ? "bg-[#5c5c5c] text-white"
                : "border border-[#d9d9d9] bg-white text-[#7d8597] hover:border-[#5c5c5c]"
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
                  ? "bg-[#5c5c5c] text-white"
                  : "border border-[#d9d9d9] bg-white text-[#7d8597] hover:border-[#5c5c5c]"
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
    </>
  );
}
