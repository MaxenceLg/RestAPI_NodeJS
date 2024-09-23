/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./routes/page/*.js'],
  theme: {
    extend: {},
  },
  plugins: [
    {
      tailwindcss: {},
      autoprefixer: {},
    },
  ],
};