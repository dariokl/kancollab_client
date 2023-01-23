/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: ["bg-red-200", "bg-red-300", "bg-red-400"],
  theme: {
    extend: {},
  },
  plugins: [],
};
