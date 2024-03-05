/** @type {import('tailwindcss').Config} */




export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,css}",
  ],
  theme: {
    extend: {
      fontFamily: {
        exo2: ['Exo 2', 'sans-serif'],
        arvo: ['Arvo','sans-serif'],
        orbitron: ['Orbitron','sans-serif'],
        bebasNeue: ['Bebas Neue','sans-serif'],
        lato:['Lato','sans-serif'],
        openSan:['Open Sans','sans-serif'],
        montSerrat:['Montserrat','sans-serif'],
        inter:['Inter','sans-serif'],
        Poppins:['Poppins', 'sans-serif']

      },
      colors: {
        subBg:'#1f1f1f',
        PT:'#EEEEEE',
        ST:'#A7A6A6',
        Background:'#121212',
        CardPurple:'#BB86FC'
      }
       
      
    },
  },
  plugins: [],
}
const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        exo2: ['Exo 2', 'sans-serif'],
        arvo: ['Arvo','sans-serif'],
        orbitron: ['Orbitron','sans-serif'],
        bebasNeue: ['Bebas Neue','sans-serif'],
        lato:['Lato','sans-serif'],
        openSan:['Open Sans','sans-serif'],
        montSerrat:['Montserrat','sans-serif'],
        inter:['Inter','sans-serif'],
        Poppins:['Poppins', 'sans-serif']

      },
      colors: {
        subBg:'#1f1f1f',
        PT:'#EEEEEE',
        ST:'#A7A6A6',
        Background:'#121212',
        BackgroundWhite:'#FAFAFA',
        BackgroundSemiWhite:'#F4F4F4',
        BackgroundCardWhite:'#EDEDED',
        CardPurple:'#A878E2'
      }
    },
  },
  plugins: [],
});

