import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, ArrowUpRight, BarChart3, Code2, TrendingUp } from 'lucide-react';
import { services } from '@/data/services';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import { SlideUp } from '@/components/ui/MotionWrapper';

export const metadata = {
  title: 'Services & Capabilities | Afeez Onabekun',
  description:
    'Specialized engineering and analytical services across Data Analytics, AI-assisted Web Applications, and Paid Acquisition.',
};

export default function ServicesPage() {
  const icons = [BarChart3, Code2, TrendingUp];

  return (
    <div className="px-6 lg:px-12 py-12 max-w-6xl mx-auto">
      {/* Header */}
      <SlideUp delay={0.1}>
        <div className="max-w-3xl mb-16">
          <p className="font-mono text-xs uppercase tracking-widest text-accent font-semibold mb-3">
            {`// COMMERCIAL CAPABILITIES`}
          </p>
          <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-dark mb-4">
            Services Designed for Decisive Business Impact
          </h1>
          <p className="font-sans text-dark/80 text-lg leading-relaxed">
            Targeted solutions bridging data architecture, frontend web engineering, and direct customer acquisition. Every engagement is rooted in quantitative measurement and verified deliverables.
          </p>
        </div>
      </SlideUp>

      {/* Services List */}
      <div className="space-y-20">
        {services.map((service, idx) => {
          const Icon = icons[idx] || BarChart3;
          return (
            <section
              key={service.id}
              id={service.id}
              className="bg-surface border border-dark/15 rounded-3xl p-8 sm:p-12 shadow-sm relative overflow-hidden"
            >
              {/* Service Header */}
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-8 border-b border-dark/10 mb-8">
                <div className="max-w-2xl">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-dark text-surface flex items-center justify-center">
                      <Icon size={20} className="text-accent" />
                    </div>
                    <span className="font-mono text-xs uppercase tracking-widest text-dark/60 font-semibold">
                      SERVICE 0{idx + 1}
                    </span>
                  </div>
                  <h2 className="font-heading font-bold text-3xl sm:text-4xl text-dark tracking-tight mb-2">
                    {service.title}
                  </h2>
                  <p className="font-mono text-xs uppercase tracking-wider text-accent font-bold mb-4">
                    {service.subtitle}
                  </p>
                  <p className="font-sans text-dark/80 text-base leading-relaxed">
                    {service.tagline}
                  </p>
                </div>

                <div className="flex md:flex-col items-center md:items-end gap-3 shrink-0">
                  <Button
                    href={`/contact?service=${service.id}`}
                    variant="accent"
                    size="md"
                    icon={<ArrowUpRight size={14} />}
                  >
                    Inquire About This Service
                  </Button>
                  <Link
                    href={`/work/${service.featuredProjectSlug}`}
                    className="font-mono text-xs text-dark/60 hover:text-dark hover:underline flex items-center gap-1"
                  >
                    <span>View Related Case Study</span>
                    <ArrowRight size={12} />
                  </Link>
                </div>
              </div>

              {/* Problem Solved & Target Audience */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                <div className="p-6 bg-surfaceAlt/50 border border-dark/10 rounded-2xl">
                  <h3 className="font-mono text-xs uppercase tracking-wider text-accent font-bold mb-2">
                    The Problem It Solves
                  </h3>
                  <p className="font-sans text-dark/85 text-sm leading-relaxed">
                    {service.problemSolved}
                  </p>
                </div>

                <div className="p-6 bg-surfaceAlt/50 border border-dark/10 rounded-2xl">
                  <h3 className="font-mono text-xs uppercase tracking-wider text-dark font-bold mb-3">
                    Who This Is For
                  </h3>
                  <ul className="space-y-2">
                    {service.targetAudience.map((aud, i) => (
                      <li key={i} className="flex items-start gap-2.5 font-sans text-xs text-dark/85">
                        <CheckCircle2 size={14} className="text-accent shrink-0 mt-0.5" />
                        <span>{aud}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Deliverables & Process */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8 border-t border-dark/10">
                {/* Deliverables (5 cols) */}
                <div className="lg:col-span-5">
                  <h3 className="font-heading font-bold text-xl text-dark mb-4">
                    Tangible Deliverables
                  </h3>
                  <ul className="space-y-2.5">
                    {service.deliverables.map((del, i) => (
                      <li key={i} className="flex items-start gap-2.5 font-sans text-xs sm:text-sm text-dark/90 leading-relaxed">
                        <span className="font-mono text-xs text-accent font-bold shrink-0 mt-0.5">
                          ✓
                        </span>
                        <span>{del}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Stack Badges */}
                  <div className="mt-6 pt-4 border-t border-dark/10">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-dark/50 block mb-2 font-bold">
                      Tools &amp; Stack Deployed
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {service.techStack.map((tech) => (
                        <Badge key={tech} variant="neutral" size="xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                {/* 4-Step Process Breakdown (7 cols) */}
                <div className="lg:col-span-7">
                  <h3 className="font-heading font-bold text-xl text-dark mb-4">
                    Structured Engagement Process
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.process.map((step) => (
                      <div
                        key={step.step}
                        className="p-4 bg-surface border border-dark/10 rounded-xl shadow-2xs"
                      >
                        <span className="font-mono text-xs text-accent font-bold block mb-1">
                          PHASE {step.step}
                        </span>
                        <h4 className="font-heading font-bold text-sm text-dark mb-1">
                          {step.name}
                        </h4>
                        <p className="font-sans text-xs text-dark/75 leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* Global Closing Contact Prompt */}
      <div className="mt-20 bg-dark text-surface rounded-3xl p-8 sm:p-12 text-center">
        <h3 className="font-heading font-bold text-3xl sm:text-4xl text-surface mb-3">
          Have a Custom Technical Requirement?
        </h3>
        <p className="font-sans text-surface/75 text-sm max-w-md mx-auto mb-6 leading-relaxed">
          Schedule an introductory discovery conversation to evaluate scope, timeline, and deliverables.
        </p>
        <Button href="/contact" variant="accent" size="lg" icon={<ArrowRight size={14} />}>
          Initiate Service Inquiry
        </Button>
      </div>
    </div>
  );
}
