import copy from "./approved-copy.json" with { type: "json" };
import media from "./brd-media.json" with { type: "json" };
import directors from "./board.json" with { type: "json" };
import researchCopy from "./research-copy.json" with { type: "json" };

export type InstitutionPage = {
  slug: string;
  title: string;
  summary: string;
  image?: string;
  imageAlt?: string;
  imagePanel?: "humanitarian" | "geospatial";
  gallery?: string[];
  mode?: "mission" | "governance" | "structure" | "team" | "partners" | "approach" | "events" | "careers";
  sections: { heading: string; body: string }[];
  list?: { heading: string; items: string[] };
  action?: string;
  collaboration?: { heading: string; title: string; body: string };
};

function lines(text: string) { return text.split("\n").map((line) => line.trim()).filter(Boolean); }
function titled(text: string) {
  const separator = text.indexOf(":");
  return { heading: text.slice(0, separator).replace(/\.+$/, ""), body: text.slice(separator + 1).trim() };
}
const about = lines(copy.about);
const board = lines(copy.board);
const consultancy = lines(copy.consultancyAreas);
const training = lines(copy.trainingAreas);
const approach = lines(copy.approach);
const strategy = lines(copy.strategy);
const valueLines = lines(copy.values);

export const valuesIntro = valueLines.slice(2, 4);
export const valuesConclusion = valueLines.slice(-2);
export const values: [string, string][] = valueLines.flatMap((line, index) => /^\d+\. /.test(line) ? [[line.replace(/^\d+\. /, ""), valueLines[index + 1]] as [string, string]] : []);

export const partners = media.partners;
export const boardMembers = directors;
export const whoPageRedirects: Record<string, string> = { board: "governance", management: "team" };

export const institutionPages: Record<string, InstitutionPage[]> = {
  "who-we-are": [
    { slug: "about", title: about[0], summary: about[1], image: "/brd/photos/brd-workshop.webp", imageAlt: "Participants at a BRD workshop", sections: about.slice(2).map((body, index) => ({ heading: ["About the organisation", "Research, technology and practical action", "Knowledge and tools", "Working together", "Our belief", "Our commitment"][index], body })) },
    { slug: "mission-vision-values", title: "Mission, vision, goal & core values", summary: "The principles that guide our work.", mode: "mission", sections: [{ heading: "Our mission", body: copy.mission }, { heading: "Our vision", body: copy.vision }, { heading: "Our goal", body: copy.goal }] },
    { slug: "governance", title: "Governance", summary: board[1], mode: "governance", sections: board.slice(2, -1).map((body, index) => ({heading: index === 0 ? "Strategic leadership" : "Oversight and accountability", body})) },
    { slug: "organisational-structure", title: "Organisational Structure", summary: "", mode: "structure", sections: [] },
    { slug: "team", title: "Our Team", summary: copy.management.replace("multidisciplinary management team", "multidisciplinary team"), mode: "team", sections: [] },
    { slug: "partners", title: "Our partners", summary: "Working together to strengthen disaster resilience.", mode: "partners", sections: [], action: "Explore a partnership" },
  ],
  "what-we-do": [
    { slug: "research", title: researchCopy.title, summary: researchCopy.tagline, sections: [{heading: "Applied research", body: researchCopy.introduction}, {heading: "Understanding risk and enabling innovation", body: researchCopy.overview}], list: {heading: researchCopy.areasHeading, items: researchCopy.areas}, collaboration: researchCopy.collaboration, action: researchCopy.action },
    { slug: "consultancy", title: "Consultancy Services", summary: copy.consultancy, sections: [{heading: consultancy[1], body: consultancy[2]}, {heading: "Our approach", body: consultancy[13]}, {heading: "Our goal", body: consultancy[14]}], list: {heading: "Areas of consultancy", items: consultancy.slice(3, 12)}, action: "Discuss a consultancy" },
    { slug: "training", title: training[0], summary: copy.training, image: "/brd/generated/disaster-preparedness-training.png", imageAlt: "AI-generated scene of a facilitator leading a disaster-preparedness mapping exercise", sections: [{heading: "Professional learning", body: training[1]}, ...training.slice(2, 7).map(titled), {heading: "Tailored to your needs", body: training.slice(7).join(" ")}], action: "Explore training options" },
    { slug: "humanitarian-support", title: "Humanitarian Support", summary: copy.humanitarian, image: "/brd/generated/service-illustrations.png", imagePanel: "humanitarian", imageAlt: "Conceptual scene of a humanitarian worker handing relief supplies to a community member", sections: [], action: "Discuss humanitarian collaboration" },
    { slug: "geospatial-earth-observation", title: "Geospatial & Earth Observation Services", summary: copy.geospatial, image: "/brd/generated/service-illustrations.png", imagePanel: "geospatial", imageAlt: "Conceptual scene of a geospatial analyst working with satellite maps and a drone", sections: [], action: "Discuss geospatial services" },
    { slug: "outreach-community-engagement", title: "Outreach & Community Engagement", summary: copy.outreach, image: "/brd/photos/community-meeting.webp", imageAlt: "Participants at a BRD meeting", gallery: ["training-discussion"], sections: [], action: "Discuss community engagement" },
  ],
  "how-we-work": [
    { slug: "approach", title: "Our approach", summary: approach[0], mode: "approach", sections: [{heading: "Understanding risk and strengthening capacity", body: approach[1]}, ...approach.slice(3).map(titled)] },
    { slug: "strategy", title: "Our strategy", summary: strategy[0], sections: strategy.slice(2).map(titled) },
  ],
  "get-involved": [
    { slug: "events", title: "Attend an event", summary: copy.events, mode: "events", sections: [], action: "Enquire about upcoming events" },
    { slug: "team", title: "Join our team", summary: copy.careers, mode: "careers", sections: [], action: "Introduce yourself" },
    { slug: "volunteers", title: "Join our volunteer network", summary: copy.volunteers, sections: [], action: "Enquire about volunteering" },
    { slug: "support", title: "Support us", summary: copy.support, sections: [], action: "Discuss supporting BRD" },
    { slug: "partners", title: "Partner with us", summary: copy.partnerships, sections: [], action: "Start a partnership conversation" },
  ],
};

// No upcoming events or vacancies were supplied for publication.
export const sampleEvents: { title: string; date: string; day: string; month: string; format: string; location: string; summary: string }[] = [];
export const sampleRoles: [string, string, string][] = [];
