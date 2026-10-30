import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Curriculum Vitae & Verified Experience | Afeez Onabekun',
  description:
    'Comprehensive verified résumé of Afeez Onabekun, detailing commercial experience in data analytics, geological systems, web applications, and paid acquisition.',
};

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

