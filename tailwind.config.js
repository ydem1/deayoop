/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      blue: '#2177b31a',
      black: '#212325',
      white: '#fcfcfc',
      darkBlue: '#0d3450',
      grey: '#eaeaea',
      borderOffer: '#0000004d',
    },
    container: {
      center: true,
      padding: '1rem',
      screens: {
        xl: '1226px',
      }
    },
    extend: {
      fontFamily: {
        'raleway': ['Raleway', 'sans-serif'],
      },
      backgroundImage: {
        'logo': "url('/img/logo/logo.png')",
        'poster': "url('/img/poster/poster.png')",
      },
    },
  },
  plugins: [],
}