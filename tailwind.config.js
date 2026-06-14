/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1a4d8c',
        secondary: '#c9a03d',
        accent: '#e67e22',
        dark: '#1e293b',
      },
    },
  },
  plugins: [],
}