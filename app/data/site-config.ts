export const contact = {
  name: "BRD Tanzania",
  address: ["2nd Floor, Capital Place, Ohio Street", "P.O. Box 6548", "Dar es Salaam, Tanzania"],
  email: "info@brd.or.tz",
  phones: ["+255 768 021 824", "+255 789 932 878"],
};

export const socialProfiles = [
  { name: "X", url: null },
  { name: "Instagram", url: "https://www.instagram.com/brd_tanzania/" },
  { name: "YouTube", url: null },
  { name: "LinkedIn", url: null },
] as const;

export const knowledgeCategories = [
  { slug: "publications-reports", title: "Publications & Reports", description: "Research, policy briefs, technical notes and lessons from practice.", types: ["Research report", "Research publication", "Policy brief", "Technical note", "Technical document", "Case study", "Lessons learned"] },
  { slug: "tools-geospatial", title: "Tools & Geospatial Resources", description: "Guidelines, practical toolkits, maps and spatial information.", types: ["Guideline", "Toolkit", "Manual", "Map", "Geospatial resource"] },
  { slug: "learning-resources", title: "Training & Learning", description: "Training materials, presentations, videos and educational resources.", types: ["Training material", "Presentation", "Video", "Educational resource"] },
];

export const knowledgeCategoryRedirects: Record<string, string> = {
  "research-reports": "publications-reports", "policy-technical": "publications-reports", "case-studies": "publications-reports",
  "guides-toolkits": "tools-geospatial", "maps-geospatial": "tools-geospatial",
  "training-materials": "learning-resources", "videos-education": "learning-resources",
};

export const governanceLinks = [["Governance", "/who-we-are/governance"], ["Organisational Structure", "/who-we-are/organisational-structure"]];

export const navigation = [
  { title: "Who We Are", href: "/who-we-are", description: "Our purpose, the people behind it, and the partnerships that make it possible.", links: [
    ["About BRD", "/who-we-are/about"], ["Our Mission, Vision, Goal and Core Values", "/who-we-are/mission-vision-values"], ["Governance", "/who-we-are/governance"], ["Our Team", "/who-we-are/team"], ["Our Partners", "/who-we-are/partners"],
  ] },
  { title: "What We Do", href: "/what-we-do", description: "Research, technical consultancy, training, humanitarian support, outreach and geospatial science.", links: [["Research", "/what-we-do/research"], ["Consultancy", "/what-we-do/consultancy"], ["Training", "/what-we-do/training"], ["Humanitarian Support", "/what-we-do/humanitarian-support"], ["Geospatial & Earth Observation", "/what-we-do/geospatial-earth-observation"], ["Outreach & Community Engagement", "/what-we-do/outreach-community-engagement"]] },
  { title: "How We Work", href: "/how-we-work", description: "Locally grounded. Evidence informed. Built through collaboration.", links: [["Our Approach", "/how-we-work/approach"], ["Our Strategy", "/how-we-work/strategy"]] },
  { title: "Knowledge Hub", href: "/knowledge-hub", description: "Knowledge to understand risk, support action, and share learning.", links: knowledgeCategories.map((category) => [category.title, `/knowledge-hub/categories/${category.slug}`]) },
  { title: "Get Involved", href: "/get-involved", description: "Bring your curiosity, your expertise, or your commitment to a shared future.", links: [["Attend an Event", "/get-involved/events"], ["Join Our Team", "/get-involved/team"], ["Join Our Volunteer Network", "/get-involved/volunteers"], ["Support Us", "/get-involved/support"], ["Partner with Us", "/get-involved/partners"]] },
];
