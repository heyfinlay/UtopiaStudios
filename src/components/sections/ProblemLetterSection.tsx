import { Reveal } from "@/components/ui/Reveal";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

export function ProblemLetterSection() {
  return (
    <SectionWrapper className="grid gap-12 border-y border-white/[.07] lg:grid-cols-[.8fr_1.2fr]">
      <Reveal>
        <p className="eyebrow">The problem</p>
        <h2 className="section-title mt-6 text-4xl font-semibold sm:text-6xl">
          Dear Business Owner, Your Customer Journey Might Be Leaking Revenue
          Every Day.
        </h2>
        <p className="mt-7 max-w-md text-lg leading-8 text-[#aeb5c0]">
          You have built a real business. But even good businesses lose revenue
          when the journey is broken.
        </p>
      </Reveal>
      <Reveal
        delay={0.1}
        className="space-y-6 self-center text-base leading-8 text-[#b2b8c3] sm:text-lg"
      >
        <p>
          If customers are enquiring, clicking, booking, buying, or asking
          questions — but your systems are slow, disconnected, unclear, or
          manual — there is a good chance revenue is slipping through the
          cracks.
        </p>
        <p>
          You do not need another random software subscription. You do not need
          to automate everything. You do not need someone promising to replace
          your team.
        </p>
        <p className="text-white">
          You need to understand the exact points where customers are dropping
          off and fix the journey around them.
        </p>
      </Reveal>
    </SectionWrapper>
  );
}
