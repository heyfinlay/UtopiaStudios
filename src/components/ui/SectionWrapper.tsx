import { cn } from "@/lib/utils/cn";

export function SectionWrapper({
  id,
  className,
  children,
}: React.PropsWithChildren<{ id?: string; className?: string }>) {
  return (
    <section
      id={id}
      className={cn(
        "relative mx-auto w-full max-w-[1280px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28",
        className,
      )}
    >
      {children}
    </section>
  );
}
