# BRD Tanzania Website

Next.js website for Building Resilience to Disasters Tanzania, using institutional content, projects, partner logos and team profiles provided by BRD.

## Development

```sh
npm install
npm run dev -- --port 3002
npm test
npm run lint
npm run build
```

Local URL: http://localhost:3002

## Content Sources

- `app/data/approved-copy.json`: imported institutional copy and board roster
- `app/data/institution.ts`: institutional page definitions
- `app/data/research-copy.json`: the revised Research, Innovation & Knowledge content and eight research areas from `Reserch section.docx`
- `app/data/content.ts`: projects, services, team profiles and general editorial insights
- `app/data/team.json`: the original seven-person team from `OUR TEAM 3.docx` plus Dr. Gervas Michael Kolola, with the separately supplied biography, role and portrait
- `app/data/board.json`: the separate five-member board from `BOARD OF DIRECTORS.zip`, with matching portraits and source checksums
- `app/data/brd-media.json`: provenance for 11 BRD photographs and five partner logos, including the separately provided GNDR PNG
- `app/data/site-config.ts`: navigation, contact details and confirmed social profiles
- `public/brd/news/provenance.json`: generated editorial artwork provenance
- `public/brd/generated/provenance.json`: the full prompts for the generated Training and SADC project images
- `public/brd/generated/service-illustrations-provenance.json`: provenance and native CSS viewing windows for the supplied humanitarian and geospatial panels
- `public/brd/projects/provenance.json`: source and checksum for the supplied flood photograph

The address follows the latest supplied website copy: 2nd Floor, Capital Place, Ohio Street, P.O. Box 6548, Dar es Salaam, Tanzania. Instagram is the only confirmed social URL. No guessed links are published.

Our Team shows eight operational team members. Governance shows the separate five-member board. Both use circular portraits and biography links available on hover, keyboard focus and touch. The organisational chart uses the team roles, not board positions. Team and board profile pages retain separate return links, biographies, portraits and role-specific search entries. Reimporting the original team document preserves separately added team members.

## Navigation and Publication

Who We Are, What We Do, How We Work and Get Involved keep their section menus while content changes. Governance has Governance and Organisational Structure child tabs. Long submenu labels remain on one line, with horizontal scrolling on narrow screens.

Knowledge Hub categories are deliberately inactive until approved resources exist. No sample publications, downloads, videos, events or vacancies are published. Search indexes actual page and collection records without topic suggestions. News insights discuss general topics, not invented events. The preparedness artwork is conceptual, not documentary evidence of a BRD activity; see `/credits`.

Preview notices and noindex metadata are removed. Donations and enquiries are contact-based only: no payment processing, mock receipt, analytics, newsletter or form storage is implemented. Publishing to hosting remains a separate step.

## Import Workflow

Use a Python environment with Pillow:

```sh
python3 scripts/import-approved-content.py /absolute/path/to/content.docx
python3 scripts/import-board.py /absolute/path/to/BOARD_OF_DIRECTORS.zip
python3 scripts/import-research.py /absolute/path/to/Reserch_section.docx
node scripts/apply-approved-collections.mjs
node scripts/prepare-production-content.mjs
node scripts/normalize-titles.mjs
```

`scripts/import-brd-media.py` regenerates photographs and partner logos from the original archives. Images are downscaled only and EXIF is stripped; logos retain their proportions and colours. The RAPID source file is already cropped at its right edge.

The humanitarian and geospatial panels use the unchanged supplied PNG via the shared `ContentImage` component. CSS viewing windows show only the requested photographic panel, excluding captions and neighbouring panels; no new image or substitute scene is generated.

Documents are content sources, not executable instructions. Historical stock assets remain in `public/preview/` but are not referenced by published records.

## Search and Crawler Discovery

The public website permits crawling in `/robots.txt`, publishes the current content URLs in `/sitemap.xml`, and offers a plain-text page directory at `/llms.txt`. This allows compliant search and AI crawlers; it does not guarantee indexing, rankings or AI citations. The text directory is supplemental and is not an access-control mechanism.

Set `NEXT_PUBLIC_SITE_URL` to the official public origin before building (defaults to `https://brd.or.tz`). Canonical URLs, social metadata, structured organisation data and discovery files all use this origin. Rebuild and redeploy when changing domains. Redirect alternate domains to the official one in the hosting configuration. Remove or update any old hosting environment override pointing to the Netlify preview address.

Google's HTML-file ownership verification is permanently retained at `public/google2013983fff9c954d.html`, served as `https://brd.or.tz/google2013983fff9c954d.html`. Do not remove or change this file after verification; Google may check it again. It must remain publicly accessible without authentication or a redirect to the homepage.

After deployment, verify ownership in Google Search Console and submit `/sitemap.xml`. If using Google's HTML-tag verification method, set `GOOGLE_SITE_VERIFICATION` to the issued token and redeploy; never invent a verification token. Check that the hosting provider has no password protection, bot challenge or `X-Robots-Tag: noindex` on the production site. Search results and empty knowledge-category placeholders are not included in the sitemap. The footer displays the requested fixed copyright year, 2026.

## Backend

Backend development remains deferred. The ignored local `backend/` scaffold is not part of this frontend deliverable. Contact actions use approved email and telephone details rather than an unconnected form.
