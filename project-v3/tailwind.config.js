/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["*.{html,js}"],
  theme: {
    extend: {},
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
  ],
}
