/** @type {import('tailwindcss').Config} */
export default {
content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/componet/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        textblackcolor:"#09090B",
        textsecandcolor:"#71717A",
        bgcolor:"#FAFAFA",
        bgcolored:"#F26922"
      },
      fontFamily:{
        onest:["Onest", 'sans-serif']
      }
    },
  },
  plugins: [],
}

