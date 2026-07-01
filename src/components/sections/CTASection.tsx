import { ButtonLink } from "@/components/ui/ButtonLink";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

export function CTASection({
  title = "Get Your Free Revenue Leak Map.",
  body = "Answer a few questions so Temporary Utopia can review where your current lead-to-customer journey may be leaking and what to fix first.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <SectionWrapper>
      <GlassCard className="relative overflow-hidden p-8 text-center sm:p-14">
        <div className="absolute inset-x-[20%] -top-28 h-52 rounded-full bg-[#7772ff]/20 blur-[80px]" />
        <div className="relative">
          <h2 className="section-title mx-auto max-w-4xl text-4xl font-semibold sm:text-6xl">
            {title}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl leading-7 text-[#aeb5c0]">
            {body}
          </p>
          <ButtonLink href="/#revenue-leak-map-form" className="mt-8">
            Get My Free Revenue Leak Map
          </ButtonLink>
        </div>
      </GlassCard>
    </SectionWrapper>
  );
}
