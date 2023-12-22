/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mont: ['Montserrat', 'sans-serif'],
        exo: ["'Exo 2'", 'sans-serif'],
      },
      fontSize: {
        '5/2xl': '3.2rem',
        '4/5xl': '2.5rem',
      },
      textColor: {
        'lead': 'rgb(255 255 255 / 80%)',
        'lead-dark': '#565973'
      },
      backgroundImage: {
        'grad': 'linear-gradient(220deg, #8910a7 0%, #4349c5 100%)',
        'hovergrad': 'linear-gradient(220deg, #4349c5 0%, #b113d8 100%)'
      },
      backgroundColor: {
        'light': '#f3f6ff'
      },
      borderColor: {
        'btnsec': 'rgb(255 255 255 / 25%)'
      },
      borderWidth: {
        '1': '1px'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

