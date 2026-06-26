import { Linkedin, Twitter, Users } from "lucide-react";
import UbuntuListingSection from "./UbuntuListingSection";
import { SECTION_LABEL } from "../../data/sectionLabels";
import { paletteAccent, paletteAccentIndex } from "../../lib/brandPalette";

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
        {members.map((member, index) => (
          <article
            key={member.name}
            data-palette-accent={paletteAccentIndex(index)}
            className="flex h-full flex-col border border-[#d9d9d9] bg-white p-6"
          >
            <div className="ubuntu-palette-icon mb-4 flex h-12 w-12 items-center justify-center">
              <Users size={22} strokeWidth={1.5} aria-hidden />
            </div>
            <h3 className="text-lg font-medium text-[#2d2d2d]">{member.name}</h3>
            <p className="mt-1 text-sm font-medium" style={{ color: paletteAccent(index) }}>
              {member.role}
            </p>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-[#7d8597]">{member.bio}</p>
            <div className="mt-4 flex gap-3 text-[#6b6b6b]">
              <Linkedin size={16} aria-hidden className="hover:text-[#4a4a4a]" />
              <Twitter size={16} aria-hidden className="hover:text-[#4a4a4a]" />
            </div>
          </article>
        ))}
      </div>
    </UbuntuListingSection>
  );
}
