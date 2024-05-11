/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
     backgroundImage:{
      "bang":"url('./assets/bgr.jpg')"
     }
  },
  plugins: [],
}