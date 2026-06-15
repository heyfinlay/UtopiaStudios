import { cn } from "@/lib/utils/cn";

export function GlassCard({
  className,
  children,
}: React.PropsWithChildren<{ className?: string }>) {
  return <div className={cn("glass rounded-3xl", className)}>{children}</div>;
}
