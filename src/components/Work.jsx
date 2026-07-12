import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, ExternalLink } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Work() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.project-card', 
        { y: 60, opacity: 0 },
        {
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
          },
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.15,
          ease: 'power3.out',
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const projects = [
    {
      title: "Fashion Mansion Scaling",
      category: "Meta Ads",
      catColor: "bg-green-100 text-green-800",
      desc: "Scaled daily ad spend with predictable ROAS for a fashion brand.",
      metric: "1,579 Purchases (₦5.7M Spend)",
      tools: ["Meta Ads", "CAPI", "A/B Testing"],
      image: "/project-1.jpg",
      featured: true
    },
    {
      title: "Covid-19 Global Analysis",
      category: "Data Analytics",
      catColor: "bg-blue-100 text-blue-800",
      desc: "Comprehensive data exploration and visualization of pandemic impact.",
      metric: "Actionable Global Insights",
      tools: ["SQL", "Tableau", "Python"],
      image: "/project-2.jpg",
      link: "https://github.com/Afeez07/Covid-19-Project"
    },
    {
      title: "SaaS Client Dashboard",
      category: "Vibe Coding",
      catColor: "bg-purple-100 text-purple-800",
      desc: "Full-stack dashboard application built at the speed of thought.",
      metric: "Rapid MVP Deployment",
      tools: ["React", "AI Tooling", "Tailwind"],
      image: "/project-3.jpg",
      link: "https://saas-client-dashboard.netlify.app/"
    },
    {
      title: "Naija AFCON Analytics",
      category: "Data Analytics",
      catColor: "bg-blue-100 text-blue-800",
      desc: "Statistical breakdown of tournament performance and player metrics.",
      metric: "Sports Data Visualization",
      tools: ["Python", "Pandas", "Matplotlib"],
      image: "/project-4.jpg",
      link: "https://github.com/Afeez07/Naija-Afcon"
    },
    {
      title: "Hydrogeology Services",
      category: "Vibe Coding",
      catColor: "bg-purple-100 text-purple-800",
      desc: "Professional web presence for SW Drill drilling solutions.",
      metric: "High-Performance UI",
      tools: ["React", "Vite", "Tailwind"],
      image: "/project-5.jpg",
      link: "https://swdrill.vercel.app/"
    },
    {
      title: "High-Volume Lead Gen",
      category: "Meta Ads",
      catColor: "bg-green-100 text-green-800",
      desc: "Optimized campaign structure driving massive messaging volume.",
      metric: "8,947 Leads (₦13.6M Spend)",
      tools: ["CBO", "Lookalikes", "Retargeting"],
      image: "/project-6.jpg",
      featured: true
    }
  ];

  return (
    <section id="work" ref={containerRef} className="py-24 px-6 lg:px-16 max-w-7xl mx-auto">
      <div className="mb-16">
        <p className="font-mono text-sm tracking-widest text-dark/60 uppercase mb-4">// CASE STUDIES</p>
        <h2 className="font-heading font-bold text-4xl md:text-5xl tracking-tight">Selected Work</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 masonry-grid">
        {projects.map((p, i) => (
          <div key={i} className={`project-card opacity-0 group bg-surface border border-dark/10 rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-1 ${p.featured ? 'md:col-span-2' : ''}`}>
            <div className="scan-line h-64 md:h-80 w-full overflow-hidden bg-surfaceAlt relative">
              <img src={p.image} alt={p.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="p-8">
              <div className="flex items-center justify-between gap-3 mb-4">
                <span className={`text-[10px] font-mono uppercase px-2 py-1 rounded-sm ${p.catColor}`}>
                  {p.category}
                </span>
                {p.link && (
                  <a href={p.link} target="_blank" rel="noreferrer" className="text-dark/50 hover:text-accent transition-colors flex items-center gap-1 font-sans text-sm font-semibold">
                    <ExternalLink size={16} /> View
                  </a>
                )}
              </div>
              <h3 className="font-heading font-bold text-2xl mb-3">{p.title}</h3>
              <p className="font-sans text-dark/70 mb-6">{p.desc}</p>
              
              <div className="flex flex-col gap-4 mb-6">
                <div className="font-mono text-xl font-bold group-hover:text-accent transition-colors duration-300">
                  {p.metric}
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {p.tools.map(tool => (
                  <span key={tool} className="font-mono text-[10px] bg-surfaceAlt px-2 py-1 rounded border border-dark/5">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
