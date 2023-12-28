/** @type {import('tailwindcss').Config} */
export default {
  content: ["*"],
  theme: {
   
    fontFamily:{
      pop:"Poppins",
      urdu: '"noto "'
    },

    extend: {
      screens:{
        'md1':'790px',
        'lg1':'850px'
      },
      colors:{
        Yellow:"#facc15",
      },
    },
  },
  plugins: [],
}

