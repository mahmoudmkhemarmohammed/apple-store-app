/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        heightNav: "calc(100vh - 85px)",
      },
      minHeight: {
        heightLayout: "calc(100vh - 85px)",
      },
      gridTemplateColumns: {
        gridListCategory: "repeat(auto-fill, minmax(300px, 1fr))",
        gridColsFooter: "repeat(auto-fill, minmax(270px, 1fr))",
      },
    },
  },
  plugins: [],
};
