import ts from "typescript";
import { readFileSync, writeFileSync } from "node:fs";

const copy = JSON.parse(readFileSync("app/data/approved-copy.json", "utf8"));
const researchCopy = JSON.parse(readFileSync("app/data/research-copy.json", "utf8"));
const source = readFileSync("app/data/content.ts", "utf8");
const ast = ts.createSourceFile("content.ts", source, ts.ScriptTarget.Latest, true);
const projectInfo = [
  ["flood-resilience-tanzania", "Enhancing Flood Resilience in Tanzania", "Flood resilience", "/brd/projects/floods-in-tanzania.jpg", "Aerial view of homes and roads inundated by floodwater in Tanzania"],
  ["media-disaster-risk-management", "Building the Capacity of Media Practitioners in Disaster Risk Management", "Training", "/brd/photos/training-discussion.webp", "Participants taking part in a group training discussion"],
  ["national-disaster-management-policy", "Comprehensive Review and Implementation Evaluation of the National Disaster Management Policy (2004)", "Policy & governance", "/brd/photos/community-meeting.webp", "Participants gathered around a table for a meeting"],
  ["sadc-gender-risk-informed-development", "Mainstreaming Gender and Risk-Informed Development into the SADC Disaster Risk Coordination Mechanism", "Gender & risk-informed development", "/brd/generated/gender-risk-informed-development.png", "AI-generated scene of women and men collaborating on gender-inclusive flood-risk planning"],
];
const summaries = copy.projects.split(/\n(?=\d\. )/).map((part) => part.split("Project summary\n")[1]?.trim());
if (summaries.length !== 4 || summaries.some((part) => !part)) throw new Error("Expected four supplied project summaries");
const projects = projectInfo.map(([slug, title, category, image, imageAlt], index) => ({
  slug, title, category, image, imageAlt,
  summary: summaries[index].split(/(?<=\.)\s/)[0],
  facts: [["Focus", category]], sections: [{ heading: "Project summary", body: summaries[index] }], isIllustrative: false,
}));
const serviceInfo = [
  ["research-and-assessment", researchCopy.title, "Research", `${researchCopy.introduction} ${researchCopy.overview}`],
  ["consultancy-and-advocacy", "Consultancy & advocacy", "Advisory", copy.consultancy],
  ["gis-and-earth-observation", "Geospatial & Earth Observation Services", "Geospatial science", copy.geospatial],
  ["humanitarian-support", "Humanitarian support", "Humanitarian support", copy.humanitarian],
  ["outreach-community-engagement", "Outreach & Community Engagement", "Outreach", copy.outreach],
  ["training-and-capacity", "Training & capacity development", "Training", copy.training],
];
const services = serviceInfo.map(([slug, title, category, summary]) => ({slug, title, category, summary, image: slug === "training-and-capacity" ? "/brd/generated/disaster-preparedness-training.png" : category === "Geospatial science" ? "/brd/photos/dar-es-salaam.webp" : "/brd/photos/brd-workshop.webp", imageAlt: slug === "training-and-capacity" ? "AI-generated scene of a facilitator leading a disaster-preparedness mapping exercise" : "BRD Tanzania activities", facts: [["Service area", category]], sections: [{heading: title, body: summary}], isIllustrative: false}));
for (const service of services) {
  if (service.slug === "humanitarian-support" || service.slug === "gis-and-earth-observation") {
    service.image = "/brd/generated/service-illustrations.png";
    service.imagePanel = service.slug === "humanitarian-support" ? "humanitarian" : "geospatial";
    service.imageAlt = service.imagePanel === "humanitarian" ? "Conceptual scene of a humanitarian worker handing relief supplies to a community member" : "Conceptual scene of a geospatial analyst working with satellite maps and a drone";
  }
  if (service.slug === "research-and-assessment") service.sections = [{heading: "Applied research", body: researchCopy.introduction}, {heading: "Research focus", body: researchCopy.overview}, {heading: researchCopy.areasHeading, body: researchCopy.areas.join("; ")}];
}
const replacements = { projects, research: [], services };
const edits = [];
function visit(node) {
  if (ts.isVariableDeclaration(node) && ts.isIdentifier(node.name) && node.name.text in replacements) {
    edits.push({start: node.initializer.getStart(ast), end: node.initializer.end, text: JSON.stringify(replacements[node.name.text], null, 2)});
  }
  ts.forEachChild(node, visit);
}
visit(ast);
let result = source;
for (const edit of edits.sort((a,b) => b.start-a.start)) result = result.slice(0,edit.start)+edit.text+result.slice(edit.end);
writeFileSync("app/data/content.ts", result);
console.log("Imported four projects; cleared fictional research; updated service records; preserved team profiles.");
