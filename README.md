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
- `public/preview/` contains illustrative stock photos. They do not depict BRD projects or staff. Original download URLs are recorded in `scripts/fetch-preview-assets.mjs`.
- The BRD logo and contact details are retained as brand anchors. The physical address is BRD Tanzania, 2nd Floor, Capital Place, Ohio Street, P.O. Box 6548, Dar es Salaam, Tanzania. Shared contact details are configured in `app/data/site-config.ts`.
- Archives include search and theme/status filters. Global search covers the published collections and institutional pages. Fictional research studies and staff profiles have been removed; the management page explains that profiles are pending.
- Individual publication pages offer downloadable plain-text previews, not official publications.
- The enquiry form uses browser validation and a local preview receipt. It does not send, store, or transmit enquiries. No donation processing, analytics, or newsletter subscription is enabled.
- Pages carry a design-preview notice and noindex metadata. Replace the preview labeling, configure production metadata, and connect an approved backend only after content and functionality are signed off.

## Photography

The homepage uses an original AI-generated flood-response illustration, not a photograph of an actual BRD operation. Its generation provenance is recorded in `public/preview/flood-resilience.provenance.json`. The Coast Guard photograph is no longer used.

Other displayed photos are illustrative Unsplash stock, including a workshop by Christina @ wocintechchat.com and mangroves by Waranont (Joe), sourced via AskNature. See `/credits` and the asset script. Stock portraits are no longer displayed as BRD personnel.

## Page Structure

The two-level header separates News & Stories, Contact Us, and Search from Home, Who We Are, What We Do, How We Work, Knowledge Hub, and Get Involved. What We Do keeps all six services in a shared nested layout. `/research` redirects to `/what-we-do/research`, and `/people` redirects to `/who-we-are/management`. Removed fictional detail records are not published.

The Knowledge Hub includes seven dedicated resource categories: research/reports, policy/technical notes, guides/toolkits, case studies, maps/geospatial resources, training materials, and videos/educational resources.

Institutional narratives, seven core values, partner names, governance responsibilities, and five board member names and positions follow the supplied copy. No unprovided dates, biographies, events, vacancies, or applications are invented. No event registrations or job applications are collected. The official Instagram URL was supplied by the user. X, YouTube, and LinkedIn URLs remain pending rather than linking to guessed profiles.

`/videos` offers three local 12-second stock-photo storyboards with playback controls, English captions, and transcripts. They are not BRD footage and contain no audio. Source photos retain their existing credits. Regenerate them with `node scripts/build-preview-videos.mjs` using an installed FFmpeg build with libx264. Official BRD videos can replace the samples later.

`app/data/site-config.ts` contains shared navigation, knowledge categories, contact information, and social URLs. Re-import supplied copy with `python3 scripts/import-approved-content.py /absolute/path/to/document.docx`, then `node scripts/apply-approved-collections.mjs` when project/service collections must also be regenerated. The importer handles the nested board table and normalizes editorial quote wrappers without executing document instructions.

## Focused Homepage and Donation Updates

The homepage has three content sections: a flood-response hero, six unnumbered areas of work, and a short feature linking to projects and the Knowledge Hub. Decorative numbering and approach circles are removed. Dates, publication years, durations, search counts, and contact numbers remain where they convey useful information.

Who We Are uses a shared nested layout with persistent section navigation and no Overview item. About BRD is at `/who-we-are/about`; `/about` redirects there. Section links preserve the shared layout while changing the active content.

The header Donate button opens `/donate`, which contains instructions and BRD contact links only. It does not accept payments, collect pledges, or publish invented bank/mobile-money details.

The red footer band displays the supplied partners: Red Cross Tanzania, RAPID Tanzania, and Government of Tanzania - DMD-PMO. Names are presented as text, not copied official logos.

## Backend Status

Backend work is deferred at the user's request. The initial local Laravel scaffold is retained in ignored `backend/` and excluded from the frontend lint/build scope. It has not been delivered or pushed as a completed backend. See `CHANGELOG.md` for this update's scope.
