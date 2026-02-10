/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        valentine: {
          pink: '#FFB6C1',
          rose: '#FF69B4',
          red: '#FF1493',
          light: '#FFF0F5',
          dark: '#C71585',
        }
      },
      fontFamily: {
        'pacifico': ['Pacifico', 'cursive'],
        'poppins': ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
