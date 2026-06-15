import { Check, X } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { Reveal } from "@/components/ui/Reveal";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

export function ForNotForSection({
  forList,
  notForList,
}: {
  forList: string[];
  notForList: string[];
}) {
  return (
    <SectionWrapper>
      <Reveal className="mx-auto max-w-3xl text-center">
        <p className="eyebrow">Fit matters</p>
        <h2 className="section-title mt-5 text-4xl font-semibold sm:text-6xl">
          Built for businesses with demand, not fantasies.
        </h2>
      </Reveal>
      <div className="mt-12 grid gap-5 lg:grid-cols-2">
        <Reveal>
          <GlassCard className="h-full p-6 sm:p-8">
            <h3 className="text-xl font-semibold">
              This is likely for you if...
            </h3>
            <ul className="mt-5 space-y-4">
              {forList.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-sm leading-6 text-[#c0c6cf]"
                >
                  <Check className="mt-1 h-4 w-4 shrink-0 text-[#73d9b0]" />
                  {item}
                </li>
              ))}
            </ul>
          </GlassCard>
        </Reveal>
        <Reveal delay={0.08}>
          <GlassCard className="h-full p-6 sm:p-8">
            <h3 className="text-xl font-semibold">
              This is not designed for...
            </h3>
            <ul className="mt-5 space-y-4">
              {notForList.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-sm leading-6 text-[#c0c6cf]"
                >
                  <X className="mt-1 h-4 w-4 shrink-0 text-[#ff8998]" />
                  {item}
                </li>
              ))}
            </ul>
          </GlassCard>
        </Reveal>
      </div>
    </SectionWrapper>
  );
}
