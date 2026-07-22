/**
 * AIESEC in Sri Lanka - NPM 26.27 Recruitment Portal
 * Structured data for all 7 functions and their roles.
 */

const APPLY_URL = "https://docs.google.com/forms/d/e/1FAIpQLSfpkSQ0Ym4aCrtBnjdGwdUTsnckIl39Wx4eT9DzLYF8k1J6ag/formResponse";

const FUNCTIONS = [
  {
    id: "pd",
    name: "PD",
    fullName: "Partnership Development",
    color: "#037EF3",
    description: "National partnerships, value propositions, and corporate relationships.",
    roles: [
      {
        id: "pd-new-sales-lead",
        title: "New Sales Lead",
        positions: 2,
        description: "Design and develop new products and value propositions tailored for AIESEC's national partnership portfolio. Proactively identify market opportunities and reach out to potential partners to establish new collaborations. Work closely with national organizing committees to downscale and implement value propositions effectively across events and campaigns. Conduct market research and stakeholder analysis to ensure offerings align with partner needs and organizational goals.",
        skills: [
          "Value proposition creation",
          "Market research",
          "Stakeholder engagement",
          "Cross-functional collaboration",
          "Product implementation"
        ],
        kpis: [
          "# of new products/value propositions created",
          "Conversion rate of proposals into confirmed partnerships",
          "Feedback from local organizing committees on product implementation",
          "Revenue generated through new partnerships"
        ],
        learningOutcomes: [
          "Mastery in creating and pitching innovative value propositions",
          "Experience in market research and stakeholder engagement",
          "Skills in cross-functional collaboration and product implementation"
        ],
        questions: [
          "Identify two potential customers for AIESEC in Sri Lanka. Briefly explain how we can benefit them, how they can benefit us, and suggest relevant events to pitch.",
          "Conduct a SWOT analysis of the current Business Development context of AIESEC in Sri Lanka. Include at least two points under each category.",
          "How effectively is deliverable management handled in our current partnerships? Highlight any challenges or improvements you would suggest."
        ]
      },
      {
        id: "pd-national-accounts",
        title: "National Accounts Strategist",
        positions: 1,
        description: "Act as the primary point of contact for AIESEC's national partners, ensuring seamless communication and relationship management. Track and manage the delivery of promised deliverables for existing national partnerships, ensuring alignment with agreed timelines and objectives. Collaborate with local entities and organizing committees to support the execution of partnership deliverables. Provide detailed reports on partnership performance and suggest improvements to enhance collaboration and results.",
        skills: [
          "Interpersonal & relationship building",
          "Proficiency in project management tools",
          "Stakeholder management",
          "Analytical and problem-solving skills"
        ],
        kpis: [
          "% of deliverables completed on time",
          "Partner satisfaction score",
          "# of escalations resolved effectively",
          "Quality of partnership reports submitted"
        ],
        learningOutcomes: [
          "High-level partner handling",
          "Project management mastery",
          "Corporate stakeholder experience"
        ],
        questions: [
          "Provided inside the central application workflow."
        ]
      }
    ]
  },
  {
    id: "igv",
    name: "iGV",
    fullName: "Incoming Global Volunteer",
    color: "#F85A40",
    description: "International volunteer partnerships, project standards, and customer experience for incoming programs.",
    roles: [
      {
        id: "igv-ir-specialist",
        title: "IR Specialist",
        positions: 1,
        description: "Conduct IR partner analysis, conduct IR calls, create IR tools, and create national IR platforms.",
        skills: [
          "Basic iGV knowledge",
          "IR knowledge",
          "Presentation skills",
          "Strong communication skills",
          "Stakeholder management",
          "Google Sheets/data literacy"
        ],
        kpis: [
          "# of IR calls",
          "# of entity-entity IR spaces created",
          "% improvements in applications received"
        ],
        learningOutcomes: [
          "Broad understanding of iGV at a national level",
          "Improvement in IR knowledge",
          "Data analysis and demonstration"
        ],
        questions: [
          "Mention techniques to identify potential IR partners and measures to retain them.",
          "Suggest a framework to align slots according to partner peaks.",
          "What methods can be used to align partner expectations to ASL EY expectations?"
        ]
      },
      {
        id: "igv-b2b-cxp",
        title: "B2B & CxP Specialist",
        positions: 1,
        description: "Conducting quarter audits, creation of national search tool, LC support tool creation, and other iGV services and reporting.",
        skills: [
          "B2B knowledge",
          "Value Delivery (VD) knowledge",
          "Data management & mathematical skills"
        ],
        kpis: [
          "% of standard projects",
          "# of support tools created",
          "% completion of national search tool"
        ],
        learningOutcomes: [
          "Broad understanding of iGV at a national level",
          "Experience in reviewing iGV projects",
          "Data analysis & demonstration"
        ],
        questions: [
          "What standards do you propose a project should meet to be approved in an audit?",
          "Mention 3 types of tools EYs would need from a national level.",
          "Suggest a framework to improve number of completions of EYs from a national level."
        ]
      }
    ]
  },
  {
    id: "bd",
    name: "BD",
    fullName: "Business Development",
    color: "#00C16E",
    description: "National accounts, deliverable management, and partnership development.",
    roles: [
      {
        id: "bd-account-manager",
        title: "Account Manager",
        positions: 1,
        description: "Be the primary contact for a selected national partner, addressing inquiries and needs promptly. Identify opportunities for growth within the partnership and propose new products/services. Ensure successful completion of deliverables and align partner requirements with AIESEC opportunities. Track and report KPIs to MCVP BD.",
        skills: [
          "BD knowledge",
          "Partner handling",
          "Solution-oriented",
          "Creative thinker"
        ],
        kpis: [
          "% Deliverable Completion",
          "NPS Score",
          "# Initiatives Implemented"
        ],
        learningOutcomes: [
          "Corporate communication",
          "Partner handling",
          "Project management",
          "Networking opportunities"
        ],
        questions: [
          "Do a SWOT analysis on the current BD context of AIESEC in Sri Lanka.",
          "Mention 3 initiatives you take to increase deliverable completion ratio.",
          "Pick one National Partner of AIESEC in Sri Lanka, and propose 3 new initiatives we can execute with their collaboration."
        ]
      }
    ]
  },
  {
    id: "ogt",
    name: "oGT",
    fullName: "Outgoing Global Talent",
    color: "#0CB2C0",
    description: "International talent partnerships, IR relationships, and outbound professional exchange programs.",
    roles: [
      {
        id: "ogt-ir-manager",
        title: "IR Manager",
        positions: 2,
        description: "Analyze IR status of oGTa and oGTe products and spot potential growth pathways. Structure IR partnership data for analysis. In charge of routine IR meetings, tracking Planned vs Achieved, and maintaining opportunity frameworks. Synergize with oGT SnD & EE NPM.",
        skills: [
          "English fluency",
          "IR experience",
          "Basic oGT knowledge",
          "Data-driven decision making",
          "Critical thinking"
        ],
        kpis: [
          "# of IR meetings & goal-settings/month",
          "# of APLs sent per partnership",
          "# of ACCs per partnership",
          "% Diversification of opportunities raised"
        ],
        learningOutcomes: [
          "Data management",
          "Project management",
          "Innovative thinking",
          "Communication",
          "Strategic design"
        ],
        questions: [
          "Considering the current market and the IR context of oGT of AIESEC in Sri Lanka, what are the new potential IR partnerships we can raise? Explain.",
          "How can we effectively track the progress of existing IR partnerships, and what method would you suggest to identify high-potential IR partners for oGTa and oGTe separately?",
          "What types of opportunities can help raise awareness about the oGT function within the community? How can we ensure we consistently filter and match the most suitable customers to our IR partners?"
        ]
      },
      {
        id: "ogt-snd-ee",
        title: "SnD & EE Manager",
        positions: 1,
        description: "Raise National External Entities, maintain customer data frameworks, introduce attraction frameworks, conduct market research, cold calling, pitching, and meetings.",
        skills: [
          "oGT knowledge",
          "Data analysis",
          "Spreadsheets",
          "Critical thinking",
          "Pitching and communication"
        ],
        kpis: [
          "# National External Entities raised",
          "# customer data frameworks maintained",
          "# new external markets identified",
          "# cold calls/pitches/meetings conducted",
          "% Growth in applications"
        ],
        learningOutcomes: [
          "Data analysis/visualization",
          "Operational research",
          "Strategy",
          "Product management exposure"
        ],
        questions: [
          "What are the current bottlenecks in the customer management process for both oGTa and oGTe in AIESEC Sri Lanka? Propose two actionable solutions to address them.",
          "Based on current applicant profiles, identify at least 5 new markets (including 2 external entities like private universities/institutions) to source potential EPs.",
          "Why are many potential customers unaware of oGT opportunities, and why are those aware still reluctant to apply?"
        ]
      }
    ]
  },
  {
    id: "ogv",
    name: "oGV",
    fullName: "Outgoing Global Volunteer",
    color: "#F5A623",
    description: "Outbound volunteer programs, IR partnerships, and market development for volunteer exchange.",
    roles: [
      {
        id: "ogv-ir-manager",
        title: "IR Manager",
        positions: 3,
        description: "Conduct IR research on existing partnerships, identify potential entity partners, identify IR bottlenecks, conduct IR calls, and evaluate hosting LCs.",
        skills: [
          "IR knowledge",
          "oGV product knowledge",
          "Analytical skills",
          "Strong communication",
          "Spreadsheet proficiency"
        ],
        kpis: [
          "# new IR partnerships raised",
          "# active IR partnerships maintained",
          "# IR calls taken",
          "Applied→Accepted conversion rate",
          "% value delivery reviews"
        ],
        learningOutcomes: [
          "Cross-cultural communication",
          "Performance evaluation",
          "Negotiation",
          "Data analysis"
        ],
        questions: [
          "How do you evaluate an IR partner's performance?",
          "How would you address low IR response?",
          "What is the best way to maintain a sustainable IR partnership?"
        ]
      },
      {
        id: "ogv-research-data",
        title: "Research & Data Analytics Manager",
        positions: 1,
        description: "Conduct data analysis and visualizations for sales performance, research pitches tailored to EP personas, identify bottlenecks, conduct downscaling sessions, and create national tools.",
        skills: [
          "EP personas knowledge",
          "oGV portfolio & cycles",
          "Funnel analytics",
          "Visualization",
          "Strategic planning"
        ],
        kpis: [
          "# bottlenecks resolved",
          "# summits/training sessions held",
          "# tools/booklets created",
          "# data insights/reports generated"
        ],
        learningOutcomes: [
          "Data-driven solution design",
          "Product knowledge depth",
          "Analytical thinking",
          "Project coordination"
        ],
        questions: [
          "Create a strategy to improve the quality of EP conversations and make the oGV value proposition more impactful.",
          "What key data points would you track and visualize to measure the effectiveness of sales strategies across LCs?",
          "If one LC has high leads but low conversion rates, how would you analyze the issue and support them with improvements?"
        ]
      },
      {
        id: "ogv-market-dev",
        title: "Market Development Manager",
        positions: 1,
        description: "Take overall responsibility for the After A/L market campaign, approach professional/academic institutes (e.g., CIMA, ACCA, SLIM) and schools for partnerships, organize awareness sessions.",
        skills: [
          "Pitching",
          "Negotiation",
          "Cross-team coordination",
          "oGV knowledge",
          "Strategic planning",
          "Team leadership"
        ],
        kpis: [
          "# institutional partnerships established",
          "# awareness sessions conducted",
          "# total attendance and sign-ups",
          "Conversion rate from session attendees"
        ],
        learningOutcomes: [
          "Large-scale campaign execution",
          "Market segmentation",
          "Stakeholder management",
          "Partnership building"
        ],
        questions: [
          "How would you identify, approach, and build partnerships with professional/academic institutes and schools?",
          "How would you collaborate with the IR Manager and Research & Data Analytics Manager to achieve After A/L goals?",
          "What strategies would you implement to increase After A/L leads and improve the overall conversion funnel?"
        ]
      }
    ]
  },
  {
    id: "cxo",
    name: "CXO",
    fullName: "Customer Experience & Operations",
    color: "#9B59B6",
    description: "Operational performance, market data analysis, and IR tiering systems across all functions.",
    roles: [
      {
        id: "cxo-ops-manager",
        title: "Operations Manager",
        positions: 1,
        description: "Analyze B2B market reach, implement/maintain IR Tiering System, review IR E2E performance across last 3 terms, apply data-driven slot matching, collaborate with cross-functional NPM teams.",
        skills: [
          "Data/statistical analysis",
          "Data visualization",
          "B2B understanding",
          "Project mapping",
          "Strategic thinking"
        ],
        kpis: [
          "% Market reach vs slot utilization",
          "% IR tier distribution data",
          "# tasks completed on time",
          "OPS Dashboard completion & usage rate",
          "% Forecast accuracy"
        ],
        learningOutcomes: [
          "Advanced operational oversight",
          "Network performance modeling",
          "Data-driven management"
        ],
        questions: [
          "When given data from different terms or time periods, how would you compare performance and identify what caused any major changes or peaks?",
          "Imagine you have a limited number of project slots but a high demand from the market. How would you decide which projects or areas to prioritize?",
          "If you're asked to group IRs into performance tiers, what factors would you consider to make those tiers fair and useful?"
        ]
      }
    ]
  },
  {
    id: "igt",
    name: "iGT",
    fullName: "Incoming Global Talent",
    color: "#E74C3C",
    description: "B2B partnerships for incoming talent programs, corporate relations, and national iGT operations.",
    roles: [
      {
        id: "igt-sales-manager",
        title: "iGT Sales Manager",
        positions: 1,
        description: "Raise National iGT B2B Partners, conduct company meetings, customize national B2B proposals, perform market research, handle CRM, support entity iGT B2B operations.",
        skills: [
          "Sales & pitching skills",
          "iGT product knowledge",
          "Communication",
          "Stakeholder management",
          "Work ethic"
        ],
        kpis: [
          "# B2B Partners Raised",
          "# Company Meetings Conducted",
          "% Lead to Customer Conversions",
          "# Collaborative Campaigns"
        ],
        learningOutcomes: [
          "Corporate exposure",
          "Network building",
          "Improved pitching & sales skills",
          "Product management experience"
        ],
        questions: [
          "Provided inside the central application workflow."
        ]
      }
    ]
  }
];

// Calculate total positions
const TOTAL_POSITIONS = FUNCTIONS.reduce((total, fn) => {
  return total + fn.roles.reduce((sum, role) => sum + role.positions, 0);
}, 0);
