export type Severity = "Low" | "Medium" | "Medium-High" | "High";

export type JourneyStep = {
  label: string;
  status?: "stable" | "manual" | "risk" | "leak" | "recovery" | "visibility";
  note?: string;
};

export type ScorecardItem = {
  label: string;
  score: number;
  diagnosis: string;
};

export type BiggestLeak = {
  title: string;
  severity: Severity;
  whatIsHappening: string;
  whyItMatters: string;
  whatIWouldFix: string;
  temporaryUtopiaFix: string;
  recoverySequence?: Array<{
    label: string;
    action: string;
  }>;
};

export type RoadmapItem = {
  period: string;
  title: string;
  description: string;
  goal: string;
};

export type BuildLayer = {
  title: string;
  body: string;
  examples?: string[];
};

export type RevenueLeakMapReport = {
  businessName: string;
  businessType: string;
  mainOffer: string;
  averageCustomerValue: number;
  estimatedMonthlyEnquiries: string;
  primaryLeadSources: string[];
  preparedBy: string;
  preparedDate: string;
  reportId: string;
  videoUrl?: string;
  primaryLeak: string;
  leakSeverity: Severity;
  estimatedMonthlyRevenueAtRiskLow: number;
  estimatedMonthlyRevenueAtRiskHigh: number;
  recommendedFirstSystem: string;
  executiveSummary: string;
  reviewedItems: string[];
  currentJourneySteps: JourneyStep[];
  fixedJourneySteps: JourneyStep[];
  scorecardItems: ScorecardItem[];
  overallScore: number;
  biggestLeaks: BiggestLeak[];
  revenueEstimateInputs: {
    monthlyEnquiriesLow: number;
    monthlyEnquiriesHigh: number;
    averageCustomerValue: number;
    estimatedLeadsAtRiskLow: number;
    estimatedLeadsAtRiskHigh: number;
  };
  recommendedSystem: {
    name: string;
    purpose: string;
    includes: string[];
    whyThisComesFirst: string;
  };
  roadmap: RoadmapItem[];
  quickWin: {
    title: string;
    intro: string;
    insteadOf: string;
    use: string;
    whyThisHelps: string;
  };
  temporaryUtopiaBuildLayers: BuildLayer[];
  nextStepCTA: {
    heading: string;
    body: string;
    suggestedNextStep: string;
    confirmationItems: string[];
    primaryLabel: string;
    primaryHref: string;
    secondaryLabel: string;
    secondaryHref: string;
  };
};

export const revenueLeakMapDemo: RevenueLeakMapReport = {
  businessName: "Apex Performance Coaching",
  businessType: "Online fitness coaching",
  mainOffer: "12-week transformation coaching program",
  averageCustomerValue: 1800,
  estimatedMonthlyEnquiries: "35-50",
  primaryLeadSources: ["Instagram", "referrals", "website form"],
  preparedBy: "Temporary Utopia",
  preparedDate: "July 2, 2026",
  reportId: "RLM-APEX-260702",
  primaryLeak:
    "Interested leads are not being moved quickly enough from enquiry to booked call.",
  leakSeverity: "High",
  estimatedMonthlyRevenueAtRiskLow: 5400,
  estimatedMonthlyRevenueAtRiskHigh: 14400,
  recommendedFirstSystem:
    "Instant Lead Response + Booking Recovery System",
  executiveSummary:
    'Apex Performance Coaching appears to be generating genuine interest through content and referrals, but the path from "I am interested" to "I am booked in" relies too heavily on manual follow-up. That means warm leads can easily go cold before they speak to you.',
  reviewedItems: [
    "Homepage and main offer positioning",
    "Website enquiry path",
    "Instagram-to-DM journey",
    "Booking flow",
    "Stated follow-up process",
    "Current tools",
    "Estimated lead volume and customer value",
    "Likely points where interested prospects are dropping off",
  ],
  currentJourneySteps: [
    {
      label: "Instagram content / referral / website visit",
      status: "stable",
      note: "Demand signal",
    },
    {
      label: "Prospect sends DM or fills out form",
      status: "stable",
      note: "Lead capture",
    },
    {
      label: "Manual reply when someone checks messages or email",
      status: "manual",
      note: "Manual",
    },
    {
      label: "Back-and-forth conversation",
      status: "risk",
      note: "Delay risk",
    },
    {
      label: "Booking link sent manually",
      status: "manual",
      note: "Manual",
    },
    {
      label: "Some leads book",
      status: "stable",
      note: "Conversion",
    },
    {
      label: "Some leads go quiet",
      status: "leak",
      note: "Leak point",
    },
    {
      label: "No structured recovery sequence",
      status: "recovery",
      note: "No recovery",
    },
    {
      label: "Lost opportunity",
      status: "leak",
      note: "Revenue leak",
    },
  ],
  fixedJourneySteps: [
    { label: "Lead sees content", status: "stable" },
    { label: "Sends DM / fills form", status: "stable" },
    { label: "Instant acknowledgement", status: "stable" },
    { label: "Qualification", status: "visibility" },
    { label: "Correct booking path", status: "stable" },
    { label: "Reminder sequence", status: "recovery" },
    { label: "No-show recovery", status: "recovery" },
    { label: "Lost-lead reactivation", status: "recovery" },
    { label: "Lead status visible in dashboard", status: "visibility" },
  ],
  overallScore: 44,
  scorecardItems: [
    {
      label: "Lead Capture",
      score: 7,
      diagnosis:
        "Leads have ways to enquire, but capture is spread across DMs, forms, and manual messages.",
    },
    {
      label: "Follow-Up Speed",
      score: 3,
      diagnosis: "Response speed depends too heavily on manual attention.",
    },
    {
      label: "Booking Clarity",
      score: 5,
      diagnosis:
        "There is a booking path, but it is not always the immediate next step.",
    },
    {
      label: "Nurture",
      score: 2,
      diagnosis:
        "Leads who are interested but not ready do not appear to enter a structured nurture flow.",
    },
    {
      label: "No-Show Prevention",
      score: 4,
      diagnosis:
        "Basic reminders may exist, but no-shows and reschedules are not strongly recovered.",
    },
    {
      label: "Lost Lead Recovery",
      score: 1,
      diagnosis: "Cold leads are likely being forgotten unless manually chased.",
    },
    {
      label: "Visibility",
      score: 3,
      diagnosis:
        "There is limited visibility over where each lead is sitting in the journey.",
    },
  ],
  biggestLeaks: [
    {
      title: "Slow or inconsistent follow-up",
      severity: "High",
      whatIsHappening:
        "New leads are coming in through Instagram, referrals, and the website, but the first response appears to rely on someone manually seeing the enquiry and replying.",
      whyItMatters:
        "A lead is warmest at the moment they enquire. If they wait too long, they lose urgency, get distracted, compare other options, or simply forget why they reached out.",
      whatIWouldFix:
        "Every enquiry should trigger an instant response that confirms the enquiry was received, sets expectations, asks one or two qualifying questions, sends the correct booking link or next step, and notifies the business if the lead looks high-value.",
      temporaryUtopiaFix:
        "Lead capture -> instant reply -> qualification -> booking path -> internal alert",
    },
    {
      title: "Leads are not being recovered when they go quiet",
      severity: "High",
      whatIsHappening:
        "If someone asks a question but does not book, there does not appear to be a structured follow-up sequence that brings them back.",
      whyItMatters:
        "Not every lost lead is truly lost. Some are busy. Some are unsure. Some need more proof. Some meant to book but forgot. Without a recovery system, these leads slowly disappear.",
      whatIWouldFix:
        "Create a 3-7 day recovery sequence for leads who enquire but do not book.",
      temporaryUtopiaFix:
        "No-booking recovery -> proof-based follow-up -> reactivation",
      recoverySequence: [
        {
          label: "Day 0",
          action: "Instant response + booking link",
        },
        {
          label: "Day 1",
          action: "Reminder + simple objection handling",
        },
        {
          label: "Day 3",
          action: "Proof/result-based follow-up",
        },
        {
          label: "Day 5",
          action: "Still interested? check-in",
        },
        {
          label: "Day 7",
          action: "Soft close + future nurture",
        },
      ],
    },
    {
      title: "Too much of the process lives in people's heads",
      severity: "Medium-High",
      whatIsHappening:
        "The current process seems to rely on memory, manual messages, and scattered tools. If someone forgets to reply, gets busy, misses a DM, or loses track of a lead, the system does not catch it.",
      whyItMatters:
        "A business cannot reliably scale a process that only works when the owner remembers everything. The problem is not effort. The problem is lack of system visibility.",
      whatIWouldFix:
        "Create a simple lead dashboard showing new enquiries, qualified leads, booked calls, no-shows, cold leads, follow-up status, and high-value opportunities needing manual attention.",
      temporaryUtopiaFix:
        "Lead tracking dashboard -> status visibility -> follow-up alerts",
    },
  ],
  revenueEstimateInputs: {
    monthlyEnquiriesLow: 35,
    monthlyEnquiriesHigh: 50,
    averageCustomerValue: 1800,
    estimatedLeadsAtRiskLow: 3,
    estimatedLeadsAtRiskHigh: 8,
  },
  recommendedSystem: {
    name: "Lead Response & Booking Recovery System",
    purpose:
      "Make sure every new lead is captured, replied to, qualified, booked, reminded, and recovered if they go cold.",
    includes: [
      "Website form capture",
      "Instagram DM intake pathway",
      "Instant enquiry response",
      "Simple lead qualification",
      "Booking link delivery",
      "Missed-booking follow-up",
      "Reminder sequence before calls",
      "No-show recovery",
      "Cold lead reactivation",
      "Internal alerts for high-value leads",
      "Simple dashboard showing lead status",
    ],
    whyThisComesFirst:
      "Because the business already has interest coming in. Before increasing traffic, posting more content, or spending more on ads, the business should improve the system that turns existing interest into booked conversations.",
  },
  roadmap: [
    {
      period: "Week 1",
      title: "Map the journey",
      description:
        "Confirm every place leads currently come from, including website forms, Instagram DMs, referrals, email, phone calls, booking links, and the existing CRM or spreadsheet.",
      goal: "Know exactly where leads enter and where they currently disappear.",
    },
    {
      period: "Week 2",
      title: "Build instant response",
      description:
        "Create the first response layer, including confirmation message, qualification questions, booking link routing, internal notification, and lead status tracking.",
      goal: "No new enquiry should sit unnoticed.",
    },
    {
      period: "Week 3",
      title: "Build recovery sequences",
      description:
        "Add follow-up for leads who do not reply, do not book, or miss the call.",
      goal: "Leads should not disappear just because they got busy.",
    },
    {
      period: "Week 4",
      title: "Track and improve",
      description:
        "Review which leads are booking, which leads are ignoring follow-up, which source creates the best leads, and where people still drop off.",
      goal: "Improve the system based on real behaviour, not guesses.",
    },
  ],
  quickWin: {
    title: "Add a stronger confirmation message after every enquiry.",
    intro: "Quick Win You Can Implement Immediately",
    insteadOf: "Thanks, we'll be in touch.",
    use: "Thanks - your enquiry has been received.\n\nThe next step is to book a quick call so we can understand your goals and see if the program is a fit.\n\nYou can book here: [booking link]\n\nIf you are not ready to book yet, reply with the main thing you need help with and we'll point you in the right direction.",
    whyThisHelps:
      "It gives warm leads a clear next step immediately, instead of making them wait for someone to manually respond.",
  },
  temporaryUtopiaBuildLayers: [
    {
      title: "Capture Layer",
      body: "Connect lead sources into one clean intake process.",
      examples: [
        "Website form",
        "Instagram DM",
        "email enquiry",
        "referral form",
        "booking request",
      ],
    },
    {
      title: "Response Layer",
      body: "Send an instant response when someone enquires. This stops leads sitting untouched.",
    },
    {
      title: "Qualification Layer",
      body: "Ask the right questions before pushing someone to book. This helps separate serious leads from low-intent enquiries.",
    },
    {
      title: "Follow-Up Layer",
      body: "Recover people who do not reply, do not book, or miss the call. This is where a lot of hidden revenue may sit.",
    },
    {
      title: "Visibility Layer",
      body: "Show where leads are sitting, including who is new, who is qualified, who booked, who went cold, and who needs human attention.",
    },
  ],
  nextStepCTA: {
    heading: "Recommended Next Step",
    body: "The highest-impact next step is to build a simple version of the Lead Response & Booking Recovery System. Not a giant automation project. Not a complicated AI build. Just the first system that protects the interest the business is already creating.",
    suggestedNextStep: "Book a 20-minute Fix Plan Call.",
    confirmationItems: [
      "Current lead sources",
      "Booking flow",
      "Tools",
      "Follow-up process",
      "The simplest version of the system to build first",
    ],
    primaryLabel: "Book My Fix Plan Call",
    primaryHref: "/book",
    secondaryLabel: "Request Another Leak Map",
    secondaryHref: "/apply",
  },
};
