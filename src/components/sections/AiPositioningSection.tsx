import { Sparkles } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Reveal } from "@/components/ui/Reveal";

export function AiPositioningSection({ items }: { items: string[] }) {
  return (
    <SectionWrapper className="grid items-center gap-12 border-y border-white/[.07] lg:grid-cols-2">
      <Reveal>
        <p className="eyebrow">Practical AI</p>
        <h2 className="section-title mt-6 text-4xl font-semibold sm:text-6xl">
          This Is Not About Replacing Your Team With AI.
        </h2>
        <p className="mt-7 text-lg leading-8 text-[#aeb5c0]">
          AI is useful when it improves speed, clarity, consistency, and
          customer experience. It is damaging when it makes your business feel
          robotic, careless, or generic. Temporary Utopia uses AI as part of the
          system — not as the entire solution.
        </p>
      </Reveal>
      <Reveal delay={0.1}>
        <GlassCard className="p-6 sm:p-8">
          <p className="mb-5 flex items-center gap-3 text-xs uppercase tracking-[.18em] text-[#b8b5ff]">
            <Sparkles className="h-4 w-4" />
            Useful applications
          </p>
          <div className="grid gap-x-6 sm:grid-cols-2">
            {items.map((item) => (
              <div
                key={item}
                className="border-b border-white/[.08] py-3.5 text-sm text-[#d3d7df]"
              >
                {item}
              </div>
            ))}
          </div>
        </GlassCard>
      </Reveal>
    </SectionWrapper>
  );
}
