/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      borderWidth: {
        '1': '1px'
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      tahiti: {
        100: "#cffafe",
        200: "#a5f3fc",
        300: "#67e8f9",
        400: "#22d3ee",
        500: "#06b6d4",
        600: "#0891b2",
        700: "#0e7490",
        800: "#155e75",
        900: "#164e63",
      },
      mainColor: "#004a7d",
      darkMain: "#023364",
      lightMain: "#f3f3f5",
      mainRed: "#ed2324",
      mainGray: "#626262",
      lightBlue: "#005488",
      Gray: "#4c4c4e",
      mainGreen: "#00873c"
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
  
};
