# Change Log

## 2026-10-30

- Added the supplied Google Search Console verification HTML file unchanged at the public website root, with a regression test to retain its exact verification text. Updated the default canonical/discovery origin to the confirmed production domain, https://brd.or.tz.
- Added search and AI crawler discovery with permissive robots.txt, a content-driven XML sitemap, a supplemental llms.txt directory, canonical and social metadata, and structured NGO/website data. Added optional Google verification configuration and deployment instructions. Set the footer copyright to 2027 BRD Tanzania.
- Added Dr. Gervas Michael Kolola as Public Administration and Health Systems Specialist using the supplied biography and unchanged portrait. The team directory, biography, search and organisational chart now include him; the board remains unchanged. Reimporting the original team document preserves additional members.
- Renamed the Research section to Research, Innovation & Knowledge across the page, navigation, homepage and service listing. Imported the revised research copy, eight thematic areas and collaboration invitation from Reserch section.docx, preserving existing URLs.
- Added the supplied humanitarian and geospatial image panels to their pages and service listings. Native CSS framing displays just each photographic panel, without the coloured caption blocks, while retaining the original PNG unchanged.

- Restored the original seven-person team, including its biographies, portraits and operational roles. Retained the five-member Board of Directors as a separate roster and restored the team-based organisational chart.
- Replaced the repetitive Training gallery with one new AI-generated training image and used a separate generated gender-inclusive planning image for the SADC project. Replaced the flood-resilience project image with the supplied Floods in Tanzania photograph. Recorded prompts and provenance, and preserved full project-image framing.
- Removed the video and knowledge-resource publication placeholder messages, including category pages. Search retains separate team and board roles.

## 2026-10-29

- Added Global Network of Civil Society Organisations for Disaster Reduction (GNDR) to the partners page and footer, retaining the supplied logo unchanged and recording its source checksum. Adjusted responsive partner layouts for five logos.

- Replaced the earlier team and board rosters with the five profiles in `BOARD OF DIRECTORS.zip`, following confirmation that there are now only five people. Imported the new roles, complete biographies and filename-matched portraits, and updated the organisational chart and search. Both sections offer circular portraits and biography links with section-specific return navigation.

- Removed remaining photograph-supplier wording from image alternative text and import scripts, in addition to the removed visible caption.

- Imported seven team members, matching portraits and biographies from `OUR TEAM 3.docx`; added circular portraits and accessible View bio links.
- Restored persistent What We Do navigation and removed duplicated body menus. How We Work, Knowledge Hub and Get Involved descriptions now sit below their headings.
- Split Governance and Organisational Structure into child tabs: the board narrative and blue board box are separate from the green-headed team organogram.
- Kept the mission submenu label on one line and added red, blue and green active navigation accents.
- Removed heading-ending full stops, supplier badges, preview labels and preview noindex metadata. Honorifics and initials remain intact.
- Removed dummy knowledge resources, downloads, videos and search suggestions. Knowledge categories are intentionally inactive.
- Replaced the middle news image with generated editorial artwork depicting Black adults learning with BRD branding. Insights have no invented activity dates or authors.
- Replaced the mock enquiry receipt with direct contact links. Backend work remains deferred.

## 2026-10-23

- Applied the five items in `BRD Website Review.docx`.
- Combined the governance and board submenu pages under Organisational Structure, with an accessible two-level organogram based on supplied governance responsibilities. The five confirmed board names remain listed there. Old governance and board links redirect to the new page.
- Renamed Our Management Team to Our Team. No wider team names or photo identities were supplied; no profiles were invented. Old management and people links redirect to Our Team.
- Kept What We Do as one top-level header link, removed its dropdown and repeated service navigation strip, and retained the six service pages through content links and an All our work return link.
- Removed the four-step From evidence to resilience block from How We Work and Our Approach.
- Consolidated Knowledge Hub into Publications & Reports, Tools & Geospatial Resources, and Training & Learning. All seven previous category URLs redirect to the appropriate new group.
- Imported all 11 supplied photographs and four partner logos, including PSSSF. The Dar es Salaam image replaces the generated homepage hero. Workshop and meeting photographs replace relevant stock imagery and appear in contextual galleries.
- Added a media provenance manifest with original filenames and checksums. Images are resized down only, EXIF is removed, logos are not recoloured or further cropped, and the already-cropped RAPID source is disclosed.
- During verification, npm reported critical advisories affecting the existing Next.js 16.4.0 dependency. Updated Next.js and its matching ESLint configuration to 16.4.3; the subsequent install audit reported zero vulnerabilities.

## 2026-10-22

- Imported BRD's supplied `Website _conntents_edited.docx` into a traceable copy file using `scripts/import-approved-content.py`.
- Replaced institutional narratives, seven core values, consultancy and training details, strategy, engagement copy, donation guidance, and contact introduction.
- Replaced the fictional portfolio with the four supplied project summaries. No dates, budgets, client names, or impact metrics were invented. The incomplete first project heading is displayed as "Enhancing Flood Resilience in Tanzania".
- Removed fictional published research, named staff, board profiles, vacancies, and upcoming events. Imported the five supplied board member names and positions from the document's nested table as a text roster. Unprovided management profiles and opportunities have honest pending states.
- Grouped all six services, including Research, Geospatial and Earth Observation, and Outreach, under persistent What We Do navigation. Legacy `/research` redirects to `/what-we-do/research`; `/people` redirects to management.
- Updated partner names and footer groups from the document. Partner names are text, not copied institutional logos.
- Replaced the Coast Guard homepage photograph with an original AI-generated flood-response illustration. The image is explicitly identified as illustrative, not a BRD operation.
- Kept the existing licensed stock landscape and workshop images and their attribution information. Remaining knowledge resources, news, and videos stay clearly labelled as samples until approved replacements are supplied.
- Backend work is deferred at the user's request. The initial Laravel scaffold is retained locally in the ignored `backend/` directory and is not part of the website repository or a completed backend deliverable.
