/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    screens: {
      'phone500': '500px',
      'phone550': '550px',
      'phone700': '700px',
      'phone850': '850px',
      'phone950': '950px',
      'phone1000': '1000px',
      'phone1200': '1200px',
    },
  },
  plugins: [],
}

