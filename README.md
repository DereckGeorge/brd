# BRD Tanzania Design Prototype

A Next.js design preview inspired by Climate-KIC's information hierarchy: grouped navigation, a browsable portfolio, individual profiles, a knowledge directory, editorial stories, and clear participation paths. This is not a published institutional website.

## Local Preview

```sh
npm install
npm run dev -- --port 3002
```

Open http://localhost:3002. Verification: `npm test`, `npm run lint`, and `npm run build`.

## Content and Behavior

- `app/data/content.ts` contains fictional projects, research, services, people, publications, and stories. Replace these records with approved BRD content later.
- `public/preview/` contains illustrative stock photos. They do not depict BRD projects or staff. Original download URLs are recorded in `scripts/fetch-preview-assets.mjs`.
- The BRD logo and contact details are retained as brand anchors. The physical address is BRD Tanzania, 2nd Floor, Capital Place, Ohio Street, P.O. Box 6548, Dar es Salaam, Tanzania. Shared contact details are configured in `app/data/site-config.ts`.
- Archives include search and theme/status filters. People have team-group tabs. Global search covers all sample collections.
- Individual publication pages offer downloadable plain-text previews, not official publications.
- The enquiry form uses browser validation and a local preview receipt. It does not send, store, or transmit enquiries. No donation processing, analytics, or newsletter subscription is enabled.
- Pages carry a design-preview notice and noindex metadata. Replace the preview labeling, configure production metadata, and connect an approved backend only after content and functionality are signed off.

## Photography

Usambara Mountains: Joachim Huber via Wikimedia Commons, CC BY-SA 2.0. Natural color; responsive cropping. Source and license linked on `/credits`.

Other photos are illustrative Unsplash stock, including a workshop by Christina @ wocintechchat.com, a portrait by Olawale Munna, and mangroves by Waranont (Joe), sourced via AskNature. See `/credits` and the asset script. Stock portraits are paired with fictional profiles solely to demonstrate layout.

## Page Structure

The two-level header separates News & Stories, Contact Us, and Search from Home, Who We Are, What We Do, How We Work, Knowledge Hub, and Get Involved. Each primary section has dedicated overview and submenu pages. Existing project, research, service, and people URLs remain available.

The Knowledge Hub includes seven dedicated resource categories: research/reports, policy/technical notes, guides/toolkits, case studies, maps/geospatial resources, training materials, and videos/educational resources.

Institutional narratives, partner names, governance models, event dates, and career opportunities are illustrative. No event registrations or job applications are collected. The official Instagram URL was supplied by the user. X, YouTube, and LinkedIn URLs remain pending rather than linking to guessed profiles.

`/videos` offers three local 12-second stock-photo storyboards with playback controls, English captions, and transcripts. They are not BRD footage and contain no audio. Source photos retain their existing credits. Regenerate them with `node scripts/build-preview-videos.mjs` using an installed FFmpeg build with libx264. Official BRD videos can replace the samples later.

`app/data/institution.ts` contains the sample institutional pages. `app/data/site-config.ts` contains shared navigation, knowledge categories, contact information, and social URLs.

## Focused Homepage and Donation Updates

The homepage now has three content sections: a flood-response hero, four unnumbered areas of work, and a short feature linking to projects and the Knowledge Hub. Decorative numbering and approach circles are removed. Dates, publication years, durations, search counts, and contact numbers remain where they convey useful information.

Who We Are uses a shared nested layout with persistent section navigation and no Overview item. About BRD is at `/who-we-are/about`; `/about` redirects there. Section links preserve the shared layout while changing the active content.

The header Donate button opens `/donate`, which contains instructions and BRD contact links only. It does not accept payments, collect pledges, or publish invented bank/mobile-money details.

The red footer band displays WHO, Red Cross, and UNICEF as explicitly illustrative partner examples, not confirmed BRD affiliations. They are text placeholders, not official partner logos.

Flood photograph: Petty Officer 3rd Class Brandon Giles / U.S. Coast Guard District 8, public domain, via Wikimedia Commons. The photograph shows rescue operations in Baton Rouge, Louisiana, not a BRD operation. The source is linked on `/credits` and recorded in the asset script.
