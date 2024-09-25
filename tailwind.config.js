/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./routes/pages/*.js'],
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