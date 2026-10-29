# BioScope Intelligence — GitHub publication copy

This is the standalone publication root. Upload this folder's contents to a new GitHub repository, not its parent Sites checkout or Git history. A local Git repository has been initialized on main. The publication repository is https://github.com/JiaqiPeng/bioscope-intelligence and the public site is https://bioscopeintel.com/.

## Framework and build

Plain HTML, CSS and vanilla JavaScript. No React, Vite, server, database or runtime API credentials. `site/` contains the complete existing application and editorial photo assets, the supplied logo and retained illustrations. Node 22+ validates and packages the site. Playwright renders the existing UI into static HTML for search engines:

```sh
npm install --ignore-scripts
npx playwright install chromium
npm run build
```

Production output is `_site/`; do not commit it. The build validates scripts, assets and content relationships, then generates complete HTML pages, canonical metadata, structured data, sitemap.xml, robots.txt and a real 404 page. `node scripts/build.cjs` alone is validation/packaging only; always run `scripts/prerender.cjs` afterward for publication. An installed browser may be selected with `PLAYWRIGHT_CHANNEL` for local builds.

## GitHub Pages setup (when ready to publish)

1. Create/select a GitHub repository and commit only this folder's contents to its default branch.
2. In repository Settings → Pages → Build and deployment, select **GitHub Actions**.
3. Open Actions → Deploy BioScope to GitHub Pages → Run workflow.

The workflow is manual-only so merely uploading the project does not deploy it. It needs no personal access token or custom secret: GitHub supplies job-scoped permissions. GitHub Pages is configured to use this workflow. Publish reviewed updates by pushing main and dispatching the workflow.

Configuration follows [GitHub's custom Pages workflow documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages).

## Routes and assets

The production origin is https://bioscopeintel.com/. Every article, company, deal and section has a static directory URL, such as `/article/digital-glp1-women-study/`. Existing `#/article/...` links are converted in the browser without losing the destination. A root base URL keeps assets consistent on nested pages. The build crawls internal links and includes all reporting, including archived stories, in the sitemap. Submit https://bioscopeintel.com/sitemap.xml in Google Search Console after domain verification. Search engine inclusion is not guaranteed.

## Preserved content

Thirty-two news articles across the October 16–25 editions and two original analyses published October 23, all 20 major-company profiles plus four existing specialist profiles, seventeen deal records, the Reporting Archive's seven-day behavior, tags, search, related reporting, image captions and article dates are preserved. Analysis distinguishes primary-source facts from strategic interpretation and conditional scenarios. Current article covers use editorial WebP images under `site/images/`; the supplied logo uses PNG. The image direction is documented in `VISUAL-IDENTITY.md`. Image generation is not required during deployment.

## Publication hygiene

This export excludes Sites hosting metadata, `.git` history/remotes, credentials, local caches, preview screenshots, research scratch files and machine-specific image-generation/test helpers. `.gitignore` excludes local secrets and generated output. Automated scans are a safeguard, not a guarantee against every possible secret format; review future staged changes before committing. The custom domain uses GitHub Pages HTTPS.


Editorial drafting and review follow [EDITORIAL-STYLE.md](EDITORIAL-STYLE.md), required by AGENTS.md. The site has no autonomous text-generation service; these instructions govern agent-authored editions and future integrations.
