/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        backgroundColor: { primary: '#5cdb95', secondary: '#8ee4af' },
        primary: '#edf5e1',
        accent: '#05386b',
      },
    },
  },
  plugins: [],
};
