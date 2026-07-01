import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export function AnnouncementBar({ text }: { text: string }) {
  return (
    <div
      data-announcement-bar
      className="relative z-[60] flex h-8 w-full items-center justify-center overflow-hidden border-b border-cyan-200/10 bg-[#1b1919]/95 px-4 text-center font-mono text-[9px] font-medium uppercase tracking-[0.18em] text-[#d8d5d4] shadow-[0_1px_24px_rgba(105,190,255,0.08)] sm:h-9 sm:text-[10px]"
    >
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-200/45 to-transparent" />
      <Link
        href="/#revenue-leak-map-form"
        className="inline-flex max-w-full items-center gap-2 whitespace-nowrap"
      >
        <span className="hidden h-1.5 w-1.5 rounded-full bg-cyan-200 shadow-[0_0_16px_rgba(125,220,255,0.9)] sm:inline-block" />
        <Sparkles className="h-3 w-3 shrink-0 text-cyan-100/80" />
        <span className="truncate">{text}</span>
        <span className="hidden text-cyan-100/70 sm:inline">
          Get leak map
        </span>
        <ArrowRight className="h-3 w-3 shrink-0 text-cyan-100/80" />
      </Link>
    </div>
  );
}
