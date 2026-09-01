import type { Metadata } from "next";
import { CtaStrip } from "@/components/cta-strip";
import { Gallery } from "@/components/gallery";
import { PageHero } from "@/components/page-hero";
import { courseCards } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Molchanovs Courses",
  description:
    "Molchanovs certification courses in Siquijor for divers building safer technique and deeper comfort.",
  alternates: { canonical: "/services/courses" },
};

export default function CoursesPage() {
  const courseGallery = courseCards.flatMap((course) => course.gallery);

  return (
    <>
      <PageHero
        eyebrow="Courses"
        title="Molchanovs Certification Courses"
        description="Structured training for divers building a safer foundation, better technique, and more depth comfort."
        kicker="Wave 1 and Wave 2"
      />

      {courseGallery.length > 0 && <Gallery images={courseGallery} />}

      <section className="mx-auto max-w-6xl px-6 py-14 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          {courseCards.map((course) => (
            <div
              key={course.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-8"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">
                {course.duration}
              </p>
              <h2 className="mt-3 text-2xl font-bold text-white">
                {course.title}
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                {course.summary}
              </p>
              <p className="mt-4 text-sm font-semibold text-cyan-300">
                {course.price}
              </p>

              <div className="mt-6">
                <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-200">
                  Requirements
                </h3>
                <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-300">
                  {course.requirements.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-6">
                <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-200">
                  Highlights
                </h3>
                <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-300">
                  {course.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              {course.note && (
                <p className="mt-6 text-sm leading-6 text-slate-300">
                  {course.note}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      <CtaStrip />
    </>
  );
}
