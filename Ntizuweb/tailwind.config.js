/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "custom-linear":
          "linear-gradient(140deg, rgb(0, 97, 64) 28.95%, rgb(116, 156, 7) 100%, rgba(116, 156, 7, 0.47) 98.86%)",
      },

      boxShadow: {
        custom: "3px 3px 8px rgba(0, 0, 0, 1)",
      },

      colors: {
        primary: "#003E24",
        secondary: "#749d08",
        primaryhover: "#006140",
        googlesign: "#4383F3",
        googlesignhover: "#0058F3",
        bordercard: "#E9EEE9",
        primaryOpacity: "#31C866",
        warningError: "#FD0808",
        outlineInput: "#0060DF",
      },

      fontFamily: {
        montserrat: ["Montserrat"],
        azonix: ["azonix"],
      },
    },
  },
  plugins: [],
};
