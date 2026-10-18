# Publication readiness — 18 October 2026

- Production packaging passed using Node v24.19.0, with no external build dependencies. Workflow selects Node 22.
- 44 deployable source files preserved byte-for-byte, including all generated images and thumbnails. `.nojekyll` added only to build output.
- 44 application routes tested in headless Edge at a simulated `/bioscope/` project path, each with direct navigation and reload. No browser errors or failed local asset responses.
- Verified global search, company alias filtering, Deal Tracker filtering and five archived articles after the seven-day boundary.
- Source records: five articles, 24 companies (20 major and four existing specialists), seven deals. Existing article dates, content, images, tags, design and functionality preserved.
- Publication-file scan found no known credential signatures, private-key files, user-machine paths or private host metadata. Public content and deployable assets only; old Sites history is not included. Pattern scans cannot prove absence of every possible secret type; future changes still require review.
- The original Sites checkout is not the GitHub publication root. Use this folder as a fresh repository root; do not push the parent repository's history.
- No commit, push, GitHub repository creation, Pages activation or deployment was performed. The live Sites website was not modified.

Remaining owner setup: choose/create a GitHub repository, upload this folder's contents, select GitHub Actions as the Pages source, and manually run the supplied workflow when publication is authorized. Real GitHub execution remains untested until that step. No application compatibility blocker was found.
