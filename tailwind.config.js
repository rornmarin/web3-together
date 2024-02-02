/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 5s linear infinite',
        'pulse-slow': 'pulse 20s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      colors: {
        'custom-yellow': '#F2A93B',
      }
    },
  },
  plugins: [],
};
