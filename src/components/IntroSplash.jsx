import React, { useState, useEffect, useRef } from 'react';

export default function IntroSplash({ onComplete }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const videoRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const videoSrc = isMobile ? '/Vid-2.mp4' : '/Vid-1.mp4';

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1.5; // Speeds up the video by 50%
    }
  }, [videoSrc]);

  return (
    <div className="fixed inset-0 z-[100] bg-dark flex items-center justify-center">
      <video
        ref={videoRef}
        key={videoSrc}
        src={videoSrc}
        autoPlay
        muted
        playsInline
        onEnded={onComplete}
        className="w-full h-full object-cover"
      />
      <button 
        onClick={onComplete}
        className="absolute bottom-8 right-8 md:bottom-12 md:right-12 text-white/80 hover:text-white z-10 font-sans text-xl md:text-2xl font-bold tracking-wide mix-blend-difference transition-all"
      >
        Skip Intro
      </button>
    </div>
  );
}
