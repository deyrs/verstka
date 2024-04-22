/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      'sm': '510px',
      'md': '690px',
      'lg': '1132px'
    },
    colors: {
      'primary': {
        0: '#F4F6F5',
        100: '#D4E8D9',
        200: '#598D66',
        300: '#376B44',

        700: '#C3D1C6',
        800: '#86928B',
        900: '#2C2D35',
      },
      'accent': {
        100: '#FAEB97',
        200: '#EEDB6D',
        300: '#D9B949',
        400: '#A38314',
      }
    },

    extend: {
      backgroundImage: {
        'announce-section-bg-image': "url(../assets/announce-section-bg-image.png)",
      }
    },
  },
  plugins: [],
}

