/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'epilogue': ['Epilogue, sans-serif']
      },
      fontWeight: {
        neutral: 500,
        accent: 700
      },
      colors: {
        neutral: {
          50: 'hsl(0, 0%, 98%)',
          400: 'hsl(0, 0%, 41%)',
          700: 'hsl(0, 0%, 8%)'
        },
      },
      content: {
        'icon1': 'url("../images/icon-todo.svg")',
        'icon2': 'url("../images/icon-calendar.svg")',
        'icon3': 'url("../images/icon-todo.svg")',
        'icon4': 'url("../images/icon-todo.svg")',
      },
    },
  },
  plugins: [],
}

