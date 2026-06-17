# Temporary Utopia Website Manifesto

This project is the production-direction website and funnel system for **Temporary Utopia**, a creative systems studio focused on helping established businesses fix the gap between customer interest and customer action.

The site is not just a brochure. It is structured as a revenue funnel:

1. Explain the core belief and offer.
2. Show the Customer Journey Revenue System.
3. Qualify the business through a guided application.
4. Move qualified leads into a fit-call booking.
5. Support the sales path into paid audit checkout and onboarding.

## Core Positioning

Temporary Utopia helps businesses that already have demand but are losing people between enquiry, booking, purchase, follow-up, and repeat revenue.

The working premise:

- Most growing businesses do not only need more traffic.
- They need a clearer path from interest to action.
- AI and automation are useful only when they improve speed, context, consistency, or customer experience.
- The system should support humans, not replace them.

## Tech Stack

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS 4
- React Hook Form
- Zod validation
- Lucide icons
- Placeholder integration layer for CRM, webhook, email, calendar, and Stripe flows

## Brand Assets

Current logo asset:

```text
public/brand/temporary-utopia-symbol-white-bold.png
```

This is the bold white Temporary Utopia symbol used for compact brand moments. It is derived from the source `UTOPIA_SYMBOL_WHITE.png` and slightly strengthened for small web placements.

Current usage:

- Header brand link, replacing the earlier `TU` placeholder.
- Footer brand lockup beside the Temporary Utopia name.

There is not currently a dedicated text-logo asset. The wordmark is rendered as live text so it stays sharp, accessible, and easy to adjust while the broader brand system evolves.

## Running Locally

```bash
npm install
npm run dev
```

Open:

```text
http://localhost:3000
```

Production-style local build:

```bash
npm run build
npm start -- -p 3000
```

Quality checks:

```bash
npm run lint
npm run build
```

## Deployment

See `DEPLOYMENT.md` for Vercel settings, required Supabase environment
variables, and the preflight checklist.

## Page Map

### `/`

The studio homepage.

Purpose:

- Introduce Temporary Utopia as a creative systems studio.
- Frame the core problem: the moment between interest and action.
- Direct visitors into the flagship funnel page.

Primary path:

```text
/ -> /customer-journey-revenue-system
```

Key sections:

- Hero: "Better systems for the moment between interest and action."
- Capability list:
  - Journey strategy and mapping
  - Conversion-focused pages and funnels
  - CRM and follow-up systems
  - Booking and checkout improvement
  - Practical automation and AI
  - Retention and reactivation journeys
- Featured system card for the Customer Journey Revenue System
- CTA section pointing visitors deeper into the flagship offer

Content source:

- `src/content/funnels/homepage.ts`
- `src/app/page.tsx`

### `/customer-journey-revenue-system`

The main long-form revenue funnel page.

Purpose:

- Explain the flagship offer.
- Build trust around the idea of customer journey leaks.
- Show why the audit call is the right first step.
- Move visitors to `/apply`.

Primary paths:

```text
/customer-journey-revenue-system -> /apply
/customer-journey-revenue-system#vsl -> video section
/customer-journey-revenue-system#mechanism -> process section
```

Key sections:

- Announcement bar linking to `/apply`
- Sticky disappearing header
- Hero with:
  - Primary CTA: Book Your Customer Journey Audit Call
  - Secondary CTA: Watch the Breakdown
  - Desktop proof panel showing journey leak signals
- Credibility logo strip
- VSL/video placeholder
- Letter section addressed to business owners
- Leak checklist:
  - The Ghosting Gap
  - The Confusion Cliff
  - Manual Bottlenecks
- Human-first AI philosophy section
- Customer Journey Revenue System mechanism:
  - Audit
  - Architect
  - Automate
  - Amplify
- Fit / not-fit comparison
- FAQ
- Final CTA
- Mobile sticky CTA after scroll

Important implementation files:

- `src/app/customer-journey-revenue-system/page.tsx`
- `src/components/ui/AnnouncementBar.tsx`
- `src/components/ui/StickyCTA.tsx`

### `/apply`

The Customer Journey Audit Call application.

Purpose:

- Qualify businesses before the booking step.
- Collect enough context to make the fit call useful.
- Ask specifically about the current business stack and AI tools in use.

Primary path:

```text
/apply -> /book
```

Current form structure:

1. **What business should we audit?**
   - Business name
   - Website
   - Industry
   - Main customer action

2. **Who should we contact?**
   - Name
   - Email
   - Phone

3. **Where is the journey leaking?**
   - Monthly enquiry / booking / purchase volume
   - Average customer value
   - Running ads?
   - Has CRM?
   - Biggest current problem

4. **What tools are already in the stack?**
   - Business tools:
     - Shopify
     - GoHighLevel
     - ClickFunnels
     - Squarespace
     - WordPress
     - Webflow
     - HubSpot
     - Klaviyo
     - Mailchimp
     - Calendly
     - Stripe
     - Zapier
     - Make
     - n8n
     - Other
   - AI tools:
     - ChatGPT
     - Claude
     - Gemini
     - Perplexity
     - OpenAI API
     - OpenRouter
     - Microsoft Copilot
     - Notion AI
     - Midjourney
     - Runway
     - Higgsfield
     - Canva AI
     - Cursor
     - Zapier AI
     - Make AI
     - Other
   - Other AI tools or notes

5. **Confirm and continue to booking**
   - Contact consent
   - Marketing opt-in

Behavior:

- The form validates one step at a time.
- The full form is still validated on final submit.
- Submission currently calls placeholder CRM, webhook, and email integrations.
- After successful submission, the user is redirected to `/book`.

Important implementation files:

- `src/app/apply/page.tsx`
- `src/components/forms/ApplicationForm.tsx`
- `src/lib/integrations/index.ts`

### `/book`

The audit fit-call booking page.

Purpose:

- Let accepted applicants choose a fit-call time.
- Set expectations for the call.

Primary path:

```text
/book -> /confirmation
```

Current behavior:

- Shows call preparation notes.
- Uses a calendar embed placeholder with fixed example times.
- On "Complete booking", calls the placeholder calendar integration.
- Redirects to `/confirmation`.

Important files:

- `src/app/book/page.tsx`
- `src/components/ui/BookingEmbedPlaceholder.tsx`

### `/confirmation`

The booking confirmation page.

Purpose:

- Confirm the audit fit call.
- Tell the user what to bring.
- Point them to relevant objection-handling articles before the call.

Linked article paths:

```text
/objection-hub/what-happens-in-the-audit
/objection-hub/is-this-just-ai-automation
/objection-hub/how-do-we-measure-success
```

Current content:

- Confirmation headline
- Pre-call video placeholder
- "What happens on the call" checklist
- Useful pre-call reading links
- Add-calendar-reminder button placeholder

Important file:

- `src/app/confirmation/page.tsx`

### `/checkout`

The paid Customer Journey Audit checkout page.

Purpose:

- Support conversion from the fit call into a paid audit.
- Present the audit deliverables, expectations, and payment placeholder.

Current deliverables shown:

- Customer Journey Map
- Revenue Leak Report
- Priority Fix Matrix
- Tool and process review
- Customer experience recommendations
- Implementation roadmap
- Audit delivery call

Current behavior:

- Shows `$1,000 AUD` one-time payment.
- Requires terms/expectations checkbox.
- Calls placeholder Stripe checkout integration.
- Shows "Checkout placeholder complete" state after confirmation.

Important files:

- `src/app/checkout/page.tsx`
- `src/components/ui/CheckoutCard.tsx`

### `/onboarding`

The paid audit onboarding page.

Purpose:

- Collect the deeper context required after a paid audit is confirmed.
- Prepare the team for the audit delivery.

Current sections:

- Onboarding video placeholder
- Book onboarding call CTA linking to `/book`
- Audit intake form

Audit intake form sections:

- Business basics
- Current customer journey
- Tools and assets
- Goals

Current behavior:

- Calls placeholder CRM and webhook integrations.
- Shows "Audit intake received" after submit.

Important files:

- `src/app/onboarding/page.tsx`
- `src/components/forms/AuditIntakeForm.tsx`

### `/objection-hub`

The answer library / objection hub.

Purpose:

- Give leads and booked-call prospects short answers to common questions.
- Support conversion by reducing uncertainty.

Primary paths:

```text
/objection-hub
/objection-hub/[slug]
```

Current articles:

- What is a Customer Journey Revenue System?
- Is this just AI automation?
- Who is this for?
- What happens in the audit?
- Will this replace my team?
- What tools do you work with?
- How do we measure success?

Important files:

- `src/app/objection-hub/page.tsx`
- `src/app/objection-hub/[slug]/page.tsx`
- `src/content/funnels/objectionHub.ts`

### `/privacy` and `/terms`

Basic legal pages.

Purpose:

- Provide footer legal links.
- Hold placeholder privacy and terms content until final legal copy is approved.

Important files:

- `src/app/privacy/page.tsx`
- `src/app/terms/page.tsx`

## Global Navigation

Desktop header links:

```text
Systems   -> /customer-journey-revenue-system
Process   -> /customer-journey-revenue-system#mechanism
Portfolio -> /objection-hub
Studio    -> /
Book Audit -> /apply
```

Mobile header:

- Uses a hamburger menu.
- Includes the same primary links.
- Includes "Book an audit call" CTA.

Header behavior:

- Fixed to the top.
- Moves below the announcement bar when the announcement is present.
- Rounds and gains shadow after scroll.
- Disappears while scrolling down past the threshold and returns when scrolling up.

Footer links:

```text
Privacy -> /privacy
Terms   -> /terms
Contact -> /objection-hub
Archive -> /objection-hub
```

## Funnel Flow

The intended public funnel is:

```text
/
  -> /customer-journey-revenue-system
    -> /apply
      -> /book
        -> /confirmation
```

The sales / delivery support path is:

```text
/confirmation
  -> objection articles
  -> sales conversation
  -> /checkout
    -> /onboarding
```

The current app does not automatically route from `/confirmation` to `/checkout`, or from `/checkout` to `/onboarding`. Those transitions are expected to happen after human approval or once live payment/CRM automation is connected.

## Integration Status

All external integrations are currently placeholders.

File:

```text
src/lib/integrations/index.ts
```

Current placeholder functions:

- `sendToCRM`
- `sendToWebhook`
- `sendToEmailPlatform`
- `createCalendarBooking`
- `createStripeCheckout`

Current behavior:

- Logs the submitted payload to the browser console.
- Returns `{ ok: true, provider: "placeholder" }`.
- Does not send data to a real external provider.

## Production Completion Checklist

### 1. CRM and Lead Routing

Replace `sendToCRM` with the real CRM destination.

Decide:

- Which CRM owns audit applications?
- What pipeline/status should a new application enter?
- Which fields are required?
- Who gets assigned?
- What happens when the applicant looks high-fit?
- What happens when the applicant is not a fit?

Recommended minimum:

- Create lead/contact
- Create deal/opportunity
- Store application answers
- Tag source as `website_apply`
- Trigger internal notification

### 2. Webhook Automation

Replace `sendToWebhook` with a production webhook endpoint.

Possible destinations:

- Zapier
- Make
- n8n
- Custom API route
- CRM-native webhook

Recommended events:

- `audit_application_submitted`
- `fit_call_booked`
- `paid_audit_checkout_started`
- `paid_audit_checkout_completed`
- `audit_intake_submitted`

### 3. Email Platform

Replace `sendToEmailPlatform`.

Decide:

- Which email platform will hold marketing subscribers?
- Should applicants be added to a pre-call nurture sequence?
- Should marketing opt-in be required for nurture, or only for ongoing content?

Recommended minimum:

- Respect `marketingOptIn`.
- Add consent timestamp if available.
- Segment applicants separately from general subscribers.

### 4. Calendar Booking

Replace `BookingEmbedPlaceholder`.

Options:

- Calendly embed
- Cal.com embed
- SavvyCal
- Google Calendar backed custom booking
- CRM-native scheduler

Production requirement:

- Real availability
- Time zone handling
- Confirmation email
- Calendar invite
- Reschedule/cancel links
- Booking data pushed back into CRM

### 5. Stripe Checkout

Replace `CheckoutCard` placeholder with real payment flow.

Options:

- Stripe Checkout Session
- Payment Link
- Invoice flow
- Manual invoice after call

Production requirement:

- Correct price and currency
- Tax/GST handling
- Receipt email
- Payment success/failure handling
- Post-payment redirect
- CRM update on successful payment
- Access to `/onboarding` after payment

### 6. Post-Payment Onboarding

Decide how buyers reach `/onboarding`.

Options:

- Redirect from Stripe success URL
- Email link after payment
- CRM automation sends onboarding link
- Protected route after authentication

Recommended minimum:

- Payment success sends user to onboarding.
- Intake submission attaches to the same CRM record/deal.
- Internal team receives a notification with links and context.

### 7. Video Assets

Replace placeholders:

- VSL on `/customer-journey-revenue-system`
- Pre-call video on `/confirmation`
- Onboarding video on `/onboarding`

Recommended minimum:

- Host videos on Vimeo, Wistia, YouTube unlisted, or a privacy-appropriate provider.
- Add poster images.
- Confirm mobile playback.
- Track meaningful engagement if useful.

### 8. Legal and Compliance

Before launch:

- Replace placeholder privacy and terms copy.
- Confirm consent language.
- Add cookie notice if analytics or tracking requires it.
- Confirm email marketing consent requirements.
- Confirm Stripe/tax copy.
- Confirm guarantee/no-guarantee claims.
- Confirm AI-related claims are accurate and not overstated.

### 9. Analytics and Conversion Tracking

Add tracking for:

- Landing page views
- VSL play clicks
- CTA clicks
- Application starts
- Step progression
- Application submits
- Booking completions
- Checkout starts
- Checkout completions
- Onboarding intake submits

Recommended tools:

- Vercel Web Analytics
- Google Analytics
- Meta Pixel / Google Ads tags if running ads
- PostHog or Plausible for funnel events

### 10. SEO and Metadata

Current metadata exists for primary pages, but should be reviewed before launch.

To complete:

- Final title/description per page
- Open Graph images
- Sitemap
- Robots rules
- Favicon/social preview polish
- Canonical domain
- Structured data if useful

### 11. Accessibility and QA

Before production:

- Keyboard test all forms.
- Check focus states.
- Confirm color contrast.
- Confirm form errors are readable.
- Confirm mobile menu works.
- Confirm all CTA links work.
- Confirm no layout overflow on small screens.
- Test Safari, Chrome, and mobile devices.

### 12. Deployment

Recommended deployment target:

- Vercel

Before deployment:

- Set production domain.
- Add required environment variables.
- Confirm integration secrets are not committed.
- Run `npm run lint`.
- Run `npm run build`.
- Test production preview URL.

## Current Known Placeholders

- Calendar booking is not live.
- Stripe checkout is not live.
- CRM/webhook/email integrations are not live.
- VSL and onboarding videos are placeholders.
- Confirmation page calendar reminder button is visual only.
- Privacy and terms need final legal copy.
- Contact footer currently points to the objection hub, not a dedicated contact page.
- Checkout and onboarding exist but are not automatically linked from a completed live payment flow yet.

## Development Notes

Primary app directory:

```text
src/app
```

Shared components:

```text
src/components
```

Reusable funnel content:

```text
src/content/funnels
```

Integration placeholder layer:

```text
src/lib/integrations
```

## Verification Log

Most recent checks run during this build:

```bash
npm run lint
npm run build
```

The `/apply` wizard was also tested end to end in Chrome:

- Step 1 validation appears when blank.
- All five application steps advance correctly.
- Business tools and AI tools can be selected.
- Consent submission redirects to `/book`.
- No browser console or page errors were reported during the test.

## Working Principle

Every page should either:

1. Clarify the offer.
2. Reduce risk or confusion.
3. Qualify the prospect.
4. Move the prospect to the next useful step.
5. Prepare the team to deliver the audit well.

If a section does none of those things, it should be removed or rewritten.
