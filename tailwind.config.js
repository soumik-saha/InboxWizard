/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "dropdown-bg-border": "var(--dropdown-bg-border)",
        "variable-collection-grey-2": "var(--variable-collection-grey-2)",
        "variable-collection-table-BG": "var(--variable-collection-table-BG)",
        "variable-collection-table-BG-border": "var(--variable-collection-table-BG-border)",
      },
      fontFamily: {
        "12-regular": "var(--12-regular-font-family)",
      },
    },
  },
  plugins: [],
};
