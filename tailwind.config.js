/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./App.tsx"
    ],
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
