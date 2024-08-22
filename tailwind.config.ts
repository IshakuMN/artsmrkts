import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        customHeaderFont: "#0C1227",
        customBlackOne: "#272828",
        customBlackThree: "#434650",
        customBlackFour: "#030A0B",
        customBlackFive: "#2B334E",
        customGrey: "#E8E8E9",
        customGreyTwo: "#F6F6F6",
        customGreyThree: "#939393",
        customGreyFour: "#FAFAFB",
        customGreyFive: "#F6F6F6",
        customGreySix: "#E7E7E7",
        customGreySeven: "#707070",
        customGreyEight: "#373737",
        customGreyNine: "#A3A3A3",
        customBlue: "#182654",
        customBlueTwo: "#001240",
        customBlueThree: "#060C22",
        customBlueFon: "#0F2777",
        customBlueFour: "#041652",
        customBlueFive: "#23293F",
        customRedText: "#851000",
        customOrange: "#DC4016",
        customOrangeTwo: "#FF5E24",
        customOrangeThree: "#AF2600",
        customOrangeFour: "#FFCEBD",
        customOrangeFive: "#851000",
        customOrangeSix: "#F15C27",
        customOrangeSeven: "#F36A36",
        customOrangeEight: "#F36934",
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
