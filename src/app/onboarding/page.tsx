import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { FloatingBackground } from "@/components/ui/FloatingBackground";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { VideoPlaceholder } from "@/components/ui/VideoPlaceholder";
import { GlassCard } from "@/components/ui/GlassCard";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { AuditIntakeForm } from "@/components/forms/AuditIntakeForm";

export const metadata: Metadata = {
  title: "Customer Journey Audit Onboarding",
};
export default function OnboardingPage() {
  return (
    <>
      <FloatingBackground />
      <SiteHeader compact />
      <main>
        <SectionWrapper className="!pt-40">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">Paid audit onboarding</p>
            <h1 className="section-title mt-5 text-4xl font-semibold sm:text-6xl">
              Give us the context behind the journey.
            </h1>
            <p className="mt-6 text-lg leading-8 text-[#aab1bd]">
              The more specific the information, links, assets, and
              current-process detail, the more useful the audit can be.
            </p>
          </div>
          <div className="mt-12">
            <VideoPlaceholder
              title="How to prepare for your audit"
              body="Add the onboarding video here with access instructions and examples of useful supporting material."
            />
          </div>
          <GlassCard className="mt-8 flex flex-col items-start justify-between gap-5 p-6 sm:flex-row sm:items-center">
            <div>
              <h2 className="font-semibold">Book your onboarding call</h2>
              <p className="mt-2 text-sm text-[#9ea6b2]">
                Complete the intake first, then choose a time to clarify access
                and scope.
              </p>
            </div>
            <ButtonLink href="/book">Book onboarding call</ButtonLink>
          </GlassCard>
          <GlassCard className="mt-8 p-6 sm:p-9">
            <AuditIntakeForm />
          </GlassCard>
        </SectionWrapper>
      </main>
      <SiteFooter />
    </>
  );
}
