/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#A7EBF2',
        cloud: '#011C40',
        line: '#023859',
        brand: '#54ACBF',
        coral: '#26658C',
        dark: '#011C40',
        darkCard: '#023859',
        darkBorder: '#26658C'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        soft: '0 20px 70px rgba(7, 17, 31, 0.12)',
        lift: '0 28px 90px rgba(7, 17, 31, 0.18)'
      }
    }
  },
  plugins: []
};
