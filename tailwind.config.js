/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  content: [],
  theme: {
    extend: {
      colors: {
        'main': '#FF206E',
        'darkShade': '#001514',
        'darkAccent': '#C2D076',
        'lightShade': '#FFE1EA',
        'lightAccent': '#3772FF',
        'tGrey': 'rgba(0, 0, 0, 0.5)',
        'navDark' : '#CC1A57',
        'transMain': 'rgba(255, 32, 110, 0.4)'
      },
      backgroundColor: theme => ({
        ...theme('colors'),
      }),
      fontFamily: {
        'raleway': ['Raleway', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
      },
      width: {
        '15': '3.75rem',
        '1.5': '0.375rem',
        '30': '7.5rem',
      },
      height: {
        '15': '3.75rem',
        '20': '5rem',
        '1.5': '0.375rem',
        '50': '12.5rem',
        '30': '7.5rem',
      },
      margin: {
        '35': '8.2rem',
        '50': '12.5rem',
      },
    },
  },
  plugins: [],
}

