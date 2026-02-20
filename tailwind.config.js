/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: 'rgb(var(--color-bg) / <alpha-value>)',
        foreground: 'rgb(var(--color-fg) / <alpha-value>)',
        accent: 'rgb(var(--color-accent) / <alpha-value>)',
        muted: 'rgb(var(--color-muted) / <alpha-value>)',
        card: 'rgb(var(--color-card) / <alpha-value>)',
        border: 'rgb(var(--color-border) / <alpha-value>)',
      },
      fontFamily: {
        sans: [
          '"Microgramma Extd D"',
          '"Eurostile Extended"',
          'Montserrat',
          'system-ui',
          'sans-serif',
        ],
        display: [
          '"Microgramma Extd D"',
          '"Eurostile Extended"',
          'Montserrat',
          'system-ui',
          'sans-serif',
        ],
      },
      boxShadow: {
        soft: '0 18px 40px -30px rgb(0 0 0 / 0.45), 0 4px 14px rgb(0 0 0 / 0.08)',
        glow: '0 20px 60px -40px rgb(255 212 0 / 0.6)',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease-out both',
        'fade-in': 'fadeIn 0.8s ease-out both',
        float: 'float 8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
