/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx}'],
    theme: {
        colors: {
            light: '#FFFFFF',
            primary: {
                300: '#FFCC21',
                400: '#FF963C',
                500: '#EA6C00',
            },
            secondary: {
                300: '#8FE9D0',
            },
            dark: {
                500: '#414141',
                600: '#2E2E2E',
            },
            gray: {
                400: '#777777',
            },
        },
        fontFamily: {
            'inter-light': ['inter-light', 'sans-serif'],
            'inter-medium': ['inter-medium', 'sans-serif'],
            'inter-regular': ['inter-regular', 'sans-serif'],
            'noto-light': ['noto-light', 'sans-serif'],
            'noto-medium': ['noto-medium', 'sans-serif'],
            'noto-regular': ['noto-regular', 'sans-serif'],
        },
    },
    plugins: [require('@tailwindcss/line-clamp')],
}
