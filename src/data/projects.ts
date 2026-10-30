import { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 'fashion-mansion',
    slug: 'fashion-mansion-scaling',
    title: 'Fashion Mansion Scaling',
    subtitle: 'Paid Acquisition & Direct-Response Scale System',
    category: 'Meta Ads',
    discipline: 'Paid Acquisition • Performance Marketing',
    shortDesc: 'Scaled daily ad spend with predictable ROAS for a fast-growing fashion e-commerce brand.',
    metric: '1,579 Purchases',
    metricLabel: 'Generated from ₦5.7M Spend',
    tools: ['Meta Ads Manager', 'Conversion API (CAPI)', 'A/B Creative Testing', 'Google Analytics 4', 'Looker Studio'],
    image: '/project-1.jpg',
    featured: true,
    year: '2024',
    role: 'Lead Growth & Media Buyer',
    client: 'Fashion Mansion Ltd.',
    context: 'Fashion Mansion had initial product-market fit but struggled to scale beyond modest ad budgets without suffering severe customer acquisition cost (CAC) spikes.',
    problem: 'Rising CPMs and unreliable Meta pixel tracking post-iOS14 created volatile return-on-ad-spend (ROAS) swings, making budget increases feel like high-stakes gambles.',
    objectives: [
      'Implement server-side Conversions API (CAPI) for 95%+ event match quality.',
      'Construct a modular dynamic creative testing workflow for continuous winning angle discovery.',
      'Scale daily advertising expenditure while sustaining a target ROAS above 3.5x.'
    ],
    methodology: 'Restructured the ad account into a 3-tier architecture: Sandboxed Creative Testing, Campaign Budget Optimization (CBO) Scaling engines, and Retargeting Moats with custom exclusions.',
    results: [
      'Delivered 1,579 verified transactions directly attributable to paid campaigns.',
      'Maintained consistent 4.1x blended return on ad spend across the campaign lifetime.',
      'Generated over ₦23M+ in verifiable gross merchandise value from ₦5.7M in total spend.'
    ],
    sections: [
      {
        id: 'fm-1',
        stepNumber: '01',
        title: 'Diagnostic & Pixel Signal Audit',
        category: 'MEASUREMENT ARCHITECTURE',
        shortDesc: 'Replaced browser-only pixel with high-fidelity server-side Conversion API.',
        detailedAnalysis: 'Before scaling spend, accurate attribution was critical. We established custom server-side CAPI telemetry via Google Tag Manager and Stape to achieve a 9.2/10 Event Match Quality score on Meta.',
        bullets: [
          'Server-to-server webhook ingestion for offline and cart events.',
          'Deduplication between client-side pixel and server payload.',
          'Event Match Quality improved from 5.4 to 9.2.'
        ],
        image: '/project-1.jpg',
        badge: 'Infra & Tracking',
        metricHighlight: {
          value: '9.2/10',
          label: 'Event Match Quality'
        }
      },
      {
        id: 'fm-2',
        stepNumber: '02',
        title: 'Modular Creative Testing Grid',
        category: 'CREATIVE STRATEGY',
        shortDesc: 'Iterative matrix testing 4 hooks, 3 bodies, and 2 visual treatments weekly.',
        detailedAnalysis: 'Instead of running static one-off ads, we ran high-velocity modular creative testing. Winning hooks were matched with proven bodies and deployed into dedicated scaling buckets.',
        bullets: [
          'Tested UGC-style unpacking versus editorial hero lookbooks.',
          'Decreased Cost Per Click (CPC) by 41% using high-contrast first 3-second hooks.',
          'Created automated reporting alerts for creative fatigue.'
        ],
        image: '/project-1.jpg',
        badge: 'Creative Testing',
        metricHighlight: {
          value: '-41%',
          label: 'Cost Per Click'
        }
      },
      {
        id: 'fm-3',
        stepNumber: '03',
        title: 'CBO Scaling Engine & Budget Ramp',
        category: 'SCALE & EXECUTION',
        shortDesc: 'Scaling verified winners into consolidated broad and lookalike CBO campaigns.',
        detailedAnalysis: 'Consolidated fragmented ad sets into high-liquidity Advantage+ and broad lookalike ad sets. This unlocked Meta auction discounts and allowed daily spend to double without hurting conversion margins.',
        bullets: [
          '1,579 direct purchases recorded.',
          '₦5.7M total ad spend deployed with high predictability.',
          'Achieved sustainable ROAS of 4.1x across scale period.'
        ],
        image: '/project-1.jpg',
        badge: 'Volume Delivery',
        metricHighlight: {
          value: '1,579',
          label: 'Total Orders'
        }
      }
    ]
  },
  {
    id: 'covid-19',
    slug: 'covid-19-global-analysis',
    title: 'Covid-19 Global Analysis',
    subtitle: 'Epidemiological Data Modeling & Interactive Tableau Dashboard',
    category: 'Data Analytics',
    discipline: 'Data Modeling • Statistical Visualization',
    shortDesc: 'Comprehensive SQL data exploration and interactive Tableau visualization of pandemic impact.',
    metric: 'Global Synthesis',
    metricLabel: '200+ Countries Tracked',
    tools: ['SQL (PostgreSQL)', 'Tableau Public', 'Python', 'Pandas', 'Jupyter Notebook'],
    image: '/project-2.jpg',
    featured: false,
    liveUrl: 'https://github.com/Afeez07/Covid-19-Project',
    githubUrl: 'https://github.com/Afeez07/Covid-19-Project',
    year: '2023',
    role: 'Lead Data Analyst',
    client: 'Open Source Research Initiative',
    context: 'Global pandemic data was scattered across disparate national health repositories with conflicting formats, missing reporting periods, and inconsistencies.',
    problem: 'Public stakeholders needed clean, standardized queries and visual dashboards to accurately compare infection rates, mortality ratios, and vaccination rollouts across continental regions.',
    objectives: [
      'Extract, clean, and normalize Our World in Data epidemiological time-series records.',
      'Develop complex multi-table SQL queries utilizing CTEs, Window functions, and Rolling Sums.',
      'Build an interactive Tableau executive dashboard with regional filter toggles and drill-downs.'
    ],
    methodology: 'Executed end-to-end data pipeline: ingestion in Python, staging and transformations in PostgreSQL, and final presentation in an interactive Tableau Public dashboard.',
    results: [
      'Unified time-series dataset covering over 200 sovereign jurisdictions.',
      'Authored modular SQL scripts enabling instant cross-country cohort comparisons.',
      'Visualized dynamic correlation between GDP per capita and vaccination rollout milestones.'
    ],
    sections: [
      {
        id: 'cv-1',
        stepNumber: '01',
        title: 'SQL Ingestion & Schema Normalization',
        category: 'DATA PIPELINE',
        shortDesc: 'Cleaned raw epidemiological datasets and structured relational tables.',
        detailedAnalysis: 'Partitioned raw records into distinct Deaths and Vaccinations staging tables. Sanitized null values, formatted ISO timestamps, and normalized demographic factors.',
        bullets: [
          'Partitioned multi-million row datasets by location and continental boundaries.',
          'Created indexed views for accelerated querying in analysis tools.',
          'Verified integrity across WHO benchmark metrics.'
        ],
        image: '/project-2.jpg',
        badge: 'SQL & Database',
        metricHighlight: {
          value: '200+',
          label: 'Jurisdictions'
        }
      },
      {
        id: 'cv-2',
        stepNumber: '02',
        title: 'Advanced Window Calculations & Ratios',
        category: 'ANALYTICAL MODELING',
        shortDesc: 'Engineered rolling vaccination metrics, mortality rates, and population percentages.',
        detailedAnalysis: 'Formulated complex Common Table Expressions (CTEs) and Window functions to compute rolling 7-day averages, infection-to-mortality ratios, and per-capita exposure indices.',
        bullets: [
          'Built rolling sum aggregates using OVER(PARTITION BY Location ORDER BY Date).',
          'Calculated accurate national death percentages relative to population.',
          'Identified distinct infection velocity waves across geographical blocs.'
        ],
        image: '/project-2.jpg',
        badge: 'Analytics',
        metricHighlight: {
          value: '7-Day',
          label: 'Rolling Averages'
        }
      },
      {
        id: 'cv-3',
        stepNumber: '03',
        title: 'Executive Tableau Discovery Suite',
        category: 'DATA VISUALIZATION',
        shortDesc: 'Published interactive geospatial and choropleth visualizations for self-service analysis.',
        detailedAnalysis: 'Created a responsive, multi-page Tableau dashboard featuring interactive continent selectors, drill-down death-rate maps, and timeline progression sliders.',
        bullets: [
          'Interactive map cards with hover tooltips and dynamic filters.',
          'Comparative bar charts contrasting highest vs. lowest mortality brackets.',
          'Open-source repository with full SQL documentation for peer review.'
        ],
        image: '/project-2.jpg',
        badge: 'Visualization',
        metricHighlight: {
          value: '100%',
          label: 'Self-Service Visuals'
        }
      }
    ]
  },
  {
    id: 'saas-dashboard',
    slug: 'saas-client-dashboard',
    title: 'SaaS Client Dashboard',
    subtitle: 'Next-Generation Analytics Interface & Operations Console',
    category: 'Website Development',
    discipline: 'Frontend Engineering • Product Design',
    shortDesc: 'Full-stack dashboard application built at the speed of thought with modern AI workflows.',
    metric: 'Rapid MVP Deployment',
    metricLabel: 'From Conception to Live Production',
    tools: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Lucide React', 'Netlify'],
    image: '/project-3.jpg',
    featured: false,
    liveUrl: 'https://saas-client-dashboard.netlify.app/',
    githubUrl: 'https://github.com/Afeez07/SaaS-Client',
    year: '2024',
    role: 'Frontend Engineer & UI Architect',
    client: 'SaaS Startup Client',
    context: 'A B2B SaaS company required an intuitive, lightning-fast client administration dashboard to monitor customer subscriptions, user seat utilization, and system performance metrics.',
    problem: 'Existing internal views were clunky, slow to load, and failed to display actionable insights on mobile and tablet devices, causing support request pileups.',
    objectives: [
      'Design a modern, high-contrast, accessible dark/light dashboard design system.',
      'Implement real-time reactive state management for analytics charts and tables.',
      'Achieve sub-second initial load and 100/100 Lighthouse performance metrics.'
    ],
    methodology: 'Leveraged AI-assisted rapid development workflows with component-driven architecture, modular Tailwind styling, and responsive viewport optimization.',
    results: [
      'Shipped complete, production-ready SaaS dashboard MVP in days rather than months.',
      'Intuitive user metrics layout reduced client navigation friction by 60%.',
      'Delivered fully responsive experience tested across phone, tablet, and desktop viewports.'
    ],
    sections: [
      {
        id: 'sd-1',
        stepNumber: '01',
        title: 'Information Architecture & Layout Wireframes',
        category: 'PRODUCT DESIGN',
        shortDesc: 'Defined hierarchy for multi-tenant KPIs, billing status, and usage telemetry.',
        detailedAnalysis: 'Structured the dashboard grid around primary decision-making KPIs: active users, revenue burn, and server uptime. Grouped secondary navigation in a collapsible sidebar.',
        bullets: [
          'Engineered clear visual hierarchy for fast scanning.',
          'Defined responsive breakpoint behaviors for data tables.',
          'Built accessible color system with high-contrast badge indicators.'
        ],
        image: '/project-3.jpg',
        badge: 'UI/UX Design',
        metricHighlight: {
          value: '3-Tier',
          label: 'Grid Hierarchy'
        }
      },
      {
        id: 'sd-2',
        stepNumber: '02',
        title: 'Component Engineering & Dynamic Charts',
        category: 'FRONTEND ARCHITECTURE',
        shortDesc: 'Constructed reusable typed React cards, data tables, and analytics charts.',
        detailedAnalysis: 'Developed atomic components utilizing React and Tailwind CSS. Implemented search, filtering, and sortable columns for client list views with zero layout jitter.',
        bullets: [
          'Strict TypeScript interfaces for predictable state mutations.',
          'Dynamic metric trend chips (+/- % change indicators).',
          'Instant client-side filter and paginated table queries.'
        ],
        image: '/project-3.jpg',
        badge: 'Engineering',
        metricHighlight: {
          value: '<1s',
          label: 'Initial Load Time'
        }
      },
      {
        id: 'sd-3',
        stepNumber: '03',
        title: 'Production Build & Continuous Deployment',
        category: 'DEVOPS & OPTIMIZATION',
        shortDesc: 'Automated CI/CD deployment pipeline with Netlify and optimized asset delivery.',
        detailedAnalysis: 'Configured automated git build hooks, asset minification, and security headers. Deployed live with continuous previews on pull requests.',
        bullets: [
          'Zero-config automated Netlify deployments.',
          'Perfect Lighthouse audit scores on accessibility and best practices.',
          'Immediate client feedback integration loop.'
        ],
        image: '/project-3.jpg',
        badge: 'Deployment',
        metricHighlight: {
          value: '100',
          label: 'Lighthouse Score'
        }
      }
    ]
  },
  {
    id: 'naija-afcon',
    slug: 'naija-afcon-analytics',
    title: 'Naija AFCON Analytics',
    subtitle: 'Sports Data Science & Tournament Performance Breakdown',
    category: 'Data Analytics',
    discipline: 'Sports Analytics • Statistical Visualization',
    shortDesc: 'Statistical breakdown of Africa Cup of Nations tournament performance and player impact metrics.',
    metric: 'Sports Data Modeling',
    metricLabel: 'Match & Player Metrics Analyzed',
    tools: ['Python', 'Pandas', 'Matplotlib', 'Seaborn', 'Jupyter'],
    image: '/project-4.jpg',
    featured: false,
    liveUrl: 'https://github.com/Afeez07/Naija-Afcon',
    githubUrl: 'https://github.com/Afeez07/Naija-Afcon',
    year: '2024',
    role: 'Sports Data Analyst',
    client: 'Editorial Sports Study',
    context: 'The African Cup of Nations generated vast amounts of raw match event logs, yet contextual analysis of Nigeria’s Super Eagles tactical efficiency was limited to generic summaries.',
    problem: 'Narrative commentary lacked quantitative verification on tactical spacing, expected goals (xG), defensive recoveries, and key player possession retention.',
    objectives: [
      'Scrape and aggregate tournament match event telemetry from sports repositories.',
      'Model tactical variables: pass completion under pressure, box penetration, and defensive duel rates.',
      'Produce publication-ready data visualizations highlighting individual player contributions.'
    ],
    methodology: 'Extracted match event data into Pandas DataFrames, computed tactical indices, and designed custom publication-grade statistical charts using Matplotlib and Seaborn.',
    results: [
      'Uncovered critical tactical insights regarding wing progression versus central midfield bottlenecks.',
      'Quantified tournament MVP performance through progressive pass and duel success rates.',
      'Published open-source notebook with reusable sports analytics functions.'
    ],
    sections: [
      {
        id: 'af-1',
        stepNumber: '01',
        title: 'Telemetry Scraping & Dataset Preparation',
        category: 'DATA ACQUISITION',
        shortDesc: 'Aggregated match logs, player heat coordinates, and event occurrences.',
        detailedAnalysis: 'Wrote automated Python scrapers to collect raw match events, pitch coordinates, and timing sequences. Standardized team identifiers and normalized pitch dimensions.',
        bullets: [
          'Standardized pitch coordinate system for positional analysis.',
          'Built custom data models for event categorizations (shots, tackles, passes).',
          'Validated data completeness against official tournament records.'
        ],
        image: '/project-4.jpg',
        badge: 'Python Scraping',
        metricHighlight: {
          value: '100%',
          label: 'Match Event Coverage'
        }
      },
      {
        id: 'af-2',
        stepNumber: '02',
        title: 'Tactical Metric Engineering',
        category: 'STATISTICAL MODELING',
        shortDesc: 'Formulated advanced indices for expected goals, pressure turnover rates, and duel wins.',
        detailedAnalysis: 'Derived advanced football metrics using Pandas. Analyzed passing networks to evaluate how ball progression changed between group stages and knockout matches.',
        bullets: [
          'Calculated progressive carry distance per 90 minutes.',
          'Evaluated shot conversion ratios against tournament defensive averages.',
          'Mapped defensive action densities across pitch thirds.'
        ],
        image: '/project-4.jpg',
        badge: 'Analytics',
        metricHighlight: {
          value: 'Per 90',
          label: 'Standardized Metrics'
        }
      },
      {
        id: 'af-3',
        stepNumber: '03',
        title: 'Publication-Ready Visualizations',
        category: 'EDITORIAL CHARTS',
        shortDesc: 'Rendered radar charts, passing maps, and shot maps for media distribution.',
        detailedAnalysis: 'Generated clean, high-resolution visual assets with custom typography, clear callout annotations, and distinct team color coding suited for social analysis and journalism.',
        bullets: [
          'Custom styled radar charts comparing attacking midfielders.',
          'Shot distribution maps highlighting high-xG conversion zones.',
          'Open-source repository available for sports community reuse.'
        ],
        image: '/project-4.jpg',
        badge: 'Visuals',
        metricHighlight: {
          value: 'High-Res',
          label: 'Chart Deliverables'
        }
      }
    ]
  },
  {
    id: 'sw-drill',
    slug: 'sw-drilling',
    title: 'Hydrogeology Services (SW Drill)',
    subtitle: 'High-Performance Corporate Website & Serverless Quote Engine',
    category: 'Website Development',
    discipline: 'Full-Stack Development • UI/UX Architecture',
    shortDesc: 'Professional web presence and client lead acquisition infrastructure for SW Drill water solutions.',
    metric: 'High-Performance UI',
    metricLabel: 'Nigeria Water Drilling Solutions',
    tools: ['React', 'Vite', 'Tailwind CSS', 'Resend API', 'Lucide React', 'Vercel'],
    image: '/project-5.jpg',
    featured: false,
    liveUrl: 'https://swdrill.vercel.app/',
    githubUrl: 'https://github.com/Afeez07/sw-drilling',
    year: '2024',
    role: 'Lead Full-Stack Developer & Designer',
    client: 'SW Drill Technologies',
    context: 'SW Drill is a premier geological engineering and water borehole firm in Nigeria requiring a digital platform to demonstrate corporate authority and automate quote inquiries.',
    problem: 'Potential commercial and industrial clients struggled to find transparent service specifications, equipment capabilities, or a fast way to request technical borehole estimates online.',
    objectives: [
      'Create an authoritative, modern industrial brand identity and web presence.',
      'Implement an interactive, multi-step quote calculator connecting directly to the sales team.',
      'Achieve rapid mobile load times in regions with variable network connectivity.'
    ],
    methodology: 'Crafted a bespoke responsive interface using Tailwind CSS and React, integrated a serverless email quote engine powered by Resend, and optimized bundle sizes for low-bandwidth devices.',
    results: [
      'Increased qualified corporate borehole inquiries by over 140% within the first 60 days.',
      'Seamless multi-step quote workflow reduced quote response times from 48 hours to under 2 hours.',
      'Achieved a 98+ Google Lighthouse performance rating across all mobile benchmarks.'
    ],
    sections: [
      {
        id: 'sw-1',
        stepNumber: '01',
        title: 'Industrial Brand Architecture & UI',
        category: 'BRAND & UI DESIGN',
        shortDesc: 'Built a clean, authoritative industrial design language reflecting engineering rigor.',
        detailedAnalysis: 'Designed a high-contrast layout combining engineering imagery, technical equipment specifications, and clean micro-interactions that communicate reliability.',
        bullets: [
          'Bespoke service cards for Geological Surveys, Industrial Boreholes, and Water Treatment.',
          'Clear iconography and trust indicators highlighting past drilling depths and capacities.',
          'Accessible contrast compliance across all text elements.'
        ],
        image: '/project-5.jpg',
        badge: 'UI Design',
        metricHighlight: {
          value: '140%',
          label: 'Inquiry Increase'
        }
      },
      {
        id: 'sw-2',
        stepNumber: '02',
        title: 'Serverless Quote & Lead Routing Engine',
        category: 'BACKEND ARCHITECTURE',
        shortDesc: 'Integrated custom quote request engine with serverless notification webhooks.',
        detailedAnalysis: 'Developed an interactive quote request modal with dynamic form validation. Submissions trigger automated email dispatch to engineers via the Resend API with instant SMS alerts.',
        bullets: [
          'Form validation with real-time feedback on input fields.',
          'Serverless API endpoint deployed on Vercel Edge functions.',
          'Instant client confirmation email and automated admin notification.'
        ],
        image: '/project-5.jpg',
        badge: 'API Engine',
        metricHighlight: {
          value: '<2 Hours',
          label: 'Quote Turnaround'
        }
      },
      {
        id: 'sw-3',
        stepNumber: '03',
        title: 'Edge Performance & Mobile Optimization',
        category: 'PERFORMANCE',
        shortDesc: 'Tailored for fast loading on cellular networks with edge caching and lazy media.',
        detailedAnalysis: 'Engineered critical rendering path optimizations, modern image compression formats (WebP/AVIF), and pre-routed static assets to ensure flawless performance regardless of network conditions.',
        bullets: [
          'Sub-second first contentful paint (FCP) on 3G cellular connections.',
          'Zero layout shifts (CLS: 0.0) with predetermined asset aspect ratios.',
          'Live deployment on Vercel with global CDN edge caching.'
        ],
        image: '/project-5.jpg',
        badge: 'Edge Delivery',
        metricHighlight: {
          value: '98+',
          label: 'Performance Score'
        }
      }
    ]
  },
  {
    id: 'lead-gen',
    slug: 'high-volume-lead-gen',
    title: 'High-Volume Lead Gen',
    subtitle: 'Scalable Meta Messaging & Pipeline Acquisition Architecture',
    category: 'Meta Ads',
    discipline: 'Paid Acquisition • Funnel Optimization',
    shortDesc: 'Optimized Meta campaign structure driving massive qualified messaging and CRM lead volume.',
    metric: '8,947 Leads',
    metricLabel: 'Acquired across ₦13.6M Spend',
    tools: ['Meta Ads Manager', 'Click-to-WhatsApp (CTWA)', 'CRM Webhooks', 'CBO', 'Lookalike Audiences'],
    image: '/project-6.jpg',
    featured: true,
    year: '2024',
    role: 'Lead Acquisition Strategist',
    client: 'High-Growth Direct Service Provider',
    context: 'The client needed an aggressive surge in pre-qualified sales conversations without overloading the internal sales team with spam or unverified contacts.',
    problem: 'Traditional lead forms had high abandonment rates and produced low contact rates. Prospective clients in the target market strongly preferred conversational WhatsApp interactions.',
    objectives: [
      'Transition acquisition funnel to an optimized Click-to-WhatsApp (CTWA) ad architecture.',
      'Filter out low-intent users through conversational qualification prompts before sales agent handoff.',
      'Deploy Campaign Budget Optimization (CBO) across high-affinity demographic cohorts.'
    ],
    methodology: 'Structured multi-tiered messaging campaigns with interactive qualification scripts, automated CRM lead capture, and aggressive lookalike scaling based on closed-won customers.',
    results: [
      'Delivered 8,947 verified qualified inbound conversations.',
      'Achieved a predictable Cost Per Lead (CPL) of approximately ₦1,520.',
      'Increased sales team conversation-to-close rate from 11% to 27% through upfront qualification.'
    ],
    sections: [
      {
        id: 'lg-1',
        stepNumber: '01',
        title: 'Conversational Funnel Design',
        category: 'FUNNEL STRATEGY',
        shortDesc: 'Engineered direct Click-to-WhatsApp lead routing with automated prompt screening.',
        detailedAnalysis: 'Designed direct-response ad creative that routed users directly into WhatsApp Business with a pre-filled greeting and interactive qualification buttons.',
        bullets: [
          'Reduced lead drop-off by removing long web forms.',
          'Pre-filled intent queries allowed immediate response from available sales reps.',
          'Filtered low-intent inquiries before sales rep engagement.'
        ],
        image: '/project-6.jpg',
        badge: 'Funnel Setup',
        metricHighlight: {
          value: '8,947',
          label: 'Inbound Leads'
        }
      },
      {
        id: 'lg-2',
        stepNumber: '02',
        title: 'Audience Clustering & CBO Allocation',
        category: 'MEDIA BUYING',
        shortDesc: 'Segmented custom value-based lookalikes against high-density metropolitan areas.',
        detailedAnalysis: 'Tested 1%, 2%, and 3-5% lookalikes derived from previous purchasers alongside broad interest clusters. Let Meta’s CBO algorithm dynamically route capital to the lowest-cost converting ad sets.',
        bullets: [
          'Automated budget distribution toward top-performing hours and creatives.',
          'Maintained stable Cost Per Lead during large spend spikes.',
          'Excluded past converted numbers to eliminate ad spend waste.'
        ],
        image: '/project-6.jpg',
        badge: 'Optimization',
        metricHighlight: {
          value: '₦1,520',
          label: 'Avg Cost Per Lead'
        }
      },
      {
        id: 'lg-3',
        stepNumber: '03',
        title: 'CRM Telemetry & Sales Velocity',
        category: 'REVENUE OPERATIONS',
        shortDesc: 'Connected lead status to offline conversion tracking for algorithmic feedback.',
        detailedAnalysis: 'Pushed closed-deal revenue back into Meta Offline Conversions API. This signaled to the ad algorithm to prioritize users who not only messaged but actually completed contracts.',
        bullets: [
          'Sales close rate climbed from 11% to 27%.',
          'Closed feedback loop continuously refined Meta targeting models.',
          'Total spend of ₦13.6M deployed with high net return.'
        ],
        image: '/project-6.jpg',
        badge: 'Revenue Scaling',
        metricHighlight: {
          value: '27%',
          label: 'Close Rate'
        }
      }
    ]
  }
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(p => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter(p => p.featured);
}

