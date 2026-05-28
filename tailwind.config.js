/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#05050a", // Ultra Deep Black
        surface: {
          DEFAULT: "#0f1117", // Deep Charcoal
          hover: "#141922", 
        },
        border: "#1a1f2e", // Subtle Dark Gray
        accent: {
          DEFAULT: "#0ea5e9", // Sky Blue
          bright: "#7dd3fc", // Light Sky Blue for highlights
          glow: "rgba(14, 165, 233, 0.3)",
        },
        secondary: {
          DEFAULT: "#f59e0b", // Warm Amber accent
          light: "#fcd34d", // Light Amber
        },
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}
