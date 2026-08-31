"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type NavItem = {
  href: string;
  label: string;
};

type MobileNavProps = {
  navItems: NavItem[];
  whatsappHref: string;
};

export function MobileNav({ navItems, whatsappHref }: MobileNavProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="relative flex h-10 w-10 items-center justify-center rounded-full border border-white/10"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
      >
        <span className="relative block h-4 w-5">
          <span
            className={`absolute left-0 top-0 block h-0.5 w-5 bg-white transition duration-200 ${
              open ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`absolute left-0 top-[7px] block h-0.5 w-5 bg-white transition duration-200 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute left-0 top-[14px] block h-0.5 w-5 bg-white transition duration-200 ${
              open ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </span>
      </button>

      {open ? (
        <div
          id="mobile-nav-panel"
          className="fixed inset-x-0 top-[65px] z-40 border-b border-[#3AA0C8]/20 bg-black"
        >
          <nav className="flex flex-col px-6 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-white/5 py-3 text-base font-medium text-slate-200 transition hover:text-[#3AA0C8]"
              >
                {item.label}
              </Link>
            ))}

            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-4 rounded-full bg-[#F15A24] px-4 py-3 text-center text-sm font-semibold text-black transition hover:bg-[#FF6A3A]"
            >
              Book Now
            </a>
          </nav>
        </div>
      ) : null}
    </div>
  );
}
