// Projects and services use supplied BRD copy. Remaining resource and news samples are illustrative.
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
  isIllustrative?: boolean;
  facts: [string, string][];
  sections: { heading: string; body: string }[];
};

export const projects: ContentItem[] = [
  {
    "slug": "flood-resilience-tanzania",
    "title": "Enhancing Flood Resilience in Tanzania",
    "category": "Flood resilience",
    "image": "/brd/photos/dar-es-salaam.webp",
    "imageAlt": "Photograph supplied by BRD Tanzania, used for context rather than documentation of this specific project",
    "summary": "This project aimed to strengthen flood resilience in Tanzania by improving basin-level flood forecasting, flood hazard assessment and early warning systems to support timely decision-making and early action.",
    "facts": [
      [
        "Focus",
        "Flood resilience"
      ]
    ],
    "sections": [
      {
        "heading": "Project summary",
        "body": "This project aimed to strengthen flood resilience in Tanzania by improving basin-level flood forecasting, flood hazard assessment and early warning systems to support timely decision-making and early action. Key activities included developing flood hazard and risk maps, preparing flood inundation maps for different return periods, identifying critical infrastructure exposed to flooding, and enhancing early warning dissemination protocols."
      }
    ],
    "isIllustrative": false
  },
  {
    "slug": "media-disaster-risk-management",
    "title": "Building the Capacity of Media Practitioners in Disaster Risk Management",
    "category": "Training",
    "image": "/brd/photos/training-discussion.webp",
    "imageAlt": "Photograph supplied by BRD Tanzania, used for context rather than documentation of this specific project",
    "summary": "This assignment aimed to strengthen media practitioners' knowledge and practical capacity in disaster risk management (DRM).",
    "facts": [
      [
        "Focus",
        "Training"
      ]
    ],
    "sections": [
      {
        "heading": "Project summary",
        "body": "This assignment aimed to strengthen media practitioners' knowledge and practical capacity in disaster risk management (DRM). Training covered the concepts and principles of DRM and the role of media in disaster preparedness, response, recovery and risk reduction. It also focused on strengthening participants' skills in gathering, verifying, interpreting and communicating disaster-related information."
      }
    ],
    "isIllustrative": false
  },
  {
    "slug": "national-disaster-management-policy",
    "title": "Comprehensive Review and Implementation Evaluation of the National Disaster Management Policy (2004)",
    "category": "Policy & governance",
    "image": "/brd/photos/community-meeting.webp",
    "imageAlt": "Photograph supplied by BRD Tanzania, used for context rather than documentation of this specific project",
    "summary": "This assignment involved reviewing Tanzania's National Disaster Management Policy (2004) and evaluating its implementation, effectiveness and relevance in addressing evolving disaster risks.",
    "facts": [
      [
        "Focus",
        "Policy & governance"
      ]
    ],
    "sections": [
      {
        "heading": "Project summary",
        "body": "This assignment involved reviewing Tanzania's National Disaster Management Policy (2004) and evaluating its implementation, effectiveness and relevance in addressing evolving disaster risks. The assessment examined achievements, policy gaps and implementation challenges, considered alignment with current national priorities and international frameworks, and developed evidence-based recommendations to strengthen disaster risk reduction, preparedness, response, recovery and institutional coordination."
      }
    ],
    "isIllustrative": false
  },
  {
    "slug": "sadc-gender-risk-informed-development",
    "title": "Mainstreaming Gender and Risk-Informed Development into the SADC Disaster Risk Coordination Mechanism",
    "category": "Gender & risk-informed development",
    "image": "/brd/photos/brd-workshop.webp",
    "imageAlt": "Photograph supplied by BRD Tanzania, used for context rather than documentation of this specific project",
    "summary": "This project assessed the integration of gender equality and risk-informed development (RID) within the Southern African Development Community (SADC) Disaster Risk Coordination Mechanism (DRCM).",
    "facts": [
      [
        "Focus",
        "Gender & risk-informed development"
      ]
    ],
    "sections": [
      {
        "heading": "Project summary",
        "body": "This project assessed the integration of gender equality and risk-informed development (RID) within the Southern African Development Community (SADC) Disaster Risk Coordination Mechanism (DRCM). Activities included reviewing the SADC Secretariat's disaster risk management coordination mechanisms and decision-making processes, conducting interviews with key experts, identifying opportunities for mainstreaming gender and RID principles, and developing a visual representation of the mechanism with recommendations for strengthening their integration into regional instruments and decision-making."
      }
    ],
    "isIllustrative": false
  }
];

export const research: ContentItem[] = [];

export const services: ContentItem[] = [
  {
    "slug": "research-and-assessment",
    "title": "Research, Evidence and Learning",
    "category": "Research",
    "summary": "BRD Research Center undertakes and supports research on disaster risk management, disaster risk reduction, climate change and community resilience. Our research interests include hazard prevention and mitigation, preparedness, response and recovery, disaster risk assessment, physical and social vulnerability, disaster governance, gender and disaster risk reduction, early warning systems, and climate change adaptation and mitigation.  We aim to generate evidence that can inform policy, planning, practice and future research.",
    "image": "/brd/photos/brd-workshop.webp",
    "imageAlt": "Contextual photograph supplied by BRD Tanzania",
    "facts": [
      [
        "Service area",
        "Research"
      ]
    ],
    "sections": [
      {
        "heading": "Research, Evidence and Learning",
        "body": "BRD Research Center undertakes and supports research on disaster risk management, disaster risk reduction, climate change and community resilience. Our research interests include hazard prevention and mitigation, preparedness, response and recovery, disaster risk assessment, physical and social vulnerability, disaster governance, gender and disaster risk reduction, early warning systems, and climate change adaptation and mitigation.  We aim to generate evidence that can inform policy, planning, practice and future research."
      }
    ],
    "isIllustrative": false
  },
  {
    "slug": "consultancy-and-advocacy",
    "title": "Consultancy & advocacy",
    "category": "Advisory",
    "summary": "Through the BRD Consultancy and Advocacy Center, BRD provides technical and advisory services to government institutions, development partners, NGOs, private-sector organisations and other stakeholders. Our services support risk-informed planning, institutional capacity, climate resilience and evidence-based decision-making.",
    "image": "/brd/photos/brd-workshop.webp",
    "imageAlt": "Contextual photograph supplied by BRD Tanzania",
    "facts": [
      [
        "Service area",
        "Advisory"
      ]
    ],
    "sections": [
      {
        "heading": "Consultancy & advocacy",
        "body": "Through the BRD Consultancy and Advocacy Center, BRD provides technical and advisory services to government institutions, development partners, NGOs, private-sector organisations and other stakeholders. Our services support risk-informed planning, institutional capacity, climate resilience and evidence-based decision-making."
      }
    ],
    "isIllustrative": false
  },
  {
    "slug": "gis-and-earth-observation",
    "title": "Geospatial & Earth Observation Services",
    "category": "Geospatial science",
    "summary": "BRD applies Geographic Information Systems (GIS), remote sensing, Earth observation and geospatial analysis to support disaster risk assessment, vulnerability analysis, climate resilience, environmental management and evidence-based planning. Depending on assignment requirements, outputs may include spatial databases, maps, analytical reports, risk information products and decision-support tools.",
    "image": "/brd/photos/dar-es-salaam.webp",
    "imageAlt": "Contextual photograph supplied by BRD Tanzania",
    "facts": [
      [
        "Service area",
        "Geospatial science"
      ]
    ],
    "sections": [
      {
        "heading": "Geospatial & Earth Observation Services",
        "body": "BRD applies Geographic Information Systems (GIS), remote sensing, Earth observation and geospatial analysis to support disaster risk assessment, vulnerability analysis, climate resilience, environmental management and evidence-based planning. Depending on assignment requirements, outputs may include spatial databases, maps, analytical reports, risk information products and decision-support tools."
      }
    ],
    "isIllustrative": false
  },
  {
    "slug": "humanitarian-support",
    "title": "Humanitarian support",
    "category": "Humanitarian support",
    "summary": "BRD Tanzania contributes to humanitarian preparedness and supports disaster-affected communities during response, relief, and recovery through collaboration with relevant stakeholders, community engagement, and volunteer mobilisation. Its efforts aim to promote timely, coordinated, and people-centred assistance, while encouraging volunteerism and local participation in meeting urgent needs, restoring livelihoods, and strengthening community resilience.",
    "image": "/brd/photos/brd-workshop.webp",
    "imageAlt": "Contextual photograph supplied by BRD Tanzania",
    "facts": [
      [
        "Service area",
        "Humanitarian support"
      ]
    ],
    "sections": [
      {
        "heading": "Humanitarian support",
        "body": "BRD Tanzania contributes to humanitarian preparedness and supports disaster-affected communities during response, relief, and recovery through collaboration with relevant stakeholders, community engagement, and volunteer mobilisation. Its efforts aim to promote timely, coordinated, and people-centred assistance, while encouraging volunteerism and local participation in meeting urgent needs, restoring livelihoods, and strengthening community resilience."
      }
    ],
    "isIllustrative": false
  },
  {
    "slug": "outreach-community-engagement",
    "title": "Outreach & Community Engagement",
    "category": "Outreach",
    "summary": "BRD supports public awareness, workshops, seminars, community engagement, training activities and knowledge-sharing events on disaster risk management, disaster risk reduction, climate change and resilience. These activities aim to improve risk awareness, encourage preparedness and make scientific and geospatial information more accessible to practitioners, communities and decision-makers.",
    "image": "/brd/photos/brd-workshop.webp",
    "imageAlt": "Contextual photograph supplied by BRD Tanzania",
    "facts": [
      [
        "Service area",
        "Outreach"
      ]
    ],
    "sections": [
      {
        "heading": "Outreach & Community Engagement",
        "body": "BRD supports public awareness, workshops, seminars, community engagement, training activities and knowledge-sharing events on disaster risk management, disaster risk reduction, climate change and resilience. These activities aim to improve risk awareness, encourage preparedness and make scientific and geospatial information more accessible to practitioners, communities and decision-makers."
      }
    ],
    "isIllustrative": false
  },
  {
    "slug": "training-and-capacity",
    "title": "Training & capacity development",
    "category": "Training",
    "summary": "BRD Training Center designs and delivers learning opportunities to strengthen the knowledge, skills and practical capacities of professionals, institutions and communities in disaster risk management, disaster risk reduction, climate resilience and geospatial technologies. Training can be adapted to participants' needs and may combine technical instruction, case studies, practical exercises, simulations and peer learning.",
    "image": "/brd/photos/brd-workshop.webp",
    "imageAlt": "Contextual photograph supplied by BRD Tanzania",
    "facts": [
      [
        "Service area",
        "Training"
      ]
    ],
    "sections": [
      {
        "heading": "Training & capacity development",
        "body": "BRD Training Center designs and delivers learning opportunities to strengthen the knowledge, skills and practical capacities of professionals, institutions and communities in disaster risk management, disaster risk reduction, climate resilience and geospatial technologies. Training can be adapted to participants' needs and may combine technical instruction, case studies, practical exercises, simulations and peer learning."
      }
    ],
    "isIllustrative": false
  }
];

export const people: ContentItem[] = [];

export const resources: ContentItem[] = [
  ["community-preparedness-guide", "A practical guide to community preparedness", "Guideline", "Disaster risk", "2026", "/preview/workshop.jpg"],
  ["coastal-adaptation-brief", "Local pathways to coastal adaptation", "Policy brief", "Climate resilience", "2026", "/preview/mangroves.jpg"],
  ["earth-observation-handbook", "Earth observation for resilience planning", "Technical document", "Geospatial science", "2025", "/preview/agriculture.jpg"],
  ["inclusive-warning-systems", "Inclusive early warning systems", "Research report", "Disaster risk", "2025", "/preview/city.jpg"],
  ["livelihoods-learning-note", "Learning from climate-smart livelihoods", "Case study", "Climate resilience", "2026", "/preview/agriculture.jpg"],
  ["community-engagement-toolkit", "A toolkit for meaningful community engagement", "Guideline", "Community wellbeing", "2026", "/preview/workshop.jpg"],
  ["community-risk-map", "Reading a community risk map", "Map", "Geospatial science", "2026", "/preview/agriculture.jpg"],
  ["local-spatial-data", "Local spatial data for preparedness", "Geospatial resource", "Geospatial science", "2026", "/preview/city.jpg"],
  ["preparedness-training-pack", "A learning pack for local preparedness", "Training material", "Disaster risk", "2026", "/preview/workshop.jpg"],
  ["adaptation-learning-slides", "Climate adaptation: a learning presentation", "Presentation", "Climate resilience", "2026", "/preview/agriculture.jpg"],
  ["participatory-planning-toolkit", "A participatory planning toolkit", "Toolkit", "Community wellbeing", "2026", "/preview/workshop.jpg"],
  ["visual-resilience-learning", "Visual learning for resilience", "Video", "Climate resilience", "2026", "/preview/mangroves.jpg"],
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
