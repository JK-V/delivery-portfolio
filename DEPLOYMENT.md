# Deployment Guide (Free Hosting)

This is a static site (`npm run build` outputs plain HTML/CSS/JS into
`dist/`), so any static host works. Three good free options below —
**Vercel is the easiest** if you're not sure which to pick.

Before any of these: push your project to a GitHub repository.

```bash
cd delivery-portfolio
git init
git add .
git commit -m "Initial commit: delivery pipeline portfolio"
gh repo create velocityfoundry/delivery-portfolio --public --source=. --push
# (or create the repo manually on github.com and follow its "push an
# existing repository" instructions)
```

---

## Option A — Vercel (recommended)

1. Go to https://vercel.com and sign up / log in with your GitHub account.
2. Click **Add New → Project**.
3. Select your `delivery-portfolio` repo and click **Import**.
4. Vercel auto-detects Vite. Confirm these settings (they should be the default):
   - **Build command:** `npm run build`
   - **Output directory:** `dist`
5. Click **Deploy**. In ~30–60 seconds you get a live URL like
  `https://delivery-portfolio-velocityfoundry.vercel.app`.
6. Every future `git push` to your main branch auto-redeploys.
7. Optional: **Settings → Domains** to attach a custom domain for free
   (you still pay your domain registrar, not Vercel).

## Option B — Netlify

1. Go to https://app.netlify.com and sign up / log in with GitHub.
2. Click **Add new site → Import an existing project**.
3. Pick your repo.
4. Set:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
5. Click **Deploy site**. You'll get a URL like
   `https://random-name-123.netlify.app` (rename it under **Site settings →
   Change site name**).
6. Every `git push` auto-redeploys.

## Option C — GitHub Pages

GitHub Pages doesn't run a build step for you by default, so you deploy the
built `dist/` folder via GitHub Actions.

1. In your repo, create `.github/workflows/deploy.yml`:

   ```yaml
   name: Deploy to GitHub Pages
   on:
     push:
       branches: [main]
   permissions:
     contents: read
     pages: write
     id-token: write
   jobs:
     build:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v4
         - uses: actions/setup-node@v4
           with:
             node-version: 20
         - run: npm install
         - run: npm run build
         - uses: actions/upload-pages-artifact@v3
           with:
             path: dist
     deploy:
       needs: build
       runs-on: ubuntu-latest
       environment:
         name: github-pages
         url: ${{ steps.deployment.outputs.page_url }}
       steps:
         - id: deployment
           uses: actions/deploy-pages@v4
   ```

2. Since the site will live at `https://velocityfoundry.github.io/delivery-portfolio/`
  (a subpath, not the domain root), add a `base` to `vite.config.js`:

   ```js
   export default defineConfig({
     plugins: [react()],
     base: "/delivery-portfolio/",
   });
   ```

3. In your repo: **Settings → Pages → Source → GitHub Actions**.
4. Push to `main`. The workflow builds and deploys automatically. Check
   progress under the **Actions** tab; the live URL appears once it's green.

---

## Which should you pick?

| | Vercel | Netlify | GitHub Pages |
|---|---|---|---|
| Setup effort | Lowest | Low | Medium (needs the workflow file + `base` config) |
| Auto-deploy on push | ✅ | ✅ | ✅ |
| Custom domain (free, you own the domain) | ✅ | ✅ | ✅ |
| Good for | Fastest path to a live link | Near-identical to Vercel | If you want everything to stay inside GitHub only |

For a portfolio site like this, **Vercel or Netlify** get you live in under
two minutes with zero config files to write. Use GitHub Pages only if you
specifically want to avoid a third-party hosting account.
