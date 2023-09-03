/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}"],
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      "./src/**/*.html",
      "./src/**/*.js", // Add other file paths as needed
    ],
  },
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