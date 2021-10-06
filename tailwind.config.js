const colors = require('tailwindcss/colors')


module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: {
          450: '#7F7F7F'
        },
      },
      flexGrow:{
        'custom':0.1
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
