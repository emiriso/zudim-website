/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bronze: '#7C623F',
        obsidian: '#1C1B1A',
        turquoise: '#40E0D0',
        lapis: '#20619C',
        verdant: '#2F7F59',
        sandstone: '#C2A773',
        clay: '#F4F2EE'
      }
    }
  },
  plugins: []
}
