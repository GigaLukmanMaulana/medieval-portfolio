import type { Config } from "tailwindcss";

export default {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        parchment: '#f4e4bc',
        'parchment-dark': '#e8d4a0',
        leather: '#2c1810',
        gold: '#c9a227',
        'gold-light': '#e8c547',
        'gold-dark': '#9a7a1c',
        crimson: '#8b1a1a',
        'crimson-light': '#b02222',
        ink: '#1a0f0a',
        stone: '#6b6560',
        forest: '#2d5016',
        obsidian: '#0f0a06',
        ember: '#1c1008',
      },
      fontFamily: {
        cinzel: ['var(--font-cinzel)', 'serif'],
        'cinzel-deco': ['var(--font-cinzel-deco)', 'serif'],
        garamond: ['var(--font-garamond)', 'serif'],
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      animation: {
        shimmer: 'shimmer 3s infinite linear',
        float: 'float 3s ease-in-out infinite',
      }
    },
  },
  plugins: [],
} satisfies Config;
