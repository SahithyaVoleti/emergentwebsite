import { Linkedin, Twitter, Users } from "lucide-react";
import UbuntuListingSection from "./UbuntuListingSection";
import { SECTION_LABEL } from "../../data/sectionLabels";

export default function UbuntuTeamGrid({
  members = [],
  id = "team-grid",
  eyebrow = SECTION_LABEL.team,
  title = "Delivery roles",
  lead = "Roles typically engaged on workstreams so conversations stay with people authorized to change scope and priorities.",
  className = "!border-t-0",
}) {
  return (
    <UbuntuListingSection id={id} eyebrow={eyebrow} title={title} lead={lead} className={className}>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {members.map((member) => (
          <article
            key={member.name}
            className="flex h-full flex-col border border-[#d9d9d9] bg-white p-6"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center bg-[#111] text-white">
              <Users size={22} strokeWidth={1.5} aria-hidden />
            </div>
            <h3 className="text-lg font-medium text-[#111]">{member.name}</h3>
            <p className="mt-1 text-sm font-medium text-[#8b1538]">{member.role}</p>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-[#555]">{member.bio}</p>
            <div className="mt-4 flex gap-3 text-[#666]">
              <Linkedin size={16} aria-hidden className="hover:text-[#8b1538]" />
              <Twitter size={16} aria-hidden className="hover:text-[#8b1538]" />
            </div>
          </article>
        ))}
      </div>
    </UbuntuListingSection>
  );
}
