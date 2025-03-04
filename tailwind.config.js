function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#101012",
        secondary: "#151517",
        terceary: "#18181a",
        buttonColor: "#262f4c",
        colorButton: "#4269de",
        listColor: "#1b1b1d",
      },
      opacity: {
        1: "0.01",
        2: "0.02",
        3: "0.03",
        4: "0.04",
      },
      borderRadius: {
        redondo: "2.5rem",
      },
      borderColor: {
        primary: "#1c1c1e",
        secondary: "#1e1e20",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".border": {
          borderWidth: "0.063rem",
          borderStyle: "solid",
        },
      };

      addUtilities(newUtilities, {
        variants: ["responsive"],
      });
    },
  ],
};
