import React from 'react';
import Link from 'next/link';
import { Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-dark/10 bg-[#EFECE6] text-dark pt-16 pb-12 px-6 lg:px-12 mt-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        {/* Col 1: Bio / Name */}
        <div className="md:col-span-2">
          <Link href="/" className="font-heading font-bold text-2xl tracking-tighter inline-flex items-center gap-1.5 mb-4">
            <span>Afeez Onabekun</span>
            <span className="w-2 h-2 rounded-full bg-accent" />
          </Link>
          <p className="font-sans text-dark/70 text-sm max-w-md leading-relaxed mb-6">
            Data Analyst & Builder based in Lagos, Nigeria. Specializing in analytical intelligence, AI-accelerated web applications, and direct-response paid acquisition systems.
          </p>
          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/in/afeezonabekun"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="w-10 h-10 rounded-lg border border-dark/15 bg-surface flex items-center justify-center hover:bg-dark hover:text-surface transition-colors"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://github.com/Afeez07"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="w-10 h-10 rounded-lg border border-dark/15 bg-surface flex items-center justify-center hover:bg-dark hover:text-surface transition-colors"
            >
              <Github size={18} />
            </a>
            <a
              href="mailto:afeez.onabekun@gmail.com"
              aria-label="Send an email"
              className="w-10 h-10 rounded-lg border border-dark/15 bg-surface flex items-center justify-center hover:bg-dark hover:text-surface transition-colors"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        {/* Col 2: Navigation Links */}
        <div>
          <h4 className="font-mono text-xs uppercase tracking-widest text-dark/50 mb-4 font-semibold">
            Index
          </h4>
          <ul className="space-y-2.5 font-sans text-sm font-medium">
            <li>
              <Link href="/work" className="hover:text-accent transition-colors flex items-center justify-between group">
                <span>Selected Work</span>
                <span className="font-mono text-xs opacity-0 group-hover:opacity-100 transition-opacity">01</span>
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-accent transition-colors flex items-center justify-between group">
                <span>Services & Offerings</span>
                <span className="font-mono text-xs opacity-0 group-hover:opacity-100 transition-opacity">02</span>
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-accent transition-colors flex items-center justify-between group">
                <span>About & Philosophy</span>
                <span className="font-mono text-xs opacity-0 group-hover:opacity-100 transition-opacity">03</span>
              </Link>
            </li>
            <li>
              <Link href="/resume" className="hover:text-accent transition-colors flex items-center justify-between group">
                <span>Interactive Résumé</span>
                <span className="font-mono text-xs opacity-0 group-hover:opacity-100 transition-opacity">04</span>
              </Link>
            </li>
            <li>
              <Link href="/insights" className="hover:text-accent transition-colors flex items-center justify-between group">
                <span>Insights & Writing</span>
                <span className="font-mono text-xs opacity-0 group-hover:opacity-100 transition-opacity">05</span>
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-accent transition-colors flex items-center justify-between group">
                <span>Get in Touch</span>
                <span className="font-mono text-xs opacity-0 group-hover:opacity-100 transition-opacity">06</span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Col 3: Direct Inquiries */}
        <div>
          <h4 className="font-mono text-xs uppercase tracking-widest text-dark/50 mb-4 font-semibold">
            Availability
          </h4>
          <p className="font-sans text-xs text-dark/70 mb-4">
            Currently accepting select contract initiatives, full-time opportunities, and strategic advisory roles.
          </p>
          <a
            href="mailto:afeez.onabekun@gmail.com"
            className="inline-flex items-center gap-2 font-mono text-xs font-semibold text-accent hover:underline"
          >
            <span>afeez.onabekun@gmail.com</span>
            <ArrowUpRight size={14} />
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-dark/10 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-dark/50">
        <div>
          © {new Date().getFullYear()} Afeez Onabekun. All rights reserved.
        </div>
        <div className="flex items-center gap-6">
          <span>Editorial Case-Study Experience</span>
          <span>Lagos, Nigeria</span>
        </div>
      </div>
    </footer>
  );
}

