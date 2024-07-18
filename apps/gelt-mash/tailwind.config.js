/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
    colors: {},
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: 'rgb(74 92 146)',
                    content: 'rgb(255 255 255)',
                    container: {
                        DEFAULT: 'rgb(219 225 255)',
                        content: 'rgb(0 24 74)',
                    },
                    fixed: {
                        DEFAULT: 'rgb(219 225 255)',
                        content: 'rgb(0 24 74)',
                        dim: 'rgb(179 197 255)',
                        'variant-content': 'rgb(50 69 120)',
                    },
                    inverse: 'rgb(179 197 255)',
                },
                secondary: {
                    DEFAULT: 'rgb(88 94 114)',
                    content: 'rgb(255 255 255)',
                    container: {
                        DEFAULT: 'rgb(221 225 249)',
                        content: 'rgb(21 27 44)',
                    },
                    fixed: {
                        DEFAULT: 'rgb(221 225 249)',
                        content: 'rgb(21 27 44)',
                        dim: 'rgb(193 198 221)',
                        'variant-content': 'rgb(65 70 89)',
                    },
                },
                tertiary: {
                    DEFAULT: 'rgb(116 84 113)',
                    content: 'rgb(255 255 255)',
                    container: {
                        DEFAULT: 'rgb(255 214 248)',
                        content: 'rgb(43 18 43)',
                    },
                    fixed: {
                        DEFAULT: 'rgb(255 214 248)',
                        content: 'rgb(43 18 43)',
                        dim: 'rgb(226 187 220)',
                        'variant-content': 'rgb(90 61 88)',
                    },
                },
                error: {
                    DEFAULT: 'rgb(186 26 26)',
                    content: 'rgb(255 255 255)',
                    container: {
                        DEFAULT: 'rgb(255 218 214)',
                        content: 'rgb(65 0 2)',
                    },
                },
                outline: {
                    DEFAULT: 'rgb(117 118 128)',
                    variant: 'rgb(197 198 208)',
                },
                surface: {
                    DEFAULT: 'rgb(250 248 255)',
                    content: 'rgb(26 27 33)',
                    dim: 'rgb(218 217 224)',
                    bright: 'rgb(250 248 255)',
                    tint: 'rgb(74 92 146)',
                    variant: {
                        DEFAULT: 'rgb(226 226 236)',
                        content: 'rgb(69 70 79)',
                    },
                    container: {
                        DEFAULT: 'rgb(238 237 244)',
                        lowest: 'rgb(255 255 255)',
                        low: 'rgb(244 243 250)',
                        high: 'rgb(232 231 239)',
                        highest: 'rgb(227 226 233)',
                    },
                    inverse: {
                        DEFAULT: 'rgb(47 48 54)',
                        content: 'rgb(241 240 247)',
                    },
                },
                scrim: 'rgb(0 0 0)',
                shadow: {
                    DEFAULT: 'rgb(0 0 0)',
                    header: '#667085',
                },
                background: {
                    DEFAULT: 'rgb(250 248 255)',
                    content: 'rgb(26 27 33)',
                },
                blue: {
                    25: '#F5FAFF',
                    100: '#D1E9FF',
                    500: '#2E90FA',
                    600: '#1570EF',
                    700: '#175CD3',
                    900: '#194185',
                },
                gray: {
                    25: '#FCFCFD',
                    200: '#EAECF0',
                    300: '#D0D5DD',
                    500: '#667085',
                    600: '#475467',
                    700: '#344054',
                    900: '#101828',
                },
            },
            backgroundImage: {
                header: 'linear-gradient(90deg, #2E90FA 0%, #175CD3 100%)',
            },
        },
    },
    plugins: [],
};
