import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
export const metadata: Metadata = { title: "Privacy" };
export default function PrivacyPage() {
  return (
    <>
      <SiteHeader compact />
      <main>
        <SectionWrapper className="!pt-40">
          <article className="mx-auto max-w-3xl">
            <p className="eyebrow">Legal placeholder</p>
            <h1 className="section-title mt-5 text-5xl font-semibold">
              Privacy
            </h1>
            <div className="mt-10 space-y-6 leading-8 text-[#aab1bd]">
              <p>
                Temporary Utopia collects information you submit through
                enquiry, application, booking, checkout, and onboarding forms so
                we can respond to your request and deliver agreed services.
              </p>
              <p>
                This placeholder should be reviewed and replaced with a
                jurisdiction-appropriate privacy policy before launch, including
                details about processors, retention, access requests, cookies,
                analytics, and marketing consent.
              </p>
              <p>Contact: privacy@temporaryutopia.com</p>
            </div>
          </article>
        </SectionWrapper>
      </main>
      <SiteFooter />
    </>
  );
}
