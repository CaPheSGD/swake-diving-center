import Link from "next/link";
import Image from "next/image";
import type { ServiceSummary } from "@/lib/site-data";

type ServiceCardProps = {
  service: ServiceSummary;
};

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article className="overflow-hidden rounded-3xl border border-[#3AA0C8]/20 bg-[#050505] transition hover:border-[#3AA0C8]/40">
      <div className="relative aspect-[16/10]">
        <Image
          src={service.image}
          alt={service.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
      </div>

      <div className="p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#3AA0C8]">
          {service.priceLabel}
        </p>

        <h2 className="mt-2 text-2xl font-semibold text-white">
          {service.title}
        </h2>

        <p className="mt-3 text-sm leading-6 text-slate-300">
          {service.summary}
        </p>

        <div className="mt-5">
          <Link
            href={service.href}
            className="inline-flex rounded-full bg-[#F15A24] px-4 py-2 text-sm font-semibold text-black transition hover:bg-[#FF6A3A]"
          >
            {service.ctaLabel}
          </Link>
        </div>
      </div>
    </article>
  );
}
