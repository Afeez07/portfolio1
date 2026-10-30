import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ArrowUpRight, BarChart2, Terminal, TrendingUp, Code2, Layers, Compass } from 'lucide-react';
import { resumeData } from '@/data/resume';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import { SlideUp, FadeIn } from '@/components/ui/MotionWrapper';

export const metadata = {
  title: 'About Afeez Onabekun | Data Analyst, Developer & Acquisition Specialist',
  description:
    'Learn about Afeez Onabekun: background, analytical philosophy, technical stack, and verified experience.',
};

export default function AboutPage() {
  const principles = [
    {
      number: '01',
      title: 'Measurement Before Scale',
      desc: 'You cannot optimize what you cannot accurately measure. Whether analyzing user funnels or configuring Meta Ads, I establish clean, deduplicated server-side telemetry before allocating budget or making architectural bets.',
    },
    {
      number: '02',
      title: 'Velocity with Architectural Rigor',
      desc: 'Speed matters, but messy code creates exponential friction. By leveraging AI tooling under strict type systems and modular component hierarchies, I deliver production software in days without accumulating architectural debt.',
    },
    {
      number: '03',
      title: 'Actionable Storytelling Over Raw Noise',
      desc: 'A chart is useless if an executive cannot make a business decision within ten seconds. I prioritize signal over vanity metrics, building self-service intelligence that drives commercial outcomes.',
    },
  ];

  return (
    <div className="px-6 lg:px-12 py-12 max-w-6xl mx-auto">
      {/* Header */}
      <SlideUp delay={0.1}>
        <div className="max-w-3xl mb-16">
          <p className="font-mono text-xs uppercase tracking-widest text-accent font-semibold mb-3">
            {`// IDENTITY & PHILOSOPHY`}
          </p>
          <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-dark mb-6">
            Analytical Thinker. <br className="hidden sm:inline" />
            Rapid Builder. Performance Operator.
          </h1>
          <p className="font-sans text-lg sm:text-xl text-dark/80 leading-relaxed">
            I am Afeez Onabekun, a multidisciplinary Data Analyst, Software Developer, and Paid Acquisition Specialist based in Lagos, Nigeria.
          </p>
        </div>
      </SlideUp>

      {/* Narrative & Visual Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
        <div className="lg:col-span-7 flex flex-col gap-6 font-sans text-dark/85 text-base leading-relaxed">
          <SlideUp delay={0.2}>
            <p>
              My background began at the intersection of quantitative sciences and technical problem-solving. While studying geological engineering principles at the University of Jos, I became obsessed with modeling complex natural systems, extracting meaning from messy spatial and numerical datasets.
            </p>
          </SlideUp>

          <SlideUp delay={0.3}>
            <p>
              That analytical foundation naturally evolved into modern business intelligence and software development. I realized that the greatest bottleneck facing growing companies was rarely a lack of ideas; it was the friction between raw data, engineering execution, and customer acquisition.
            </p>
          </SlideUp>

          <SlideUp delay={0.4}>
            <p>
              Today, I operate across all three pillars. In the morning, I write PostgreSQL queries and build interactive Tableau dashboards to uncover why customer retention is slipping. By afternoon, I build and deploy responsive Next.js web applications using AI-assisted engineering workflows. And to fuel growth, I architect direct-response Meta Ads campaigns with server-side CAPI tracking that scale spend profitably.
            </p>
          </SlideUp>

          <SlideUp delay={0.5}>
            <div className="p-6 bg-surface border border-dark/15 rounded-2xl shadow-sm mt-2">
              <h3 className="font-heading font-bold text-lg text-dark mb-2">
                The Hybrid Advantage
              </h3>
              <p className="text-sm text-dark/75 leading-relaxed">
                Most teams hire three separate people: an analyst who does not write code, an engineer who does not understand marketing metrics, and a media buyer who cannot debug a server payload. My hybrid skill set bridges these disciplines into a singular, high-velocity feedback loop.
              </p>
            </div>
          </SlideUp>
        </div>

        {/* Right Portrait & Fact Card */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <FadeIn delay={0.3}>
            <div className="relative w-full aspect-[4/5] bg-surface rounded-3xl border-2 border-dark overflow-hidden shadow-lg group">
              <Image
                src="/afeez.jpg"
                alt="Afeez Onabekun portrait"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="bg-surfaceAlt border border-dark/15 rounded-2xl p-6 font-mono text-xs space-y-3 shadow-xs">
              <div className="flex justify-between pb-2 border-b border-dark/10">
                <span className="text-dark/60 font-semibold">LOCATION</span>
                <span className="text-dark font-bold">Lagos, Nigeria</span>
              </div>
              <div className="flex justify-between pb-2 border-b border-dark/10">
                <span className="text-dark/60 font-semibold">EDUCATION</span>
                <span className="text-dark font-bold">B.Sc. Geology (UniJos)</span>
              </div>
              <div className="flex justify-between pb-2 border-b border-dark/10">
                <span className="text-dark/60 font-semibold">EXPERIENCE</span>
                <span className="text-dark font-bold">3+ Years Commercial Analytics</span>
              </div>
              <div className="flex justify-between">
                <span className="text-dark/60 font-semibold">STATUS</span>
                <span className="text-accent font-bold">Available for Initiatives</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Operating Principles */}
      <section className="mb-20 pt-12 border-t border-dark/10">
        <div className="max-w-2xl mb-12">
          <p className="font-mono text-xs uppercase tracking-widest text-accent font-semibold mb-2">
            {`// CORE TENETS`}
          </p>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-dark tracking-tight">
            How I Approach Engineering &amp; Analytics
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {principles.map((pr) => (
            <div
              key={pr.number}
              className="bg-surface border border-dark/15 rounded-2xl p-8 flex flex-col justify-between shadow-xs hover:border-dark/30 transition-colors"
            >
              <div>
                <span className="font-mono text-xs text-accent font-bold mb-4 block">
                  PRINCIPLE {pr.number}
                </span>
                <h3 className="font-heading font-bold text-xl text-dark mb-3">
                  {pr.title}
                </h3>
                <p className="font-sans text-xs text-dark/75 leading-relaxed">
                  {pr.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Verified Stack & Competencies Across All Pillars */}
      <section className="mb-20 pt-12 border-t border-dark/10">
        <div className="max-w-2xl mb-10">
          <p className="font-mono text-xs uppercase tracking-widest text-dark/50 mb-2 font-semibold">
            {`// TECHNICAL TOOLKIT`}
          </p>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-dark tracking-tight">
            Verified Stack &amp; Competencies
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Data Analytics */}
          <div className="bg-surface border border-dark/15 rounded-2xl p-6 shadow-xs">
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-dark/10">
              <BarChart2 size={18} className="text-accent" />
              <h3 className="font-heading font-bold text-lg text-dark">Data Analytics</h3>
            </div>
            <ul className="space-y-2">
              {resumeData.competencies.dataAnalytics.map((s) => (
                <li key={s} className="font-mono text-xs text-dark flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Web Engineering */}
          <div className="bg-surface border border-dark/15 rounded-2xl p-6 shadow-xs">
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-dark/10">
              <Code2 size={18} className="text-accent" />
              <h3 className="font-heading font-bold text-lg text-dark">Web Engineering</h3>
            </div>
            <ul className="space-y-2">
              {resumeData.competencies.webDevelopment.map((s) => (
                <li key={s} className="font-mono text-xs text-dark flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Paid Acquisition */}
          <div className="bg-surface border border-dark/15 rounded-2xl p-6 shadow-xs">
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-dark/10">
              <TrendingUp size={18} className="text-accent" />
              <h3 className="font-heading font-bold text-lg text-dark">Paid Acquisition</h3>
            </div>
            <ul className="space-y-2">
              {resumeData.competencies.paidAcquisition.map((s) => (
                <li key={s} className="font-mono text-xs text-dark flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Call to Action Bar */}
      <div className="bg-dark text-surface rounded-3xl p-8 sm:p-12 text-center">
        <h3 className="font-heading font-bold text-3xl sm:text-4xl text-surface mb-3">
          Explore My Verified Background
        </h3>
        <p className="font-sans text-surface/75 text-sm max-w-md mx-auto mb-6 leading-relaxed">
          Review my complete career timeline, education, and credentials on the interactive résumé page.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button href="/resume" variant="accent" size="lg" icon={<ArrowRight size={14} />}>
            View Full Résumé
          </Button>
          <Button href="/contact" variant="secondary" size="lg">
            Start a Conversation
          </Button>
        </div>
      </div>
    </div>
  );
}
