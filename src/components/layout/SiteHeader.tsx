"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { cn } from "@/lib/utils/cn";

const links = [
  ["Systems", "/customer-journey-revenue-system"],
  ["Process", "/customer-journey-revenue-system#mechanism"],
  ["Portfolio", "/objection-hub"],
  ["Studio", "/"],
];

export function SiteHeader({
  compact = false,
  withAnnouncement = false,
}: {
  compact?: boolean;
  withAnnouncement?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;
      const movingDown = currentY > lastScrollY.current;

      setScrolled(currentY > 24);
      setHidden(movingDown && currentY > 180 && !open);
      lastScrollY.current = Math.max(currentY, 0);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [open]);

  return (
    <header
      className={cn(
        "fixed left-0 z-50 w-full px-3 transition-all duration-300 ease-out md:px-6",
        hidden && "-translate-y-[130%] opacity-0",
        scrolled ? "top-3" : withAnnouncement ? "top-8 sm:top-9" : "top-3",
      )}
    >
      <div
        className={cn(
          "glass mx-auto flex h-16 max-w-[1440px] items-center justify-between border-white/10 bg-[#141313]/58 px-4 backdrop-blur-2xl md:h-[72px] md:px-10",
          scrolled
            ? "rounded-full shadow-[0_16px_80px_rgba(0,0,0,0.38),0_0_44px_rgba(105,190,255,0.08)]"
            : "rounded-none border-x-0 border-t-0",
        )}
      >
        <Link
          href="/"
          className="flex items-center gap-3 text-[15px] font-semibold tracking-[-.03em] text-[#e5e2e1] sm:text-xl md:text-2xl"
        >
          <span className="grid h-8 w-8 place-items-center rounded-sm border border-cyan-100/25 bg-white/[.03] font-mono text-[11px] shadow-[0_0_24px_rgba(125,220,255,0.08)] md:h-9 md:w-9 md:text-xs">
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
                className="transition hover:text-[#ffffff] hover:drop-shadow-[0_0_12px_rgba(125,220,255,0.35)]"
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
        <nav className="glass absolute left-4 right-4 top-[4.75rem] flex flex-col rounded-3xl p-4 text-sm md:hidden">
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
