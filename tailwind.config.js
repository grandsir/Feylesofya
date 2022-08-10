/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    "./node_modules/flowbite-react/**/*.js",
    './node_modules/@themesberg/flowbite/*/.js'
  ],
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato"],
        post_title: ["Post"]
      },
      maxHeight : { 
        'img': "28rem" 
      },
      maxWidth : { 
        'img': "32rem"
      }
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}
