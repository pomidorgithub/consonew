/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem',
      },
      colors: {
        primary: {
          light: '#ffffff',
          dark: '#1a1a1a',
        },
        secondary: {
          light: '#f3f4f6',
          dark: '#2d2d2d',
          400: '#60A5FA', // Можете заменить на ваши цвета
          600: '#2563EB',
        },
      },
      fontFamily: {
        sans: ['Commissioner', 'sans-serif'],
        heading: ['"Tenor Sans"', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'fade-out': 'fadeOut 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [require('daisyui')],
  // Настройки daisyUI
  daisyui: {
    themes: [
      {
        light: {
          ...require('daisyui/src/theming/themes')['light'],
          primary: '#000000',
          secondary: '#666666',
          accent: '#37CDBE',
          neutral: '#3D4451',
          'base-100': '#FFFFFF',
        },
        dark: {
          ...require('daisyui/src/theming/themes')['dark'],
          primary: '#FFFFFF',
          secondary: '#A3A3A3',
          accent: '#37CDBE',
          neutral: '#3D4451',
          'base-100': '#1a1a1a',
        },
      },
    ],
    darkTheme: 'dark',
    base: true,
    styled: true,
    utils: true,
    prefix: '',
    logs: false,
  },
}
