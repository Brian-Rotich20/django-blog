/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./templates/**/*.html",
      "./templates/*.html",
      "./*/templates/**/*.html",
      "./static/**/*.js",
      "./node_modules/flowbite/**/*.js"
    ],
    theme: {
      extend: {},
    },
    plugins: [
      require('flowbite/plugin')
    ],
  }