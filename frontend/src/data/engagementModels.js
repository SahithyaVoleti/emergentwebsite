export const ENGAGEMENT_MODELS = [
  {
    title: "Discovery sprint",
    duration: "1–2 weeks",
    summary: "Clarify problem framing, data access, risks, and whether a pilot is warranted.",
    includes: [
      "Stakeholder interviews",
      "Technical feasibility review",
      "Pilot scope and success criteria draft",
    ],
  },
  {
    title: "Fixed pilot",
    duration: "4–8 weeks",
    summary: "Deliver one production-quality vertical slice with documented handover artifacts.",
    includes: [
      "Senior-led implementation",
      "Weekly decision checkpoints",
      "Acceptance tests and runbooks",
    ],
  },
  {
    title: "Retained engineering",
    duration: "Monthly",
    summary: "Continue delivery after a successful pilot with explicit backlog ownership.",
    includes: [
      "Named delivery leads",
      "Roadmap-aligned increments",
      "Operational support model",
    ],
  },
];

export const ENGAGEMENT_TIMELINE = [
  { week: "Week 1", label: "Align", detail: "Confirm goals, access, stakeholders, and pilot boundaries." },
  { week: "Week 2", label: "Design", detail: "Freeze architecture choices, evaluation approach, and delivery plan." },
  { week: "Weeks 3–5", label: "Build", detail: "Implement the scoped increment with visible weekly progress." },
  { week: "Week 6", label: "Validate", detail: "Run acceptance tests, reviewer workflows, and operational checks." },
  { week: "Weeks 7–8", label: "Hand over", detail: "Transfer repositories, runbooks, and next-phase options." },
];

export const CLIENT_REQUIREMENTS = [
  "Named product or engineering owner for decisions within 48 hours",
  "Access to required systems, data, or sandbox environments",
  "Agreement on success measures before build work starts",
  "Security or compliance reviewer availability when regulated data is involved",
  "Willingness to co-review scope changes instead of open-ended change requests",
];

export const WHEN_NOT_A_FIT = {
  tag: "Fit check",
  headline: "When we are not the right partner",
  body:
    "NeuralTrix AI focuses on accountable delivery for scoped programs. We decline engagements that require guaranteed outcomes before baselines exist or that lack a build commitment after strategy work.",
};
