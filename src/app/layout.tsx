import type { Metadata } from 'next';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://onabekun.vercel.app'),
  title: 'Afeez Onabekun | Data Analyst, Developer & Acquisition Specialist',
  description: 'Editorial portfolio of Afeez Onabekun: turning complex data into decisive intelligence, building AI-accelerated web applications, and scaling paid acquisition systems.',
  keywords: ['Afeez Onabekun', 'Data Analyst', 'Web Developer', 'Meta Ads Specialist', 'SQL', 'Python', 'React', 'Tableau', 'Lagos Nigeria'],
  authors: [{ name: 'Afeez Onabekun', url: 'https://onabekun.vercel.app' }],
  openGraph: {
    title: 'Afeez Onabekun | Data Analyst, Developer & Acquisition Specialist',
    description: 'Analytical intelligence, AI-accelerated web engineering, and performance marketing scale systems.',
    url: 'https://onabekun.vercel.app',
    siteName: 'Afeez Onabekun Portfolio',
    images: [
      {
        url: '/project-1.jpg',
        width: 1200,
        height: 630,
        alt: 'Afeez Onabekun Portfolio Case Studies',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Afeez Onabekun | Data Analyst & Builder',
    description: 'Turning complex data into decisive intelligence, building AI web apps, and scaling paid acquisition.',
    images: ['/project-1.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen flex flex-col bg-base text-dark selection:bg-accent selection:text-surface">
        <Navigation />
        <main className="flex-1 pt-24">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
