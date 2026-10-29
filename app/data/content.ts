import team from "./team.json" with { type: "json" };
// Institutional records use supplied BRD copy; insight articles are general editorial content.
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
    "imageAlt": "BRD Tanzania project context",
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
    "imageAlt": "BRD Tanzania project context",
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
    "imageAlt": "BRD Tanzania project context",
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
    "imageAlt": "BRD Tanzania project context",
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
    "imageAlt": "BRD Tanzania activities",
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
    "imageAlt": "BRD Tanzania activities",
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
    "imageAlt": "BRD Tanzania activities",
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
    "imageAlt": "BRD Tanzania activities",
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
    "imageAlt": "BRD Tanzania activities",
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
    "imageAlt": "BRD Tanzania activities",
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

export const people: ContentItem[] = team.map((member) => ({slug: member.slug, title: member.name, category: "Our Team", role: member.role, summary: member.role, image: member.image, imageAlt: member.name, isIllustrative: false, facts: [["Role", member.role], ["Organisation", "BRD Tanzania"]] as [string, string][], sections: member.biography.map((body, index) => ({heading: ["Biography", "Areas of expertise", "Professional experience", "Further experience"][index] || "Experience", body}))}));

export const resources: ContentItem[] = [];

export const stories: ContentItem[] = [
  {
    "slug": "from-maps-to-local-action",
    "title": "From maps to meaningful local action",
    "category": "Insights",
    "image": "/brd/photos/dar-es-salaam.webp",
    "imageAlt": "Dar es Salaam and its waterfront",
    "summary": "Connecting spatial information with the questions that matter to communities and institutions",
    "facts": [
      [
        "Topic",
        "Geospatial information"
      ]
    ],
    "sections": [
      {
        "heading": "Knowledge in context",
        "body": "A map can reveal patterns that are difficult to see from the ground. Its usefulness depends on how it connects with local questions, experience and decisions."
      },
      {
        "heading": "Learning together",
        "body": "Researchers, local institutions and residents can build a shared understanding of risk. Participatory processes help make technical information more accessible and relevant."
      },
      {
        "heading": "From information to action",
        "body": "A shared conversation about what the evidence means locally helps connect maps with practical choices. People need opportunities to question information, contribute their knowledge and discuss what to do next."
      }
    ]
  },
  {
    "slug": "learning-that-builds-preparedness",
    "title": "Learning that builds preparedness",
    "category": "Insights",
    "image": "/brd/news/learning-preparedness.png",
    "imageAlt": "Editorial artwork of Black Tanzanian professionals collaborating in a BRD learning session",
    "summary": "Practical exercises, local scenarios and shared reflection help connect learning with preparedness",
    "facts": [
      [
        "Topic",
        "Training and preparedness"
      ]
    ],
    "sections": [
      {
        "heading": "Preparedness as a shared practice",
        "body": "Learning is an ongoing process. Skills develop through discussion, practice, reflection and the relationships that connect people."
      },
      {
        "heading": "From training to action",
        "body": "A useful learning programme connects concepts with everyday decisions. Simulations, local scenarios and peer learning create opportunities to put knowledge into practice."
      },
      {
        "heading": "Continuing to learn",
        "body": "Preparedness benefits from learning beyond a workshop. Regular practice, peer exchange and time for reflection help strengthen skills and the relationships that support action."
      }
    ]
  },
  {
    "slug": "nature-and-coastal-resilience",
    "title": "Nature belongs in the resilience conversation",
    "category": "Insights",
    "image": "/brd/photos/community-meeting.webp",
    "imageAlt": "Participants in a community discussion",
    "summary": "Connecting ecosystem stewardship with the priorities of coastal communities",
    "facts": [
      [
        "Topic",
        "Community resilience"
      ]
    ],
    "sections": [
      {
        "heading": "Connected systems",
        "body": "The relationship between coastal ecosystems and the people who depend on them belongs in conversations about resilience. Environmental and social priorities need to be considered together."
      },
      {
        "heading": "Local priorities",
        "body": "A shared conversation can bring together ecosystem knowledge, livelihood needs and practical planning. Listening and collaborative learning help different groups explain what matters to them."
      },
      {
        "heading": "Continuing the conversation",
        "body": "Resilience planning benefits from discussion across these perspectives. Communities and institutions can use that discussion to identify practical next steps."
      }
    ]
  }
];

export const collections = { projects, research, services, people, "knowledge-hub": resources, news: stories };
export type CollectionKey = keyof typeof collections;
export const collectionLabels: Record<CollectionKey, string> = { projects: "Projects", research: "Research", services: "Services", people: "Our people", "knowledge-hub": "Knowledge Hub", news: "News & stories" };

export const searchItems = Object.entries(collections).flatMap(([section, items]) => items.map(item => ({ ...item, href: `/${section}/${item.slug}`, section: collectionLabels[section as CollectionKey] })));
