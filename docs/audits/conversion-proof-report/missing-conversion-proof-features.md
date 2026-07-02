# Missing Conversion And Proof Features Report

Audit date: 2026-06-29

Surface audited:

- Homepage: `/` and `/customer-journey-revenue-system`
- Application entry: `/apply`

Primary user goal:

- Understand whether Temporary Utopia can diagnose and improve a leaky customer journey.
- Believe the audit is credible enough to apply for a free fit call.
- Continue from the landing page into a 16-step application form.

Evidence captured:

- `04-desktop-hero.png`
- `05-desktop-vsl-letter.png`
- `06-desktop-mid-offer.png`
- `07-desktop-final-cta.png`
- `08-mobile-hero.png`
- `09-mobile-vsl.png`
- `10-mobile-proof-mid.png`
- `11-mobile-final-cta.png`
- `12-mobile-apply-start.png`

Note: Earlier full-page homepage captures were rejected because the fixed header and animated page produced repeated slices. The accepted evidence is the numbered viewport screenshot set above.

## Executive Summary

The page already has the bones of a conversion funnel: clear pain, specific audience fit, repeated CTAs, a diagnostic framing, deliverables, a sample audit preview, AI reassurance, fit criteria, FAQs, and a mobile sticky CTA.

The main missing layer is hard proof. The current page relies heavily on plausible claims, illustrative dashboard UI, generic star icons, and sample findings. That can work for early-stage positioning, but visitors who are being asked to apply for a consultative audit need stronger evidence that the team has done this work, that the process is concrete, and that the fit call will be worth the friction of a 16-step application.

Highest impact missing features:

1. Real case studies or before/after journey examples.
2. Credible testimonials with names, roles, industries, or anonymized proof context.
3. A real audit sample preview, not just a stylized placeholder matrix.
4. Clear pricing or price-range expectation before the application.
5. A "what happens after I apply" timeline near each CTA.
6. Founder/team credibility and expert proof.
7. Stronger reassurance on the application page itself.
8. Interactive leak calculator using the visitor's own numbers.
9. Tool/platform proof showing the systems Temporary Utopia can work with.
10. Risk-reversal or expectation-setting language for the fit call and paid audit.

## Page Steps Audited

1. Desktop hero: strong problem statement and clear CTA. Health: good structure, weak concrete proof.
2. Desktop VSL and letter: strong narrative flow, but the video appears to be a placeholder. Health: medium.
3. Desktop mid-page offer: deliverables and sample findings are useful, but still generic. Health: medium.
4. Desktop final CTA: clear ask, but limited decision support before commitment. Health: medium.
5. Mobile hero: CTA and headline are readable, but proof panel is removed on mobile. Health: medium.
6. Mobile VSL and leak cards: pain is clear, proof remains mostly illustrative. Health: medium.
7. Mobile mid-page proof/CTA: sticky CTA helps conversion, but trust content is thin. Health: medium.
8. Mobile application start: focused form pattern is good, but the page lacks enough reassurance for a long application. Health: medium-low.

## Missing Features

### 1. Real Case Studies

Priority: P0

Evidence:

- The hero proof panel uses an illustrative "Journey Leak Snapshot."
- The sample audit section says, "Until there are public case studies..."
- No visible client outcome, project story, before/after, or implementation result appears in the captured page.

Why it matters:

- The offer is consultative and trust-heavy. A visitor needs proof that the team has solved comparable problems, not only that the problem is real.
- Case studies would move the page from "this sounds sensible" to "this has worked in a business like mine."

Recommended feature:

- Add 2-3 case study cards after the leak math or before the deliverables section.
- Each case study should include industry, starting friction, what was changed, measurable or observable result, and what was not promised.
- If client names cannot be public, use anonymized but specific framing such as "Cosmetic clinic, Sydney, 6-figure monthly enquiry volume."

Suggested content fields:

- Business type
- Starting problem
- Journey leak found
- Fix implemented
- Before/after operational outcome
- Metric, if available
- Quote or owner reaction

### 2. Testimonials With Context

Priority: P0

Evidence:

- The hero uses five star icons, but there is no testimonial name, role, quote, or context.
- No visible review wall or customer quote appears in the accepted screenshots.

Why it matters:

- Star icons without attribution can feel decorative. Quotes with context build belief faster, especially for a service business.
- Visitors considering a fit call need to know that real operators trust the team.

Recommended feature:

- Replace the generic star block in the hero proof panel with a real short quote.
- Add a testimonial section before the final CTA.
- If public quotes are unavailable, use "operator notes" or anonymized quotes with industry and project type.

High-converting testimonial structure:

- "Before Temporary Utopia, we had..."
- "They found..."
- "After the audit/build, we..."
- Name, role, business category, location or market.

### 3. Real Audit Sample Download Or Preview

Priority: P0

Evidence:

- The VSL is a placeholder-style video panel.
- The sample priority matrix is helpful but generic.
- The deliverables are listed as names, not shown as artifacts.

Why it matters:

- A paid audit is intangible until the visitor sees the artifact.
- Showing the shape of the deliverable reduces perceived risk and makes the application feel more worthwhile.

Recommended feature:

- Add a "View sample audit pages" section.
- Include blurred/redacted screenshots of a journey map, priority matrix, CRM review, and roadmap.
- Add a short "what you will know after the audit" list.

Potential page placement:

- Immediately after "What you receive."
- Also link from the hero secondary CTA if the VSL is not live yet.

### 4. Pricing Or Price-Range Expectation

Priority: P0

Evidence:

- The final CTA says scope, price, timeline, and next step will be known after the fit call.
- The application requires 16 steps before the visitor sees any pricing expectation.
- The source content includes implementation range language, but the rendered page does not show it in the current funnel.

Why it matters:

- Price opacity increases anxiety for serious buyers and wastes time with poor-fit leads.
- A range can increase trust even if exact pricing depends on scope.

Recommended feature:

- Add a compact pricing expectation block near the final CTA and application page.
- Use ranges and qualifiers if exact pricing is not possible.

Example structure:

- Free fit call: no cost.
- Paid audit: typical range or "starts at" range.
- Implementation: scoped separately after audit.
- Who should not apply if budget is below a threshold.

### 5. "What Happens After I Apply" Timeline

Priority: P0

Evidence:

- The CTAs say "Apply for the Free Fit Call."
- The application page says "Answer one focused question at a time."
- There is no visible step-by-step path from apply to call to audit to implementation.

Why it matters:

- The page asks for action, but the next steps are not fully clear.
- A timeline reduces hesitation and improves perceived professionalism.

Recommended feature:

- Add a 4-step timeline near every major CTA cluster:
  1. Apply in 3-5 minutes.
  2. We review fit.
  3. If aligned, book a free fit call.
  4. If useful, scope the paid audit.

Application page addition:

- Add a compact sidebar card showing "You are not booking a paid audit yet" and "We review applications before recommending next steps."

### 6. Founder Or Team Credibility

Priority: P1

Evidence:

- The letter is signed "The Team at Temporary Utopia."
- There is no visible founder bio, operator background, relevant expertise, or team photo tied to the audit offer.
- One image shows a person at a laptop, but it is not connected to a named expert or credibility point.

Why it matters:

- For high-trust services, buyers evaluate the person or team behind the process.
- The page needs proof of judgment, not only proof of design taste.

Recommended feature:

- Add a short "Who reviews your journey" section.
- Include founder/team photo, role, relevant experience, types of systems worked on, and how the audit is conducted.

Useful proof points:

- Years of experience.
- Types of industries served.
- Platforms worked with.
- Relevant conversion, CRM, automation, AI, or service operations background.
- Clear statement of what the team does and does not do.

### 7. Stronger Proof On Mobile

Priority: P1

Evidence:

- The desktop hero has a proof panel.
- The mobile hero removes that proof panel and goes straight from CTA to industry marquee.
- The sticky CTA appears later, which is useful, but it does not carry proof or reassurance.

Why it matters:

- Mobile visitors see less proof before being asked to apply.
- The removed hero panel contains the closest thing to immediate proof, even though it is illustrative.

Recommended feature:

- Add a compact mobile proof strip under the hero CTA.
- Include 3 evidence points such as audit duration, what is reviewed, and what happens after.
- Add one short quote or case-study micro-proof if available.

Example:

- "5-7 business day diagnostic"
- "Journey map, leak report, priority matrix"
- "Implementation optional after audit"

### 8. Interactive Leak Calculator

Priority: P1

Evidence:

- The page includes a static example: 80 enquiries, $2,500 average value, 10% leakage, $20,000/month.
- The application form later collects monthly volume and average value.

Why it matters:

- Visitors convert better when the page makes the problem personal.
- The static math is useful, but an interactive version would make the commercial pain more concrete before the CTA.

Recommended feature:

- Turn the leak math into a simple calculator.
- Let users enter monthly enquiries, average customer value, and estimated lost percentage.
- Use the result to frame the audit as a diagnostic, not a guarantee.

Guardrail:

- Keep the disclaimer visible: illustrative only, not a promised result.

### 9. Industry-Specific Proof Paths

Priority: P1

Evidence:

- The page names fit industries in a moving strip.
- The leak cards are general and not tailored by industry.

Why it matters:

- "Strong fit for dental clinics" is less persuasive without showing what a dental clinic leak looks like.
- Industry-specific proof helps visitors self-identify faster.

Recommended feature:

- Add expandable industry examples:
  - Dental clinic: missed consult requests, booking reminders, treatment-plan follow-up.
  - Cosmetic clinic: consultation booking, no-show recovery, post-consult nurture.
  - Home services: quote request response time, abandoned quote follow-up.
  - Consulting/advisory: qualification, discovery booking, proposal follow-up.

### 10. Objection Handling Around AI

Priority: P1

Evidence:

- The page has a strong "not replacing your team with AI" section.
- The details remain high-level.

Why it matters:

- AI can be a trust risk in service businesses. Visitors may worry about robotic customer experience, privacy, staff adoption, or tool complexity.

Recommended feature:

- Add an "AI guardrails" proof section.
- Explain when AI is used, when humans stay in control, and what customer-facing automation will not do.

Suggested feature elements:

- Human review before sensitive customer replies.
- No fake human identity.
- Clear handoff to staff.
- Privacy-conscious tool use.
- Automation only where speed, consistency, or context improves.

### 11. Platform And Integration Credibility

Priority: P1

Evidence:

- The FAQ says the team works across common CRM, booking, payment, email, SMS, and automation tools.
- The application form asks about tools, but the landing page does not show the tool ecosystem.

Why it matters:

- Visitors want to know whether the audit can work with their current stack.
- Tool logos and platform examples build operational credibility.

Recommended feature:

- Add a platform strip or matrix:
  - CRM: HubSpot, GoHighLevel, Salesforce, Pipedrive.
  - Booking: Calendly, clinic booking tools, Acuity.
  - Email/SMS: Klaviyo, Mailchimp, Twilio.
  - Automation: Zapier, Make, n8n.
  - Payments/checkout: Stripe, Shopify.

Guardrail:

- Only show platforms the team can genuinely audit or integrate.

### 12. Risk Reversal For The Fit Call

Priority: P1

Evidence:

- The page says there are no guarantees and no inflated promises.
- It does not clearly say what the fit call is not: not a hard sell, not a paid audit, not a commitment.

Why it matters:

- The CTA asks for personal/business information. Visitors need reassurance about the call and how their data will be used.

Recommended feature:

- Add a "No-pressure fit call" block near the CTA and on the application page.

Useful commitments:

- No paid audit is sold unless there is a clear fit.
- If the business is too early, the team will say so.
- Implementation is optional and scoped after the audit.
- The call is used to assess fit, not to force a rebuild.

### 13. Application Form Conversion Support

Priority: P1

Evidence:

- The form is 16 steps.
- The first visible application screen has only three reassurance bullets.
- There is no time estimate, save/resume expectation, privacy reassurance, or "why we ask this" support visible at the start.

Why it matters:

- A 16-step form can qualify leads well, but it creates friction.
- Visitors need to know how long it will take and why the questions matter.

Recommended feature:

- Add a top-of-form reassurance card:
  - "Takes about 3-5 minutes."
  - "You are not committing to a paid audit."
  - "We use this to check whether the audit is commercially sensible."
  - "Your details are only used to respond to this enquiry unless you opt in."

Additional improvement:

- Add step-group labels such as Business, Contact, Demand, Tools, Consent.
- This makes 16 steps feel structured rather than long.

### 14. Lead Magnet Or Lower-Commitment CTA

Priority: P2

Evidence:

- The main page mostly asks visitors to apply or watch a breakdown.
- If the VSL is not functional, there is no lower-commitment education path.

Why it matters:

- Not every qualified visitor is ready to apply on first visit.
- A diagnostic checklist can capture email intent and build trust.

Recommended feature:

- Add a secondary CTA: "Get the Revenue Leak Checklist" or "Download the Journey Leak Self-Audit."
- Use it for visitors not ready to apply.

Placement:

- Hero secondary CTA if VSL is not live.
- Mid-page after leak cards.
- Final CTA as a smaller secondary option.

### 15. Stronger VSL State

Priority: P2

Evidence:

- The VSL button appears on a static panel.
- The button does not visibly communicate duration, topic, or whether the video is available.

Why it matters:

- "Watch the Breakdown" is a strong CTA, but only if the video exists and sets expectations.
- A non-functional placeholder can reduce trust.

Recommended feature:

- If video is ready: show duration, title, and 3 bullets of what the viewer will learn.
- If video is not ready: replace with a real sample audit preview or remove the CTA until ready.

### 16. Comparison Against Alternatives

Priority: P2

Evidence:

- The page explains what Temporary Utopia does.
- It does not compare the audit to common alternatives: more ads, a new website, hiring admin, buying an AI chatbot, replacing CRM.

Why it matters:

- Visitors may be considering the wrong fix.
- A comparison table can help them understand why diagnosis comes before implementation.

Recommended feature:

- Add "Why not just..." section:
  - More ads: amplifies leaks if the journey is broken.
  - New website: may not fix CRM, follow-up, booking, or handover gaps.
  - AI chatbot: can add friction if not connected to real operations.
  - New CRM: tool switch without process clarity can create more chaos.

### 17. Proof Of Measurement And Reporting

Priority: P2

Evidence:

- The page says the audit finds where people drop off.
- It does not show what data sources, metrics, or tracking checks are reviewed.

Why it matters:

- "Revenue leak" is a measurement claim. The page should show how leakage is observed.

Recommended feature:

- Add a "What we check" measurement list:
  - Lead source tracking.
  - Response time.
  - Booking completion rate.
  - No-show rate.
  - Quote follow-up.
  - Abandoned checkout or enquiry recovery.
  - CRM status visibility.
  - Repeat purchase or win-back touchpoints.

### 18. Stronger Final CTA Decision Summary

Priority: P2

Evidence:

- The final CTA repeats the main ask and says only 4 audit slots are available per month.
- It does not summarize the full value, risk reduction, and next steps at the point of decision.

Why it matters:

- The final CTA is where skimmers decide.
- It should restate why applying is low-risk and high-signal.

Recommended feature:

- Add a compact final decision panel:
  - Best fit: established service business with demand.
  - You get: fit review, next-step recommendation, no obligation.
  - Paid audit only if there is a clear case.
  - Typical timeline.
  - Price expectation or budget qualifier.

### 19. Accessibility And Trust Polishing

Priority: P2

Evidence:

- The page uses low-contrast dark glass styling and small uppercase labels.
- Some proof elements are purely visual or decorative.
- The captured audit cannot prove keyboard behavior or screen-reader clarity.

Why it matters:

- Accessibility issues can hurt conversion directly, especially on forms and CTAs.
- Trust pages need readable proof, not only polished visuals.

Recommended feature:

- Verify contrast on muted text, marquee text, and small uppercase labels.
- Add reduced-motion handling for marquee and shimmer effects, already partly present in CSS.
- Ensure all CTA labels are specific and consistent.
- Ensure the VSL button has a functional accessible state or a clear disabled/unavailable state.
- Test keyboard navigation through the 16-step application.

## Recommended Page Order

Suggested conversion sequence:

1. Hero with CTA, concise proof, and next-step reassurance.
2. Fit strip plus mobile-friendly proof stats.
3. Problem and revenue leak framing.
4. Interactive leak calculator.
5. Real case study or anonymized before/after.
6. What the audit checks.
7. What you receive, with sample artifact previews.
8. Process timeline from application to audit.
9. Founder/team credibility.
10. Tool/platform credibility.
11. AI guardrails.
12. Fit/not-fit comparison.
13. Testimonials.
14. FAQ with pricing, timeline, guarantees, privacy, and implementation scope.
15. Final CTA decision summary.

## Application Page Recommendations

Add the following above or beside the form:

1. Time estimate: "Takes about 3-5 minutes."
2. Commitment reassurance: "This is not a paid audit booking."
3. Review process: "We review fit before recommending the next step."
4. Privacy reassurance: "Your details are used to respond to this enquiry unless you opt in."
5. Why 16 steps: "The questions help us understand demand, value, journey complexity, and tool stack."
6. Progress groups: Business, Website, Contact, Demand, Tools, Consent.
7. Mini proof: one quote, one case-study stat, or one sample deliverable thumbnail.

## Evidence Limits

- This audit used current rendered screenshots and source inspection.
- It did not submit the application form or test external integrations.
- It did not verify analytics, conversion data, heatmaps, CRM behavior, or real customer proof assets.
- It did not claim WCAG compliance. Accessibility notes are visible risks and verification needs from screenshots and source structure.

## Short Priority Roadmap

First pass:

1. Replace generic hero stars with one real testimonial or named proof point.
2. Add "what happens after apply" near hero and final CTA.
3. Add application page reassurance and time estimate.
4. Add pricing/budget expectation.
5. Make VSL real or replace it with a sample audit preview.

Second pass:

1. Add one real or anonymized case study.
2. Add sample audit artifact screenshots.
3. Add tool/platform credibility.
4. Add AI guardrails.
5. Convert leak math into a calculator.

Third pass:

1. Add industry-specific proof paths.
2. Add testimonial wall.
3. Add lead magnet for lower-intent visitors.
4. Add alternative-comparison section.
5. Run keyboard, contrast, and responsive QA on the full flow.
