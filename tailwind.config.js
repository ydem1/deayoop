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
      borderShadow: '#0000004d',
      ligthBlue: '#2177b380',
      error: '#e53f3f',
      success: '#40ff00',
    },
    container: {
      center: true,
      padding: '1rem',
      box: 'border',
      screens: {
        xl: '1194px',
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