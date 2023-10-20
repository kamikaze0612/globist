/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-blue": "hsl(209, 23%, 22%)",
        "primary-light-blue": "hsl(200, 15%, 8%)",
      },
      backgroundImage: {
        "hero-img":
          "linear-gradient(to right, rgba(233,236,239,0.7), rgba(233,236,239,0.7)), url('./hero-back.jpg')",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
