/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      'sm': '475px',
      'md': '768px',
      'xl': '1280px'
    },
    extend: {
      backgroundImage: {
        '1': "url('../assets/bg-images/1.png')",
        '2': "url('../assets/bg-images/2.png')",
        '3': "url('../assets/bg-images/3.png')",
        '4': "url('../assets/bg-images/4.png')",
      },
      colors: {
        'primary': {
          DEFAULT: '#000051',
          'gr-begin': '#041080',
          'gr-end': '#0926C0',
        },
        'accent': {
          DEFAULT: '#969AF7',
          100: '#9195f7'
        },
      },
      listStyleImage: {
        checkmark: 'url(../assets/icons/icons8-checkmark.svg)'
      },
    },
  },
  plugins: [],
}