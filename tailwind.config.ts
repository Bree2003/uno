import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: 'var(--border)',
        input: 'var(--input)',
        ring: 'var(--ring)',
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: {
          DEFAULT: 'var(--primary)',
          foreground: 'var(--primary-foreground)',
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
          foreground: 'var(--secondary-foreground)',
        },
        morning: {
          DEFAULT: 'var(--morning)',
          foreground: 'var(--morning-foreground)',
        },
        noon: {
          DEFAULT: 'var(--noon)',
          foreground: 'var(--noon-foreground)',
        },
        night: {
          DEFAULT: 'var(--night)',
          foreground: 'var(--night-foreground)',
        },
        destructive: {
          DEFAULT: 'var(--destructive)',
          foreground: 'var(--destructive-foreground)',
        },
        muted: {
          DEFAULT: 'var(--muted)',
          foreground: 'var(--muted-foreground)',
        },
        accent: {
          DEFAULT: 'var(--accent)',
          foreground: 'var(--accent-foreground)',
        },
        popover: {
          DEFAULT: 'var(--popover)',
          foreground: 'var(--popover-foreground)',
        },
        card: {
          DEFAULT: 'var(--card)',
          foreground: 'var(--card-foreground)',
        },
      },
      backgroundImage: {
        'gradient-morning':
          'linear-gradient(-45deg, var(--mindsight-morning), var(--mindsight-primary))',
        'gradient-noon':
          'linear-gradient(-45deg, var(--mindsight-noon), var(--mindsight-primary))',
        'gradient-night':
          'linear-gradient(-45deg, var(--mindsight-night), var(--mindsight-primary))',
        'gradient-dynamic':
          'linear-gradient(-45deg, var(--gradient-animation-color), var(--mindsight-primary))',
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: 'calc(var(--radius) - 4px)',
      },
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans],
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'background-cycle': {
          '0%': {
            '--gradient-animation-color': 'var(--mindsight-morning)',
          },
          '33%': {
            '--gradient-animation-color': 'var(--mindsight-noon)',
          },
          '66%': {
            '--gradient-animation-color': 'var(--mindsight-night)',
          },
          '100%': {
            '--gradient-animation-color': 'var(--mindsight-morning)',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'background-cycle': 'background-cycle 16s linear infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
export default config;
