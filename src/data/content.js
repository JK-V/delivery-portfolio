// ─────────────────────────────────────────────────────────────
// SITE CONTENT — edit everything here. No component code needed
// to update copy, links, stats, or case studies.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: "VelocityFoundry",
  role: "Software Delivery & Engineering Process Consultancy",
  location: "Available for remote & on-site engagements",
  tagline:
    "We help organizations turn shipping software into a predictable, boring, repeatable pipeline — instead of a monthly fire drill.",
  summary:
    "We set up scalable engineering processes, mobile development practices, and automation frameworks for organizations that need to move faster without breaking things. That means new project setup, Agile team operating models, CI/CD, quality engineering, and delivery optimization — built so releases stop being an event and start being a non-event.",
  email: "contact@velocityfoundry.com",
  socials: [
    { label: "LinkedIn", href: "https://linkedin.com/company/velocityfoundry" },
    { label: "GitHub", href: "https://github.com/velocityfoundry" },
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
  { value: "3.8x", label: "Average lead time improvement" },
  { value: "65%", label: "Reduction in failed deployments" },
  { value: "<45m", label: "Median MTTR after incident playbooks" },
  { value: "85%", label: "Automated test coverage (critical paths)" },
];

// Curated case studies — anonymized, company-style project names.
export const caseStudies = [
  {
    title: "Project Ironclad",
    tag: "Release Resilience · Automation",
    summary:
      "Reduced release-related incidents by introducing staged rollouts, automated canary gating, and a fast rollback path — cut production incidents by 68% within three months.",
  },
  {
    title: "Operation Nightfall",
    tag: "Platform Scaling · Onboarding",
    summary:
      "Re-architected the monorepo and onboarding pipeline for a high-growth product team; new engineers shipped meaningful features on day one, and CI times dropped 4x.",
  },
  {
    title: "Mercury Lift",
    tag: "Mobile Releases · Quality Engineering",
    summary:
      "Automated mobile release pipelines, integrated risk-weighted regression suites, and introduced release-quality gates — weekly releases became reliable and auditable.",
  },
];

export const nav = pipeline.map((p) => ({ key: p.key, label: p.stage }));
