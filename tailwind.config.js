/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#b596ff",

          "secondary": "#60eacc",

          "accent": "#f7cf6a",

          "neutral": "#17191C",

          "base-100": "#F0F3F5",

          "info": "#A9C5EA",

          "success": "#6DEED2",

          "warning": "#F5C661",

          "error": "#E6707A",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
