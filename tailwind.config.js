/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#1EA81E",
                secondary: "#1A5D1A",
            },
            boxShadow: {
                sidebar: "0px 0px 10px rgba(0,0,0,0.25)",
                modal: "0px 0px 50px rgba(0,0,0,0.10)",
            },
        },
    },
    plugins: [],
}
