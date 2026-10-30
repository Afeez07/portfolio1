'use client';

import React from 'react';
import Link from 'next/link';
import { Download, Printer, Mail, Github, Linkedin, MapPin, CheckCircle2, Phone, Briefcase, GraduationCap, Award, Compass, Globe } from 'lucide-react';
import { resumeData } from '@/data/resume';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';

export default function ResumePage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="px-6 lg:px-12 py-12 max-w-5xl mx-auto">
      {/* Top Action Bar (hidden during print) */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-8 mb-10 border-b border-dark/10 gap-4 no-print">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-accent font-semibold block mb-1">
            {`// CURRICULUM VITAE`}
          </span>
          <h1 className="font-heading font-bold text-3xl sm:text-4xl text-dark">
            Verified Résumé
          </h1>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-dark/20 bg-surface font-mono text-xs uppercase tracking-wider font-semibold text-dark hover:bg-surfaceAlt transition-colors shadow-xs"
          >
            <Printer size={15} />
            <span>Print CV</span>
          </button>
          <a
            href="/afeez-onabekun-resume.pdf"
            download="Afeez_Onabekun_Resume.pdf"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-dark text-surface font-mono text-xs uppercase tracking-wider font-bold hover:bg-dark/85 transition-colors shadow-xs"
          >
            <Download size={15} />
            <span>Download Official PDF</span>
          </a>
        </div>
      </div>

      {/* Résumé Paper Container */}
      <div className="bg-surface border border-dark/15 rounded-3xl p-8 sm:p-14 shadow-sm print:border-none print:shadow-none print:p-0">
        {/* Résumé Header */}
        <header className="pb-8 border-b-2 border-dark mb-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-4">
            <div>
              <h2 className="font-heading font-bold text-4xl sm:text-5xl text-dark tracking-tight">
                {resumeData.name}
              </h2>
              <p className="font-mono text-sm uppercase tracking-wider text-accent font-bold mt-1.5">
                {resumeData.title}
              </p>
            </div>

            <div className="flex flex-col sm:items-end font-mono text-xs text-dark/80 space-y-1.5">
              <span className="flex items-center gap-1.5">
                <MapPin size={13} className="text-dark/40" />
                {resumeData.contact.location}
              </span>
              <a
                href={`tel:${resumeData.contact.phone}`}
                className="hover:text-accent flex items-center gap-1.5 transition-colors font-semibold"
              >
                <Phone size={13} className="text-dark/40" />
                {resumeData.contact.phone}
              </a>
              <a
                href={`mailto:${resumeData.contact.email}`}
                className="hover:text-accent flex items-center gap-1.5 transition-colors"
              >
                <Mail size={13} className="text-dark/40" />
                {resumeData.contact.email}
              </a>
              <div className="flex items-center gap-3 pt-0.5">
                <a
                  href={resumeData.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent flex items-center gap-1 transition-colors"
                >
                  <Linkedin size={13} className="text-dark/40" />
                  <span>LinkedIn</span>
                </a>
                <span>•</span>
                <a
                  href="https://github.com/Afeez07"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent flex items-center gap-1 transition-colors"
                >
                  <Github size={13} className="text-dark/40" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-dark/10">
            <h3 className="font-mono text-xs uppercase tracking-wider text-dark font-bold mb-2">
              Professional Summary
            </h3>
            <p className="font-sans text-dark/90 text-sm sm:text-base leading-relaxed">
              {resumeData.summary}
            </p>
          </div>
        </header>

        {/* Section: Professional Experience */}
        <section className="mb-12">
          <div className="flex items-center gap-2 pb-3 mb-6 border-b border-dark/10">
            <Briefcase size={18} className="text-accent" />
            <h3 className="font-heading font-bold text-xl uppercase tracking-wider text-dark">
              Professional Experience
            </h3>
          </div>

          <div className="space-y-10">
            {resumeData.experience.map((exp, idx) => (
              <div key={idx} className="relative pl-6 border-l-2 border-dark/20 pb-2">
                <div className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-accent border-2 border-surface" />

                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1">
                  <h4 className="font-heading font-bold text-lg text-dark">
                    {exp.role}
                  </h4>
                  <span className="font-mono text-xs text-dark/80 font-bold bg-surfaceAlt/60 px-2.5 py-0.5 rounded border border-dark/10">
                    {exp.period}
                  </span>
                </div>

                <div className="font-mono text-xs text-dark/70 mb-3 font-semibold">
                  {exp.organization} • {exp.location}
                </div>

                <ul className="space-y-2 mb-4">
                  {exp.achievements.map((ach, i) => (
                    <li key={i} className="flex items-start gap-2.5 font-sans text-xs sm:text-sm text-dark/90 leading-relaxed">
                      <span className="text-accent font-bold mt-0.5">•</span>
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>

                {exp.skills && (
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {exp.skills.map((sk) => (
                      <span
                        key={sk}
                        className="font-mono text-[10px] bg-surfaceAlt px-2.5 py-0.5 rounded border border-dark/10 text-dark font-medium"
                      >
                        {sk}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Section: Core Competencies */}
        <section className="mb-12">
          <div className="flex items-center gap-2 pb-3 mb-6 border-b border-dark/10">
            <Compass size={18} className="text-accent" />
            <h3 className="font-heading font-bold text-xl uppercase tracking-wider text-dark">
              Core Competencies
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-5 bg-surfaceAlt/40 rounded-2xl border border-dark/10">
              <h4 className="font-mono text-xs uppercase tracking-wider text-accent font-bold mb-3">
                Data Analytics &amp; Modeling
              </h4>
              <ul className="space-y-2 font-mono text-xs text-dark/90">
                {resumeData.competencies.dataAnalytics.map((s) => (
                  <li key={s} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0 mt-1.5" />
                    <span className="leading-tight">{s}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-5 bg-surfaceAlt/40 rounded-2xl border border-dark/10">
              <h4 className="font-mono text-xs uppercase tracking-wider text-accent font-bold mb-3">
                Web Engineering
              </h4>
              <ul className="space-y-2 font-mono text-xs text-dark/90">
                {resumeData.competencies.webDevelopment.map((s) => (
                  <li key={s} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0 mt-1.5" />
                    <span className="leading-tight">{s}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-5 bg-surfaceAlt/40 rounded-2xl border border-dark/10">
              <h4 className="font-mono text-xs uppercase tracking-wider text-accent font-bold mb-3">
                Paid Acquisition
              </h4>
              <ul className="space-y-2 font-mono text-xs text-dark/90">
                {resumeData.competencies.paidAcquisition.map((s) => (
                  <li key={s} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0 mt-1.5" />
                    <span className="leading-tight">{s}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-5 bg-surfaceAlt/40 rounded-2xl border border-dark/10">
              <h4 className="font-mono text-xs uppercase tracking-wider text-accent font-bold mb-3">
                Geology &amp; Drilling
              </h4>
              <ul className="space-y-2 font-mono text-xs text-dark/90">
                {resumeData.competencies.geologicalAndDrilling.map((s) => (
                  <li key={s} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0 mt-1.5" />
                    <span className="leading-tight">{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Section: Education & Certifications */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 pt-4">
          {/* Education */}
          <div>
            <div className="flex items-center gap-2 pb-3 mb-4 border-b border-dark/10">
              <GraduationCap size={18} className="text-accent" />
              <h3 className="font-heading font-bold text-lg uppercase tracking-wider text-dark">
                Education
              </h3>
            </div>
            {resumeData.education.map((edu, idx) => (
              <div key={idx} className="font-sans text-sm">
                <div className="font-bold text-dark text-base">{edu.degree}</div>
                <div className="font-mono text-xs text-dark/70 mt-1 font-semibold">
                  {edu.institution}
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div>
            <div className="flex items-center gap-2 pb-3 mb-4 border-b border-dark/10">
              <Award size={18} className="text-accent" />
              <h3 className="font-heading font-bold text-lg uppercase tracking-wider text-dark">
                Certifications
              </h3>
            </div>
            <ul className="space-y-2.5 font-sans text-xs sm:text-sm text-dark/90">
              {resumeData.certifications.map((cert, idx) => (
                <li key={idx} className="flex items-start justify-between gap-2 border-b border-dark/5 pb-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-accent shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-dark block">{cert.name}</span>
                      <span className="font-mono text-[10px] text-dark/60">{cert.issuer}</span>
                    </div>
                  </div>
                  <span className="font-mono text-[10px] text-dark/50 shrink-0 font-bold">
                    {cert.date}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Section: Volunteer & Job Simulations */}
        <section className="mb-10 pt-4 border-t border-dark/10">
          <div className="flex items-center gap-2 pb-3 mb-6 border-b border-dark/10">
            <Globe size={18} className="text-accent" />
            <h3 className="font-heading font-bold text-xl uppercase tracking-wider text-dark">
              Volunteer &amp; Industry Simulations
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {resumeData.simulations.map((sim, idx) => (
              <div key={idx} className="p-5 bg-surfaceAlt/40 rounded-2xl border border-dark/10">
                <div className="flex items-baseline justify-between mb-1">
                  <h4 className="font-heading font-bold text-base text-dark">
                    {sim.company}
                  </h4>
                  <span className="font-mono text-[10px] text-dark/60 font-bold">
                    {sim.period}
                  </span>
                </div>
                <div className="font-mono text-xs text-accent font-semibold mb-3">
                  {sim.role} ({sim.platform})
                </div>
                <ul className="space-y-1.5 font-sans text-xs text-dark/90">
                  {sim.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-accent font-bold">•</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Section: Additional Information */}
        <section className="pt-6 border-t border-dark/10 font-sans text-xs sm:text-sm text-dark">
          <span className="font-mono text-xs uppercase tracking-wider text-dark font-bold mr-2">
            Professional Interests:
          </span>
          <span className="text-dark/80">{resumeData.interests}</span>
        </section>
      </div>

      {/* Bottom CTA no-print */}
      <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 no-print">
        <a
          href="/afeez-onabekun-resume.pdf"
          download="Afeez_Onabekun_Resume.pdf"
          className="inline-flex items-center gap-2 px-8 py-3.5 bg-accent text-surface rounded-full font-mono text-xs uppercase tracking-wider font-bold shadow-md hover:bg-dark transition-colors"
        >
          <Download size={15} />
          <span>Download Original PDF File</span>
        </a>
        <Button href="/contact" variant="primary" size="lg">
          Initiate Professional Inquiry
        </Button>
      </div>
    </div>
  );
}
