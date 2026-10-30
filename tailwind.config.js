/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#F5F3EE",
        dark: "#111111",
        accent: "#E63B2E",
        surface: "#FFFFFF",
        surfaceAlt: "#E8E4DD",
      },
      fontFamily: {
        sans: ['var(--font-sans)', '"DM Sans"', 'sans-serif'],
        heading: ['var(--font-heading)', '"Space Grotesk"', 'sans-serif'],
        mono: ['var(--font-mono)', '"Space Mono"', 'monospace'],
      },
      letterSpacing: {
        tightest: '-.075em',
        tighter: '-.05em',
        tight: '-.025em',
        normal: '0',
        wide: '.025em',
        wider: '.05em',
        widest: '.25em',
      }
    },
  },
  plugins: [],
};
