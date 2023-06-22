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
      },
      fontSize: {
        10: "10px",
        8: "8px",
      },
      top: {
        66: "66px",
      },
    },
  },
  plugins: [],
};
