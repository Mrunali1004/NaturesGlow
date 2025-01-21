/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    colors: {
      white: "#FFFFFF",
      light: "#333333", // Custom light shade of primary Font color
      DEFAULT: "#0284c7", // Default primary color
      dark: "#0369a1", // Dark shade of primary
      customButton: "rgb(51, 51, 51)",
      customButtonH: "#000000",
      customButtonBorder: "rgb(223,224,225)",
      secondary: "#f59e0b", // Secondary color
      accent: "#10b981", // Accent color
      danger: "#ef4444", // Danger color
    },
  },
  plugins: [],
};
