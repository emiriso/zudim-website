/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#7C623F',
        obsidian: '#1C1B1A',
        turquoise: '#40E0D0',
        verdant: '#2F7F59',
        sandstone: '#C2A773',
        fg: '#F5F2ED',
        mutedfg: '#C8C4BD',
        mutedbg: '#2A2927'
      }
    }
  },
  plugins: []
}
