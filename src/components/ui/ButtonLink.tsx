import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils/cn";

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
}: React.PropsWithChildren<{
  href: string;
  variant?: "primary" | "secondary";
  className?: string;
}>) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex min-h-12 items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition duration-300 hover:-translate-y-0.5",
        variant === "primary"
          ? "rounded-full bg-[#e5e2e1] text-[#1c1b1b] shadow-none hover:brightness-110"
          : "rounded-full border border-white/15 bg-white/[.045] text-[#e5e2e1] backdrop-blur hover:bg-white/[.08]",
        className,
      )}
    >
      {children}
      <ArrowRight className="h-4 w-4" />
    </Link>
  );
}
