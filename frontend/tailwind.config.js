/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'bg-primary': '#f4f4f8', // Soft Lilac White
                'text-primary': '#4a4e69', // Dark Violet Navy
                'accent-primary': '#c3b9e3', // Pastel Violet
                'accent-secondary': '#eab8e3', // Pastel Pink-Violet
                'card-bg': '#ffffff',
                'card-border': '#d1c4e9', // Light Violet
            },
            fontFamily: {
                poppins: ['Poppins', 'sans-serif'],
                serif: ['Playfair Display', 'serif'],
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                }
            }
        },
    },
    plugins: [],
}
