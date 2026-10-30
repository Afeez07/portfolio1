import { InsightArticle } from '@/types';

export const articles: InsightArticle[] = [
  {
    id: 'server-side-tracking-guide',
    slug: 'why-browser-cookies-fail-server-side-tracking',
    title: 'Why Browser Cookies Fail: The Case for Server-Side Tracking & Conversions API',
    summary: 'A technical analysis of ad tracking degradation post-iOS14.5 and how server-to-server event telemetry restores attribution accuracy.',
    category: 'Analytics & Acquisition',
    publishedAt: 'October 2024',
    readingTimeMinutes: 6,
    featured: true,
    content: {
      intro: 'In performance marketing, you cannot optimize what you cannot measure. As browser ad-blockers, Intelligent Tracking Prevention (ITP), and privacy changes degrade standard JavaScript pixel cookies, reliance on client-side pixels results in 20% to 40% of conversion events being silently dropped in the dark.',
      sections: [
        {
          heading: '1. The Problem with Client-Side Pixels',
          body: 'Traditional pixel trackers execute inside the visitor\'s browser. When a user completes a checkout, JavaScript fires an HTTP POST request to third-party ad networks. However, modern browsers increasingly truncate cookie lifespans, strip query string click identifiers (like fbclid), or block third-party analytics endpoints entirely.',
          callout: 'Studies demonstrate that pure client-side attribution loses between 25% and 38% of purchase events on Safari and iOS devices.'
        },
        {
          heading: '2. The Server-Side Conversions API (CAPI) Solution',
          body: 'Server-side tracking shifts event transmission from the untrusted client browser to a secure cloud server endpoint. When a purchase occurs, the web server or webhook handler dispatches an authenticated server-to-server payload directly to Meta\'s Graph API.',
          codeSnippet: `// Example Server-Side Event Payload to Meta Graph API
const payload = {
  data: [{
    event_name: "Purchase",
    event_time: Math.floor(Date.now() / 1000),
    action_source: "website",
    event_id: "order_109485", // Matching client-side event_id for deduplication
    user_data: {
      em: hashSha256(customer.email),
      ph: hashSha256(customer.phone),
      client_ip_address: req.ip,
      client_user_agent: req.headers['user-agent']
    },
    custom_data: {
      currency: "NGN",
      value: 45000.00
    }
  }]
};`
        },
        {
          heading: '3. Event Deduplication & Match Quality',
          body: 'To avoid double-counting, modern measurement architectures run redundant tracking: both client-side and server-side events fire with identical `event_id` keys. Meta matches the pairs and discards duplicates, providing robust resilience even when one channel is interrupted.'
        }
      ],
      takeaways: [
        'Client-side tracking alone is fundamentally insufficient for high-volume paid acquisition.',
        'Proper event deduplication requires deterministic unique event IDs passed across client and server layers.',
        'High Event Match Quality (8.5+) directly reduces Cost Per Acquisition by providing clean feedback to automated bidding algorithms.'
      ]
    }
  },
  {
    id: 'ai-assisted-engineering-workflow',
    slug: 'shipping-mvps-with-ai-speed-and-architectural-rigor',
    title: 'Shipping MVPs with AI: Balancing Velocity with Architectural Discipline',
    summary: 'How to harness AI coding assistants (Cursor, Claude, GPT-4) to compress weeks of frontend boilerplate into hours without compromising maintainability.',
    category: 'Engineering & Workflow',
    publishedAt: 'September 2024',
    readingTimeMinutes: 5,
    featured: false,
    content: {
      intro: 'AI coding tools allow developers to write code at ten times previous speeds. However, velocity without architectural rigor leads directly to unmaintainable spaghetti code and technical debt.',
      sections: [
        {
          heading: '1. The Trap of Blind Code Generation',
          body: 'When prompting AI for code, developers often generate hundreds of lines of duplicated state logic and inconsistent styling. The secret to productive AI-assisted engineering is defining strong architectural constraints, such as TypeScript interfaces and strict design tokens, before writing a single component.',
          callout: 'An AI assistant is an amplifier of engineering judgment, not a substitute for software architecture.'
        },
        {
          heading: '2. Contract-First Development',
          body: 'By specifying data models and component interfaces upfront in TypeScript, the AI assistant is constrained to produce code that strictly adheres to established types, eliminating entire classes of runtime errors.'
        },
        {
          heading: '3. Atomic Tailwind & Reusable Systems',
          body: 'Pairing AI development with Tailwind CSS enables rapid visual iteration without CSS pollution. Standardizing typography scales, color tokens, and container widths ensures the final application feels custom-crafted rather than stitched together.'
        }
      ],
      takeaways: [
        'Always design the data model and TypeScript contract before generating UI components.',
        'Use AI to accelerate boilerplate generation while keeping control of state management and security.',
        'Component isolation and atomic design prevent AI code drift over long-term iterations.'
      ]
    }
  },
  {
    id: 'sql-window-functions-for-retention',
    slug: 'cohort-retention-analysis-with-sql-window-functions',
    title: 'Modeling Cohort Retention in PostgreSQL Using Advanced Window Functions',
    summary: 'A step-by-step walkthrough of computing user cohort retention tables and churn velocity using PostgreSQL Common Table Expressions (CTEs).',
    category: 'Data Analytics',
    publishedAt: 'August 2024',
    readingTimeMinutes: 7,
    featured: false,
    content: {
      intro: 'Cohort retention analysis is the single most informative analytical model for evaluating product stickiness. Here is how to construct a scalable retention matrix purely in SQL using CTEs and window functions.',
      sections: [
        {
          heading: '1. Establishing the Cohort Anchor Date',
          body: 'The first step is determining each user\'s signup month or first transaction date. Using the `MIN() OVER (PARTITION BY user_id)` window function assigns an immutable cohort label to every subsequent action.',
          codeSnippet: `WITH user_cohorts AS (
  SELECT
    user_id,
    DATE_TRUNC('month', MIN(created_at)) AS cohort_month
  FROM transactions
  GROUP BY user_id
),
activity AS (
  SELECT
    t.user_id,
    c.cohort_month,
    DATE_TRUNC('month', t.created_at) AS activity_month,
    (EXTRACT(YEAR FROM t.created_at) - EXTRACT(YEAR FROM c.cohort_month)) * 12 +
    (EXTRACT(MONTH FROM t.created_at) - EXTRACT(MONTH FROM c.cohort_month)) AS period_index
  FROM transactions t
  JOIN user_cohorts c ON t.user_id = c.user_id
)
SELECT
  cohort_month,
  period_index,
  COUNT(DISTINCT user_id) AS active_users
FROM activity
GROUP BY 1, 2
ORDER BY 1, 2;`
        },
        {
          heading: '2. Transforming Normalized Rows into a Triangular Matrix',
          body: 'Once raw active counts are computed per period index, we can pivot or feed the table directly into Tableau or Power BI to render the triangular cohort heat map.'
        }
      ],
      takeaways: [
        'Window functions allow multi-period cohort calculations without slow self-joins.',
        'Standardizing period index into integer month offsets simplifies comparative decay curves.',
        'Automated database views ensure retention metrics are always current with incoming daily transactions.'
      ]
    }
  }
];

export function getArticleBySlug(slug: string): InsightArticle | undefined {
  return articles.find(a => a.slug === slug);
}

