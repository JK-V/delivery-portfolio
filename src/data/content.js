// ─────────────────────────────────────────────────────────────
// SITE CONTENT — edit everything here. No component code needed
// to update copy, links, stats, or case studies.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: "Your Name",
  role: "Software Delivery & Engineering Process Consultant",
  location: "Available for remote & on-site engagements",
  tagline:
    "I help organizations turn shipping software into a predictable, boring, repeatable pipeline — instead of a monthly fire drill.",
  summary:
    "I set up scalable engineering processes, mobile development practices, and automation frameworks for organizations that need to move faster without breaking things. That means new project setup, Agile team operating models, CI/CD, quality engineering, and delivery optimization — built so releases stop being an event and start being a non-event.",
  email: "you@example.com",
  socials: [
    { label: "LinkedIn", href: "https://linkedin.com/in/yourprofile" },
    { label: "GitHub", href: "https://github.com/yourhandle" },
    { label: "Resume", href: "/resume.pdf" },
  ],
};

// The five real stages of how this engagement actually runs.
// Used for the nav spine, the hero animation, and the process section.
export const pipeline = [
  {
    code: "01",
    key: "setup",
    stage: "SETUP",
    label: "New Project Setup",
    status: "pass",
    description:
      "Repo structure, environment strategy, tooling baseline, and team onboarding — the scaffolding every later stage depends on.",
    details: [
      "Monorepo / polyrepo decision & repo hygiene",
      "Environment parity: local, staging, production",
      "Baseline tooling: linting, formatting, pre-commit hooks",
      "Onboarding docs so a new engineer ships on day one",
    ],
  },
  {
    code: "02",
    key: "agile-ops",
    stage: "AGILE OPS",
    label: "Agile Team Operating Model",
    status: "pass",
    description:
      "Cadence, ceremonies, and roles calibrated to how the team actually works — not a generic Scrum template.",
    details: [
      "Sprint / kanban cadence fit to delivery risk",
      "Lightweight ceremonies with a clear decision owner",
      "Backlog grooming & estimation that holds up under pressure",
      "Cross-team dependency mapping",
    ],
  },
  {
    code: "03",
    key: "automate",
    stage: "AUTOMATE",
    label: "CI/CD & Automation Frameworks",
    status: "running",
    description:
      "Build, test, and deploy pipelines that run themselves — including mobile-specific release automation.",
    details: [
      "CI pipelines: build, lint, test, security scan",
      "CD pipelines: staged rollouts, feature flags, rollback paths",
      "Mobile release automation (fastlane / app store pipelines)",
      "Infra-as-code for reproducible environments",
    ],
  },
  {
    code: "04",
    key: "verify",
    stage: "VERIFY",
    label: "Quality Engineering",
    status: "pass",
    description:
      "Testing strategy that catches problems before release, not after — proportional to actual risk.",
    details: [
      "Test pyramid: unit, integration, E2E balance",
      "Automated regression suites wired into CI",
      "Release quality gates & flaky-test triage",
      "Observability hooks so bugs surface fast in production",
    ],
  },
  {
    code: "05",
    key: "release",
    stage: "RELEASE",
    label: "Delivery Optimization",
    status: "pending",
    description:
      "Metrics-driven tuning of the whole pipeline so releases become predictable, high-quality, and boring.",
    details: [
      "DORA metrics: lead time, deploy frequency, MTTR, change fail rate",
      "Release train cadence & communication",
      "Continuous retro loop across all four prior stages",
      "Executive-level delivery reporting",
    ],
  },
];

// Illustrative — swap in your own real numbers from past engagements.
export const stats = [
  { value: "4x", label: "faster lead time, idea to production" },
  { value: "70%", label: "fewer failed deployments" },
  { value: "<1hr", label: "typical MTTR after incident response setup" },
  { value: "90%+", label: "automated regression coverage on critical paths" },
];

// Placeholder case studies — replace with real (anonymized if needed) work.
export const caseStudies = [
  {
    title: "Scaling a 4-person startup team to 40 engineers",
    tag: "New Project Setup · Agile Ops",
    summary:
      "Rebuilt the repo and environment strategy, then introduced a two-track Agile model (product squads + platform team) that survived a 10x headcount increase without a re-org.",
  },
  {
    title: "Mobile release cadence from monthly to weekly",
    tag: "Automation · Quality Engineering",
    summary:
      "Automated the iOS/Android release pipeline end to end and layered in a risk-weighted test suite, cutting manual QA time by more than half.",
  },
  {
    title: "Turning around a program with a 40% change-failure rate",
    tag: "Delivery Optimization",
    summary:
      "Introduced DORA metrics as a shared language between engineering and leadership, then used the data to target the two bottlenecks actually causing failed releases.",
  },
];

export const nav = pipeline.map((p) => ({ key: p.key, label: p.stage }));
