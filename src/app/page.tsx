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
    "Temporary Utopia helps premium service businesses turn attention into trusted customer journeys, enquiries, bookings, sales, and follow-up.",
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
  [
    "Clarity",
    "Make the offer easier to understand, easier to trust, and easier to choose.",
  ],
  [
    "Conversion",
    "Give interested customers a cleaner path from first impression to enquiry, booking, or purchase.",
  ],
  [
    "Follow-up",
    "Build the structure that keeps momentum alive after the first touchpoint.",
  ],
];

const proofPoints = [
  "Sharper positioning for service brands that need to feel premium and credible",
  "Landing pages and funnels built around real customer decisions",
  "Customer journey audits that turn messy touchpoints into a clear fix list",
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
            <p className="eyebrow">
              Creative systems for premium service businesses
            </p>
            <h1 className="display text-gradient mt-6 text-[clamp(3rem,6vw,5.9rem)] font-semibold">
              {homepage.hero.title}
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-[#c2c7d0] md:text-lg">
              {homepage.hero.body}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/apply">
                Book a Customer Journey Audit
              </ButtonLink>
              <ButtonLink
                href="/customer-journey-revenue-system"
                variant="secondary"
              >
                See How It Works
              </ButtonLink>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <GlassCard className="relative min-h-[450px] overflow-hidden p-6">
              <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-cyan-100/45 to-transparent" />
              <div className="relative flex h-full min-h-[398px] flex-col justify-between">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="eyebrow text-cyan-100/80">
                      Customer Journey System
                    </p>
                    <p className="mt-3 max-w-xs text-sm leading-6 text-[#aeb5c0]">
                      Brand direction, conversion pages, booking paths, CRM
                      structure, and follow-up systems aligned so fewer good
                      leads disappear.
                    </p>
                  </div>
                  <BrandMark eager className="h-16 w-16 md:h-20 md:w-20" />
                </div>
                <div className="grid gap-3">
                  {successSignals.map(([label, body], index) => (
                    <div
                      key={label}
                      className="rounded-2xl border border-white/10 bg-white/[.035] p-4"
                    >
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
        <div className="border-y border-white/5 bg-[#0e0e0e]/55 py-10 md:py-12">
          <div className="mx-auto grid max-w-[1440px] gap-8 px-6 md:grid-cols-[0.58fr_1fr] md:items-center md:px-20">
            <div>
              <p className="eyebrow text-cyan-100/80">
                Built for businesses where trust is the sale.
              </p>
              <p className="mt-4 max-w-xl text-sm leading-6 text-[#c5c7c9] md:text-base md:leading-7">
                Temporary Utopia is designed for service-led brands that need
                the whole customer experience to feel considered, credible, and
                easy to act on.
              </p>
            </div>
            <div className="flex flex-wrap gap-x-7 gap-y-3 text-lg font-semibold text-[#c5c7c9]/80 md:text-xl">
              {businessTypes.map((industry) => (
                <span key={industry} className="transition hover:text-white">
                  {industry}
                </span>
              ))}
            </div>
          </div>
        </div>
        <SectionWrapper className="border-y border-white/[.07]">
          <div className="grid gap-12 lg:grid-cols-2">
            <Reveal>
              <p className="eyebrow">Creative direction with discipline</p>
              <h2 className="section-title mt-6 text-3xl font-semibold sm:text-5xl">
                A brand should feel considered before the first conversation
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
              <p className="eyebrow">
                What changes when the system is working
              </p>
              <h2 className="section-title mt-5 text-3xl font-semibold sm:text-5xl">
                The work is designed to make trust easier to earn.
              </h2>
              <p className="mt-6 max-w-2xl leading-7 text-[#adb4c0]">
                Most businesses do not lose opportunities because nobody is
                interested. They lose them in the quiet gaps: unclear
                positioning, weak booking paths, slow follow-up, forgotten
                leads, and customer journeys that feel harder than they need to.
              </p>
              <p className="mt-5 max-w-2xl leading-7 text-[#adb4c0]">
                Temporary Utopia brings the brand, offer, website, and follow-up
                system into one clearer path. The business feels more
                considered, the next step becomes easier to take, and good
                demand is less likely to drift away.
              </p>
              <ButtonLink
                href="/customer-journey-revenue-system"
                className="mt-7"
              >
                See How the System Works
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
        <SectionWrapper
          id="about"
          className="grid gap-10 lg:grid-cols-[.85fr_1.15fr]"
        >
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
                helping ambitious service businesses turn demand into a sharper
                customer journey.
              </p>
              <p>
                The studio sits between creative direction, marketing strategy,
                and practical systems work. The aim is not to make a business
                louder. It is to make the experience feel more intentional:
                clearer positioning, stronger trust signals, better booking
                paths, and follow-up that keeps interested customers moving.
              </p>
              <div className="grid gap-3 sm:grid-cols-3">
                {[
                  "Trust before tactics",
                  "Restraint over noise",
                  "Systems that sell",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 border-b border-white/10 py-3 text-sm text-white"
                  >
                    <Star className="h-4 w-4 text-[#c8c6c5]" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </SectionWrapper>
        <CTASection
          title="Ready to make the customer journey feel intentional?"
          body="Explore the audit process, review the fit, and apply for a focused call when your business is ready for a clearer path from demand to action."
        />
      </main>
      <SiteFooter />
    </>
  );
}
