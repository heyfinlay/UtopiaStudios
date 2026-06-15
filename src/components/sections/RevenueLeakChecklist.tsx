import { Check } from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Reveal } from "@/components/ui/Reveal";

export function RevenueLeakChecklist({ items }: { items: string[] }) {
  return (
    <SectionWrapper className="grid gap-12 lg:grid-cols-[.7fr_1.3fr]">
      <Reveal>
        <p className="eyebrow">Leak diagnosis</p>
        <h2 className="section-title mt-6 text-4xl font-semibold sm:text-6xl">
          The Revenue Leaks Are Usually Hiding in Boring Places.
        </h2>
        <p className="mt-6 max-w-md leading-7 text-[#aab1bd]">
          The expensive problems are often ordinary handovers, delays, missing
          messages, and unclear next steps.
        </p>
      </Reveal>
      <Reveal delay={0.1}>
        <ul className="grid sm:grid-cols-2">
          {items.map((item) => (
            <li
              key={item}
              className="flex items-center gap-3 border-b border-white/[.08] py-4 text-sm text-[#d8dce3]"
            >
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#8883ff]/55 text-[#a7a4ff]">
                <Check className="h-3.5 w-3.5" />
              </span>
              {item}
            </li>
          ))}
        </ul>
      </Reveal>
    </SectionWrapper>
  );
}
