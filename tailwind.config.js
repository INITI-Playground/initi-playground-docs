/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    fontFamily: {
      'sans': ['Nunito','-apple-system','BlinkMacSystemFont','Helvetica','Arial','sans-serif'],
      'serif': ['Nunito','-apple-system','BlinkMacSystemFont','Helvetica','Arial','sans-serif'],
      'mono': ['Roboto Mono','SFMono-Regular','Consolas','Menlo','monospace'],
    },
    extend: {
      colors: {
        'initi-light': '#0bbdff',
        'initi-dark': '#17479e',
      },
    },
  },
  plugins: [],
}

