/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                blue: {
                    25: '#F5FAFF',
                    100: '#D1E9FF',
                    500: '#2E90FA',
                    600: '#1570EF',
                    700: '#175CD3',
                    900: '#194185',
                },
            },
            backgroundImage: {
                header: 'linear-gradient(90deg, #2E90FA 0%, #175CD3 100%)',
            },
            boxShadow: {
                header: '8px 10px 16px 0px rgba(0, 0, 0, 0.2)',
            },
        },
    },
    plugins: [],
};
