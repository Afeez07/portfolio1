import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Clock, Calendar, CheckCircle2 } from 'lucide-react';
import { articles, getArticleBySlug } from '@/data/articles';
import ReadingProgressBar from '@/components/ReadingProgressBar';
import Badge from '@/components/ui/Badge';
import { Metadata } from 'next';

interface ArticlePageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return articles.map((a) => ({
    slug: a.slug,
  }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const article = getArticleBySlug(params.slug);
  if (!article) return { title: 'Article Not Found' };

  return {
    title: `${article.title} | Afeez Onabekun`,
    description: article.summary,
    openGraph: {
      title: article.title,
      description: article.summary,
    },
  };
}

export default function ArticleDetailPage({ params }: ArticlePageProps) {
  const article = getArticleBySlug(params.slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = articles.filter((a) => a.id !== article.id).slice(0, 2);

  return (
    <>
      <ReadingProgressBar />

      <article className="px-6 lg:px-12 py-12 max-w-4xl mx-auto">
        {/* Return Path */}
        <div className="mb-8">
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-dark/70 hover:text-dark transition-colors group"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            <span>Back to Insights Index</span>
          </Link>
        </div>

        {/* Header */}
        <header className="pb-8 border-b border-dark/10 mb-10">
          <div className="flex flex-wrap items-center gap-4 font-mono text-xs text-dark/60 mb-4">
            <Badge variant="dark" size="sm">
              {article.category}
            </Badge>
            <span className="flex items-center gap-1.5 font-medium">
              <Calendar size={13} />
              {article.publishedAt}
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <Clock size={13} />
              {article.readingTimeMinutes} min read
            </span>
          </div>

          <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-dark mb-6 leading-tight">
            {article.title}
          </h1>

          <p className="font-sans text-lg sm:text-xl text-dark/80 leading-relaxed">
            {article.summary}
          </p>
        </header>

        {/* Article Content */}
        <div className="space-y-10 text-dark font-sans leading-relaxed text-base sm:text-lg">
          <p className="text-xl sm:text-2xl text-dark font-medium leading-relaxed italic border-l-4 border-accent pl-6 py-1">
            {article.content.intro}
          </p>

          {article.content.sections.map((section, idx) => (
            <div key={idx} className="space-y-4 pt-6">
              <h2 className="font-heading font-bold text-2xl sm:text-3xl text-dark tracking-tight">
                {section.heading}
              </h2>

              <p className="text-dark/90 leading-relaxed">{section.body}</p>

              {section.callout && (
                <div className="p-6 bg-surfaceAlt border-l-4 border-dark rounded-r-2xl font-sans text-sm sm:text-base text-dark font-semibold leading-relaxed shadow-xs">
                  {section.callout}
                </div>
              )}

              {section.codeSnippet && (
                <div className="my-6 rounded-2xl bg-dark text-surface p-6 font-mono text-xs sm:text-sm overflow-x-auto shadow-inner border border-white/10">
                  <pre>{section.codeSnippet}</pre>
                </div>
              )}
            </div>
          ))}

          {/* Key Strategic Takeaways */}
          {article.content.takeaways && (
            <div className="bg-surface border border-dark/15 rounded-3xl p-8 sm:p-10 shadow-xs mt-12">
              <h3 className="font-heading font-bold text-2xl text-dark mb-4">
                Key Strategic Takeaways
              </h3>
              <ul className="space-y-3">
                {article.content.takeaways.map((t, i) => (
                  <li key={i} className="flex items-start gap-3 font-sans text-sm sm:text-base text-dark font-semibold">
                    <CheckCircle2 size={18} className="text-accent shrink-0 mt-0.5" />
                    <span className="text-dark leading-relaxed">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Author Bio Card */}
        <div className="mt-16 pt-10 border-t border-dark/15 flex flex-col sm:flex-row items-center gap-6 bg-surfaceAlt/50 p-8 rounded-3xl border border-dark/10">
          <div className="font-heading font-bold text-3xl tracking-tight text-dark shrink-0">
            AO<span className="text-accent">.</span>
          </div>
          <div className="font-sans text-sm text-dark/80">
            <p className="font-bold text-dark text-base mb-1">
              Written by Afeez Onabekun
            </p>
            <p className="leading-relaxed">
              Data Analyst and Builder specializing in relational SQL pipelines, AI-accelerated web applications, and direct-response Meta Ads acquisition systems.
            </p>
          </div>
        </div>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <section className="mt-16 pt-12 border-t border-dark/10">
            <h3 className="font-heading font-bold text-2xl text-dark mb-6">
              Related Publications
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relatedArticles.map((rel) => (
                <Link
                  key={rel.id}
                  href={`/insights/${rel.slug}`}
                  className="group p-6 bg-surface border border-dark/15 rounded-2xl hover:border-dark/35 transition-all flex flex-col justify-between shadow-2xs"
                >
                  <div>
                    <span className="font-mono text-[10px] text-accent uppercase tracking-wider block mb-2 font-bold">
                      {rel.category}
                    </span>
                    <h4 className="font-heading font-bold text-lg text-dark group-hover:text-accent transition-colors mb-2 leading-snug">
                      {rel.title}
                    </h4>
                  </div>
                  <span className="font-mono text-xs text-dark/60 mt-4 font-semibold">
                    {rel.readingTimeMinutes} min read →
                  </span>
                </Link>
              ))}
            </div>
          </section>
        )}
      </article>
    </>
  );
}
