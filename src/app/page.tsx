import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ArrowUpRight, BarChart3, Code2, TrendingUp, Database, Search, Terminal, CheckCircle2 } from 'lucide-react';
import { projects } from '@/data/projects';
import CaseStudyExplorer from '@/components/CaseStudyExplorer';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import { SlideUp, FadeIn } from '@/components/ui/MotionWrapper';

export default function HomePage() {
  const featuredProjects = projects.filter((p) => p.featured);
  const primaryExplorerProject = projects[0]; // Fashion Mansion Scaling

  const stats = [
    { label: 'Dashboards Built', value: '10+' },
    { label: 'Ad Spend Managed', value: '$500K+' },
    { label: 'Average ROAS', value: '4.2x' },
    { label: 'Tools in Core Stack', value: '12+' },
  ];

  const capabilityPillars = [
    {
      title: 'Data Analytics & Intelligence',
      icon: BarChart3,
      desc: 'I find the story in the numbers. From SQL queries to interactive dashboards, I turn messy operational data into decisive business clarity.',
      tools: ['SQL', 'Python', 'Pandas', 'Tableau', 'Power BI', 'Looker Studio'],
      link: '/services#data-analytics',
    },
    {
      title: 'AI-Assisted Web Engineering',
      icon: Code2,
      desc: 'I build MVPs and internal tools at the speed of thought, using modern AI-assisted engineering to go from conception to production in days, not months.',
      tools: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Node.js'],
      link: '/services#ai-development',
    },
    {
      title: 'Paid Acquisition & Direct Scale',
      icon: TrendingUp,
      desc: 'I do not just run ads. I build measurement-first acquisition systems with server-side CAPI telemetry, modular creative testing, and predictable ROAS.',
      tools: ['Meta Ads Manager', 'Conversions API (CAPI)', 'CBO', 'Lookalikes', 'CTWA'],
      link: '/services#paid-acquisition',
    },
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Ask the Right Question',
      icon: Search,
      desc: 'Discovery, hypothesis formulation, and KPI boundary definition.',
    },
    {
      step: '02',
      title: 'Query & Visualize',
      icon: Database,
      desc: 'SQL data pipelines, cohort analysis, and interactive dashboarding.',
    },
    {
      step: '03',
      title: 'Build the Solution',
      icon: Terminal,
      desc: 'AI-powered component development, responsive UI, and backend integration.',
    },
    {
      step: '04',
      title: 'Scale with Ads',
      icon: TrendingUp,
      desc: 'Server-side CAPI telemetry, dynamic creative testing, and paid scale.',
    },
  ];

  return (
    <div className="w-full">
      {/* Editorial Hero Section */}
      <section className="relative px-6 lg:px-12 pt-8 pb-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <SlideUp delay={0.1}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface border border-dark/10 font-mono text-xs uppercase tracking-widest text-dark/75 mb-6 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span>Data Analyst • Website Developer • Meta Ads Specialist</span>
              </div>
            </SlideUp>

            <SlideUp delay={0.2}>
              <h1 className="font-heading font-bold text-5xl sm:text-6xl lg:text-7xl tracking-tighter leading-[1.05] text-dark mb-6">
                Afeez Onabekun <br />
                <span className="font-normal opacity-85 text-4xl sm:text-5xl lg:text-6xl text-dark/90">
                  analyzes data.
                </span>
                <br />
                <span className="font-light opacity-75 text-3xl sm:text-4xl lg:text-5xl text-dark/80">
                  Builds with AI.
                </span>
                <br />
                <span className="font-light text-2xl sm:text-3xl lg:text-4xl text-dark/70 inline-block mt-2">
                  <span className="relative">
                    Scales
                    <span className="absolute bottom-0 left-0 w-full h-[3px] bg-accent" />
                  </span>{' '}
                  with paid acquisition.
                </span>
              </h1>
            </SlideUp>

            <SlideUp delay={0.3}>
              <p className="font-sans text-lg text-dark/80 max-w-xl leading-relaxed mb-8">
                Turning complex business data into decisive commercial intelligence, building high-speed digital products, and engineering predictable acquisition engines.
              </p>
            </SlideUp>

            {/* CTAs using Reusable Button Primitives */}
            <SlideUp delay={0.4}>
              <div className="flex flex-wrap items-center gap-4 mb-14">
                <Button href="/work" variant="primary" size="lg" icon={<ArrowRight size={15} />}>
                  Explore Selected Work
                </Button>
                <Button href="/resume" variant="secondary" size="lg">
                  View Résumé
                </Button>
                <Button href="/contact" variant="ghost" size="md">
                  Get in Touch →
                </Button>
              </div>
            </SlideUp>

            {/* Verified Stats Grid */}
            <SlideUp delay={0.5} className="w-full">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full">
                {stats.map((stat, i) => (
                  <div
                    key={i}
                    className="bg-surface/85 border border-dark/10 rounded-2xl p-4 flex flex-col justify-center shadow-xs"
                  >
                    <span className="font-mono font-bold text-2xl text-dark tracking-tighter mb-0.5">
                      {stat.value}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-dark/65 leading-tight">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </SlideUp>
          </div>

          {/* Right Column (5 cols) Portrait */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <FadeIn delay={0.3}>
              <div className="relative w-full max-w-sm aspect-[4/5] group">
                {/* Graphic offset backing card */}
                <div className="absolute inset-0 bg-accent translate-x-4 translate-y-4 rounded-2xl border-2 border-dark transition-transform group-hover:translate-x-6 group-hover:translate-y-6" />

                {/* Portrait container */}
                <div className="relative z-10 w-full h-full bg-surface rounded-2xl border-2 border-dark overflow-hidden shadow-xl">
                  <Image
                    src="/afeez.jpg"
                    alt="Afeez Onabekun"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute bottom-4 left-4 right-4 bg-dark/85 backdrop-blur-sm text-surface p-3 rounded-xl border border-white/10 font-mono text-xs flex items-center justify-between">
                    <span>Afeez Onabekun</span>
                    <span className="text-accent text-[11px] font-bold">Lagos, NG</span>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Flagship Interactive Feature: The Case Study Explorer Preview */}
      <section id="explorer" className="px-6 lg:px-12 py-16 max-w-7xl mx-auto">
        <div className="mb-8">
          <p className="font-mono text-xs uppercase tracking-widest text-accent font-semibold mb-2">
            {`// SIGNATURE PRESENTATION`}
          </p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-dark">
                Interactive Case-Study Explorer
              </h2>
              <p className="font-sans text-dark/75 text-base max-w-xl mt-2">
                Click across the structured project phases below to inspect live technical deliverables, methodology, and verification data.
              </p>
            </div>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider font-semibold text-dark hover:text-accent transition-colors"
            >
              <span>View All 6 Case Studies</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* Embedded Interactive Explorer */}
        <CaseStudyExplorer
          sections={primaryExplorerProject.sections}
          projectTitle={primaryExplorerProject.title}
          projectSlug={primaryExplorerProject.slug}
          category={primaryExplorerProject.category}
        />
      </section>

      {/* Featured Projects Grid */}
      <section className="px-6 lg:px-12 py-16 max-w-7xl mx-auto">
        <div className="mb-12">
          <p className="font-mono text-xs uppercase tracking-widest text-dark/50 mb-2 font-semibold">
            {`// SELECTED WORK`}
          </p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-dark">
              Featured Case Studies
            </h2>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider font-semibold text-accent hover:text-dark transition-colors"
            >
              <span>Browse All Projects (/work)</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredProjects.map((p) => (
            <Link
              key={p.id}
              href={`/work/${p.slug}`}
              className="group bg-surface border border-dark/15 rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative w-full h-64 sm:h-72 bg-surfaceAlt overflow-hidden p-4 flex items-center justify-center">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 z-10">
                  <Badge variant="dark">{p.category}</Badge>
                </div>
              </div>

              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-heading font-bold text-2xl group-hover:text-accent transition-colors mb-2">
                    {p.title}
                  </h3>
                  <p className="font-sans text-dark/75 text-sm leading-relaxed mb-6">
                    {p.shortDesc}
                  </p>
                </div>

                <div>
                  <div className="font-mono text-lg font-bold text-dark group-hover:text-accent transition-colors pb-4 mb-4 border-b border-dark/10">
                    {p.metric}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {p.tools.slice(0, 3).map((tool) => (
                      <Badge key={tool} variant="neutral">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Selected Capabilities / How I Work */}
      <section className="bg-dark text-surface py-24 px-6 lg:px-12 my-12">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-16">
            <p className="font-mono text-xs uppercase tracking-widest text-accent mb-2 font-bold">
              {`// HOW I WORK`}
            </p>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-surface">
              Three Disciplines. One Unified Workflow.
            </h2>
            <p className="font-sans text-surface/70 text-base mt-4 leading-relaxed">
              Bridging analytical mathematics, product engineering, and commercial paid acquisition to build tools and funnels that measurably generate revenue.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {capabilityPillars.map((cap, i) => {
              const Icon = cap.icon;
              return (
                <div
                  key={i}
                  className="bg-surface/5 border border-surface/10 rounded-2xl p-8 flex flex-col justify-between hover:border-accent/50 transition-colors"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-accent/20 border border-accent/40 flex items-center justify-center mb-6 text-accent">
                      <Icon size={24} />
                    </div>
                    <h3 className="font-heading font-bold text-2xl text-surface mb-3">
                      {cap.title}
                    </h3>
                    <p className="font-sans text-surface/70 text-sm leading-relaxed mb-6">
                      {cap.desc}
                    </p>
                  </div>

                  <div>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {cap.tools.map((t) => (
                        <span
                          key={t}
                          className="font-mono text-[11px] bg-surface/10 border border-surface/10 text-surface/80 px-2.5 py-1 rounded"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <Link
                      href={cap.link}
                      className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-accent font-semibold hover:text-surface transition-colors"
                    >
                      <span>Explore Service Details</span>
                      <ArrowRight size={12} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4-Step Process Section */}
      <section className="px-6 lg:px-12 py-20 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="font-mono text-xs uppercase tracking-widest text-dark/50 mb-2 font-bold">
            {`// METHODOLOGY`}
          </p>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-dark">
            From Question to Revenue
          </h2>
          <p className="font-sans text-dark/70 text-base mt-3">
            A repeatable 4-phase execution framework designed to eliminate guesswork.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="bg-surface border border-dark/15 rounded-2xl p-6 flex flex-col items-center text-center shadow-xs"
              >
                <div className="w-14 h-14 rounded-full border-2 border-dark bg-surface flex items-center justify-center mb-4 shadow-[3px_3px_0px_#111111]">
                  <Icon size={22} className="text-accent" />
                </div>
                <span className="font-mono text-xs text-dark/50 tracking-widest mb-1 font-bold">
                  STEP {step.step}
                </span>
                <h3 className="font-heading font-bold text-lg text-dark mb-2">
                  {step.title}
                </h3>
                <p className="font-sans text-dark/70 text-xs leading-relaxed">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Verified Testimonial / Social Proof */}
      <section className="px-6 lg:px-12 py-16 max-w-5xl mx-auto">
        <div className="bg-surfaceAlt border border-dark/15 rounded-3xl p-8 sm:p-12 text-center shadow-xs">
          <p className="font-sans text-2xl sm:text-3xl text-dark leading-relaxed italic mb-6">
            &ldquo;Afeez doesn&apos;t just build dashboards, he builds tools that actually solve business bottlenecks. His hybrid skill set of data and dev is exactly what we needed.&rdquo;
          </p>
          <div className="font-mono text-xs uppercase tracking-wider text-dark font-bold">
            Dimejesi Francisca, CEO of WebIz Innovation
          </div>
        </div>
      </section>

      {/* Closing Call to Action */}
      <section className="px-6 lg:px-12 py-20 max-w-4xl mx-auto text-center">
        <h2 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-dark mb-4">
          Let&apos;s Build Something Decisive.
        </h2>
        <p className="font-sans text-lg text-dark/75 max-w-xl mx-auto mb-8">
          Available for contract initiatives, full-time positions, and technical consulting.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button href="/contact" variant="accent" size="lg" icon={<ArrowUpRight size={15} />}>
            Open Contact Hub
          </Button>
          <Button href="mailto:afeez.onabekun@gmail.com" variant="secondary" size="lg">
            Direct Email
          </Button>
        </div>
      </section>
    </div>
  );
}
