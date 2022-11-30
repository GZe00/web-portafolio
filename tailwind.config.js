/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gradient-yellow-blue': 'linear-gradient(90deg, rgba(0,164,255,1) 0%, rgba(238,224,10,1) 14%, rgba(244,210,87,1) 27%, rgba(167,174,6,1) 45%, rgba(192,232,2,1) 74%, rgba(22,160,255,1) 99%)'
      }
    },
  },
  plugins: [],
}