export type InstitutionPage = {
  slug: string;
  title: string;
  summary: string;
  image?: string;
  mode?: "mission" | "governance" | "management" | "board" | "partners" | "approach" | "events" | "careers";
  sections: { heading: string; body: string }[];
  action?: string;
};

// These narratives, opportunities, and institutional structures are design samples.
export const institutionPages: Record<string, InstitutionPage[]> = {
  "who-we-are": [
    { slug: "about", title: "About BRD.", summary: "Rooted in Tanzania. Connecting knowledge, practical expertise, and community-led action.", image: "/preview/workshop.jpg", sections: [
      { heading: "A shared purpose", body: "BRD Tanzania brings a community-centered perspective to resilience. Our work connects research, technical expertise, and practical learning to help communities understand risk and prepare for change." },
      { heading: "Stronger through collaboration", body: "We believe that resilience grows through shared understanding. By listening, learning, and working together, institutions and communities can shape responses grounded in their own priorities." },
    ] },
    { slug: "mission-vision-values", title: "Mission, vision & values.", summary: "A common purpose. Clear principles. A commitment to people and a more resilient future.", mode: "mission", sections: [
      { heading: "Our mission", body: "Connect knowledge, practical expertise, and community-led action to strengthen resilience to disasters and a changing climate." },
      { heading: "Our vision", body: "Communities and institutions equipped to anticipate risk, adapt to change, and shape safer, more inclusive futures." },
      { heading: "Our goal", body: "Support locally grounded decisions and lasting capability through research, learning, and collaborative action." },
    ] },
    { slug: "governance", title: "Our governance.", summary: "Clear responsibilities, shared accountability, and a long-term perspective guide the way we work.", mode: "governance", sections: [
      { heading: "Oversight & accountability", body: "This illustrative governance model connects strategic oversight with day-to-day leadership. The Board provides direction, while management translates shared priorities into responsible delivery." },
      { heading: "Responsible practice", body: "Transparent decision-making, thoughtful stewardship, and regular reflection help protect trust. Community perspectives and institutional learning inform program priorities." },
      { heading: "A culture of integrity", body: "The proposed model emphasizes ethical research, inclusive participation, safeguarding, and constructive review. Final governance information will reflect BRD's approved institutional arrangements." },
    ] },
    { slug: "management", title: "Our management team.", summary: "People who connect shared priorities with practical delivery. These profiles are fictional design samples.", mode: "management", sections: [] },
    { slug: "board", title: "Board members.", summary: "Different perspectives, thoughtful oversight, and a shared commitment. These profiles are fictional design samples.", mode: "board", sections: [] },
    { slug: "partners", title: "Our partners.", summary: "Resilience benefits from relationships that connect local experience, technical expertise, and shared ambition.", mode: "partners", sections: [{ heading: "Working across perspectives", body: "Our sample partnerships bring together community networks, research groups, institutions, and learning organizations. Each relationship starts with a shared question and a commitment to practical outcomes." }], action: "Explore a partnership" },
  ],
  "what-we-do": [
    { slug: "consultancy", title: "Consultancy.", summary: "Practical expertise for better-informed institutions, policies, and programs.", image: "/preview/agriculture.jpg", sections: [
      { heading: "Evidence that supports decisions", body: "Our illustrative consultancy offer connects research, risk assessment, and technical advice with the context of each institution. We begin by understanding the question, the available evidence, and the people affected by the decision." },
      { heading: "Areas of expertise", body: "Disaster risk management, climate adaptation, geospatial analysis, program evaluation, and institutional strategy. A collaborative process helps translate technical findings into practical recommendations." },
      { heading: "A shared process", body: "Scoping, analysis, collaborative review, and clear recommendations form a flexible pathway. The emphasis is on evidence that partners can use, not simply reports that sit on a shelf." },
    ], action: "Discuss a consultancy" },
    { slug: "training", title: "Training.", summary: "Learning that becomes practical capability, confidence, and preparedness.", image: "/preview/workshop.jpg", sections: [
      { heading: "Learning in context", body: "Sample learning programs combine technical understanding with local scenarios, practical exercises, and peer exchange. Courses can be adapted to the needs of institutions, practitioners, and community groups." },
      { heading: "Topics & formats", body: "Disaster preparedness, response planning, climate resilience, GIS, Earth observation, inclusive communication, and research methods. Illustrative formats include short courses, field workshops, simulations, and mentoring." },
      { heading: "Beyond the workshop", body: "Reflection, practical assignments, and opportunities for follow-up help connect new skills with everyday decisions. Learning is treated as an ongoing practice rather than a single event." },
    ], action: "Explore training options" },
    { slug: "humanitarian-support", title: "Humanitarian support.", summary: "People first. Preparedness, dignity, and locally informed support in times of disruption.", image: "/preview/workshop.jpg", sections: [
      { heading: "Preparedness with communities", body: "This illustrative program connects outreach, risk awareness, and practical planning. Community perspectives help identify priorities and make preparedness information more accessible." },
      { heading: "Support with dignity", body: "The sample approach emphasizes inclusion, clear coordination, and responsible engagement. Activities could include needs assessment, awareness sessions, volunteer coordination, and connections to relevant services." },
      { heading: "Recovery & learning", body: "Recovery is linked with longer-term resilience. Shared reflection and community-led planning can help strengthen future preparedness and identify opportunities to reduce risk." },
    ], action: "Discuss humanitarian collaboration" },
  ],
  "how-we-work": [
    { slug: "approach", title: "Our approach.", summary: "Start with people. Follow the evidence. Build capability together.", mode: "approach", sections: [
      { heading: "Listen before acting", body: "Local priorities and lived experience shape the questions we ask. Participation makes knowledge more relevant and helps establish a shared understanding of risk." },
      { heading: "Connect different forms of knowledge", body: "Research, geospatial evidence, and community insight each contribute something important. Bringing them together supports decisions that are technically informed and locally meaningful." },
      { heading: "Make learning practical", body: "Workshops, field learning, and reflection connect evidence with action. The process creates space to test ideas, adapt to changing conditions, and strengthen lasting capability." },
    ] },
    { slug: "strategy", title: "Our strategy.", summary: "A coherent direction for evidence, people, partnerships, and lasting institutional learning.", image: "/preview/forest.jpg", sections: [
      { heading: "Generate useful evidence", body: "Focus research and assessment on the questions that matter to communities and institutions. Translate findings into accessible resources for policy, planning, and local action." },
      { heading: "Strengthen practical capability", body: "Connect technical learning with real contexts. Support collaboration among practitioners, local leaders, and institutions so knowledge can become preparedness and informed decisions." },
      { heading: "Build relationships for the long term", body: "Develop partnerships around shared priorities, clear responsibilities, and mutual learning. The sample strategy recognizes that resilience grows through sustained relationships." },
      { heading: "Learn, reflect & adapt", body: "Review progress through practical reflection and accessible learning. Use evidence and participant perspectives to improve the next cycle of work. This is a proposed strategy narrative, not an approved BRD strategic plan." },
    ] },
  ],
  "get-involved": [
    { slug: "events", title: "Attend an event.", summary: "A place to exchange ideas, learn practical skills, and meet others working toward a resilient future.", mode: "events", sections: [], action: "Discuss an event" },
    { slug: "team", title: "Join our team.", summary: "Bring your perspective, your expertise, and your commitment to meaningful local action.", mode: "careers", sections: [], action: "Introduce yourself" },
    { slug: "volunteers", title: "Join our volunteer network.", summary: "Contribute your time and curiosity to community learning, preparedness, and outreach.", image: "/preview/workshop.jpg", sections: [
      { heading: "Ways to contribute", body: "Illustrative opportunities include outreach, event support, knowledge sharing, and practical learning activities. A thoughtful introduction helps connect interests and skills with suitable future opportunities." },
      { heading: "Learning together", body: "Volunteering can be an opportunity to listen, learn, and contribute responsibly. Supportive orientation and clear expectations help make community engagement useful and respectful." },
      { heading: "Start a conversation", body: "Tell us about your interests, experience, and availability. This preview does not accept volunteer applications; the enquiry form allows a sample interaction without sending or storing information." },
    ], action: "Express your interest" },
    { slug: "support", title: "Support us.", summary: "Help create the conditions for locally led learning, preparedness, and resilience.", image: "/preview/mangroves.jpg", sections: [
      { heading: "Support a shared purpose", body: "Illustrative support pathways include research partnerships, learning resources, community initiatives, and in-kind technical expertise. A conversation helps identify the priorities that matter most." },
      { heading: "Responsible stewardship", body: "Clear priorities, thoughtful planning, and shared reflection guide how support could contribute to useful outcomes. The emphasis is on accountability and long-term capability." },
      { heading: "No payments in this preview", body: "This design prototype does not collect donations or display banking details. Approved support arrangements can be discussed directly using BRD's contact details." },
    ], action: "Discuss supporting BRD" },
    { slug: "partners", title: "Partner with us.", summary: "Connect your expertise and ambition with a shared challenge. Together, we can ask better questions and create practical pathways forward.", image: "/preview/workshop.jpg", sections: [
      { heading: "Research & evidence", body: "Explore a shared research question, contribute a technical perspective, or collaborate on accessible knowledge resources. Joint learning can connect institutional expertise with local priorities." },
      { heading: "Programs & practical learning", body: "Sample partnerships could support preparedness, climate adaptation, training, and outreach. A clear understanding of responsibilities helps build a useful and accountable collaboration." },
      { heading: "Start with common ground", body: "An initial conversation explores context, interests, and intended outcomes. From there, partners can define a practical scope and a shared way of learning from the work." },
    ], action: "Start a partnership conversation" },
  ],
};

export const values = [
  ["Integrity", "Responsible research, thoughtful stewardship, and transparent decisions."],
  ["Inclusion", "Participation that respects different perspectives and lived experience."],
  ["Collaboration", "Shared questions, practical relationships, and mutual learning."],
  ["Learning", "Curiosity, reflection, and the willingness to adapt."],
];

export const samplePartners = [
  ["Coastal Futures Network", "Community & ecosystem stewardship"],
  ["Urban Resilience Collective", "Preparedness & local planning"],
  ["Rural Learning Alliance", "Livelihoods & adaptation"],
  ["Spatial Futures Lab", "Geospatial research & learning"],
];

export const sampleEvents = [
  { title: "Community preparedness roundtable", date: "12 November 2026", day: "12", month: "NOV", format: "Roundtable", location: "Dar es Salaam", summary: "A sample discussion connecting community experience with practical preparedness priorities." },
  { title: "Earth observation for local planning", date: "26 November 2026", day: "26", month: "NOV", format: "Learning workshop", location: "Online", summary: "An illustrative learning session on translating spatial evidence into useful local decisions." },
  { title: "Climate resilience learning exchange", date: "10 December 2026", day: "10", month: "DEC", format: "Learning exchange", location: "Dar es Salaam", summary: "A sample gathering to share ideas about adaptation, livelihoods, and collaborative learning." },
];

export const sampleRoles = [
  ["Research & learning officer", "Research", "Support interdisciplinary studies, community learning, and accessible knowledge resources."],
  ["Geospatial specialist", "Technical expertise", "Connect spatial analysis, mapping, and Earth observation with local planning priorities."],
  ["Community engagement coordinator", "Programs", "Support inclusive outreach, practical learning, and thoughtful community partnerships."],
];
