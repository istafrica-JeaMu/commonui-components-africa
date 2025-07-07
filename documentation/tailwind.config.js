/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './docs/**/*.md',
    './icon-gallery/**/*.md',
    './src/**/*.{vue,js,ts}',
    '../lib/src/**/*.{vue,js,ts}',
    './.vitepress/theme/**/*.{vue,js,ts}',
  ],
  theme: {
    extend: {
      keyframes: {
        fade: {
          '0%': { opacity: 1 },
          '50%': { opacity: 0.4 },
          '100%': { opacity: 1 },
        },
        pulse: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(0.85)' },
          '100%': { transform: 'scale(1)' },
        },
        pulseX: {
          '0%': { transform: 'scaleX(1)' },
          '50%': { transform: 'scaleX(0.75)' },
          '100%': { transform: 'scaleX(1)' },
        },
        pulseY: {
          '0%': { transform: 'scaleY(1)' },
          '50%': { transform: 'scaleY(0.75)' },
          '100%': { transform: 'scaleY(1)' },
        },
        wave: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        wave: 'wave 1.5s linear 0.5s infinite',
        fade: 'fade 1.5s linear 0.5s infinite',
        pulse: 'pulse 1.5s linear 0.5s infinite',
        pulseX: 'pulseX 1.5s linear 0.5s infinite',
        pulseY: 'pulseY 1.5s linear 0.5s infinite',
      },
    },
  },
  plugins: [],
}; 