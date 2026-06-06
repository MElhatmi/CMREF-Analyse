/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        math: {
          light: '#f8fafc',
          accent: '#3b82f6',
          dark: '#1e293b',
        }
      }
    },
  },
  plugins: [],
}
