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
        article_content: ["article_content"],
        post_title: ["post_title"],
        category_title: ["category_title"]
      },
      maxHeight : { 
        'img': "28rem" 
      },
      maxWidth : {  
        'img': "32rem"
      },
      minWidth : {  
        'post': "45rem"
      }
    },
    screens: {
      'cg': '1500px',
      'cg_single': '1356px',
      'cg_disappear': '1232px',
      'menu_disappear': '941px',
      'cg_post_disappear': '540px'
    }
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}
