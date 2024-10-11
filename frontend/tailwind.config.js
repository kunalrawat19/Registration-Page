/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('https://res.cloudinary.com/ddsqjzrow/image/upload/v1728656718/2588_ybxnzl.jpg')",
      },
    },
  },
  plugins: [],
}