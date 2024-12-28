/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        solution: {
          primary: '#3d84ff',
          secondary: '#ff3d7f',
          background: {
            start: '#1a1a1a',
            end: '#2d2d2d'
          },
          text: {
            primary: '#ffffff',
            body: '#e0e0e0'
          },
          link: {
            DEFAULT: '#4a9eff',
            hover: '#6cb2ff'
          }
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'gradient': 'gradientFlow 30s ease infinite',
      },
      boxShadow: {
        'solution': '0 4px 14px 0 rgba(0, 0, 0, 0.2)',
      },
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};