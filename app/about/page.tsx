import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { TeamSection } from "@/components/team-section";
import { site, team } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Swake Freedivers Siquijor and its approach to freediving.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="A personal, mindfulness, and safety-first approach to freediving in Siquijor"
        description=""
      />

      <section className="mx-auto max-w-5xl px-6 py-14 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">

          {/* Identity / Philosophy */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-semibold text-white">
              Local, guided, and safety-first
            </h2>
            <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-300">
              <li>• Small, intimate classes and openwater sessions</li>
              <li>• Focus on technique, comfort, and long-term progression</li>
              <li>• Local knowledge of reefs, currents, and visibility</li>
              <li>• Local knowledge of site conditions</li>
            </ul>
          </div>

          {/* Description */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm leading-7 text-slate-300">
              Swake is a community built around freediving, the ocean, and the people who share it.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Before Swake was a school, it was a group of people who loved diving — day-job workers,
              graveyard-shift staff,  freelancers, plane mechanic, artists, government employees,
              marine ecologists, bantay dagat volunteers, social workers, and weekend sport enthusiasts,
              each with different lives but the same Saturday plan: 2–3 hours in open water, line
              training or a fundive, whenever the week allowed.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              At some point, one of the members got freediving certification just to guide the sessions
              properly: safe, comfortable, and properly. Others followed.
              Members' certifications kept upgrading, and what had been an informal meetup started to
              take real shape, with people formally sharing the experience to newcomers and visitors.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              The group kept growing, and the goal became clearer: adherence to standardized freediving
              education for locals — including the marine sanctuary guides, so they could offer safe
              snorkeling and fundive sessions for visitors on the island. The group pooled resources to
              help one of their own through full instructor training and certification. That decision is
              a big part of why Swake can now provide genuinely affordable certification courses to local
              and international freedivers alike.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Today, Swake is a local freediving center in Siquijor offering Molchanovs Wave 1–3 certification,
              intro classes,  fundive adventures, and regular training sessions. The group dynamics is
              exactly why the idea that nothing in the ocean exists on its own is foundational to how we teach.
              We aim to promote sustainable freediving while sharing our passion for mindfulness, marine
              conservation, community, and personal growth through self-challenge.
            </p>

            <p className="mt-4 text-sm leading-7 text-slate-300">
              We are in these waters most days, we know how the sites  change with the season, tide, current,
              light, and waves, and we plan every session around these conditions, personal and paced.
            </p>
          </div>

        </div>
      </section>

      <TeamSection members={team} />
    </>
  );
}
