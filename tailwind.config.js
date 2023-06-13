/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': 'IBM Plex Sans Hebrew, sans-serif',
        'heading': 'Outfit, sans-serif'
      },
      colors: {
        'gray': '#7d7d7d',
        'black': '#0d0d0d',
        'charcoal': '#1c1c1c',
        'primary': '#0266ff'
      },
      boxShadow: {
        'blue-glow': 'inset 0 0 20px rgba(2, 102, 255, .28)'
      }
    },
  },
  plugins: [],
}