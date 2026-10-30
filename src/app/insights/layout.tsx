import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Insights & Technical Notes | Afeez Onabekun',
  description:
    'Technical notes, case analyses, and architectural breakdowns on Data Analytics, Server-Side Tracking, and Modern Web Engineering by Afeez Onabekun.',
};

export default function InsightsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

