/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  safelist: [
    {
      pattern: /(from|via|to)-(red|blue|green|yellow|purple|pink|indigo|teal)-(100|200|300|400|500|600|700|800|900)/,
    },
  ],
  plugins: [],
}
