/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom-shadow': '0 5px 15px rgba(0, 0, 0, 0.7)',
      },
      
      
    },
  },
  plugins: [],
}

