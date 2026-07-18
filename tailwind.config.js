/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // === New Core Palette ===
        navy: '#2F4156',
        teal: '#567C8D',
        beige: '#F5EFEB',
        skyblue: '#C8D9E6',
        purewhite: '#FFFFFF',

        // === Semantic Aliases ===
        primary: '#2F4156',       // Navy — headings, dark bg, footer
        accent: '#567C8D',        // Teal — buttons, links, accents
        surface: '#F5EFEB',       // Beige — page bg, light surfaces
        muted: '#C8D9E6',         // Sky Blue — borders, subtle bg
        light: '#FFFFFF',         // White — cards, clean surfaces

        // === Extended Navy shades ===
        'navy-50': '#E8ECF0',
        'navy-100': '#D1D9E1',
        'navy-200': '#A3B3C3',
        'navy-300': '#7690A5',
        'navy-400': '#486D87',
        'navy-500': '#2F4156',
        'navy-600': '#263545',
        'navy-700': '#1C2834',
        'navy-800': '#131C22',
        'navy-900': '#090E11',

        // === Extended Teal shades ===
        'teal-50': '#EDF2F4',
        'teal-100': '#DBE5E9',
        'teal-200': '#B7CBD3',
        'teal-300': '#93B1BD',
        'teal-400': '#6F97A7',
        'teal-500': '#567C8D',
        'teal-600': '#456371',
        'teal-700': '#344A55',
        'teal-800': '#223239',
        'teal-900': '#11191C',

        // === Extended Beige shades ===
        'beige-50': '#FDFCFB',
        'beige-100': '#FAF8F6',
        'beige-200': '#F5EFEB',
        'beige-300': '#EDE4DD',
        'beige-400': '#E0D3C9',
        'beige-500': '#D3C2B5',

        // === Extended Sky Blue shades ===
        'skyblue-50': '#F4F8FB',
        'skyblue-100': '#E9F1F6',
        'skyblue-200': '#D4E3ED',
        'skyblue-300': '#C8D9E6',
        'skyblue-400': '#A8C4D6',
        'skyblue-500': '#88AFC6',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        soft: '0 20px 70px rgba(47, 65, 86, 0.10)',
        lift: '0 28px 90px rgba(47, 65, 86, 0.16)',
        card: '0 4px 24px rgba(47, 65, 86, 0.08)',
        glow: '0 0 30px rgba(86, 124, 141, 0.15)',
      }
    }
  },
  plugins: []
};
