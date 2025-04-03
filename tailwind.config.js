/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
      "./index.html"
    ],
    theme: {
      extend: {
        colors: {
          ember: {
            primary: '#FF8131',
            secondary: '#FF914D',
            dark: '#2A2A2A',
            light: '#FDF5F0',
          }
        }
      },
    },
    plugins: [],
  }