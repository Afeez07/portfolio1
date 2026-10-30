'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ChevronLeft, ChevronRight, CheckCircle2, ArrowRight, Play, Pause, RotateCcw } from 'lucide-react';
import { ExplorerSection } from '@/types';
import Link from 'next/link';

interface CaseStudyExplorerProps {
  sections: ExplorerSection[];
  projectTitle: string;
  projectSlug?: string;
  category: string;
  initialAutoplay?: boolean;
}

const AUTOPLAY_INTERVAL_MS = 6000;

export default function CaseStudyExplorer({
  sections,
  projectTitle,
  projectSlug,
  category,
  initialAutoplay = false,
}: CaseStudyExplorerProps) {
  const shouldReduceMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(!shouldReduceMotion && initialAutoplay);
  const [progress, setProgress] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Touch gesture state
  const touchStartXRef = useRef<number | null>(null);
  const touchEndXRef = useRef<number | null>(null);

  const activeSection = sections[activeIndex] || sections[0];

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : sections.length - 1));
    setProgress(0);
  }, [sections.length]);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev < sections.length - 1 ? prev + 1 : 0));
    setProgress(0);
  }, [sections.length]);

  // Autoplay timer loop
  useEffect(() => {
    if (!isPlaying || isHovered || shouldReduceMotion) {
      return;
    }

    const intervalStep = 50;
    const progressIncrement = (intervalStep / AUTOPLAY_INTERVAL_MS) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          handleNext();
          return 0;
        }
        return prev + progressIncrement;
      });
    }, intervalStep);

    return () => clearInterval(timer);
  }, [isPlaying, isHovered, shouldReduceMotion, handleNext]);

  // Keyboard accessibility
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Only capture if target is not an input or textarea
      const target = e.target as HTMLElement;
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') {
        return;
      }

      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        handleNext();
        setIsPlaying(false);
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        handlePrev();
        setIsPlaying(false);
      } else if (e.key === 'Home') {
        e.preventDefault();
        setActiveIndex(0);
        setProgress(0);
        setIsPlaying(false);
      } else if (e.key === 'End') {
        e.preventDefault();
        setActiveIndex(sections.length - 1);
        setProgress(0);
        setIsPlaying(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev, sections.length]);

  // Touch gesture handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
    touchEndXRef.current = null;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartXRef.current !== null && touchEndXRef.current !== null) {
      const diffX = touchStartXRef.current - touchEndXRef.current;
      const minSwipeDistance = 45;

      if (diffX > minSwipeDistance) {
        // Swiped Left -> Next
        handleNext();
        setIsPlaying(false);
      } else if (diffX < -minSwipeDistance) {
        // Swiped Right -> Prev
        handlePrev();
        setIsPlaying(false);
      }
    }
    touchStartXRef.current = null;
    touchEndXRef.current = null;
  };

  const handleSelectSection = (index: number) => {
    setActiveIndex(index);
    setProgress(0);
    // Pause autoplay on direct user interaction
    setIsPlaying(false);
  };

  const toggleAutoplay = () => {
    if (shouldReduceMotion) return;
    setIsPlaying(!isPlaying);
  };

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="w-full bg-surface border border-dark/15 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-sm overflow-hidden my-12"
      role="region"
      aria-label={`Interactive Case Study Explorer for ${projectTitle}`}
    >
      {/* Explorer Masthead Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 mb-8 border-b border-dark/10 gap-4">
        <div>
          <div className="flex items-center gap-2.5 mb-1.5 font-mono text-xs uppercase tracking-widest text-accent font-semibold">
            <span>Interactive Case-Study Explorer</span>
            <span className="text-dark/30">•</span>
            <span className="text-dark/60 font-normal">{category}</span>
          </div>
          <h3 className="font-heading font-bold text-2xl lg:text-3xl tracking-tight text-dark">
            {projectTitle}
          </h3>
        </div>

        {/* Global Explorer Controls */}
        <div className="flex flex-wrap items-center gap-4">
          {/* Section Indicator */}
          <div className="font-mono text-xs text-dark/70 tracking-wider">
            Phase <span className="text-dark font-bold text-sm">{activeIndex + 1}</span> of {sections.length}
          </div>

          {/* Autoplay Toggle (Respects reduced motion) */}
          {!shouldReduceMotion && (
            <button
              onClick={toggleAutoplay}
              aria-label={isPlaying ? 'Pause auto-presentation' : 'Play auto-presentation'}
              title={isPlaying ? 'Pause automated playback' : 'Start automated playback'}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border font-mono text-xs uppercase tracking-wider transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dark ${
                isPlaying
                  ? 'bg-accent/10 border-accent/30 text-accent font-bold'
                  : 'bg-surfaceAlt/60 border-dark/15 text-dark/70 hover:text-dark hover:bg-surfaceAlt'
              }`}
            >
              {isPlaying ? <Pause size={13} /> : <Play size={13} />}
              <span className="text-[11px]">{isPlaying ? 'Autoplay On' : 'Play Slides'}</span>
            </button>
          )}

          {/* Previous / Next Buttons */}
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => {
                handlePrev();
                setIsPlaying(false);
              }}
              aria-label="Previous Phase"
              className="w-9 h-9 rounded-xl border border-dark/20 flex items-center justify-center hover:bg-dark hover:text-surface transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dark"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => {
                handleNext();
                setIsPlaying(false);
              }}
              aria-label="Next Phase"
              className="w-9 h-9 rounded-xl border border-dark/20 flex items-center justify-center hover:bg-dark hover:text-surface transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dark"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Autoplay Progress Line Bar */}
      {isPlaying && !shouldReduceMotion && (
        <div className="w-full h-1 bg-dark/10 rounded-full mb-6 overflow-hidden">
          <div
            className="h-full bg-accent transition-all duration-75 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}

      {/* Mobile Horizontal Section Tabs Rail (Visible only on < lg screens) */}
      <div className="lg:hidden flex items-center gap-2 overflow-x-auto pb-4 mb-6 scrollbar-none border-b border-dark/10">
        {sections.map((section, idx) => {
          const isActive = idx === activeIndex;
          return (
            <button
              key={section.id}
              onClick={() => handleSelectSection(idx)}
              className={`px-3.5 py-2 rounded-xl font-mono text-xs uppercase tracking-wider whitespace-nowrap transition-all flex items-center gap-2 ${
                isActive
                  ? 'bg-dark text-surface font-bold shadow-sm'
                  : 'bg-surfaceAlt/60 border border-dark/10 text-dark/70 hover:text-dark'
              }`}
            >
              <span className={`text-[10px] ${isActive ? 'text-accent' : 'text-dark/40'}`}>
                {section.stepNumber || `0${idx + 1}`}
              </span>
              <span>{section.title}</span>
            </button>
          );
        })}
      </div>

      {/* Main Split Body */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Navigator (Desktop: 5 cols) */}
        <div className="hidden lg:flex lg:col-span-5 flex-col gap-3">
          <span className="font-mono text-xs uppercase tracking-widest text-dark/50 mb-1 font-semibold">
            Structured Phases Index
          </span>

          <div className="flex flex-col gap-2.5" role="tablist" aria-label="Project Sections">
            {sections.map((section, idx) => {
              const isActive = idx === activeIndex;
              return (
                <button
                  key={section.id}
                  role="tab"
                  onClick={() => handleSelectSection(idx)}
                  aria-selected={isActive}
                  className={`w-full text-left p-4 rounded-2xl border transition-all duration-300 relative group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dark ${
                    isActive
                      ? 'bg-[#F5F3EE] border-dark/30 shadow-sm'
                      : 'bg-transparent border-transparent hover:bg-[#F5F3EE]/60 hover:border-dark/10'
                  }`}
                >
                  {/* Active Indicator Accent Line */}
                  {isActive && (
                    <motion.div
                      layoutId="activeSectionIndicator"
                      className="absolute left-0 top-3 bottom-3 w-1.5 bg-accent rounded-r-full"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}

                  <div className="flex items-start justify-between gap-3 pl-2.5">
                    <div className="flex items-baseline gap-3">
                      <span className={`font-mono text-xs font-bold ${isActive ? 'text-accent' : 'text-dark/40'}`}>
                        {section.stepNumber || `0${idx + 1}`}
                      </span>
                      <div>
                        <h4 className={`font-heading text-base font-semibold leading-snug ${isActive ? 'text-dark font-bold' : 'text-dark/70 group-hover:text-dark'}`}>
                          {section.title}
                        </h4>
                        <span className="font-mono text-[10px] uppercase tracking-wider text-dark/50 mt-0.5 block">
                          {section.category}
                        </span>
                      </div>
                    </div>

                    {section.metricHighlight && (
                      <span className="font-mono text-[11px] font-bold bg-surface border border-dark/10 px-2 py-0.5 rounded text-dark shadow-xs shrink-0">
                        {section.metricHighlight.value}
                      </span>
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {projectSlug && (
            <div className="mt-4 pt-4 border-t border-dark/10">
              <Link
                href={`/work/${projectSlug}`}
                className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider font-semibold text-accent hover:text-dark transition-colors"
              >
                <span>Read Complete Case Study</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          )}
        </div>

        {/* Right Presentation Canvas (7 cols on desktop) */}
        <div
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          className="lg:col-span-7 bg-[#F5F3EE] border border-dark/10 rounded-2xl p-6 sm:p-8 min-h-[500px] flex flex-col justify-between relative overflow-hidden select-none"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection.id}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -12 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.35, ease: 'easeOut' }}
              className="flex flex-col gap-6 h-full justify-between"
            >
              {/* Contain-style uncropped visual container */}
              <div className="relative w-full h-64 sm:h-72 lg:h-80 bg-surface rounded-xl border border-dark/10 overflow-hidden p-4 flex items-center justify-center shadow-inner">
                {activeSection.badge && (
                  <span className="absolute top-3 left-3 z-10 font-mono text-[10px] uppercase tracking-wider bg-dark text-surface px-2.5 py-1 rounded shadow-sm">
                    {activeSection.badge}
                  </span>
                )}

                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src={activeSection.image}
                    alt={activeSection.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-contain"
                    priority
                  />
                </div>
              </div>

              {/* Text Description & Key Metrics */}
              <div>
                <div className="flex items-center justify-between gap-4 mb-2">
                  <span className="font-mono text-xs font-semibold uppercase tracking-wider text-accent">
                    {activeSection.category}
                  </span>
                  {activeSection.metricHighlight && (
                    <div className="font-mono text-xs text-dark/70 text-right">
                      <strong className="text-dark font-bold text-sm block">
                        {activeSection.metricHighlight.value}
                      </strong>
                      <span className="text-[10px] text-dark/50">
                        {activeSection.metricHighlight.label}
                      </span>
                    </div>
                  )}
                </div>

                <h4 className="font-heading font-bold text-xl sm:text-2xl text-dark mb-3">
                  {activeSection.title}
                </h4>

                <p className="font-sans text-dark/90 text-sm leading-relaxed mb-4">
                  {activeSection.detailedAnalysis}
                </p>

                {activeSection.bullets && (
                  <ul className="space-y-2 pt-2 border-t border-dark/10">
                    {activeSection.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs font-sans text-dark/85">
                        <CheckCircle2 size={14} className="text-accent shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
