/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./js/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
      },
      colors: {
        'esblack': '#121212',
        'light-white': '#999',
        'coral-500': '#FF7F50',
        'deeppink': '#FF1493',
        'esnavy': '#242938',
      },
        fontSize: {
          'xs': '0.8rem', // Custom extra-small size
          'sm': '0.9rem',
          'base': '1rem',
          'lg': '1.125rem',
          'xl': '1.25rem',
          '2xl': '1.5rem',
          '3xl': '1.875rem',
          '4xl': '2.25rem',
          '5xl': '3rem',
          '6xl': '4rem',
        },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};