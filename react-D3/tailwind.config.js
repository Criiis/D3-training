/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      width: {
        homepageTemplate: "calc(100% - 350px - 1rem)",
      },
      boxShadow: {
        simple: "0px 7px 8px -6px rgba(0,0,0,0.37);",
      },
      transitionProperty: {
        bg: "background-color",
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
