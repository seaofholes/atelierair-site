import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        atelier: {
          white: '#FAFAF8',
          black: '#0A0A0A',
          gray: '#8A8A88',
          warm: '#C8B99A',
          'gray-light': '#E8E8E6',
        },
      },
      fontFamily: {
        sans: ['var(--font-noto-sans-jp)', 'sans-serif'],
        en: ['var(--font-inter)', 'sans-serif'],
        mono: ['var(--font-ibm-plex-mono)', 'IBM Plex Mono', 'Courier New', 'monospace'],
      },
      letterSpacing: {
        'wider-jp': '0.12em',
        'widest-en': '0.25em',
        'ultra': '0.35em',
      },
      lineHeight: {
        'relaxed-jp': '2.0',
        'loose-jp': '2.2',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
      },
    },
  },
  plugins: [],
}

export default config
