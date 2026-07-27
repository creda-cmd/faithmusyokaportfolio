/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#0B1520',
        'bg-secondary': '#12202D',
        'primary': '#1EA7F2',
        'secondary': '#18C8E8',
        'hover': '#3BB8FF',
        'text-white': '#F6F7F9',
        'text-gray': '#A8B0BA',
        'border': '#223344',
      },
    },
  },
  plugins: [],
}
