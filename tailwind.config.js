/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./*.html', './assets/scripts/*.js'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        melodrama: ['Melodrama', 'sans-serif'],
        archivo: ['Archivo', 'sans-serif'], 
        tanker: ['Tanker', 'sans-serif'],
      },
      colors: {
        RED: 'rgb(199, 40, 51)',
        fondo: 'rgb(255, 255, 255)',
        bg__capa: 'rgb(0, 0, 0, 0.6)',  
        bg__capa2: 'rgb(0, 0, 0, 0.8)',
      },
      spacing: {
        '4.5': '1.125rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    ],
};