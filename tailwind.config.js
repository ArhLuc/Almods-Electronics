/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    // This line tells Tailwind to scan ALL files inside the src directory
    // with .js, .ts, .jsx, or .tsx extensions.
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {
      // Custom colors are handled via the CustomStyles.js component injection, 
      // but if you wanted to define standard colors here, this is where they'd go.
    },
  },
  plugins: [],
}
