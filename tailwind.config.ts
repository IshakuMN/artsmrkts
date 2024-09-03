import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        customHeaderFont: "#0C1227",
        customBlackOne: "#272828",
        customBlackThree: "#434650",
        customBlackFour: "#030A0B",
        customBlackFive: "#2B334E",
        customBlackSix: "#191C30",
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
        customOrangeNine:  "#EF8A66",
        customGreyOne: "#F3F5FC",
        customWhiteOne: "#FDFDFF",
        customGreyTen: "#F4F4F4",
        customGreyEleven: "#524D49",
        customGreyTwelve: "#E0E0E0",
        customGreyThirteen: "#EBEBEB",
        customGreyFourteen: "#1B1F3B",
        customGreyFifteen: "#C1C1C1",
        customBlueSix: "#2F4DAE",
        customBlueSeven: "#F5F8FF",
        customGreenOne: "#05A528",
        customGreenTwo: "#E3FEE9",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
