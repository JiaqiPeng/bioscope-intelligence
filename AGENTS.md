# BioScope daily publication

Preserve the established layout, typography, logo, routes and article style.

Before selecting a daily edition:
- Run a broad dated headline sweep across major biotech/pharma trade publications and news wires, followed by primary-source verification.
- Run separate searches for major licensing/acquisition/platform deals and China-to-global partnerships. Check both counterparties' releases and exchange filings when available.
- Compare candidates across approvals, pivotal trials, deals and policy before choosing the leading stories. Do not stop researching after finding four plausible stories.
- Keep a concise candidate/source/selection record outside the deployable site. Explicitly account for major deal headlines in the selection.
- Normally select 1–4 consequential stories. The user explicitly requested the two missing October 19 deals in addition to the four published stories; the user subsequently removed the EyePoint story, leaving five October 19 stories. Do not silently delete published coverage to meet a quota.

For every published transaction story, add or update its structured Deal Tracker record and connect article ↔ deal ↔ existing company profiles. Do not invent company profiles merely to make a link work. Classify China-origin partnerships explicitly so China intelligence can discover them through deal links, not just the headquarters of an existing company profile. Distinguish Swiss/European partners from US partners.

Separate upfront, anniversary, contingent milestones, royalties and acquisition equity/enterprise values. Do not invent exact totals from ranges, lower bounds or unspecified upfront payments. Keep such records out of numeric aggregates and display their actual disclosed terms.

Use the news edition date as the publication date. Verify same-day public availability. Preserve earlier reporting and archive behavior.

Before publishing, build and check the homepage, news, every new article and deal, related company pages, China topic, search, mobile images and links. Check that each transaction article has a valid deal connection. Verify the live deployment after publishing; a local build alone is not completion.

Before drafting or editing any article, read EDITORIAL-STYLE.md and follow its reusable drafting instruction and editorial review. Its accessible journalism standard supersedes the earlier instruction to preserve the old article style. Preserve design and edition dates. This requirement applies to future automated or agent-authored reporting as well as revisions.

Search indexing: production deployment must run the full npm build, including scripts/prerender.cjs, to regenerate all clean URLs and sitemap.xml. Preserve legacy hash-link compatibility. Verify HTML content with JavaScript disabled and clean-route reloads after routing changes. Do not submit hash URLs to search engines.
