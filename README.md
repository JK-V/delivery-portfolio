# VelocityFoundry — Delivery Pipeline Portfolio

A one-page site built for a software delivery / engineering process consultant
profile: new project setup, Agile operating models, CI/CD, quality
engineering, and delivery optimization.

The whole site is framed as a live CI/CD pipeline — a "Pipeline Spine" runs
through the nav, the hero animation, and the process section as five real
stages: **Setup → Agile Ops → Automate → Verify → Release**.

Stack: **React 19 + Vite 8 + Tailwind CSS v4**. No backend, no database —
static site, fast to run, free to host.

## Hero intro video

Open the actual intro video file here:

- [Watch velocityFoundary_intro.mp4](./velocityFoundary_intro.mp4)

This is the reliable README approach because GitHub does not reliably render local MP4 files inline in markdown previews. A direct link will open the media in the browser and play correctly.

---

## 1. Project structure

```
delivery-portfolio/
├── src/
│   ├── data/
│   │   └── content.js       ← ALL editable copy lives here (name, bio,
│   │                            pipeline stages, stats, case studies, email)
│   ├── hooks/
│   │   └── useActiveSection.js  ← scroll-spy for the nav status bar
│   ├── components/
│   │   ├── Header.jsx        ← sticky nav + live "AVAILABLE" status badge
│   │   ├── Hero.jsx           ← headline + animated pipeline run on load
│   │   ├── Process.jsx        ← the 5 pipeline stages (services/process)
│   │   ├── Stats.jsx          ← impact metrics + case studies
│   │   ├── Contact.jsx        ← contact form (mailto, no backend needed)
│   │   └── Footer.jsx
│   ├── App.jsx                ← assembles all sections
│   ├── main.jsx                ← React entry point
│   └── index.css               ← design tokens (colors/fonts) + global styles
├── index.html                  ← page title + meta description
├── postcss.config.js
├── package.json
└── vite.config.js
```

**Why this structure:** every section is its own component, all copy is
centralized in `src/data/content.js`, and shared behavior (scroll-spy) is
a hook. To change words, edit `content.js`. To change layout/behavior of one
section, edit exactly one file in `components/`. Nothing else needs to change.

---

## 2. How to run it locally

### Prerequisites
- [Node.js](https://nodejs.org) v18 or newer (v20+ recommended)
- npm (comes with Node.js)

### Steps

```bash
# 1. Move into the project folder
cd delivery-portfolio

# 2. Install dependencies (only needed once, or after changing package.json)
npm install

# 3. Start the local dev server
npm run dev
```

Vite will print a local URL, typically:

```
➜  Local:   http://localhost:5173/
```

Open that in your browser. Editing any file in `src/` hot-reloads instantly.

### Other useful commands

```bash
npm run build     # Produce a production build in dist/
npm run preview   # Serve the production build locally, to sanity-check before deploying
npm run lint      # Run ESLint
```

---

## 3. Customize before you launch

Open `src/data/content.js` and update:

1. `profile` — your name, role, email, tagline, summary, social links.
2. `pipeline` — the 5 stage descriptions/details (already matches the
   profile brief; tweak wording to match your actual engagements).
3. `stats` — these are **illustrative placeholder numbers**. Replace with
   your own real metrics before publishing, or remove the section in
   `App.jsx` if you don't have numbers yet.
4. `caseStudies` — replace with real (anonymized if needed) project summaries.

Optional:
- Favicon: replace `public/favicon.svg`.
- Colors/fonts: edit the `@theme` block at the top of `src/index.css`.

---

## 4. Deployment

See [`DEPLOYMENT.md`](./DEPLOYMENT.md) for step-by-step instructions to
deploy this for free on Vercel, Netlify, or GitHub Pages.
