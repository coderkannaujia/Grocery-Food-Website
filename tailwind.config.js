/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs':'480px',

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors:{
         
        primary:"#E83667",
        primaryDark:"#BB2C51",
        secondary:"#21D4B9",
        dark:"#303030"
      },
       fontFamily:{
         inter:["Inter","sans-serif"],
         cursive:["Ephesis","Cursive"],
       },
       container:{
        center:true,
        padding:{

          DEFAULT:"1rem",
          sm:"2rem",
          md:"1rem",
          lg:"3rem",
          xl:"4rem"
        },
        
       },
    },
  },
  plugins: [],
}

