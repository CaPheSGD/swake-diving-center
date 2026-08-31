import Link from "next/link";
import { CtaStrip } from "@/components/cta-strip";
import { LocalBusinessJsonLd } from "@/components/local-business-jsonld";
import { PageHero } from "@/components/page-hero";
import { ServiceCard } from "@/components/service-card";
import { services, site } from "@/lib/site-data";

export default function HomePage() {
  return (
    <>
      <LocalBusinessJsonLd />

      <PageHero
        title={
          <>
            <span className="font-bold text-cyan-300">Freediving in{" "}</span>
            <span className="font-bold text-[#F15A24]">Siquijor</span>
          </>
        }
        description="for first-timers and experienced divers, with focus on safety, comfort, technique, and steady progress."
        image={{
          src: "/images/hero.webp",
          alt: "Freediver gliding over a coral reef in Siquijor",
        }}
      />

      <section className="mx-auto max-w-6xl px-6 py-14 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">
              What we offer
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white">
              Intro classes, line training, guided fundives, and Molchanovs courses.
            </h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {site.trustPoints?.map((point) => (
                <div
                  key={point}
                  className="rounded-2xl border border-white/10 bg-slate-900/70 p-4 text-sm text-slate-300"
                >
                  {point}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-cyan-400/15 to-slate-900 p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">
              Location
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white">
              {site.location.area}
            </h2>
            <p className="mt-4 text-sm leading-6 font-medium text-[#F15A24] tracking-wide">
              {site.location.note}
            </p>
            <div className="mt-2 space-y-3 text-sm text-slate-200">
              <p>Community: {site.name}</p>
              <p>Business name: {site.legalName}</p>
              <p>Phone: {site.contact.phone}</p>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={site.contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                Book on WhatsApp
              </a>
              <Link
                href="/locations/siquijor"
                className="rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-white"
              >
                View Location Page
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-6 lg:px-8 lg:py-10">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">
              Services
            </p>
          </div>
          <Link
            href="/services"
            className="hidden text-sm font-semibold text-cyan-300 md:block"
          >
            View all services
          </Link>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-10">
        <div className="grid gap-4 sm:grid-cols-3">
          <Link
            href="/about"
            className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center transition hover:bg-white/10"
          >
            <h3 className="text-base font-semibold text-white">About Us</h3>
          </Link>
          <Link
            href="/faq"
            className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center transition hover:bg-white/10"
          >
            <h3 className="text-base font-semibold text-white">FAQ</h3>
          </Link>
          <Link
            href="/contact"
            className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center transition hover:bg-white/10"
          >
            <h3 className="text-base font-semibold text-white">Contact Us</h3>
          </Link>
        </div>
      </section>

      <CtaStrip />
    </>
  );
}
