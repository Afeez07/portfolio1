import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Skills() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.skill-col', 
        { y: 50, opacity: 0 },
        {
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 75%',
          },
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out'
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const cols = [
    {
      title: "Data Analytics",
      tools: ["SQL", "Python", "Pandas", "NumPy", "Excel", "Google Sheets", "Tableau", "Power BI", "Looker Studio", "dbt", "Airbyte", "A/B Testing", "Cohort Analysis", "Forecasting"],
      desc: "I find the story in the numbers. From SQL queries to interactive dashboards, I turn messy data into clear decisions."
    },
    {
      title: "Vibe Coding",
      tools: ["Cursor AI", "Claude", "GPT-4", "Replit", "Bolt", "Lovable", "v0", "GitHub Copilot", "React", "Tailwind CSS", "Node.js", "Supabase"],
      desc: "I build MVPs and internal tools at the speed of thought — using AI-assisted development to go from idea to deployed app in days, not months."
    },
    {
      title: "Meta Ads",
      tools: ["Meta Ads Manager", "Campaign Structure", "Audience Targeting", "Creative Testing", "Pixel/CAPI", "ROAS Optimization", "Custom Reports", "Lookalikes", "Retargeting"],
      desc: "I don't just 'run ads.' I build measurement-first acquisition systems — every dollar tracked, every campaign iterated."
    }
  ];

  return (
    <section id="skills" ref={containerRef} className="py-24 bg-dark text-base">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <h2 className="font-heading font-bold text-4xl md:text-5xl tracking-tight mb-16 text-surface">How I Work</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {cols.map((col, i) => (
            <div key={i} className="skill-col">
              <h3 className="font-heading font-bold text-2xl mb-6 pb-4 border-b border-surfaceAlt/20 text-surface">{col.title}</h3>
              <p className="font-sans text-surfaceAlt/70 mb-8 min-h-[80px]">{col.desc}</p>
              <div className="flex flex-wrap gap-2">
                {col.tools.map(tool => (
                  <span key={tool} className="font-mono text-xs bg-surfaceAlt/10 border border-surfaceAlt/20 text-surfaceAlt px-3 py-1.5 rounded-sm hover:-translate-y-1 transition-transform duration-300 cursor-default">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
