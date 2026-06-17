import type { Metadata } from "next";
import { ArrowUpRight, Check, Gauge, Radio, Star } from "lucide-react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { FloatingBackground } from "@/components/ui/FloatingBackground";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { GlassCard } from "@/components/ui/GlassCard";
import { Reveal } from "@/components/ui/Reveal";
import { CTASection } from "@/components/sections/CTASection";
import { BrandMark } from "@/components/ui/BrandMark";
import { homepage } from "@/content/funnels/homepage";

export const metadata: Metadata = {
  title: "Temporary Utopia | Creative Systems Studio",
  description:
    "Temporary Utopia is a creative systems studio building aerospace-inspired brand direction, customer journeys, and practical marketing systems.",
};

const businessTypes = [
  "Premium clinics",
  "Dental practices",
  "Cosmetic and wellness studios",
  "Home service operators",
  "Boutique fitness brands",
  "Consultants and advisors",
  "High-ticket local services",
  "Experience-led venues",
];

const successSignals = [
  ["Direction", "Sharper creative systems that make a business easier to trust."],
  ["Conversion", "Clearer paths from first impression to enquiry, booking, or purchase."],
  ["Operations", "Follow-up and CRM structure that reduces lost momentum."],
];

const proofPoints = [
  "Positioning and campaign direction for service brands",
  "Landing pages and funnels built around real customer decisions",
  "Customer journey audits that turn messy touchpoints into a fix list",
  "Automation that supports staff without making the experience feel robotic",
];

export default function HomePage() {
  return (
    <>
      <FloatingBackground />
      <SiteHeader />
      <main>
        <SectionWrapper className="grid min-h-[680px] items-center gap-12 !pt-36 lg:grid-cols-[1fr_.9fr] lg:!pt-40">
          <Reveal>
            <p className="eyebrow">1980s aerospace creative systems studio</p>
            <h1 className="display text-gradient mt-6 text-[clamp(3rem,6vw,5.9rem)] font-semibold">
              {homepage.hero.title}
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-[#c2c7d0] md:text-lg">
              {homepage.hero.body}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/customer-journey-revenue-system">
                Explore the flagship system
              </ButtonLink>
              <ButtonLink href="#about" variant="secondary">
                Meet the studio
              </ButtonLink>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <GlassCard className="relative min-h-[450px] overflow-hidden p-6">
              <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-cyan-100/45 to-transparent" />
              <div className="relative flex h-full min-h-[398px] flex-col justify-between">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="eyebrow text-cyan-100/80">Flight deck</p>
                    <p className="mt-3 max-w-xs text-sm leading-6 text-[#aeb5c0]">
                      Brand direction, customer journey architecture, and
                      practical marketing systems coordinated from one console.
                    </p>
                  </div>
                  <BrandMark eager className="h-16 w-16 md:h-20 md:w-20" />
                </div>
                <div className="grid gap-3">
                  {successSignals.map(([label, body], index) => (
                    <div key={label} className="rounded-2xl border border-white/10 bg-white/[.035] p-4">
                      <div className="mb-3 flex items-center justify-between">
                        <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-cyan-100/80">
                          0{index + 1}
                        </span>
                        <Gauge className="h-4 w-4 text-[#c8c6c5]" />
                      </div>
                      <h2 className="text-lg font-semibold text-white">
                        {label}
                      </h2>
                      <p className="mt-1 text-sm leading-6 text-[#adb4c0]">
                        {body}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </GlassCard>
          </Reveal>
        </SectionWrapper>
        <div className="border-y border-white/5 bg-[#0e0e0e]/55 py-5 md:py-6">
          <div className="mx-auto grid max-w-[1440px] gap-4 px-6 md:grid-cols-[auto_1fr] md:items-center md:px-20">
            <span className="eyebrow shrink-0 text-[#c8c6c5]/70">
              Strong fit for:
            </span>
            <div className="relative min-w-0 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
              <div className="fit-marquee-track flex w-max items-center py-1">
                {[0, 1].map((loopIndex) => (
                  <div
                    key={loopIndex}
                    aria-hidden={loopIndex === 1}
                    className="flex shrink-0 items-center gap-8 pr-12 text-xl font-bold text-[#c5c7c9]/75 transition duration-700 hover:text-white md:gap-12 md:text-2xl"
                  >
                    {businessTypes.map((industry) => (
                      <span key={`${loopIndex}-${industry}`}>{industry}</span>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <SectionWrapper className="border-y border-white/[.07]">
          <div className="grid gap-12 lg:grid-cols-2">
            <Reveal>
              <p className="eyebrow">Creative direction with discipline</p>
              <h2 className="section-title mt-6 text-3xl font-semibold sm:text-5xl">
                A brand should look intentional before the sales conversation
                starts.
              </h2>
            </Reveal>
            <Reveal delay={0.08} className="grid gap-3 sm:grid-cols-2">
              {homepage.capabilities.map((item) => (
                <div
                  key={item}
                  className="flex gap-3 border-b border-white/10 py-4 text-sm text-[#c2c7d0]"
                >
                  <Check className="h-4 w-4 text-[#8f8aff]" />
                  {item}
                </div>
              ))}
            </Reveal>
          </div>
        </SectionWrapper>
        <SectionWrapper>
          <GlassCard className="grid gap-10 p-7 sm:p-10 lg:grid-cols-[1.15fr_.85fr]">
            <div>
              <p className="eyebrow">Past success patterns</p>
              <h2 className="section-title mt-5 text-3xl font-semibold sm:text-5xl">
                The work is designed to make trust easier to earn.
              </h2>
              <p className="mt-6 max-w-2xl leading-7 text-[#adb4c0]">
                Temporary Utopia brings creative direction and marketing
                systems together: the brand feels considered, the offer becomes
                easier to understand, and the next step is engineered instead of
                left to chance.
              </p>
              <ButtonLink
                href="/customer-journey-revenue-system"
                className="mt-7"
              >
                See how the system works
              </ButtonLink>
            </div>
            <div className="flex flex-col justify-end gap-3">
              {proofPoints.map((item) => (
                <div
                  key={item}
                  className="flex items-center justify-between border-b border-white/10 py-4 text-sm"
                >
                  <span>{item}</span>
                  <ArrowUpRight className="h-4 w-4 text-[#817cff]" />
                </div>
              ))}
            </div>
          </GlassCard>
        </SectionWrapper>
        <SectionWrapper id="about" className="grid gap-10 lg:grid-cols-[.85fr_1.15fr]">
          <Reveal>
            <GlassCard className="p-7 sm:p-10">
              <Radio className="mb-8 h-8 w-8 text-cyan-100/80" />
              <p className="eyebrow">About Finlay Sturzaker</p>
              <h2 className="section-title mt-5 text-3xl font-semibold sm:text-5xl">
                Built for owners who care how the whole experience feels.
              </h2>
            </GlassCard>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="space-y-6 text-base leading-8 text-[#c2c7d0]">
              <p>
                Temporary Utopia is led by Finlay Sturzaker, with a focus on
                helping ambitious service businesses translate demand into a
                sharper customer journey. The studio sits between creative
                direction, marketing strategy, and practical systems work.
              </p>
              <p>
                The goal is to give businesses the kind of digital presence
                that feels calm, precise, and trusted: a brand world people can
                believe in, paired with follow-up, booking, and conversion
                systems that make the next step clear.
              </p>
              <div className="grid gap-3 sm:grid-cols-3">
                {["Trust first", "Aerospace restraint", "Measurable paths"].map(
                  (item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 border-b border-white/10 py-3 text-sm text-white"
                    >
                      <Star className="h-4 w-4 text-[#c8c6c5]" />
                      {item}
                    </div>
                  ),
                )}
              </div>
            </div>
          </Reveal>
        </SectionWrapper>
        <CTASection
          title="See how the flagship customer journey system works."
          body="Explore the audit process, review the fit, and apply for a focused call when your business is ready for a clearer path from demand to action."
        />
      </main>
      <SiteFooter />
    </>
  );
}
