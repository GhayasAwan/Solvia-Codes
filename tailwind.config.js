/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#07111F',
        cloud: '#F5F7FA',
        line: '#DDE5EE',
        brand: '#0EA5A3',
        coral: '#D97706'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Manrope', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        soft: '0 20px 70px rgba(7, 17, 31, 0.12)',
        lift: '0 28px 90px rgba(7, 17, 31, 0.18)'
      }
    }
  },
  plugins: []
};
