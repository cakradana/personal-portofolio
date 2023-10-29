const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const primaryColor = {
    "50": "#fef2f2",
    "100": "#fde4e3",
    "200": "#fdcccb",
    "300": "#faa9a7",
    "400": "#f47572",
    "500": "#ea4d49",
    "600": "#d72f2b",
    "700": "#b52320",
    "800": "#95221f",
    "900": "#7c2220",
    "950": "#430d0c",
};
/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: [],
    theme: {
        extend: {
            typography: (theme: any) => ({
                DEFAULT: {
                    css: {
                        pre: {
                            color: `var(--tw-code-color, ${primaryColor["950"]})`,
                            background: `var(--tw-code-bg, ${colors.neutral["100"]})`,
                            borderRadius: "2rem",
                        },
                    },
                },
            }),
            fontFamily: {
                sans: ["Inter", "-apple-system", ...defaultTheme.fontFamily.sans],
                display: ["Lora", "-apple-system", ...defaultTheme.fontFamily.sans],
                mono: ["Inconsolata", ...defaultTheme.fontFamily.mono],
            },
            colors: {
                neutral: {
                    50: "#E8EAE7",
                },
                primary: primaryColor,
            },
            keyframes: {
                typing: {
                    "0%": {
                        width: "0%",
                        visibility: "hidden",
                    },
                    "100%": {
                        width: "100%",
                    },
                },
                blink: {
                    "50%": {
                        borderColor: "transparent",
                    },
                    "100%": {
                        borderColor: "white",
                    },
                },
                wave: {
                    "0%": { transform: "rotate(0)" },
                    "10%": { transform: "rotate(14deg)" },
                    "20%": { transform: "rotate(-8deg)" },
                    "30%": { transform: "rotate(14deg)" },
                    "40%": { transform: "rotate(-4deg)" },
                    "50%": { transform: "rotate(10deg)" },
                    "60%": { transform: "rotate(0)" },
                    "to": { transform: "rotate(0)" },
                },
            },
            animation: {
                wave: "wave 2s infinite",
                typing: "typing 2s steps(20) infinite alternate, blink .7s infinite",
            },
        },
    },
    plugins: [require("@tailwindcss/typography")],
};
