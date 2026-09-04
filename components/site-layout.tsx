import Link from "next/link";
import Image from "next/image";
import { MobileNav } from "@/components/mobile-nav";
import { site } from "@/lib/site-data";

type SiteLayoutProps = {
  children: React.ReactNode;
};

const navItems = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/locations/siquijor", label: "Location" },
  { href: "/faq", label: "FAQ" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-0 right-0 z-0 h-72 w-full bg-[#F15A24]/20 blur-[100px]"
      />

      <header className="sticky top-0 z-30 border-b border-[#3AA0C8]/20 bg-black/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4 lg:px-8">
          <Link href="/" className="flex min-w-0 items-center gap-3">
            <Image
              src="/Swake-05.png"
              alt="Swake Freedivers Siquijor logo"
              width={40}
              height={40}
              className="h-10 w-10 object-contain"
              priority
            />

            <div className="min-w-0 leading-tight">
              <p className="truncate text-sm font-semibold uppercase tracking-[0.24em] text-[#3AA0C8]">
                Swake
              </p>
              <p className="truncate text-xs text-slate-400">
                Freedivers Siquijor
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-5 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-slate-300 transition hover:text-[#3AA0C8]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={site.contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#F15A24] px-4 py-2 text-sm font-semibold text-black transition hover:bg-[#FF6A3A]"
            >
              Book Now
            </a>

            <MobileNav navItems={navItems} whatsappHref={site.contact.whatsapp} />
          </div>
        </div>
      </header>

      <main>{children}</main>

      <footer className="border-t border-[#3AA0C8]/20 bg-black">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-10 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#3AA0C8]">
              {site.name}
            </p>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-400">
              {site.description}
            </p>
            <p className="mt-4 text-sm text-slate-500">
              Legal business name: {site.legalName}
            </p>
          </div>

          <div className="grid gap-3 text-sm text-slate-300">
            <a
              href={site.contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-[#3AA0C8]"
            >
              WhatsApp: {site.contact.phone}
            </a>
            <a
              href={site.contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-[#3AA0C8]"
            >
              Instagram
            </a>
            <a
              href={site.contact.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-[#3AA0C8]"
            >
              Facebook
            </a>
            <a
              href={`mailto:${site.contact.email}`}
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-[#3AA0C8]"
            >
              {site.contact.email}
            </a>
            <p className="text-slate-500">{site.location.area}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
