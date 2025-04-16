/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: '#121212',
          100: '#171717',
          200: '#1e1e1e',
          300: '#2a2a2a',
          400: '#3a3a3a',
          500: '#4a4a4a',
          blue: '#3b82f6',
          text: '#e2e2e2',
          'text-muted': '#a3a3a3'
        }
      },
      boxShadow: {
        'dark': '0 10px 15px -3px rgba(0, 0, 0, 0.2), 0 4px 6px -2px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [],
} 