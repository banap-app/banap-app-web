/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Montserrat", "sans-serif"],
            },
            colors: {
                banapLight: "#1EA81E",
                banapDark: "#1A5D1A"
            }
        },
    },
    plugins: [],
}
