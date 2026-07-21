import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { site } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Swake Freedivers Siquijor and its local, safety-first approach to freediving.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="A local, safety-first approach to freediving in Siquijor"
        description="Personal, guided sessions shaped by local conditions, focused on safety, technique, and a calm learning pace."
      />

      <section className="mx-auto max-w-5xl px-6 py-14 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
      
          {/* Identity / Philosophy */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-semibold text-white">
              Local, guided, and safety-first
            </h2>
            <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-300">
              <li>• Small, guided classes and openwater sessions</li>
              <li>• Real time conditions-based dive planning</li>
              <li>• Focus on technique, comfort, and long-term progression</li>
              <li>• Local knowledge of reefs, currents, and visibility</li>
            </ul>
          </div>
      
          {/* Description */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm leading-7 text-slate-300">
              Swake Freedivers Siquijor is a local freediving center in Siquijor.
              We aim to promote sustainable freediving while sharing our passion for 
              mindfulness, peace, community, and personal growth through self-competition.
              From first-time intro sessions to line training, certification courses,
              and guided dives, we keep each session personal, paced, and
              grounded in the environment.
            </p>
      
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Being locals in Siquijor shapes how we dive. We work in these sites
              daily, understand how they change, and plan each session based on
              conditions.
            </p>
          </div>
      
        </div>
      </section>
    </>
  );
}
