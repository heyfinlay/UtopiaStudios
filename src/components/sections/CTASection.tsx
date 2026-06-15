import { ButtonLink } from "@/components/ui/ButtonLink";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

export function CTASection({
  title = "Start With a Customer Journey Audit Call.",
  body = "A focused fit call to understand your current journey, identify obvious leaks, and determine whether a paid Customer Journey Audit makes sense.",
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
          <ButtonLink href="/apply" className="mt-8">
            Book Your Customer Journey Audit Call
          </ButtonLink>
        </div>
      </GlassCard>
    </SectionWrapper>
  );
}
