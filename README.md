# BRD Tanzania Design Prototype

A Next.js design preview inspired by Climate-KIC's information hierarchy: grouped navigation, a browsable portfolio, individual profiles, a knowledge directory, editorial stories, and clear participation paths. This is not a published institutional website.

## Local Preview

```sh
npm install
npm run dev -- --port 3002
```

Open http://localhost:3002. Verification: `npm test`, `npm run lint`, and `npm run build`.

## Content and Behavior

- `app/data/approved-copy.json` contains copy imported from BRD's supplied Word document, including its nested board roster. `app/data/institution.ts` organizes the copy into pages. `app/data/content.ts` contains the four supplied project summaries and updated services; knowledge resources and news remain labelled design samples.
- `public/brd/` contains the 11 photographs and four partner logos supplied for the website. `app/data/brd-media.json` records original filenames, dimensions and checksums. `public/preview/` retains stock media for clearly labelled sample resources and videos.
- The BRD logo and contact details are retained as brand anchors. The physical address is BRD Tanzania, 2nd Floor, Capital Place, Ohio Street, P.O. Box 6548, Dar es Salaam, Tanzania. Shared contact details are configured in `app/data/site-config.ts`.
- Archives include search and theme/status filters. Global search covers the published collections and institutional pages. Fictional research studies and staff profiles have been removed; Our Team explains that names and roles are pending.
- Individual publication pages offer downloadable plain-text previews, not official publications.
- The enquiry form uses browser validation and a local preview receipt. It does not send, store, or transmit enquiries. No donation processing, analytics, or newsletter subscription is enabled.
- Pages carry a design-preview notice and noindex metadata. Replace the preview labeling, configure production metadata, and connect an approved backend only after content and functionality are signed off.

## Photography

The homepage uses the supplied Dar es Salaam photograph and a BRD workshop photograph. Workshop and meeting images also appear in relevant institutional pages and galleries. No people are identified or assigned to projects without confirmation. The generated flood illustration and Coast Guard photograph are no longer used.

Rebuild the optimised media from the supplied ZIP archives with `python3 scripts/import-brd-media.py` using a Python environment with Pillow. The script downscales only, strips EXIF, preserves logo colours and proportions, and records source checksums. The supplied RAPID file is cropped at its right edge; the website does not crop it further.

Other displayed photos are illustrative Unsplash stock, including a workshop by Christina @ wocintechchat.com and mangroves by Waranont (Joe), sourced via AskNature. See `/credits` and the asset script. Stock portraits are no longer displayed as BRD personnel.

## Page Structure

The two-level header separates News & Stories, Contact Us, and Search from Home, Who We Are, What We Do, How We Work, Knowledge Hub, and Get Involved. What We Do is a single header link with no dropdown or repeated service tab strip. Its six service pages remain accessible through content links and an All our work return link. `/research` redirects to `/what-we-do/research`, and `/people` redirects to `/who-we-are/team`.

Knowledge Hub has three groups: Publications & Reports, Tools & Geospatial Resources, and Training & Learning. All seven old category URLs redirect to the appropriate new group, and every resource belongs to one group.

Institutional narratives, seven core values, partner names, governance responsibilities, and five board member names and positions follow the supplied copy. No unprovided dates, biographies, events, vacancies, or applications are invented. No event registrations or job applications are collected. The official Instagram URL was supplied by the user. X, YouTube, and LinkedIn URLs remain pending rather than linking to guessed profiles.

`/videos` offers three local 12-second stock-photo storyboards with playback controls, English captions, and transcripts. They are not BRD footage and contain no audio. Source photos retain their existing credits. Regenerate them with `node scripts/build-preview-videos.mjs` using an installed FFmpeg build with libx264. Official BRD videos can replace the samples later.

`app/data/site-config.ts` contains shared navigation, knowledge categories, contact information, and social URLs. Re-import supplied copy with `python3 scripts/import-approved-content.py /absolute/path/to/document.docx`, then `node scripts/apply-approved-collections.mjs` when project/service collections must also be regenerated. The importer handles the nested board table and normalizes editorial quote wrappers without executing document instructions.

## Focused Homepage and Donation Updates

The homepage has three content sections: a Dar es Salaam hero, six unnumbered areas of work, and a workshop feature linking to projects and the Knowledge Hub. Decorative numbering and the entire four-step approach block are removed. Dates, publication years, durations, search counts, and contact numbers remain where they convey useful information.

Who We Are uses a shared nested layout with persistent section navigation and no Overview item. About BRD is at `/who-we-are/about`; `/about` redirects there. Section links preserve the shared layout while changing the active content.

Governance and the board roster are combined at `/who-we-are/organisational-structure`, with a two-level organogram reflecting the supplied Board and Executive Management responsibilities. Old `/governance` and `/board` slugs redirect there. Our Team replaces Our Management Team; `/who-we-are/management` redirects to `/who-we-are/team`. Wider team identities remain unprovided, so only the confirmed board roster is named.

The header Donate button opens `/donate`, which contains instructions and BRD contact links only. It does not accept payments, collect pledges, or publish invented bank/mobile-money details.

The red footer band and partner page display all four supplied logos: Red Cross Tanzania, RAPID Tanzania, Government of Tanzania - DMD-PMO, and Public Service Social Security Fund (PSSSF). Logos use contain-fit so the layout does not crop them.

## Backend Status

Backend work is deferred at the user's request. The initial local Laravel scaffold is retained in ignored `backend/` and excluded from the frontend lint/build scope. It has not been delivered or pushed as a completed backend. See `CHANGELOG.md` for this update's scope.
