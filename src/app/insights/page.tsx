'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { Clock, Calendar, ArrowRight, Search, Filter, X } from 'lucide-react';
import { articles } from '@/data/articles';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import { SlideUp, FadeIn } from '@/components/ui/MotionWrapper';

const categories = [
  'All',
  'Analytics & Acquisition',
  'Engineering & Workflow',
  'Data Analytics',
];

export default function InsightsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: articles.length };
    categories.forEach((cat) => {
      if (cat !== 'All') {
        counts[cat] = articles.filter((a) => a.category === cat).length;
      }
    });
    return counts;
  }, []);

  const filteredArticles = useMemo(() => {
    return articles.filter((article) => {
      const matchesCategory =
        selectedCategory === 'All' || article.category === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        q === '' ||
        article.title.toLowerCase().includes(q) ||
        article.summary.toLowerCase().includes(q) ||
        article.category.toLowerCase().includes(q) ||
        (article.content.takeaways &&
          article.content.takeaways.some((t) => t.toLowerCase().includes(q)));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const featuredArticle = useMemo(() => {
    // Only show separate featured banner if on "All" with no active search query
    if (selectedCategory === 'All' && searchQuery === '') {
      return articles.find((a) => a.featured) || articles[0];
    }
    return null;
  }, [selectedCategory, searchQuery]);

  const gridArticles = useMemo(() => {
    if (featuredArticle) {
      return filteredArticles.filter((a) => a.id !== featuredArticle.id);
    }
    return filteredArticles;
  }, [filteredArticles, featuredArticle]);

  return (
    <div className="px-6 lg:px-12 py-12 max-w-6xl mx-auto">
      {/* Header */}
      <SlideUp delay={0.1}>
        <div className="max-w-3xl mb-12">
          <p className="font-mono text-xs uppercase tracking-widest text-accent font-semibold mb-3">
            {`// EDITORIAL & TECHNICAL WRITING`}
          </p>
          <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-dark mb-4">
            Insights, Frameworks &amp; Engineering Notes
          </h1>
          <p className="font-sans text-dark/80 text-base sm:text-lg leading-relaxed">
            Technical notes, architectural case analyses, and practical lessons on database systems, conversion tracking, and rapid product development.
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
                      ? 'bg-dark text-surface font-bold shadow-xs'
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
              placeholder="Search articles or topics (e.g. CAPI, SQL)..."
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
          Showing {filteredArticles.length} of {articles.length} publications
        </span>
        {selectedCategory !== 'All' && (
          <span>Filtered by &ldquo;{selectedCategory}&rdquo;</span>
        )}
      </div>

      {/* Featured Lead Article */}
      {featuredArticle && (
        <FadeIn delay={0.2}>
          <section className="mb-14">
            <span className="font-mono text-xs uppercase tracking-widest text-accent font-bold mb-3 block">
              {`// FEATURED PUBLICATION`}
            </span>
            <Link
              href={`/insights/${featuredArticle.slug}`}
              className="group block bg-surface border border-dark/15 rounded-3xl p-8 sm:p-12 hover:shadow-xl hover:border-dark/30 transition-all duration-300 shadow-xs"
            >
              <div className="flex flex-wrap items-center gap-4 font-mono text-xs text-dark/60 mb-4">
                <Badge variant="dark" size="sm">
                  {featuredArticle.category}
                </Badge>
                <span className="flex items-center gap-1.5 font-medium">
                  <Calendar size={13} />
                  {featuredArticle.publishedAt}
                </span>
                <span className="flex items-center gap-1.5 font-medium">
                  <Clock size={13} />
                  {featuredArticle.readingTimeMinutes} min read
                </span>
              </div>

              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-dark group-hover:text-accent transition-colors mb-4 tracking-tight leading-snug">
                {featuredArticle.title}
              </h2>

              <p className="font-sans text-dark/80 text-base sm:text-lg leading-relaxed mb-6 max-w-3xl">
                {featuredArticle.summary}
              </p>

              <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider font-semibold text-accent group-hover:text-dark transition-colors">
                <span>Read Full Article</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </section>
        </FadeIn>
      )}

      {/* Article Grid */}
      {gridArticles.length > 0 ? (
        <FadeIn delay={0.3}>
          <section>
            {featuredArticle && (
              <div className="flex items-center justify-between pb-3 mb-6 border-b border-dark/10">
                <h3 className="font-heading font-bold text-xl text-dark">
                  Additional Notes &amp; Frameworks
                </h3>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {gridArticles.map((article) => (
                <Link
                  key={article.id}
                  href={`/insights/${article.slug}`}
                  className="group bg-surface border border-dark/15 rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:shadow-lg hover:border-dark/30 transition-all duration-300 shadow-xs"
                >
                  <div>
                    <div className="flex items-center gap-3 font-mono text-xs text-dark/60 mb-3">
                      <Badge variant="neutral" size="xs">
                        {article.category}
                      </Badge>
                      <span>•</span>
                      <span>{article.readingTimeMinutes} min read</span>
                    </div>

                    <h3 className="font-heading font-bold text-xl text-dark group-hover:text-accent transition-colors mb-3 leading-snug">
                      {article.title}
                    </h3>

                    <p className="font-sans text-dark/75 text-xs sm:text-sm leading-relaxed mb-6">
                      {article.summary}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-dark/10 flex items-center justify-between font-mono text-xs text-dark/60">
                    <span>{article.publishedAt}</span>
                    <span className="text-accent group-hover:translate-x-1 transition-transform flex items-center gap-1 font-semibold">
                      <span>Read</span>
                      <ArrowRight size={12} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </FadeIn>
      ) : (
        /* Empty State */
        <div className="bg-surface border border-dashed border-dark/20 rounded-3xl p-12 sm:p-16 text-center max-w-xl mx-auto my-12">
          <p className="font-mono text-xs uppercase tracking-widest text-accent mb-2 font-bold">
            No Matching Articles
          </p>
          <h3 className="font-heading font-bold text-2xl text-dark mb-3">
            No publications found matching &ldquo;{searchQuery}&rdquo;
          </h3>
          <p className="font-sans text-dark/70 text-sm mb-6 leading-relaxed">
            Try adjusting your search query or reset your category filters to view all technical notes.
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
