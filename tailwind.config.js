/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  darkMode:"class",
  theme: {
    extend: {      colors: {
      'regal-blue': '#243c5a',
    },
    fontFamily:{
      playfair:"'Playfair Display', serif",
      lato:"'Lato', sans-serif"
    }
},
  },
  plugins: [],
}

