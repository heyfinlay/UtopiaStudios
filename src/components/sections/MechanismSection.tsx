import { Map, Search, Grid2X2, Wrench, RefreshCcw } from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/ButtonLink";

const icons = [Map, Search, Grid2X2, Wrench, RefreshCcw];
export function MechanismSection({
  steps,
}: {
  steps: Array<{ title: string; body: string }>;
}) {
  return (
    <SectionWrapper id="mechanism">
      <Reveal className="text-center">
        <p className="eyebrow">Our system</p>
        <h2 className="section-title mt-5 text-4xl font-semibold sm:text-6xl">
          The Customer Journey Revenue System
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-[#aeb5c0]">
          A practical system for improving how customers enquire, book, buy,
          follow up, and come back.
        </p>
      </Reveal>
      <div className="relative mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
        <div className="absolute left-[8%] right-[8%] top-10 hidden h-px bg-gradient-to-r from-transparent via-[#8580ff] to-transparent lg:block" />
        {steps.map((step, index) => {
          const Icon = icons[index];
          return (
            <Reveal
              key={step.title}
              delay={index * 0.07}
              className="relative text-center"
            >
              <div className="glass mx-auto flex h-20 w-20 items-center justify-center rounded-full text-[#a19dff]">
                <Icon />
              </div>
              <p className="mt-5 text-xs text-[#8f8aff]">0{index + 1}</p>
              <h3 className="mt-2 font-semibold">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-[#959daa]">
                {step.body}
              </p>
            </Reveal>
          );
        })}
      </div>
      <Reveal className="glass mt-14 flex flex-col items-start justify-between gap-6 rounded-[20px] p-6 sm:flex-row sm:items-center sm:p-8">
        <div>
          <h3 className="text-xl font-semibold">
            Start with a free Revenue Leak Map.
          </h3>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-[#9fa6b2]">
            We will review the current journey, identify likely gaps, and show
            the first system we would fix.
          </p>
        </div>
        <ButtonLink href="/#revenue-leak-map-form" className="shrink-0">
          Request a Free Leak Map
        </ButtonLink>
      </Reveal>
    </SectionWrapper>
  );
}
