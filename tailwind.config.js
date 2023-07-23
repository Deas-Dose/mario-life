/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      boxShadow: {
        'shadow-mario': '1px 1px 5px rbga(0,0,0, 0.05);'
      }
    },
  },
  plugins: [],
};
