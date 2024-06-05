/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./*.html', './assets/scripts/*.js'],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
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