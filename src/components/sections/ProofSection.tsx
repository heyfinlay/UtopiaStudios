import { GlassCard } from "@/components/ui/GlassCard";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

export function ProofSection() {
  return (
    <SectionWrapper>
      <GlassCard className="grid gap-8 p-7 sm:p-10 lg:grid-cols-[.8fr_1.2fr]">
        <div>
          <p className="eyebrow">Proof library</p>
          <h2 className="section-title mt-5 text-3xl font-semibold sm:text-5xl">
            Add real results when they exist.
          </h2>
        </div>
        <div className="grid gap-3 sm:grid-cols-3">
          {[
            "Journey before/after",
            "Response-time improvement",
            "Conversion and retention evidence",
          ].map((item) => (
            <div
              key={item}
              className="rounded-xl border border-dashed border-white/15 p-5 text-sm leading-6 text-[#929aa7]"
            >
              {item}
              <br />
              <span className="text-xs text-[#646d7a]">
                Case study placeholder
              </span>
            </div>
          ))}
        </div>
      </GlassCard>
    </SectionWrapper>
  );
}
