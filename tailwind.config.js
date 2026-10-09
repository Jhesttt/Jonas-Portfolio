/** @type {import('tailwindcss').Config} */

// Every colour comes from a CSS variable (see src/styles/index.css) so light/dark
// theming is one class on <html>. Channels are space-separated RGB so opacity
// modifiers like `bg-accent/20` work.
const token = (name) => `rgb(var(--${name}) / <alpha-value>)`

export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: token('bg'),
        elevated: token('bg-elevated'),
        ink: token('text'),
        muted: token('text-muted'),
        accent: token('accent'),
        'accent-contrast': token('accent-contrast'),
        secondary: token('secondary'),
        line: token('border'),
      },
      fontFamily: {
        display: ['"Instrument Serif"', 'ui-serif', 'Georgia', 'serif'],
        sans: ['Geist', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        page: '88rem',
      },
      letterSpacing: {
        eyebrow: '0.18em',
      },
      transitionTimingFunction: {
        out: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
}
