import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Home, Compass } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="px-6 lg:px-12 py-24 max-w-3xl mx-auto text-center flex flex-col items-center justify-center min-h-[60vh]">
      <span className="font-mono text-sm uppercase tracking-widest text-accent font-bold mb-4">
        ERROR 404 // ROUTE NOT FOUND
      </span>

      <h1 className="font-heading font-bold text-5xl sm:text-6xl lg:text-7xl tracking-tighter text-dark mb-6">
        Page Outside Index
      </h1>

      <p className="font-sans text-dark/75 text-base sm:text-lg max-w-lg mb-10 leading-relaxed">
        The requested URL does not exist or has been restructured in the editorial navigation. Use the links below to return to known coordinates.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-4">
        <Button href="/" variant="primary" size="lg" icon={<Home size={15} />}>
          Return to Homepage
        </Button>
        <Button href="/work" variant="secondary" size="lg" icon={<Compass size={15} />}>
          Browse Case Studies
        </Button>
      </div>
    </div>
  );
}
