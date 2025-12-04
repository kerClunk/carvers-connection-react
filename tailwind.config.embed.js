/** @type {import('tailwindcss').Config} */
export default {
  // Only scan the embed files
  content: [
    "./src/embed/**/*.{js,ts,jsx,tsx}",
  ],

  // Prefix all classes with 'cc-' to avoid conflicts with WordPress themes
  prefix: 'cc-',

  // Disable preflight (CSS reset) to avoid overriding WordPress styles
  corePlugins: {
    preflight: false,
  },

  // Make all utilities more specific by scoping to the header root
  important: '#cc-header-root',

  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#1A1A2E',
          gray: '#F5F5F7',
          accent: '#FF4500', // Burnt Orange
          secondary: '#00A8E8', // Electric Blue
          text: '#2D3436',
          muted: '#636E72'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Oswald', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
