/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    100: '#e4d9ff',
                    200: '#c9b3ff',
                    300: '#af8eff',
                    400: '#9468ff',
                    500: '#7a42ff',  // primary purple
                    600: '#6235cc',
                    700: '#492899',
                    800: '#311a66',
                    900: '#180d33',
                },
                secondary: {
                    100: '#d9f7ff',
                    200: '#b3eeff',
                    300: '#8ee6ff',
                    400: '#68ddff',
                    500: '#42d5ff',  // secondary blue
                    600: '#35aacc',
                    700: '#288099',
                    800: '#1a5566',
                    900: '#0d2b33',
                },
                cyberpunk: {
                    dark: '#090013',  // very dark purple for backgrounds
                    neon: '#f637ec',  // bright pink/magenta for highlights
                    accent: '#00f6ff', // cyan for accents
                    warning: '#ffde03', // yellow for warnings/highlights
                }
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'grid-pattern': 'linear-gradient(to right, rgba(122, 66, 255, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(122, 66, 255, 0.1) 1px, transparent 1px)',
                'cyber-grid': 'linear-gradient(to right, rgba(66, 213, 255, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(66, 213, 255, 0.1) 1px, transparent 1px)',
            },
            keyframes: {
                glitch: {
                    '0%, 100%': { transform: 'translate(0)' },
                    '20%': { transform: 'translate(-2px, 2px)' },
                    '40%': { transform: 'translate(-2px, -2px)' },
                    '60%': { transform: 'translate(2px, 2px)' },
                    '80%': { transform: 'translate(2px, -2px)' },
                },
                typing: {
                    '0%': { width: '0%' },
                    '100%': { width: '100%' },
                },
                blink: {
                    '0%, 100%': { borderColor: 'transparent' },
                    '50%': { borderColor: 'currentColor' },
                }
            },
            animation: {
                glitch: 'glitch 0.3s ease-in-out infinite',
                typing: 'typing 3.5s steps(40, end)',
                cursor: 'blink 1s step-end infinite',
            },
            boxShadow: {
                'neon': '0 0 5px theme("colors.secondary.500"), 0 0 20px theme("colors.secondary.500")',
                'neon-lg': '0 0 10px theme("colors.secondary.500"), 0 0 30px theme("colors.secondary.500")',
                'purple-neon': '0 0 5px theme("colors.primary.500"), 0 0 20px theme("colors.primary.500")',
            },
        },
    },
    plugins: [],
}