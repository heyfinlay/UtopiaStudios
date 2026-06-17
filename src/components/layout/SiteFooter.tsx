import Link from "next/link";
import { BrandMark } from "@/components/ui/BrandMark";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/5 bg-[#141313] px-6 py-20 text-sm text-[#c5c7c9] md:px-20">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-between gap-8 md:flex-row">
        <div className="flex flex-col items-center gap-3 md:items-start">
          <div className="flex flex-col items-center gap-3 sm:flex-row md:items-start">
            <BrandMark className="h-14 w-14" />
            <p className="text-3xl font-medium tracking-[-0.02em] text-white">
              Temporary Utopia
            </p>
          </div>
          <p className="eyebrow">
            © 2026 Temporary Utopia. Creative systems for trust, conversion,
            and follow-through.
          </p>
        </div>
        <nav className="flex flex-wrap justify-center gap-8 font-mono text-[12px] font-medium uppercase tracking-[0.1em]">
          <Link href="/contact" className="hover:text-white">
            Contact
          </Link>
          <Link href="/privacy" className="hover:text-white">
            Privacy
          </Link>
          <Link href="/terms" className="hover:text-white">
            Terms
          </Link>
        </nav>
      </div>
    </footer>
  );
}
