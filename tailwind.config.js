/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        gradientStart: '#7c3aed',
        gradientMid: '#06b6d4',
        gradientEnd: '#06b6d4'
      },
    },
  },
  plugins: [],
}
