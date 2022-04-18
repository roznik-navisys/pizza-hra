module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                basic: ["Montserrat", "Arial", "Helvetica", "sans-serif"],
                moreno: ["Moreno", "Arial", "Helvetica", "sans-serif"],
            },
            colors: {
                zsi: {
                    500: '#FF272D',
                    600: '#B60115',
                    700: '#89010D',
                }
            },
            screens: {
                'xs': '360px',
            },
        },
    },
    plugins: [],
}
