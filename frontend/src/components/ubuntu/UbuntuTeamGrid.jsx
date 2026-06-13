import { Linkedin, Twitter, Users } from "lucide-react";
import { Link } from "react-router-dom";
import UbuntuListingSection from "./UbuntuListingSection";
import { COMPANY_SOCIAL } from "../../lib/company";

export default function UbuntuTeamGrid({
  members = [],
  id = "team-grid",
  eyebrow = "Coverage",
  title = "Coverage across delivery roles",
  lead = "Roles typically engaged on workstreams so conversations stay with people authorized to change scope and priorities.",
  className = "!border-t-0",
  showJoinStrip = false,
}) {
  return (
    <>
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
              {(member.linkedin || member.twitter) && (
                <div className="mt-4 flex gap-3 text-[#666]">
                  {member.linkedin ? (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${member.name} on LinkedIn`}
                      className="hover:text-[#8b1538]"
                    >
                      <Linkedin size={16} aria-hidden />
                    </a>
                  ) : null}
                  {member.twitter ? (
                    <a
                      href={member.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${member.name} on Twitter`}
                      className="hover:text-[#8b1538]"
                    >
                      <Twitter size={16} aria-hidden />
                    </a>
                  ) : null}
                </div>
              )}
            </article>
          ))}
        </div>
      </UbuntuListingSection>
      {showJoinStrip && (
        <section className="ubuntu-section-block border-b border-[#d9d9d9] bg-[#fafafa]">
          <div className="ubuntu-container flex flex-col items-start justify-between gap-4 py-8 sm:flex-row sm:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#666]">Join us</p>
              <p className="mt-2 text-lg font-medium text-[#111]">Early team · high ownership</p>
              <p className="mt-1 text-sm text-[#555]">
                We are hiring engineers and delivery leads for pilot-scoped programs.
              </p>
            </div>
            <Link to="/careers" className="ubuntu-btn-primary border-0 text-sm">
              View open roles
            </Link>
          </div>
        </section>
      )}
    </>
  );
}
