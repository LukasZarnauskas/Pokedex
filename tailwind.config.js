/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        primaryColor: "#DC0A2D",
        bug: "#A7B723",
        dark: "#75574C",
        dragon: "#6F35FC",
        electric: "#F9CF30",
        fairy: "#E69EAC",
        fighting: "#C12239",
        fire: "#F57D31",
        flying: "#A891EC",
        ghost: "#70559B",
        normal: "#AAA67F",
        grass: "#74CB48",
        ground: "#DEC16B",
        ice: "#9AD6DF",
        poison: "#A43E9E",
        psychic: "#FB5584",
        rock: "#B69E31",
        steel: "#B7B9D0",
        water: "#6493EB",
        grDark: "#212121",
        grMedium: "#666666",
        grLight: "#E0E0E0",
        grBackground: "#EFEFEF",
      },
      width: {
        360: "360px",
        280: "280px",
        104: "104px",
        72: "72px",
      },
      height: {
        72: "72px",
        524: "524px",
        648: "648px",
      },
      fontSize: {
        10: "10px",
        8: "8px",
      },
      inset: {
        60: "60px",
      },
      padding: { 9: "9px" },
    },
  },
  plugins: [],
};
