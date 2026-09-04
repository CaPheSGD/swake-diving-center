import Image from "next/image";
import type { TeamMember } from "@/lib/site-data";
import { ExpandableBio } from "@/components/expandable-bio";

type TeamSectionProps = {
  members: TeamMember[];
};

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");
}

export function TeamSection({ members }: TeamSectionProps) {
  if (members.length === 0) return null;

  return (
    <section className="mx-auto max-w-5xl px-6 pb-14 lg:px-8">
      <h2 className="text-xl font-semibold text-white">Meet the team</h2>

      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {members.map((member) => (
          <div
            key={member.name}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center"
          >
            <div className="relative mx-auto h-24 w-24 overflow-hidden rounded-full border border-[#3AA0C8]/30 bg-black/60">
              {member.image ? (
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="96px"
                  className="object-cover"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center text-lg font-semibold text-[#3AA0C8]">
                  {initials(member.name)}
                </div>
              )}
            </div>

            <p className="mt-4 text-base font-semibold text-white">
              {member.name}
            </p>
            <p className="text-sm text-[#F15A24]">{member.role}</p>
            {member.certification ? (
              <p className="mt-1 text-xs uppercase tracking-[0.15em] text-slate-400">
                {member.certification}
              </p>
            ) : null}

            <ExpandableBio bio={member.bio} />
          </div>
        ))}
      </div>
    </section>
  );
}
