/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{html,js,jsx,ts,tsx}",
    ],
    theme: {
        fontFamily: {
            sans: 'Roboto Mono, monospace',
        },

        extend: {
            fontSize: {
                huge: ['80rem', { lineHeight: '1' }],
            },
            height: {
                screen: '100dvh',
            },
        },
    },
    plugins: [],
}