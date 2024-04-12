/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'leagueSpartan': ['League Spartan', 'sans-serif']
      },
      colors: {
        primary: {
          400: 'hsl(333, 80%, 67%)',
          700: 'hsl(300, 43%, 22%)',
        },
        neutral: {
          100: 'hsl(0, 0%, 100%)',
          200: 'hsl(300, 24%, 96%)',
          500: 'hsl(303, 10%, 53%)',
        },
      }
    },
  },
  plugins: [],
}