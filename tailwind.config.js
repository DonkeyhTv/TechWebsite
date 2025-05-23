export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Jost',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Arial',
          'sans-serif',
        ],
        jost: ['Jost', 'sans-serif'],
      },
      colors: {
        'oozami-darkblue': '#191c33',
        'oozami-lightblue': '#04BBFF',
        'oozami-black': '#060922',
      },
    },
  },
  plugins: [],
}
