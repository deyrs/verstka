const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      gridTemplateRows: {
        'Layout': '1fr max-content 1fr',
      },
      width: {
        'Layout': 'min(385px, 100% - 2rem)',
      },
      boxShadow: {
        'userBoxShadow': 'black 8px 8px',
        'userBoxShadowHovered': 'black 12px 12px',
      }
    },
  },
  plugins: [
      plugin(function( { addVariant }) {
        addVariant('notLastChild', '&>:not(:last-child)')
      })
  ],
}