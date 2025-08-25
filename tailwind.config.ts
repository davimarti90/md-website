import type { Config } from 'tailwindcss'
const config: Config = {
  darkMode: ['class'],
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        mdDark: '#0B0B0E',
        mdGray: '#15181C',
        mdGold: '#E0B64A',
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(224,182,74,0.18), 0 6px 24px rgba(0,0,0,.45)'
      }
    },
    container: { center: true, padding: '1rem' }
  },
  plugins: [],
}
export default config
