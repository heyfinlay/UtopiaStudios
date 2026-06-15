import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function AnnouncementBar({ text }: { text: string }) {
  return (
    <div className="relative z-[60] flex w-full justify-center border-b border-white/5 bg-[#2a2a2a] px-6 py-3 text-center font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-[#c5c7c9] sm:text-xs">
      <Link href="/apply" className="inline-flex items-center gap-2">
        {text}
        <ArrowRight className="hidden h-3.5 w-3.5 sm:block" />
      </Link>
    </div>
  );
}
