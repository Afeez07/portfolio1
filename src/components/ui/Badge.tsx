import React from 'react';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'dark' | 'accent' | 'neutral' | 'outline' | 'green';
  size?: 'xs' | 'sm';
  children: React.ReactNode;
}

export default function Badge({
  variant = 'neutral',
  size = 'xs',
  children,
  className = '',
  ...props
}: BadgeProps) {
  const baseStyles =
    'inline-flex items-center font-mono uppercase tracking-wider font-semibold rounded';

  const sizeStyles = {
    xs: 'text-[10px] px-2 py-0.5',
    sm: 'text-xs px-2.5 py-1',
  };

  const variantStyles = {
    dark: 'bg-dark text-surface',
    accent: 'bg-accent text-surface',
    neutral: 'bg-surfaceAlt text-dark/80 border border-dark/10',
    outline: 'bg-transparent text-dark border border-dark/20',
    green: 'bg-green-600/15 text-green-800 border border-green-700/20',
  };

  return (
    <span
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}

