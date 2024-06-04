/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{html,js}',
    './pages/**/*.{html,js}',
  ],
  theme: {
    extend: {
      fontFamily: {
        melodrama: ['Melodrama', 'sans-serif'],
        archivo: ['Archivo', 'sans-serif'], 
        Tanker: ['Tanker', 'sans-serif'],
      },
    },
    colors: {
      white: '#ffffff',
      gray: {
        600: '#4B5563',
        800: '#1F2937',
      },
      red: {
        500: '#EF4444',
      },
    },
    spacing: {
      '4.5': '1.125rem',
    },
  },
  plugins: [
    {
      tailwindcss: {},
      autoprefixer: {},
    },
  ],
};

