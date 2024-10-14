/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        Primary: "#222831",
        Secondery: "#393E46",
        Point: "#00ADB5",
        Nomal: "#EEEEEE",
      },
      backgroundImage: {
        main: 'url("/Untitled (1).svg")',
      },
    },
  },
  plugins: [],
};
