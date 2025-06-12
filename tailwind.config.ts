import type {Config} from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        headline: ['Space Grotesk', 'sans-serif'], // Primary headline font
        body: ['Inter', 'sans-serif'], // Primary body font
        orbitron: ['Orbitron', 'sans-serif'], // As per design system for headings (can be used selectively)
        poppins: ['Poppins', 'sans-serif'], // As per design system for body (can be used selectively)
        code: ['monospace'],
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
        'neon-pink': '#E90064',
        'highlight-yellow': '#FFD93D',
        'midnight-blue': '#060047', // Primary
        'hot-pink': '#B3005E', // Accent
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
        'hero-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(233, 0, 100, 0.3), 0 0 30px rgba(255, 217, 61, 0.2)' },
          '50%': { boxShadow: '0 0 30px rgba(233, 0, 100, 0.5), 0 0 40px rgba(255, 217, 61, 0.3)' },
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'hero-glow': 'hero-glow 5s ease-in-out infinite alternate',
      },
      boxShadow: {
        'neon-pink-yellow': '0 0 15px 2px theme(colors.neon-pink/50%), 0 0 8px 0px theme(colors.highlight-yellow/50%)',
      }
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
