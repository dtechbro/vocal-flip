/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./build/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#6366F1',
        body: '#E9E9E9'
      }
    },
  },
  plugins: [],
}