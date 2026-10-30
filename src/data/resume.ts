export interface ExperienceItem {
  period: string;
  role: string;
  organization: string;
  location: string;
  type?: string;
  achievements: string[];
  skills?: string[];
}

export interface SimulationItem {
  company: string;
  role: string;
  platform: string;
  period: string;
  bullets: string[];
}

export const resumeData = {
  name: 'AFEEZ ONABEKUN',
  title: 'Data Analyst & Geological Systems Specialist',
  contact: {
    location: 'Lagos, Nigeria',
    phone: '+234 7012367630',
    email: 'afeez.onabekun@gmail.com',
    linkedin: 'https://linkedin.com/in/afeezonabekun',
    portfolio: 'https://onabekun.vercel.app',
  },
  summary:
    'Result-driven and detail-orientated Data Analyst with a B.Sc. in Geology and over 3 years of technical experience in collecting, cleaning, and extracting actionable insights from complex operational datasets. Proven expertise in utilizing Python, SQL, and Power BI to monitor real-time parameters, track operational KPIs, and optimize efficiency. Combines deep geological knowledge with practical field experience in borehole drilling, lithology classification, and formation evaluation.',
  metrics: [
    { label: 'Operational Efficiency', value: '+15%' },
    { label: 'Data Audit Accuracy', value: '98%' },
    { label: 'Drilling & Analytics', value: '9+ Yrs' },
    { label: 'Tools in Core Stack', value: '12+' },
  ],
  competencies: {
    dataAnalytics: [
      'Python (Pandas, NumPy)',
      'SQL (PostgreSQL, MySQL)',
      'Microsoft Power BI & DAX',
      'Tableau Desktop & Public',
      'Advanced Excel & Google Sheets',
      'Data Modeling & Schema Normalization',
      'Statistical Analysis & Hypothesis Testing',
      'KPI Tracking & Executive Dashboards',
    ],
    webDevelopment: [
      'React & Next.js (App Router)',
      'TypeScript & Modern JavaScript',
      'Tailwind CSS & Responsive Layouts',
      'Serverless APIs & Edge Functions',
      'Git & GitHub Version Control',
      'Vercel & Netlify Production Deployments',
    ],
    paidAcquisition: [
      'Meta Ads Manager & CBO Strategy',
      'Conversions API (CAPI) Server-Side Tracking',
      'Dynamic Modular Creative Testing',
      'Click-to-WhatsApp (CTWA) Conversational Funnels',
      'Custom & Lookalike Audience Modeling',
      'Campaign Attribution & ROAS Analysis',
    ],
    geologicalAndDrilling: [
      'Borehole Drilling Oversight & Field Protocols',
      'Subsurface Data Logging & Formation Evaluation',
      'Real-Time Drilling Tracking (ROP, WOB, Pump Pressure)',
      'Lithology Identification & Stratigraphic Analysis',
      'Rock & Soil Cutting Classification',
      'Groundwater Table & Hydrogeological Mapping',
    ],
    professionalSoftSkills: [
      'Analytical Thinking & Rigorous Problem Solving',
      'Cross-Functional Team Collaboration',
      'Hazard Identification & Field Safety Protocols',
      'High-Pressure Technical Decision Making',
      'Stakeholder Communication & Technical Reporting',
    ],
  },
  experience: [
    {
      period: 'Aug 2015 - Present',
      role: 'Borehole Drilling Geologist & Data Analyst',
      organization: 'SW Drilling Service Limited',
      location: 'Lagos, Nigeria',
      achievements: [
        'Supervised borehole drilling operations, ensuring strict adherence to environmental regulations and field safety protocols.',
        'Analyzed subsurface geological formations by logging and classifying soil and rock cutting samples to identify water/fluid-bearing zones.',
        'Tracked real-time drilling metrics including depth progression and formation changes to draft comprehensive daily wellsite geological reports.',
        'Engineered data capture processes to map local groundwater tables and stratigraphic data using Excel and specialized lithological logs.',
      ],
      skills: ['Geological Logging', 'Real-Time Telemetry', 'Drilling Parameters', 'Excel', 'Formation Evaluation'],
    },
    {
      period: 'Feb 2024 - Mar 2025',
      role: 'Data Analyst',
      organization: 'Webiz Innovation',
      location: 'Lagos, Nigeria',
      achievements: [
        'Spearhead the analysis of daily operational activities, identifying inefficiencies and recommending data-driven improvements, resulting in a 15% increase in operational efficiency.',
        'Designed and maintained interactive dashboards using Power BI, enabling stakeholders to track KPIs and make informed decisions in real-time.',
        'Collaborated with cross-functional teams to gather requirements and deliver tailored data solutions, improving data accessibility and usability across departments.',
        'Conducted data quality audits, ensuring 98% accuracy in datasets used for critical business decisions.',
        'Utilized advanced Excel and Power BI functionalities to analyze complex datasets, uncovering trends that informed strategic business initiatives.',
      ],
      skills: ['Power BI', 'SQL', 'Data Quality Auditing', 'Operational Analytics', 'Excel'],
    },
    {
      period: 'Mar 2023 - Oct 2023',
      role: 'Data Analysis Intern',
      organization: 'Utiva',
      location: 'Lagos, Nigeria',
      achievements: [
        'Completed a rigorous data analysis training program, mastering the entire data lifecycle and gaining hands-on experience with tools like Python, PostgreSQL, and Power BI.',
        'Developed a fraud detection model using analytical methods and problem-solving techniques, reducing potential fraud risks by 20% in simulated scenarios.',
        'Executed a capstone project involving the analysis of large datasets, delivering actionable insights that improved decision-making processes.',
        'Enhanced interpersonal and communication skills through collaborative projects, effectively presenting findings to stakeholders and team members.',
      ],
      skills: ['Python', 'PostgreSQL', 'Power BI', 'Fraud Detection Modeling', 'Data Pipelines'],
    },
  ] as ExperienceItem[],
  education: [
    {
      degree: 'Bachelor of Science (B.Sc.) in Geology',
      institution: 'University of Jos, Nigeria',
      period: 'Completed',
    },
  ],
  certifications: [
    {
      name: 'Data Analytics, Science, and Blockchain Technology',
      issuer: 'Utiva',
      date: 'Nov 2023',
    },
    {
      name: 'Career Essentials in Data Analysis',
      issuer: 'Microsoft and LinkedIn',
      date: 'Nov 2023',
    },
    {
      name: 'Data Analytics',
      issuer: 'LinkedIn Learning',
      date: 'Nov 2023',
    },
    {
      name: 'Soft Skills Training',
      issuer: 'Jobberman',
      date: 'Aug 2023',
    },
    {
      name: 'Well Operation Crew Resources Management (WOCRM)',
      issuer: 'IWCF',
      date: 'Sep 2026',
    },
  ],
  simulations: [
    {
      company: 'Deloitte Australia',
      role: 'Data Analytics Job Simulation',
      platform: 'Forage',
      period: 'April 2025',
      bullets: [
        'Completed a Deloitte job simulation involving data analysis and forensic technology.',
        'Created an executive data dashboard using Tableau.',
        'Used Excel to classify data and draw actionable business conclusions.',
      ],
    },
    {
      company: 'British Airways',
      role: 'Data Science Job Simulation',
      platform: 'Forage',
      period: 'April 2025',
      bullets: [
        'Completed a simulation focusing on how data science is a critical component of British Airways success.',
        'Scraped and analyzed customer review data to uncover findings.',
        'Built a predictive model to understand factors that influence buying behavior.',
      ],
    },
  ] as SimulationItem[],
  interests:
    'Data storytelling, machine learning, open-source contributions, and continuous learning in emerging data technologies.',
};
