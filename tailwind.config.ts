import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // C5 Elite × Delano palette — light brown / beige / champagne / espresso
        // Hotel boutique luxury aesthetic
        sand: {
          50: '#fdfaf3',  // soft ivory background
          100: '#f9f3e6', // cream
          200: '#f2e7d0', // warm beige
          300: '#e8d6b3',
          400: '#d9bd8a',
          500: '#c8a878', // champagne primary
          600: '#b08c5d',
          700: '#8e6e48',
          800: '#6e5538',
          900: '#4a3724',
        },
        espresso: {
          50: '#f5f1eb',
          100: '#e8dfd1',
          200: '#cfbea7',
          300: '#a8916f',
          400: '#7a6448',
          500: '#5a4632',
          600: '#3f3022',
          700: '#2a1f17',
          800: '#1a130d', // primary deep espresso
          900: '#0d0805',
        },
        champagne: {
          50: '#fbf8f1',
          100: '#f5ecd9',
          200: '#ead9b3',
          300: '#dec487',
          400: '#d2af66',
          500: '#c79a4d', // primary gold
          600: '#a8813f',
          700: '#876632',
          800: '#5e4623',
          900: '#352816',
        },
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.25em',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'slide-in': 'slideIn 0.5s ease-out forwards',
        'scale-in': 'scaleIn 0.3s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.96)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
