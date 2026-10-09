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
- The BRD logo, contact details, and updated Tegeta address are retained as brand anchors. Other content is a proposal, not an institutional claim.
- Archives include search and theme/status filters. People have team-group tabs. Global search covers all sample collections.
- Individual publication pages offer downloadable plain-text previews, not official publications.
- The enquiry form uses browser validation and a local preview receipt. It does not send, store, or transmit enquiries. No donation processing, analytics, or newsletter subscription is enabled.
- Pages carry a design-preview notice and noindex metadata. Replace the preview labeling, configure production metadata, and connect an approved backend only after content and functionality are signed off.

## Photography

Usambara Mountains: Joachim Huber via Wikimedia Commons, CC BY-SA 2.0. Natural color; responsive cropping. Source and license linked on `/credits`.

Other photos are illustrative Unsplash stock, including a workshop by Christina @ wocintechchat.com, a portrait by Olawale Munna, and mangroves by Waranont (Joe), sourced via AskNature. See `/credits` and the asset script. Stock portraits are paired with fictional profiles solely to demonstrate layout.

## Page Structure

Home, About, Research, Projects, Services, Our People, Knowledge Hub, News & Stories, Get Involved, Contact, Search, and Photography Credits. Each collection record has an individual static detail page, related content, and a breadcrumb back to its directory.
