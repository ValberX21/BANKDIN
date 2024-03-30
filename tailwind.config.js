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
        'subBg':'#1f1f1f',
        'PT':'#EEEEEE',
        'ST':'#A7A6A6',
        'Background':'#121212',
        'GreenTheme':'#32a852',
        'CardTheme':'#1f1f1f',

        'white-fb': '#fbfbfb',
        'white-fc': '#fcfcfc',
        'white-fd': '#fdfdfd',
        'white-fe': '#fefefe',
        'white': '#ffffff', // Tailwind already has 'white' but we can redefine it if necessary

        // Lighter Grays
        'gray-43': '#434343',
        'gray-yellowish': '#6a5708',
        'gray-orangeish': '#705504',
        'gray-brownish': '#725700',
        'gray-oliveish': '#69550c',

        // Darker Grays
        'gray-c3': '#c3c3c3',
        'gray-c4': '#c4c4c4',
        'gray-c5': '#c5c5c5',
        'gray-c6': '#c6c6c6',
        'gray-c7': '#c7c7c7',

        // Shadows
        'shadow-teal-dark': '#0c1512',
        'shadow-very-dark': '#0d1313',
        'shadow-deep': '#0e1213',
        'shadow-olive-dark': '#0e180d',
        'shadow-contrast': '#0f1014',

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
        'subBg':'#1f1f1f',
        'PT':'#EEEEEE',
        'ST':'#A7A6A6',
        'Background':'#121212',
        'BackgroundWhite':'#FAFAFA',
        'BackgroundSemiWhite':'#F4F4F4',
        'BackgroundCardWhite':'#EDEDED',
        'GreenTheme':'#32a852',
        'CardTheme':'#1f1f1f',
        'bg':'#080808',

        'white-fb': '#fbfbfb',
        'white-fc': '#fcfcfc',
        'white-fd': '#fdfdfd',
        'white-fe': '#fefefe',
        'white': '#ffffff', // Tailwind already has 'white' but we can redefine it if necessary

        // Lighter Grays
        'gray-43': '#434343',
        'gray-yellowish': '#6a5708',
        'gray-orangeish': '#705504',
        'gray-brownish': '#725700',
        'gray-oliveish': '#69550c',

        // Darker Grays
        'gray-c3': '#c3c3c3',
        'gray-c4': '#c4c4c4',
        'gray-c5': '#c5c5c5',
        'gray-c6': '#c6c6c6',
        'gray-c7': '#c7c7c7',

        // Shadows
        'shadow-teal-dark': '#0c1512',
        'shadow-very-dark': '#0d1313',
        'shadow-deep': '#0e1213',
        'shadow-olive-dark': '#0e180d',
        'shadow-contrast': '#0f1014',
      }
    },
  },
  plugins: [],
});

