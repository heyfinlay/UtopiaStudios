import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
export const metadata: Metadata = { title: "Terms" };
export default function TermsPage() {
  return (
    <>
      <SiteHeader compact />
      <main>
        <SectionWrapper className="!pt-40">
          <article className="mx-auto max-w-3xl">
            <p className="eyebrow">Legal placeholder</p>
            <h1 className="section-title mt-5 text-5xl font-semibold">Terms</h1>
            <div className="mt-10 space-y-6 leading-8 text-[#aab1bd]">
              <p>
                Services, deliverables, timelines, payment terms,
                responsibilities, access requirements, intellectual property,
                confidentiality, and cancellation arrangements should be
                confirmed in a written proposal or service agreement.
              </p>
              <p>
                No commercial outcome is guaranteed. Recommendations and
                implementation decisions are based on the information, access,
                and evidence available at the time.
              </p>
              <p>
                This page is a placeholder and should be reviewed by an
                appropriately qualified legal professional before launch.
              </p>
            </div>
          </article>
        </SectionWrapper>
      </main>
      <SiteFooter />
    </>
  );
}
