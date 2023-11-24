/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
      },
      colors: {
        primary: '#db0404'
      },
      fontSize: {
        '2xs': '.625rem', // Your custom font size
      },
    },
  },
  plugins: [],
}
