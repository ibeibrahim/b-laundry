/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'blue-light': '#0999F0',
        'blue-dark': '#05588A',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'main': "url('/src/images/bg.jpeg')"
      }
    },
  },
  plugins: [],
}

// 

