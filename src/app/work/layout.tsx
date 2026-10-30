import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Selected Work & Case Studies | Afeez Onabekun',
  description:
    'Explore verified case studies across data analytics, modern web applications, and paid acquisition systems by Afeez Onabekun.',
};

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

