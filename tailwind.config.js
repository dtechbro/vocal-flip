/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}"],
  enabled: process.env.NODE_ENV === 'production',
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