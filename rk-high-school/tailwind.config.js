/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#6366F1', // Indigo (Brand Compliance)
                secondary: '#F59E0B', // Golden Yellow
                background: '#F8FAFC', // Light Gray
                textDark: '#0F172A',
                accent: '#10B981', // Green
            },
        },
    },
    plugins: [],
}
