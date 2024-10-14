/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/componet/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        textblackcolor: "#09090B", //text-black
        textsecondarycolor: "#71717A", // text-secondary
        textbgcolor: "#FAFAFA", //text-bg white color or text color
        bgcolored: "#F26922", // orange bg color or text color
        headerbg: "#E4E4E780", // headerbg  color or text color
      },
      fontFamily: {
        onest: ["Onest", "sans-serif"],
      },
    },
  },
  plugins: [],
};
