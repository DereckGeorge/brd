import ts from "typescript";
import { readFileSync, writeFileSync } from "node:fs";

const path = "app/data/content.ts";
const source = readFileSync(path, "utf8");
const ast = ts.createSourceFile(path, source, ts.ScriptTarget.Latest, true);
const stories = [
  { slug: "from-maps-to-local-action", title: "From maps to meaningful local action", category: "Insights", image: "/brd/photos/dar-es-salaam.webp", imageAlt: "Dar es Salaam and its waterfront", summary: "Connecting spatial information with the questions that matter to communities and institutions", facts: [["Topic", "Geospatial information"]], sections: [{heading: "Knowledge in context", body: "A map can reveal patterns that are difficult to see from the ground. Its usefulness depends on how it connects with local questions, experience and decisions."}, {heading: "Learning together", body: "Researchers, local institutions and residents can build a shared understanding of risk. Participatory processes help make technical information more accessible and relevant."}, {heading: "From information to action", body: "A shared conversation about what the evidence means locally helps connect maps with practical choices. People need opportunities to question information, contribute their knowledge and discuss what to do next."}] },
  { slug: "learning-that-builds-preparedness", title: "Learning that builds preparedness", category: "Insights", image: "/brd/news/learning-preparedness.png", imageAlt: "Editorial artwork of Black Tanzanian professionals collaborating in a BRD learning session", summary: "Practical exercises, local scenarios and shared reflection help connect learning with preparedness", facts: [["Topic", "Training and preparedness"]], sections: [{heading: "Preparedness as a shared practice", body: "Learning is an ongoing process. Skills develop through discussion, practice, reflection and the relationships that connect people."}, {heading: "From training to action", body: "A useful learning programme connects concepts with everyday decisions. Simulations, local scenarios and peer learning create opportunities to put knowledge into practice."}, {heading: "Continuing to learn", body: "Preparedness benefits from learning beyond a workshop. Regular practice, peer exchange and time for reflection help strengthen skills and the relationships that support action."}] },
  { slug: "nature-and-coastal-resilience", title: "Nature belongs in the resilience conversation", category: "Insights", image: "/brd/photos/community-meeting.webp", imageAlt: "Participants in a community discussion", summary: "Connecting ecosystem stewardship with the priorities of coastal communities", facts: [["Topic", "Community resilience"]], sections: [{heading: "Connected systems", body: "The relationship between coastal ecosystems and the people who depend on them belongs in conversations about resilience. Environmental and social priorities need to be considered together."}, {heading: "Local priorities", body: "A shared conversation can bring together ecosystem knowledge, livelihood needs and practical planning. Listening and collaborative learning help different groups explain what matters to them."}, {heading: "Continuing the conversation", body: "Resilience planning benefits from discussion across these perspectives. Communities and institutions can use that discussion to identify practical next steps."}] },
];
const people = `team.map((member) => ({slug: member.slug, title: member.name, category: "Our Team", role: member.role, summary: member.role, image: member.image, imageAlt: member.name, isIllustrative: false, facts: [["Role", member.role], ["Organisation", "BRD Tanzania"]] as [string, string][], sections: member.biography.map((body, index) => ({heading: ["Biography", "Areas of expertise", "Professional experience", "Further experience"][index] || "Experience", body}))}))`;
const replacements = { resources: "[]", people, stories: JSON.stringify(stories, null, 2) };
const edits = [];
function visit(node) {
  if (ts.isVariableDeclaration(node) && ts.isIdentifier(node.name) && node.name.text in replacements) edits.push({start: node.initializer.getStart(ast), end: node.initializer.end, text: replacements[node.name.text]});
  ts.forEachChild(node, visit);
}
visit(ast);
let result = source;
for (const edit of edits.sort((a,b) => b.start-a.start)) result = result.slice(0,edit.start)+edit.text+result.slice(edit.end);
writeFileSync(path, result);
console.log("Removed dummy resources and replaced team and editorial records");
