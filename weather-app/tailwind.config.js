// tailwind.config.js

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand': {
          'green': '#22c55e', // Equivalent to Tailwind's green-500
          'green-dark': '#16a34a', // Equivalent to green-600 for hover
        },
        'accent': {
          'blue': '#dbeafe',    // The light blue for the hero icon bg
          'yellow': '#facc15',  // The yellow for the sun icon
        },
      },
    },
  },
  plugins: [],
}