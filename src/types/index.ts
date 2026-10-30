export type ProjectCategory = 
  | 'All'
  | 'Data Analytics'
  | 'Website Development'
  | 'Meta Ads'
  | 'Machine Learning';

export interface ExplorerSection {
  id: string;
  stepNumber: string;
  title: string;
  category: string;
  shortDesc: string;
  detailedAnalysis: string;
  bullets?: string[];
  image: string;
  badge?: string;
  metricHighlight?: {
    value: string;
    label: string;
  };
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: 'Data Analytics' | 'Website Development' | 'Meta Ads' | 'Machine Learning';
  discipline: string;
  shortDesc: string;
  metric: string;
  metricLabel: string;
  tools: string[];
  image: string;
  featured: boolean;
  liveUrl?: string;
  githubUrl?: string;
  client?: string;
  year: string;
  role: string;
  context: string;
  problem: string;
  objectives: string[];
  methodology: string;
  results: string[];
  sections: ExplorerSection[];
}

export interface ServiceOffering {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  problemSolved: string;
  targetAudience: string[];
  deliverables: string[];
  process: {
    step: string;
    name: string;
    desc: string;
  }[];
  techStack: string[];
  featuredProjectSlug: string;
}

export interface InsightArticle {
  id: string;
  slug: string;
  title: string;
  summary: string;
  category: string;
  publishedAt: string;
  readingTimeMinutes: number;
  featured?: boolean;
  content: {
    intro: string;
    sections: {
      heading: string;
      body: string;
      codeSnippet?: string;
      callout?: string;
    }[];
    takeaways: string[];
  };
}

export interface ExperienceItem {
  period: string;
  role: string;
  organization: string;
  location: string;
  type?: string;
  achievements: string[];
  skills?: string[];
}

