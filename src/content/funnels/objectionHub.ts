export const objectionArticles = [
  {
    slug: "what-is-a-customer-journey-revenue-system",
    title: "What is a Customer Journey Revenue System?",
    summary:
      "A practical way to connect the steps between first interest, enquiry, booking, purchase, follow-up, and retention.",
    paragraphs: [
      "A Customer Journey Revenue System is not a single funnel or automation. It is the connected set of pages, messages, tools, handovers, and processes customers move through.",
      "The work starts by mapping what currently happens, identifying the points of friction, and prioritising improvements by likely impact and effort.",
    ],
  },
  {
    slug: "is-this-just-ai-automation",
    title: "Is this just AI automation?",
    summary: "No. AI is one tool inside a broader customer journey system.",
    paragraphs: [
      "AI can help improve response speed, organise context, reduce repetitive work, and make follow-up more consistent.",
      "It should not make the customer experience generic or remove human judgement where it matters.",
    ],
  },
  {
    slug: "who-is-this-for",
    title: "Who is this for?",
    summary:
      "Established businesses with demand and a customer path that feels fragmented or manual.",
    paragraphs: [
      "The best fit is a business already generating enquiries, bookings, purchases, or customer conversations.",
      "It is less suitable for a brand new business that has not yet validated its offer or generated meaningful demand.",
    ],
  },
  {
    slug: "what-happens-in-the-audit",
    title: "What happens in the audit?",
    summary:
      "We map the journey, identify leaks, review the tool stack, and build a prioritised roadmap.",
    paragraphs: [
      "The paid audit creates a shared view of the current customer journey and the evidence available around it.",
      "You receive a leak report, priority fix matrix, tool and process review, recommendations, and an implementation roadmap.",
    ],
  },
  {
    slug: "will-this-replace-my-team",
    title: "Will this replace my team?",
    summary:
      "No. The goal is to make the team faster, clearer, and better supported.",
    paragraphs: [
      "Good systems remove avoidable admin and give staff better context. They do not remove the need for judgement, empathy, or commercial experience.",
    ],
  },
  {
    slug: "what-tools-do-you-work-with",
    title: "What tools do you work with?",
    summary:
      "We work across common websites, CRMs, booking tools, email platforms, payments, and automation software.",
    paragraphs: [
      "The right stack depends on the business. We prefer improving and connecting useful existing tools before recommending unnecessary replacement.",
    ],
  },
  {
    slug: "how-do-we-measure-success",
    title: "How do we measure success?",
    summary: "By tracking movement through the journey, not vanity metrics.",
    paragraphs: [
      "Measures may include response time, booking completion, lead-to-sale movement, checkout completion, follow-up coverage, reactivation, repeat purchase, and team handling time.",
    ],
  },
];

export const getObjectionArticle = (slug: string) =>
  objectionArticles.find((article) => article.slug === slug);
