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
        bugColor: "#A7B723",
        darkColor: "#75574C",
        dragonColor: "#6F35FC",
        electricColor: "#F9CF30",
        fairyColor: "#E69EAC",
        fightingColor: "#C12239",
        fireColor: "#F57D31",
        flyingColor: "#A891EC",
        ghostColor: "#70559B",
        normalColor: "#AAA67F",
        grassColor: "#74CB48",
        groundColor: "#DEC16B",
        iceColor: "#9AD6DF",
        poisonColor: "#A43E9E",
        psychicColor: "#FB5584",
        rockColor: "#B69E31",
        steelColor: "#B7B9D0",
        waterColor: "#6493EB",
      },
      width: {
        360: "360px",
      },
    },
  },
  plugins: [],
};
