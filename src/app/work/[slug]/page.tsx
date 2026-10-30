import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, ExternalLink, Github, CheckCircle2, Calendar, UserCheck, Layers } from 'lucide-react';
import { projects, getProjectBySlug } from '@/data/projects';
import CaseStudyExplorer from '@/components/CaseStudyExplorer';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import { Metadata } from 'next';

interface CaseStudyPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const project = getProjectBySlug(params.slug);
  if (!project) return { title: 'Project Not Found' };

  return {
    title: `${project.title} | Case Study by Afeez Onabekun`,
    description: project.shortDesc,
    openGraph: {
      title: `${project.title} | Case Study`,
      description: project.shortDesc,
      images: [project.image],
    },
  };
}

export default function CaseStudyPage({ params }: CaseStudyPageProps) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  // Calculate Next and Previous project
  const currentIndex = projects.findIndex((p) => p.slug === project.slug);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : projects[projects.length - 1];
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : projects[0];

  return (
    <article className="px-6 lg:px-12 py-12 max-w-6xl mx-auto">
      {/* Return to Work Index */}
      <div className="mb-8">
        <Link
          href="/work"
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-dark/70 hover:text-dark transition-colors group"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          <span>Back to All Case Studies</span>
        </Link>
      </div>

      {/* Case Study Header */}
      <header className="pb-10 border-b border-dark/10 mb-12">
        <div className="flex flex-wrap items-center gap-3 mb-4 font-mono text-xs uppercase tracking-wider">
          <Badge variant="dark" size="sm">
            {project.category}
          </Badge>
          <span className="text-dark/40">•</span>
          <span className="text-dark/70 font-semibold">{project.discipline}</span>
        </div>

        <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-dark mb-4 leading-tight">
          {project.title}
        </h1>

        <p className="font-sans text-xl sm:text-2xl text-dark/80 max-w-3xl leading-relaxed mb-8">
          {project.subtitle}
        </p>

        {/* Project Meta Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 bg-surface border border-dark/15 rounded-2xl p-6 shadow-xs">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-wider text-dark/50 block mb-1 font-bold">
              Role
            </span>
            <span className="font-sans text-sm font-semibold text-dark">
              {project.role}
            </span>
          </div>

          <div>
            <span className="font-mono text-[10px] uppercase tracking-wider text-dark/50 block mb-1 font-bold">
              Timeline / Year
            </span>
            <span className="font-sans text-sm font-semibold text-dark">
              {project.year}
            </span>
          </div>

          <div>
            <span className="font-mono text-[10px] uppercase tracking-wider text-dark/50 block mb-1 font-bold">
              Key Metric
            </span>
            <span className="font-mono text-sm font-bold text-accent">
              {project.metric}
            </span>
          </div>

          <div>
            <span className="font-mono text-[10px] uppercase tracking-wider text-dark/50 block mb-1 font-bold">
              External Reference
            </span>
            <div className="flex items-center gap-3 pt-0.5">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs font-semibold text-dark hover:text-accent flex items-center gap-1 transition-colors"
                >
                  <span>Live App</span>
                  <ExternalLink size={12} />
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs font-semibold text-dark hover:text-accent flex items-center gap-1 transition-colors"
                >
                  <span>GitHub</span>
                  <Github size={12} />
                </a>
              )}
              {!project.liveUrl && !project.githubUrl && (
                <span className="font-mono text-xs text-dark/50">Proprietary / Client</span>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Hero Visual Banner */}
      <div className="relative w-full h-80 sm:h-96 lg:h-[480px] bg-surface rounded-3xl border border-dark/15 overflow-hidden p-6 mb-16 flex items-center justify-center shadow-xs">
        <Image
          src={project.image}
          alt={project.title}
          fill
          priority
          sizes="(max-width: 1200px) 100vw, 1200px"
          className="object-contain"
        />
      </div>

      {/* Narrative Section 1: Context & Problem */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
        <div className="md:col-span-4">
          <span className="font-mono text-xs uppercase tracking-widest text-accent font-semibold block mb-2">
            01 / Background
          </span>
          <h2 className="font-heading font-bold text-2xl lg:text-3xl text-dark">
            Context &amp; Problem
          </h2>
        </div>

        <div className="md:col-span-8 flex flex-col gap-6 font-sans text-dark/85 text-base leading-relaxed">
          <div>
            <h3 className="font-mono text-xs uppercase tracking-wider text-dark/60 mb-2 font-bold">
              Background Setting
            </h3>
            <p>{project.context}</p>
          </div>

          <div className="p-6 bg-surfaceAlt/60 border border-dark/15 rounded-2xl shadow-2xs">
            <h3 className="font-mono text-xs uppercase tracking-wider text-accent mb-2 font-bold">
              The Core Problem
            </h3>
            <p className="text-dark font-medium">{project.problem}</p>
          </div>
        </div>
      </div>

      {/* Narrative Section 2: Objectives & Methodology */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16 pt-12 border-t border-dark/10">
        <div className="md:col-span-4">
          <span className="font-mono text-xs uppercase tracking-widest text-accent font-semibold block mb-2">
            02 / Strategy
          </span>
          <h2 className="font-heading font-bold text-2xl lg:text-3xl text-dark">
            Objectives &amp; Process
          </h2>
        </div>

        <div className="md:col-span-8 flex flex-col gap-6">
          <div>
            <h3 className="font-mono text-xs uppercase tracking-wider text-dark/60 mb-3 font-bold">
              Strategic Objectives
            </h3>
            <ul className="space-y-2.5">
              {project.objectives.map((obj, i) => (
                <li key={i} className="flex items-start gap-3 font-sans text-sm text-dark/85 leading-relaxed">
                  <CheckCircle2 size={16} className="text-accent shrink-0 mt-0.5" />
                  <span>{obj}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-4">
            <h3 className="font-mono text-xs uppercase tracking-wider text-dark/60 mb-2 font-bold">
              Methodology
            </h3>
            <p className="font-sans text-dark/85 text-base leading-relaxed">
              {project.methodology}
            </p>
          </div>
        </div>
      </div>

      {/* Interactive Case-Study Explorer for This Project */}
      {project.sections && project.sections.length > 0 && (
        <section className="my-16">
          <div className="mb-4">
            <span className="font-mono text-xs uppercase tracking-widest text-accent font-semibold block mb-1">
              03 / Interactive Deep Dive
            </span>
            <h2 className="font-heading font-bold text-2xl lg:text-3xl text-dark">
              Section Breakdown &amp; Verification
            </h2>
          </div>

          <CaseStudyExplorer
            sections={project.sections}
            projectTitle={project.title}
            category={project.category}
          />
        </section>
      )}

      {/* Narrative Section 4: Verified Results */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16 pt-12 border-t border-dark/10">
        <div className="md:col-span-4">
          <span className="font-mono text-xs uppercase tracking-widest text-accent font-semibold block mb-2">
            04 / Impact
          </span>
          <h2 className="font-heading font-bold text-2xl lg:text-3xl text-dark">
            Verified Outcomes
          </h2>
        </div>

        <div className="md:col-span-8 flex flex-col gap-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            {project.results.map((res, i) => (
              <div
                key={i}
                className="bg-surface border border-dark/15 rounded-2xl p-6 shadow-xs flex flex-col justify-between"
              >
                <span className="font-mono text-xs text-accent font-bold mb-2">
                  Key Result 0{i + 1}
                </span>
                <p className="font-sans text-sm text-dark font-medium leading-relaxed">
                  {res}
                </p>
              </div>
            ))}
          </div>

          {/* Tools & Technologies */}
          <div className="p-6 bg-surface border border-dark/15 rounded-2xl shadow-xs">
            <span className="font-mono text-xs uppercase tracking-wider text-dark/60 block mb-3 font-semibold">
              Technologies &amp; Infrastructure Deployed
            </span>
            <div className="flex flex-wrap gap-2">
              {project.tools.map((tool) => (
                <Badge key={tool} variant="neutral" size="sm">
                  {tool}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Previous / Next Project Navigation Bar */}
      <nav className="pt-12 border-t border-dark/15 grid grid-cols-1 sm:grid-cols-2 gap-6 my-12">
        <Link
          href={`/work/${prevProject.slug}`}
          className="group p-6 bg-surface border border-dark/10 rounded-2xl hover:border-dark/30 transition-all flex flex-col items-start shadow-xs"
        >
          <span className="font-mono text-xs text-dark/50 uppercase tracking-wider mb-2 flex items-center gap-1 group-hover:-translate-x-1 transition-transform">
            <ArrowLeft size={12} /> Previous Case Study
          </span>
          <span className="font-heading font-bold text-lg text-dark group-hover:text-accent transition-colors">
            {prevProject.title}
          </span>
          <span className="font-mono text-xs text-dark/60 mt-1">{prevProject.category}</span>
        </Link>

        <Link
          href={`/work/${nextProject.slug}`}
          className="group p-6 bg-surface border border-dark/10 rounded-2xl hover:border-dark/30 transition-all flex flex-col items-end text-right shadow-xs"
        >
          <span className="font-mono text-xs text-dark/50 uppercase tracking-wider mb-2 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
            Next Case Study <ArrowRight size={12} />
          </span>
          <span className="font-heading font-bold text-lg text-dark group-hover:text-accent transition-colors">
            {nextProject.title}
          </span>
          <span className="font-mono text-xs text-dark/60 mt-1">{nextProject.category}</span>
        </Link>
      </nav>

      {/* Case Study Call to Action */}
      <div className="bg-dark text-surface rounded-3xl p-8 sm:p-12 text-center mt-16">
        <h3 className="font-heading font-bold text-3xl sm:text-4xl text-surface mb-3">
          Interested in Similar Results?
        </h3>
        <p className="font-sans text-surface/75 text-sm max-w-md mx-auto mb-6 leading-relaxed">
          Let&apos;s evaluate your current data pipelines, web applications, or advertising acquisition systems.
        </p>
        <Button href="/contact" variant="accent" size="lg" icon={<ArrowRight size={14} />}>
          Discuss Your Project
        </Button>
      </div>
    </article>
  );
}
