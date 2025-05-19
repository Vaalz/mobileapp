 /** @type {import('tailwindcss').Config} */
export default {
   content: ["./src/**/*.{html,js}", "./*.html", "./Vitamin A/**/*.html"],


   theme: {
     extend: {
      fontFamily: {
        'pacifico': ['Pacifico', 'cursive']
      },
      colors: {
        primary: "#FFF500",
      },
     },
   },
   plugins: [],
 }