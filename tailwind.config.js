/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./public/**/*.{html,js}"],
    theme: {
        container: {
            center: true,
        },
        extend: {
            fontFamily: {
                poppins: ["Poppins"],
            },
            colors: {
                dsr: "#e384ff",
                ylw: "#f4bc2b",
            },
            screens: {
                "2xl": "1320px",
            },
        },
        plugins: [],
    },
};
