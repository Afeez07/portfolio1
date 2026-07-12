import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Work from './components/Work';
import Skills from './components/Skills';
import Process from './components/Process';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-base text-dark">
      <Navigation />
      <Hero />
      <Work />
      <Skills />
      <Process />
      <Contact />
    </div>
  );
}
