/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'min-sm' : '428px',
        'md-sm' : '834px'
      },
      fontFamily : {
        "primary-font" : ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}