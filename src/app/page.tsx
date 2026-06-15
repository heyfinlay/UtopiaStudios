import type { Metadata } from "next";
import { ArrowUpRight, Check } from "lucide-react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { FloatingBackground } from "@/components/ui/FloatingBackground";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { GlassCard } from "@/components/ui/GlassCard";
import { Reveal } from "@/components/ui/Reveal";
import { CTASection } from "@/components/sections/CTASection";
import { homepage } from "@/content/funnels/homepage";

export const metadata: Metadata = {
  title: "Creative Systems Studio",
  description:
    "Temporary Utopia builds clearer customer journeys for established businesses.",
};

export default function HomePage() {
  return (
    <>
      <FloatingBackground />
      <SiteHeader />
      <main>
        <SectionWrapper className="grid min-h-[720px] items-center gap-14 !pt-40 lg:grid-cols-[1.1fr_.9fr]">
          <Reveal>
            <p className="eyebrow">Creative Systems Studio</p>
            <h1 className="display text-gradient mt-6 text-[clamp(3.7rem,8vw,7.5rem)] font-semibold">
              {homepage.hero.title}
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#adb4c0]">
              {homepage.hero.body}
            </p>
            <ButtonLink
              href="/customer-journey-revenue-system"
              className="mt-9"
            >
              Explore the Customer Journey Revenue System
            </ButtonLink>
          </Reveal>
          <Reveal delay={0.12}>
            <GlassCard className="relative min-h-[470px] overflow-hidden p-6">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_40%,rgba(119,114,255,.26),transparent_38%)]" />
              <div className="relative flex h-full min-h-[420px] flex-col justify-between">
                <p className="text-xs uppercase tracking-[.18em] text-[#9995ff]">
                  Interest → action
                </p>
                <div className="space-y-3">
                  {[
                    "Interest",
                    "Enquiry",
                    "Booking",
                    "Purchase",
                    "Follow-up",
                    "Return",
                  ].map((item, index) => (
                    <div
                      key={item}
                      className="glass flex items-center justify-between rounded-xl p-4"
                      style={{ marginLeft: `${Math.min(index * 6, 24)}px` }}
                    >
                      <span className="text-sm">{item}</span>
                      <span className="text-xs text-[#7d8592]">
                        0{index + 1}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </GlassCard>
          </Reveal>
        </SectionWrapper>
        <SectionWrapper className="border-y border-white/[.07]">
          <div className="grid gap-12 lg:grid-cols-2">
            <Reveal>
              <p className="eyebrow">What we do</p>
              <h2 className="section-title mt-6 text-4xl font-semibold sm:text-6xl">
                We fix the gaps customers feel but dashboards often miss.
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
              <p className="eyebrow">Featured system</p>
              <h2 className="section-title mt-5 text-4xl font-semibold sm:text-6xl">
                Customer Journey Revenue System
              </h2>
              <p className="mt-6 max-w-2xl leading-7 text-[#adb4c0]">
                A done-for-you system that improves how customers enquire, book,
                buy, follow up, and come back. The first step is a focused
                Customer Journey Audit Call.
              </p>
              <ButtonLink
                href="/customer-journey-revenue-system"
                className="mt-7"
              >
                See how the system works
              </ButtonLink>
            </div>
            <div className="flex flex-col justify-end gap-3">
              {[
                "Find the leaks",
                "Prioritise the right fixes",
                "Improve the journey",
                "Measure what changes",
              ].map((item) => (
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
        <CTASection
          title="Make the path from interest to action easier to follow."
          body="Explore the flagship system, understand the process, and apply for a focused audit call when the fit is right."
        />
      </main>
      <SiteFooter />
    </>
  );
}
