/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: [
    "border-l-orange-500/50",
    "border-l-gray-500/50",
    "border-l-green-500/50",
    "bg-gray-100",
    "bg-orange-100",
    "bg-green-100",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
