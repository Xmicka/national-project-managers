/**
 * AIESEC in Sri Lanka - NPM 26.27 Sem 1 Recruitment Portal
 * Structured data for all 11 teams and their roles.
 * Source: https://docs.google.com/spreadsheets/d/1i2-cRPcfAwJqI74StxPaswj4ULuLV-95xuv7fFA9Xuw
 */

const APPLY_URL = "https://docs.google.com/forms/d/e/1FAIpQLSfpkSQ0Ym4aCrtBnjdGwdUTsnckIl39Wx4eT9DzLYF8k1J6ag/formResponse";

const FUNCTIONS = [
  // ─── NATIONAL BD TEAM ───
  {
    id: "bd",
    name: "BD",
    fullName: "National BD Team",
    color: "#037EF3",
    description: "National partnerships, value propositions, corporate relationships, and partnership marketing.",
    roles: [
      {
        id: "bd-new-sales-lead",
        title: "New Sales Lead",
        positions: 3,
        description: "Design and develop new products and value propositions tailored for AIESEC's national partnership portfolio. Proactively identify market opportunities and reach out to potential partners to establish new collaborations. Work closely with national organizing committees to downscale and implement value propositions effectively across events and campaigns. Conduct market research and stakeholder analysis to ensure offerings align with partner needs and organizational goals.",
        skills: [
          "Value proposition creation",
          "Market research & stakeholder analysis",
          "Cross-functional collaboration",
          "Product implementation & downscaling",
          "Partner outreach & relationship building"
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
        id: "bd-national-accounts",
        title: "National Accounts Strategist",
        positions: 1,
        description: "Act as the primary point of contact for AIESEC's national partners, ensuring seamless communication and relationship management. Track and manage the delivery of promised deliverables for existing national partnerships, ensuring alignment with agreed timelines and objectives. Collaborate with local entities and organizing committees to support the execution of partnership deliverables. Provide detailed reports on partnership performance and suggest improvements to enhance collaboration and results.",
        skills: [
          "Strong interpersonal and relationship-building skills",
          "Proficiency in project management tools and methodologies",
          "Ability to multitask and manage diverse stakeholders effectively",
          "Familiarity with AIESEC's partnership processes and values",
          "Analytical and problem-solving skills"
        ],
        kpis: [
          "Percentage of deliverables completed on time",
          "Partner satisfaction score (feedback collected from partners)",
          "Number of escalations resolved effectively",
          "Quality of partnership reports submitted"
        ],
        learningOutcomes: [
          "High-level partner handling experience",
          "Project management mastery",
          "Corporate stakeholder communication"
        ],
        questions: []
      },
      {
        id: "bd-partnership-marketing",
        title: "Partnership Marketing Manager",
        positions: 1,
        description: "Design and produce marketing collateral (posters, one-pagers, social assets) for confirmed and in-progress partnerships. Work with the BD leads to translate new deals into shareable announcement content on time for launch. Coordinate with the National PR team to keep partnership content on-brand and cross-posted on national channels. Maintain a reusable template library so partnership posters/announcements can be turned around quickly.",
        skills: [
          "Graphic design (Canva/Adobe Suite) with a fast turnaround",
          "Basic copywriting for partnership/sponsor announcements",
          "Familiarity with AIESEC's brand guidelines and partner co-branding etiquette",
          "Comfortable working with both BD and PR functions"
        ],
        kpis: [
          "# of partnership marketing assets delivered per month",
          "Turnaround time from deal confirmation to published announcement",
          "Engagement rate on partnership announcement posts",
          "# of partnerships with zero marketing backlog"
        ],
        learningOutcomes: [
          "Skills in fast turnaround design production",
          "Experience working at the intersection of sales and marketing",
          "Understanding of partner co-branding and approval workflows"
        ],
        questions: [
          "Design (in words) a poster layout announcing a new national partnership — what goes where and why.",
          "Introduce new initiatives and innovative approaches to effectively showcase AIESEC in Sri Lanka's partnerships and strengthen community engagement.",
          "How would you keep a template library so a new Partnership announcement can go out within a day of the deal closing?"
        ]
      }
    ]
  },

  // ─── NATIONAL PR TEAM ───
  {
    id: "pr",
    name: "PR",
    fullName: "National PR Team",
    color: "#E91E63",
    description: "Brand strategy, marketing direction, and public relations campaigns at the national level.",
    roles: [
      {
        id: "pr-brand-strategist",
        title: "Brand and Marketing Strategist",
        positions: 1,
        description: "Own ASL PR overall brand strategy and marketing direction for the term. Design integrated marketing plans for major campaigns (recruitment, partnerships, national events). Ensure brand consistency and positioning across all national and local touchpoints. Analyze market trends and member/customer insights to inform strategy.",
        skills: [
          "Brand strategy and marketing planning",
          "Market research and trend analysis",
          "Cross-functional leadership and stakeholder alignment",
          "Familiarity with AIESEC's brand architecture and positioning"
        ],
        kpis: [
          "Brand awareness/recall metrics (survey or social listening based)",
          "# of integrated campaigns planned and launched",
          "Cross-functional campaign alignment score",
          "Marketing plan delivery against timeline"
        ],
        learningOutcomes: [
          "Strategic brand and marketing planning experience",
          "Skills in translating strategy into executable campaigns",
          "Leadership in aligning multiple functions around one brand direction"
        ],
        questions: [
          "Design (in words) a poster layout announcing a new national partnership — what goes where and why.",
          "Introduce new initiatives and innovative approaches to effectively showcase AIESEC in Sri Lanka's partnerships and strengthen community engagement.",
          "How would you keep a template library so a new PR Partnership announcement can go out within a day of the deal closing?"
        ]
      },
      {
        id: "pr-manager",
        title: "PR Manager",
        positions: 2,
        description: "Develop and execute national PR campaigns aligned with AIESEC in Sri Lanka's branding strategy. Create innovative initiatives to increase AIESEC's visibility among youth, partners, and the public. Build and manage relationships with government bodies, embassies, and civil society organizations. Coordinate with Local Committees to ensure consistent branding across all PR activities. Manage media relations and identify opportunities for national media exposure. Collaborate with BD, Marketing, and Events teams to maximize campaign reach and partner visibility. Monitor campaign performance and prepare post-campaign reports with insights and recommendations.",
        skills: [
          "Project and stakeholder management",
          "Strong written and verbal communication",
          "Understanding of AIESEC's PR processes and network structure"
        ],
        kpis: [
          "# of PR campaigns executed on schedule",
          "LC PR performance/participation rate",
          "Reach/engagement generated by managed campaigns",
          "Report submission consistency and quality"
        ],
        learningOutcomes: [
          "Campaign management and cross-team coordination skills",
          "Experience managing a distributed team's PR output",
          "Reporting and performance tracking discipline"
        ],
        questions: [
          "AIESEC has secured a new national partner. How would you create a PR campaign to maximize the visibility and value of this partnership?",
          "Tell us about a PR, marketing, or social media campaign you have led. What was your strategy, execution process, and measurable impact?",
          "If engagement on AIESEC in Sri Lanka's social media dropped by 40% over the last month, how would you identify the cause and improve performance?"
        ]
      }
    ]
  },

  // ─── iGV ───
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
          "Basic knowledge about iGV function",
          "IR knowledge",
          "Presentation skills",
          "Strong communication skills",
          "Stakeholder management",
          "Literacy in data management and Google Sheets"
        ],
        kpis: [
          "# of IR calls",
          "# of entity-entity IR spaces created",
          "% improvements in applications received"
        ],
        learningOutcomes: [
          "Broad understanding of iGV at a national level",
          "Improvement in IR knowledge",
          "Data analysing and demonstration"
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
          "VD knowledge",
          "Proficiency in data management and Google Sheets",
          "Good mathematical skills"
        ],
        kpis: [
          "% of standard projects",
          "# of support tools created",
          "% completion of national search tool"
        ],
        learningOutcomes: [
          "Broad understanding of iGV at a national level",
          "Experience in reviewing iGV projects",
          "Data analysing and demonstration"
        ],
        questions: [
          "What standards do you propose a project should meet to be approved in an audit?",
          "Mention 3 types of tools EYs would need from a national level.",
          "Suggest a framework to improve number of completions of EYs from a national level."
        ]
      }
    ]
  },

  // ─── oGT ───
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
        description: "Analyze the IR status of both oGTa and oGTe products and spot potential pathways to grow the network. Structure IR partnership data for analysis. In charge of routine IR meetings and related activities. Track Planned vs Achieved for each partnership and strategize to improve performance. Maintain available opportunities in a user-friendly framework. Synergize with oGT SnD & EE NPM.",
        skills: [
          "Intermediate level of fluency in English",
          "Past experience in IR",
          "Basic knowledge about the oGT function",
          "Decision-making ability based on data",
          "Critical thinking and organized work approach"
        ],
        kpis: [
          "# of IR meetings and goal-settings conducted per month",
          "# of APLs sent per partnership",
          "# of ACCs per partnership",
          "% Diversification of opportunities raised"
        ],
        learningOutcomes: [
          "Experience in data management and analysis",
          "Experience in project management",
          "Improvement in innovative thinking",
          "Ability to improve network and communication skills",
          "Enhancement of strategic approaches and skills"
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
        description: "Raise National External Entities, maintain well-organized customer data frameworks, introduce customizable attraction frameworks for internal and external campaigns. Collaborate with IR NPM to track new opportunities and focus areas. Conduct market research and identify potential external markets. Cold calling, pitching, and setting up meetings.",
        skills: [
          "Basic oGT knowledge",
          "Data analysis and decision-making",
          "Skilled in data management and spreadsheets",
          "Critical thinker with organized work style",
          "Good communication and pitching skills",
          "Willingness to learn and understand markets"
        ],
        kpis: [
          "# of National External Entities raised",
          "# of customer data frameworks maintained",
          "# of attraction frameworks introduced",
          "# of new external markets identified",
          "# of cold calls, pitches, and meetings conducted",
          "% Growth in applications from new markets"
        ],
        learningOutcomes: [
          "Sharpen data analysis and visualization skills",
          "Improve operational research abilities",
          "Gain practical experience in innovation and strategy",
          "Develop creative design skills",
          "Gain product management exposure at the national level"
        ],
        questions: [
          "What are the current bottlenecks in the customer management process for both oGTa and oGTe in AIESEC Sri Lanka? Propose two actionable solutions to address them.",
          "Based on the current strong applicant profiles in oGTa of AIESEC in Sri Lanka, identify at least 5 new markets to source potential Exchange Participants. Ensure at least 2 of these are external entities such as private universities, institutions, or organizations outside the AIESEC network.",
          "In your opinion, why are many potential customers unaware of oGT opportunities, and why are those who are aware still reluctant to apply?"
        ]
      }
    ]
  },

  // ─── oGV ───
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
        description: "Conducting IR research about the existing partnerships, identifying potential entities to partner up, identifying IR bottlenecks, conducting IR calls with each country, and proper value delivery and evaluation of hosting LCs.",
        skills: [
          "IR knowledge and experience",
          "oGV product knowledge",
          "Analytical skills",
          "Strong communication skills",
          "Strong analytical and data management skills, proficient in Google Sheets"
        ],
        kpis: [
          "# new IR partnerships raised",
          "# active IR partnerships maintained",
          "# of IR calls taken",
          "Applied→Accepted by host conversion rate",
          "% of value delivery reviews"
        ],
        learningOutcomes: [
          "Master stakeholder communication across diverse cultures",
          "Learn to conduct performance evaluation of entities",
          "Enhance negotiation and diplomacy skills in a global context",
          "Develop proficiency in data analysis",
          "Improve email professionalism"
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
        description: "Conduct data analysis and create visualizations to track sales performance, identify trends, and present insights. Research sales pitches tailored to different EP personas. Identify key sales bottlenecks in the oGV funnel and propose improvement strategies. Conduct knowledge downscaling sessions for members and team leaders. Organize national sales summits and capacity-building initiatives. Create and maintain national tools to support EP nurturing and sales processes.",
        skills: [
          "Deep knowledge of diverse EP personas and their motivations",
          "Thorough understanding of oGV product portfolio and exchange cycles",
          "Proficiency in funnel analytics, data analysis, visualization and tool development",
          "Strong strategic planning and communication skills"
        ],
        kpis: [
          "# of bottlenecks resolved",
          "# of summits/training sessions held",
          "# tools and training booklets created and updated",
          "# data insights and visual reports generated"
        ],
        learningOutcomes: [
          "Learn to design data-driven solutions",
          "Deepen knowledge of the oGV product across markets",
          "Strengthen persona-based sales skills",
          "Develop analytical thinking by identifying and resolving funnel bottlenecks",
          "Gain experience in project coordination and stakeholder education"
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
        description: "Take overall responsibility for the After A/L market and align the campaign strategy with the team. Collaborate closely with the IR Manager and Research & Data Analytics Manager to ensure campaign success. Research and approach professional/academic institutes (e.g., CIMA, ACCA, SLIM) and schools for potential partnerships. Prepare and present partnership proposals to institutes and schools. Coordinate and organize awareness sessions with partnered institutes and schools. Build and maintain long-term relationships with partner institutes and schools.",
        skills: [
          "Strong pitching, negotiation, and stakeholder management skills",
          "Excellent communication and cross-team coordination abilities",
          "In-depth oGV product knowledge and experience",
          "Strategic planning, critical thinking, and problem-solving skills",
          "Team leadership and project management capabilities"
        ],
        kpis: [
          "# institutional partnerships established",
          "# awareness sessions conducted",
          "# total session attendance and EP sign-ups generated",
          "Percentage contribution of After A/L leads to the overall pipeline",
          "Conversion rate from awareness session attendees to EP sign-ups/applications"
        ],
        learningOutcomes: [
          "Gain experience in leading large-scale campaigns and national-level execution",
          "Develop strategic thinking, market segmentation, and long-term planning skills",
          "Improve decision-making, problem-solving, and project coordination abilities",
          "Strengthen team handling, delegation, and cross-functional collaboration skills",
          "Build confidence in pitching, proposal drafting, and professional communication"
        ],
        questions: [
          "How would you identify, approach, and build partnerships with professional/academic institutes and schools?",
          "How would you collaborate with the IR Manager and Research & Data Analytics Manager to achieve your After A/L market goals?",
          "What strategies would you implement to increase After A/L leads and improve the overall conversion funnel?"
        ]
      }
    ]
  },

  // ─── CXO ───
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
        description: "Understand and analyze B2B market reach and map it effectively with ongoing and upcoming projects and available slots. Implement and maintain an IR Tiering System aligned with strategic vertical goals. Review IR E2E performance across the last three terms using a comprehensive dashboard. Analyze growth patterns, identify changes and deviations, and investigate performance peaks. Apply data-driven approaches for optimizing project slot matching and improving engagement efficiency. Collaborate with cross-functional NPM teams to align market reach with organizational objectives.",
        skills: [
          "Data and statistical analysis",
          "Data visualization",
          "Strong functional knowledge and experience",
          "B2B market understanding",
          "Project mapping",
          "Strategic thinking",
          "Attention to detail"
        ],
        kpis: [
          "% Market reach vs. project slot utilization rate",
          "% IR tier distribution data across quarters",
          "# of tasks/projects completed on time",
          "% OPS Dashboard completion by the NPM",
          "# Dashboard usage rate / unique viewers",
          "% Forecast accuracy (predicted vs. actual performance)"
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

  // ─── iGT ───
  {
    id: "igt",
    name: "iGT",
    fullName: "Incoming Global Talent",
    color: "#E74C3C",
    description: "B2B partnerships, IR campaigns, and national iGT operations for incoming talent programs.",
    roles: [
      {
        id: "igt-sales-manager",
        title: "iGT Sales Manager",
        positions: 3,
        description: "Raise National iGT B2B Partners, conduct company meetings, create, customize & update National B2B Proposals, perform market research & analysis, handle account management & network utilization, CRM handling, and support EY iGT B2B operations.",
        skills: [
          "Sales & pitching skills",
          "iGT product knowledge & experience",
          "Excellent communication skills",
          "Stakeholder management",
          "Critical thinking & problem-solving skills",
          "Excellent work ethic & consistency"
        ],
        kpis: [
          "# B2B Partners raised",
          "# Company meetings conducted",
          "% Lead to customer conversions",
          "# Collaborative campaigns for presence"
        ],
        learningOutcomes: [
          "Corporate exposure & network building",
          "Improved pitching & sales skills",
          "Product management experience at national level",
          "Participate in national level B2B operations & strategy building"
        ],
        questions: [
          "What are the main 3 issues/bottlenecks that ASL iGT is facing currently in terms of B2B Sales?",
          "What are your suggestions and strategies to address the issues you have mentioned previously?",
          "Our goal is to raise 15 national B2B partnerships by the end of January 2026. Conduct a brief market research and identify target markets and example companies under each market segment."
        ]
      },
      {
        id: "igt-ir-campaigns",
        title: "iGT IR & Campaigns Manager",
        positions: 1,
        description: "Conduct IR analysis through historical data (EXPA, Dashboards) and data collected from IR update calls. Visualize & report extracted insights & inferences from analytics. Reach out to IR entities & schedule initiation/update calls. Manage national IR campaigns (both networking & attractions). Manage & assist national iGT sprints/hackathons (e.g., Fuel Up).",
        skills: [
          "IR knowledge & experience",
          "Data analytics, visualization & reporting skills",
          "Excellent communication skills",
          "Basic content creation & content planning skills",
          "Familiarity with Google Sheets, Slides, Sites & Canva",
          "Excellent work ethic & consistency",
          "Critical thinking & problem-solving skills"
        ],
        kpis: [
          "# IR calls taken",
          "# IR analytics tool updates/refinements",
          "# Attraction campaigns managed",
          "% Growth in applications through campaigns",
          "# Sprints/hackathons managed",
          "% Growth in approvals through sprints/hackathons"
        ],
        learningOutcomes: [
          "Exposure & networking with global youth",
          "Gain experience in data analytics, visualization & reporting",
          "Product management experience at national level",
          "Gain experience in content creation & planning",
          "Participate in national level IR campaigns & strategy building"
        ],
        questions: [
          "What are the main 3 issues/bottlenecks that ASL iGT is facing currently in terms of IR?",
          "What are your suggestions and strategies to address the issues you have mentioned previously?",
          "Conduct an IR analysis using EXPA and identify 15 potential IR entities (MCs) and cluster them into three tiers with explanations."
        ]
      }
    ]
  },

  // ─── OD ───
  {
    id: "od",
    name: "OD",
    fullName: "Organizational Development",
    color: "#27AE60",
    description: "Data management, network support, RnR systems, and organizational development strategy.",
    roles: [
      {
        id: "od-data-manager",
        title: "Data Manager",
        positions: 1,
        description: "Monthly RnR & Entity Performance calculations. National OD Dashboard management. Synergy with MCVP OD to evaluate the data needed for LC & MC analysis. Clarify the data to be taken and its relevance to OD. Responsible for ASL Roadmap goal dashboard.",
        skills: [
          "Overall understanding of AIESEC operations",
          "Knowledge of Excel and Google Workspaces",
          "Good writing skills in English",
          "Understanding and use of design tools",
          "Understanding of branding",
          "Presentation and documentation",
          "Consistency and attention to detail"
        ],
        kpis: [
          "National OD Dashboard management",
          "# of tasks completed",
          "A2030 dreaming inputs"
        ],
        learningOutcomes: [
          "Develop data management skills and strategic thinking",
          "Develop communication with different synergies",
          "Holistic view about the organization"
        ],
        questions: [
          "Provide a brief analysis of the position of AIESEC in Sri Lanka in the global AIESEC network in all the products (iGV, iGTa/e, oGV, oGTa/e).",
          "Briefly evaluate the current OD model of AIESEC in Sri Lanka and describe how we can evolve the OD model (provide at least 3 suggestions for improvements).",
          "Comment on the current RnR system of AIESEC in Sri Lanka and propose how we can evolve it."
        ]
      },
      {
        id: "od-network-manager",
        title: "Network Manager",
        positions: 1,
        description: "Responsible for consolidating LC tools. Responsible for ASL GvA Dashboard. Monthly SONA Reports creation. Responsible for OD Process Survey. Responsible for MC Services improvement.",
        skills: [
          "Overall understanding of AIESEC operations",
          "Knowledge of Excel and Google Workspaces",
          "Good writing skills in English",
          "Understanding and use of design tools",
          "Understanding of branding",
          "Presentation and documentation",
          "Consistency and attention to detail"
        ],
        kpis: [
          "# Reports created",
          "% LC Goal Achievement",
          "# Consolidated tools created"
        ],
        learningOutcomes: [
          "Develop data management skills and strategic thinking",
          "Develop communication with different synergies",
          "Holistic view about the organization"
        ],
        questions: [
          "Propose 3 iComm strategies to increase the engagement of the national leadership team (ASL LB) and MC Sri Lanka iComm channels.",
          "Propose suggestions to enhance the viability and visibility of ASL OD tools (OD dashboard, Exchange Newsletter, Infinity Hub & OD Tools).",
          "Analyse the current SONA, and suggest 3 methods to enhance the output of the SONA that can be utilized by the LEYs and the MC."
        ]
      }
    ]
  },

  // ─── ED ───
  {
    id: "ed",
    name: "ED",
    fullName: "Entity Development",
    color: "#5C6BC0",
    description: "Expansion model management, IG performance tracking, and entity development support.",
    roles: [
      {
        id: "ed-data-manager",
        title: "ED Data Manager",
        positions: 1,
        description: "Conduct performance audits monthly. Support in the evaluation of IG and LEC structures. Handle expansion model data management and calculations for informed decision-making. Build the ED Growth Path model and track implementation across IGs. Support the MCVP ED with strategic alignment of expansion data. Analyze KPIs and trends to generate quarterly and ad-hoc reports. Collaborate with the Network Manager to feed data into tools and content. Support with creating visuals and dashboards for ED performance tracking.",
        skills: [
          "Strong understanding of AIESEC operations and KPIs",
          "Proficiency in Excel and Google Workspaces",
          "Strong analytical and data visualization skills",
          "Consistency and attention to detail",
          "Strategic mindset",
          "Ability to work independently"
        ],
        kpis: [
          "# of performance audits conducted",
          "Accuracy and consistency of the expansion model",
          "Completion of ED growth path dashboards and reports",
          "Timely data delivery for internal and external reviews"
        ],
        learningOutcomes: [
          "Strengthen strategic thinking through data-driven decision making",
          "Improve skills in data handling, visualization, and communication",
          "Gain an in-depth understanding of ED performance and expansion dynamics",
          "Contribute to high-level planning through insightful reporting"
        ],
        questions: [
          "Imagine the expansion model shows consistent underperformance in a specific IG. What data points would you analyze, and how would you propose solutions to the MCVP ED?",
          "In your opinion, why is having a structured growth path important for EDs? How would you structure such a path using data?"
        ]
      },
      {
        id: "ed-network-manager",
        title: "ED Network Manager",
        positions: 1,
        description: "Lead RnR initiatives for IGs on a monthly basis. Design and publish the monthly Expansion Newsletter. Maintain and improve internal functional tools used by the ED network. Design and manage a structured internal communication plan. Support transitions within IGs. Collect and share session outputs, updates, and network highlights. Provide ongoing support to LCVPs implementing LECs.",
        skills: [
          "Basic understanding of AIESEC operations",
          "Excellent communication and visual content creation skills",
          "Proficiency in Google Workspace, Canva, and newsletter tools",
          "Coordination and project management skills",
          "Creativity and consistency",
          "Stakeholder management"
        ],
        kpis: [
          "# of newsletters released",
          "Timeliness and engagement of RnR implementation",
          "Usage rate and effectiveness of shared tools",
          "Communication reach and feedback from IGs"
        ],
        learningOutcomes: [
          "Experience in internal communications and newsletter design",
          "Skills in RnR framework design and implementation",
          "Stakeholder coordination across a decentralized network",
          "Creative content production for engagement"
        ],
        questions: [
          "Design a rough concept for a monthly RnR initiative that motivates IGs to achieve their KPIs. What would be your approach and success indicators?",
          "Why do you think internal communication is vital in a decentralized network like IGs? How can it impact performance and team morale?"
        ]
      }
    ]
  },

  // ─── ER ───
  {
    id: "er",
    name: "ER",
    fullName: "External Relations",
    color: "#E67E22",
    description: "External partnerships, government affairs, B2B operations, and international expansion.",
    roles: [
      {
        id: "er-ogx-b2b",
        title: "oGX B2B Manager",
        positions: 1,
        description: "Raise National oGX B2B Partners (ticketing, insurance & visa). Conduct company meetings. Create, customize & update National B2B Proposals. Perform market research & analysis. Handle account management & network utilization. CRM handling.",
        skills: [
          "Negotiation skills",
          "Market research & analysis",
          "Stakeholder and relationship management",
          "Basic understanding of oGX products (GV, GT, etc.)",
          "Proposal writing & pitch deck development"
        ],
        kpis: [
          "Number of national B2B partnerships raised",
          "Percentage of oGX customers using raised partnerships",
          "Revenue or in-kind value generated from partnerships",
          "Partner retention rate"
        ],
        learningOutcomes: [
          "Enhanced B2B communication and negotiation expertise",
          "Deep understanding of Sri Lankan travel, ticketing, visa, and insurance industries",
          "Practical skills in stakeholder management and partnership development",
          "Strategic market research skills"
        ],
        questions: [
          "How would you convince a travel agency to become a national partner of AIESEC's oGX program?",
          "What factors would you consider when selecting a Visa partner for our exchange participants?",
          "How would you ensure the raised partner's services are effectively promoted to AIESEC's exchange customers?"
        ]
      },
      {
        id: "er-icx-b2b",
        title: "iCX B2B Manager",
        positions: 1,
        description: "Raise National iCX B2B Partners. Conduct company meetings. Create, customize & update National B2B Proposals. Perform market research & analysis. Handle account management & network utilization. CRM handling.",
        skills: [
          "Negotiation skills",
          "Market research and analysis",
          "Relationship management",
          "Knowledge of iCX product framework (GV, GT, etc.)",
          "Understanding of corporate CSR, HR, and internship markets in Sri Lanka"
        ],
        kpis: [
          "Number of national iCX partnerships raised",
          "Number of iCX opportunities created through partners",
          "Partner satisfaction and engagement rate",
          "Number of EPs placed via national partners"
        ],
        learningOutcomes: [
          "Insight into Sri Lanka's corporate ecosystem for internships and CSR projects",
          "Stronger B2B pitching and negotiation abilities",
          "Professional stakeholder relationship development skills",
          "Better understanding of iCX operational needs and corporate expectations"
        ],
        questions: [
          "How would you approach a tech company to offer internship opportunities to incoming exchange participants?",
          "What's the biggest challenge when selling AIESEC's iCX value proposition to corporates in Sri Lanka?",
          "How would you measure the success of an iCX partnership?"
        ]
      },
      {
        id: "er-gov-affairs",
        title: "Government Affairs Manager",
        positions: 1,
        description: "Research and identify relevant ministries and governmental organizations supporting youth development, education, tourism, and international collaboration. Initiate and maintain formal relationships with key governmental stakeholders. Draft and maintain legal and procedural documentation (MoUs, approvals, etc.). Support the National President and MC in government-related correspondence and networking.",
        skills: [
          "Basic legal awareness",
          "Formal communication standards",
          "Importance of documentation",
          "AIESEC's national and global purpose",
          "Basic understanding of Government Ministries"
        ],
        kpis: [
          "Number of government bodies engaged",
          "Number of MoUs signed or renewed",
          "Number of government approvals/documentations completed",
          "Number of government events participated"
        ],
        learningOutcomes: [
          "Professional government communication skills",
          "Understanding of national youth, labor, and education policy",
          "Practical legal and procedural knowledge for NGO operations",
          "Experience in formal networking and diplomacy"
        ],
        questions: [
          "What ministries are most relevant to AIESEC's operations and why?",
          "How would you handle a delay in government approval for a key AIESEC event?",
          "Describe how you'd ensure AIESEC complies with new youth development policies introduced by the government."
        ]
      },
      {
        id: "er-maldives",
        title: "Maldives AIESEC Manager",
        positions: 1,
        description: "Lead the documentation process for the official registration of AIESEC Maldives. Lead the Maldives project management team. Align Maldives operations with the national and global AIESEC strategy. Prepare reports and updates regarding progress and challenges. Build connections with Maldivian universities and potential partners to support local operations.",
        skills: [
          "Team management & leadership",
          "Cross-cultural communication",
          "Problem-solving and critical thinking"
        ],
        kpis: [
          "Progress in the official registration process (milestone-based)",
          "Number of documented procedural completions (permits, approvals)",
          "Number of institutional and partnership leads identified in the Maldives"
        ],
        learningOutcomes: [
          "Hands-on knowledge of international NGO registration processes",
          "Insight into international market expansion strategies",
          "Enhanced problem-solving skills in legal and procedural contexts"
        ],
        questions: [
          "What challenges do you foresee in registering AIESEC as an official entity in the Maldives?",
          "How can we use Maldives to enhance our exchanges?"
        ]
      }
    ]
  },

  // ─── B2C ───
  {
    id: "b2c",
    name: "B2C",
    fullName: "Business to Consumer",
    color: "#00BCD4",
    description: "Social media management, content creation, influencer partnerships, and visual brand identity.",
    roles: [
      {
        id: "b2c-manager",
        title: "B2C Manager",
        positions: 1,
        description: "Oversee daily operations of social media platforms (Instagram, Facebook, LinkedIn, TikTok, YouTube, etc.). Plan, schedule, and optimize posts using tools like Meta Business Suite, Buffer, or similar. Monitor performance metrics (reach, engagement, CTR, etc.) and adjust strategies accordingly. Brainstorm creative concepts for campaigns, launches, and youth engagement touchpoints. Track analytics and KPIs; prepare monthly performance reports and insights.",
        skills: [
          "Platform-specific video formats (Instagram, TikTok, YouTube Shorts)",
          "AIESEC brand voice and campaign themes",
          "Social media content pacing and engagement principles",
          "Visual storytelling tailored for Gen Z",
          "Basics of file formats, resolution, and export settings"
        ],
        kpis: [
          "# Campaigns managed",
          "# Meetings engaged in",
          "Alignment of final content with brand guidelines",
          "Team feedback score on collaboration and responsiveness"
        ],
        learningOutcomes: [
          "Deep understanding of content strategy for social media",
          "Experience collaborating within a multi-functional content team",
          "Ability to work under tight timelines with quality output"
        ],
        questions: [
          "How can AIESEC in Sri Lanka share the experience it delivers in line with the impact it creates from Exchanges through our national social media channels?",
          "Create a creative campaign to promote the product of your choice (oGV or oGT). Include campaign objectives, KPIs, platforms, target audience, editorial lines, and a mood board.",
          "What are your strategies for better utilizing our social media platforms?"
        ]
      },
      {
        id: "b2c-partnership-specialist",
        title: "Partnership Specialist",
        positions: 1,
        description: "Identify, contact, and onboard relevant influencers, creators, and public figures for campaign promotions. Research, analyze and onboard potential EEs for AIESEC in Sri Lanka. Develop collaborations with brands, NGOs, student groups, media outlets, and other entities aligned with campaign goals. Monitor influencer performance (reach, engagement, conversion) and report results with actionable insights.",
        skills: [
          "Strong interpersonal and communication skills for outreach",
          "Creativity in co-branding and collaboration ideation",
          "Basic knowledge of influencer tiers, niches, and engagement rates",
          "Organizational skills to manage collab timelines and deliverables",
          "Professional writing for pitches, proposals, and partnership decks",
          "Understanding of content formats and trends in influencer marketing"
        ],
        kpis: [
          "# influencers/partners onboarded per campaign",
          "Engagement & reach from influencer-driven content",
          "# new brand or org partnerships formed",
          "% of collaborations delivered on agreed timeline",
          "Stakeholder satisfaction (both internal & external)"
        ],
        learningOutcomes: [
          "Learn how to pitch and negotiate with external parties and brands",
          "Build strategic relationship management and external communication skills",
          "Understand influencer and partnership campaign tracking and metrics",
          "Develop creativity in win-win campaign co-creation",
          "Gain skills in reporting and performance insight presentation"
        ],
        questions: [
          "How can AIESEC in Sri Lanka build long-term, mutually beneficial partnerships with brands, NGOs, or student communities?",
          "Design a strategic campaign or initiative involving external partners (brands, media, or creators) to promote AIESEC's exchanges."
        ]
      },
      {
        id: "b2c-graphic-designer",
        title: "Graphic Designer",
        positions: 3,
        description: "Design compelling and brand-aligned visuals for social media platforms (Instagram, LinkedIn, TikTok, etc.). Create static posts, stories, carousels, reel covers, banners, and digital assets. Work closely with the content strategist and video editor to maintain a consistent visual identity. Ensure all designs follow AIESEC's brand guidelines while bringing in youth-friendly creativity. Manage design files, templates, and maintain organized storage for reuse.",
        skills: [
          "Proficiency in design tools (Canva, Adobe Illustrator, Photoshop, Premiere Pro, etc.)",
          "Strong layout, typography, and color theory skills",
          "Visual storytelling through graphics",
          "AIESEC visual identity and brand guidelines",
          "Platform-specific design formats and ratios"
        ],
        kpis: [
          "Number of design assets delivered on time",
          "% of visuals approved without major revisions",
          "Engagement performance of posts using designed assets",
          "Visual consistency across campaigns and platforms"
        ],
        learningOutcomes: [
          "Deep understanding of brand-driven graphic design",
          "Ability to design for various social media platforms",
          "Mastery in balancing creativity with structure and guidelines",
          "Time-bound project management and delivery",
          "Experience in working within a cross-functional creative team"
        ],
        questions: [
          "What are the current trends in visual marketing content (Graphic Design)? Can you name brands with good visual marketing examples?",
          "How do you envision AIESEC's visual content? What strategies would you propose to make that vision happen?",
          "Add links to any previous work related to the position (Portfolio link)."
        ]
      }
    ]
  }
];

// Calculate total positions dynamically
const TOTAL_POSITIONS = FUNCTIONS.reduce((total, fn) => {
  return total + fn.roles.reduce((sum, role) => sum + role.positions, 0);
}, 0);
