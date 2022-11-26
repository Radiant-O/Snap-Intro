/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        sm: '350px',
        md: '645px',
        lg: '1240px'
      }
    },
  },
  plugins: [],
}