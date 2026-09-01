import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { site } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Message Swake Freedivers Siquijor through WhatsApp, Instagram, Facebook, or email.",
  alternates: { canonical: `${site.baseUrl}/contact` },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Message us via{" "}
            <span className="text-[#25D366]">WhatsApp</span>,{" "}
            <span className="text-[#E4405F]">Instagram</span>, or{" "}
            <span className="text-[#1877F2]">Facebook</span>{" "}
            to book a session or ask about availability.
          </>
        }
      />
      <section className="mx-auto max-w-5xl px-6 py-14 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-[#3AA0C8]/20 bg-[#050505] p-8">
            <h2 className="text-2xl font-semibold text-white">Direct channels</h2>

            <div className="mt-5 grid gap-4 text-sm text-slate-300">
              <a
                href={site.contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-[#3AA0C8]/20 bg-black/60 p-4 transition hover:border-[#3AA0C8] hover:bg-black"
              >
                <span className="text-[#25D366]">WhatsApp:</span> {site.contact.phone}
              </a>

              <a
                href={site.contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-[#3AA0C8]/20 bg-black/60 p-4 transition hover:border-[#3AA0C8] hover:bg-[#E4405F]/20"
              >
                <span className="text-[#E4405F]">Instagram:</span> @swakefreedivers_siquijor
              </a>

              <a
                href={site.contact.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-[#3AA0C8]/20 bg-black/60 p-4 transition hover:border-[#3AA0C8] hover:bg-[#1877F2]/20"
              >
                <span className="text-[#1877F2]">Facebook:</span> @SwakeFreediversSiquijor
              </a>

              <a
                href={`mailto:${site.contact.email}`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-[#3AA0C8]/20 bg-black/60 p-4 transition hover:border-[#3AA0C8] hover:bg-[#1877F2]/20"
              >
                {site.contact.email}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
