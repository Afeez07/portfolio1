'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'accent' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  isExternal?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  children: React.ReactNode;
}

export default function Button({
  variant = 'primary',
  size = 'md',
  href,
  isExternal = false,
  icon,
  iconPosition = 'right',
  children,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center font-mono uppercase tracking-wider font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dark disabled:opacity-50 disabled:pointer-events-none';

  const sizeStyles = {
    sm: 'text-[11px] px-3.5 py-1.5 rounded-lg gap-1.5',
    md: 'text-xs px-5 py-2.5 rounded-xl gap-2',
    lg: 'text-xs px-7 py-3.5 rounded-xl gap-2.5',
  };

  const variantStyles = {
    primary:
      'bg-dark text-surface hover:bg-dark/85 shadow-sm active:translate-y-0.5',
    accent:
      'bg-accent text-surface shadow-[3px_3px_0px_#111111] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_#111111] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none',
    secondary:
      'bg-surface text-dark border border-dark/15 hover:bg-surfaceAlt hover:border-dark/30 shadow-sm active:translate-y-0.5',
    outline:
      'bg-transparent text-dark border border-dark/25 hover:bg-dark hover:text-surface',
    ghost:
      'bg-transparent text-dark hover:bg-dark/5 text-dark/80 hover:text-dark',
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
      {isExternal && !icon && <ArrowUpRight size={13} className="shrink-0 opacity-70" />}
    </>
  );

  if (href) {
    if (isExternal || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('http')) {
      return (
        <a
          href={href}
          target={isExternal ? '_blank' : undefined}
          rel={isExternal ? 'noopener noreferrer' : undefined}
          className={combinedClasses}
        >
          {content}
        </a>
      );
    }

    return (
      <Link href={href} className={combinedClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {content}
    </button>
  );
}

