/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './styles/globals.css',
    "./node_modules/flowbite-react/**/*.js",
    './node_modules/@themesberg/flowbite/*/.js'
  ],
  theme: {
    extend: {
      fontFamily: {
        qs: ['Quicksand'],
        article_content: ["article_content"],
        post_title: ["post_title"],
        category_title: ["category_title"]
      },
      maxHeight: {
        'img': "28rem"
      },
      maxWidth: {
        'img': "32rem"
      },
      minWidth: {
        'post': "45rem"
      }
    },
    screens: {
      'cg_post_disappear': '540px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'menu_disappear': '941px',
      'cg_disappear': '1232px',
      'xl': '1280px',
      'cg_single': '1356px',
      'cg': '1500px',
      '2xl': '1536px',
    }
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}
