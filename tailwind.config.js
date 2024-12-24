module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary1: "#08203D",
        primary2: "#92CD55",
        primary3: "#ffff",
      },
      textStrokeWidth: {
        DEFAULT: "1px",
        sm: "0.5px",
        lg: "2px",
      },
      textStrokeColor: {
        DEFAULT: "currentColor",
        white: "#ffffff",
        black: "#000000",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".text-stroke-sm": {
          "-webkit-text-stroke-width": "1px",
        },
        ".text-stroke-md": {
          "-webkit-text-stroke-width": "2px",
        },
        ".text-stroke-lg": {
          "-webkit-text-stroke-width": "3px",
        },
        ".text-stroke-black": {
          "-webkit-text-stroke-color": "#000000",
        },
        ".text-stroke-white": {
          "-webkit-text-stroke-color": "#ffffff",
        },
      });
    },
    require("flowbite/plugin"),
  ],
};
