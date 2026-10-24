# BioScope Intelligence — GitHub publication copy

This is the standalone publication root. Upload this folder's contents to a new GitHub repository, not its parent Sites checkout or Git history. A local Git repository has been initialized on main. The publication repository is https://github.com/JiaqiPeng/bioscope-intelligence and the public site is https://jiaqipeng.github.io/bioscope-intelligence/.

## Framework and build

Plain HTML, CSS and vanilla JavaScript. No React, Vite, server, database or runtime API credentials. `site/` contains the complete existing application and editorial photo assets, the supplied logo and retained illustrations. Node 22+ is used only for a dependency-free validation/packaging step:

```sh
npm run build
```

Equivalent without npm: `node scripts/build.cjs`. This direct Node command was used for the successful local production build because npm is not installed on the preparation host.

No npm install is required. Production output is `_site/`; do not commit it. The build validates scripts, referenced images, content relationships, archive boundaries and local-path/credential signatures. It copies the site without changing content or styling and adds `.nojekyll`.

## GitHub Pages setup (when ready to publish)

1. Create/select a GitHub repository and commit only this folder's contents to its default branch.
2. In repository Settings → Pages → Build and deployment, select **GitHub Actions**.
3. Open Actions → Deploy BioScope to GitHub Pages → Run workflow.

The workflow is manual-only so merely uploading the project does not deploy it. It needs no personal access token or custom secret: GitHub supplies job-scoped permissions. GitHub Pages is configured to use this workflow. Publish reviewed updates by pushing main and dispatching the workflow.

Configuration follows [GitHub's custom Pages workflow documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages).

## Routes and assets

Hash routes work at both `https://OWNER.github.io/` and `https://OWNER.github.io/REPOSITORY/`, for example `#/article/digital-glp1-women-study`. Keep the trailing slash before `#`. Reloading or sharing these links does not require server rewrites or a custom 404 redirect. Clean `/article/...` paths are not used by this application. All app scripts, styles and article images use relative paths. Google Fonts is the only optional external presentation dependency; existing system-font fallbacks remain unchanged. Source citations link to external publishers as before.

## Preserved content

Twenty-five news articles across the October 16–23 editions and two original analyses published October 23, all 20 major-company profiles plus four existing specialist profiles, sixteen deal records, the Reporting Archive's seven-day behavior, tags, search, related reporting, image captions and article dates are preserved. Analysis distinguishes primary-source facts from strategic interpretation and conditional scenarios. Current article covers use editorial WebP images under `site/images/`; the supplied logo uses PNG. The image direction is documented in `VISUAL-IDENTITY.md`. Image generation is not required during deployment.

## Publication hygiene

This export excludes Sites hosting metadata, `.git` history/remotes, credentials, local caches, preview screenshots, research scratch files and machine-specific image-generation/test helpers. `.gitignore` excludes local secrets and generated output. Automated scans are a safeguard, not a guarantee against every possible secret format; review future staged changes before committing. No custom domain is assumed.

