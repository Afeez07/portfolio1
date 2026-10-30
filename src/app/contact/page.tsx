'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Mail,
  Linkedin,
  Github,
  ArrowUpRight,
  MessageSquare,
  Copy,
  Check,
  Phone,
  Clock,
  MapPin,
  ExternalLink,
  Download,
  Calendar,
  Sparkles,
} from 'lucide-react';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import { SlideUp, FadeIn } from '@/components/ui/MotionWrapper';

export default function ContactPage() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const emailAddress = 'afeez.onabekun@gmail.com';
  const phoneNumber = '+234 701 236 7630';
  const cleanPhone = '2347012367630';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(phoneNumber);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };


  return (
    <div className="px-6 lg:px-12 py-12 max-w-6xl mx-auto">
      {/* Page Header */}
      <SlideUp delay={0.1}>
        <div className="max-w-3xl mb-14">
          <p className="font-mono text-xs uppercase tracking-widest text-accent font-semibold mb-3">
            {`// INITIATE DIRECT CONTACT`}
          </p>
          <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-dark mb-4">
            Let&apos;s Build Something Decisive
          </h1>
          <p className="font-sans text-dark/80 text-base sm:text-lg leading-relaxed">
            Available for data intelligence pipelines, AI-accelerated web applications, and direct-response paid acquisition systems. Connect directly through any verified channel below for immediate communication.
          </p>
        </div>
      </SlideUp>

      {/* Main Direct Channels Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {/* Channel 1: WhatsApp (Instant Messenger) */}
        <FadeIn delay={0.2}>
          <div className="bg-surface border border-dark/15 rounded-3xl p-8 flex flex-col justify-between hover:shadow-xl hover:border-dark/30 transition-all duration-300 h-full shadow-xs">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#25D366]/15 text-[#128C7E] flex items-center justify-center border border-[#25D366]/30">
                  <MessageSquare size={24} />
                </div>
                <Badge variant="green" size="xs">
                  Instant Reply
                </Badge>
              </div>

              <h2 className="font-heading font-bold text-2xl text-dark mb-2">
                WhatsApp Chat
              </h2>
              <p className="font-sans text-dark/75 text-sm leading-relaxed mb-6">
                The fastest way to reach me directly for project inquiries, quick discussions, or introductory chats.
              </p>

              <div className="font-mono text-sm font-bold text-dark bg-surfaceAlt/60 px-4 py-3 rounded-xl border border-dark/10 mb-6 flex items-center justify-between">
                <span>{phoneNumber}</span>
                <button
                  type="button"
                  onClick={handleCopyPhone}
                  className="text-dark/50 hover:text-dark transition-colors p-1"
                  title="Copy phone number"
                >
                  {copiedPhone ? (
                    <span className="text-green-700 text-xs font-bold flex items-center gap-1">
                      <Check size={14} /> Copied
                    </span>
                  ) : (
                    <Copy size={15} />
                  )}
                </button>
              </div>
            </div>

            <a
              href={`https://wa.me/${cleanPhone}?text=${encodeURIComponent(
                'Hello Afeez, I am contacting you from your portfolio website.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#25D366] text-dark font-mono text-xs uppercase tracking-wider font-bold shadow-sm hover:bg-[#20ba59] active:translate-y-0.5 transition-all"
            >
              <MessageSquare size={16} />
              <span>Open WhatsApp Chat</span>
            </a>
          </div>
        </FadeIn>

        {/* Channel 2: Direct Email */}
        <FadeIn delay={0.3}>
          <div className="bg-surface border border-dark/15 rounded-3xl p-8 flex flex-col justify-between hover:shadow-xl hover:border-dark/30 transition-all duration-300 h-full shadow-xs">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-dark text-surface flex items-center justify-center">
                  <Mail size={24} className="text-accent" />
                </div>
                <Badge variant="neutral" size="xs">
                  Primary Inbox
                </Badge>
              </div>

              <h2 className="font-heading font-bold text-2xl text-dark mb-2">
                Direct Email
              </h2>
              <p className="font-sans text-dark/75 text-sm leading-relaxed mb-6">
                For detailed briefs, RFP documentation, contract proposals, and structured project specifications.
              </p>

              <div className="font-mono text-xs sm:text-sm font-bold text-dark bg-surfaceAlt/60 px-4 py-3 rounded-xl border border-dark/10 mb-6 flex items-center justify-between overflow-x-auto">
                <span className="truncate mr-2">{emailAddress}</span>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="text-dark/50 hover:text-dark transition-colors p-1 shrink-0"
                  title="Copy email address"
                >
                  {copiedEmail ? (
                    <span className="text-green-700 text-xs font-bold flex items-center gap-1">
                      <Check size={14} /> Copied
                    </span>
                  ) : (
                    <Copy size={15} />
                  )}
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-2.5">
              <a
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}&su=${encodeURIComponent(
                  'Project Inquiry from Portfolio'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl bg-dark text-surface font-mono text-xs uppercase tracking-wider font-bold shadow-sm hover:bg-dark/85 active:translate-y-0.5 transition-all"
              >
                <Mail size={16} />
                <span>Launch in Web Gmail</span>
              </a>
              <a
                href={`mailto:${emailAddress}?subject=${encodeURIComponent(
                  'Project Inquiry from Portfolio'
                )}`}
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl border border-dark/15 font-mono text-xs uppercase tracking-wider font-semibold text-dark hover:bg-surfaceAlt transition-colors"
              >
                <ExternalLink size={14} />
                <span>Default Mail Client</span>
              </a>
            </div>
          </div>
        </FadeIn>

        {/* Channel 3: Direct Voice Call & Networking */}
        <FadeIn delay={0.4}>
          <div className="bg-surface border border-dark/15 rounded-3xl p-8 flex flex-col justify-between hover:shadow-xl hover:border-dark/30 transition-all duration-300 h-full shadow-xs">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-surfaceAlt text-dark flex items-center justify-center border border-dark/10">
                  <Phone size={24} className="text-dark" />
                </div>
                <Badge variant="neutral" size="xs">
                  Direct Line
                </Badge>
              </div>

              <h2 className="font-heading font-bold text-2xl text-dark mb-2">
                Direct Voice
              </h2>
              <p className="font-sans text-dark/75 text-sm leading-relaxed mb-6">
                Available during West Africa business hours for urgent consultations, interview screening, or discovery calls.
              </p>

              <div className="font-mono text-sm font-bold text-dark bg-surfaceAlt/60 px-4 py-3 rounded-xl border border-dark/10 mb-6 flex items-center justify-between">
                <span>{phoneNumber}</span>
                <a
                  href={`tel:${phoneNumber}`}
                  className="text-accent hover:text-dark font-mono text-xs font-bold underline"
                >
                  Call Now
                </a>
              </div>
            </div>

            <a
              href={`tel:${phoneNumber}`}
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl border border-dark/20 bg-surface font-mono text-xs uppercase tracking-wider font-bold text-dark hover:bg-surfaceAlt transition-all shadow-xs"
            >
              <Phone size={16} />
              <span>Place Direct Call</span>
            </a>
          </div>
        </FadeIn>
      </div>

      {/* Operational Specifications & Verified Profiles Panel */}
      <SlideUp delay={0.3}>
        <div className="bg-surfaceAlt/50 border border-dark/15 rounded-3xl p-8 sm:p-10 shadow-xs">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-dark/10">
            {/* SLA */}
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-dark text-surface flex items-center justify-center shrink-0">
                <Clock size={18} className="text-accent" />
              </div>
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-dark/50 block mb-1 font-bold">
                  Response SLA
                </span>
                <span className="font-heading font-bold text-lg text-dark block mb-0.5">
                  Within 24 Hours
                </span>
                <p className="font-sans text-xs text-dark/70 leading-relaxed">
                  Every legitimate technical inquiry receives a prompt, direct response.
                </p>
              </div>
            </div>

            {/* Location & Timezone */}
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-surface border border-dark/15 text-dark flex items-center justify-center shrink-0">
                <MapPin size={18} className="text-accent" />
              </div>
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-dark/50 block mb-1 font-bold">
                  Location &amp; Timezone
                </span>
                <span className="font-heading font-bold text-lg text-dark block mb-0.5">
                  Lagos, Nigeria
                </span>
                <p className="font-sans text-xs text-dark/70 leading-relaxed">
                  West Africa Time (GMT+1). Flexible overlap with US, UK, and European timezones.
                </p>
              </div>
            </div>

            {/* Availability */}
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-accent text-surface flex items-center justify-center shrink-0">
                <Sparkles size={18} />
              </div>
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-dark/50 block mb-1 font-bold">
                  Engagement Status
                </span>
                <span className="font-heading font-bold text-lg text-dark block mb-0.5">
                  Available for Hire
                </span>
                <p className="font-sans text-xs text-dark/70 leading-relaxed">
                  Open for full-time roles, contract initiatives, and performance consulting.
                </p>
              </div>
            </div>
          </div>

          {/* Social Profiles & Résumé Actions */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex flex-wrap items-center gap-4">
              <span className="font-mono text-xs uppercase tracking-wider text-dark/50 font-bold">
                Professional Profiles:
              </span>
              <a
                href="https://linkedin.com/in/afeezonabekun"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-surface border border-dark/15 font-mono text-xs font-bold text-dark hover:text-accent hover:border-dark/30 transition-all shadow-xs"
              >
                <Linkedin size={14} />
                <span>LinkedIn</span>
                <ArrowUpRight size={12} className="opacity-60" />
              </a>
              <a
                href="https://github.com/Afeez07"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-surface border border-dark/15 font-mono text-xs font-bold text-dark hover:text-accent hover:border-dark/30 transition-all shadow-xs"
              >
                <Github size={14} />
                <span>GitHub</span>
                <ArrowUpRight size={12} className="opacity-60" />
              </a>
            </div>

            <a
              href="/afeez-onabekun-resume.pdf"
              download="Afeez_Onabekun_Resume.pdf"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-dark text-surface font-mono text-xs uppercase tracking-wider font-bold hover:bg-dark/85 transition-colors shadow-sm"
            >
              <Download size={15} />
              <span>Download Official Résumé</span>
            </a>
          </div>
        </div>
      </SlideUp>
    </div>
  );
}
