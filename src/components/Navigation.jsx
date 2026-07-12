import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Menu, X } from 'lucide-react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

gsap.registerPlugin(ScrollTrigger);

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export default function Navigation() {
  const navRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        start: 'top -50',
        end: 99999,
        toggleClass: { className: 'nav-scrolled', targets: navRef.current },
      });
    }, navRef);
    return () => ctx.revert();
  }, []);

  const links = ['Work', 'Skills', 'Process', 'Contact'];

  return (
    <>
      <nav
        ref={navRef}
        className={cn(
          "fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 rounded-full px-6 py-4 flex items-center justify-between w-[90%] max-w-4xl",
          "bg-transparent text-dark border border-transparent",
          "[&.nav-scrolled]:bg-surface/80 [&.nav-scrolled]:backdrop-blur-xl [&.nav-scrolled]:border-dark/10 [&.nav-scrolled]:shadow-sm"
        )}
      >
        <div className="font-heading font-bold text-xl tracking-tighter">
          AO<span className="text-accent">.</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 font-sans font-medium text-sm">
          {links.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className="hover:text-accent transition-colors">
              {link}
            </a>
          ))}
        </div>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-base flex flex-col items-center justify-center gap-8 md:hidden">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="font-heading font-bold text-4xl hover:text-accent transition-colors"
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </>
  );
}
