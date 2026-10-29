import ts from "typescript";
import { readFileSync, writeFileSync } from "node:fs";

const copy = JSON.parse(readFileSync("app/data/approved-copy.json", "utf8"));
const source = readFileSync("app/data/content.ts", "utf8");
const ast = ts.createSourceFile("content.ts", source, ts.ScriptTarget.Latest, true);
const projectInfo = [
  ["flood-resilience-tanzania", "Enhancing Flood Resilience in Tanzania", "Flood resilience", "/brd/photos/dar-es-salaam.webp"],
  ["media-disaster-risk-management", "Building the Capacity of Media Practitioners in Disaster Risk Management", "Training", "/brd/photos/training-discussion.webp"],
  ["national-disaster-management-policy", "Comprehensive Review and Implementation Evaluation of the National Disaster Management Policy (2004)", "Policy & governance", "/brd/photos/community-meeting.webp"],
  ["sadc-gender-risk-informed-development", "Mainstreaming Gender and Risk-Informed Development into the SADC Disaster Risk Coordination Mechanism", "Gender & risk-informed development", "/brd/photos/brd-workshop.webp"],
];
const summaries = copy.projects.split(/\n(?=\d\. )/).map((part) => part.split("Project summary\n")[1]?.trim());
if (summaries.length !== 4 || summaries.some((part) => !part)) throw new Error("Expected four supplied project summaries");
const projects = projectInfo.map(([slug, title, category, image], index) => ({
  slug, title, category, image, imageAlt: "BRD Tanzania project context",
  summary: summaries[index].split(/(?<=\.)\s/)[0],
  facts: [["Focus", category]], sections: [{ heading: "Project summary", body: summaries[index] }], isIllustrative: false,
}));
const serviceInfo = [
  ["research-and-assessment", "Research, Evidence and Learning", "Research", copy.research.split("\n").slice(1).join(" ").trim()],
  ["consultancy-and-advocacy", "Consultancy & advocacy", "Advisory", copy.consultancy],
  ["gis-and-earth-observation", "Geospatial & Earth Observation Services", "Geospatial science", copy.geospatial],
  ["humanitarian-support", "Humanitarian support", "Humanitarian support", copy.humanitarian],
  ["outreach-community-engagement", "Outreach & Community Engagement", "Outreach", copy.outreach],
  ["training-and-capacity", "Training & capacity development", "Training", copy.training],
];
const services = serviceInfo.map(([slug, title, category, summary]) => ({slug, title, category, summary, image: category === "Geospatial science" ? "/brd/photos/dar-es-salaam.webp" : "/brd/photos/brd-workshop.webp", imageAlt: "BRD Tanzania activities", facts: [["Service area", category]], sections: [{heading: title, body: summary}], isIllustrative: false}));
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
