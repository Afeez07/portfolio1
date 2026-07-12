import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.hero-elem',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.1,
          ease: 'power3.out',
          delay: 0.2
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const stats = [
    { label: "Dashboards Built", value: "10+" },
    { label: "Ad Spend Managed", value: "$500K+" },
    { label: "Avg. ROAS", value: "4.2x" },
    { label: "Tools in Stack", value: "12+" },
  ];

  return (
    <section ref={containerRef} className="relative min-h-[100dvh] w-full flex flex-col md:flex-row items-center pt-24 pb-12 px-6 lg:px-16 overflow-hidden max-w-7xl mx-auto">
      {/* Left Content (60%) */}
      <div className="w-full md:w-[60%] flex flex-col items-start z-10 pt-12 md:pt-0">
        <p className="hero-elem font-mono text-sm tracking-[0.2em] uppercase text-dark/70 mb-6">
          Data Analyst • Vibe Coder • Meta Ads Specialist
        </p>

        <h1 className="hero-elem font-heading font-bold text-6xl md:text-7xl lg:text-8xl leading-[1.1] tracking-tighter mb-8">
          Afeez Onabekun <br />
          <span className="font-normal opacity-80 text-5xl md:text-6xl lg:text-7xl">analyzes data.</span><br />
          <span className="font-light opacity-60 text-4xl md:text-5xl lg:text-6xl">Builds with AI.</span><br />
          <span className="font-extralight opacity-50 text-3xl md:text-4xl lg:text-5xl inline-block mt-2">
            <span className="relative">
              Scales
              <span className="absolute bottom-0 left-0 w-full h-[3px] bg-accent"></span>
            </span> with paid ads.
          </span>
        </h1>

        <div className="hero-elem flex flex-wrap gap-4 mb-16">
          <a href="#work" className="group flex items-center gap-2 bg-dark text-white px-8 py-3.5 rounded-full font-sans font-medium transition-all hover:bg-dark/80 focus-visible:ring-2 focus-visible:ring-dark focus-visible:ring-offset-2 focus-visible:outline-none">
            View My Work
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Stats Row */}
        <div className="hero-elem grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
          {stats.map((stat, i) => (
            <div key={i} className="bg-surface/50 backdrop-blur-sm border border-dark/10 rounded-2xl p-4 flex flex-col justify-center">
              <span className="font-mono font-bold text-2xl text-dark tracking-tighter mb-1">{stat.value}</span>
              <span className="font-mono text-[10px] uppercase tracking-wider text-dark/60">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Right Content (40%) */}
      <div className="hidden md:flex w-[40%] h-[600px] relative justify-center items-center">
        <div className="absolute inset-0 bg-surfaceAlt/30 rounded-full blur-[100px]"></div>
        <div className="relative w-full h-full flex items-center justify-center p-8 hero-elem">
          <div className="relative w-full max-w-sm aspect-[3/4] group">
             {/* Brutalist Shadow/Offset */}
             <div className="absolute inset-0 bg-accent translate-x-4 translate-y-4 rounded-xl border-2 border-dark transition-transform group-hover:translate-x-6 group-hover:translate-y-6"></div>
             {/* Image */}
             <img src="/afeez.jpg" alt="Afeez Onabekun" className="relative z-10 w-full h-full object-cover rounded-xl border-2 border-dark grayscale hover:grayscale-0 transition-all duration-500" />
          </div>
        </div>
      </div>
    </section>
  );
}

function MotifGrid() {
  return (
    <div className="grid grid-cols-5 gap-4 opacity-40">
      {[...Array(25)].map((_, i) => (
        <div
          key={i}
          className={`w-3 h-3 rounded-full ${[7, 12, 17].includes(i) ? 'bg-accent shadow-[0_0_15px_rgba(230,59,46,0.8)] animate-pulse' : 'bg-dark'}`}
        ></div>
      ))}
    </div>
  );
}
