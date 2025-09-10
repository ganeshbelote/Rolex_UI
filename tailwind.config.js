/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{ts,tsx}", // your components
  ],
  theme: {
    extend: {},
  },
  corePlugins: {
    preflight: true, // reset styles
  },
  plugins: [],
};
