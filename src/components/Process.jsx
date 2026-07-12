import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Search, Database, Terminal, TrendingUp } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Process() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 70%',
        }
      });
      
      tl.fromTo('.process-step', 
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out'
        }, 
        0
      );

      tl.fromTo('.process-connector', 
        { scaleX: 0, transformOrigin: 'left' },
        { scaleX: 1, duration: 1.5, ease: 'power2.inOut' },
        0.2
      );

    }, containerRef);
    return () => ctx.revert();
  }, []);

  const steps = [
    { title: "Ask the Right Question", icon: Search, desc: "Discovery & hypothesis formation." },
    { title: "Query & Visualize", icon: Database, desc: "SQL, Python, dashboards." },
    { title: "Build the Solution", icon: Terminal, desc: "AI-powered development." },
    { title: "Scale with Ads", icon: TrendingUp, desc: "Paid acquisition & optimization." },
  ];

  return (
    <section id="process" ref={containerRef} className="py-24 px-6 lg:px-16 max-w-7xl mx-auto overflow-hidden">
      <h2 className="font-heading font-bold text-4xl md:text-5xl tracking-tight mb-20 text-center md:text-left">From Question to Revenue</h2>
      
      <div className="relative">
        {/* Horizontal Connector Line for Desktop */}
        <div className="hidden md:block absolute top-8 left-12 right-12 h-[2px] bg-dark/10 z-0"></div>
        <div className="process-connector hidden md:block absolute top-8 left-12 right-12 h-[2px] bg-accent z-0"></div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={i} className="process-step flex flex-col items-center md:text-center text-center">
                <div className="w-16 h-16 bg-surface border-2 border-dark rounded-full flex items-center justify-center mb-6 shadow-[4px_4px_0px_#111111] transition-transform hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#111111] bg-white">
                  <Icon size={24} className="text-accent" />
                </div>
                <div className="font-mono text-sm tracking-widest text-dark/50 mb-2">STEP 0{i + 1}</div>
                <h3 className="font-heading font-bold text-xl mb-3">{step.title}</h3>
                <p className="font-sans text-dark/70 text-sm max-w-[200px]">{step.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
