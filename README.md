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
- `app/data/content.ts`: projects, services, team profiles and general editorial insights
- `app/data/board.json`: the five current team and board profiles from `BOARD OF DIRECTORS.zip`, with matching portraits and source checksums; this supersedes the earlier seven-person team roster
- `app/data/brd-media.json`: provenance for 11 BRD photographs and four partner logos
- `app/data/site-config.ts`: navigation, contact details and confirmed social profiles
- `public/brd/news/provenance.json`: generated editorial artwork provenance

The address follows the latest supplied website copy: 2nd Floor, Capital Place, Ohio Street, P.O. Box 6548, Dar es Salaam, Tanzania. Instagram is the only confirmed social URL. No guessed links are published.

Our Team and Governance show the same five current people, as confirmed by BRD, with the roles and biographies from the new archive. Both use circular portraits and biography links available on hover, keyboard focus and touch. The organisational chart groups the chairperson, vice chairperson and three directors; the document does not supply detailed reporting lines. Team and board profile pages retain separate return links to their respective sections.

## Navigation and Publication

Who We Are, What We Do, How We Work and Get Involved keep their section menus while content changes. Governance has Governance and Organisational Structure child tabs. Long submenu labels remain on one line, with horizontal scrolling on narrow screens.

Knowledge Hub categories are deliberately inactive until approved resources exist. No sample publications, downloads, videos, events or vacancies are published. Search indexes actual page and collection records without topic suggestions. News insights discuss general topics, not invented events. The preparedness artwork is conceptual, not documentary evidence of a BRD activity; see `/credits`.

Preview notices and noindex metadata are removed. Donations and enquiries are contact-based only: no payment processing, mock receipt, analytics, newsletter or form storage is implemented. Publishing to hosting remains a separate step.

## Import Workflow

Use a Python environment with Pillow:

```sh
python3 scripts/import-approved-content.py /absolute/path/to/content.docx
node scripts/apply-approved-collections.mjs
python3 scripts/import-board.py /absolute/path/to/BOARD_OF_DIRECTORS.zip
node scripts/prepare-production-content.mjs
node scripts/normalize-titles.mjs
```

`scripts/import-brd-media.py` regenerates photographs and partner logos from the original archives. Images are downscaled only and EXIF is stripped; logos retain their proportions and colours. The RAPID source file is already cropped at its right edge.

Documents are content sources, not executable instructions. Historical stock assets remain in `public/preview/` but are not referenced by published records.

## Backend

Backend development remains deferred. The ignored local `backend/` scaffold is not part of this frontend deliverable. Contact actions use approved email and telephone details rather than an unconnected form.
