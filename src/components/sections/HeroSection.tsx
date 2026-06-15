import {
  ArrowDown,
  CheckCircle2,
  CreditCard,
  CalendarDays,
  Mail,
  RefreshCw,
} from "lucide-react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { GlassCard } from "@/components/ui/GlassCard";
import { Reveal } from "@/components/ui/Reveal";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

const nodes = [
  { label: "Enquiry", copy: "Capture interest clearly.", icon: Mail },
  { label: "Booking", copy: "Make the next step easy.", icon: CalendarDays },
  { label: "Purchase", copy: "Remove decision friction.", icon: CreditCard },
  { label: "Follow-up", copy: "Keep momentum moving.", icon: CheckCircle2 },
  { label: "Repeat", copy: "Create a reason to return.", icon: RefreshCw },
];

export function HeroSection({
  hero,
}: {
  hero: {
    eyebrow: string;
    headline: string;
    subheadline: string;
    primaryCta: string;
    secondaryCta: string;
    support: string;
  };
}) {
  return (
    <SectionWrapper className="grid min-h-[560px] items-center gap-12 !py-12 lg:grid-cols-[1.02fr_.98fr] lg:!py-10">
      <Reveal>
        <p className="eyebrow">{hero.eyebrow}</p>
        <h1 className="display text-gradient mt-6 max-w-3xl text-[clamp(3.2rem,4.8vw,4.5rem)] font-semibold">
          {hero.headline}
        </h1>
        <p className="mt-7 max-w-2xl text-base leading-7 text-[#b2b8c3] sm:text-lg sm:leading-8">
          {hero.subheadline}
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/apply">{hero.primaryCta}</ButtonLink>
          <ButtonLink href="#vsl" variant="secondary">
            {hero.secondaryCta}
          </ButtonLink>
        </div>
        <p className="mt-5 flex max-w-xl items-start gap-2 text-xs leading-5 text-[#89919e] sm:text-sm">
          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#8e89ff]" />
          {hero.support}
        </p>
      </Reveal>
      <Reveal delay={0.15} className="relative min-h-[430px]">
        <div className="absolute left-[8%] top-[12%] h-[70%] w-[80%] rounded-full border border-[#7772ff]/35 blur-[1px]" />
        <div className="absolute left-[18%] top-[24%] h-[45%] w-[65%] rounded-full bg-[#7772ff]/10 blur-[65px]" />
        <div className="relative grid grid-cols-2 gap-4 pt-8 sm:grid-cols-6">
          {nodes.map((node, index) => {
            const Icon = node.icon;
            const positions = [
              "sm:col-span-3 sm:col-start-1",
              "sm:col-span-3 sm:col-start-4 sm:mt-10",
              "sm:col-span-3 sm:col-start-3",
              "sm:col-span-3 sm:col-start-1 sm:-mt-2",
              "sm:col-span-3 sm:col-start-4 sm:-mt-8",
            ];
            return (
              <GlassCard
                key={node.label}
                className={`relative z-10 min-h-36 p-5 transition duration-500 hover:-translate-y-1 hover:border-[#9995ff]/45 ${positions[index]}`}
              >
                <Icon className="h-5 w-5 text-[#a7a4ff]" />
                <p className="mt-6 text-xs font-semibold uppercase tracking-[.16em]">
                  {node.label}
                </p>
                <p className="mt-2 text-xs leading-5 text-[#969eaa]">
                  {node.copy}
                </p>
              </GlassCard>
            );
          })}
        </div>
      </Reveal>
      <a
        href="#vsl"
        aria-label="Scroll to video"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 text-[#717987] lg:block"
      >
        <ArrowDown className="h-5 w-5" />
      </a>
    </SectionWrapper>
  );
}
