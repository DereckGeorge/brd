// Illustrative content for the design preview; these are not BRD records.
export type ContentItem = {
  slug: string;
  title: string;
  summary: string;
  category: string;
  image: string;
  imageAlt: string;
  status?: string;
  location?: string;
  year?: string;
  role?: string;
  facts: [string, string][];
  sections: { heading: string; body: string }[];
};

export const projects: ContentItem[] = [
  {
    slug: "coastal-communities", title: "Resilient coasts, thriving communities", category: "Climate resilience", status: "Ongoing", location: "Tanga & Pwani", year: "2025 - 2027",
    image: "/preview/mangroves.jpg", imageAlt: "Illustrative aerial photograph of coastal mangrove forest",
    summary: "Exploring how nature-based solutions and local knowledge can strengthen coastal livelihoods.",
    facts: [["Location", "Tanga & Pwani"], ["Duration", "2025 - 2027"], ["Status", "Ongoing"], ["Sample partner", "Coastal Futures Network"]],
    sections: [
      { heading: "The challenge", body: "In this illustrative project, changing coastal conditions place pressure on ecosystems and livelihoods. The program explores how communities can understand those risks and shape practical responses together." },
      { heading: "Our approach", body: "A proposed combination of participatory mapping, mangrove restoration planning, and community learning connects environmental evidence with local priorities. Coastal leaders and researchers develop a shared plan for adaptation." },
      { heading: "Activities & intended outcomes", body: "Sample activities include community risk assessments, shoreline mapping, restoration workshops, and local preparedness plans. Intended outcomes are healthier ecosystems, stronger local capacity, and more informed decisions." },
    ],
  },
  {
    slug: "community-early-warning", title: "Early warning, local action", category: "Disaster risk", status: "Ongoing", location: "Dar es Salaam", year: "2026 - 2027",
    image: "/preview/city.jpg", imageAlt: "Illustrative photograph of an urban landscape",
    summary: "Connecting flood risk information with the people and neighborhoods that need it most.",
    facts: [["Location", "Dar es Salaam"], ["Duration", "2026 - 2027"], ["Status", "Ongoing"], ["Sample partner", "Urban Resilience Collective"]],
    sections: [{ heading: "The challenge", body: "This sample program considers the gap between risk information and local action. It asks how flood alerts can reach different groups in useful, accessible ways." }, { heading: "Our approach", body: "Local mapping exercises, alert pathway reviews, and emergency simulations bring community members and technical teams together. Residents help shape messages that can support practical decisions." }, { heading: "Activities & intended outcomes", body: "Illustrative activities include neighborhood mapping, preparedness workshops, and community-led simulation exercises. A proposed outcome is a clearer connection between warnings and response." }],
  },
  {
    slug: "climate-smart-livelihoods", title: "Growing climate-smart livelihoods", category: "Climate resilience", status: "Completed", location: "Morogoro", year: "2024 - 2025",
    image: "/preview/agriculture.jpg", imageAlt: "Illustrative photograph of agricultural fields at sunset",
    summary: "A community-led approach to adaptation, agricultural learning, and sustainable livelihoods.",
    facts: [["Location", "Morogoro"], ["Duration", "2024 - 2025"], ["Status", "Completed"], ["Sample partner", "Rural Learning Alliance"]],
    sections: [{ heading: "The challenge", body: "This fictional case study considers how farming communities could respond to less predictable seasonal conditions. It places local experience at the heart of adaptation planning." }, { heading: "Our approach", body: "Demonstration plots, peer learning sessions, and seasonal planning workshops form the illustrative program. Practical tools help translate climate information into decisions about land and livelihoods." }, { heading: "Learning from the program", body: "The proposed case study would bring together participant reflections, field observations, and recommendations for future learning. The proposed learning would support more informed seasonal planning and future adaptation." }],
  },
  {
    slug: "mapping-for-resilience", title: "Mapping a more resilient future", category: "Geospatial science", status: "Ongoing", location: "Dodoma", year: "2026 - 2028",
    image: "/preview/agriculture.jpg", imageAlt: "Illustrative landscape photograph for geospatial research",
    summary: "Using Earth observation and participatory mapping to make risk visible and actionable.",
    facts: [["Location", "Dodoma"], ["Duration", "2026 - 2028"], ["Status", "Ongoing"], ["Sample partner", "Spatial Futures Lab"]],
    sections: [{ heading: "The challenge", body: "This sample initiative explores the value of accessible spatial information in local planning. It considers how technical maps and community knowledge can be brought together." }, { heading: "Our approach", body: "The example combines land-cover analysis, participatory mapping, and skills development for local planning teams. Research products would be translated into accessible decision-making tools." }, { heading: "Planned outputs", body: "Illustrative outputs include risk maps, a shared spatial database, practical training materials, and a guide to using geospatial evidence in local planning." }],
  },
  {
    slug: "preparedness-academy", title: "Preparedness starts with people", category: "Training", status: "Completed", location: "Arusha", year: "2025 - 2026",
    image: "/preview/workshop.jpg", imageAlt: "Illustrative photograph of a collaborative professional workshop",
    summary: "Practical learning for local institutions, responders, and community leaders.",
    facts: [["Location", "Arusha"], ["Duration", "2025 - 2026"], ["Status", "Completed"], ["Sample partner", "Community Learning Forum"]],
    sections: [{ heading: "The challenge", body: "This fictional training initiative focuses on the skills and relationships that support preparedness. It considers the different needs of local leaders, responders, and institutions." }, { heading: "Our approach", body: "A sample learning pathway includes risk assessment, response planning, inclusive communication, and simulation exercises. Participants work through local scenarios together." }, { heading: "Learning & reflection", body: "Example outputs include preparedness plans, learning journals, and an evaluation of practical exercises. Real training results can be added to this structure later." }],
  },
  {
    slug: "restoring-catchments", title: "Healthy catchments, safer communities", category: "Disaster risk", status: "Ongoing", location: "Usambara", year: "2026 - 2028",
    image: "/preview/forest.jpg", imageAlt: "Illustrative photograph of a forest ecosystem",
    summary: "Bringing ecosystem stewardship and disaster risk reduction into the same conversation.",
    facts: [["Location", "Usambara"], ["Duration", "2026 - 2028"], ["Status", "Ongoing"], ["Sample partner", "Catchment Stewardship Network"]],
    sections: [{ heading: "The challenge", body: "This illustrative project looks at the links between catchment health, water, and community risk. It explores how land stewardship can contribute to resilience." }, { heading: "Our approach", body: "Field observations, participatory planning, and ecosystem learning sessions form the proposed approach. Communities and technical teams identify shared priorities for catchment protection." }, { heading: "Planned outputs", body: "Sample outputs include catchment assessments, stewardship plans, and practical community learning resources. These examples will be replaced with approved project information." }],
  },
];

export const research: ContentItem[] = [
  {
    slug: "coastal-risk-pathways", title: "Understanding coastal risk pathways", category: "Climate resilience", status: "Ongoing", year: "2026", image: "/preview/coast.jpg", imageAlt: "Illustrative photograph of ocean water and coastline",
    summary: "An example study connecting changing coastal conditions, ecosystems, and household livelihoods.",
    facts: [["Research theme", "Climate resilience"], ["Status", "Ongoing"], ["Year", "2026"], ["Sample team", "Coastal Systems Research Group"]],
    sections: [{ heading: "Research question", body: "How could communities combine ecosystem knowledge and scientific observations to make coastal adaptation decisions? The study explores relationships between local priorities, environmental change, and adaptation choices." }, { heading: "Methods", body: "The proposed methods combine household interviews, participatory mapping, and a review of environmental observations. Community priorities shape the scope and interpretation of the research." }, { heading: "Expected contribution", body: "Sample outputs include a research report, an accessible policy brief, and community learning materials. No findings are presented as actual BRD research." }],
  },
  {
    slug: "urban-flood-preparedness", title: "What makes an early warning useful?", category: "Disaster risk", status: "Completed", year: "2025", image: "/preview/city.jpg", imageAlt: "Illustrative city photograph",
    summary: "A sample investigation into how local knowledge and accessible communication support flood preparedness.",
    facts: [["Research theme", "Disaster risk"], ["Status", "Completed"], ["Year", "2025"], ["Sample team", "Urban Risk Research Group"]],
    sections: [{ heading: "Research question", body: "What helps different groups understand and act on a warning? This sample study considers the practical and social dimensions of preparedness." }, { heading: "Methods", body: "Illustrative methods include interviews, message testing, and facilitated reflection sessions. These methods explore the role of timing, accessibility, and trust in preparedness." }, { heading: "Learning & publications", body: "Example learning focuses on accessibility, timing, trust, and local response pathways. This is a fictional research summary prepared for design review." }],
  },
  {
    slug: "earth-observation-for-planning", title: "Earth observation for local planning", category: "Geospatial science", status: "Ongoing", year: "2026", image: "/preview/agriculture.jpg", imageAlt: "Illustrative photograph of agricultural land",
    summary: "Exploring how spatial evidence can support practical, locally informed decisions.",
    facts: [["Research theme", "Geospatial science"], ["Status", "Ongoing"], ["Year", "2026"], ["Sample team", "Spatial Research Group"]],
    sections: [{ heading: "Research question", body: "How can spatial products become more useful to local planning teams? This illustrative theme connects technical analysis with decision-making needs." }, { heading: "Methods", body: "The sample approach combines land-cover interpretation, participatory validation, and stakeholder workshops. It considers how evidence is communicated as well as how it is produced." }, { heading: "Expected contribution", body: "Proposed outputs include map products, practical guidelines, and a review of learning needs. The intended focus is information that local institutions can put to practical use." }],
  },
  {
    slug: "inclusive-community-resilience", title: "Whose resilience are we building?", category: "Community wellbeing", status: "Completed", year: "2025", image: "/preview/workshop.jpg", imageAlt: "Illustrative collaborative discussion",
    summary: "A sample research theme examining inclusion, participation, and community-led preparedness.",
    facts: [["Research theme", "Community wellbeing"], ["Status", "Completed"], ["Year", "2025"], ["Sample team", "Inclusive Resilience Research Group"]],
    sections: [{ heading: "Research question", body: "How can preparedness planning reflect the needs and experience of different community groups? This example explores inclusion as a foundation of resilience." }, { heading: "Methods", body: "Illustrative methods include community conversations, stakeholder mapping, and a review of participation pathways. Participants contribute their experience of information access and local decision-making." }, { heading: "Learning & publications", body: "The sample summary highlights participation, accessible information, and shared accountability. It is not a record of completed BRD research." }],
  },
];

export const services: ContentItem[] = [
  ["research-and-assessment", "Research & assessment", "Research", "Evidence that supports better decisions.", "/preview/agriculture.jpg", "Study design;Risk and vulnerability assessment;Data collection and analysis;Research mentorship"],
  ["consultancy-and-advocacy", "Consultancy & advocacy", "Advisory", "Practical advice for institutions, policies, and programs.", "/preview/workshop.jpg", "Institutional reviews;Policy and strategy development;Program evaluation;Stakeholder engagement"],
  ["gis-and-earth-observation", "GIS & Earth observation", "Geospatial science", "Making complex information visible and useful.", "/preview/agriculture.jpg", "Spatial analysis;Remote sensing;Participatory mapping;Geospatial skills development"],
  ["disaster-risk-management", "Disaster risk management", "Disaster risk", "Turning risk knowledge into preparedness and action.", "/preview/city.jpg", "Risk assessments;Preparedness and response planning;Early warning systems;Simulation exercises"],
  ["climate-resilience", "Climate resilience", "Climate resilience", "Locally grounded pathways to adaptation.", "/preview/mangroves.jpg", "Adaptation planning;Climate vulnerability assessment;Nature-based solutions;Resilient livelihoods"],
  ["training-and-capacity", "Training & capacity development", "Training", "Learning that becomes practical capability.", "/preview/workshop.jpg", "Professional short courses;Community learning;Customized institutional programs;Coaching and mentorship"],
].map(([slug, title, category, summary, image, offerings]) => ({
  slug, title, category, summary, image, imageAlt: `Illustrative photograph for ${title.toLowerCase()}`,
  facts: [["Service area", category], ["Audience", "Institutions, partners & communities"], ["Format", "Adapted to your needs"]],
  sections: [{ heading: "How we can help", body: `${summary} Our approach connects technical analysis with the priorities of institutions, development partners, and communities. Clear questions, collaborative planning, and practical outputs guide the work.` }, { heading: "Areas of support", body: offerings.split(";").join(". ") + "." }, { heading: "Working together", body: "An initial conversation helps establish the context, priorities, and intended outcomes. The proposed process moves from scoping and collaborative planning to delivery, reflection, and follow-up." }],
}));

export const people: ContentItem[] = [
  ["amina-mwanga", "Dr. Amina Mwanga", "Board of Directors", "Board Chair", "Climate policy & governance", "/preview/person-2.jpg"],
  ["daniel-mrema", "Daniel Mrema", "Board of Directors", "Board Member", "Institutional finance & accountability", "/preview/person-1.jpg"],
  ["neema-kileo", "Dr. Neema Kileo", "Management", "Executive Director", "Disaster risk & community resilience", "/preview/person-4.jpg"],
  ["michael-ndao", "Michael Ndao", "Management", "Director of Operations", "Program delivery & partnerships", "/preview/person-5.jpg"],
  ["sarah-mushi", "Dr. Sarah Mushi", "Technical experts", "Climate Research Lead", "Adaptation & resilient livelihoods", "/preview/person-6.jpg"],
  ["james-kweka", "James Kweka", "Technical experts", "Geospatial Specialist", "GIS & Earth observation", "/preview/person-3.jpg"],
].map(([slug, title, category, role, expertise, image]) => ({
  slug, title, category, role, image, imageAlt: "Stock portrait used for a fictional sample profile", summary: expertise,
  facts: [["Role", role], ["Team", category], ["Expertise", expertise], ["Profile", "Fictional design sample"]],
  sections: [{ heading: "Profile", body: `${title} brings a focus on ${expertise.toLowerCase()} to this fictional team. A collaborative perspective connects technical knowledge with community priorities and long-term institutional learning.` }, { heading: "Professional experience", body: `In this fictional biography, experience in ${expertise.toLowerCase()} is complemented by interdisciplinary collaboration, practical learning, and program planning. The emphasis is on making evidence accessible and useful.` }, { heading: "Areas of focus", body: "Areas of focus include inclusive decision-making, shared learning, and partnerships that connect institutions with communities. The work brings an evidence-informed perspective to local resilience challenges." }],
}));

export const resources: ContentItem[] = [
  ["community-preparedness-guide", "A practical guide to community preparedness", "Guideline", "Disaster risk", "2026", "/preview/workshop.jpg"],
  ["coastal-adaptation-brief", "Local pathways to coastal adaptation", "Policy brief", "Climate resilience", "2026", "/preview/mangroves.jpg"],
  ["earth-observation-handbook", "Earth observation for resilience planning", "Technical document", "Geospatial science", "2025", "/preview/agriculture.jpg"],
  ["inclusive-warning-systems", "Inclusive early warning systems", "Research report", "Disaster risk", "2025", "/preview/city.jpg"],
  ["livelihoods-learning-note", "Learning from climate-smart livelihoods", "Case study", "Climate resilience", "2026", "/preview/agriculture.jpg"],
  ["community-engagement-toolkit", "A toolkit for meaningful community engagement", "Guideline", "Community wellbeing", "2026", "/preview/workshop.jpg"],
].map(([slug, title, category, theme, year, image]) => ({
  slug, title, category, year, image, imageAlt: "Illustrative publication cover photograph", status: theme,
  summary: `A sample ${category.toLowerCase()} exploring ${theme.toLowerCase()} and practical ways to connect knowledge with action.`,
  facts: [["Publication type", category], ["Theme", theme], ["Year", year], ["Author", "Illustrative BRD Research Team"]],
  sections: [{ heading: "Overview", body: `${title} explores how ${theme.toLowerCase()} can inform practical decisions. This fictional resource brings together guiding questions, collaborative approaches, and steps for connecting evidence with community priorities.` }, { heading: "Key considerations", body: "An accessible resource can connect evidence, local priorities, and practical next steps. This sample considers participation, usable information, and the value of learning across institutions and communities." }, { heading: "Putting knowledge into practice", body: "Start by identifying a shared question, listening to local perspectives, and reviewing available evidence. Agree on practical next steps, clarify responsibilities, and create opportunities to reflect on progress together." }],
}));

export const stories: ContentItem[] = [
  {
    slug: "from-maps-to-local-action", title: "From maps to meaningful local action", category: "Insights", year: "24 September 2026", image: "/preview/agriculture.jpg", imageAlt: "Illustrative photograph of a rural landscape at sunset",
    summary: "Why the most useful risk information starts with the people who will use it.",
    facts: [["Category", "Insights"], ["Sample date", "24 September 2026"], ["Author", "BRD Editorial Team (sample)"]],
    sections: [{ heading: "Knowledge in context", body: "A map can reveal patterns that are difficult to see from the ground. But its value depends on how it connects with local questions, experience, and decisions. This illustrative article explores that connection." }, { heading: "Learning together", body: "Researchers, local institutions, and residents can build a shared understanding of risk. Participatory processes help make technical information more accessible and relevant." }, { heading: "The next step", body: "The next step is a shared conversation about what the evidence means locally. Maps become more useful when people can question them, contribute to them, and connect them with practical choices." }],
  },
  {
    slug: "learning-that-builds-preparedness", title: "Learning that builds preparedness", category: "Community", year: "18 September 2026", image: "/preview/workshop.jpg", imageAlt: "Illustrative photograph of a group working together",
    summary: "A closer look at collaborative learning, practical skills, and shared confidence.",
    facts: [["Category", "Community"], ["Sample date", "18 September 2026"], ["Author", "BRD Editorial Team (sample)"]],
    sections: [{ heading: "Preparedness as a shared practice", body: "This fictional story looks at learning as an ongoing process. Skills develop through discussion, practice, reflection, and the relationships that connect people." }, { heading: "From training to action", body: "A useful learning program connects concepts with everyday decisions. Simulations, local scenarios, and peer learning can create opportunities to put knowledge into practice." }, { heading: "Looking ahead", body: "Preparedness grows when learning continues beyond a workshop. Regular practice, peer exchange, and time for reflection help strengthen both skills and the relationships that make action possible." }],
  },
  {
    slug: "nature-and-coastal-resilience", title: "Nature belongs in the resilience conversation", category: "Perspectives", year: "10 September 2026", image: "/preview/mangroves.jpg", imageAlt: "Illustrative coastal mangrove photograph",
    summary: "Connecting ecosystem stewardship with the futures of coastal communities.",
    facts: [["Category", "Perspectives"], ["Sample date", "10 September 2026"], ["Author", "BRD Editorial Team (sample)"]],
    sections: [{ heading: "Connected systems", body: "This illustrative perspective considers the connections between coastal ecosystems and the people who depend on them. It frames resilience as both an environmental and a social question." }, { heading: "Local priorities", body: "A shared conversation can bring together ecosystem knowledge, livelihood needs, and practical planning. The example emphasizes listening and collaborative learning." }, { heading: "Continuing the conversation", body: "Resilience planning benefits from a wider conversation about ecosystems, livelihoods, and local priorities. Listening across these perspectives can help communities identify practical pathways toward a shared future." }],
  },
];

export const collections = { projects, research, services, people, "knowledge-hub": resources, news: stories };
export type CollectionKey = keyof typeof collections;
export const collectionLabels: Record<CollectionKey, string> = { projects: "Projects", research: "Research", services: "Services", people: "Our people", "knowledge-hub": "Knowledge Hub", news: "News & stories" };

export const searchItems = Object.entries(collections).flatMap(([section, items]) => items.map(item => ({ ...item, href: `/${section}/${item.slug}`, section: collectionLabels[section as CollectionKey] })));
