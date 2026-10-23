import copy from "./approved-copy.json" with { type: "json" };
import media from "./brd-media.json" with { type: "json" };

export type InstitutionPage = {
  slug: string;
  title: string;
  summary: string;
  image?: string;
  imageAlt?: string;
  gallery?: string[];
  mode?: "mission" | "structure" | "team" | "partners" | "approach" | "events" | "careers";
  sections: { heading: string; body: string }[];
  list?: { heading: string; items: string[] };
  action?: string;
};

function lines(text: string) { return text.split("\n").map((line) => line.trim()).filter(Boolean); }
function titled(text: string) {
  const separator = text.indexOf(":");
  return { heading: text.slice(0, separator), body: text.slice(separator + 1).trim() };
}
const about = lines(copy.about);
const board = lines(copy.board);
const consultancy = lines(copy.consultancyAreas);
const training = lines(copy.trainingAreas);
const approach = lines(copy.approach);
const strategy = lines(copy.strategy);
const research = lines(copy.research);
const valueLines = lines(copy.values);

export const valuesIntro = valueLines.slice(2, 4);
export const valuesConclusion = valueLines.slice(-2);
export const values: [string, string][] = valueLines.flatMap((line, index) => /^\d+\. /.test(line) ? [[line.replace(/^\d+\. /, ""), valueLines[index + 1]] as [string, string]] : []);

export const partners = media.partners;
export const boardMembers = copy.boardMembers;
export const whoPageRedirects: Record<string, string> = { governance: "organisational-structure", board: "organisational-structure", management: "team" };

export const institutionPages: Record<string, InstitutionPage[]> = {
  "who-we-are": [
    { slug: "about", title: about[0], summary: about[1], image: "/brd/photos/brd-workshop.webp", imageAlt: "Workshop photograph supplied by BRD Tanzania", sections: about.slice(2).map((body, index) => ({ heading: ["About the organisation", "Research, technology and practical action", "Knowledge and tools", "Working together", "Our belief", "Our commitment"][index], body })) },
    { slug: "mission-vision-values", title: "Mission, vision, goal & core values.", summary: "The principles that guide our work.", mode: "mission", sections: [{ heading: "Our mission", body: copy.mission }, { heading: "Our vision", body: copy.vision }, { heading: "Our goal", body: copy.goal }] },
    { slug: "organisational-structure", title: "Organisational Structure", summary: copy.governance, mode: "structure", sections: board.slice(2, -1).map((body, index) => ({heading: index === 0 ? "Strategic leadership" : "Oversight and accountability", body})) },
    { slug: "team", title: "Our Team", summary: copy.management.replace("multidisciplinary management team", "multidisciplinary team"), mode: "team", gallery: ["group-learning", "workshop-panel"], sections: [] },
    { slug: "partners", title: "Our partners.", summary: "Working together to strengthen disaster resilience.", mode: "partners", sections: [], action: "Explore a partnership" },
  ],
  "what-we-do": [
    { slug: "research", title: research[0], summary: research[1], sections: [{heading: "Research purpose", body: research[2]}], action: "Discuss research collaboration" },
    { slug: "consultancy", title: "Consultancy Services", summary: copy.consultancy, sections: [{heading: consultancy[1], body: consultancy[2]}, {heading: "Our approach", body: consultancy[13]}, {heading: "Our goal", body: consultancy[14]}], list: {heading: "Areas of consultancy", items: consultancy.slice(3, 12)}, action: "Discuss a consultancy" },
    { slug: "training", title: training[0], summary: copy.training, gallery: ["brd-workshop", "workshop-presentation", "workshop-session", "workshop-participants", "technical-presentation", "facilitated-discussion"], sections: [{heading: "Professional learning", body: training[1]}, ...training.slice(2, 7).map(titled), {heading: "Tailored to your needs", body: training.slice(7).join(" ")}], action: "Explore training options" },
    { slug: "humanitarian-support", title: "Humanitarian Support", summary: copy.humanitarian, sections: [], action: "Discuss humanitarian collaboration" },
    { slug: "geospatial-earth-observation", title: "Geospatial & Earth Observation Services", summary: copy.geospatial, sections: [], action: "Discuss geospatial services" },
    { slug: "outreach-community-engagement", title: "Outreach & Community Engagement", summary: copy.outreach, image: "/brd/photos/community-meeting.webp", imageAlt: "Meeting photograph supplied by BRD Tanzania", gallery: ["training-discussion"], sections: [], action: "Discuss community engagement" },
  ],
  "how-we-work": [
    { slug: "approach", title: "Our approach.", summary: approach[0], mode: "approach", sections: [{heading: "Understanding risk and strengthening capacity", body: approach[1]}, ...approach.slice(3).map(titled)] },
    { slug: "strategy", title: "Our strategy.", summary: strategy[0], sections: strategy.slice(2).map(titled) },
  ],
  "get-involved": [
    { slug: "events", title: "Attend an event.", summary: copy.events, mode: "events", sections: [], action: "Enquire about upcoming events" },
    { slug: "team", title: "Join our team.", summary: copy.careers, mode: "careers", sections: [], action: "Introduce yourself" },
    { slug: "volunteers", title: "Join our volunteer network.", summary: copy.volunteers, sections: [], action: "Enquire about volunteering" },
    { slug: "support", title: "Support us.", summary: copy.support, sections: [], action: "Discuss supporting BRD" },
    { slug: "partners", title: "Partner with us.", summary: copy.partnerships, sections: [], action: "Start a partnership conversation" },
  ],
};

// No management profiles, upcoming events, or vacancies were supplied for publication.
export const sampleEvents: { title: string; date: string; day: string; month: string; format: string; location: string; summary: string }[] = [];
export const sampleRoles: [string, string, string][] = [];
