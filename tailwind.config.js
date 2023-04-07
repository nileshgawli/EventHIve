/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        secondary: '#96EF1D',
        dark: '#0C0E12',
        light: 'white',
        lightGray: '#a0a0a0'
        // lightGray: '#D7DAE4'

      },
      fontFamily: {
        sans: ['Kanit', 'sans-serif']
      },
      backgroundImage: {
        'hero': "url('/src/Images/main-bg.png')",
        'pattern': "url('/src/Images/loginbg.jpg')",
      },
    },
  },
  plugins: [],
}
