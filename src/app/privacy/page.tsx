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
            <p className="eyebrow">Last updated 17 June 2026</p>
            <h1 className="section-title mt-5 text-5xl font-semibold">
              Privacy Policy
            </h1>
            <div className="mt-10 space-y-8 leading-8 text-[#aab1bd]">
              <section>
                <h2 className="mb-3 text-2xl font-semibold text-white">
                  1. Overview
                </h2>
                <p>
                  Temporary Utopia aims to handle personal information
                  consistently with the Privacy Act 1988 (Cth), the Australian
                  Privacy Principles where they apply, and Australian marketing
                  consent rules. This policy explains how we collect, use,
                  disclose, store, and manage personal information.
                </p>
              </section>

              <section>
                <h2 className="mb-3 text-2xl font-semibold text-white">
                  2. Information we collect
                </h2>
                <p>
                  We may collect your name, business name, role, email, phone
                  number, website, industry, project details, booking details,
                  billing information, customer journey information, tool stack,
                  access notes, form responses, call notes, analytics events,
                  and communications with us. We only ask for sensitive
                  information when it is reasonably necessary for the agreed
                  work or required by law.
                </p>
              </section>

              <section>
                <h2 className="mb-3 text-2xl font-semibold text-white">
                  3. How we use information
                </h2>
                <p>
                  We use personal information to respond to enquiries, assess
                  fit for a service, book calls, deliver audits and projects,
                  process payments, manage client relationships, improve the
                  website, maintain records, meet legal obligations, and send
                  marketing where we have consent or another lawful basis to do
                  so.
                </p>
              </section>

              <section>
                <h2 className="mb-3 text-2xl font-semibold text-white">
                  4. Disclosure and third-party tools
                </h2>
                <p>
                  We may disclose information to service providers that support
                  the website and business, including booking, CRM, payment,
                  email, analytics, automation, hosting, storage, accounting,
                  and professional advisory providers. Some providers may store
                  or access information outside Australia. Where practical, we
                  use reputable providers and take reasonable steps to protect
                  information shared with them.
                </p>
              </section>

              <section>
                <h2 className="mb-3 text-2xl font-semibold text-white">
                  5. Cookies, analytics, and marketing
                </h2>
                <p>
                  The website may use cookies, pixels, analytics, and similar
                  technologies to understand visits, improve pages, and measure
                  marketing. Commercial electronic messages will identify the
                  sender and include an unsubscribe option where required. You
                  can opt out of marketing at any time.
                </p>
              </section>

              <section>
                <h2 className="mb-3 text-2xl font-semibold text-white">
                  6. Security and retention
                </h2>
                <p>
                  We take reasonable steps to protect personal information from
                  misuse, interference, loss, unauthorised access, modification,
                  or disclosure. We keep information only for as long as needed
                  for the purposes described in this policy, to manage the
                  client relationship, resolve disputes, maintain business
                  records, or comply with legal obligations.
                </p>
              </section>

              <section>
                <h2 className="mb-3 text-2xl font-semibold text-white">
                  7. Access, correction, and complaints
                </h2>
                <p>
                  You may request access to, or correction of, personal
                  information we hold about you. You may also complain about how
                  we handle personal information. We will respond within a
                  reasonable time. If you are not satisfied, you may contact the
                  Office of the Australian Information Commissioner.
                </p>
              </section>

              <section>
                <h2 className="mb-3 text-2xl font-semibold text-white">
                  8. Data breaches
                </h2>
                <p>
                  If a data breach occurs, we will assess the issue and take
                  reasonable steps to contain and remediate it. Where the
                  Notifiable Data Breaches scheme applies and a breach is likely
                  to result in serious harm, affected individuals and the OAIC
                  will be notified as required.
                </p>
              </section>

              <section>
                <h2 className="mb-3 text-2xl font-semibold text-white">
                  9. Australian regulatory references
                </h2>
                <p>
                  This policy has been drafted with reference to OAIC guidance
                  on{" "}
                  <a
                    href="https://www.oaic.gov.au/privacy/australian-privacy-principles/australian-privacy-principles-quick-reference"
                    className="text-white underline"
                  >
                    the Australian Privacy Principles
                  </a>
                  ,{" "}
                  <a
                    href="https://www.oaic.gov.au/privacy/notifiable-data-breaches/about-the-notifiable-data-breaches-scheme"
                    className="text-white underline"
                  >
                    the Notifiable Data Breaches scheme
                  </a>
                  , and ACMA guidance on{" "}
                  <a
                    href="https://www.acma.gov.au/avoid-sending-spam"
                    className="text-white underline"
                  >
                    commercial electronic messages
                  </a>
                  . It should be reviewed by an Australian legal professional
                  before launch.
                </p>
              </section>

              <p>Contact: privacy@temporaryutopia.com</p>
            </div>
          </article>
        </SectionWrapper>
      </main>
      <SiteFooter />
    </>
  );
}
