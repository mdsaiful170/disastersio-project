/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
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
        navlinkcolor: "#A1A1AA", // navlink text color
        textbgcolor: "#FAFAFA", //text-bg white color or text color
        bgcolored: "#F26922", // orange bg color or text color
        headerbg: "#E4E4E780", // headerbg  color or text color
        bordercolor: "#3F3F46", //header border color

        //dark colors
        bgcolorgreen: "#19362D",
        darkbgcolor: "#171212",
        darktextdipcolor: "#CBC9C9",
        darktextcolor: "#868383",
        darkcofeecolor: "#292424",
        darkgreencolor: "#19362D",
      },
      fontFamily: {
        onest: ["Onest", "sans-serif"],
      },
    },
  },
  plugins: [],
};
