/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      tablet: { max: "1279.99px" },
      mobile: { max: "834.99px" },
      xs: { max: "375.99px" },
    },

    extend: {
      fontFamily: {
        spaceMono: ["Space Mono", "sans-serif"],
        workSans: ["Work Sans", "sans-serif"],
      },
      container: {
        padding: {
          DEFAULT: "80px 115px",
          tablet: "80px 72px",
          mobile: "40px 30px",
        },
      },
    },
  },
  plugins: [],
};
