'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import Button from '@/components/ui/Button';

const navItems = [
  { name: 'Work', href: '/work' },
  { name: 'Services', href: '/services' },
  { name: 'About', href: '/about' },
  { name: 'Résumé', href: '/resume' },
  { name: 'Insights', href: '/insights' },
  { name: 'Contact', href: '/contact' },
];

export default function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 lg:px-12 ${
          isScrolled
            ? 'bg-[#F5F3EE]/95 backdrop-blur-md border-b border-dark/10 shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            href="/"
            aria-label="Afeez Onabekun Home"
            className="group flex items-center gap-1.5 font-heading font-bold text-2xl tracking-tighter text-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dark rounded"
          >
            <span>Afeez Onabekun</span>
            <span className="w-2 h-2 rounded-full bg-accent group-hover:scale-125 transition-transform" />
          </Link>

          {/* Desktop Navigation */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-1 bg-surface/85 backdrop-blur-sm border border-dark/10 rounded-full px-3 py-1.5 shadow-sm"
          >
            {navItems.map((item) => {
              const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? 'page' : undefined}
                  className={`relative px-4 py-1.5 rounded-full text-xs uppercase tracking-wider font-mono font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dark ${
                    isActive
                      ? 'text-surface bg-dark shadow-sm'
                      : 'text-dark/75 hover:text-dark hover:bg-dark/5'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Quick CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <Button href="/contact" variant="accent" size="sm">
              Get in Touch
            </Button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            className="md:hidden w-10 h-10 rounded-xl border border-dark/15 flex items-center justify-center bg-surface text-dark shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dark"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div
          id="mobile-navigation"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Drawer"
          className="fixed inset-0 z-40 bg-base flex flex-col justify-between p-8 pt-28 md:hidden animate-in fade-in duration-200"
        >
          <div className="flex flex-col gap-4">
            <span className="font-mono text-xs uppercase tracking-widest text-dark/40 mb-2">
              Navigation Menu
            </span>
            {navItems.map((item) => {
              const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? 'page' : undefined}
                  onClick={() => setIsOpen(false)}
                  className={`font-heading font-bold text-3xl tracking-tight transition-colors flex items-center justify-between ${
                    isActive ? 'text-accent' : 'text-dark hover:text-accent'
                  }`}
                >
                  <span>{item.name}</span>
                  {isActive && <span className="font-mono text-sm tracking-normal">●</span>}
                </Link>
              );
            })}
          </div>

          <div className="pt-8 border-t border-dark/10 flex flex-col gap-4">
            <div className="font-mono text-xs text-dark/70">
              afeez.onabekun@gmail.com
            </div>
            <Button
              href="/contact"
              variant="primary"
              size="lg"
              className="w-full text-center"
              onClick={() => setIsOpen(false)}
            >
              Start a Conversation
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
