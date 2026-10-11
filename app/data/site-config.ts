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
  { slug: "research-reports", title: "Research Publications and Reports", description: "Studies, evidence, and research findings for informed decisions.", types: ["Research report", "Research publication"] },
  { slug: "policy-technical", title: "Policy Briefs and Technical Notes", description: "Concise insights connecting evidence with policy and practice.", types: ["Policy brief", "Technical note", "Technical document"] },
  { slug: "guides-toolkits", title: "Guidelines, Toolkits and Manuals", description: "Practical resources for preparedness, planning, and participation.", types: ["Guideline", "Toolkit", "Manual"] },
  { slug: "case-studies", title: "Case Studies and Lessons Learned", description: "Learning from local action and collaborative approaches.", types: ["Case study", "Lessons learned"] },
  { slug: "maps-geospatial", title: "Maps and Geospatial Resources", description: "Spatial evidence that makes risk visible and actionable.", types: ["Map", "Geospatial resource"] },
  { slug: "training-materials", title: "Training Materials and Presentations", description: "Learning resources for institutions, practitioners, and communities.", types: ["Training material", "Presentation"] },
  { slug: "videos-education", title: "Videos and Other Educational Resources", description: "Visual learning about resilience, preparedness, and community action.", types: ["Video", "Educational resource"] },
];

export const navigation = [
  { title: "Who We Are", href: "/who-we-are", description: "Our purpose, the people behind it, and the partnerships that make it possible.", links: [
    ["About BRD", "/about"], ["Our Mission, Vision, Goal and Core Values", "/who-we-are/mission-vision-values"], ["Our Governance", "/who-we-are/governance"], ["Our Management Team", "/who-we-are/management"], ["Board Members", "/who-we-are/board"], ["Our Partners", "/who-we-are/partners"],
  ] },
  { title: "What We Do", href: "/what-we-do", description: "Evidence, expertise, practical learning, and humanitarian support.", links: [["Research", "/research"], ["Consultancy", "/what-we-do/consultancy"], ["Training", "/what-we-do/training"], ["Humanitarian Support", "/what-we-do/humanitarian-support"]] },
  { title: "How We Work", href: "/how-we-work", description: "Locally grounded. Evidence informed. Built through collaboration.", links: [["Our Approach", "/how-we-work/approach"], ["Our Strategy", "/how-we-work/strategy"]] },
  { title: "Knowledge Hub", href: "/knowledge-hub", description: "Knowledge to understand risk, support action, and share learning.", links: knowledgeCategories.map((category) => [category.title, `/knowledge-hub/categories/${category.slug}`]) },
  { title: "Get Involved", href: "/get-involved", description: "Bring your curiosity, your expertise, or your commitment to a shared future.", links: [["Attend an Event", "/get-involved/events"], ["Join Our Team", "/get-involved/team"], ["Join Our Volunteer Network", "/get-involved/volunteers"], ["Support Us", "/get-involved/support"], ["Partner with Us", "/get-involved/partners"]] },
];
