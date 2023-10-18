/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'nav': '#4F594A',
        'book-now': '#B5BFAAED',
        'button': '#687363F2',
        'test': '#9EA69438',
        'need': '#B5BFAAFC',
      },
    },
  },
  plugins: [],
}

