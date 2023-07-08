/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/bubbles.svg')",
      }
    }
  },
  darkMode: 'class',
  plugins: []
};