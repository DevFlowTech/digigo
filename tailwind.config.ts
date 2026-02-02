import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                // Brand Colors
                brand: {
                    yellow: '#F7C600',
                    orange: '#F7931E',
                    red: '#E53935',
                    pink: '#C2185B',
                    purple: '#6A1B9A',
                    dark: '#2B2B2B',
                },
                // Semantic Color System
                primary: {
                    50: '#FEF9E7',
                    100: '#FDF3CF',
                    200: '#FBE79F',
                    300: '#F9DB6F',
                    400: '#F8CF3F',
                    500: '#F7C600', // Main yellow
                    600: '#C69E00',
                    700: '#947700',
                    800: '#634F00',
                    900: '#312800',
                },
                secondary: {
                    50: '#FFF3E0',
                    100: '#FFE7C1',
                    200: '#FFCF83',
                    300: '#FFB745',
                    400: '#FF9F07',
                    500: '#F7931E', // Main orange
                    600: '#C67618',
                    700: '#945812',
                    800: '#633B0C',
                    900: '#311D06',
                },
                accent: {
                    50: '#FCE4EC',
                    100: '#F8BBD0',
                    200: '#F48FB1',
                    300: '#F06292',
                    400: '#EC407A',
                    500: '#C2185B', // Main pink
                    600: '#AD1457',
                    700: '#880E4F',
                    800: '#6D0B3F',
                    900: '#4A0728',
                },
                danger: {
                    50: '#FFEBEE',
                    100: '#FFCDD2',
                    200: '#EF9A9A',
                    300: '#E57373',
                    400: '#EF5350',
                    500: '#E53935', // Main red
                    600: '#D32F2F',
                    700: '#C62828',
                    800: '#B71C1C',
                    900: '#8B1414',
                },
                deep: {
                    50: '#F3E5F5',
                    100: '#E1BEE7',
                    200: '#CE93D8',
                    300: '#BA68C8',
                    400: '#AB47BC',
                    500: '#6A1B9A', // Main purple
                    600: '#8E24AA',
                    700: '#7B1FA2',
                    800: '#6A1B9A',
                    900: '#4A148C',
                },
            },
            fontFamily: {
                sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
                display: ['var(--font-outfit)', 'system-ui', 'sans-serif'],
            },
            fontSize: {
                'display-lg': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
                'display-md': ['3.5rem', { lineHeight: '1.15', letterSpacing: '-0.02em', fontWeight: '700' }],
                'display-sm': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '600' }],
                'heading-xl': ['2rem', { lineHeight: '1.3', letterSpacing: '-0.01em', fontWeight: '600' }],
                'heading-lg': ['1.75rem', { lineHeight: '1.35', fontWeight: '600' }],
                'heading-md': ['1.5rem', { lineHeight: '1.4', fontWeight: '600' }],
                'heading-sm': ['1.25rem', { lineHeight: '1.45', fontWeight: '600' }],
            },
            animation: {
                'fade-in': 'fadeIn 0.6s ease-out',
                'fade-in-up': 'fadeInUp 0.6s ease-out',
                'fade-in-down': 'fadeInDown 0.6s ease-out',
                'slide-in-left': 'slideInLeft 0.5s ease-out',
                'slide-in-right': 'slideInRight 0.5s ease-out',
                'scale-in': 'scaleIn 0.4s ease-out',
                'float': 'float 3s ease-in-out infinite',
                'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                fadeInDown: {
                    '0%': { opacity: '0', transform: 'translateY(-20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                slideInLeft: {
                    '0%': { opacity: '0', transform: 'translateX(-30px)' },
                    '100%': { opacity: '1', transform: 'translateX(0)' },
                },
                slideInRight: {
                    '0%': { opacity: '0', transform: 'translateX(30px)' },
                    '100%': { opacity: '1', transform: 'translateX(0)' },
                },
                scaleIn: {
                    '0%': { opacity: '0', transform: 'scale(0.95)' },
                    '100%': { opacity: '1', transform: 'scale(1)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-brand': 'linear-gradient(135deg, #F7C600 0%, #F7931E 50%, #E53935 100%)',
                'gradient-brand-subtle': 'linear-gradient(135deg, #FEF9E7 0%, #FFF3E0 100%)',
            },
            boxShadow: {
                'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
                'medium': '0 4px 20px -2px rgba(0, 0, 0, 0.1), 0 12px 25px -5px rgba(0, 0, 0, 0.08)',
                'strong': '0 10px 40px -5px rgba(0, 0, 0, 0.15), 0 20px 50px -10px rgba(0, 0, 0, 0.12)',
                'brand': '0 10px 30px -5px rgba(247, 198, 0, 0.3)',
            },
            transitionDuration: {
                '400': '400ms',
            },
        },
    },
    plugins: [],
};

export default config;
