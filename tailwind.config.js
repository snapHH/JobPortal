/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary : '#1c1c22',
        accent : {
          DEFAULT: '#00ff99',
          hover : '#00e187'
        }
        
      }
    },
  },
  plugins: [],
}

