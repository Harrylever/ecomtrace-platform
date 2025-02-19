/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        raleway: ["Raleway", "serif"],
      },
      colors: {
        "color-text-primary": "hsl(var(--color-text-primary))",
        "color-text-secondary": "hsl(var(--color-text-secondary))",
      },
    },
  },
  plugins: [],
}
