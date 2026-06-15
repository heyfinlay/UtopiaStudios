"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { ButtonLink } from "@/components/ui/ButtonLink";

const links = [
  ["Systems", "/customer-journey-revenue-system"],
  ["Process", "/customer-journey-revenue-system#mechanism"],
  ["Portfolio", "/objection-hub"],
  ["Studio", "/"],
];

export function SiteHeader({ compact = false }: { compact?: boolean }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed left-0 top-11 z-50 w-full transition-transform duration-300">
      <div className="glass mx-auto flex h-20 max-w-[1440px] items-center justify-between rounded-none border-x-0 border-t-0 bg-[#141313]/40 px-6 backdrop-blur-md md:px-20">
        <Link
          href="/"
          className="flex items-center gap-3 text-[15px] font-semibold tracking-[-.03em] text-[#e5e2e1] sm:text-2xl"
        >
          <span className="grid h-9 w-9 place-items-center rounded-sm border border-white/20 font-mono text-xs">
            TU
          </span>
          <span>Temporary Utopia</span>
        </Link>
        {!compact && (
          <nav className="hidden items-center gap-6 text-base text-[#c5c7c9] md:flex">
            {links.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                className="transition hover:text-[#ffffff]"
              >
                {label}
              </Link>
            ))}
          </nav>
        )}
        <div className="hidden md:block">
          <ButtonLink href="/apply" className="min-h-10 px-6 py-2.5 text-sm">
            Book Audit
          </ButtonLink>
        </div>
        <button
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="rounded-full p-2 text-[#e5e2e1] md:hidden"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="glass absolute left-6 right-6 top-[5.5rem] flex flex-col rounded-3xl p-4 text-sm md:hidden">
          {links.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="border-b border-white/10 px-2 py-4 text-[#e5e2e1]"
            >
              {label}
            </Link>
          ))}
          <ButtonLink href="/apply" className="mt-4">
            Book an audit call
          </ButtonLink>
        </nav>
      )}
    </header>
  );
}
