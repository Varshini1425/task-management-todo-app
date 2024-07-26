/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#1D4ED8', // Custom blue color
        'secondary': '#6D28D9', // Custom purple color
        'accent': '#F59E0B', // Custom yellow color
        'background': '#F9FAFB', // Light gray background
        'card': '#FFFFFF', // White card background
        'text-primary': '#111827', // Dark text color
        'text-secondary': '#6B7280', // Gray text color
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Custom font
      },
      spacing: {
        '128': '32rem', // Custom spacing
      },
    },
  },
  plugins: [],
}

