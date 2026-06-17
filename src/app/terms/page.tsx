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
            <p className="eyebrow">Last updated 17 June 2026</p>
            <h1 className="section-title mt-5 text-5xl font-semibold">
              Terms of Service
            </h1>
            <div className="mt-10 space-y-8 leading-8 text-[#aab1bd]">
              <section>
                <h2 className="mb-3 text-2xl font-semibold text-white">
                  1. About these terms
                </h2>
                <p>
                  These terms apply when you use the Temporary Utopia website,
                  submit an enquiry, apply for an audit, book a call, or engage
                  Temporary Utopia for strategy, creative direction, customer
                  journey, marketing systems, automation, or related services.
                  A proposal, quote, statement of work, invoice, or written
                  service agreement may add project-specific terms.
                </p>
              </section>

              <section>
                <h2 className="mb-3 text-2xl font-semibold text-white">
                  2. Australian Consumer Law
                </h2>
                <p>
                  Nothing in these terms excludes, restricts, or modifies rights
                  you may have under the Australian Consumer Law, including
                  consumer guarantees for services supplied with due care and
                  skill, fit for a disclosed purpose, and within a reasonable
                  time where no time is agreed. Any limitation of liability only
                  applies to the extent permitted by law.
                </p>
              </section>

              <section>
                <h2 className="mb-3 text-2xl font-semibold text-white">
                  3. Services and responsibilities
                </h2>
                <p>
                  The agreed scope, deliverables, timelines, access
                  requirements, fees, and payment milestones will be set out in
                  writing before paid work begins. You are responsible for
                  providing accurate information, timely access to relevant
                  platforms, feedback, approvals, brand assets, and any legal,
                  financial, medical, or regulated-industry approvals required
                  for your business.
                </p>
              </section>

              <section>
                <h2 className="mb-3 text-2xl font-semibold text-white">
                  4. Payments, changes, and cancellations
                </h2>
                <p>
                  Fees are payable in Australian dollars unless stated
                  otherwise. Deposits, audit fees, retained work, implementation
                  fees, cancellation windows, rescheduling limits, and refund
                  arrangements will be confirmed in the relevant proposal or
                  invoice. Scope changes, extra revisions, urgent work, or
                  delays caused by missing information may require a revised
                  timeline or additional fee.
                </p>
              </section>

              <section>
                <h2 className="mb-3 text-2xl font-semibold text-white">
                  5. No guaranteed commercial result
                </h2>
                <p>
                  Temporary Utopia provides strategy, recommendations, creative
                  work, implementation, and systems support based on the
                  information available at the time. We do not guarantee revenue,
                  profit, rankings, advertising performance, platform approval,
                  lead volume, conversion rate, or any other commercial outcome.
                </p>
              </section>

              <section>
                <h2 className="mb-3 text-2xl font-semibold text-white">
                  6. Intellectual property
                </h2>
                <p>
                  You retain ownership of materials you provide. Unless a
                  written agreement says otherwise, final paid deliverables are
                  licensed or assigned to you after full payment, while
                  Temporary Utopia retains ownership of pre-existing methods,
                  templates, know-how, reusable systems, internal processes, and
                  unused concepts. Third-party tools, fonts, software, stock
                  assets, plugins, and platform terms remain subject to their
                  own licences.
                </p>
              </section>

              <section>
                <h2 className="mb-3 text-2xl font-semibold text-white">
                  7. Confidentiality and privacy
                </h2>
                <p>
                  Each party must take reasonable steps to protect confidential
                  information received through a project. Personal information
                  is handled in line with the Privacy Policy. You must not
                  provide personal information, customer data, health
                  information, or other sensitive information unless it is
                  necessary for the agreed work and you have the right to share
                  it.
                </p>
              </section>

              <section>
                <h2 className="mb-3 text-2xl font-semibold text-white">
                  8. Australian regulatory references
                </h2>
                <p>
                  These terms are intended to operate consistently with
                  Australian legal standards including the{" "}
                  <a
                    href="https://www.accc.gov.au/consumers/buying-products-and-services/consumer-rights-and-guarantees"
                    className="text-white underline"
                  >
                    ACCC guidance on consumer guarantees
                  </a>
                  ,{" "}
                  <a
                    href="https://www.accc.gov.au/consumers/buying-products-and-services/contracts"
                    className="text-white underline"
                  >
                    unfair contract term protections
                  </a>
                  , and privacy obligations described by the OAIC. These terms
                  should be reviewed by an Australian legal professional before
                  relying on them for a specific business or transaction.
                </p>
              </section>
            </div>
          </article>
        </SectionWrapper>
      </main>
      <SiteFooter />
    </>
  );
}
