import { ServiceOffering } from '@/types';

export const services: ServiceOffering[] = [
  {
    id: 'data-analytics',
    title: 'Data Analytics & Business Intelligence',
    subtitle: 'From Raw Logs to Executive Clarity',
    tagline: 'I find the story in the numbers. From SQL queries to interactive dashboards, I turn messy data into clear decisions.',
    problemSolved: 'Companies generate mountains of raw event data across databases, CRM systems, and marketing platforms, but lack coherent models, metrics definitions, and actionable self-service dashboards to guide strategic resource allocation.',
    targetAudience: [
      'Founders needing transparent KPIs to evaluate unit economics.',
      'Operations teams bottlenecked by manual spreadsheet reporting.',
      'Product managers seeking user cohort and retention insights.'
    ],
    deliverables: [
      'Relational schema design, SQL data pipelines, and database views.',
      'Executive BI dashboards (Tableau, Power BI, Looker Studio).',
      'Cohort retention analysis, churn predictors, and revenue forecasting.',
      'Documentation and data dictionary for stakeholder self-service.'
    ],
    process: [
      {
        step: '01',
        name: 'Hypothesis & Metric Definition',
        desc: 'Identify the core business decisions and establish strict mathematical definitions for all primary KPIs.'
      },
      {
        step: '02',
        name: 'Pipeline & Data Ingestion',
        desc: 'Extract, sanitize, and transform disparate data sources using SQL and Python into unified analytical models.'
      },
      {
        step: '03',
        name: 'Interactive Visualization',
        desc: 'Build high-performance interactive dashboards with drill-downs, filters, and mobile-friendly summary cards.'
      },
      {
        step: '04',
        name: 'Handover & Continuous Optimization',
        desc: 'Validate figures against accounting records, conduct stakeholder training, and establish scheduled refresh cadences.'
      }
    ],
    techStack: ['SQL', 'Python', 'PostgreSQL', 'Tableau', 'Power BI', 'Pandas', 'Looker Studio', 'dbt'],
    featuredProjectSlug: 'covid-19-global-analysis'
  },
  {
    id: 'ai-development',
    title: 'AI-Assisted Web Applications & MVPs',
    subtitle: 'Idea to Live Production at the Speed of Thought',
    tagline: 'I build MVPs and internal tools at the speed of thought using AI-assisted development to go from idea to deployed app in days, not months.',
    problemSolved: 'Traditional engineering cycles can take months and tens of thousands of dollars before a functional prototype reaches customers. Modern AI tooling paired with senior architectural judgment compresses this cycle by 80%.',
    targetAudience: [
      'Startups validating product-market fit with live users.',
      'Businesses requiring custom internal dashboards or operations portals.',
      'SMEs needing high-performance modern web presences with lead routing.'
    ],
    deliverables: [
      'Full-stack Next.js or React web applications with responsive design.',
      'Clean component design systems built with Tailwind CSS.',
      'Database integration (Supabase, PostgreSQL) and serverless backend APIs.',
      'Production deployment on Vercel/Netlify with automated CI/CD and custom domains.'
    ],
    process: [
      {
        step: '01',
        name: 'Architecture & User Flow Specification',
        desc: 'Outline screen flows, data models, state requirements, and third-party API dependencies.'
      },
      {
        step: '02',
        name: 'Rapid Component Engineering',
        desc: 'Leverage modern AI workflows and typed React components to build functional interfaces with zero bloat.'
      },
      {
        step: '03',
        name: 'Backend & Integration Layer',
        desc: 'Connect databases, authentication, webhook triggers, and transactional email notification engines.'
      },
      {
        step: '04',
        name: 'Testing, Audit & Production Launch',
        desc: 'Run comprehensive Lighthouse performance, accessibility, and cross-browser responsiveness checks.'
      }
    ],
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Node.js', 'Vercel', 'Netlify'],
    featuredProjectSlug: 'sw-drilling'
  },
  {
    id: 'paid-acquisition',
    title: 'Meta Ads & Direct-Response Acquisition',
    subtitle: 'Measurement-First Paid Customer Growth',
    tagline: 'I do not just "run ads." I build measurement-first acquisition systems: every dollar tracked, every campaign iterated.',
    problemSolved: 'Ad spend is often wasted on unverified assumptions, fragmented ad sets, and flawed attribution. Modern paid acquisition requires rigorous server-side telemetry, systematic creative testing, and algorithmic scaling.',
    targetAudience: [
      'E-commerce brands scaling daily ad budgets profitably.',
      'High-ticket service providers needing qualified phone or messaging inquiries.',
      'Direct-to-consumer businesses needing structured creative testing workflows.'
    ],
    deliverables: [
      'Conversions API (CAPI) server-side tracking implementation.',
      'Account restructuring into sandboxed testing and CBO scaling engines.',
      'Weekly modular creative testing framework (hooks, visual formats, CTAs).',
      'Daily attribution reports and net profitability dashboards.'
    ],
    process: [
      {
        step: '01',
        name: 'Tracking & Telemetry Audit',
        desc: 'Ensure 100% server-side event deduplication, high Event Match Quality (EMQ), and reliable offline event pipelines.'
      },
      {
        step: '02',
        name: 'Creative Matrix Formulation',
        desc: 'Develop multi-angle creative briefs targeting diverse customer motivations and emotional triggers.'
      },
      {
        step: '03',
        name: 'Sandboxed Testing & Isolation',
        desc: 'Isolate individual variables (hook, body, headline) under controlled budget conditions to identify statistically significant winners.'
      },
      {
        step: '04',
        name: 'Campaign Budget Optimization (CBO) Scale',
        desc: 'Consolidate proven creative combinations into high-liquidity scale campaigns with automated budget pacing.'
      }
    ],
    techStack: ['Meta Ads Manager', 'Conversions API (CAPI)', 'Click-to-WhatsApp', 'Looker Studio', 'Google Tag Manager', 'CBO'],
    featuredProjectSlug: 'fashion-mansion-scaling'
  }
];

