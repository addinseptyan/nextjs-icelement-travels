/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: "#2382D7",
        secondary: "#0FA3FE",
        thirtiary: "#191E3B",
        accent: "#F87ED9",
        "neutral-white": "#ffffff",
        "neutral-black": "#2E2E2E",
      },
    },
  },
  plugins: [],
};
