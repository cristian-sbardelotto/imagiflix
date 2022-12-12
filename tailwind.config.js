/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 0 50px 30px rgba(0, 0, 0, 0.7)'
      }
    },
  },
  plugins: [],
};
