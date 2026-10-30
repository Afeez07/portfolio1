'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search, ExternalLink, ArrowRight, Filter, X } from 'lucide-react';
import { projects } from '@/data/projects';
import { ProjectCategory } from '@/types';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import { SlideUp, FadeIn } from '@/components/ui/MotionWrapper';

const categories: ProjectCategory[] = [
  'All',
  'Data Analytics',
  'Website Development',
  'Meta Ads',
];

export default function WorkIndexPage() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: projects.length };
    categories.forEach((cat) => {
      if (cat !== 'All') {
        counts[cat] = projects.filter((p) => p.category === cat).length;
      }
    });
    return counts;
  }, []);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory =
        selectedCategory === 'All' || project.category === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        q === '' ||
        project.title.toLowerCase().includes(q) ||
        project.shortDesc.toLowerCase().includes(q) ||
        project.discipline.toLowerCase().includes(q) ||
        project.tools.some((t) => t.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="px-6 lg:px-12 py-12 max-w-7xl mx-auto">
      {/* Editorial Page Header */}
      <SlideUp delay={0.1}>
        <div className="max-w-3xl mb-12">
          <p className="font-mono text-xs uppercase tracking-widest text-accent font-semibold mb-3">
            {`// PROJECT ARCHIVE & CASE STUDIES`}
          </p>
          <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-dark mb-4">
            Selected Engineering &amp; Analytical Work
          </h1>
          <p className="font-sans text-dark/80 text-base sm:text-lg leading-relaxed">
            Detailed case studies across data analytics, modern web applications, and paid acquisition systems. Filter by discipline or search by technology stack below.
          </p>
        </div>
      </SlideUp>

      {/* Filter and Search Controls Bar */}
      <SlideUp delay={0.2}>
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 pb-8 mb-8 border-b border-dark/10">
          {/* Category Pill Filters */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            <Filter size={15} className="text-dark/40 shrink-0 mr-1" />
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full font-mono text-xs uppercase tracking-wider whitespace-nowrap transition-all ${
                    isActive
                      ? 'bg-dark text-surface font-bold shadow-sm'
                      : 'bg-surface border border-dark/15 text-dark/70 hover:text-dark hover:border-dark/35'
                  }`}
                >
                  <span>{cat}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                      isActive
                        ? 'bg-surface/20 text-surface'
                        : 'bg-surfaceAlt text-dark/60'
                    }`}
                  >
                    {categoryCounts[cat] || 0}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative min-w-[280px]">
            <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-dark/40" />
            <input
              type="text"
              placeholder="Search projects or tools (e.g. SQL, Python, Meta)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-surface border border-dark/20 rounded-full pl-10 pr-10 py-2.5 text-xs font-sans text-dark placeholder:text-dark/40 focus:outline-none focus:ring-2 focus:ring-dark"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 rounded-full text-dark/40 hover:text-dark hover:bg-dark/5"
                title="Clear search"
              >
                <X size={14} />
              </button>
            )}
          </div>
        </div>
      </SlideUp>

      {/* Results Counter */}
      <div className="flex items-center justify-between font-mono text-xs text-dark/60 mb-8">
        <span>
          Showing {filteredProjects.length} of {projects.length} verified case studies
        </span>
        {selectedCategory !== 'All' && (
          <span>Filtered by &ldquo;{selectedCategory}&rdquo;</span>
        )}
      </div>

      {/* Projects Grid */}
      {filteredProjects.length > 0 ? (
        <FadeIn delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((p) => (
              <div
                key={p.id}
                className="group bg-surface border border-dark/15 rounded-3xl overflow-hidden flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div>
                  {/* Visual Preview */}
                  <div className="relative w-full h-56 bg-surfaceAlt overflow-hidden p-3 flex items-center justify-center">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 flex items-center gap-2">
                      <Badge variant="dark" size="xs">
                        {p.category}
                      </Badge>
                      <Badge variant="neutral" size="xs">
                        {p.year}
                      </Badge>
                    </div>
                  </div>

                  {/* Content Header */}
                  <div className="p-6">
                    <div className="font-mono text-[11px] text-dark/60 uppercase tracking-wider mb-2 font-semibold">
                      {p.discipline}
                    </div>
                    <h3 className="font-heading font-bold text-xl text-dark group-hover:text-accent transition-colors mb-2 leading-snug">
                      {p.title}
                    </h3>
                    <p className="font-sans text-dark/75 text-xs leading-relaxed mb-4">
                      {p.shortDesc}
                    </p>
                  </div>
                </div>

                {/* Bottom Metadata & Actions */}
                <div className="p-6 pt-0">
                  <div className="font-mono text-sm font-bold text-dark pb-3 mb-3 border-b border-dark/10 flex items-center justify-between">
                    <span className="text-dark/90">{p.metric}</span>
                    {p.liveUrl && (
                      <a
                        href={p.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-dark/40 hover:text-accent transition-colors p-1"
                        title="Open Live Deployment"
                      >
                        <ExternalLink size={14} />
                      </a>
                    )}
                  </div>

                  {/* Tool Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {p.tools.slice(0, 3).map((tool) => (
                      <Badge key={tool} variant="neutral" size="xs">
                        {tool}
                      </Badge>
                    ))}
                    {p.tools.length > 3 && (
                      <span className="font-mono text-[10px] text-dark/40 px-1 py-0.5">
                        +{p.tools.length - 3}
                      </span>
                    )}
                  </div>

                  {/* View Case Study Button */}
                  <Button
                    href={`/work/${p.slug}`}
                    variant="outline"
                    size="md"
                    className="w-full"
                    icon={<ArrowRight size={14} />}
                  >
                    View Case Study
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      ) : (
        /* Empty State */
        <div className="bg-surface border border-dashed border-dark/20 rounded-3xl p-12 sm:p-16 text-center max-w-xl mx-auto my-12">
          <p className="font-mono text-xs uppercase tracking-widest text-accent mb-2 font-bold">
            No Matching Case Studies
          </p>
          <h3 className="font-heading font-bold text-2xl text-dark mb-3">
            No projects found matching &ldquo;{searchQuery}&rdquo;
          </h3>
          <p className="font-sans text-dark/70 text-sm mb-6 leading-relaxed">
            Try adjusting your search criteria or reset your filters to explore all verified case studies.
          </p>
          <Button
            onClick={() => {
              setSelectedCategory('All');
              setSearchQuery('');
            }}
            variant="primary"
            size="md"
          >
            Reset Filters
          </Button>
        </div>
      )}
    </div>
  );
}
