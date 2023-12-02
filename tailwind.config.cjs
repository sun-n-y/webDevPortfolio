/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-grey': '#121212',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
