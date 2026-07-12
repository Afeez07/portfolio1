import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Github, Linkedin, Mail } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.contact-elem',
        { y: 40, opacity: 0 },
        {
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
          },
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out'
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <>
      <section className="py-24 bg-surfaceAlt border-y border-dark/10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="font-sans text-2xl md:text-3xl text-dark/80 leading-relaxed mb-6 italic">
            "Afeez doesn't just build dashboards, he builds tools that actually solve business bottlenecks. His hybrid skill set of data and dev is exactly what we needed."
          </p>
          <div className="font-mono text-sm uppercase tracking-wider text-dark">
            — Dimejesi Francisca, CEO of WebIz Innovation
          </div>
        </div>
      </section>

      <section id="contact" ref={containerRef} className="py-24 px-6 lg:px-16 max-w-7xl mx-auto text-center">
        <div className="flex flex-col items-center max-w-2xl mx-auto">
          <h2 className="contact-elem font-heading font-bold text-5xl md:text-7xl tracking-tighter mb-6">Let's Build Something</h2>
          <p className="contact-elem font-sans text-xl text-dark/70 mb-12">
            Available for full-time roles, contract work, and consulting.
          </p>

          <div className="contact-elem flex gap-4 justify-center mb-8">
            <a href="https://www.linkedin.com/in/afeez-onabekun" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-dark/20 flex items-center justify-center hover:bg-dark hover:text-white transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="https://github.com/Afeez07" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-dark/20 flex items-center justify-center hover:bg-dark hover:text-white transition-colors">
              <Github size={20} />
            </a>
            <a href="mailto:afeez.onabekun@gmail.com" className="w-12 h-12 rounded-full border border-dark/20 flex items-center justify-center hover:bg-dark hover:text-white transition-colors">
              <Mail size={20} />
            </a>
          </div>

          <a href="mailto:afeez.onabekun@gmail.com" className="contact-elem inline-block bg-accent text-white font-sans font-bold py-4 px-8 rounded-lg hover:bg-[#c22d21] transition-colors shadow-[4px_4px_0px_#111111] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#111111]">
            Send an Email
          </a>
        </div>
      </section>

      <footer className="py-8 text-center border-t border-dark/10">
        <p className="font-mono text-xs text-dark/50 uppercase tracking-widest">
          Afeez Onabekun • Data Analyst & Builder • {new Date().getFullYear()}
        </p>
      </footer>
    </>
  );
}
