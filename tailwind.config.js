/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'bangers': ['Bangers', 'cursive'],
        'ceviche': ['Ceviche One', 'cursive'],
        'delius': ['Delius', 'cursive'],
        'gorditas': ['Gorditas', 'sans-serif'],
        'oregano': ['Oregano', 'cursive'],
        'Mouse': ['Mouse Memoirs', 'cursive'],
        'ribeye': ["Ribeye", 'serif'],
        'marker': ["Permanent Marker", "cursive"]
      }
    },
  },
  plugins: [],
}
